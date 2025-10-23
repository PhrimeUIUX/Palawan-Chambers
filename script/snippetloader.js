async function loadSnippet(container, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    const html = await res.text();
    
    container.innerHTML = html;
    
    // Handle <script> tags
    container.querySelectorAll("script").forEach(oldScript => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
      oldScript.remove();
    });
    
    // Handle <link rel="stylesheet">
    container.querySelectorAll("link[rel='stylesheet']").forEach(link => {
      const newLink = document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.href = link.href;
      document.head.appendChild(newLink);
    });
    
  } catch (err) {
    console.error(err);
    container.innerHTML = `<p style="color:#007bff;">Loading components...</p>`;
  }
}

// Auto-load all data-snippet divs
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-snippet]").forEach(div => {
    const file = div.getAttribute("data-snippet");
    loadSnippet(div, file);
  });
});
