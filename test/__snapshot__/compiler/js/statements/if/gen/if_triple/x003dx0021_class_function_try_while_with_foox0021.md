# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\if\gen\if_triple
> :: test: if triple
> :: case: =! class function try while with foo!
## Input

`````js
if if if =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if if if =! class function try while with foo!",
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
                        "kind": 65550,
                        "left": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 8
                        },
                        "operator": "=",
                        "right": {
                            "kind": 65774,
                            "operator": "!",
                            "operand": {
                                "kind": 66099,
                                "name": null,
                                "typeParameters": null,
                                "classHeritage": null,
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 11,
                                    "end": 11
                                },
                                "decorators": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "consequent": {
                        "kind": 264284,
                        "name": {
                            "kind": 131102,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 26,
                            "end": 26
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
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
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 36
                                        },
                                        "statement": {
                                            "kind": 2097400,
                                            "expression": {
                                                "kind": 74398,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 45
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 45,
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
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 46
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 46
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 46
                        },
                        "typeParameters": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 256,
                        "start": 17,
                        "end": 46
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 46
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 46
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 46
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
            "message": "'{' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 45,
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

