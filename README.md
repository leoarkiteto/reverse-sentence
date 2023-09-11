# reverse-sentence
Reverses the words of a sentence.

## Install
```sh
pnpm install @leofranca/reverse-sentence
```

## API
```js
require("reverse-sentence") => Function;
reverse(sentence) => String;
```

## Example
```js
import reverseSentence from "reverse-sentence";

const sentence = "Hello Beth!";
const reversed = reverseSentence(sentence);

console.log(reversed); // Beth! Hello
```

## License
ISC
