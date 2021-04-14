# Kataw parser test case

## Input

`````js
(a,b)=2
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            }
                        ],
                        "flags": 256,
                        "start": 0,
                        "end": 5
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 5,
                    "end": 6
                },
                "right": {
                    "kind": 81921,
                    "text": 2,
                    "rawText": "2",
                    "flags": 768,
                    "start": 6,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "(a,b)=2",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 5,
            "end": 6
        }
    ],
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

