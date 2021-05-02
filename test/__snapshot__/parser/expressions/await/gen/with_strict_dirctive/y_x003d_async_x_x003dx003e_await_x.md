# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: y = async x => await x
## Input

`````js
'use strict'; y = async x => await x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 25,
                        "end": 28
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 17,
                        "end": 23
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 208,
                        "awaitToken": {
                            "kind": 82032,
                            "flags": 0,
                            "start": 28,
                            "end": 34
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 36
                    },
                    "flags": 288,
                    "start": 17,
                    "end": 36
                },
                "flags": 32,
                "start": 13,
                "end": 36
            },
            "flags": 16,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "'use strict'; y = async x => await x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

