# uptext
You Can Use This Package for Upper Case, Capitalize and Lower Case Each Word.


## Installing

Using npm:

```bash
$ npm install uptext
```

Using bower:

```bash
$ bower install uptext
```

Using yarn:

```bash
$ yarn add uptext
```

## Example

Performing `UpperCase` Each Word.
### NodeJS

```js
const { uppText } = require('uptext');

// Perform text capitalization
let text = "hello, i'm using uptext to uppercase, capitalize and lowercase text";

// function
uppText(text)

// Console
console.log(uppText(text))

// Results
// Output: HELLO, I'M USING UPTEXT TO UPPERCASE, CAPITALIZE AND LOWERCASE TEXT

```
### ReactJS

```js
import React from 'react';
import { uppText } from 'uptext';

export default function Header() {
    let text = "hello, i'm using uptext to uppercase, capitalize and lowercase text";
    return (
        <React.Fragment>
            {uppText(text)}

            {/* Or */}
            {uppText("hello, i'm using uptext to uppercase, capitalize and lowercase text")}


            {/* Results */}
            HELLO, I'M USING UPTEXT TO UPPERCASE, CAPITALIZE AND LOWERCASE TEXT
        </React.Fragment>
    )
}

```


Performing `Capitalize` Each Word First Letter.
### NodeJS

```js
const capText = require('uptext');

// Perform text capitalization
let text = "hello, i'm using uptext to uppercase, capitalize and lowercase text";

// function
capText(text)

// Console
console.log(capText(text))

// Results
// Output: Hello, I'm Using Uptext To Capitalize Each Word First Letter

```

### ReactJS

```js
import React from 'react';
import capText from 'uptext';

export default function Header() {
    let text = "hello, i'm using uptext to uppercase, capitalize and lowercase text";
    return (
        <React.Fragment>
            {capText(text)}

            {/* Or */}
            {capText("hello, i'm using uptext to uppercase, capitalize and lowercase text")}


            {/* Results */}
            Hello, I'm Using Uptext To Uppercase, Capitalize And Lowercase Text
        </React.Fragment>
    )
}

```

Performing `LowerCase` Each Word.
### NodeJS

```js
const { lowText } = require('uptext');

// Perform text capitalization
let text = "HELLO, I'M USING UPTEXT TO UPPERCASE, CAPITALIZE AND LOWERCASE TEXT";

// function
lowText(text)

// Console
console.log(lowText(text))

// Results
// Output: hello, i'm using uptext to uppercase, capitalize and lowercase text

```

### ReactJS

```js
import React from 'react';
import {lowText} from 'uptext';

export default function Header() {
    let text = "HELLO, I'M USING UPTEXT TO UPPERCASE, CAPITALIZE AND LOWERCASE TEXT";
    return (
        <React.Fragment>
            {lowText(text)}

            {/* Or */}
            {lowText("HELLO, I'M USING UPTEXT TO UPPERCASE, CAPITALIZE AND LOWERCASE TEXT")}


            {/* Results */}
            hello, i'm using uptext to uppercase, capitalize and lowercase text
        </React.Fragment>
    )
}

```


Performing `UpperCase, Capitalize, LowerCase` Each Word.
### NodeJS

```js
const { uppText, capText, lowText } = require('uptext');

// Perform text capitalization
let text1 = "hello world";
let text2 = "HELLO WORLD";
let text3 = "HELLO WORLD";

// UpperCase
uppText(text1) // Output: HELLO WORLD

// Capitalize
capText(text2) // Output: Hello World

// LowerCase
lowText(text3) // Output: hello world

```

### ReactJS

```js
import React from 'react';
import { uppText, capText, lowText } from 'uptext';

export default function Header() {
    let text1 = "hello world";
    let text2 = "HELLO WORLD";
    let text3 = "HELLO WORLD";
    return (
        <React.Fragment>
            {uppText(text1)}
            Output: HELLO WORLD

            {capText(text2)}
            Output: Hello World

            {lowText(text3)}
            Output: hello world
        </React.Fragment>
    )
}

```


> **NOTE:** The `text` should be a string, you need to pass a string as an argument.
> **NOTE:** For Example: capText("hello")

## License
ISC License