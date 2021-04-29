# Kataw parser test case

## Input

`````js
(!t).y
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "t",
                            "rawText": "t",
                            "flags": 96,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 3
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 5,
                    "end": 6
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
    "source": "(!t).y",
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

