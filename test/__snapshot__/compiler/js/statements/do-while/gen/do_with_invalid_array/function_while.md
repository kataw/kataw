# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_with_invalid_array
> :: test: do with invalid array
> :: case: function while
## Input

`````js
do while [catch] function while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do while [catch] function while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 15,
                    "end": 15
                },
                "statement": {
                    "kind": 2097399,
                    "expression": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 8,
                        "end": 10
                    },
                    "statement": {
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
                                "parent": null,
                                "emitNode": null,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 10,
                            "end": 10
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
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 16,
                            "parent": null,
                            "emitNode": null,
                            "start": 10,
                            "end": 15
                        },
                        "finallyBlock": null,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 16,
                        "parent": null,
                        "emitNode": null,
                        "start": 10,
                        "end": 15
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 15
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 15
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
                    "parent": null,
                    "emitNode": null,
                    "start": 25,
                    "end": 25
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 25,
                    "end": 31
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 16,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 10,
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
            "message": "Identifier expected 'while' is a reserved word that cannot be used here",
            "start": 26,
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
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

