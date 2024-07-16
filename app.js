alert('Por favor, no introduscas mayúsculas ni carácteres especiales. No serán aceptados');

navigator.permissions.query({name: 'clipboard-write'}).then((result) => {
    if (result.state === 'granted' || result.state === 'prompt') {
        /*write to the clipboard now*/
    }
});


function cipher() {
    let content = document.getElementById('textImput').value;
    document.getElementById('result').innerHTML = content;
    document.getElementById('showResult').addEventListener('click', cipher);
    return;
}


function copyText() {
    let textToCopy = document.getElementById('result').innerText;
    navigator.clipboard.writeText(textToCopy).then(
        () => {
            /*portapapeles activo: contenido copiado*/
            console.log('se copió')
        },
        () => {
            /*portapaples inactivo: contenido sin copiar*/
            console.log('error al copiar')
        },
    );
}