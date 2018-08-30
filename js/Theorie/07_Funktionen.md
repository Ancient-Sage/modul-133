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
