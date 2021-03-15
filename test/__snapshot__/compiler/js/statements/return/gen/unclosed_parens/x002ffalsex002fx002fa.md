# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\return\gen\unclosed_parens
> :: test: unclosed parens
> :: case: /false//a
## Input

`````js
return( /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return( /false//a",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 4260544,
                        "text": "/false/",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "operator": "/",
                    "right": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 17
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
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
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

