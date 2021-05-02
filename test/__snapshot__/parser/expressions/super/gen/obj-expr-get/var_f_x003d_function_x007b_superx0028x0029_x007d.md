# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: var f = function { super(); }
## Input

`````js
({ get x() { var f = function { super(); } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                                "kind": 257,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "type": null,
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
                                                        "flags": 0,
                                                        "start": 12,
                                                        "end": 16
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
                                                                    "start": 16,
                                                                    "end": 18
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 0,
                                                                        "start": 20,
                                                                        "end": 29
                                                                    },
                                                                    "generatorToken": null,
                                                                    "name": null,
                                                                    "formalParameters": {
                                                                        "kind": 214,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 29,
                                                                        "end": 29
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
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 225,
                                                                                            "superKeyword": {
                                                                                                "kind": 4259935,
                                                                                                "flags": 0,
                                                                                                "start": 31,
                                                                                                "end": 37
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "start": 31,
                                                                                            "end": 37
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 38,
                                                                                            "end": 38
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 31,
                                                                                        "end": 39
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 31,
                                                                                    "end": 40
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "start": 31,
                                                                            "end": 40
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 29,
                                                                        "end": 42
                                                                    },
                                                                    "typeParameters": null,
                                                                    "returnType": null,
                                                                    "flags": 32,
                                                                    "start": 20,
                                                                    "end": 42
                                                                },
                                                                "flags": 16,
                                                                "start": 16,
                                                                "end": 42
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 16,
                                                        "end": 42
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 42
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 44
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 46
                },
                "flags": 32,
                "start": 0,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "({ get x() { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 37, end: 38

```

