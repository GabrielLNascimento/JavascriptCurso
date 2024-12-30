function digPow(n, p) {
    // Converter o número n para uma string para facilitar o acesso aos dígitos
    let digits = n.toString();
    let total = 0;
  
    // Iterar sobre cada dígito, calcular a soma dos dígitos elevados aos poderes consecutivos
    for (let i = 0; i < digits.length; i++) {
      total += Math.pow(parseInt(digits[i]), p + i);
    }
  
    // Verificar se total é divisível por n
    return total%n === 0 ? total / n : -1
  }
  
  // Exemplos de uso:
  console.log(digPow(89, 1));  // Output: 1
  console.log(digPow(92, 1));  // Output: -1
  console.log(digPow(695, 2)); // Output: 2
  console.log(digPow(46288, 3)); // Output: 51
  

function digitPow(n, p) {
    let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + 1), 0)
    return x%n ? -1 : x / n
}

console.log(digitPow(89, 1))