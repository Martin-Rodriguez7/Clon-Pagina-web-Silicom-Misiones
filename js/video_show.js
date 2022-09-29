const video = document.querySelector(".show_img")
const show_video= document.querySelector(".presentation-vd")
const close_video= document.querySelector(".close")
video.addEventListener('click', () => {
    //agregar actividad al nav
    show_video.classList.toggle('vd-active');
 

});

close_video.addEventListener('click', () => {
    //agregar actividad al nav
    show_video.classList.remove('vd-active');
});