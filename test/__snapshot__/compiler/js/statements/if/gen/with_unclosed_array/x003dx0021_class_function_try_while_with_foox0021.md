# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: =! class function try while with foo!
## Input

`````js
if[ =! class function try while with foo!
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if[ =! class function try while with foo!",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 3
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
                            "start": 6,
                            "end": 6
                        },
                        "decorators": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 6,
                        "end": 12
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 12
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 12
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
                    "start": 21,
                    "end": 21
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
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
                                    "start": 31,
                                    "end": 31
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
                                            "start": 36,
                                            "end": 40
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "statement": {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 41
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 41
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 41
                            }
                        ],
                        "multiline": false,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 41
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 41
                },
                "typeParameters": null,
                "flags": 1,
                "intersects": false,
                "transformFlags": 256,
                "start": 12,
                "end": 41
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 2,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 32,
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
            "message": "')' expected.",
            "start": 40,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

