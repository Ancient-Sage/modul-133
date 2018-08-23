# Übungsblatt 2

## Aufgabe 1

Schreib eine Funktion `reversedWord`, welche ein Wort als Argument entgegen nimmt, und das Wort umkehrt.

Der folgende Code sollte `true` ausgeben;
```js
console.log(reversedWord('hallo') === 'ollah')
```

**Tipp**: Benutze dazu die Methond `split` von Strings, und die Methode `join` von den Arrays.
* [String.split Beispiele](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/split#Examples)
* [Array.join Beispiele](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join#Examples)


## Aufgabe 2

Schreib eine Funktion `isPalindrome`, welche Überprüft, ob ein Wort ein Palindrom ist.

Der folgende Code sollte `true` ausgeben;
```js
console.log(isPalindrome('wasitacatisaw'))
```

**Tipp**: Benutze die `reversedWord` Funktion aus der Aufgabe 1.

## Aufgabe 3

_a)_ Fülle mit eine traditionellen `for`-Loop ein Array `zahlen` mit den Zahlen von 1 bis 100.
_b)_ Generiere mit den Zahlen von 1 bis 100 einen neuen Array `quadratZahlen` mit den Quadratzahlen von 1 bis 10'000. Benutze eine _normalen_ `for`-Loop.
_c)_ Addiere alle Quadratzahlen von 1 bis 10'000 und gib sie auf der Konsole aus. Verwende dazu einen `while`-Loop.
