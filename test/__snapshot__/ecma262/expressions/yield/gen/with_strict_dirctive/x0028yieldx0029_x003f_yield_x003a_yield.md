# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (yield) ? yield : yield
## Options

`````js
{}
`````
## Input

`````js
'use strict'; (yield) ? yield : yield
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 13,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 21
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 29
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 31
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 37
                },
                "flags": 45,
                "transformFlags": 0,
                "start": 13,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "'use strict'; (yield) ? yield : yield",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

'\'use strict\'';
(yield) ? yield : yield;
```

### Diagnostics

```javascript
✔ No errors
```

