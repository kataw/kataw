# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\simple
> :: test: simple
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````
## Output

### CST

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
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 26,
                                                "end": 32
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 32,
                                                "end": 41
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "h",
                                                                        "rawText": "h",
                                                                        "flags": 96,
                                                                        "start": 51,
                                                                        "end": 52
                                                                    },
                                                                    {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 219,
                                                                                    "generatorToken": null,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "m",
                                                                                        "rawText": "m",
                                                                                        "flags": 96,
                                                                                        "start": 55,
                                                                                        "end": 56
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "t",
                                                                                            "rawText": "t",
                                                                                            "flags": 96,
                                                                                            "start": 57,
                                                                                            "end": 59
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 208,
                                                                                                    "awaitKeyword": {
                                                                                                        "kind": 82196,
                                                                                                        "flags": 64,
                                                                                                        "start": 60,
                                                                                                        "end": 65
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 96,
                                                                                                        "start": 65,
                                                                                                        "end": 69
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 60,
                                                                                                    "end": 69
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 60,
                                                                                            "end": 69
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 55,
                                                                                        "end": 70
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 55,
                                                                                    "end": 70
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 16,
                                                                            "start": 55,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 48,
                                                                        "start": 53,
                                                                        "end": 71
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 51,
                                                                "end": 71
                                                            },
                                                            "flags": 32,
                                                            "start": 49,
                                                            "end": 72
                                                        },
                                                        "flags": 34,
                                                        "start": 44,
                                                        "end": 72
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 43,
                                                "end": 73
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 74,
                                                    "end": 74
                                                },
                                                "flags": 32,
                                                "start": 73,
                                                "end": 75
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 160,
                                            "start": 26,
                                            "end": 75
                                        },
                                        "flags": 16,
                                        "start": 22,
                                        "end": 75
                                    }
                                ],
                                "flags": 16,
                                "start": 22,
                                "end": 75
                            },
                            "flags": 33554448,
                            "start": 19,
                            "end": 75
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 75
                },
                "flags": 32,
                "start": 18,
                "end": 80
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 60, end: 65

```

