# Kataw parser test case

## Input

`````js
x: for(;;) continue x
/y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 1
            },
            "statement": {
                "kind": 165,
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "statement": {
                    "kind": 172,
                    "label": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 19,
                        "end": 21
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 10,
                    "end": 21
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 21,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "x: for(;;) continue x\n/y",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 21,
            "end": 23
        }
    ],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

