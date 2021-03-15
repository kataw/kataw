# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\return\gen\return_stand_alone
> :: test: return stand alone
> :: case: /false//a
## Input

`````js
return /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return /false//a",
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
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
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

