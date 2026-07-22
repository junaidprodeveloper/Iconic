const favicon = document.getElementById("dynamic-favicon");

function updateFavicon() {
    if (!favicon) return;

    favicon.href = navigator.onLine
        ? "logo.svg"
        : "logo-dull.svg";
}

window.addEventListener("online", updateFavicon);
window.addEventListener("offline", updateFavicon);

updateFavicon();
