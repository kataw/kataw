# Kataw parser test case

## Input

`````js
for(x of 3)break/
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
                "start": 4,
                "end": 5
            },
            "expression": {
                "kind": 81921,
                "value": 3,
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "statement": {
                "kind": 150,
                "label": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 16,
                    "end": 16
                },
                "autofix": 0,
                "flags": 128,
                "start": 11,
                "end": 16
            },
            "awaitToken": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for(x of 3)break/",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 16,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 18
        }
    ],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

