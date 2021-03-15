# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: =! class function try while with foo!
## Input

`````js
do do do =! class function try while with foo! while while while
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do do do =! class function try while with foo! while while while",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "statement": {
                    "kind": 2097218,
                    "expression": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 26
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "intersects": false,
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
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 11,
                                        "end": 11
                                    },
                                    "decorators": null,
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 26
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 26
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 26,
            "end": 30
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
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
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 45
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 45,
                    "end": 46
                },
                "statement": {
                    "kind": 2097399,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 52
                    },
                    "statement": {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 58
                        },
                        "statement": {
                            "kind": 2097399,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 64
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 64
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 64
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 64
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 64
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 64
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 36,
                "end": 64
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 30,
            "end": 64
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
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
            "message": "'(' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 31,
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
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 59,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

