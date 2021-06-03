# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\var
> :: test: var
> :: case: async function wrap() { async function await() { } };
## Input

`````js
var await; var f = (async function() { async function wrap() { async function await() { } }; });
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
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 64,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "wrap",
                                                    "rawText": "wrap",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 58
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 58,
                                                    "end": 60
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
                                                                    "start": 62,
                                                                    "end": 68
                                                                },
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "start": 68,
                                                                    "end": 77
                                                                },
                                                                "generatorToken": null,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "await",
                                                                    "rawText": "await",
                                                                    "flags": 96,
                                                                    "start": 77,
                                                                    "end": 83
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 83,
                                                                    "end": 85
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 87,
                                                                        "end": 87
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 85,
                                                                    "end": 89
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 144,
                                                                "start": 62,
                                                                "end": 89
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 62,
                                                        "end": 89
                                                    },
                                                    "flags": 32,
                                                    "start": 60,
                                                    "end": 91
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 91
                                            },
                                            {
                                                "kind": 168,
                                                "flags": 16,
                                                "start": 91,
                                                "end": 92
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 92
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 94
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 94
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 95
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 95
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 95
            },
            "flags": 16,
            "start": 10,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function wrap() { async function await() { } }; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 77, end: 83

```

