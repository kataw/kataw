# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\return\gen\return_return
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/return/gen/return_return
>>>>>>> chore: autogen & update snapshots
> :: test: return return
> :: case: /false//a
## Input

`````js
return /false//a return
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return /false//a return",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 4260544,
                    "text": "/false/",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 14
                },
                "operator": "/",
                "right": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 16
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 2097346,
            "expression": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 23
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 17,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
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

