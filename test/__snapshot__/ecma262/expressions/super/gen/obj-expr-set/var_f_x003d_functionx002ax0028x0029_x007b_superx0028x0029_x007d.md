# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-set
> :: test: obj-expr-set
> :: case: var f = function*() { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ set x(_) { var f = function*() { super(); } } })
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
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 11
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
                                                        "transformFlags": 0,
                                                        "start": 13,
                                                        "end": 17
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
                                                                    "transformFlags": 0,
                                                                    "start": 17,
                                                                    "end": 19
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 21,
                                                                        "end": 30
                                                                    },
                                                                    "asteriskToken": {
                                                                        "kind": 67143222,
                                                                        "flags": 64,
                                                                        "transformFlags": 32,
                                                                        "start": 30,
                                                                        "end": 31
                                                                    },
                                                                    "name": null,
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
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
                                                                                            "kind": 4259935,
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 35,
                                                                                            "end": 41
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 42,
                                                                                            "end": 42
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "transformFlags": 1,
                                                                                        "start": 35,
                                                                                        "end": 43
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "transformFlags": 4096,
                                                                                    "start": 35,
                                                                                    "end": 44
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 35,
                                                                            "end": 44
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 33,
                                                                        "end": 46
                                                                    },
                                                                    "returnType": null,
                                                                    "flags": 288,
                                                                    "transformFlags": 0,
                                                                    "start": 21,
                                                                    "end": 46
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4224,
                                                                "start": 17,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 46
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 48
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 48
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 48
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 50
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "({ set x(_) { var f = function*() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 35, end: 42

```

