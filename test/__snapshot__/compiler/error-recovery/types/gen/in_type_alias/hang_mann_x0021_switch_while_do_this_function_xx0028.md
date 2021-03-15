# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_type_alias
> :: test: in type alias
> :: case: hang mann ! switch while do this function x(
## Input

`````js
type hang mann ! switch while do this function x( = x extends hang mann ! switch while do this function x(
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type hang mann ! switch while do this function x( = x extends hang mann ! switch while do this function x(",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "hang",
                "rawText": "hang",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 9
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "mann",
                    "rawText": "mann",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 9,
                "end": 16
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "!",
                "operand": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 16
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 23
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 29
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 8456285,
                        "name": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 46,
                            "end": 48
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 51
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
                                "start": 49,
                                "end": 49
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 49
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 49
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 53
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 53
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 37
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 37
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 53
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 23,
            "end": 53
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "hang",
                "rawText": "hang",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 66
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 66
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
                    "start": 66,
                    "end": 71
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 71,
                "end": 73
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 66,
            "end": 73
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 80,
                "end": 80
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 80,
                "end": 80
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 73,
            "end": 80
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 86,
                "end": 86
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
                        "start": 103,
                        "end": 105
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 106,
                        "end": 106
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
                            "start": 106,
                            "end": 106
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 106,
                        "end": 106
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 106
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 89,
                        "end": 94
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 94
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 86,
                "end": 106
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 80,
            "end": 106
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 24,
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
            "message": "';' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 74,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 81,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 87,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 95,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 105,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 106
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

