# Kataw parser test case

## Input

`````js
x + async
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
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "original": "async",
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 3,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "x + async",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
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

