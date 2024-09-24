const cursor = document.querySelector('.cursor');

// Function to check if the device is desktop
const isDesktop = () => window.innerWidth > 1024; // Adjust the width as necessary

if (isDesktop()) {
    document.addEventListener('mousemove', e => {
        cursor?.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
    });
}
