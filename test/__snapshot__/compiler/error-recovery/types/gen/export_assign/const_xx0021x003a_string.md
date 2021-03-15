# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
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
                    "flags": 9,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 25
                },
                "flags": 9,
                "symbol": null,
                "transformFlags": 769,
                "start": 0,
                "end": 25
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
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
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 42
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 25,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 26,
            "length": 0
        }
    ],
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

