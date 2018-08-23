# JS Syntax

### Variablen definieren

JS hat keine statischen Typen, das heisst, man muss beim Definieren von Variablen keinen Datentyp angeben.

Stattdessen verwenden wir das Keyword `var`.

Beispiel:
```js {cmd=node}
var name = "Marco"
console.log(name)

var x = 1
console.log("x:", x)
x = "Eins"
console.log("x:", x)
```

**Achtung:** Wenn man `var` vergisst, wird eine globale Variabel definiert!

```js {cmd=node}
x = 5
console.log(5)
```

Zusätzlich gibt es noch `let` und `const` um Variablen bzw. Konstanten zu definieren.

Beispiel:
```js {cmd=node}
const PI = 3.1459
PI = 3   // Error
```
#### Gross- und Kleinschreibung wird unterschieden

```js {cmd=node}
var name = "Kurt"
console.log(Name)  // Error
```

### Kommentare

Kommentare sind exakt gleich wie bei Java.

Beispiel:
```js {cmd=node}
console.log(1)
//console.log(2)
console.log(3); //console.log(4)
/* console.log(5)
console.log(6) */
```

### Semikolon

Semikolone sind in JS optional.