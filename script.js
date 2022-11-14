function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');



const continuidade = document.querySelector('.continuidade');

if(titulo != null) {
    typeWrite(titulo);
}
if( typeWrite(titulo) == true) {
    typeWrite(continuidade);
}

