# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_type_alias
> :: test: in type alias
> :: case: dsafdsf
## Input

`````js
type dsafdsf = x extends dsafdsf
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type dsafdsf = x extends dsafdsf",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "dsafdsf",
                "rawText": "dsafdsf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 12
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 14,
                    "end": 24
                },
                "extendsType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "dsafdsf",
                        "rawText": "dsafdsf",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 32
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 24,
                    "end": 32
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196712,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 32
                    },
                    "typeArguments": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 32,
                    "end": 32
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196712,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 32
                    },
                    "typeArguments": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 32,
                    "end": 32
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 14,
                "end": 32
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'?' expected.",
            "start": 25,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

