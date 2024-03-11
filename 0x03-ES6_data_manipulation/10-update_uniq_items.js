export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('cannot process');
  }

  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
}
