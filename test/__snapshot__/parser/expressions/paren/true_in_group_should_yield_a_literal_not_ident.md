# Kataw parser test case

## Input

`````js
(true)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "true",
                        "rawText": "true",
                        "flags": 96,
                        "start": 1,
                        "end": 5
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": null,
                    "flags": 32,
                    "start": 1,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "(true)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

