// Exercicio 1
// R: 91

// Exercicio 2

function isFibonacciNumber(num: number): string {
  if (num < 0) {
    return "O número informado deve ser maior ou igual a zero.";
  }

  const fibonacciSequence: number[] = [0, 1];

  // Gera a sequência de Fibonacci até o número informado
  while (fibonacciSequence[fibonacciSequence.length - 1] < num) {
    const nextValue =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextValue);
  }

  // Verifica se o número pertence à sequência
  if (fibonacciSequence.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci: [${fibonacciSequence.join(
      ", "
    )}].`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci. Sequência gerada: [${fibonacciSequence.join(
      ", "
    )}].`;
  }
}

// Testando o programa com diferentes valores
console.log(isFibonacciNumber(8)); // Pertence
console.log(isFibonacciNumber(4)); // Não pertence
console.log(isFibonacciNumber(13)); // Pertence
console.log(isFibonacciNumber(-5)); // Inválido
