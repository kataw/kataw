# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: class ! switch
## Input

`````js
class ! switch class class ! switch { field: class ! switch}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class ! switch class class ! switch { field: class ! switch}",
    "filename": "",
    "statements": [
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
                "start": 0,
                "end": 0
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 5
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
                    "start": 7,
                    "end": 7
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 5,
            "end": 7
        },
        {
            "kind": 2097362,
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
                    "start": 14,
                    "end": 14
                },
                "decorators": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 14,
                "end": 20
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 20
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
                "start": 20,
                "end": 20
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 20,
            "end": 26
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
                    "start": 28,
                    "end": 28
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 28
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 98984,
                "propertyList": {
                    "kind": 65722,
                    "properties": [
                        {
                            "kind": 65721,
                            "left": {
                                "kind": 196711,
                                "text": "field",
                                "rawText": "field",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 43
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
                                        "start": 44,
                                        "end": 44
                                    },
                                    "decorators": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 44,
                                    "end": 50
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 50,
                                "end": 52
                            },
                            "accessModifier": null,
                            "decorators": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 52
                        },
                        {
                            "kind": 196712,
                            "text": "switch",
                            "rawText": "switch",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 59
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 59
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 60
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 60,
                "end": 60
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 29,
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
            "message": "'{' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 59,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

