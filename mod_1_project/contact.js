
/*
This function takes user input and creates an instance of the 
Circle class, calculates the area and circumference of a circle and 
returns output to the browser via DOM Elements  
*/class Donate {
  constructor(num, money) {
    this.num = num;
    this.money = money; 

  }
  circle_area = () => Math.round(Math.PI * Math.pow(this.radius, 2));
  circumference = () => Math.round(2 * Math.PI * this.radius);
} //close Circle class

/*
This function takes user input and creates an instance of the 
Circle class, calculates the area and circumference of a circle and 
returns output to the browser via DOM Elements  
*/
function formDonate() {
  let plant_num = document.getElementById("radius_input");
  let circle_out = document.getElementById("p2");
  const circle_1 = new Circle(radius_input.value);
  area = circle_1.circle_area();
  circumference = circle_1.circumference();
  circle_out.innerHTML = `The area of your circle is: ${area} and \n
The circumference of your circle is: ${circumference}`;
} //close formDonate function




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