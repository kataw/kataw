# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/labelled/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\labelled\gen\catch_stand_alone
> :: test: catch stand alone
> :: case: false
## Input

`````js
catch false
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "catch false",
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 0
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
                        "start": 5,
                        "end": 5
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 16,
                "start": 0,
                "end": 5
            },
            "finallyBlock": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260391,
                "text": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 5,
            "end": 11
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 6,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

