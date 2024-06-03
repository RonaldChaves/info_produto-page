const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

const messageBox = document.querySelector('#message');
const emailBox = document.querySelector('#email');
const phoneBox = document.querySelector('#wpp');

const sendBtn = document.querySelector('#send');

function errorElement(current, regex, arr) {
    if (current.value.length == 0) {
        current.style.border = 'none';
    }
    else if (!regex.test(current.value)) {
        current.style.border = '2px solid red';
    }
    else {
        current.style.border = '2px solid #39A0ED';
        return arr = true;
    }
}


function verifyMessage() {

    if (messageBox.value.length == 0) {
        messageBox.style.border = 'none';
    }
    else if (messageBox.value.length < 5) {
        messageBox.style.border = '2px solid red';
    }
    else {
        messageBox.style.border = '2px solid #39A0ED';
    }
}

function verifyEmail() {
    errorElement(emailBox, emailRegex);
}

function verifyPhone() {
    errorElement(phoneBox, phoneRegex);
}

verifyPhone();
verifyMessage();
verifyEmail();