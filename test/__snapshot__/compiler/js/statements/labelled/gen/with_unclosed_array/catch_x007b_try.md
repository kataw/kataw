# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/labelled/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\labelled\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
try[ catch { try
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try[ catch { try",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                        "start": 3,
                        "end": 3
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
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
                        "start": 3,
                        "end": 3
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            {
                "kind": 2097233,
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
                        "start": 4,
                        "end": 4
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
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
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
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
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 16
                                }
                            ],
                            "multiline": false,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 16
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 16,
                    "start": 4,
                    "end": 16
                },
                "finallyBlock": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 16,
                "start": 4,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 16
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 13,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

