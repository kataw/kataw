# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: (a b, c = b : string)
## Input

`````js
{ { { (a b, c = b : string)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ { { (a b, c = b : string)",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 8
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 8
                                            },
                                            {
                                                "kind": 2097292,
                                                "label": {
                                                    "kind": 65590,
                                                    "expressions": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 8,
                                                            "end": 10
                                                        },
                                                        {
                                                            "kind": 65550,
                                                            "left": {
                                                                "kind": 196712,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 11,
                                                                "end": 13
                                                            },
                                                            "operator": "=",
                                                            "right": {
                                                                "kind": 196712,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 15,
                                                                "end": 17
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 17
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 17
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
                                                        "start": 19,
                                                        "end": 26
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 26
                                                },
                                                "isWebCompat": true,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 26
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 26
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 26
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 26
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 26
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 26
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
            "start": 26,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

