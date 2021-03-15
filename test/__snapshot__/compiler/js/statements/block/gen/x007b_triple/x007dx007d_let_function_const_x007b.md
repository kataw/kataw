# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: }} let function const {
## Input

`````js
{ { { }} let function const {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ { { }} let function const {",
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
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
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
                            "text": "let",
                            "rawText": "let",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
                    },
                    {
                        "kind": 264284,
                        "name": {
                            "kind": 131102,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 21,
                            "end": 21
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "type": null,
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [
                                    {
                                        "kind": 2099237,
                                        "block": {
                                            "kind": 2084,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 29
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 29
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 29
                        },
                        "typeParameters": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 256,
                        "start": 12,
                        "end": 29
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 29
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
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
            "message": "Identifier expected 'const' is a reserved word that cannot be used here",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 28,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

