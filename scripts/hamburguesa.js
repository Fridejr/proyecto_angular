/* const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
 */

/* En esta versión, he reemplazado las funciones flecha en el evento click del ícono de hamburguesa por una función anónima tradicional. Esto logra el mismo resultado: alternar la clase active en el elemento navLinks cuando se hace clic en el ícono de hamburguesa. */


/* const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
 */


/* En este caso, hemos definido una función llamada toggleNav que realiza la misma tarea que antes. Luego, hemos pasado esta función como parámetro al evento click del ícono de hamburguesa. Cuando se hace clic, la función toggleNav se ejecutará. */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleNav() {
    navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
