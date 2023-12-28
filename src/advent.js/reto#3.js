function findNaughtyStep(original, modified) {
  if (original === modified) return '';
  const loop = original.length > modified.length ? original : modified;
  for (const i in loop) {
    if (modified[i] !== original[i]) {
      return loop[i];
    }
  }
}

const original = 'abcd';
const modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // 'e'

const original1 = 'stepfor';
const modified1 = 'stepor';
console.log(findNaughtyStep(original1, modified1)); // 'f'

const original2 = 'abcde';
const modified2 = 'abcde';
console.log(findNaughtyStep(original2, modified2)); // ''
