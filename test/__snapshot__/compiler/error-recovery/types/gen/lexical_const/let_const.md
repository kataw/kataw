# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: let const
## Input

`````js
const x: let const= {x:let const}:let const
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: let const= {x:let const}:let const",
    "filename": "",
    "statements": [
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
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 12
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 12
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 18
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 12,
            "end": 18
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 26
                        },
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 26
                    },
                    {
                        "kind": 142,
                        "binding": {
                            "kind": 31,
                            "lexicals": [],
                            "flags": 40,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 32
                        },
                        "flags": 41,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 26,
                        "end": 32
                    }
                ],
                "multiline": false,
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 33
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
                "start": 34,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 37
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 43
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 37,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

