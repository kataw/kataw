# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: var f = function*() { super(); }
## Input

`````js
({ *method() { var f = function*() { super(); } } })
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
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 12
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
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncToken": null,
                                                                "generatorToken": {
                                                                    "kind": 67143222,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 31,
                                                                    "end": 32
                                                                },
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 33,
                                                                    "end": 34
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
                                                                                        "start": 36,
                                                                                        "end": 42
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 43,
                                                                                        "end": 43
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 36,
                                                                                    "end": 44
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 36,
                                                                                "end": 45
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 36,
                                                                        "end": 45
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 34,
                                                                    "end": 47
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "autofix": 0,
                                                                "flags": 2304,
                                                                "start": 22,
                                                                "end": 47
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 18,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 18,
                                                    "end": 47
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 14,
                                                "end": 47
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 47
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 49
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 10,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 49
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "({ *method() { var f = function*() { super(); } } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 42,
            "end": 43
        }
    ],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: var f = function*() { super(); }
## Input

`````js
({ *method() { var f = function*() { super(); } } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: var f = function*() { super(); }
## Input

`````js
({ *method() { var f = function*() { super(); } } })
`````
```

