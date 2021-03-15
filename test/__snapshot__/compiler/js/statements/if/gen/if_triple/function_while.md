# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\if_triple
> :: test: if triple
> :: case: function while
## Input

`````js
if if if function while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if if if function while",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "consequent": {
                    "kind": 2097257,
                    "expression": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 17
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 17
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "consequent": {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 23
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 23
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 23
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 0,
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
            "message": "'(' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 6,
            "length": 0
        },
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
            "message": "'(' expected.",
            "start": 18,
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

