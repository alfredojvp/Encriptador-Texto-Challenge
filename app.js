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

function decipher() {
    let resulText = '';
    let textToDecipher = document.getElementById('textImput').value;
    for (let i = 0; i < textToDecipher.length; i++) {
        if (textToDecipher.startsWith('enter', i)) {
            resulText += 'e'
            i += 4; //Saltar los siguientes 4 caracteres ('enter')
        } else if (textToDecipher.startsWith('imes', i)) {
            resulText += 'i';
            i += 3; //Saltar los siguientes 3 carcateres ('imes')
        } else if (textToDecipher.startsWith('ai', i)) {
            resulText += 'a';
            i += 1; //Saltar los siguientes 2 carcateres ('ai')
        } else if (textToDecipher.startsWith('ober', i)) {
            resulText += 'o';
            i += 3; //Saltar los siguientes 4 carcateres ('ober')
        } else if (textToDecipher.startsWith('ufat', i)) {
            resulText += 'u';
            i += 3; //Saltar los siguientes 4 carcateres ('ufat')
        } else {
            resulText += textToDecipher[i];
        }
    }
    console.log(resulText);
    return resulText;
}

function showEncryptedText() {
    let content = document.getElementById('textImput').value;
    let encryptedText = cipher(content)
    document.getElementById('result').innerHTML = encryptedText;
    return;
}
document.getElementById('showResult').addEventListener('click', cipher);

function showDecryptedText() {
    let content = document.getElementById('textImput').value;
    let decryptedText = decipher(content)
    document.getElementById('result').innerHTML = decryptedText;
    return;
}
document.getElementById('showDecryptedResult').addEventListener('click', decipher);

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