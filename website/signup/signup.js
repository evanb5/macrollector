class signupInfo{
  constructor(fName, lName, user, pass, confPass, gender, age, height, weight){
    this.fName = fName;
    this.lName = lName;
    this.user = user;
    this.pass = pass;
    this.confPass = confPass;
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
};

function signupFunction(){
  var fName = document.getElementById('fName').value;
  var lName = document.getElementById('lName').value;
  var user = document.getElementById('username').value;
  var pass = document.getElementById('pass').value;
  var confPass = document.getElementById('confirmPass').value;
  
  var genderRadios = document.getElementsByName('gender');
  for (i = 0; i<genderRadios.length; i++){
    if(genderRadios[i].checked){
      gender = genderRadios[i].value;
      break;
    }else{
      gender = '';
    };
  };
  
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  
  info1 = new signupInfo(fName, lName, user, pass, confPass, gender, age, height, weight);

  return info1
};

function checkInputs1(){
  var object1 = signupFunction()
  let verified = true;
  
  if (object1.fName == '' || object1.lName == '' || object1.user == '' || object1.pass == '' || object1.confPass == '' || object1.gender == ''){
    alert('Please ensure no fields are blank');
    verified = false;
  }else if (isNaN(object1.fName) == false || isNaN(object1.lName) == false){
    alert('First and last names cannot have numbers in them');
    verified = false;
  }else if (object1.pass.length < 8){
    alert('Password must be at least 8 characters long');
    verified = false;
  }else if (object1.user == object1.pass){
    alert('Username and password cannot be the same');
    verified = false;
  }else if (object1.pass != object1.confPass){
    alert('Passwords do not match');
    verified = false;
  }else if (object1.age == '' || object1.height == '' || object1.weight == ''){
    alert('Age, weight, and height values must be integers');
    verified = false;
  }else if (object1.age == '0' || object1.height == '0' || object1.weight == '0'){
    alert('Number values must be greater than 0');
    verified = false;
  }check: if(verified == true){
    let storage2 = localStorage.getItem("usersList");
    let accounts2 = JSON.parse(storage2);

    for (i=0; i<accounts2.length; i++){
      if (object1.user == accounts2[i].user){
        alert('Username already registered in system');
        break check;
      };
    };
    
    alert('Account successfully created');
    let newAcc = {
      'user': object1.user,
      'pass': object1.pass,
      'fName': object1.fName,
      'lName': object1.lName,
      'gender': object1.gender,
      'age': object1.age,
      'height': object1.height,
      'weight': object1.weight
    }
    accountsList.push(newAcc);
    accounts2.push(newAcc);

    const accList = JSON.stringify(accounts2);
    localStorage.setItem("usersList", accList);
    
    console.log(accountsList[-1].user);
    console.log(accountsList[-1].pass);
    console.log(accountsList);
  };
};
