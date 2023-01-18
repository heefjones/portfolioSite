let now = new Date();
let birth = new Date(1998, 5, 10);
let myAge = Math.floor((now - birth) / 31536000000);

const age = document.getElementById('age');
age.innerHTML = myAge;

const occ = document.getElementById('occupation');
if(myAge < 26) {
    occ.innerHTML = 'a full-time college student';
}
else {
    occ.innerHTML = 'employed as a web developer';
}