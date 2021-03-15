# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\return\gen\return_stand_alone
> :: test: return stand alone
> :: case: false
## Input

`````js
return false
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return false",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 4260391,
                "text": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
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

