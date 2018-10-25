# Repetition

### Einfache Funktion

Mehrere Anweisungen können unter einem Namen abgespeichert, und später beliebig oft ausgeführt werden.
```js  {cmd=node}

function begruessung() {
  console.log('Guten Tag!')
  console.log('Ich wünsche ihnen viel Erfolg.')
}

console.log('1. Aufruf')
begruessung()
console.log('2. Aufruf')
begruessung()
```

### Funktion mit einem Parameter

Die Ausführung des abgespeicherten Codes kann anpassbar gemacht werden, indem Funktionsparameter verwendet werden.

```js  {cmd=node}

function begruessung(vorname) {
  console.log('Guten Tag ' + vorname + '!')
  console.log('Ich wünsche ihnen viel Erfolg.')
}

console.log('1. Aufruf')
begruessung('Ali')
console.log('2. Aufruf')
name = 'Supatra'
begruessung(name)
```


### Funktion mit mehreren Parametern

Eine Funktion kann beliebig viele Parameter entgegen nehmen. Die Parameter sind lokale Variablen innerhalb des Funktionsaufrufes. Die lokalen Variablen sind nur innerhalb des Funktionsaufrufs verfügbar. Ausserhalb existieren sie nicht.

```js  {cmd=node}

function begruessung(vorname, nachname) {
  var full_name = vorname + ' ' + nachname
  console.log('Guten Tag ' + full_name + '!')
  console.log('Ich wünsche ihnen viel Erfolg.')
}

console.log('1. Aufruf')
begruessung('Ali', 'Ülgen')
console.log('2. Aufruf')
first = 'Supatra'
last = 'Reber'
begruessung(first, last)

// console.log(vorname)     vorname existiert als Variable nicht
// console.log(full_name)   das gleiche gilt für full_name
```

### Funktion mit Rückgabewert

Ein Funktionsaufruf kann ein Resultat berechnen, und dieses zurück geben. Das Resultat der Berechnung erscheint an der Stelle des ursprünglichen Funktionsaufrufes.

```js {cmd=node}
function addition(a, b, c) {
  console.log('Funktionsstart:', a, b, c)
  var resultat = a + b + c
  console.log('Resultat:', resultat)
  return resultat
}

var rueckgabewert = addition(1, 2, 3)
console.log(rueckgabewert)

rueckgabewert = addition(10, 11, 12)
console.log(rueckgabewert)
```

### Eingebaute Funktionen

JS enthält zahlreiche vordefinierte Funktionen. Hier drei Beispiele:

```js {cmd=node}
var zweiHochZehn = Math.pow(2, 10)
console.log('Zwei hoch Zehn sind', zweiHochZehn)

var zufallszahl
zufallszahl = Math.random()            // z.Bsp.: 0.754
zufallszahl = zufallszahl * 10         // z.Bsp.: 7.54
zufallszahl = Math.round(zufallszahl)  // z.Bsp.: 8

// var zufallszahl = Math.round(Math.random() * 10)

console.log('Zufallszahl:', zufallszahl)
```

----

### Beispiel aus dem Test

Hier ein komplexes Beispiel ohne Sinn und Zweck:

```js  {cmd=node}

function func(x, y, z) {
  console.log('y:', y)
  if (z > 0) {
    return x + ' / y'
  } else {
    console.log('Negatives z')
    return y + ' / x'
  }
}

func('Klaus', 'Günter', -1)
console.log(func('Gertrud', 'Maria', 1))
```
