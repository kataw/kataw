# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_with_unclosed_block
> :: test: do with unclosed block
> :: case: async funcion switch!!
## Input

`````js
do {} while (x) { async funcion switch!!
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do {} while (x) { async funcion switch!!",
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
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 23
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "funcion",
                            "rawText": "funcion",
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 31
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 31
                    },
                    {
                        "kind": 2097362,
                        "expression": {
                            "kind": 65774,
                            "operator": "!",
                            "operand": {
                                "kind": 65774,
                                "operator": "!",
                                "operand": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 40
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 40
                        },
                        "caseBlock": {
                            "kind": 2093,
                            "clauses": [],
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 40
                    }
                ],
                "multiline": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 40
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 15,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 39,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
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

