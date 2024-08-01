
function ScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

function resumelink() {
    const googleDriveLink = "https://drive.google.com/file/d/1rsMNdja8uMiFIuW6FCtc2evAqsd8kTed/view?usp=drive_link"; 
    window.open(googleDriveLink, '_blank');
}