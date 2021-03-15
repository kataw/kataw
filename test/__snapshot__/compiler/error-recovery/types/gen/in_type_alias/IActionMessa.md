# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_type_alias
> :: test: in type alias
> :: case: IActionMessa
## Input

`````js
type IActionMessa = x extends IActionMessa
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type IActionMessa = x extends IActionMessa",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "IActionMessa",
                "rawText": "IActionMessa",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 17
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
                        "start": 19,
                        "end": 21
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 19,
                    "end": 29
                },
                "extendsType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "IActionMessa",
                        "rawText": "IActionMessa",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 42
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 29,
                    "end": 42
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
                        "start": 42,
                        "end": 42
                    },
                    "typeArguments": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 42,
                    "end": 42
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
                        "start": 42,
                        "end": 42
                    },
                    "typeArguments": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 42,
                    "end": 42
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 19,
                "end": 42
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'?' expected.",
            "start": 30,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

