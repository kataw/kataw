# Kataw parser test case

## Input

`````js
debugger
/bar/g
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "debugger\n/bar/g",
    "filename": "",
    "statements": [
        {
            "kind": 6291518,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/bar/g",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
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

