# Kataw parser test case

## Input

`````js
(x = x) = x;
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 2,
                            "start": 512,
                            "end": 4
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 7,
                    "start": 512,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "(x = x) = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 7, end: 9

```

