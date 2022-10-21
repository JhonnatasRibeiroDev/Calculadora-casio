var luz = false
function calcular(tipo, valor){
    if(valor === 'c'){
        document.getElementById('tela').value = ''
    }
    if(tipo === 'valor'){
        document.getElementById('tela').value+= valor
    }else if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
        document.getElementById('tela').value += valor
    }
    if(valor === '='){
        var resultado = eval(document.getElementById('tela').value)
        document.getElementById('tela'). value = resultado
    }
}
function luzOn() {
    
    if(luz == false){
       // alert('ligou a luz!')
        luz = true
        var tela = document.getElementById('tela')
        tela.classList.add('inputo')
    }else if (luz == true) {
       // alert('Desligou a luz!')
        luz = false
        var tela = document.getElementById('tela')
        tela.classList.remove('inputo')
    }
}