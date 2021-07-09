# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Options

`````js
{}
`````
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
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 31,
                "end": 31
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
                                "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 46
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 55
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
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
                                                                        "transformFlags": 0,
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
                                                                                    "asteriskToken": null,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "m",
                                                                                        "rawText": "m",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
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
                                                                                            "transformFlags": 0,
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
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 74,
                                                                                                        "end": 79
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "bar",
                                                                                                        "rawText": "bar",
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 79,
                                                                                                        "end": 83
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 4096,
                                                                                                    "start": 74,
                                                                                                    "end": 83
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 74,
                                                                                            "end": 83
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "transformFlags": 1,
                                                                                        "start": 69,
                                                                                        "end": 84
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 128,
                                                                                    "start": 69,
                                                                                    "end": 84
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 16,
                                                                            "transformFlags": 0,
                                                                            "start": 69,
                                                                            "end": 84
                                                                        },
                                                                        "flags": 48,
                                                                        "transformFlags": 8,
                                                                        "start": 67,
                                                                        "end": 85
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 65,
                                                                "end": 85
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 8,
                                                            "start": 63,
                                                            "end": 86
                                                        },
                                                        "flags": 34,
                                                        "transformFlags": 4096,
                                                        "start": 58,
                                                        "end": 86
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 86
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 88
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "returnType": null,
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 89
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 36,
                                        "end": 89
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 89
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 89
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 89
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 32,
                "end": 94
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 13,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

