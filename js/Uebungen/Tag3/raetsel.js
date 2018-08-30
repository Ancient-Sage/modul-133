var liste = [
  {a: 4, b: 5},
  {b: 4, c: 1, d: 2}
]

function berechneProdukt(obj) {
  console.log('obj', obj)
  var produkt = 1
  for (var stichwort in obj) {  // in !!   Stichworte in einem Objekt
    console.log('stichwort', stichwort)
    produkt = produkt * obj[stichwort]
  }
  return produkt
}

var summeB = 0

for (var element of liste) {   // of !!   Elemente in einer Liste
  summeB += berechneProdukt(element)
}

console.log(summeB)
