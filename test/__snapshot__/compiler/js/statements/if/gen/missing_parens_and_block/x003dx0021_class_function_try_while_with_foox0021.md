# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: =! class function try while with foo!
## Input

`````js
if else =! class function try while with foo!
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if else =! class function try while with foo!",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "consequent": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "alternate": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 65550,
                        "left": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 7
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
                                    "start": 10,
                                    "end": 10
                                },
                                "decorators": null,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 10,
                                "end": 16
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 16
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 16
                },
                "isWebCompat": true,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 16
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
                    "start": 25,
                    "end": 25
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 25
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
                                    "start": 35,
                                    "end": 35
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
                                            "start": 40,
                                            "end": 44
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 44,
                                        "end": 45
                                    },
                                    "statement": {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
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
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 45
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 45
                            }
                        ],
                        "multiline": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 45
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 45
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 256,
                "start": 16,
                "end": 45
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 45
    },
    "jsx": false,
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
            "message": "Identifier expected",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 26,
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
            "message": "'(' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 44,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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
