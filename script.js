const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;


images[currentIndex].classList.add('show');


function showNextImage() {
    
    images[currentIndex].classList.remove('show');
    
    
    currentIndex = (currentIndex + 1) % images.length;
    
    
    images[currentIndex].classList.add('show');
}

setInterval(showNextImage, 2000);

document.getElementById('an-link').addEventListener('click', function(event) {
    event.preventDefault();

    
    const hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.classList.toggle('visible');

    
    if (hiddenMessage.classList.contains('visible')) {
        const message = "Liebe Schwester, zum 20. Oktober wünsche ich dir viel Liebe, Glück und Erfolg in allem, was du tust! Du bist ein wahres Vorbild für mich, und ich bin so dankbar, dich als Schwester zu haben. Möge dein Tag so besonders sein wie du. Herzlichen Glückwunsch zum Frauentag!";
        const typedMessage = document.getElementById('typed-message');

        
        typedMessage.textContent = '';

       
        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                typedMessage.textContent += message.charAt(i);
                i++;
                setTimeout(typeWriter, 50); 
            }
        }
        typeWriter();
    }
});

