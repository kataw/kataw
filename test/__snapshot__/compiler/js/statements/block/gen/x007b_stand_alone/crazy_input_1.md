# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: crazy input 1
## Input

`````js
{ crazy input 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ crazy input 1",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "crazy",
                            "rawText": "crazy",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "input",
                            "rawText": "input",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 13
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
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
            "message": "';' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

