# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_throw_stmt
> :: test: in throw stmt
> :: case: "string
## Input

`````js
throw "string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "throw \"string",
    "filename": "",
    "statements": [
        {
            "kind": 2097373,
            "expression": {
                "kind": 4261583,
                "text": "string",
                "rawText": " \"string",
                "flags": 1048576,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated string literal",
            "start": 13,
            "length": 1
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

