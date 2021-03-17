# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_function_block
> :: test: in function block
> :: case: while wait for the train i run for my life
## Input

`````js
function x() {while wait for the train i run for my life}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x() {while wait for the train i run for my life}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097399,
                            "expression": {
                                "kind": 196712,
                                "text": "wait",
                                "rawText": "wait",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 24
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
                                    "start": 28,
                                    "end": 32
                                },
                                "condition": {
                                    "kind": 196712,
                                    "text": "i",
                                    "rawText": "i",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "incrementor": {
                                    "kind": 196712,
                                    "text": "train",
                                    "rawText": "train",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 38
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
                                        "start": 40,
                                        "end": 44
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 44
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 44
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 44
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
                                "start": 48,
                                "end": 51
                            },
                            "condition": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 56
                            },
                            "incrementor": {
                                "kind": 196712,
                                "text": "life",
                                "rawText": "life",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 56
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 56
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 56
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 56
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 56
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 57
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 56,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

