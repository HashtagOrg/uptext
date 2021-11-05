# uptext
You Can Use This Package for Capitalize Each Word First Letter.


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

Performing `Capitalize` Each Word First Letter.

### NodeJS

```js
const capText = require('uptext');

// Perform text capitalization
let text = "hello, i'm using uptext to capitalize each word first letter";

// function
capText(text)

// Console
console.log(capText(text))

// Results
Output: Hello, I'm Using Uptext To Capitalize Each Word First Letter

```

### ReactJS

```js
import React from 'react';
import capText from 'uptext';

export default function Header() {
    let text = "hello, i'm using uptext to capitalize each word first letter";
    return (
        <React.Fragment>
            {capText(text)}

            {/* Or */}
            {capText("hello, i'm using uptext to capitalize each word first letter")}


            {/* Results */}
            Hello, I'm Using Uptext To Capitalize Each Word First Letter
        </React.Fragment>
    )
}

```


> **NOTE:** The `text` should be a string, you need to pass a string as an argument.

## License
ISC License