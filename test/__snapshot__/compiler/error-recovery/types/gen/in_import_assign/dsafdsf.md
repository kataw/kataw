# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: dsafdsf
## Input

`````js
import dsafdsf = dsafdsf ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import dsafdsf = dsafdsf ;",
    "filename": "",
    "statements": [
        {
            "kind": 111,
            "name": {
                "kind": 131102,
                "text": "dsafdsf",
                "rawText": "dsafdsf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 6,
                "end": 14
            },
            "moduleReference": {
                "kind": 196712,
                "text": "dsafdsf",
                "rawText": "dsafdsf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 24
            },
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

