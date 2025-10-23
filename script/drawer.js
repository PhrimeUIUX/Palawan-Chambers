const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open');
const openBtn2 = document.getElementById('open-container');
const closeBtn = document.getElementById('close');
const contactBtn = document.getElementById('contactbuttonmargin'); // 👈 added
const areaCities = document.querySelectorAll('.area-city');
const page = document.getElementById('page');
const missionVision = document.getElementById('mission-vision-container');

let activeCity = null;

openBtn.onclick = openDrawer;
openBtn2.onclick = openDrawer;
closeBtn.onclick = closeDrawer;
overlay.onclick = closeDrawer;

// 👇 open drawer when contact button is clicked
if (contactBtn) {
  contactBtn.addEventListener('click', openDrawer);
}

areaCities.forEach(city => {
  city.addEventListener('click', () => {
    // remove active from all
    areaCities.forEach(c => c.classList.remove('active'));

    // mark clicked one as active
    city.classList.add('active');
    activeCity = city;

    // get ID and set data-snippet dynamically
    const cityId = city.id;
    if (cityId) {
      const snippetPath = `datasnippets/${cityId}.html`;
      page.setAttribute('data-snippet', snippetPath);
      console.log(`Loading snippet: ${cityId}`);

      // 🧩 load snippet
      loadSnippet(page, snippetPath);

      // 👇 hide mission-vision when a city is clicked
      if (missionVision) {
        missionVision.style.display = 'none';
      }
    }

    closeDrawer();
  });
});

function openDrawer() {
  drawer.classList.add('active');
  overlay.classList.add('active');

  if (activeCity) {
    areaCities.forEach(c => c.classList.remove('active'));
    activeCity.classList.add('active');
  }
}

function closeDrawer() {
  drawer.classList.remove('active');
  overlay.classList.remove('active');
}

// 🧩 snippet loader
async function loadSnippet(container, file) {
  try {
    const res = await fetch(file + `?v=${Date.now()}`); // cache-bust
    if (!res.ok) throw new Error();
    const html = await res.text();
    container.innerHTML = html;

    // re-run <script> tags inside snippet
    container.querySelectorAll("script").forEach(oldScript => {
      const newScript = document.createElement("script");
      if (oldScript.src) newScript.src = oldScript.src;
      else newScript.textContent = oldScript.textContent;
      document.body.appendChild(newScript);
      oldScript.remove();
    });
  } catch {
    container.innerHTML = `<p style="color:#007bff;">Failed to load ${file.split('/').pop().replace('.html','')}</p>`;
  }
}
