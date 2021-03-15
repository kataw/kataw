# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_async_arrow_head
> :: test: in async arrow head
> :: case: .length
## Input

`````js
async ([ .length , x: .length ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ .length , x: .length ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 67175096,
                            "member": {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "length",
                                "rawText": "length",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 16
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 16,
                            "period": {
                                "kind": 255,
                                "pos": 8,
                                "end": 10
                            }
                        },
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 8383,
                                    "left": {
                                        "kind": 196712,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 196711,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 21,
                                    "end": 29
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 31
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 18,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 1,
                    "symbol": null,
                    "start": 8,
                    "end": 29
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 33,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

