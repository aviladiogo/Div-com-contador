console.log('hello!')
vezes = 0 
function executaAcao(){
  var resultadoD = document.getElementById('name')
  vezes += 1
  resultadoD.innerHTML = vezes
}

function zerar (){
  var resultadoD = document.getElementById('name')
  vezes = 0
  resultadoD.innerHTML = vezes
}