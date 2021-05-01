# Kataw parser test case

## Input

`````js
await - 25
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "original": "await",
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 201392130,
                    "text": 25,
                    "original": "25",
                    "rawText": " 25",
                    "flags": 96,
                    "start": 7,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "await - 25",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

