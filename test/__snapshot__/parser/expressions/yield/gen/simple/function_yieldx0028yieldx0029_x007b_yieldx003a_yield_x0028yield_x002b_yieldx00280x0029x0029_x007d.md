# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function yield(yield) { yield: yield (yield + yield(0)); }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "yield",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 15,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 15,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 81921,
                                "value": "yield",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 23,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 23,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 30,
                    "end": 36
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "yield",
                                "autofix": 0,
                                "flags": 768,
                                "start": 38,
                                "end": 43
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "autofix": 0,
                                "flags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 45,
                                    "end": 51
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 52,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 52,
                                    "end": 53
                                },
                                "flags": 256,
                                "start": 45,
                                "end": 54
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 38,
                            "end": 54
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 38,
                    "end": 54
                },
                "flags": 256,
                "start": 30,
                "end": 55
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "function yield(yield) { yield: yield (yield + yield(0)); }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 29,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 56,
            "end": 58
        }
    ],
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function yield(yield) { yield: yield (yield + yield(0)); }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function yield(yield) { yield: yield (yield + yield(0)); }
`````
```

