# Kataw parser test case

## Input

`````js
(a.b) => x;
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
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 3,
                        "end": 4
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 4
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "flags": 128,
            "start": 8,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "(a.b) => x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 5,
            "end": 8
        }
    ],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

