# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: var f = function() { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ get x() { var f = function() { super(); } } })
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
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
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 9,
                                        "end": 10
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
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "start": 20,
                                                                        "end": 29
                                                                    },
                                                                    "asteriskToken": null,
                                                                    "name": null,
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 30,
                                                                        "end": 30
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
                                                                                            "kind": 4259935,
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
                                                                    "returnType": null,
                                                                    "flags": 32,
                                                                    "start": 20,
                                                                    "end": 44
                                                                },
                                                                "flags": 16,
                                                                "start": 16,
                                                                "end": 44
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 16,
                                                        "end": 44
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 44
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 46
                                    },
                                    "flags": 1056,
                                    "start": 8,
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
    "source": "({ get x() { var f = function() { super(); } } })",
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 33, end: 40

```

