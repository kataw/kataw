# Kataw parser test case

## Input

`````js
[a] = [((1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[a] = [((1",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operator": "=",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 66224,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 10
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
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
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

