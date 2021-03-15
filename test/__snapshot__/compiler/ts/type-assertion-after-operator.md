# Kataw parser test case

## Input

`````js
1 + <number> 1;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "1 + <number> 1;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "+",
                "right": {
                    "kind": 134291684,
                    "type": {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 5,
                        "end": 11
                    },
                    "expression": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 3,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
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
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

