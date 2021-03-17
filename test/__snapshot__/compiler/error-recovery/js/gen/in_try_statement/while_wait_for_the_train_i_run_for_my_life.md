# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_try_statement
> :: test: in try statement
> :: case: while wait for the train i run for my life
## Input

`````js
try while wait for the train i run for my life
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "try while wait for the train i run for my life",
    "filename": "",
    "statements": [
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 196712,
                "text": "wait",
                "rawText": "wait",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 14
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
                    "start": 18,
                    "end": 22
                },
                "condition": {
                    "kind": 196712,
                    "text": "i",
                    "rawText": "i",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "incrementor": {
                    "kind": 196712,
                    "text": "train",
                    "rawText": "train",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 28
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
                        "start": 30,
                        "end": 34
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 34
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 34
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 3,
            "end": 34
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
                "start": 38,
                "end": 41
            },
            "condition": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 46,
                "end": 46
            },
            "incrementor": {
                "kind": 196712,
                "text": "life",
                "rawText": "life",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 46
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 46,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 42,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

