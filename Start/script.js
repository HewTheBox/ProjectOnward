// // const agian = document.querySelector("#page");
// // // const pointu = document.querySelector("#onpoint");
// // const link = "window.location.href = 'succesPage.html'";

// // var button = document.querySelector("#btn");
// // button.addEventListener("click", () => {
// //   //   document.write("Hello World");
// //   button = link;
// //   console.log(agian);
// // });

// var counter = 0;
// var i = 1;

// console.log(counter);
// var text = document.getElementById("btn");
// var paragraph = document.getElementById("para");
// const Button = document.querySelector("#btn");
// Button.addEventListener("click", () => {
//   if (i >= 1) {
//     counter++;
//     // paragraph.innerText = counter.toString();
//     text.innerHTML = counter.toString();
//     million();
//   }
// });
// // text = counter.toString();
// // paragraph = counter.toString();

// // console.log(counter);
// function million() {
//   var number = 2000;
//   for (i = 1; i < 10; i++) {
//     number += 10 + " ";
//     paragraph.innerText = number;
//   }
// }

// // var password = document.getElementsByName("password").value;
// // var confirm = document.getElementsByName("confirm").value;
// var password = document.getElementById("password");
// let confirm = document.getElementById("confirm");
// var submit = document.querySelector("#submit");
// submit.addEventListener("click", () => {
//   if (password.value !== confirm.value) {
//     alert("password mismatch");
//   }
// });

// var myform = document.querySelector("#myform");
// form.addEventListener("submit", function (event) {
//   // Get a reference to the password and confirm password fields
//   const password = document.querySelector("#password");
//   const confirmPassword = document.querySelector("#confirmPassword");

//   // Check if the password and confirm password fields match
//   if (password.value !== confirmPassword.value) {
//     // If they don't match, prevent the form from being submitted and show an error message
//     event.preventDefault();
//     alert("Passwords do not match!");
//   }
// });

//another passhandle
var password = document.getElementById("password");
var confirm = document.getElementById("confirm");
var form = document.querySelector("#myform");
form.addEventListener("submit", () => {
  if (password.value !== confirm.value) {
    event.preventDefault();
    alert("password mismatched");
  }
});
