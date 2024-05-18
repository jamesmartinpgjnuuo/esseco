function addOrConcat(a: number, b: number, operation: 'add' | 'concat'): number | string {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'concat') {
    return `${a}${b}`;
  } else {
    throw new Error('Invalid operation');
  }
}
