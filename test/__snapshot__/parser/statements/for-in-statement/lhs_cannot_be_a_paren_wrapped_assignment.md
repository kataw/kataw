# Kataw parser test case

## Input

`````js
for ((x = y) in z) ;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 9
                    },
                    "right": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 12
            },
            "expression": {
                "kind": 81921,
                "value": "z",
                "autofix": 0,
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 18,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for ((x = y) in z) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 15,
            "end": 17
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

