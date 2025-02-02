function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

function subtractSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA - numB;
}

let result1 = add(5, 3); // Correct: 8
let result2 = subtract(10, 4); // Correct: 6
let result3 = addSafe(5, "3");  // Correct: 8
let result4 = subtractSafe(10, "4"); // Correct: 6
let result5 = addSafe("5", "3"); //Correct: 8
let result6 = subtractSafe("10", "4"); //Correct: 6