# Kataw parser test case

## Input

`````js
--/b/.c
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "--/b/.c",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65715,
                "operator": "--",
                "operand": {
                    "kind": 67175096,
                    "member": {
                        "kind": 4260544,
                        "text": "/b/",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 5
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7,
                    "period": {
                        "kind": 255,
                        "pos": 5,
                        "end": 6
                    }
                },
                "flags": 0,
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
    "diagnostics": [],
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

