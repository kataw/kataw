# Kataw parser test case

## Input

`````js
x in [2
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x in [2",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
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
                "operator": "in",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 6,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

