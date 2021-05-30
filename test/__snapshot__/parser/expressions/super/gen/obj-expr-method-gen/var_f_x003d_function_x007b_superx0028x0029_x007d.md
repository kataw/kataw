# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/super/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\super\gen\obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: var f = function { super(); }
## Input

`````js
({ *method() { var f = function { super(); } } })
`````
## Output

### CST

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
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 4
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
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
                                    "returnType": null,
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
                                                        "flags": 80,
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
                                                                    "rawText": "f",
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
                                                                        "flags": 64,
                                                                        "start": 22,
                                                                        "end": 31
                                                                    },
                                                                    "generatorToken": null,
                                                                    "name": null,
                                                                    "formalParameters": {
                                                                        "kind": 214,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 31,
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
                                                                                                "flags": 96,
                                                                                                "start": 33,
                                                                                                "end": 39
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "start": 33,
                                                                                            "end": 39
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 40,
                                                                                            "end": 40
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 33,
                                                                                        "end": 41
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 33,
                                                                                    "end": 42
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "start": 33,
                                                                            "end": 42
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 31,
                                                                        "end": 44
                                                                    },
                                                                    "typeParameters": null,
                                                                    "returnType": null,
                                                                    "flags": 32,
                                                                    "start": 22,
                                                                    "end": 44
                                                                },
                                                                "flags": 16,
                                                                "start": 18,
                                                                "end": 44
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 18,
                                                        "end": 44
                                                    },
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 44
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 46
                                    },
                                    "flags": 160,
                                    "start": 10,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 46
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 48
                },
                "flags": 32,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "({ *method() { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 31, end: 33
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 33, end: 40

```

