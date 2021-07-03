# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: "use strict"; (arguments = a)
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (arguments = a)
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "arguments",
                        "rawText": "arguments",
                        "flags": 96,
                        "start": 15,
                        "end": 24
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 28
                },
                "flags": 13,
                "start": 34,
                "end": 29
            },
            "flags": 16,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (arguments = a)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 24, end: 26

```

