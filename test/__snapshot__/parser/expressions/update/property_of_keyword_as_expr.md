# Kataw parser test case

## Input

`````js
(--this.x)
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
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 768,
                        "start": 1,
                        "end": 3
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 135,
                            "flags": 768,
                            "start": 3,
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
                        "start": 3,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "(--this.x)",
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

