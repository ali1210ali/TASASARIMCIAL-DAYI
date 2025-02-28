function startAudio() {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Ses oynatılamadı:', error);
    });
}
