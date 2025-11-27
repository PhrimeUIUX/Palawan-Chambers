function togglePuertoPrincesaContainer() {
    const container = document.getElementById("businessdirectory-puertoprincesa");

    if (!container) return;

    if (currentFile.includes("puertoprincesa.html")) {
        container.style.display = "block";  // show
    } else {
        container.style.display = "none";   // hide
    }
}

document.addEventListener("snippetLoaded", () => {
    togglePuertoPrincesaContainer();
});
