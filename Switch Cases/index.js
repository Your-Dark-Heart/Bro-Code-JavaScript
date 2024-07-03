
let testScore = 99;
let letterGrade;

switch(true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F"
}

console.log(letterGrade);







/*
let day = 5;
let message;


switch(day) {
  case 1:
    message = "It is Monday!";
    break;
  case 2:
    message = "It is Tuesday!";
    break;
  case 3:
    message = "It is Wednesday!";
    break;
  case 4:
    message = "It is Thursday!";
    break;
  case 5:
    message = "It is Friday!";
    break;
  case 6:
    message = "It is Saturday!"
    break;
  case 7: message = "It is Sunday!";
    break;
  default:
    message = "Something went wrong :("
}



console.log(message);




// Do not use or here! It won't work! 
switch(day) {
  case 1:
  case 3:
  case 4:
  case 5:
    message = "It is a weekday!";
    break;
  case 6:
  case 7:
    message = "It is the weekend!";
    break;
  default:
    message = "Something went wrong :(";
}

console.log(message);
*/