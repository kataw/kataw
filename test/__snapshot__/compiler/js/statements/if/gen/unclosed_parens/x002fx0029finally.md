# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\if\gen\unclosed_parens
> :: test: unclosed parens
> :: case: /)finally
## Input

`````js
if( /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if( /)finally",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 4260544,
                "text": "/)finally",
                "flags": 1048576,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "consequent": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 13,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 4,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

