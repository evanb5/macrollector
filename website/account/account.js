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

let advice = ''

if (BMInum < 18.5) {
  advice = 'According to your BMI, you are underweight. This means that your body may not be meeting its daily nutritional requirements. To improve your condition, it is advised that you are conscious about eating nutrient-rich foods and ensuring that you eat enough meals every day. Avoid empty calories in junk foods and eat more nutrient-dense foods such as high-protein meats and whole grains.'
}else if (BMInum < 25) {
  advice = 'According to your BMI, you are at a healthy weight range. Ensure you keep within this range by staying conscious of what you eat. Avoid junk foods that provide empty calories, and eat more fruits and vegetables to get sufficient nutrients everyday. Also ensure you stay active, and stay within the recommended daily calorie range.'
}else if (BMInum < 30) {
  advice = 'According to your BMI, you are overweight. This means that you are danger of becoming obese. To avoid this, focus on keeping your diet clean, and avoid heavily processed foods with large amounts of fat and sugars. Focus more on eating foods such as fruits and vegetables, and ensure you are engaging in enough physical activity each day. Also, avoid overeating, and lower your daily calorie recommendation to suit your needs.'
}else if (BMInum >= 30) {
  advice = 'According to your BMI, you are obese. This means that your body is not in a healthy condition. To improve your condition, ensure you completely omit processed foods and high fat foods from your diet. Eat only clean, nutrient rich foods that are low in calories such as fruits and vegetables, and consider going vegetarian. Also try to cut on your daily caloric intake, and avoid snacking. Consider contacting a medical professional for more tips on how to improve your condition.'
}

document.getElementById('showAdvice').innerHTML = advice
