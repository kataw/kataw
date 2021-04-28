# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
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
                "flags": 13,
                "start": 512,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 19,
                "start": 0,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 640,
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
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 40,
                                                "start": 512,
                                                "end": 46
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 46,
                                                "start": 0,
                                                "end": 55
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 55,
                                                "end": 57
                                            },
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
                                                            "start": 58,
                                                            "end": 61
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
                                                                                    "left": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "t",
                                                                                            "rawText": "t",
                                                                                            "flags": 768,
                                                                                            "start": 71,
                                                                                            "end": 73
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 208,
                                                                                                    "awaitToken": {
                                                                                                        "kind": 82032,
                                                                                                        "flags": 74,
                                                                                                        "start": 0,
                                                                                                        "end": 79
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 768,
                                                                                                        "start": 79,
                                                                                                        "end": 83
                                                                                                    },
                                                                                                    "flags": 256,
                                                                                                    "start": 74,
                                                                                                    "end": 83
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 256,
                                                                                            "start": 74,
                                                                                            "end": 83
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 69,
                                                                                        "end": 84
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 134299649,
                                                                                        "text": "m",
                                                                                        "rawText": "m",
                                                                                        "flags": 768,
                                                                                        "start": 69,
                                                                                        "end": 70
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 69,
                                                                                    "end": 84
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "start": 69,
                                                                            "end": 84
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 67,
                                                                        "end": 85
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 65,
                                                                "end": 85
                                                            },
                                                            "flags": 256,
                                                            "start": 63,
                                                            "end": 86
                                                        },
                                                        "flags": 258,
                                                        "start": 58,
                                                        "end": 86
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 258,
                                                "start": 57,
                                                "end": 87
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 88,
                                                    "end": 88
                                                },
                                                "flags": 256,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 1280,
                                            "start": 40,
                                            "end": 89
                                        },
                                        "flags": 128,
                                        "start": 36,
                                        "end": 89
                                    }
                                ],
                                "flags": 128,
                                "start": 36,
                                "end": 89
                            },
                            "flags": 128,
                            "start": 33,
                            "end": 89
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 33,
                    "end": 89
                },
                "flags": 256,
                "start": 32,
                "end": 94
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 13,
            "end": 94
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
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

