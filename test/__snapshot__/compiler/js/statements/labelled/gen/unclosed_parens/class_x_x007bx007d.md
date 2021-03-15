# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/labelled/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\labelled\gen\unclosed_parens
> :: test: unclosed parens
> :: case: class x {}
## Input

`````js
try( class x {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "try( class x {}",
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
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 10,
                        "end": 12
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 14,
                        "end": 15
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 4,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 3,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 3,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

