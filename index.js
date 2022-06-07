let chatsbtn = document.getElementById("chatsbtn");
let statusbtn = document.getElementById("statusbtn");
let callsbtn = document.getElementById("callsbtn");
let span = document.getElementById("span");
let alltools = document.getElementById("alltools");
let options = document.getElementById("options");


// changing sections
chatsbtn.addEventListener("click", () => {
    statusbtn.classList.remove("active");
    callsbtn.classList.remove("active");
    chatsbtn.classList.add("active");
    span.style.left = "0%";
})
statusbtn.addEventListener("click", () => {
    callsbtn.classList.remove("active");
    chatsbtn.classList.remove("active");
    statusbtn.classList.add("active");
    span.style.left = "33%";
})
callsbtn.addEventListener("click", () => {
    statusbtn.classList.remove("active");
    chatsbtn.classList.remove("active");
    callsbtn.classList.add("active");
    span.style.left = "67%";
})


alltools.addEventListener("click", () => {
    if (options.style.display == "none") {
        options.style.display = "flex";
    }
    else{
        options.style.display = "none";
    }
})

document.addEventListener("click", (e) => {
    // if ((e.target.id !== "options") || (e.target.id !== "alltools")) {
    //     options.style.display = "none";
    // }
})