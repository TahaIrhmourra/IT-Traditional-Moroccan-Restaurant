const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 3000);

// 

function validateDate(element) {
    var today = new Date();
    var enteredDate = new Date(element.value);
    if (enteredDate < today) {
      alert("Please select a future date.");
      element.value = ""; 
    }
  }

// 

var today = new Date().toISOString().split('T')[0];
document.getElementById("InputDate").setAttribute("min",today);

// 

const InputDate = document.getElementById("InputDate");

InputDate.addEventListener("focus",function(evt) {
    if (this.getAttribute("type") === "date") {
        this.showPicker();
    }
});

// 

function myfunction1() {
    var x = document.getElementById("OnlineBooking")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none";
    }
}

//

function myfunction() {
    var x = document.getElementById("OnlineBooking")
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "none";
    }
}