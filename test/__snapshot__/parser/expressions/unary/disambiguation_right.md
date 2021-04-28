# Kataw parser test case

## Input

`````js
x + + y.x
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 1,
                    "start": 512,
                    "end": 3
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 3,
                        "start": 512,
                        "end": 5
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 5,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "x + + y.x",
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

