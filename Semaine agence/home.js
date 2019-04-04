document.querySelector("#filterforall").style.display = "none"

document.querySelector("#filter").addEventListener("click", () => {
    if (document.querySelector("#filterforall").style.display == "block") {
        document.querySelector("#filterforall").style.display = "none"; 
    } else {
    document.querySelector("#filterforall").style.display = "block";
    window.scrollBy(0, window.innerHeight / 2);
    }
})
