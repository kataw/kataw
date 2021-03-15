# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: a,b, c d = y ** d
## Input

`````js
{ { { a,b, c d = y ** d
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ { { a,b, c d = y ** d",
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
                                                    "kind": 65590,
                                                    "expressions": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 5,
                                                            "end": 7
                                                        },
                                                        {
                                                            "kind": 196712,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 8,
                                                            "end": 9
                                                        },
                                                        {
                                                            "kind": 196712,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 12
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 12
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 12
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 196712,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 16,
                                                            "end": 18
                                                        },
                                                        "operator": "**",
                                                        "right": {
                                                            "kind": 196712,
                                                            "text": "d",
                                                            "rawText": "d",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 23
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 16,
                                                        "end": 23
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 23
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 23
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 23
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 23
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 23
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 23
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 23
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

