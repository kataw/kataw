# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_declare
> :: test: in declare
> :: case: let const
## Input

`````js
declare let const
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare let const",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "let",
                "rawText": "let",
                "flags": 402653184,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 11
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 17
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 11,
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

