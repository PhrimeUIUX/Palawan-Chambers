const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open');
const openBtn2 = document.getElementById('open-container');
const closeBtn = document.getElementById('close');
const areaCities = document.querySelectorAll('.area-city');

let activeCity = null; // stores currently active city element

openBtn.onclick = openDrawer;
openBtn2.onclick = openDrawer;
closeBtn.onclick = closeDrawer;
overlay.onclick = closeDrawer;

// When clicking a city
areaCities.forEach(city => {
    city.addEventListener('click', () => {
        // remove active from all
        areaCities.forEach(c => c.classList.remove('active'));
        // mark clicked one as active
        city.classList.add('active');
        activeCity = city; // store reference
        closeDrawer(); // close after selecting
    });
});

function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');

    // restore the previously active city when reopening
    if (activeCity) {
        areaCities.forEach(c => c.classList.remove('active'));
        activeCity.classList.add('active');
    }
}

function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
}
