# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: ({ await: async })
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { ({ await: async }) });
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
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 41,
                                                                        "end": 47
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "async",
                                                                        "rawText": "async",
                                                                        "flags": 96,
                                                                        "start": 48,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 41,
                                                                    "end": 54
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 41,
                                                            "end": 54
                                                        },
                                                        "flags": 48,
                                                        "start": 40,
                                                        "end": 56
                                                    },
                                                    "flags": 38,
                                                    "start": 34,
                                                    "end": 57
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 57
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 59
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 59
                            },
                            "flags": 18,
                            "start": 32,
                            "end": 60
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 60
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 60
            },
            "flags": 16,
            "start": 10,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { ({ await: async }) });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

var await;
var f = (async function () {
  ({ await : async });
});

```

### Diagnostics

```javascript
✔ No errors
```

