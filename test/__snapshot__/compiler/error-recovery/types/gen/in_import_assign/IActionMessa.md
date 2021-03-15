# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: IActionMessa
## Input

`````js
import IActionMessa = IActionMessa ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import IActionMessa = IActionMessa ;",
    "filename": "",
    "statements": [
        {
            "kind": 111,
            "name": {
                "kind": 131102,
                "text": "IActionMessa",
                "rawText": "IActionMessa",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 6,
                "end": 19
            },
            "moduleReference": {
                "kind": 196712,
                "text": "IActionMessa",
                "rawText": "IActionMessa",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 34
            },
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 36
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
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

