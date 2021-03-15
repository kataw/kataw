# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_async_arrow_head
> :: test: in async arrow head
> :: case: [!.length
## Input

`````js
async ([ [!.length , x: [!.length ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ [!.length , x: [!.length ]) => {}",
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
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 65774,
                                                        "operator": "!",
                                                        "operand": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 131322,
                                                                "text": "",
                                                                "flags": 3,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 11,
                                                                "end": 11
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 12,
                                                                "end": 18
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 18,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 11,
                                                                "end": 12
                                                            }
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 18
                                                    },
                                                    {
                                                        "kind": 4325406,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 22
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 22
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 22
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 22
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 22
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 134226144,
                                "elementTypes": [],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 23,
                                "end": 25
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 25
                        },
                        {
                            "kind": 65774,
                            "operator": "!",
                            "operand": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 33
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 33,
                                "period": {
                                    "kind": 255,
                                    "pos": 26,
                                    "end": 27
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 1,
                    "symbol": null,
                    "start": 8,
                    "end": 33
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
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
                "start": 41,
                "end": 41
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 37,
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

