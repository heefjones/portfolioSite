//generating random happy emoji for footer
const foot = document.getElementById('f2');
const emojis = ['😀', '😃', '😄', '😁', '😆', '🙂', '🙃', '😉', '😗', '😚', '😙', '🤗', '😬'];
const randomEmote = emojis[Math.floor(Math.random() * emojis.length)];

foot.innerHTML += randomEmote;

const button = document.querySelector('button');
button.style.color = 'blue';