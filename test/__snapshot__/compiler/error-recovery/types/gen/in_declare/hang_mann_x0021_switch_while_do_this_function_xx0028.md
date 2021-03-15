# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_declare
> :: test: in declare
> :: case: hang mann ! switch while do this function x(
## Input

`````js
declare hang mann ! switch while do this function x(
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare hang mann ! switch while do this function x(",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "declare",
                "rawText": "declare",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "hang",
                "rawText": "hang",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 12
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
                    "start": 12,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 17,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 19
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 26
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 32
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
                        "start": 49,
                        "end": 51
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 52
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
                            "start": 52,
                            "end": 52
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 52
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 52
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260571,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 40
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 40
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 52
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 52
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
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
            "message": "'(' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 51,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

