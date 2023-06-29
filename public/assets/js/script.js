// Form function


document.getElementById("showFormBtn").addEventListener("click", function () {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("signupContainer").style.display = "block";
  document.getElementById("showFormBtn").style.display = "none";
});

// Button function
// document.getElementById("showFormBtn").addEventListener("click", function () {
//   console.log("btn function")
  
// });

// Login function
document.querySelector("#box").addEventListener("click", function () {
  console.log("form login function");
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("showFormBtn").style.display = "none";
});
