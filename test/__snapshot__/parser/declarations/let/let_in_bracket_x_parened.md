# Kataw parser test case

## Input

`````js
(let)[x] in x;
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
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 81921,
                            "value": "let",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 4
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 5
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 21006388,
                    "autofix": 0,
                    "flags": 0,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(let)[x] in x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

