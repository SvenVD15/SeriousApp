document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('srs-image');
    const prevButton = document.querySelector('.button-row a:nth-child(2)');
    const firstButton = document.querySelector('.button-row a:nth-child(1)');
    const nextButton = document.querySelector('.button-row a:nth-child(3)');
    const textArrayElement = document.getElementById('textArray');
    const nameArrayElement = document.getElementById('nameArray');

    const muteButton = document.createElement('a');
    muteButton.href = '#';
    muteButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    muteButton.addEventListener('click', toggleMute);

    const audioSources = ['', '/audio/azaletown.mp3', '/audio/cianwoodcity.mp3', '/audio/other.mp3'];
    const imageSources = ['/img/CryptoMannetje.png', '/img/CryptoGevaarSlide1.png', '/img/CryptoGevaarSlide2.png', '/img/CryptoGevaarSlide3.png', '/img/CryptoGevaarSlide4.png', '/img/CryptoGevaarSlide5.png', '/img/CryptoGevaarSlide6.png', '/img/CryptoGevaarSlide7.png', '/img/CryptoGevaarSlide8.png'];
    const nameSources = ['', 'Cursus over Crypto?', 'Investeren', 'Dalende Koers', 'Te weinig saldo', 'Wanhoop', 'Alles verkopen', 'Lenen', 'Kredietbank'];
    const textSources = [
        '',
        'Bob ziet een cursus over crypto voorbij komen en gebruikt het advies om te investeren.',
        'Bob investeert in crypto met een dalende koers en is zeer tevreden.',
        'Helaas blijft de dalende koers steeds verder te gaan en Bob verliest veel geld.',
        'Bob probeert te investeren in een stijgende koers, maar de koers blijft dalen.',
        'Vervolgens staat Bob in de supermarkt en hij merkt tijdens het afrekenen dat hij te weinig saldo heeft.',
        'bob verkoopt al zijn crypto uit wanhoop zodat hij weer geld heeft om van te leven.',
        'Hij keert naar zijn ouders om geld te lenen en dat investeert hijk nogmaals in crypto.',
        'Als laatste optie gaat Bob naar de kredietbank om hulp te vraag hou hij uit deze situatie kan komen.'
      ];
      
    let currentImageIndex = 0;
    let isMuted = false;
    let currentAudio = new Audio(audioSources[currentImageIndex]);

    function toggleMute() {
        isMuted = !isMuted;
        updateMuteButton();
        updateAudioVolume();
    }

    function updateMuteButton() {
        muteButton.textContent = isMuted ? '🔇' : '🔊';
    }

    function updateAudioVolume() {
        currentAudio.volume = isMuted ? 0 : 0.025; // volume zodat je niet fk doof word
    }

    function displayImage() {
        image.src = imageSources[currentImageIndex];
        textArrayElement.textContent = textSources[currentImageIndex];
        nameArrayElement.textContent = nameSources[currentImageIndex];
    
        textArrayElement.classList.remove('typing-animation');
        void textArrayElement.offsetWidth;
        textArrayElement.classList.add('typing-animation');
    
        prevButton.style.display = currentImageIndex === 0 ? 'none' : 'inline-block';
        firstButton.style.display = currentImageIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentImageIndex === imageSources.length - 1 ? 'none' : 'inline-block';
    
        if (currentImageIndex === 0) {
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.chat').style.display = 'none';
        } else {
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.chat').style.display = 'block';
        }
    
        currentAudio.pause();
        currentAudio = new Audio(audioSources[currentImageIndex]);
        updateAudioVolume();
    
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

    prevButton.addEventListener('click', function () {
        currentAudio.pause();
    });

    nextButton.addEventListener('click', function () {
        currentAudio.pause();
    });

    firstButton.addEventListener('click', function () {
        currentAudio.pause();
    });

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
    firstButton.addEventListener('click', firstImage);

    muteButton.textContent = isMuted ? '🔇' : '🔊';
    document.querySelector('.btn-row').appendChild(muteButton);

    displayImage();
});

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before starting the timer
    setTimeout(function() {
      // Fade out the splash screen
      document.getElementById("splash").style.opacity = 0;

      // Remove the splash screen from the DOM after the transition
      setTimeout(function() {
        document.getElementById("splash").style.display = "none";
      }, 1000); // 1000ms = 1s (same duration as the transition)
    }, 5000); // 10000ms = 10s
  });