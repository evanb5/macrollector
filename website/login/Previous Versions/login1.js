var accountsList = [
  {
    'user': 'hello',
    'pass': 'world',
    'fName': 'heo',
    'lName': 'wod',
    'gender': 'Male',
    'age': 23,
    'height': 167,
    'weight': 78
  },
  {
    'user': 'helo',
    'pass': 'word',
    'fName': 'ho',
    'lName': 'wd',
    'gender': 'Female',
    'age': 18,
    'height': 142,
    'weight': 52
  }
]

//To clear JSON object. MUST COMMENT AGAIN AFTER CLEAR
//localStorage.clear();

//If statement for creating JSON storage object → NEVER REMOVE THIS IF STATEMENT
if (localStorage.getItem("usersList") === null) {
  const accList = JSON.stringify(accountsList);
  localStorage.setItem("usersList", accList);
}

let storage = localStorage.getItem("usersList");
let accounts = JSON.parse(storage);

function checkAccount() {
  var uNam = document.getElementById('username').value;
  var pWor = document.getElementById('password').value;

  for (i=0; i<accounts.length; i++){
    if (uNam == accounts[i].user && pWor == accounts[i].pass) {
      alert('Login successful');
      localStorage.setItem('accNum', i);
      window.location = './acc.html'
      console.log(accounts[i].gender);
      console.log(accounts[i].age);
      break;
    }else if(i == (accounts.length-1)){
      alert('Username or password is incorrect');
      console.log(accounts);
    };
  };
};

class loginInfo{
  constructor(name, word){
    this.name = name;
    this.word = word;
  }
};

function loginFunction(){
  var uName = document.getElementById('username').value;
  var pWord = document.getElementById('password').value;

  info = new loginInfo(uName, pWord);

  return info
};

function checkInputs(){
  var object = loginFunction()
  
  if (object.name == '' && object.word == ''){
    alert('Username and password cannot be blank');
  }else if (object.name == '') {
    alert('Username cannot be blank');
  }else if (object.word == '') {
    alert('Password cannot be blank');
  }else{
    return checkAccount()
  };
};
