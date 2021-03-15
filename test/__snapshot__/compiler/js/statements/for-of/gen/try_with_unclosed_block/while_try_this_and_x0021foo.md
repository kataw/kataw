# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/for-of/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\for-of\gen\try_with_unclosed_block
> :: test: try with unclosed block
> :: case: while try this and !foo
## Input

`````js
try {} finally(x) { while try this and !foo
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {} finally(x) { while try this and !foo",
    "filename": "",
    "statements": [
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
                    "start": 5,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 6
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
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 14,
            "end": 17
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 25
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
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
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
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 29
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 29
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4260571,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 34
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 74398,
                            "expression": {
                                "kind": 196712,
                                "text": "and",
                                "rawText": "and",
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 38
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 40
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 40
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 43
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 43
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 43
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 17,
            "end": 43
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 26,
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
            "message": "';' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
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
    "end": 43
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

