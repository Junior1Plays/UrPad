function copyText(texto) {
    var tempInput = document.createElement("input");
    tempInput.value = texto;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);
    window.alert("Note link copied to clipboard.")
}

document.addEventListener("DOMContentLoaded", () => {
    const url = new URLSearchParams(location.search);
    if (!url) return location.href = "../";
    if (!url.get("id")) return location.href = "../";

    try {
        document.body.innerHTML = `<title>UrPad Raw</title>\n\n<p id="note">${atob(url.get("id"))}</p></input><br><br><button id="share">Share</button>`;

        document.querySelector("#share").addEventListener("click", () => {
            copyText(location.href);
        });
    } catch {
        location.href = "../";
    }
});
