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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 11,
                                    "end": 12
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
                                                    "start": 14,
                                                    "end": 18
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": " f",
                                                                "flags": 96,
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 0,
                                                                    "start": 22,
                                                                    "end": 31
                                                                },
                                                                "generatorToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 31,
                                                                    "end": 32
                                                                },
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 32,
                                                                    "end": 34
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
                                                                                            "start": 36,
                                                                                            "end": 42
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 36,
                                                                                        "end": 42
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 43,
                                                                                        "end": 43
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 36,
                                                                                    "end": 44
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 36,
                                                                                "end": 45
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 36,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 34,
                                                                    "end": 47
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 288,
                                                                "start": 22,
                                                                "end": 47
                                                            },
                                                            "flags": 16,
                                                            "start": 18,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 18,
                                                    "end": 47
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 47
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 14,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 49
                                },
                                "flags": 160,
                                "start": 10,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 51
                },
                "flags": 32,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "({ *method() { var f = function*() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 42, end: 43

```

