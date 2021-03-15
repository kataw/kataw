# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_with_unclosed_block
> :: test: do with unclosed block
> :: case: while try this and !foo
## Input

`````js
do {} while (x) { while try this and !foo
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do {} while (x) { while try this and !foo",
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
                "statements": [
                    {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
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
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
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
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 27
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4260571,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 32
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
                                "start": 32,
                                "end": 36
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 36,
                            "end": 38
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 38
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
                            "start": 38,
                            "end": 41
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 41
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 41
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 15,
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
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 38,
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

