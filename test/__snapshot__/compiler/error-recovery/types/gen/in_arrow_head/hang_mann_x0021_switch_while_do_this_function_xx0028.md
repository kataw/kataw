# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_arrow_head
> :: test: in arrow head
> :: case: hang mann ! switch while do this function x(
## Input

`````js
([ hang mann ! switch while do this function x( , x: hang mann ! switch while do this function x( ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ hang mann ! switch while do this function x( , x: hang mann ! switch while do this function x( ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "hang",
                                "rawText": "hang",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 7
                            },
                            {
                                "kind": 74398,
                                "expression": {
                                    "kind": 196712,
                                    "text": "mann",
                                    "rawText": "mann",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 12
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 12,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 14
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 21
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 8456285,
                            "name": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 44,
                                "end": 46
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 49
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
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 47
                        },
                        {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 51
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 51
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 35
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 35
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 51
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 51
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
                "start": 52,
                "end": 57
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 52,
            "end": 57
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
                    "start": 57,
                    "end": 62
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 62,
                "end": 64
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 57,
            "end": 64
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 71,
                "end": 71
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 71,
                "end": 71
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 64,
            "end": 71
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 77,
                "end": 77
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
                        "start": 94,
                        "end": 96
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 99
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
                            "start": 97,
                            "end": 97
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 97
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 97
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 85
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 85
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 77,
                "end": 97
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 71,
            "end": 97
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 105,
                "end": 105
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 103,
            "end": 106
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 58,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 72,
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
            "message": "';' expected.",
            "start": 86,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 98,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 99,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 101,
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

