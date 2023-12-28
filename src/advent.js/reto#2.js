function manufacture(gifts, materials) {
  let array = [];
  for (const i in gifts) {
    let count = 0;
    for (let j in gifts[i]) {
      const include = materials.includes(gifts[i][j]);
      if (include) {
        count++;
      }
    }
    if (count === gifts[i].length) {
      array.push(gifts[i]);
    }
  }
  return array;
}
const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';

console.log(manufacture(gifts2, materials2)); // ["puzzle"]
const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';

console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['libro', 'ps5'];
const materials = 'psli';

console.log(manufacture(gifts, materials)); // []

// function manufacture(gifts, materials) {
//   const regex = new RegExp(`^[${materials}]+${'$'}`);
//   return gifts.filter(regex.test.bind(regex));
// }
// const gifts2 = ['juego', 'puzzle'];
// const materials2 = 'jlepuz';

// console.log(manufacture(gifts2, materials2)); // ["puzzle"]
// const gifts1 = ['tren', 'oso', 'pelota'];
// const materials1 = 'tronesa';

// console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]
// // 'tren' SÍ porque sus letras están en 'tronesa'
// // 'oso' SÍ porque sus letras están en 'tronesa'
// // 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ['libro', 'ps5'];
// const materials = 'psli';

// console.log(manufacture(gifts, materials)); // []
