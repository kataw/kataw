# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_declare
> :: test: in declare
> :: case: let a:
## Input

`````js
declare let a:
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare let a:",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 13
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 14,
                            "end": 14
                        },
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 14
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "flags": 402653208,
            "symbol": null,
            "transformFlags": 769,
            "start": 7,
            "end": 14
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 13,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

