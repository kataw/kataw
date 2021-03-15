# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_declare
> :: test: in declare
> :: case: T = t as
## Input

`````js
declare T = t as
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare T = t as",
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
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "T",
                    "rawText": "T",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
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
                        "start": 11,
                        "end": 13
                    },
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196712,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 16
                        },
                        "typeArguments": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 16
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 16
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
            "message": "Type expected",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

