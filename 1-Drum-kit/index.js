const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSound)

window.addEventListener('touchstart', playSound)

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    key.classList.remove('playing')
}))

