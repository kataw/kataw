# Kataw parser test case

## Input

`````js
for (x of 3) continue
/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 167,
            "initializer": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 81921,
                "value": 3,
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 172,
                "label": null,
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 21
            },
            "awaitToken": null,
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
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 23,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for (x of 3) continue\n/",
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
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 23,
            "end": 23
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

