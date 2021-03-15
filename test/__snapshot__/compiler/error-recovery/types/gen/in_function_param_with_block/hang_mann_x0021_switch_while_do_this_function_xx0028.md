# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_function_param_with_block
> :: test: in function param with block
> :: case: hang mann ! switch while do this function x(
## Input

`````js
function ( hang mann ! switch while do this function x( ) {hang mann ! switch while do this function x(}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( hang mann ! switch while do this function x( ) {hang mann ! switch while do this function x(}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "hang",
                            "rawText": "hang",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 15
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 10,
                        "end": 15
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "mann",
                            "rawText": "mann",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 15,
                            "end": 20
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 15,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 22
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097362,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "caseBlock": {
                                "kind": 2093,
                                "clauses": [],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 29
                        },
                        {
                            "kind": 2097399,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "statement": {
                                "kind": 2097218,
                                "expression": {
                                    "kind": 8456285,
                                    "name": {
                                        "kind": 131102,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 52,
                                        "end": 54
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "hang",
                                                        "rawText": "hang",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 59,
                                                        "end": 63
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 63
                                                },
                                                {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 74398,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "mann",
                                                            "rawText": "mann",
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 68
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 68,
                                                        "end": 70
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 63,
                                                    "end": 70
                                                },
                                                {
                                                    "kind": 2097362,
                                                    "expression": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 77,
                                                        "end": 77
                                                    },
                                                    "caseBlock": {
                                                        "kind": 2093,
                                                        "clauses": [],
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 77,
                                                        "end": 77
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 77
                                                },
                                                {
                                                    "kind": 2097399,
                                                    "expression": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 83,
                                                        "end": 83
                                                    },
                                                    "statement": {
                                                        "kind": 2097218,
                                                        "expression": {
                                                            "kind": 8456285,
                                                            "name": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 100,
                                                                "end": 102
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 103,
                                                                "end": 104
                                                            },
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 1,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 103,
                                                                    "end": 103
                                                                },
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 103,
                                                                "end": 103
                                                            },
                                                            "typeParameters": null,
                                                            "type": null,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 91,
                                                            "end": 103
                                                        },
                                                        "statement": {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 4260571,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 86,
                                                                "end": 91
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 86,
                                                            "end": 91
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 83,
                                                        "end": 103
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 77,
                                                    "end": 103
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 103
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 104
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 104
                                },
                                "statement": {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 4260571,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 43
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 104
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 104
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 104
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 104
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 104
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 71,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 78,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 84,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 92,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 103,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

