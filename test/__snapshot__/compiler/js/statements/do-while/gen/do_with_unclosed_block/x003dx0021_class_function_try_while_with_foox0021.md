# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_with_unclosed_block
> :: test: do with unclosed block
> :: case: =! class function try while with foo!
## Input

`````js
do {} while (x) { =! class function try while with foo!
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do {} while (x) { =! class function try while with foo!",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 14
            },
            "statement": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 5
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 15,
            "end": 19
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
                        "start": 20,
                        "end": 20
                    },
                    "decorators": null,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 20,
                    "end": 26
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 26
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 19,
            "end": 26
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
                "start": 35,
                "end": 35
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 35
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
                                "start": 45,
                                "end": 45
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
                                        "start": 50,
                                        "end": 54
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 54,
                                    "end": 55
                                },
                                "statement": {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 55
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 55
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 55
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 55
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 55
            },
            "typeParameters": null,
            "flags": 1,
            "intersects": false,
            "transformFlags": 256,
            "start": 26,
            "end": 55
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the the whole assignment in parentheses.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'try' is a reserved word that cannot be used here",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 54,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

