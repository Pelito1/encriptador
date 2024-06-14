// Obtener el div con el id "contenido"
var contenidoDiv = document.getElementById("PantallaTexto");


// Función ficticia para obtener el resultado (debes implementarla según tu lógica)
function obtenerResultado(opcion) {
    let textoUsuario = document.querySelector('textarea').value;

    if (textoUsuario.trim() === '') {
        contenidoDiv.innerHTML = '<img src="imagen.png" style="height:100%; margin:0 auto;">';
    } else {
        let textoModificado;
        if (opcion === 1) {
            textoModificado = textoUsuario
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
        } else {
            textoModificado = textoUsuario
            .replace(/enter/g, 'e')  
            .replace(/imes/g, 'i')   
            .replace(/ai/g, 'a')     
            .replace(/ober/g, 'o')   
            .replace(/ufat/g, 'u'); 
        }
        contenidoDiv.textContent = textoModificado;
    }
}
