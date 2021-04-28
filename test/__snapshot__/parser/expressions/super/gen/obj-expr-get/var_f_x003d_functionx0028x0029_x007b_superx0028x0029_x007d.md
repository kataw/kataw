# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: var f = function() { super(); }
## Input

`````js
({ get x() { var f = function() { super(); } } })
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 8448,
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
                                                    "flags": 12,
                                                    "start": 0,
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
                                                                "flags": 768,
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
                                                                    "flags": 20,
                                                                    "start": 0,
                                                                    "end": 29
                                                                },
                                                                "generatorToken": null,
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 29,
                                                                    "end": 31
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
                                                                                            "flags": 33,
                                                                                            "start": 0,
                                                                                            "end": 39
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 33,
                                                                                        "end": 39
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 40,
                                                                                        "end": 40
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 33,
                                                                                    "end": 41
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 33,
                                                                                "end": 42
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 33,
                                                                        "end": 42
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 31,
                                                                    "end": 44
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 256,
                                                                "start": 20,
                                                                "end": 44
                                                            },
                                                            "flags": 128,
                                                            "start": 16,
                                                            "end": 44
                                                        }
                                                    ],
                                                    "flags": 128,
                                                    "start": 16,
                                                    "end": 44
                                                },
                                                "flags": 128,
                                                "start": 12,
                                                "end": 44
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 44
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 46
                                },
                                "flags": 8448,
                                "start": 8,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 46
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 48
                },
                "flags": 256,
                "start": 0,
                "end": 49
            },
            "flags": 128,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "({ get x() { var f = function() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 39, end: 40

```

