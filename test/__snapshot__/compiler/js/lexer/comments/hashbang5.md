# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js

"use strict";
#!

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\n\"use strict\";\n#!\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "!",
                "operand": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 32769,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 17
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 16,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

