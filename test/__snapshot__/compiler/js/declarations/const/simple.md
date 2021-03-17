# Kataw parser test case

## Input

`````js
const x = y;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x = y;",
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
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
                            "start": 9,
                            "end": 11
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 11
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 12
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
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

