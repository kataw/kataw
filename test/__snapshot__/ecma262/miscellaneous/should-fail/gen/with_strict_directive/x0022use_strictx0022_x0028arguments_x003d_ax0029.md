# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: "use strict"; (arguments = a)
## Options

`````js
{}
`````
## Input

`````js
"use strict"; "use strict"; (arguments = a)
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
        },
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 13,
            "end": 26
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
                        "start": 29,
                        "end": 38
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 38,
                        "end": 40
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 40,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 42
                },
                "flags": 27,
                "start": 34,
                "end": 43
            },
            "flags": 16,
            "start": 27,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; \"use strict\"; (arguments = a)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 38, end: 40

```

