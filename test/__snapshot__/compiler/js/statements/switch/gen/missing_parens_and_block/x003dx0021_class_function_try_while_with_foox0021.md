# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/switch/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: =! class function try while with foo!
## Input

`````js
switch case =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch case =! class function try while with foo!",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 11
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
                                        "start": 14,
                                        "end": 14
                                    },
                                    "decorators": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 14,
                                    "end": 20
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 20
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 29,
                                    "end": 29
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
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
                                                    "start": 39,
                                                    "end": 39
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
                                                            "start": 44,
                                                            "end": 48
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 48,
                                                        "end": 49
                                                    },
                                                    "statement": {
                                                        "kind": 2097233,
                                                        "expression": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 49
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 49
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 49
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 49
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 49
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 256,
                                "start": 20,
                                "end": 49
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 49
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 49
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 30,
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
            "message": "'(' expected.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 48,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

