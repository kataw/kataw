# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\if_else
> :: test: if else
> :: case: =! class function try while with foo!
## Input

`````js
if =! class function try while with foo! else
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if =! class function try while with foo! else",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
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
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 5,
                            "end": 5
                        },
                        "decorators": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 5,
                        "end": 11
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 11
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 11
            },
            "consequent": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "",
                    "rawText": "",
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 20,
                    "end": 20
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 20
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
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 39
                                        },
                                        "flags": 0,
                                        "intersects": false,
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
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 40
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 40
                            }
                        ],
                        "multiline": false,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 40
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 40
                },
                "typeParameters": null,
                "flags": 1,
                "intersects": false,
                "transformFlags": 256,
                "start": 11,
                "end": 40
            },
            "alternate": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 45
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "isWebCompat": true,
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
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
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 21,
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
            "start": 41,
            "length": 0
        }
    ],
    "intersects": false,
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

