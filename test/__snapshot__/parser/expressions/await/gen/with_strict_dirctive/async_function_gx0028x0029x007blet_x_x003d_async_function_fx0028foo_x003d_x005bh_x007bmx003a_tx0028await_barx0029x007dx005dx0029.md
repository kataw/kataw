# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 30,
                "end": 32
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
                                "start": 33,
                                "end": 36
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
                                            "start": 36,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 40,
                                                "end": 46
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 46,
                                                "end": 55
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 57
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
                                                            "start": 58,
                                                            "end": 61
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
                                                                        "start": 65,
                                                                        "end": 66
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
                                                                                        "start": 69,
                                                                                        "end": 70
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "t",
                                                                                            "rawText": "t",
                                                                                            "flags": 96,
                                                                                            "start": 71,
                                                                                            "end": 73
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 208,
                                                                                                    "awaitKeyword": {
                                                                                                        "kind": 82196,
                                                                                                        "flags": 64,
                                                                                                        "start": 74,
                                                                                                        "end": 79
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 96,
                                                                                                        "start": 79,
                                                                                                        "end": 83
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 74,
                                                                                                    "end": 83
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 74,
                                                                                            "end": 83
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 69,
                                                                                        "end": 84
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 69,
                                                                                    "end": 84
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 16,
                                                                            "start": 69,
                                                                            "end": 84
                                                                        },
                                                                        "flags": 48,
                                                                        "start": 67,
                                                                        "end": 85
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 65,
                                                                "end": 85
                                                            },
                                                            "flags": 32,
                                                            "start": 63,
                                                            "end": 86
                                                        },
                                                        "flags": 34,
                                                        "start": 58,
                                                        "end": 86
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 34,
                                                "start": 57,
                                                "end": 87
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 88,
                                                    "end": 88
                                                },
                                                "flags": 32,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 160,
                                            "start": 40,
                                            "end": 89
                                        },
                                        "flags": 16,
                                        "start": 36,
                                        "end": 89
                                    }
                                ],
                                "flags": 16,
                                "start": 36,
                                "end": 89
                            },
                            "flags": 33554448,
                            "start": 33,
                            "end": 89
                        }
                    ],
                    "flags": 32,
                    "start": 33,
                    "end": 89
                },
                "flags": 32,
                "start": 32,
                "end": 94
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 74, end: 79

```

