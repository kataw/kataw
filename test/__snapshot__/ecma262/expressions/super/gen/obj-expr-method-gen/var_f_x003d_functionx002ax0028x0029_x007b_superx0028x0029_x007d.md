# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: var f = function*() { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ *method() { var f = function*() { super(); } } })
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
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
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
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
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
                                                        "transformFlags": 0,
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
                                                                    "transformFlags": 0,
                                                                    "start": 18,
                                                                    "end": 20
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 31
                                                                    },
                                                                    "asteriskToken": {
                                                                        "kind": 67143222,
                                                                        "flags": 64,
                                                                        "transformFlags": 32,
                                                                        "start": 31,
                                                                        "end": 32
                                                                    },
                                                                    "name": null,
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 33,
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
                                                                                            "kind": 4259935,
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 36,
                                                                                            "end": 42
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 43,
                                                                                            "end": 43
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "transformFlags": 1,
                                                                                        "start": 36,
                                                                                        "end": 44
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "transformFlags": 0,
                                                                                    "start": 36,
                                                                                    "end": 45
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 36,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 34,
                                                                        "end": 47
                                                                    },
                                                                    "returnType": null,
                                                                    "flags": 288,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 47
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 18,
                                                                "end": 47
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 47
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 47
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 49
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 49
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 51
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "({ *method() { var f = function*() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 36, end: 43

```

