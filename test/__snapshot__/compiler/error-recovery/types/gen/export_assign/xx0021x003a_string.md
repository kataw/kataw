# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
> :: test: export assign
> :: case: x!: string
## Input

`````js
export x!: string = x!: string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export x!: string = x!: string",
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
            "kind": 2097292,
            "label": {
                "kind": 74398,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 9
            },
            "statement": {
                "kind": 2097292,
                "label": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 17
                    },
                    "operator": "=",
                    "right": {
                        "kind": 74398,
                        "expression": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 21,
                        "end": 22
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 22
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 30
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 30
                },
                "isWebCompat": true,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 30
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 30
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
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

