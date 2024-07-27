/*
Especificaciones de la llave de cifrado:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 

*/

alert('Por favor, no introduscas mayúsculas ni carácteres especiales. No serán aceptados');

navigator.permissions.query({name: 'clipboard-write'}).then((result) => {
    if (result.state === 'granted' || result.state === 'prompt') {
        /*write to the clipboard now*/
    }
});


function cipher() {
    let resulText = '';
    let textToCipher = document.getElementById('textImput').value;
    for (let i = 0; i < textToCipher.length; i++) {
        switch (textToCipher[i]) {
            case 'e':
                resulText += 'enter';
                break;
            case 'i':
                resulText += 'imes';
                break;
            case 'a':
                resulText += 'ai';
                break;
            case 'o':
                resulText += 'ober';
                break;
            case 'u':
                resulText += 'ufat';
                break;
            default:
                resulText += textToCipher[i];
        }
    }
    console.log(resulText);
    return resulText;
}

function assignTextToElement() {
    let content = document.getElementById('textImput').value;
    let encryptedText = cipher(content)
    document.getElementById('result').innerHTML = encryptedText;
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