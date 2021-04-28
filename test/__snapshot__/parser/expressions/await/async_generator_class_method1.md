# Kataw parser test case

## Input

`````js
async function g(){class x {async *f(foo = [h, {m: t(await bar)}]){}}    }
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
                "flags": 0,
                "start": 512,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 5,
                "start": 0,
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 19,
                                "start": 0,
                                "end": 24
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 278,
                                        "declareToken": null,
                                        "decorators": null,
                                        "staticKeyword": null,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 512,
                                            "start": 28,
                                            "end": 33
                                        },
                                        "setKeyword": null,
                                        "getKeyword": null,
                                        "method": {
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
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "h",
                                                                        "rawText": "h",
                                                                        "flags": 768,
                                                                        "start": 44,
                                                                        "end": 45
                                                                    },
                                                                    {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 219,
                                                                                    "left": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "t",
                                                                                            "rawText": "t",
                                                                                            "flags": 768,
                                                                                            "start": 50,
                                                                                            "end": 52
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 208,
                                                                                                    "awaitToken": {
                                                                                                        "kind": 82032,
                                                                                                        "flags": 53,
                                                                                                        "start": 0,
                                                                                                        "end": 58
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 768,
                                                                                                        "start": 58,
                                                                                                        "end": 62
                                                                                                    },
                                                                                                    "flags": 256,
                                                                                                    "start": 53,
                                                                                                    "end": 62
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 256,
                                                                                            "start": 53,
                                                                                            "end": 62
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 48,
                                                                                        "end": 63
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 134299649,
                                                                                        "text": "m",
                                                                                        "rawText": "m",
                                                                                        "flags": 768,
                                                                                        "start": 48,
                                                                                        "end": 49
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 48,
                                                                                    "end": 63
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "start": 48,
                                                                            "end": 63
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 46,
                                                                        "end": 64
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 64
                                                            },
                                                            "flags": 256,
                                                            "start": 42,
                                                            "end": 65
                                                        },
                                                        "flags": 258,
                                                        "start": 37,
                                                        "end": 65
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 3330,
                                                "start": 37,
                                                "end": 66
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
                                                    "start": 67,
                                                    "end": 67
                                                },
                                                "flags": 256,
                                                "start": 66,
                                                "end": 68
                                            },
                                            "flags": 3072,
                                            "start": 36,
                                            "end": 68
                                        },
                                        "flags": 3072,
                                        "start": 28,
                                        "end": 68
                                    }
                                ],
                                "flags": 256,
                                "start": 28,
                                "end": 69
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 69
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 69
                },
                "flags": 256,
                "start": 18,
                "end": 74
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "text": "async function g(){class x {async *f(foo = [h, {m: t(await bar)}]){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
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

