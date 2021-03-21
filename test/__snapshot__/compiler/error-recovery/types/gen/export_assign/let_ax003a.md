# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
> :: test: export assign
> :: case: let a:
## Input

`````js
export let a: = let a:
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export let a: = let a:",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 142,
                "binding": {
                    "kind": 31,
                    "lexicals": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 10,
                                "end": 12
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 13
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 13,
                                "end": 15
                            },
                            "initializer": {
                                "kind": 196712,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 19
                        },
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 19,
                                "end": 21
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 22
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 22,
                                "end": 22
                            },
                            "initializer": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 22
                        }
                    ],
                    "flags": 24,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 22
                },
                "flags": 24,
                "symbol": null,
                "transformFlags": 769,
                "start": 0,
                "end": 22
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 24,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 21,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

