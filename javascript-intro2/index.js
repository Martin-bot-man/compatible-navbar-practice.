const username = prompt("what is your name?");
const age = prompt("what is your age?");
const yearOfBirth = new Date().getFullYear() - age;

alert(yearOfBirth);