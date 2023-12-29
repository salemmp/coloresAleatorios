const body=document.querySelector("body")
const hexadecimal=document.getElementById("hexadecimal")

function fondo(){
    let digitos="0123456789ABCDEF"
    let colorHex="#"

    for (let i = 0; i <6; i++) {
        let indiceAleatorio= Math.floor(Math.random()*16)
        colorHex+=digitos[indiceAleatorio]}
    
    body.style.backgroundColor=colorHex
    hexadecimal.innerText=colorHex
}
// 12:59 26/12/2023