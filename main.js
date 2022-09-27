window.addEventListener('scroll', function (){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    /* getBoundingClientRect() es para obtener la localizacion relativa a lo que se ve en la pantalla */
    console.log(posicionObj1)
    
/* entre mas cerca este el scroll del objeto llegaremos a cero.
Cuando la pasemos estaá en negativa.
Cuando esté mas cerca, le agregamos la animacion.
Debe de ser sencillo.
Dividir la pantalla en varias partes en porcenajes relativos?*/

let tamanoPantalla = window.innerHeight/2

if(posicionObj1 < tamanoPantalla) {
    animacion.style.animation = 'mover 1s ease-out';
    /* ANIMATION es una propiedad CSS que tienen todos los elementos */
}


})




