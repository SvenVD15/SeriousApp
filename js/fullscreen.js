document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('srs-image');
    const playButton = document.querySelector('.button-row a:nth-child(1)');
    const prevButton = document.querySelector('.button-row a:nth-child(3)');
    const firstButton = document.querySelector('.button-row a:nth-child(2)');
    const nextButton = document.querySelector('.button-row a:nth-child(4)');
    const textArrayElement = document.getElementById('textArray');
    const nameArrayElement = document.getElementById('nameArray');

    const audioSources = ['', '/audio/azaletown.mp3', '/audio/cianwoodcity.mp3', '/audio/other.mp3'];
    const imageSources = ['/img/start.png', '/img/placeholder.png', '/img/placeholder2.png', '/img/placeholder3.png'];
    const nameSources = ['', 'Name 1', 'Name 2', 'Name 3'];
    const textSources = ['', 'Some placeholder text which is being typed out using keyframes', 'ruimte voor nog meer tekst ja toch', 'omg nowayy meer tekst wtff???!'];

    let currentImageIndex = 0;
    let currentAudio = new Audio(audioSources[currentImageIndex]);
    currentAudio.volume = 0.05;

    function displayImage() {
        image.src = imageSources[currentImageIndex];
        textArrayElement.textContent = textSources[currentImageIndex];
        nameArrayElement.textContent = nameSources[currentImageIndex];
    
        textArrayElement.classList.remove('typing-animation');
        void textArrayElement.offsetWidth;
        textArrayElement.classList.add('typing-animation');
    
        playButton.style.display = currentImageIndex === 0 ? 'inline-block' : 'none';
        prevButton.style.display = currentImageIndex === 0 ? 'none' : 'inline-block';
        firstButton.style.display = currentImageIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentImageIndex === imageSources.length - 1 ? 'none' : 'inline-block';
    
        if (currentImageIndex === 0) {
            nextButton.style.display = 'none';
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.chat').style.display = 'none';
        } else {
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.chat').style.display = 'block';
        }
    
        currentAudio.pause();
        currentAudio = new Audio(audioSources[currentImageIndex]);
        currentAudio.volume = 0.05; // Set the volume to 0.05 before playing
    
        currentAudio.addEventListener('ended', function () {
            currentAudio.currentTime = 0;
            currentAudio.play();
        });
    
        currentAudio.play();
    }
    
    function prevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            displayImage();
        }
    }

    function nextImage() {
        if (currentImageIndex < imageSources.length - 1) {
            currentImageIndex++;
            displayImage();
        }
    }

    function firstImage() {
        currentImageIndex = 0;
        displayImage();
    }

    function pressPlay() {
        if (currentImageIndex === 0) {
            currentImageIndex++;
            displayImage();
        }
    }

    prevButton.addEventListener('click', function () {
        currentAudio.pause();
    });

    nextButton.addEventListener('click', function () {
        currentAudio.pause();
    });

    firstButton.addEventListener('click', function () {
        currentAudio.pause();
    });

    playButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
    firstButton.addEventListener('click', firstImage);

    displayImage();
});