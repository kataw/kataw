# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_type_alias
> :: test: in type alias
> :: case: try catch & finally in bethlehem
## Input

`````js
type try catch & finally in bethlehem = x extends try catch & finally in bethlehem
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type try catch & finally in bethlehem = x extends try catch & finally in bethlehem",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "type",
                "rawText": "type",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
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
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 8,
                "end": 14
            },
            "finallyBlock": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 16,
            "start": 4,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "operator": "&",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 16
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 0,
                "symbol": null,
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 24
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65774,
                    "operator": "in",
                    "operand": {
                        "kind": 196712,
                        "text": "bethlehem",
                        "rawText": "bethlehem",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 37
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 37
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 41
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 41
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 41
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 53
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 53
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
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 59
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 59
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 53,
                "end": 59
            },
            "finallyBlock": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 16,
            "start": 49,
            "end": 59
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 59
                },
                "operator": "&",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 61
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 59,
                "end": 61
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 59,
            "end": 61
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 61
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 61
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 69
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 69
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 69
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "in",
                "operand": {
                    "kind": 196712,
                    "text": "bethlehem",
                    "rawText": "bethlehem",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 82
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 82
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 82
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
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
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 60,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 62,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 70,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

