# Funktionen

Es gibt zwei typische Arten von Funktionen.

1. Eher mathematische Funktionen, welche aus einem oder mehreren Eingabewerten einen Ausgabewert berechnen.

```js {cmd=node}

function quadrieren(a) {
  return a * a
}

console.log(quadrieren(12))
```

2. Sogenannte Prozeduren, welche zusammengefasste Code-Stücke enthalten, welche man wiederholt aufrufen kann.

```js {cmd=node}

function strophe() {
  console.log(`Auf der Mauer, auf der Lauer,
sitzt 'ne kleine Wanze.`)
}

strophe()
strophe()
strophe()
```


## Argumente

Man kann in JS Funktionen beliebig viele Argumente übergeben.

```js {cmd=node}

function nichtViel(a, b, c) {
  console.log('a:', a)
  console.log('b:', b)
  console.log('c:', c)
}

nichtViel(1, 2, 3)
console.log('------')
nichtViel(1, 2, 3, 4)
console.log('------')
nichtViel(1)
```

## Funktionen die sich selbst aufrufen (Rekursion)

Einfaches Beispiel: Countdown von 10 auf 0.
```js {cmd=node}

function countdown(start) {
  if (start === 0) {
    console.log('LIFT OFF!!!')
  } else {
    console.log(start)
    countdown(start -1)
  }
}

countdown(10)
```

Komplizierteres Beispiel: Arrays sortieren.
```js {cmd=node}
var zahlen = [3, 7, 2, 12, 5, 9, 1]

function sort(liste) {
  console.log("*", liste)
  if (liste.length <= 1) {
    return liste
  } else {
    var referenz = liste[0]
    var kleiner = []
    var gleich = []
    var groesser = []

    for (var el of liste) {
      if (el < referenz) {
        kleiner.push(el)
      } else if (el === referenz) {
        gleich.push(el)
      } else {
        groesser.push(el)
      }
    }

    return sort(kleiner).concat(gleich, sort(groesser))
  }
}

var sortierteZahlen = sort(zahlen)
console.log(zahlen)
console.log(sortierteZahlen)
```
