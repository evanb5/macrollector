let storage2 = localStorage.getItem("usersList");
let accounts2 = JSON.parse(storage2);

let accountNumber = localStorage.getItem('accNum');

console.log(accounts2)
console.log(accountNumber)

document.getElementById('welcome').innerHTML = 'Hello ' + accounts2[accountNumber].fName + ' ' + accounts2[accountNumber].lName + '!'

document.getElementById('showAge').innerHTML = 'Age: ' + accounts2[accountNumber].age

displayHeight = accounts2[accountNumber].height / 100

document.getElementById('showHeight').innerHTML = 'Height: ' + displayHeight + ' m'

document.getElementById('showWeight').innerHTML = 'Weight: ' + accounts2[accountNumber].weight + ' kg'

document.getElementById('showGender').innerHTML = 'Gender: ' + accounts2[accountNumber].gender

let BMInum = (accounts2[accountNumber].weight / Math.pow(displayHeight, 2)).toFixed(1)

document.getElementById('showBMI').innerHTML = 'BMI: ' + BMInum

let recCalories = 0;

if (accounts2[accountNumber].gender == 'Male'){
  if (accounts2[accountNumber].age <= 2){
    recCalories = 1000;
  }else if (accounts2[accountNumber].age <= 5){
    recCalories = 1400;
  }else if (accounts2[accountNumber].age <= 8){
    recCalories = 1600;
  }else if (accounts2[accountNumber].age <= 10){
    recCalories = 1800;
  }else if (accounts2[accountNumber].age <= 11){
    recCalories = 2000;
  }else if (accounts2[accountNumber].age <= 13){
    recCalories = 2200;
  }else if (accounts2[accountNumber].age <= 14){
    recCalories = 2400;
  }else if (accounts2[accountNumber].age <= 15){
    recCalories = 2600;
  }else if (accounts2[accountNumber].age <= 25){
    recCalories = 2800;
  }else if (accounts2[accountNumber].age <= 45){
    recCalories = 2600;
  }else if (accounts2[accountNumber].age > 65){
    recCalories = 2200;
  }
}else{
  if (accounts2[accountNumber].age <= 2){
    recCalories = 1000;
  }else if (accounts2[accountNumber].age <= 3){
    recCalories = 1200;
  }else if (accounts2[accountNumber].age <= 6){
    recCalories = 1400;
  }else if (accounts2[accountNumber].age <= 9){
    recCalories = 1600;
  }else if (accounts2[accountNumber].age <= 11){
    recCalories = 1800;
  }else if (accounts2[accountNumber].age <= 18){
    recCalories = 2000;
  }else if (accounts2[accountNumber].age <= 25){
    recCalories = 2200;
  }else if (accounts2[accountNumber].age <= 50){
    recCalories = 2000;
  }else if (accounts2[accountNumber].age > 50){
    recCalories = 1800;
  }
}

document.getElementById('showCalories').innerHTML = 'Recommended Daily Caloric Intake: ' + recCalories
