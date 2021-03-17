# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: class ! switch
## Input

`````js
const x: class ! switch= {x:class ! switch}:class ! switch
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: class ! switch= {x:class ! switch}:class ! switch",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
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
                                "text": "class",
                                "rawText": "class",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 14
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 16
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 14
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
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
                "kind": 65550,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
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
                                    "start": 26,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 74398,
                                    "expression": {
                                        "kind": 66099,
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "implementClauses": null,
                                        "members": {
                                            "kind": 50,
                                            "elements": [],
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "decorators": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 28,
                                        "end": 33
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 33,
                                    "end": 35
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 35
                            },
                            {
                                "kind": 196712,
                                "text": "switch",
                                "rawText": "switch",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 42
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 43
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 43
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 43
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 43
        },
        {
            "kind": 48,
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 44,
                "end": 44
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 44,
            "end": 49
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
                    "start": 51,
                    "end": 51
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 49,
                "end": 51
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 49,
            "end": 51
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 58
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 58
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 51,
            "end": 58
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
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
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 52,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

