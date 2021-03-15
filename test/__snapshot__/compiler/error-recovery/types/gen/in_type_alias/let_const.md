# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_type_alias
> :: test: in type alias
> :: case: let const
## Input

`````js
type let const = x extends let const
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type let const = x extends let const",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "let",
                "rawText": "let",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "const",
                    "rawText": "const",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 14
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 18
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "let",
                "rawText": "let",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 30
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 36,
                "end": 36
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 30,
            "end": 36
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 31,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

