# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: try catch & finally in bethlehem
## Input

`````js
import try catch & finally in bethlehem = try catch & finally in bethlehem ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import try catch & finally in bethlehem = try catch & finally in bethlehem ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
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
                    "start": 10,
                    "end": 10
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 10
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
                        "start": 16,
                        "end": 16
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 10,
                "end": 16
            },
            "finallyBlock": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 16,
            "start": 6,
            "end": 16
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
                    "start": 16,
                    "end": 16
                },
                "operator": "&",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 18
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
                    "start": 18,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 18
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
                    "start": 26,
                    "end": 26
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 26
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
                        "start": 29,
                        "end": 39
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 39
                },
                "operator": "=",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 41
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
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
                    "start": 45,
                    "end": 45
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 45
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
                        "start": 51,
                        "end": 51
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 51
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 45,
                "end": 51
            },
            "finallyBlock": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 16,
            "start": 41,
            "end": 51
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
                    "start": 51,
                    "end": 51
                },
                "operator": "&",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 53
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 51,
                "end": 53
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 51,
            "end": 53
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
                    "start": 61,
                    "end": 61
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 61
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 53,
            "end": 61
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
                    "start": 64,
                    "end": 74
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 74
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 76
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 62,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

