# Schleifen / Loops

## Altmodischer For-Loop

Traditioneller `for`-Loop, mit Initialisierung, Abbruchsbedingung, Inkrement.

```js {cmd=node}
for (var i=0; i<3; i++) {
  console.log(i)
}
```

## For-Loop

```js {cmd=node}
var text = 'ABC'

for (var char of text) {
  console.log(char)
}

var zahlen = [1, 2, 3]

for (var zahl of zahlen) {
  console.log(zahl)
}
```

## While-Loop

Einen durchaus praktischer `while`-Loop:

```js {cmd=node}
var done = false

var todos = ['einkaufen', 'putzen', 'essen']

var todosEssen = ['kochen', 'speisen', 'abwaschen']
//todosEssen.reverse()

while (!done) {
  if (todos.length === 0) { // Bin ich fertig?
    done = true
  } else {
    // Arbeit erledigen
    var currentTask = todos.pop()
    if (currentTask === 'essen') {
      for (var subTask of todosEssen) {
        todos.unshift(subTask)
      }
    } else {
      console.log(currentTask)
    }
  }
}
```