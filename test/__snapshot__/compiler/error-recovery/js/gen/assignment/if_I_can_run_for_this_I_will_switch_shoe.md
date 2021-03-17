# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/assignment
> :: test: assignment
> :: case: if I can run for this I will switch shoe
## Input

`````js
x = {if I can run for this I will switch shoe}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = {if I can run for this I will switch shoe}",
    "filename": "",
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
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 196711,
                                "text": "if",
                                "rawText": "if",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            },
                            {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            {
                                "kind": 196711,
                                "text": "can",
                                "rawText": "can",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            {
                                "kind": 196711,
                                "text": "run",
                                "rawText": "run",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 17
                            },
                            {
                                "kind": 196711,
                                "text": "for",
                                "rawText": "for",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 21
                            },
                            {
                                "kind": 196711,
                                "text": "this",
                                "rawText": "this",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 26
                            },
                            {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 28
                            },
                            {
                                "kind": 196711,
                                "text": "will",
                                "rawText": "will",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 33
                            },
                            {
                                "kind": 196711,
                                "text": "switch",
                                "rawText": "switch",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 40
                            },
                            {
                                "kind": 196712,
                                "text": "shoe",
                                "rawText": "shoe",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 45
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 18,
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
            "message": "',' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 29,
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
            "message": "',' expected.",
            "start": 41,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

