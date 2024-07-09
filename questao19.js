function persistenciaMultiplicativa(numero) {
    let persistencia = 0;
  
    while (numero >= 10) {
      let produtoAlgarismos = 1;
      
      const algarismos = numero.toString().split('');
  
      for (const algarismo of algarismos) {
        produtoAlgarismos *= parseInt(algarismo, 10);
      }
  
      numero = produtoAlgarismos;
      persistencia++;
    }
  
    return persistencia;
  }
  

  const valor = 7169;
  const persistencia = persistenciaMultiplicativa(valor);
  console.log(`A persistência multiplicativa de ${valor} é: ${persistencia}`);
