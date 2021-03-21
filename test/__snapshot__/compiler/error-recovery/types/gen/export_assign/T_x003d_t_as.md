# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
> :: test: export assign
> :: case: T = t as
## Input

`````js
export T = t as = T = t as
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export T = t as = T = t as",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "T",
                    "rawText": "T",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 73738,
                        "expression": {
                            "kind": 196712,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 15
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 12,
                        "end": 15
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 196712,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "operator": "=",
                        "right": {
                            "kind": 73738,
                            "expression": {
                                "kind": 196712,
                                "text": "t",
                                "rawText": "t",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 26
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 23,
                            "end": 26
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 26
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 26
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 24,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

