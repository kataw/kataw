# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: function while
## Input

`````js
do do do function while while while while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do do do function while while while while",
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
                    "start": 41,
                    "end": 41
                },
                "statement": {
                    "kind": 2097218,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 41
                    },
                    "statement": {
                        "kind": 2097218,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 41
                        },
                        "statement": {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "",
                                "rawText": "",
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 17,
                                "end": 17
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 17
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
                                                "start": 29,
                                                "end": 29
                                            },
                                            "statement": {
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
                                                    "kind": 2097399,
                                                    "expression": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 6,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 41
                                                    },
                                                    "statement": {
                                                        "kind": 2097233,
                                                        "expression": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 6,
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
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 41
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 41
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 41
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 41
                            },
                            "typeParameters": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 256,
                            "start": 8,
                            "end": 41
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 41
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 41
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 41
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 41
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'while' is a reserved word that cannot be used here",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 36,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

