// Exercicio 5

function inverterString(input: string): string {
  let invertida = "";

  // Percorre a string de trás para frente
  for (let i = input.length - 1; i >= 0; i--) {
    invertida += input[i];
  }

  return invertida;
}

// String a ser invertida
const stringOriginal = "Exemplo de string para inverter";
const stringInvertida = inverterString(stringOriginal);

// Exibe o resultado
console.log(`String Original: "${stringOriginal}"`);
console.log(`String Invertida: "${stringInvertida}"`);
