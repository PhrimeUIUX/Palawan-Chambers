const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.onclick = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
};
closeBtn.onclick = closeDrawer;
overlay.onclick = closeDrawer;

function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
}