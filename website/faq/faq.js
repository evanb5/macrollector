function askQuestion() {
  let askedQues = document.getElementById('question').value;

  if (askedQues == '') {
    alert('Please fill in the box before submitting')
  }else{
    alert('Question successfully submitted')
  }
}
