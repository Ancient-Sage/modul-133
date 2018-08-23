# Zahlen

Es gibt nur einen _einzigen_ Datentyp für Zahlen: `double`

Beispiel:
```js {cmd=node}
console.log(1 + 1)
console.log(0.1 + 0.1)
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)
console.log(10000000000000 + 1)
```

Die üblichen Operatoren funktionieren wie gewohnt: `+`, `-`, `*`, `/`, `%`

_Empfehlung_: Auf `++` und `--` verzichten.

```js
var i = 0
//i++
i += 1
```

### Strings in Zahlen umwandeln

Mit den Funktionen `parseInt` und `parseFloat` können Strings in Zahlen umgewandelt werden.

```js {cmd=node}
var zahl = parseInt('41', 10)  // ... im Zehnersystem
console.log(zahl + 1)
console.log('41' + 1)
console.log(41 + (+'1'))  // HACK!

zahl = parseFloat("2.718")
console.log(zahl)

// Unbrauchbares am Ende wird ignoriert
zahl = parseInt("23dfaksdjföksad")
console.log(zahl)
```

### Eingebaute mathematische Funktionen

Im Objekt `Math` gibt es die gebräuchlichsten mathematischen Funktionen.

```js {cmd=node}
console.log(Math.pow(2, 5))
console.log(Math.cos(Math.PI))
console.log(Math.random())
```