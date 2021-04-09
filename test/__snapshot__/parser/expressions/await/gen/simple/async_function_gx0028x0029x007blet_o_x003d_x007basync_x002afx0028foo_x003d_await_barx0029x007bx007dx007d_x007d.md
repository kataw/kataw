# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
async function g(){let o = {async *f(foo = await bar){}}    }
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
                "value": "g",
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
                            "kind": 162,
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "o",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 81921,
                                                            "value": "f",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 35,
                                                            "end": 36
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 81921,
                                                                        "value": "foo",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 37,
                                                                        "end": 40
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 208,
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "value": "bar",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 48,
                                                                            "end": 52
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 42,
                                                                        "end": 52
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 37,
                                                                    "end": 52
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 37,
                                                            "end": 53
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "statements": [],
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 54,
                                                                "end": 54
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 53,
                                                            "end": 55
                                                        },
                                                        "autofix": 0,
                                                        "flags": 3328,
                                                        "start": 36,
                                                        "end": 55
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 28,
                                                "end": 55
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 26,
                                            "end": 56
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 22,
                                        "end": 56
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 22,
                                "end": 56
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 19,
                            "end": 56
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 56
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "async function g(){let o = {async *f(foo = await bar){}}    }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
async function g(){let o = {async *f(foo = await bar){}}    }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
async function g(){let o = {async *f(foo = await bar){}}    }
`````
```

