# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_type_alias
> :: test: in type alias
> :: case:  KeysByType<T, number
## Input

`````js
type  KeysByType<T, number = x extends  KeysByType<T, number
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type  KeysByType<T, number = x extends  KeysByType<T, number",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "KeysByType",
                "rawText": "KeysByType",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 16
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 60
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 60,
                "end": 60
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 17,
                        "end": 18
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "number",
                            "rawText": "number",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 26
                        },
                        "constraint": null,
                        "defaultType": {
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
                                    "start": 28,
                                    "end": 30
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 28,
                                "end": 38
                            },
                            "extendsType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "KeysByType",
                                    "rawText": "KeysByType",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 50
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 51,
                                            "end": 53
                                        },
                                        {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 53,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 51,
                                    "end": 60
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 38,
                                "end": 60
                            },
                            "trueType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 60
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 60
                            },
                            "falseType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 60
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 60
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 28,
                            "end": 60
                        },
                        "expression": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 19,
                        "end": 60
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 17,
                "end": 60
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 54,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

