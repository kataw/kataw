# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_block
> :: test: with unclosed block
> :: case: try { !xxx
## Input

`````js
{ {} finally(x) { try { !xxx
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ {} finally(x) { try { !xxx",
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
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
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
                                    "start": 4,
                                    "end": 4
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
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
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 12
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
                                    "start": 13,
                                    "end": 14
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097375,
                                        "block": {
                                            "kind": 2099237,
                                            "block": {
                                                "kind": 2084,
                                                "statements": [
                                                    {
                                                        "kind": 2097233,
                                                        "expression": {
                                                            "kind": 65774,
                                                            "operator": "!",
                                                            "operand": {
                                                                "kind": 196712,
                                                                "text": "xxx",
                                                                "rawText": "xxx",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 25,
                                                                "end": 28
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 23,
                                                            "end": 28
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 28
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 28
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 28
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
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 28
                                    }
                                ],
                                "multiline": false,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 28
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 28
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 28
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 25,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

