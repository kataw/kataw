# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: =! class function try while with foo!
## Input

`````js
do =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do =! class function try while with foo!",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
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
                    "start": 20,
                    "end": 20
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
                        "start": 20,
                        "end": 20
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 20
                },
                "typeParameters": null,
                "type": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 20
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
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
                                "start": 5,
                                "end": 5
                            },
                            "decorators": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 5,
                            "end": 11
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 11
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 11
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 11
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
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
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
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
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 24
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 30
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
                        "start": 35,
                        "end": 39
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 39,
                    "end": 40
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 40
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 40
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 39,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

