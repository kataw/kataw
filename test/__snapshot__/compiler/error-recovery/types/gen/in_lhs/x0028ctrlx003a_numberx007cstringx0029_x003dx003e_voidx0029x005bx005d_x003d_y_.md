# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_lhs
> :: test: in lhs
> :: case: (ctrl: number|string) => void)[] = y;
## Input

`````js
 function (x:(ctrl: number|string) => void)[] = y; = (ctrl: number|string) => void)[] = y;) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x:(ctrl: number|string) => void)[] = y; = (ctrl: number|string) => void)[] = y;) {}",
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
                "start": 9,
                "end": 9
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "ctrl",
                                            "rawText": "ctrl",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 14,
                                            "end": 18
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8432,
                                            "types": [
                                                {
                                                    "kind": 4202657,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 19,
                                                    "end": 26
                                                },
                                                {
                                                    "kind": 4202702,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 27,
                                                    "end": 33
                                                }
                                            ],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 26,
                                            "end": 33
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 14,
                                        "end": 33
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 14,
                                "end": 33
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 37,
                                "end": 42
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 42
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 42
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 43
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 44
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 44
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 44
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "y",
                "rawText": "y",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 47,
                "end": 49
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 47,
            "end": 50
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "parameters": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 196712,
                                "text": "ctrl",
                                "rawText": "ctrl",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 58
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 59,
                                        "end": 66
                                    },
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 67,
                                        "end": 73
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 66,
                                "end": 73
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 52,
                            "end": 73
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 74
                },
                "contents": {
                    "kind": 65774,
                    "operator": "void",
                    "operand": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 82,
                        "end": 82
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 82
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 52,
                "end": 82
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 52,
            "end": 82
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 84,
                        "end": 84
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 85
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 89
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 83,
                "end": 89
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 83,
            "end": 90
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
                "start": 93,
                "end": 93
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 91,
            "end": 94
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 82,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 90,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

