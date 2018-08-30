var textfield = document.getElementById('stichwort')
var outSpan = document.getElementById('uebersetzung')
var sprachen = document.getElementsByName('sprache')

var de_fr = {
  'Guten Tag': 'bonjour',
  'Hund': 'chien',
}

var fr_de = {}

for (var deutsch in de_fr) {
  var franz = de_fr[deutsch]
  //console.log(deutsch, franz)
  fr_de[franz] = deutsch
}

console.log(fr_de)

function uebersetzen() {
  var sprache = 'de_fr'

  for (var sprachRadio of sprachen) {
    if (sprachRadio.checked) {
      sprache = sprachRadio.value
    }
  }

  outSpan.innerHTML = '<i>nicht gefunden</i>'

  var dict;
  if (sprache === 'de_fr') {
    dict = de_fr
  } else if (sprache === 'fr_de') {
    dict = fr_de
  } else {
    console.error('Etwas ist gar nicht gut')
  }

  for (var stichwort in dict) {
    if (textfield.value === stichwort) {
      outSpan.innerHTML = dict[stichwort]
    }
  }
}
