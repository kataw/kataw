# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_body
> :: test: in arrow body
> :: case: while wait for the train i run for my life
## Input

`````js
([ while wait for the train i run for my life ]) => {x = {while wait for the train i run for my life}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ while wait for the train i run for my life ]) => {x = {while wait for the train i run for my life}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 196712,
                "text": "wait",
                "rawText": "wait",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 13
            },
            "statement": {
                "kind": 2099288,
                "initializer": {
                    "kind": 196712,
                    "text": "the",
                    "rawText": "the",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 21
                },
                "condition": {
                    "kind": 196712,
                    "text": "i",
                    "rawText": "i",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "incrementor": {
                    "kind": 196712,
                    "text": "train",
                    "rawText": "train",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 27
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 196712,
                        "text": "run",
                        "rawText": "run",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 33
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 33
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 33
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 2,
            "end": 33
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 196712,
                "text": "my",
                "rawText": "my",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 40
            },
            "condition": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "incrementor": {
                "kind": 196712,
                "text": "life",
                "rawText": "life",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 45
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 45
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 45
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 54
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196711,
                                            "text": "while",
                                            "rawText": "while",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 63
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "wait",
                                            "rawText": "wait",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 68
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "for",
                                            "rawText": "for",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 68,
                                            "end": 72
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "the",
                                            "rawText": "the",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 72,
                                            "end": 76
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "train",
                                            "rawText": "train",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 76,
                                            "end": 82
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 82,
                                            "end": 84
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "run",
                                            "rawText": "run",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 88
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "for",
                                            "rawText": "for",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 92
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "my",
                                            "rawText": "my",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 92,
                                            "end": 95
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "life",
                                            "rawText": "life",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 100
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 100
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 101
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 101
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 101
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 101
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 51,
            "end": 102
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 69,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 73,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 77,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 83,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 85,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 89,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 93,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 96,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

