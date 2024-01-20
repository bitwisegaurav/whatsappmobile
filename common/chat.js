setTimeout(() => {
    document.getElementById('lastseen').style.display = "none";
}, 10000);

window.addEventListener("load", () => {
    window.scroll(0,window.outerHeight);
})

function getChatData(data) {
    let content = ``;

    data.forEach(chat => {

        if(chat.side === "left") {
            content += `
            <div class="leftside">
                <div class="leftmsg">
                    <div class="msg">${chat.msg}</div>
                    <div class="msginfo">
                        <div class="time">${chat.time}</div>
                    </div>
                </div>
            </div>`
        } else {
            content += `
            <div class="rightside">
            <div class="rightmsg">
                <div class="msg">${chat.msg}</div>
                <div class="msginfo">
                    <div class="time">${chat.time}</div>
                    <div class="seen">
                        <img src="../icons/done.png" alt="done">
                        <img src="../icons/done.png" alt="done">
                    </div>
                </div>
            </div>
        </div>`
        }

        // content += chatcontent;        
    });

    return content;
}