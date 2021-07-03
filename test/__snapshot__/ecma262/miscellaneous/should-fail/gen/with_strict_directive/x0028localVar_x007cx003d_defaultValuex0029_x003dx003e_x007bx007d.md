# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: (localVar |= defaultValue) => {}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (localVar |= defaultValue) => {}
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
                        "text": "localVar",
                        "rawText": "localVar",
                        "flags": 96,
                        "start": 15,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4136,
                        "flags": 96,
                        "start": 23,
                        "end": 26
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "defaultValue",
                        "rawText": "defaultValue",
                        "flags": 96,
                        "start": 26,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 39
                },
                "flags": 13,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "start": 13,
            "end": 40
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 45,
                "end": 45
            },
            "flags": 16,
            "start": 43,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (localVar |= defaultValue) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 40, end: 43

```

