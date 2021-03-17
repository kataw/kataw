# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/labeled_stmt
> :: test: labeled stmt
> :: case: while wait for the train i run for my life
## Input

`````js
a: while wait for the train i run for my life
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "a: while wait for the train i run for my life",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "statement": {
                "kind": 2097399,
                "expression": {
                    "kind": 196712,
                    "text": "wait",
                    "rawText": "wait",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "statement": {
                    "kind": 2099288,
                    "initializer": {
                        "kind": 196712,
                        "text": "the",
                        "rawText": "the",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 21
                    },
                    "condition": {
                        "kind": 196712,
                        "text": "i",
                        "rawText": "i",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "incrementor": {
                        "kind": 196712,
                        "text": "train",
                        "rawText": "train",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 27
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "run",
                            "rawText": "run",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 33
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 33
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 33
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 196712,
                "text": "my",
                "rawText": "my",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 40
            },
            "condition": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "incrementor": {
                "kind": 196712,
                "text": "life",
                "rawText": "life",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 45
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 45
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 45
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

