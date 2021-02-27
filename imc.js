
function IMC () {
  const Altura = document.getElementById('Altura').value;
  const Peso = document.getElementById('Peso').value;
  var imc=Peso/(Altura/100*Altura/100)
  var imcr=(imc.toFixed(2))

  document.getElementById('Resultado').innerHTML='Tu IMC es ' + imcr;
}
