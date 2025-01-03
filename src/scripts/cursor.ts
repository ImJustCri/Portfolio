const cursor = document.querySelector('.cursor');

// Function to check if the device is mobile
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile()) {
    document.addEventListener('mousemove', e => {
        cursor?.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px; visibility: visible;");
    });
} else {
    cursor?.setAttribute("style", "visibility: hidden;");
}
