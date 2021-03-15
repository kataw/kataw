# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/gen/stand-alone
> :: test: stand-alone
> :: case: hang mann ! switch while do this function x(
## Input

`````js
[ hang mann ! switch while do this function x( ]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[ hang mann ! switch while do this function x( ]",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
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
                            "start": 1,
                            "end": 6
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
                                "start": 6,
                                "end": 11
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 11,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 13
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
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
            "start": 13,
            "end": 20
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 26
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
                        "start": 43,
                        "end": 45
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 48
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
                            "start": 46,
                            "end": 46
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 46
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 46
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 34
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 34
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 46
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 7,
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
            "message": "'(' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 47,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

