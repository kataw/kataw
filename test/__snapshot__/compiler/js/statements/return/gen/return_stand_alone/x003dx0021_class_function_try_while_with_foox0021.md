# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\return\gen\return_stand_alone
> :: test: return stand alone
> :: case: =! class function try while with foo!
## Input

`````js
return =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return =! class function try while with foo!",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 6
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
                            "start": 9,
                            "end": 9
                        },
                        "decorators": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 15
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 15
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 15
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
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
                "start": 24,
                "end": 24
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
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
                                "start": 34,
                                "end": 34
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
                                        "start": 39,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 43,
                                    "end": 44
                                },
                                "statement": {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 44
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 44
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 44
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 44
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 15,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 43,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

