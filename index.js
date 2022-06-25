let chatsbtn = document.getElementById("chatsbtn");
let statusbtn = document.getElementById("statusbtn");
let callsbtn = document.getElementById("callsbtn");
let span = document.getElementById("span");
let alltools = document.getElementById("alltools");
let options = document.getElementById("options");
let mainSection = document.getElementById("main_section");
let message = document.getElementById("message");
let imgbox = document.getElementsByClassName("imgbox");


// changing sections
chatsbtn.addEventListener("click", () => {
    statusbtn.classList.remove("active");
    callsbtn.classList.remove("active");
    chatsbtn.classList.add("active");
    span.style.left = "0%";
    mainSection.style.left = "0%";
    message.innerHTML = `<img src="icons/message.svg" alt="msg">`;
})
statusbtn.addEventListener("click", () => {
    callsbtn.classList.remove("active");
    chatsbtn.classList.remove("active");
    statusbtn.classList.add("active");
    span.style.left = "33%";
    mainSection.style.left = "-100%";
    message.innerHTML = `<img src="icons/camera.png" alt="camera">`;
})
callsbtn.addEventListener("click", () => {
    statusbtn.classList.remove("active");
    chatsbtn.classList.remove("active");
    callsbtn.classList.add("active");
    span.style.left = "67%";
    mainSection.style.left = "-200%";
    message.innerHTML = `<img src="icons/add_call.png" alt="">`;
})

// Setting Options
alltools.addEventListener("click", () => {
    // if (options.style.display == "none") {
    //     options.style.display = "flex";
    //     options.style.background = "white";
    // }
    // else{
    //     options.style.display = "none";
    // }
    options.style.display = "flex";
})


document.addEventListener("click", (event) => {
    if ((event.target.id !== "options") && (event.target.id !== "alltools")) {
        options.style.display = "none";
        // options.style.background = "teal";
    }
})

// Image Clicking events
// imgbox.forEach(item => {
//     item.addEventListener('click', event => {
//       imgbox[item].className = "imgclicked";
//     })
//   })

// for (let i = 0; i < imgbox.length; i++) {
//     imgbox[i].onclick = function () {
//         let j = 0;
//         // while (j < imgbox.length) {
//         //     topic[j++].classList.remove('imgclicked');
//         // }
//         // imgbox[i].classList.add("imgclicked");
//     }  
// }

document.addEventListener("click", (Event)=>{
    console.log(Event.target.id);
})