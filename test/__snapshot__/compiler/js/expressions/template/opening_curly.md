# Kataw parser test case

## Input

`````js
`{`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`{`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260568,
                "rawText": "{",
                "text": "{",
                "literal": true,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
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

