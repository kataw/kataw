# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
> :: test: export assign
> :: case: const x!: string
## Input

`````js
export const x!: string = const x!: string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export const x!: string = const x!: string",
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 12,
                                "end": 14
                            },
                            "exclamation": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 16,
                                "end": 23
                            },
                            "initializer": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 25
                        }
                    ],
                    "flags": 40,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 25
                },
                "flags": 40,
                "symbol": null,
                "transformFlags": 769,
                "start": 0,
                "end": 25
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 40,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
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
                            "start": 31,
                            "end": 33
                        },
                        "exclamation": true,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 35,
                            "end": 42
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 42
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 42
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 25,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

