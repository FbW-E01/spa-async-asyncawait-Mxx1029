import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
// let promiseOfModal = new Promise(function (resolve) {
//     window.setTimeout(function () {
//         resolve(modal)
//     }, (1000 * 2));
// });

// with André's help finally
const waitAMinute = () => {
    return new Promise((resolve) => {
    window.setTimeout(() => {
            resolve(modal);
    }, (1000 * 2));
})};

async function displayModal() {
    await waitAMinute();
    console.log("User has been on the page for 60 seconds");
    modal.style.display = "block";
} 

displayModal();

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})

const button = document.querySelector("#continue");

function waitForAnimation () {
    return new Promise (resolve => {
        resolve(button);
    })
}

async function getAlert () {
    await waitForAnimation();
    button.addEventListener('animationend', () => {
        alert("Continue to subscribe");
        button.style.backgroundColor = "magenta"; 
    });

}

getAlert();
    

