# Kataw parser test case

## Input

`````js
({ set: s(if) { } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "({ set: s(if) { } })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 196711,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 1073807915,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "s",
                                        "rawText": "s",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "symbol": null,
                                        "start": 12,
                                        "end": 10
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 10
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 10
                            },
                            {
                                "kind": 196711,
                                "text": "if",
                                "rawText": "if",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 12
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
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
                "start": 15,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
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
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 19,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

