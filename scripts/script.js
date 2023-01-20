let dark = false;
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
const arr = [a1, a2, a3, a4];

// function for light/dark modes
function switchMode(event) {
    if(dark) { //switches to (default) light mode
        event.target.style.backgroundColor = '#FFF';
        event.target.style.color = '#000';
        event.target.style.border = '1px solid black';
        event.target.innerHTML = 'Dark mode';

        // changing anchor font color because its stubborn
        arr.forEach(anchor => {
            anchor.style.color = '#000';
        });

        document.body.style.backgroundColor = '';
        document.body.style.color = '#000';
        dark = false;
    }
    else { //switches to dark mode
        event.target.style.backgroundColor = '#405060';
        event.target.style.color = '#FFF';
        event.target.style.border = '1px solid white';
        event.target.innerHTML = 'Light mode';
        
        arr.forEach(anchor => {
            anchor.style.color = '#FFF';
        });

        document.body.style.background = '#405060';
        document.body.style.color = '#FFF';
        dark = true;
    }

    return dark;
}

const mode = document.getElementById('mode');
mode.onclick = switchMode;



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



//generating random happy emoji for footer
const foot = document.getElementById('f1');
const emojis = ['😀', '😃', '😄', '😁', '😆', '🙂', '🙃', '😉', '😗', '😚', '😙', '🤗', '😬'];
const randomEmote = emojis[Math.floor(Math.random() * emojis.length)];

foot.innerHTML += randomEmote;