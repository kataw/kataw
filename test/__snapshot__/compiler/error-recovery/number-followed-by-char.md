# Kataw parser test case

## Input

`````js
3e+
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "3e+",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 3,
                "rawText": "3e+",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Non-number after exponent indicator",
            "start": 3,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

