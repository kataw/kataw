# Kataw parser test case

## Input

`````js
`\40x`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`\\40x`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260568,
                "rawText": "\\40x",
                "text": "40x",
                "literal": true,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 6
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

