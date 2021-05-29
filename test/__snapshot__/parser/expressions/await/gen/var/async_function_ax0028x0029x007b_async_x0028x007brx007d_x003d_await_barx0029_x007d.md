# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: r
> :: test: var
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
var await; var f = (async function() { async function a(){     async ({r} = await bar);     } });
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
                                                    "text": "a",
                                                    "rawText": "a",
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
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "async",
                                                                    "rawText": "async",
                                                                    "flags": 96,
                                                                    "start": 58,
                                                                    "end": 68
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 220,
                                                                                "propertyList": {
                                                                                    "kind": 218,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 134299649,
                                                                                            "text": "r",
                                                                                            "rawText": "r",
                                                                                            "flags": 96,
                                                                                            "start": 71,
                                                                                            "end": 72
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 16,
                                                                                    "start": 71,
                                                                                    "end": 72
                                                                                },
                                                                                "flags": 48,
                                                                                "start": 70,
                                                                                "end": 73
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 64,
                                                                                "start": 73,
                                                                                "end": 75
                                                                            },
                                                                            "right": {
                                                                                "kind": 208,
                                                                                "awaitKeyword": {
                                                                                    "kind": 82196,
                                                                                    "flags": 64,
                                                                                    "start": 75,
                                                                                    "end": 81
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "bar",
                                                                                    "rawText": "bar",
                                                                                    "flags": 96,
                                                                                    "start": 81,
                                                                                    "end": 85
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 75,
                                                                                "end": 85
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 70,
                                                                            "end": 85
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 58,
                                                                    "end": 58
                                                                },
                                                                "flags": 268435488,
                                                                "start": 58,
                                                                "end": 86
                                                            },
                                                            {
                                                                "kind": 168,
                                                                "flags": 16,
                                                                "start": 86,
                                                                "end": 87
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 87
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 93
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 93
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 93
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 95
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 95
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 96
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 96
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 96
            },
            "flags": 16,
            "start": 10,
            "end": 97
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function a(){     async ({r} = await bar);     } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript

var await;
var f = (async function () {
    async function a() {
      async({ r } = await bar)

    }
  });
```

### Diagnostics

```javascript
✔ No errors
```

