let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
    e.preventDefault();

let emailValue = emailElement.value;
let messageValue = messageElement.value;
console.log(emailValue);
console.log(messageValue);

if(emailValue.includes('@')){
    // all good
    alert('thank you for your message');
} else {
    alert('soory but please try again.');
}
})
