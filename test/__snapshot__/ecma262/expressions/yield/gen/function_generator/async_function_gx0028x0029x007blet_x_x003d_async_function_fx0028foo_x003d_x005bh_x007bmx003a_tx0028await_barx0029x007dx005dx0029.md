# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 54
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 57
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
                                                                "start": 59,
                                                                "end": 62
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
                                                                            "start": 62,
                                                                            "end": 64
                                                                        },
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 177,
                                                                            "asyncKeyword": {
                                                                                "kind": 82031,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 66,
                                                                                "end": 72
                                                                            },
                                                                            "functionKeyword": {
                                                                                "kind": 37822554,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 72,
                                                                                "end": 81
                                                                            },
                                                                            "asteriskToken": null,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 81,
                                                                                "end": 83
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
                                                                                            "start": 84,
                                                                                            "end": 87
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
                                                                                                        "start": 91,
                                                                                                        "end": 92
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
                                                                                                                        "start": 95,
                                                                                                                        "end": 96
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 131,
                                                                                                                        "expression": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "t",
                                                                                                                            "rawText": "t",
                                                                                                                            "flags": 96,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 97,
                                                                                                                            "end": 99
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
                                                                                                                                        "start": 100,
                                                                                                                                        "end": 105
                                                                                                                                    },
                                                                                                                                    "expression": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "bar",
                                                                                                                                        "rawText": "bar",
                                                                                                                                        "flags": 96,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 105,
                                                                                                                                        "end": 109
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 100,
                                                                                                                                    "end": 109
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 32,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 100,
                                                                                                                            "end": 109
                                                                                                                        },
                                                                                                                        "flags": 268435488,
                                                                                                                        "transformFlags": 1,
                                                                                                                        "start": 95,
                                                                                                                        "end": 110
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 128,
                                                                                                                    "start": 95,
                                                                                                                    "end": 110
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 16,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 95,
                                                                                                            "end": 110
                                                                                                        },
                                                                                                        "flags": 48,
                                                                                                        "transformFlags": 8,
                                                                                                        "start": 93,
                                                                                                        "end": 111
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 91,
                                                                                                "end": 111
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 8,
                                                                                            "start": 89,
                                                                                            "end": 112
                                                                                        },
                                                                                        "flags": 34,
                                                                                        "transformFlags": 0,
                                                                                        "start": 84,
                                                                                        "end": 112
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 34,
                                                                                "transformFlags": 0,
                                                                                "start": 84,
                                                                                "end": 112
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 114,
                                                                                    "end": 114
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 113,
                                                                                "end": 115
                                                                            },
                                                                            "returnType": null,
                                                                            "flags": 160,
                                                                            "transformFlags": 0,
                                                                            "start": 66,
                                                                            "end": 115
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 128,
                                                                        "start": 62,
                                                                        "end": 115
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 62,
                                                                "end": 115
                                                            },
                                                            "flags": 33554448,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 115
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 115
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 120
                                            },
                                            "returnType": null,
                                            "flags": 144,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 120
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 120
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 122
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 122
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 122
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 123
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 123
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 123
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 100, end: 105

```

