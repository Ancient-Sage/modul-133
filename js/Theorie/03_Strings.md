# Strings

Strings können mit einfachen und doppelten Anführungszeichen gekennzeichnet werden.


Beispiele:
```js {cmd=node}
console.log("Guten Tag")
console.log('Hello World!')
console.log('Sie hat "Hallo" gesagt')
console.log('Er ass bei "Johnny\'s Grill" einen Burger')
console.log('Fest gemauert in der Erde\nsteht die ...')
console.log('Früh morgens, Assalé, Nsamé, Oléolé, 富士山, \u21B7')
```
**Tipp**: In JS-Code einfache Anführungszeichen verwenden, in HTML doppelte.

### Template-Strings

Template-Strings werden mit einfache Backticks (\`) gemacht. Sie eignen sich gut für mehrzeiligen Text. Mit `${}` kann man beliebige Variablen einfügen.

Beispiele:
```js {cmd=node}

var text = `Drei
Zwei
Eins
TAKE OFF!!!`
console.log(text)

var anrede = 'His royal highness'
var titel = 'Prince'
var vorname = 'Charles'
console.log(`${anrede} ${titel} ${vorname} mag gerne Tiere.`)

anrede = 'Her majesty'
titel = 'Queen'
vorname = 'Elisabeth'
console.log(`${anrede} ${titel} ${vorname} mag gerne Tiere.`)
```

### Methoden von Strings

Überflüssige Leerzeichen entfernen:
```js {cmd=node}
var eingabe = '    Hanna  \n\n'
console.log(eingabe)
console.log(eingabe.trim())
```

Den Anfang des Strings überprüfen:
```js {cmd=node}
var url = ' HTTPS://github.com/tfbern'
var isSecure = url.trim().toLowerCase().startsWith('https')
console.log('Sichere Verbindung:', isSecure)
```