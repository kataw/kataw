# Kataw parser test case

## Input

`````js
`\1230`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`\\1230`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260568,
                "rawText": "\\1230",
                "text": "1230",
                "literal": true,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
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

