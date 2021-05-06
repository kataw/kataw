# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: async funcion switch!!
## Input

`````js
do {} while (x) { async funcion switch!!
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "funcion",
                                "rawText": "funcion",
                                "flags": 96,
                                "start": 23,
                                "end": 31
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 17,
                                "end": 23
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 38,
                                    "end": 39
                                },
                                "operand": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 39,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 40
                            },
                            "flags": 288,
                            "start": 17,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 40
            },
            "flags": 16,
            "start": 15,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { async funcion switch!!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 40, end: 40

```

