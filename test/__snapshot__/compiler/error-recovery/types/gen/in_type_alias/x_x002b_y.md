# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_type_alias
> :: test: in type alias
> :: case: x + y
## Input

`````js
type x + y = x extends x + y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type x + y = x extends x + y",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 6
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 6,
                "end": 8
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65774,
                    "operator": "+",
                    "operand": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "operator": "+",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 22,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
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

