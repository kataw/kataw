# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: a = async function() { g(await) }
## Input

`````js
a = async function() { g(await) }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 177,
                    "asyncToken": {
                        "kind": 82031,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "g",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 208,
                                                    "expression": {
                                                        "kind": 253,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 30,
                                                        "end": 30
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 25,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 31
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 22,
                                    "end": 31
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 22,
                            "end": 31
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 33
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 1280,
                    "start": 3,
                    "end": 33
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "a = async function() { g(await) }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 30,
            "end": 31
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: a = async function() { g(await) }
## Input

`````js
a = async function() { g(await) }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: a = async function() { g(await) }
## Input

`````js
a = async function() { g(await) }
`````
```

