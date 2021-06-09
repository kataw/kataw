# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\var
> :: test: var
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(await) => 1; });
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
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "asyncArrow",
                                                                "rawText": "asyncArrow",
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 53
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 271,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "start": 68,
                                                                    "end": 71
                                                                },
                                                                "typeParameters": null,
                                                                "parameters": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "async",
                                                                        "rawText": "async",
                                                                        "flags": 96,
                                                                        "start": 55,
                                                                        "end": 61
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 208,
                                                                                "awaitKeyword": {
                                                                                    "kind": 82196,
                                                                                    "flags": 64,
                                                                                    "start": 62,
                                                                                    "end": 67
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 16637,
                                                                                    "text": "",
                                                                                    "flags": 64,
                                                                                    "start": 67,
                                                                                    "end": 67
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 62,
                                                                                "end": 67
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 55,
                                                                        "end": 55
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 55,
                                                                    "end": 68
                                                                },
                                                                "asyncKeyword": {
                                                                    "kind": 82031,
                                                                    "flags": 64,
                                                                    "start": 55,
                                                                    "end": 61
                                                                },
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "flags": 32,
                                                                "start": 55,
                                                                "end": 73
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 73
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 74
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 74
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 76
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 76
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 77
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 77
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 77
            },
            "flags": 16,
            "start": 10,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { var asyncArrow = async(await) => 1; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 67, end: 68

```

