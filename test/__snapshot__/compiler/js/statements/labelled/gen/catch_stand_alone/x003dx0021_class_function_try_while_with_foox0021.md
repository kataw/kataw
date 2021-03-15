# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/labelled/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\labelled\gen\catch_stand_alone
> :: test: catch stand alone
> :: case: =! class function try while with foo!
## Input

`````js
catch =! class function try while with foo!
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "catch =! class function try while with foo!",
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
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 0
            },
            "catchClause": {
                "kind": 2095,
                "catchParameter": null,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 16,
                "start": 0,
                "end": 5
            },
            "finallyBlock": null,
            "flags": 1,
            "intersects": false,
            "transformFlags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 2097233,
            "expression": {
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
                        "start": 8,
                        "end": 8
                    },
                    "decorators": null,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 8,
                    "end": 14
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 7,
            "end": 14
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "intersects": false,
                "transformFlags": 1025,
                "start": 23,
                "end": 23
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 23
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 33
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
                                        "start": 38,
                                        "end": 42
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 42,
                                    "end": 43
                                },
                                "statement": {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 43
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 43
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 43
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 43
            },
            "typeParameters": null,
            "flags": 1,
            "intersects": false,
            "transformFlags": 256,
            "start": 14,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 34,
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
            "message": "')' expected.",
            "start": 42,
            "length": 0
        }
    ],
    "intersects": false,
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

