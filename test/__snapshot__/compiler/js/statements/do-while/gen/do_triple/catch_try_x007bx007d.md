# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: catch try {}
## Input

`````js
do do do catch try {} while while while
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do do do catch try {} while while while",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "statement": {
                    "kind": 2097218,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 14
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
                                "start": 8,
                                "end": 8
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 8
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
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 16,
                            "start": 8,
                            "end": 14
                        },
                        "finallyBlock": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 16,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 14
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 14
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
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
                    "start": 20,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 18,
                "end": 21
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 14,
            "end": 21
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "statement": {
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
                    "kind": 2097399,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 27,
                "end": 39
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 21,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 9,
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
            "message": "'finally' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 34,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

