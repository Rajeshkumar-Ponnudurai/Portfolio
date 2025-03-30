
function ScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

function resumelink() {
    const googleDriveLink = "https://drive.google.com/file/d/1qYGJxoO0z2E3bfn60oMzTgLNZXyoP6L6/view?usp=drive_link"; 
    window.open(googleDriveLink, '_blank');
}

const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});
