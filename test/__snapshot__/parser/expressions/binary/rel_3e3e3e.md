# Kataw parser test case

## Input

`````js
a>>>b
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35142,
                    "flags": 768,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 81921,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 4,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "a>>>b",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

