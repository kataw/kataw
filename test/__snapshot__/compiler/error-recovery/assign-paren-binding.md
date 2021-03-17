# Kataw parser test case

## Input

`````js
= ((b)) = (!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "= ((b)) = (!",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 66224,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 196712,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 5
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 7
                },
                "operator": "=",
                "right": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
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
            "start": 1,
            "end": 12
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 11,
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

