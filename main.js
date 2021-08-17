// function focusprueba ()  {
//     alert ('hola')
// }

function Myselect (){
    let x = document.getElementById("Myselect").value
    document.getElementById("resultado").innerHTML = x
}

function input (){
    let inputValue = document.getElementById("input")
    alert(inputValue.value)
}

const selectElement = document.querySelector('.helado')

selectElement,addEventListener('change', (event) =>{
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML= event.target.value
})