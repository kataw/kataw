# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_let
> :: test: lexical let
> :: case: [1, true];
## Input

`````js
let x: [1, true]; [1, true];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: [1, true]; [1, true];",
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
                            "kind": 134226144,
                            "elementTypes": [
                                {
                                    "kind": 8355,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 8,
                                    "end": 9
                                },
                                {
                                    "kind": 8414,
                                    "text": "true",
                                    "rawText": "true",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 10,
                                    "end": 15
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 16
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 16
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 26
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 28
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

