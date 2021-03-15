# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
> :: test: export assign
> :: case: a: string
## Input

`````js
export a: string = a: string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export a: string = a: string",
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
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 8
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
                        "start": 9,
                        "end": 16
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 20
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
                        "start": 21,
                        "end": 28
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 28
                },
                "isWebCompat": true,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 28
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 28
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
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

