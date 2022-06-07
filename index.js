let chatsbtn = document.getElementById("chatsbtn");
let statusbtn = document.getElementById("statusbtn");
let callsbtn = document.getElementById("callsbtn");
let span = document.getElementById("span");
let alltools = document.getElementById("alltools");
let options = document.getElementById("options");
let mainSection = document.getElementById("main_section");
let message = document.getElementById("message");


// changing sections
chatsbtn.addEventListener("click", () => {
    statusbtn.classList.remove("active");
    callsbtn.classList.remove("active");
    chatsbtn.classList.add("active");
    span.style.left = "0%";
    mainSection.style.left = "0%";
    message.innerHTML = `<span class="material-symbols-outlined">chat</span>`;
})
statusbtn.addEventListener("click", () => {
    callsbtn.classList.remove("active");
    chatsbtn.classList.remove("active");
    statusbtn.classList.add("active");
    span.style.left = "33%";
    mainSection.style.left = "-100%";
    message.innerHTML = `<img src="camera.png" alt="camera">`;
})
callsbtn.addEventListener("click", () => {
    statusbtn.classList.remove("active");
    chatsbtn.classList.remove("active");
    callsbtn.classList.add("active");
    span.style.left = "67%";
    mainSection.style.left = "-200%";
    message.innerHTML = `<span class="material-symbols-rounded">add_call</span>`;
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