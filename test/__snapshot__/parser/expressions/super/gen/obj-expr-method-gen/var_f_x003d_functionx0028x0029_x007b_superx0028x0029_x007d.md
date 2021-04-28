# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: var f = function() { super(); }
## Input

`````js
({ *method() { var f = function() { super(); } } })
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
                                    "flags": 768,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
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
                                                    "flags": 14,
                                                    "start": 0,
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
                                                                "rawText": "f",
                                                                "flags": 768,
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
                                                                    "flags": 22,
                                                                    "start": 0,
                                                                    "end": 31
                                                                },
                                                                "generatorToken": null,
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 31,
                                                                    "end": 33
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
                                                                                            "flags": 35,
                                                                                            "start": 0,
                                                                                            "end": 41
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 35,
                                                                                        "end": 41
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 42,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 35,
                                                                                    "end": 43
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 35,
                                                                                "end": 44
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 35,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 33,
                                                                    "end": 46
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 256,
                                                                "start": 22,
                                                                "end": 46
                                                            },
                                                            "flags": 128,
                                                            "start": 18,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "flags": 128,
                                                    "start": 18,
                                                    "end": 46
                                                },
                                                "flags": 128,
                                                "start": 14,
                                                "end": 46
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 46
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 48
                                },
                                "flags": 1280,
                                "start": 10,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 48
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 50
                },
                "flags": 256,
                "start": 0,
                "end": 51
            },
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "({ *method() { var f = function() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 41, end: 42

```

