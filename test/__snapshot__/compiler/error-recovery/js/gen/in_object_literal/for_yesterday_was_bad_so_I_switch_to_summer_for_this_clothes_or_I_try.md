# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_object_literal
> :: test: in object literal
> :: case: for yesterday was bad so I switch to summer for this clothes or I try
## Input

`````js
x = {for yesterday was bad so I switch to summer for this clothes or I try}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = {for yesterday was bad so I switch to summer for this clothes or I try}",
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
                                "text": "for",
                                "rawText": "for",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            {
                                "kind": 196711,
                                "text": "yesterday",
                                "rawText": "yesterday",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 18
                            },
                            {
                                "kind": 196711,
                                "text": "was",
                                "rawText": "was",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 22
                            },
                            {
                                "kind": 196711,
                                "text": "bad",
                                "rawText": "bad",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            {
                                "kind": 196711,
                                "text": "so",
                                "rawText": "so",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 29
                            },
                            {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            {
                                "kind": 196711,
                                "text": "switch",
                                "rawText": "switch",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 38
                            },
                            {
                                "kind": 196711,
                                "text": "to",
                                "rawText": "to",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 41
                            },
                            {
                                "kind": 196711,
                                "text": "summer",
                                "rawText": "summer",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 48
                            },
                            {
                                "kind": 196711,
                                "text": "for",
                                "rawText": "for",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 52
                            },
                            {
                                "kind": 196711,
                                "text": "this",
                                "rawText": "this",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 57
                            },
                            {
                                "kind": 196711,
                                "text": "clothes",
                                "rawText": "clothes",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 65
                            },
                            {
                                "kind": 196711,
                                "text": "or",
                                "rawText": "or",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 68
                            },
                            {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 70
                            },
                            {
                                "kind": 196712,
                                "text": "try",
                                "rawText": "try",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 74
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 74
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 75
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 75
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 23,
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
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 58,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 66,
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
            "start": 71,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

