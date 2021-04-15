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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 768,
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
                                            "text": "o",
                                            "rawText": "o",
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
                                                            "kind": 134299649,
                                                            "text": "f",
                                                            "rawText": "f",
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
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 37,
                                                                        "end": 40
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 208,
                                                                        "awaitToken": {
                                                                            "kind": 82032,
                                                                            "flags": 768,
                                                                            "start": 42,
                                                                            "end": 48
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "bar",
                                                                            "rawText": "bar",
                                                                            "flags": 768,
                                                                            "start": 48,
                                                                            "end": 52
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 42,
                                                                        "end": 52
                                                                    },
                                                                    "flags": 258,
                                                                    "start": 37,
                                                                    "end": 52
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 3330,
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
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 54,
                                                                "end": 54
                                                            },
                                                            "flags": 256,
                                                            "start": 53,
                                                            "end": 55
                                                        },
                                                        "flags": 3328,
                                                        "start": 36,
                                                        "end": 55
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 28,
                                                "end": 55
                                            },
                                            "flags": 256,
                                            "start": 26,
                                            "end": 56
                                        },
                                        "flags": 128,
                                        "start": 22,
                                        "end": 56
                                    }
                                ],
                                "flags": 128,
                                "start": 22,
                                "end": 56
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 56
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 56
                },
                "flags": 256,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "async function g(){let o = {async *f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

