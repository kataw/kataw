# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: let
## Input

`````js
import let = let ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import let = let ;",
    "filename": "",
    "statements": [
        {
            "kind": 111,
            "name": {
                "kind": 131102,
                "text": "let",
                "rawText": "let",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 6,
                "end": 10
            },
            "moduleReference": {
                "kind": 196712,
                "text": "let",
                "rawText": "let",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 16
            },
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

