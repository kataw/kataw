# Kataw parser test case

## Input

`````js
(!t).y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(!t).y",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 196712,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 3
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 196711,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6,
                "period": {
                    "kind": 255,
                    "pos": 4,
                    "end": 5
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
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
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

