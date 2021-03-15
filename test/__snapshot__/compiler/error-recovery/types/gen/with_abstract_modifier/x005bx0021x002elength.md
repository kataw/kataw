# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\with_abstract_modifier
> :: test: with abstract modifier
> :: case: [!.length
## Input

`````js
absrtact [!.length
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "absrtact [!.length",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 196712,
                    "text": "absrtact",
                    "rawText": "absrtact",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "expression": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 67175096,
                        "member": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 11
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "length",
                            "rawText": "length",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 18
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 18,
                        "period": {
                            "kind": 255,
                            "pos": 11,
                            "end": 12
                        }
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 18
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 12,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

