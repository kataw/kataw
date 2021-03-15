# Kataw parser test case

## Input

`````js
while (x) continue
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "while (x) continue",
    "filename": "",
    "statements": [
        {
            "kind": 2097399,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 2097212,
                "label": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

