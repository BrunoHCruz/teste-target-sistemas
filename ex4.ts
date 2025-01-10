// Exercicio 4

interface FaturamentoEstado {
  estado: string;
  valor: number;
}

const faturamentoMensal: FaturamentoEstado[] = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

function calcularPercentuais(faturamento: FaturamentoEstado[]) {
  // Calcula o faturamento total
  const faturamentoTotal = faturamento.reduce(
    (acc, item) => acc + item.valor,
    0
  );

  // Calcula o percentual de cada estado
  const percentuais = faturamento.map((item) => ({
    estado: item.estado,
    percentual: (item.valor / faturamentoTotal) * 100,
  }));

  return { faturamentoTotal, percentuais };
}

const resultado = calcularPercentuais(faturamentoMensal);

// Exibe os resultados
console.log(`Faturamento Total: R$ ${resultado.faturamentoTotal.toFixed(2)}`);
resultado.percentuais.forEach(({ estado, percentual }) => {
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
});
