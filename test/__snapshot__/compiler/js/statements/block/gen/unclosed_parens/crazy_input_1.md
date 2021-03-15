# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: crazy input 1
## Input

`````js
{( crazy input 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{( crazy input 1",
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
                            "kind": 66224,
                            "expression": {
                                "kind": 196712,
                                "text": "crazy",
                                "rawText": "crazy",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
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
                            "start": 8,
                            "end": 14
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
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
                            "start": 14,
                            "end": 16
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
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
            "start": 9,
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

