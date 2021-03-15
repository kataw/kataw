# Kataw parser test case

## Input

`````js
`\123`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`\\123`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260568,
                "rawText": "\\123",
                "text": "123",
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

