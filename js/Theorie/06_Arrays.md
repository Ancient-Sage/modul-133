# Arrays

Mit eckigen Klammern können direkt Arrays angelegt werden.

```js {cmd=node}

var zahlen = [1, 2, 3]
var woerter = ["Eins", "Zwei", "Drei"]
var gemischt = [1, "Zwei", 3, "Vier"]

var leer = []

console.log(leer)
console.log(gemischt)
```

## Iterieren über Arrays

Bei Arrays verwendet man das Keyword **of** um darüber zu Iterieren.

```js {cmd=node}

var summe = 0
for (var zahl of [1, 2, 3, 5, 7, 11, 13]) {
  summe += zahl
}

console.log(summe)
```

## Auf Elemente zugreifen

```js {cmd=node}

var namen = ['Hans', 'Josephine', 'Joe', 'Tanako']

console.log(namen[0])  // -> Hans

namen[2] = 'Josh'
console.log(namen)
```


## Eigenschaften von Arrays

Arrays habe eine _Länge_.

```js {cmd=node}
var zahlen = [1, 2, 3]
console.log(zahlen.length)
```

Elemente hinzufügen mit `push`:
```js {cmd=node}
var zahlen = [1, 2, 3]

zahlen.push(4)

console.log(zahlen)
```

Element vom Ende der Liste entfernen (`pop`):
```js {cmd=node}
var todos = ['hausaufgaben', 'abwaschen', 'einkaufen']

var aktuell = todos.pop()

console.log('Aktuell:', aktuell)
console.log('Verbleibende Todos:', todos)
```

Elemente vom Anfang des Arrays entfernen und hinzufügen mit `unshift` und `shift`.
