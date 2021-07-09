# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { class x {async *f(foo = [{m: t(await bar)}]){}} });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
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
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [
                                                            {
                                                                "kind": 278,
                                                                "declareToken": null,
                                                                "decorators": null,
                                                                "staticKeyword": null,
                                                                "asyncKeyword": {
                                                                    "kind": 82031,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 48,
                                                                    "end": 53
                                                                },
                                                                "setKeyword": null,
                                                                "getKeyword": null,
                                                                "asteriskToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "transformFlags": 32,
                                                                    "start": 53,
                                                                    "end": 55
                                                                },
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "f",
                                                                        "rawText": "f",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 55,
                                                                        "end": 56
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
                                                                                    "start": 57,
                                                                                    "end": 60
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "right": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [
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
                                                                                                                "start": 65,
                                                                                                                "end": 66
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 131,
                                                                                                                "expression": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "t",
                                                                                                                    "rawText": "t",
                                                                                                                    "flags": 96,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 67,
                                                                                                                    "end": 69
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
                                                                                                                                "start": 70,
                                                                                                                                "end": 75
                                                                                                                            },
                                                                                                                            "expression": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "bar",
                                                                                                                                "rawText": "bar",
                                                                                                                                "flags": 96,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 75,
                                                                                                                                "end": 79
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "transformFlags": 4096,
                                                                                                                            "start": 70,
                                                                                                                            "end": 79
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "trailingComma": false,
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 70,
                                                                                                                    "end": 79
                                                                                                                },
                                                                                                                "flags": 268435488,
                                                                                                                "transformFlags": 1,
                                                                                                                "start": 65,
                                                                                                                "end": 80
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 128,
                                                                                                            "start": 65,
                                                                                                            "end": 80
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 16,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 65,
                                                                                                    "end": 80
                                                                                                },
                                                                                                "flags": 48,
                                                                                                "transformFlags": 8,
                                                                                                "start": 64,
                                                                                                "end": 81
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 64,
                                                                                        "end": 81
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 8,
                                                                                    "start": 62,
                                                                                    "end": 82
                                                                                },
                                                                                "flags": 34,
                                                                                "transformFlags": 4096,
                                                                                "start": 57,
                                                                                "end": 82
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 418,
                                                                        "transformFlags": 0,
                                                                        "start": 57,
                                                                        "end": 83
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 84,
                                                                            "end": 84
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 83,
                                                                        "end": 85
                                                                    },
                                                                    "flags": 384,
                                                                    "transformFlags": 0,
                                                                    "start": 56,
                                                                    "end": 85
                                                                },
                                                                "flags": 384,
                                                                "transformFlags": 0,
                                                                "start": 48,
                                                                "end": 85
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 85
                                                    },
                                                    "flags": 46,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 86
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 86
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 88
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 88
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 89
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 89
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 89
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { class x {async *f(foo = [{m: t(await bar)}]){}} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 70, end: 75

```

