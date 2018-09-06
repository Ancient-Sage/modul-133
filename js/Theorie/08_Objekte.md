# Objekte

Objekte eignen sich um 'Dinge' unter Stichworten abzuspeichern. Objekte werden mit geschweiften Klammer notiert.

```js {cmd=node}

var person = {vorname: 'Yuki', nachname: 'Hasebe'}

console.log(person)
```

### Auf einzelne Elemente zugreifen

Auf Elemente eines Objektes können auf zwei Arten zugegriffen werden:

1. Punktnotation (bevorzugt)
2. Mit eckigen Klammern

```js {cmd=node}
var person = {
  vorname: 'Valerie',
  nachname: 'Mitterand',
  alter: 39
}

console.log(person.vorname)
console.log(person['nachname'])

var michInteressiert = 'nachname'
console.log(person[michInteressiert])
console.log(`Guten Tag Frau ${person[michInteressiert]}`)

person.nachname = 'Chapuix'
person.wohnort = 'Paris'

person['.'] = 'doofes Beispiel'
console.log(person)
// console.log(person..)  Fehler
console.log(person['.'])
```

Elemente eines Objektes können abgerufen, verändert und hinzugefügt werden.

### Über Objekte iterieren

Bei Objekte verwendet man das Keyword **in** fürs Iterieren. Man erhält dabei die Stichworte, unter welchen etwas abgespeichert ist.

```js {cmd=node}

var zahlen = {
  'Null': 0,   'Eins': 1,   'Zwei': 2,    'Drei': 3,
  'Vier': 4,   'Fünf': 5,   'Sechs': 6,   'Sieben': 7,
  'Acht': 8,   'Neun': 9,
}

for (var zahl in zahlen) {
  console.log(`Unter '${zahl}' ist ${zahlen[zahl]} abgespeichert.`)
}
console.log(zahlen.Null, zahlen['Null'])

```

### Objekte und Arrays können verschachtelt werden

```js {cmd=node}

var person = {
  name: 'Hans',
  muttersprache: 'Deutsch',
  sprachen: ['Englisch', 'Französisch'],
  hobbies: [
    {
      name: 'Schwimmen',
      kompetenz: 4,
      seit: 20,
    },
    {
      name: 'Dart',
      kompetenz: 9,
      seit: 18,
    },
    {
      name:'Eishockey schauen',
      seit: 5,
    }
  ]
}

var name = person.name
var lieblingsHobby

if (person.hobbies.length === 0) {
  console.log(`${name} hat keine Hobbies.`)
} else {
  lieblingsHobby = person.hobbies[0]

  for (var hobby of person.hobbies) {
    if (hobby.kompetenz > lieblingsHobby.kompetenz) {
      lieblingsHobby = hobby
    }
  }

  console.log(`Das Lieblingshobby von ${name} ist ${lieblingsHobby.name}.`)
}
```

### Funktionen in Objekte hinein packen (Methoden)

Objekte können auf Funktionen enthalten:

```js {cmd=node}
var person = {
  nickname: 'tutu',
  jahrgang: 1999,
  sagHallo: function (name) {
    if (name) {
      console.log(`Hi ${name}!`)
    } else {
      console.log('Hi!')
    }
  }
}

person.sagHallo()
person.sagHallo('Peter')
console.log(person.sagHallo)
```

Mit `this` kann in einer Methode auf das eigene Objekt zugegriffen werden. `this` zeigt immer auf das Objekt, was beim Aufruf direkt _vor_ dem Punkt steht.

```js {cmd=node}
var person = {
  name: 'Marie',
  stellDichVor: function () {
    //var meinName = person['name']
    var meinName = this.name
    //console.log('this:', this)
    console.log(`Guten Tag. Mein Name ist ${meinName}.`)
  },
  hobby: {
    name: 'Fussball',
    ausfuehren() {
      console.log(`${this.name}: Oléolé!`)
    }
  }
}

var vorstellungsFunktion = person.stellDichVor

console.log(vorstellungsFunktion)
vorstellungsFunktion()  // Achtung, Methode ist entwurzelt!

console.log(person.stellDichVor)
person.stellDichVor()
person.hobby.ausfuehren()
```

