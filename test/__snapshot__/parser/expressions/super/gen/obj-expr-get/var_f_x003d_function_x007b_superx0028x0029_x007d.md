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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 9,
                                    "end": 10
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "f",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 16,
                                                                "end": 18
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncToken": null,
                                                                "generatorToken": null,
                                                                "name": {
                                                                    "kind": 253,
                                                                    "text": "",
                                                                    "autofix": 0,
                                                                    "flags": 12,
                                                                    "start": 29,
                                                                    "end": 29
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 29,
                                                                    "end": 29
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 31,
                                                                                        "end": 37
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 38,
                                                                                        "end": 38
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 31,
                                                                                    "end": 39
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 31,
                                                                                "end": 40
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 31,
                                                                        "end": 40
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 29,
                                                                    "end": 42
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 20,
                                                                "end": 42
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 16,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 16,
                                                    "end": 42
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 12,
                                                "end": 42
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 44
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 8,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 44
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 46
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "({ get x() { var f = function { super(); } } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 29,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 37,
            "end": 38
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: var f = function { super(); }
## Input

`````js
({ get x() { var f = function { super(); } } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: var f = function { super(); }
## Input

`````js
({ get x() { var f = function { super(); } } })
`````
```

