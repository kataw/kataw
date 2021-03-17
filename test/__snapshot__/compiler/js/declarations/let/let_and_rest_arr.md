# Kataw parser test case

## Input

`````js
let a, [...x] = y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let a, [...x] = y",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 4097,
                                        "start": 8,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 8,
                                "end": 12
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 6,
                            "end": 13
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 17
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 17
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
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

