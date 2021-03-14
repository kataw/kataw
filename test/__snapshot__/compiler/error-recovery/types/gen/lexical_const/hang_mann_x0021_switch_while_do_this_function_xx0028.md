# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: hang mann ! switch while do this function x(
## Input

`````js
const x: hang mann ! switch while do this function x(= {x:hang mann ! switch while do this function x(}:hang mann ! switch while do this function x(
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: hang mann ! switch while do this function x(= {x:hang mann ! switch while do this function x(}:hang mann ! switch while do this function x(",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
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
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "hang",
                                "rawText": "hang",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 13
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "mann",
                            "rawText": "mann",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 18
                        },
                        "exclamation": true,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 20
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 20
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 20
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 27
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 33
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
                            "start": 50,
                            "end": 52
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 54
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
                                "start": 53,
                                "end": 53
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 53
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 53
                    },
                    "operator": "=",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 57
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "hang",
                                        "rawText": "hang",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 62
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 62
                                },
                                {
                                    "kind": 65597,
                                    "left": {
                                        "kind": 196712,
                                        "text": "mann",
                                        "rawText": "mann",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 62,
                                        "end": 67
                                    },
                                    "isOptional": false,
                                    "exclamation": true,
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 76,
                                        "end": 76
                                    },
                                    "accessModifier": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 62,
                                    "end": 76
                                },
                                {
                                    "kind": 196711,
                                    "text": "while",
                                    "rawText": "while",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 82
                                },
                                {
                                    "kind": 196711,
                                    "text": "do",
                                    "rawText": "do",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 85
                                },
                                {
                                    "kind": 196711,
                                    "text": "this",
                                    "rawText": "this",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 90
                                },
                                {
                                    "kind": 196711,
                                    "text": "function",
                                    "rawText": "function",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 99
                                },
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 101
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 102,
                                        "end": 103
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": null,
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 101,
                                    "end": 102
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 102
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 103
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 103
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 41
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 41
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 103
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 103
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
                "start": 104,
                "end": 108
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 104,
            "end": 108
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
                    "start": 108,
                    "end": 113
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 113,
                "end": 115
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 108,
            "end": 115
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 122,
                "end": 122
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 122,
                "end": 122
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 115,
            "end": 122
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 128,
                "end": 128
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
                        "start": 145,
                        "end": 147
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 148
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
                            "start": 148,
                            "end": 148
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 148
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 136,
                    "end": 148
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 131,
                        "end": 136
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 131,
                    "end": 136
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 128,
                "end": 148
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 122,
            "end": 148
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
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
            "start": 21,
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
            "message": "'(' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 63,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 77,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 83,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 86,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 91,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 100,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 102,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 103,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 109,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 116,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 123,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 129,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 137,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 147,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 148
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

