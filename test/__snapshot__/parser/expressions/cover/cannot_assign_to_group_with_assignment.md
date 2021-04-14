# Kataw parser test case

## Input

`````js
(a=/i/) = /i/
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
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 2,
                            "end": 3
                        },
                        "right": {
                            "kind": 221,
                            "text": "/i/",
                            "flags": 768,
                            "start": 3,
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
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 221,
                    "text": "/i/",
                    "flags": 768,
                    "start": 9,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "(a=/i/) = /i/",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 7,
            "end": 9
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

