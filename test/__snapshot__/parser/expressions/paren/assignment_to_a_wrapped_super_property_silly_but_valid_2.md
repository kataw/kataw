# Kataw parser test case

## Input

`````js
(this.a) += 1;
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
                        "kind": 129,
                        "member": {
                            "kind": 135,
                            "flags": 768,
                            "start": 1,
                            "end": 5
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 6,
                            "end": 7
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 768,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 81921,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(this.a) += 1;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

