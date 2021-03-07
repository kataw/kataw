# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\return\gen\return_triple
> :: test: return triple
> :: case: =! class function try while with foo!
## Input

`````js
return return return =! class function try while with foo!
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "return return return =! class function try while with foo!",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097346,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 6
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097346,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            {
                "kind": 2097346,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 82483,
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 23,
                                "end": 23
                            },
                            "decorators": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 23,
                            "end": 29
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 29
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 29
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 29
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "",
                    "rawText": "",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 38,
                    "end": 38
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 38
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
                                    "flags": 6,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 48
                                },
                                "statement": {
                                    "kind": 2097400,
                                    "expression": {
                                        "kind": 74398,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 57
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 57,
                                        "end": 58
                                    },
                                    "statement": {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 58
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 58
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 58
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 58
                            }
                        ],
                        "multiline": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 58
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 58
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 256,
                "start": 29,
                "end": 58
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 58
    },
    "jsx": false,
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
            "message": "Identifier expected",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 39,
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
            "message": "'(' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 57,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

