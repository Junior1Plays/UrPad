document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".content").style = "display: block;";
    
    document.querySelector("#cNote").addEventListener("click", () => {
        return location.href = "./raw/note?id=" + btoa(document.querySelector("#note").value);
    });
});