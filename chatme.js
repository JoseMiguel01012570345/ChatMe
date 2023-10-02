var submit = document.querySelector(".container-submit");
input = document.querySelector(".input");
box = document.querySelector(".box");
contactInfo = document.querySelector(".contact-info");
arrowImg = document.querySelector(".arrow-img");
arrow = document.querySelector(".arrow");
body = document.querySelector("body");
contactOnline = document.querySelector(".contact-online");

let barContact = false;
let boxStatus = "";

arrow.addEventListener("click", () => {//desappear direction arrow
    arrow.innerHTML = `
    <div class="ghost"  style="
    width:${Number(window.getComputedStyle(arrowImg).getPropertyValue("width").split("px")[0])}px;
    height: ${Number(window.getComputedStyle(arrowImg).getPropertyValue("height").split("px")[0])}px;
    margin-top: 2px;
        "></div>`;
    box.innerHTML = "";
    box.innerHTML = `<div class="contact-online"> ${contactsAvaliable()}</div>`;
    contactOnline = document.querySelector(".contact-online");
}
)

document.addEventListener("click", (event) => {//show direction arrow
    if (!contactOnline.contains(event.target) && barContact == true) {

        box.innerHTML = `<div class="contact-online" ></div>` + boxStatus;

        if (document.querySelector(`.message${count}`)) {
            myMessage = document.querySelector(`.message${count}`);
            myMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        arrow.innerHTML =
            `<img src="icons8-collapse-arrow-100.png" alt="" class="arrow-img"> `;
        arrowImg = document.querySelector(".arrow-img");
        barContact = false;
    } else
        barContact = true;
})

submit.addEventListener("click", () => {//display masseage when click
    displayMessage(input.value, box, "flex-end");
    input.value = "";
})
document.addEventListener("keydown", (event) => {//show message when click
    if (event.keyCode === 13) {
        displayMessage(input.value, box, "flex-end");
        //    send_message(input.value);
        input.value = "";
    }
})
let count = 0;
const displayMessage = (input, box, flexPosition) => {//display user message
    let inputBar = String(input);
    myMessage = build_message(flexPosition, box, inputBar);
    if (inputBar !== "") {
        for (let i = 0; i < inputBar.length; i++) {
            myMessage += `<p
            style="
            display: flex;
            justify-content: center;">
             ${inputBar[i]}
             </p>`;

        }
        myMessage += "</div></div > ";
        box.innerHTML += myMessage;
        boxStatus += myMessage;
        myMessage = document.querySelector(`.message${count}`);
        myMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        count++;
    }
}
//build a message
const build_message = (flexPosition, box, inputBar) => {
    let boxWidth = Number(window.getComputedStyle(box).getPropertyValue("width").split("px")[0]);
    messageWidth = 8.5 * inputBar.length;
    let message = "";
    if (boxWidth > messageWidth) {
        message = `
    <div style="display:flex;justify-content:${flexPosition};width:100%" >
        <div class="message${count}" 
            style="
            display: grid;
            margin-top: 5%;
            grid-template-columns: repeat(auto-fit, 8.5px);
            border-radius: 20px;
            padding-left: 1%;
            padding-right: 1%;
            width:${messageWidth}px;
            background-color: rgb(22, 19, 75);
        ">`;
    }
    else {
        message = `
        <div style="display:flex;justify-content:${flexPosition};width:100%" >
            <div class="message" 
                style="
                display: grid;
                margin-top: 5%;
                grid-template-columns: repeat(auto-fit, 8.5px);
                border-radius: 20px;
                padding-left: 1%;
                padding-right: 1%;
                width:90%;
                background-color: rgb(22, 19, 75);            
            ">`;
    }
    return message;
}
//show contact avaliable
const contactsAvaliable = (/*peopleToChat*/) => {
    let contacts =
        `<div class="contact-avaliable" style="
        position:fixed;
        display: grid;
        grid-template-rows: repeat(10,1fr);
        width:${Number(window.getComputedStyle(contactInfo).getPropertyValue("width").split("px")[0])}px;
        height:${Number(window.getComputedStyle(box).getPropertyValue("height").split("px")[0])}px;
        border-radius: 30px 30px 30px 30px;
        background-color: rgba(71, 83, 255, 0.507);
        box-shadow: 0px 0px 5px 1px rgba(71, 83, 255, 0.507);
        overflow-y: scroll;
         "
        >    
    `;
    let photo = "photo_2023-09-16_00-27-45.jpg";
    let contactName = "Jose Miguel Perez Perez Fernandez Vazquez";
    for (let i = 0; i < 12; i++) {
        contacts += `
        <div class="person peopleToChat">
            <img src="${photo}" alt="">
            <div class="name peopleToChat" >
                ${contactName}
            </div>
        </div>`;
    }
    contacts += `</div>`;
    return contacts;
}
