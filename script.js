const usuario = {
    altura: '',
    peso: ''
  };
  
  const resultado = document.getElementById('resultado');
  console.log(resultado);
  
  document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
  
    const peso_usuario = parseFloat(document.getElementById('peso').value);
    const altura_usuario = parseFloat(document.getElementById('altura').value);
  
    if (isNaN(peso_usuario) || isNaN(altura_usuario)) {
      alert("Preencha os campos de PESO e ALTURA corretamente!");
      return;
    }
  
    const calculoIMC = (peso_usuario / (altura_usuario * altura_usuario)).toFixed(2);
  
    resultado.innerHTML = calculoIMC;
    console.log(resultado);
  
// parametro para o calculoIMC

    if (calculoIMC < 18.5) {
      document.getElementById('resultado').innerHTML = `Seu IMC é ${calculoIMC} e você está abaixo do peso.`;
      document.getElementById('resultado').style.color ='red';
     
    } else if (calculoIMC >= 18.6 && calculoIMC <= 24.9) {
      document.getElementById('resultado').innerHTML = `Seu IMC é ${calculoIMC} e você está no peso ideal.`;
      document.getElementById('resultado').style.color ='light green';
    
    } else if (calculoIMC >= 25.0 && calculoIMC <= 29.9) {
      
      document.getElementById('resultado').innerHTML = `Seu IMC é ${calculoIMC} e você está acima do peso.`;
      document.getElementById('resultado').style.color ='red';
      
    } else if(calculoIMC>=30.0 && calculoIMC <=34.9) {
      
      document.getElementById('resultado').innerHTML = `Seu IMC é ${calculoIMC} e indica Obesidade Grau I.`;
      document.getElementById('resultado').style.color ='purple';
     
    } else if (calculoIMC>=35.0 && calculoIMC <=39.9){
    document.getElementById('resultado').innerHTML = `Seu IMC é ${calculoIMC} e indica Obesidade Grau II.`;
    document.getElementById('resultado').style.color ='purple';
   
}   else {
    document.getElementById('resultado').innerHTML = `Seu IMC é ${calculoIMC} e indica Obesidade Grau III.`;
    document.getElementById('resultado').style.color ='purple';
   
}
    alert("Enviado com sucesso!");
    alert("Lembre-se o IMC não é o único parâmetro utilizado para monitorar sua saúde, procure o médico mais próximo!")
    console.log(usuario);
  });
  