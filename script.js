let stars = document.getElementById('tara');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let bottomSection = document.querySelector('.bottom');
let button = document.querySelector('.but2');
let clickCount = 1;

button.addEventListener('click', function() {
    clickCount++;

    const positions = [
        { marginLeft: '50px' },
        { marginLeft: 'calc(50% - 100px)' },
        { marginLeft: 'calc(100% - 200px)' },
        { marginLeft: '50px' }, 
        { marginLeft: '150px' } 
    ];


    button.style.marginLeft = positions[clickCount % positions.length].marginLeft;
});



window.addEventListener('scroll', function(){
    let windowHeight = window.innerHeight;
    let bottomSectionHeight = bottomSection.offsetHeight;
    let bottomSectionTop = bottomSection.offsetTop;
    let scrollPosition = window.scrollY;

    let maxScroll = bottomSectionTop + bottomSectionHeight - windowHeight;

    if (scrollPosition <= maxScroll && scrollPosition >= bottomSectionTop - windowHeight) {
        stars.style.left = scrollPosition * 0.25 + 'px';
        moon.style.top = scrollPosition * 1.05 + 'px';
        mountain.style.top = scrollPosition * 0.5 + 'px';
    }
});

