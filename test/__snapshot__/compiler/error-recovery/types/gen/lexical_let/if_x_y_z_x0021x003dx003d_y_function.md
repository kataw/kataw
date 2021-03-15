# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_let
> :: test: lexical let
> :: case: if x y z !== y function
## Input

`````js
let x: if x y z !== y function if x y z !== y function
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: if x y z !== y function if x y z !== y function",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "if",
                                "rawText": "if",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 11
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 9,
                            "end": 11
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "y",
                            "rawText": "y",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 13
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z",
                            "rawText": "z",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 15
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "operator": "!==",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 21
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
                "start": 30,
                "end": 30
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 35
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 37
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
                                    "start": 37,
                                    "end": 39
                                },
                                "operator": "!==",
                                "right": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 45
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 45
                        },
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "",
                                "rawText": "",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 54,
                                "end": 54
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 54
                            },
                            "type": null,
                            "contents": null,
                            "typeParameters": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 45,
                            "end": 54
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 54
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 54
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 21,
            "end": 54
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'if' is a reserved word that cannot be used here",
            "start": 31,
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
            "message": "';' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 46,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

