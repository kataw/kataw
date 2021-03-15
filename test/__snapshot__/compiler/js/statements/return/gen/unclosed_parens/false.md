# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\return\gen\unclosed_parens
> :: test: unclosed parens
> :: case: false
## Input

`````js
return( false
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return( false",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 4260391,
                    "text": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 13
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
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

