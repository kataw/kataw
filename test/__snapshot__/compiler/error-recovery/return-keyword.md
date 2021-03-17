# Kataw parser test case

## Input

`````js
\\u200C = []
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\\\\u200C = []",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "@{x200c}@",
                    "rawText": "\\u200C",
                    "flags": 8388608,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 7
                },
                "operator": "=",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 12
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 0,
            "length": 0
        }
    ],
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

