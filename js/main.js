var birthYear = document.getElementById("birthyear"),
  calcBtn = document.getElementById("calc"),
  age = document.getElementById("age"),
  birthMonth = document.getElementById("birthmonth"),
  birthDay = document.getElementById("birthday");
calcBtn.addEventListener("click", calcAge);

function calcAge() {
  if (birthYear.value == "" || birthMonth.value == "" || birthDay.value == "") {
    alert("enter birth date");
  } else {
    d = new Date();

    var currentYear = d.getFullYear();
    var currentMonth = d.getMonth() + 1;
    var currentDay = d.getDate();
    if (birthMonth.value < currentMonth) {
      if (birthDay.value <= currentDay) {
        var currentAge = `${currentYear - birthYear.value} : ${Math.abs(
          currentMonth - birthMonth.value
        )} : ${Math.abs(currentDay - birthDay.value)}`;
      } else {
        currentMonth--;
        var currentAge = `${currentYear - birthYear.value} : ${Math.abs(
          currentMonth - birthMonth.value
        )} : ${Math.abs(30 + currentDay - birthDay.value)}`;
      }
    } else if (birthMonth.value > currentMonth) {
      currentYear--;
      if (birthDay.value <= currentDay) {
        var currentAge = `${currentYear - birthYear.value} : ${
          12 - Math.abs(currentMonth - birthMonth.value)
        } : ${Math.abs(currentDay - birthDay.value)}`;
      } else {
        currentMonth--;
        var currentAge = `${currentYear - birthYear.value} : ${
          12 - Math.abs(currentMonth - birthMonth.value)
        } : ${Math.abs(30 + currentDay - birthDay.value)}`;
      }
    } else if (birthMonth.value == currentMonth) {
      if (birthDay.value > currentDay) {
        currentYear--;
        var currentAge = `${currentYear - birthYear.value} : 
          11 
         : ${Math.abs(30 + currentDay - birthDay.value)}`;
      } else {
        var currentAge = `${currentYear - birthYear.value} : ${Math.abs(
          currentMonth - birthMonth.value
        )} : ${Math.abs(currentDay - birthDay.value)}`;
      }
    }

    // else if (birthMonth.value = currentMonth) {
    //   if(birthDay.value = currentDay){

    //   }
    // }
    // } else if (birthMonth.value > currentMonth && birthDay.value > currentDay) {
    //   currentYear--;
    //   currentMonth--;
    //   var currentAge = `${currentYear - birthYear.value} : ${
    //     12 - Math.abs(currentMonth - birthMonth.value)
    //   } : ${31 - Math.abs(currentDay - birthDay.value)}`;
    // }
    console.log(currentAge);
    console.log(currentDay);

    age.innerHTML = `Your age is ${currentAge}`;
  }
}
