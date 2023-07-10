const refs = {
    btnStart: document.querySelector('.btn-start'),
    btnStop: document.querySelector('.btn-stop'),
    body: document.querySelector('body')
}

refs.btnStart.addEventListener('click', switchStart);
refs.btnStop.addEventListener('click', swithchStop);


let intervalId;

function switchStart() {
    refs.btnStop.removeAttribute('disabled');
    intervalId = setInterval(() => {
        refs.body.style.background = getRandomHexColor();
    }, 1000);
    refs.btnStart.setAttribute('disabled', '');
};

function swithchStop() {
    clearInterval(intervalId);
    refs.body.style.background = '#ffffff';
    refs.btnStart.removeAttribute('disabled');
    refs.btnStop.setAttribute('disabled', '');
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};