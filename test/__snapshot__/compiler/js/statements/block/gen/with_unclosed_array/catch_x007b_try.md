# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
{[ catch { try
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{[ catch { try",
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
                                    "start": 2,
                                    "end": 2
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
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
                                    "start": 2,
                                    "end": 2
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
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
                                                        "start": 14,
                                                        "end": 14
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 14
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
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 14
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 14
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 16,
                                "start": 2,
                                "end": 14
                            },
                            "finallyBlock": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 16,
                            "start": 2,
                            "end": 14
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 11,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

