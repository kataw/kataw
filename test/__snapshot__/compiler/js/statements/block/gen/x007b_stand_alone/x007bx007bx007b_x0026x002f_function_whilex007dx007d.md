# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: {{{ &/ function while}}
## Input

`````js
{ {{{ &/ function while}}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ {{{ &/ function while}}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2099237,
                                        "block": {
                                            "kind": 2084,
                                            "statements": [
                                                {
                                                    "kind": 2099237,
                                                    "block": {
                                                        "kind": 2084,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 65563,
                                                                    "left": {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 6,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 5,
                                                                        "end": 5
                                                                    },
                                                                    "operator": "&",
                                                                    "right": {
                                                                        "kind": 4260544,
                                                                        "text": "/ function while}}",
                                                                        "flags": 524288,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 7,
                                                                        "end": 25
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 5,
                                                                    "end": 25
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 5,
                                                                "end": 25
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 5,
                                                        "end": 25
                                                    },
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 4,
                                                    "end": 25
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 25
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 25
                                    }
                                ],
                                "multiline": false,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 25
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 25
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 25
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 25,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 7,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

