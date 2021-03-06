# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\switch\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: catch { try
## Input

`````js
switch case catch { try
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch case catch { try",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097362,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
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
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 11
                            },
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
                                            "start": 11,
                                            "end": 11
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 11
                                    },
                                    "catchClause": {
                                        "kind": 2095,
                                        "catchParameter": null,
                                        "block": {
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
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 23,
                                                                "end": 23
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 23,
                                                            "end": 23
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
                                                                "start": 23,
                                                                "end": 23
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 23,
                                                            "end": 23
                                                        },
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 23
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 23
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 16,
                                        "start": 11,
                                        "end": 23
                                    },
                                    "finallyBlock": null,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 16,
                                    "start": 11,
                                    "end": 23
                                }
                            ],
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 23
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 23
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": false,
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
            "start": 20,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

