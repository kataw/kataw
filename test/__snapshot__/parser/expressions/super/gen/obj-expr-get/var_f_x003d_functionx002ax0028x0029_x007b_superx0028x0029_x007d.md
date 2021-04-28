# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: var f = function*() { super(); }
## Input

`````js
({ get x() { var f = function*() { super(); } } })
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
                                                                "generatorToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 29,
                                                                    "start": 512,
                                                                    "end": 30
                                                                },
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 30,
                                                                    "end": 32
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
                                                                                            "flags": 34,
                                                                                            "start": 0,
                                                                                            "end": 40
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 34,
                                                                                        "end": 40
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 41,
                                                                                        "end": 41
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 34,
                                                                                    "end": 42
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 34,
                                                                                "end": 43
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 34,
                                                                        "end": 43
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 32,
                                                                    "end": 45
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 2304,
                                                                "start": 20,
                                                                "end": 45
                                                            },
                                                            "flags": 128,
                                                            "start": 16,
                                                            "end": 45
                                                        }
                                                    ],
                                                    "flags": 128,
                                                    "start": 16,
                                                    "end": 45
                                                },
                                                "flags": 128,
                                                "start": 12,
                                                "end": 45
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 47
                                },
                                "flags": 8448,
                                "start": 8,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 47
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 49
                },
                "flags": 256,
                "start": 0,
                "end": 50
            },
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "({ get x() { var f = function*() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 40, end: 41

```

