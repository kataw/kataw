# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: IActionMessage>{
## Input

`````js
IActionMessage>{ class IActionMessage>{ { field: IActionMessage>{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "IActionMessage>{ class IActionMessage>{ { field: IActionMessage>{}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "IActionMessage",
                        "rawText": "IActionMessage",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 14
                    },
                    "operator": ">",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 196711,
                                    "text": "class",
                                    "rawText": "class",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                {
                                    "kind": 196711,
                                    "text": "IActionMessage",
                                    "rawText": "IActionMessage",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 37
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 37
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 37
                },
                "operator": ">",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 39
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "field",
                            "rawText": "field",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 47
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "IActionMessage",
                                    "rawText": "IActionMessage",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 63
                                },
                                "operator": ">",
                                "right": {
                                    "kind": 98984,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 65
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 66
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 66
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 66
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 66
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 66
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 66
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
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
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 65,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

