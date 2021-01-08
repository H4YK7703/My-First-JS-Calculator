alert("Welcome to The Online Calculator!");

const calFirst = +prompt("Write Your First Number");
const exType = +prompt("What You Want(1 - + , 2 - - , 3 - * , 4 - /)");
const calTwo = +prompt("Write Your Second Number");

try {
    if (exType == 1) {
        alert(calFirst + calTwo);
    } else if (exType == 2) {
        alert(calFirst - calTwo);
    } else if (exType == 3) {
        alert(calFirst * calTwo);
    } else if (exType == 4) {
        alert(calFirst / calTwo);
    } else {
        alert("Error");
    }
} catch (err) {
    alert("What is the Going Wrong , Try Again!");
}