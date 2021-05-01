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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "original": "g",
                "text": "g",
                "rawText": " g",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 19,
                                "end": 22
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "original": "o",
                                            "text": "o",
                                            "rawText": " o",
                                            "flags": 96,
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
                                                            "kind": 134299649,
                                                            "original": "f",
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 96,
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
                                                                        "kind": 134299649,
                                                                        "original": "foo",
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "start": 37,
                                                                        "end": 40
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 208,
                                                                        "awaitToken": {
                                                                            "kind": 82032,
                                                                            "flags": 0,
                                                                            "start": 42,
                                                                            "end": 48
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "original": "bar",
                                                                            "text": "bar",
                                                                            "rawText": " bar",
                                                                            "flags": 96,
                                                                            "start": 48,
                                                                            "end": 52
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 42,
                                                                        "end": 52
                                                                    },
                                                                    "flags": 34,
                                                                    "start": 37,
                                                                    "end": 52
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 418,
                                                            "start": 37,
                                                            "end": 53
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 54,
                                                                "end": 54
                                                            },
                                                            "flags": 32,
                                                            "start": 53,
                                                            "end": 55
                                                        },
                                                        "flags": 416,
                                                        "start": 36,
                                                        "end": 55
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 28,
                                                "end": 55
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 56
                                        },
                                        "flags": 16,
                                        "start": 22,
                                        "end": 56
                                    }
                                ],
                                "flags": 33554448,
                                "start": 22,
                                "end": 56
                            },
                            "flags": 33554448,
                            "start": 19,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 56
                },
                "flags": 32,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "async function g(){let o = {async *f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
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

