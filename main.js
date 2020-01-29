let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/bakugo1.jpg') {
            myImage.setAttribute('src', 'images/bakugo2.jpg');
        } else {
            myImage.setAttribute('src', 'images/bakugo1.jpg');
        }
}

function setUserName() {
    let myName = prompt('Enter your name! ');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla isn\'t cool ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla isn\'t cool ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
