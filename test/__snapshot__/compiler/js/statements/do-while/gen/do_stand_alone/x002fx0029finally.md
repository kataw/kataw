# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: /)finally
## Input

`````js
do /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do /)finally",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/)finally",
                    "flags": 1048576,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 12
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 12,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'while' expected.",
            "start": 3,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

