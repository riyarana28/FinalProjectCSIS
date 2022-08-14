// <!-- FINAL PROJECT
// Name: Riya 
// Student id: 300363449
//  -->

// function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
//   }
function myFunction() {
    var txt;
    if (confirm("Email: riyarana0928@gmail.com")) {
      txt = "Thank you!";
    } else {
      txt = "Thankyou!";
    }
    document.getElementById("demo").innerHTML = txt;
  }