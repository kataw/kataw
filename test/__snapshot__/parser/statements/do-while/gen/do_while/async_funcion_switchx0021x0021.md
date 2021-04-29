# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do while
> :: case: async funcion switch!!
## Input

`````js
do async funcion switch!! while
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 31,
                "end": 31
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 25,
                "end": 31
            },
            "statement": {
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
                                "flags": 96,
                                "start": 8,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 2,
                            "end": 16
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 2,
                        "end": 8
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 23,
                            "end": 24
                        },
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 24,
                                "end": 25
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 288,
                    "start": 2,
                    "end": 25
                },
                "flags": 16,
                "start": 2,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "do async funcion switch!! while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 25, end: 31
✖ Expression expected - start: 31, end: 31

```

