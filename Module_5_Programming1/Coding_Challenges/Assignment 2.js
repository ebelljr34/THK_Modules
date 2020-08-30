https://codepen.io/ebell_jr/pen/rNexogR
let grade = prompt("Numerical grade?");
switch (true) {
  case grade > 95:
    grade = "A+";
    console.log("A+");
    break;
  case 90 >= grade && grade > 88:
    grade = "A";
    console.log("A");
    break;
  case 88 >= grade && grade > 84:
    grade = "B+";
    console.log("B+");
    break;
  case 84 >= grade && grade > 76:
    grade = "C+";
    console.log("C+");
    break;
  case 76 >= grade && grade > 70:
    grade = "C";
    console.log("C");
    break;
  case 70 >= grade && grade > 67:
    grade = "D+";
    console.log("D+");
    break;
  case 67 >= grade && grade > 64:
    grade = "D";
    console.log("D");
  case grade <= 64:
    grade = "F";
    console.log("F");
}