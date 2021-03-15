# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_let
> :: test: lexical let
> :: case: /aaaaaaaaa
## Input

`````js
let x: /aaaaaaaaa /aaaaaaaaa
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: /aaaaaaaaa /aaaaaaaaa",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196712,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 6
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 8
                        },
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 6
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 6
                    },
                    "operator": "/",
                    "right": {
                        "kind": 196712,
                        "text": "aaaaaaaaa",
                        "rawText": "aaaaaaaaa",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 17
                },
                "operator": "/",
                "right": {
                    "kind": 196712,
                    "text": "aaaaaaaaa",
                    "rawText": "aaaaaaaaa",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 7,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

