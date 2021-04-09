# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
async function a(){     async ({r} = await bar);     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 29
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 81921,
                                                            "value": "r",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 32,
                                                            "end": 33
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 31,
                                                "end": 34
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 34,
                                                "end": 36
                                            },
                                            "right": {
                                                "kind": 208,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "bar",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 42,
                                                    "end": 46
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 36,
                                                "end": 46
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 31,
                                            "end": 46
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 31,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 47
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 19,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "async function a(){     async ({r} = await bar);     }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
async function a(){     async ({r} = await bar);     }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
async function a(){     async ({r} = await bar);     }
`````
```

