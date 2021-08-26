document.querySelector(".formSheet").addEventListener("submit", submitForm)
function submitForm(e) {
    e.preventDefault()
    let name = document.querySelector(".name").value
    let phone = document.querySelector(".number").value
    let email = document.querySelector(".email").value
    let message = document.querySelector(".message").value
    sendEmail(name, phone, email, message)
}
function sendEmail(name, phone, email, message) {
    Email.send({
        SecureToken : "9e9b9c61-1212-48bd-9687-86587f16cbc4",
        To : 'davempark@gmail.com',
        From : 'holynuggets36@gmail.com',
        Subject : name+" has sent you a message",
        Body : "Name:"+name+"Phone Number:"+phone+"E-Mail"+email+"Message:"+message
    }).then(
      m => alert(m)
    );
}