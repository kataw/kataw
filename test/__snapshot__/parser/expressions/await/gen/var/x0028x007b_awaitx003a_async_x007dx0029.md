# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: ({ await: async })
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
                                                                    "generatorToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "async",
                                                                        "rawText": "async",
                                                                        "flags": 96,
                                                                        "start": 48,
                                                                        "end": 54
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 41,
                                                                        "end": 47
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
                                                        "flags": 32,
                                                        "start": 40,
                                                        "end": 56
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
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
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 59
                            },
                            "flags": 32,
                            "start": 18,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 41, end: 47

```

