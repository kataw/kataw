# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
var await; var f = (async function() { async function f() { return {await = 0} = {}; } });
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
                "flags": 0,
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
                "flags": 0,
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
                                    "flags": 0,
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
                                                    "flags": 0,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 0,
                                                                    "start": 59,
                                                                    "end": 66
                                                                },
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 205,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 96,
                                                                                        "start": 68,
                                                                                        "end": 73
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 201392130,
                                                                                        "text": 0,
                                                                                        "rawText": "0",
                                                                                        "flags": 96,
                                                                                        "start": 75,
                                                                                        "end": 77
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 68,
                                                                                    "end": 77
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 16,
                                                                            "start": 68,
                                                                            "end": 77
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 66,
                                                                        "end": 78
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 64,
                                                                        "start": 78,
                                                                        "end": 80
                                                                    },
                                                                    "right": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [],
                                                                            "trailingComma": false,
                                                                            "flags": 16,
                                                                            "start": 82,
                                                                            "end": 82
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 80,
                                                                        "end": 83
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 66,
                                                                    "end": 83
                                                                },
                                                                "flags": 16,
                                                                "start": 0,
                                                                "end": 59
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 59,
                                                        "end": 84
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 86
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 86
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 88
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 88
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 89
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 89
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 89
            },
            "flags": 16,
            "start": 10,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function f() { return {await = 0} = {}; } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 68, end: 73
✖ Identifier expected. Reserved word in strict mode - start: 73, end: 75

```

