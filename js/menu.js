const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () => {
        //agregar actividad al nav
        nav.classList.toggle('nav-active');
        
        //Animacion Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
              
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5 }s`
            }


        });
        //menu-burger animacion
        burger.classList.toggle('toggle');

    });

}

navSlide();


