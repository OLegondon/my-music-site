document.getElementById('clickableImage').addEventListener('click', function () {
    var audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play(); // Воспроизводим звук
    } else {
        audio.pause(); // Приостанавливаем звук
    }
});
