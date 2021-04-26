# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: async funcion switch!!
## Input

`````js
do do do async funcion switch!! while while while
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 49,
                "end": 49
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 43,
                "end": 49
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 43,
                    "end": 43
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 37,
                    "end": 43
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 768,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 37,
                        "end": 37
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 768,
                        "start": 31,
                        "end": 37
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
                                        "flags": 768,
                                        "start": 14,
                                        "end": 22
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 22
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 8,
                                "end": 14
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 30
                                },
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 768,
                                        "start": 30,
                                        "end": 31
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 256,
                                    "start": 30,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 2304,
                            "start": 8,
                            "end": 31
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 31
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 37
                },
                "flags": 128,
                "start": 2,
                "end": 43
            },
            "flags": 128,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "do do do async funcion switch!! while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 31, end: 37
@{x2716}@ Expression expected - start: 37, end: 43
@{x2716}@ Expression expected - start: 43, end: 49
@{x2716}@ Expression expected - start: 49, end: 49

```

