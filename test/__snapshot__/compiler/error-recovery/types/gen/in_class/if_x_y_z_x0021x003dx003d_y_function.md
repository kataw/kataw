# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: if x y z !== y function
## Input

`````js
if x y z !== y function class if x y z !== y function { field: if x y z !== y function}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if x y z !== y function class if x y z !== y function { field: if x y z !== y function}",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 4
            },
            "consequent": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "z",
                    "rawText": "z",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "operator": "!==",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 14
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 23,
                "end": 23
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "consequent": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 36
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "operator": "!==",
                                "right": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 44
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 44
                        },
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 53,
                                "end": 53
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 53
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097292,
                                            "label": {
                                                "kind": 196712,
                                                "text": "field",
                                                "rawText": "field",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 61
                                            },
                                            "statement": {
                                                "kind": 2097257,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 65,
                                                    "end": 67
                                                },
                                                "consequent": {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 67,
                                                        "end": 69
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 67,
                                                    "end": 69
                                                },
                                                "alternate": null,
                                                "isWebCompat": true,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 62,
                                                "end": 69
                                            },
                                            "isWebCompat": true,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 69
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 69,
                                                    "end": 71
                                                },
                                                "operator": "!==",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 75,
                                                    "end": 77
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 69,
                                                "end": 77
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 69,
                                            "end": 77
                                        },
                                        {
                                            "kind": 264284,
                                            "name": {
                                                "kind": 131102,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 86,
                                                "end": 86
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 86,
                                                "end": 86
                                            },
                                            "type": null,
                                            "contents": null,
                                            "typeParameters": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 77,
                                            "end": 86
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 86
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 87
                            },
                            "typeParameters": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 44,
                            "end": 87
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 87
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 87
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 14,
            "end": 87
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 7,
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
            "message": "Identifier expected 'class' is a reserved word that cannot be used here",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 66,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 68,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 70,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 78,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 86,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

