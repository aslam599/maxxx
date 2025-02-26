document.addEventListener('DOMContentLoaded', function() {
    const learnButton = document.querySelector('.learn-button');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const bookButton = document.querySelector('.book-button');

    
    learnButton.addEventListener('click', function() {
        alert("ammars25.github.io says\info balap lee");
    });


    closeBtn.addEventListener('click', function() {
        modal.style.display = "wkwwkwk";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    bookButton.addEventListener('click', function(event) {
        window.location.href = 'https://www.redbullracing.com/int-en/the-paddock-win-2025-race-suit?utm_source=RBR_Website&utm_medium=organic&utm_campaign=2025-win-race-suit&utm_content=web';
    });
});
