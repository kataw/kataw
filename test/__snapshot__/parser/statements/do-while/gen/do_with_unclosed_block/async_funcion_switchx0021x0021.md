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

### Hybrid CST

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
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 5,
                "start": 0,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "flags": 128,
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
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "funcion",
                                        "rawText": "funcion",
                                        "flags": 768,
                                        "start": 23,
                                        "end": 31
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 31
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 17,
                                "start": 512,
                                "end": 23
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 512,
                                    "start": 38,
                                    "end": 39
                                },
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 512,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 256,
                                    "start": 39,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 38,
                                "end": 40
                            },
                            "flags": 2304,
                            "start": 17,
                            "end": 40
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 40
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 40
            },
            "flags": 128,
            "start": 15,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { async funcion switch!!",
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

