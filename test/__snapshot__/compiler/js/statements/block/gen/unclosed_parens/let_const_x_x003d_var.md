# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: let const x = var
## Input

`````js
{( let const x = var
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{( let const x = var",
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
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
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
                                        "start": 12,
                                        "end": 14
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 16
                                }
                            ],
                            "flags": 40,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 16
                        },
                        "flags": 41,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 6,
                        "end": 16
                    },
                    {
                        "kind": 2097397,
                        "declarationList": {
                            "kind": 244,
                            "declarations": [],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 40,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 20
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

