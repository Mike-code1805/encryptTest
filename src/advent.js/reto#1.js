function findFirstRepeated(gifts) {
  let seen = new Set();
  for (const id of gifts) {
    if (seen.has(id)) {
      return id;
    }
    seen.add(id);
  }
  return -1;
}
