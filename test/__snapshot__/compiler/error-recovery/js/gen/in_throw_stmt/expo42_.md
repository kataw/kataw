# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_throw_stmt
> :: test: in throw stmt
> :: case: expo42;
## Input

`````js
throw expo42;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "throw expo42;",
    "filename": "",
    "statements": [
        {
            "kind": 2097373,
            "expression": {
                "kind": 196712,
                "text": "expo42",
                "rawText": "expo42",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 12
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

