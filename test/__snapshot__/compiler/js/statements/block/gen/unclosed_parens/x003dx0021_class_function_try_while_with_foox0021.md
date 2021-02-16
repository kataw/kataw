# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: =! class function try while with foo!
## Input

`````js
{( =! class function try while with foo!
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{( =! class function try while with foo!",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 6,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 2,
                                        "end": 2
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
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 5,
                                                "end": 5
                                            },
                                            "decorators": null,
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 5,
                                            "end": 11
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 4,
                                        "end": 11
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 2,
                                    "end": 11
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1,
                                "end": 11
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 11
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
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 20
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
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
                                                "flags": 6,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 30,
                                                "end": 30
                                            },
                                            "statement": {
                                                "kind": 2097400,
                                                "expression": {
                                                    "kind": 66206,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 35,
                                                        "end": 39
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 39,
                                                    "end": 40
                                                },
                                                "statement": {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 6,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 40,
                                                        "end": 40
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 40,
                                                    "end": 40
                                                },
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 30,
                                                "end": 40
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 24,
                                            "end": 40
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 24,
                                    "end": 40
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 40
                            },
                            "typeParameters": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 256,
                            "parent": null,
                            "emitNode": null,
                            "start": 11,
                            "end": 40
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1,
                    "end": 40
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 40
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 40
    },
    "jsx": false,
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
            "start": 39,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

