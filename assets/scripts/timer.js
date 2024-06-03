const timerText = document.querySelector('.timer-title');

window.addEventListener('scroll', () => {
    if (this.window.scrollY > 0
        && this.window.innerWidth <= 425) {
        return timerText.classList.add('disabled');
    }
    else {
        return timerText.classList.remove('disabled');
    }
})
// Adicionar um if para manter fixo o timer na tela


const decMin = document.querySelector('.decimal-minutes');
const uniMin = document.querySelector('.unitary-minutes');
const decSec = document.querySelector('.decimal-seconds');
const uniSec = document.querySelector('.unitary-seconds');


function timerOn() {
    var decSeconds = 5;
    var uniSeconds = 9;
    var decMinutes = 1;
    var uniMinutes = 4;

    setInterval(() => {
        if (uniSeconds <= 0 && decSeconds <= 0) {
            decSeconds = 6;
            uniMinutes--;
        }

        uniSeconds--;
        if (uniSeconds < 0) {
            uniSeconds = 9;
            decSeconds--;
        }

        if (uniMinutes < 0) {
            uniMinutes = 9;
            decMinutes--;
        }

        decMin.innerHTML = `${decMinutes}`;
        uniMin.innerHTML = `${uniMinutes}`;
        decSec.innerHTML = `${decSeconds}`;
        uniSec.innerHTML = `${uniSeconds}`;
    }, 1000);

}

timerOn();