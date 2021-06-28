import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
// let promiseOfModal = new Promise(function (resolve) {
//     window.setTimeout(function () {
//         resolve(modal)
//     }, (1000 * 2));
// });

// i don't understand how to start looking for what i need to do 
let promiseOfModal = async function () {
    window.setTimeout(() => {
        return modal;
    }, (1000 * 5));
};

try {
    promiseOfModal();
    console.log("User has been on the page for 60 seconds");
    modal.style.display = "block";
} catch (e) {
    console.log("error", e);
}

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

button.addEventListener('animationend', () => {
    button.style.backgroundColor = "magenta";
    alert("Continue to subscribe")
    });
    

