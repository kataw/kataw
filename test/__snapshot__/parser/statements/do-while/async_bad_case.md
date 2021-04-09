# Kataw parser test case

## Input

`````js
do async
 f(){}; while (y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 8,
                    "end": 11
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 12,
                    "end": 12
                },
                "flags": 256,
                "start": 8,
                "end": 13
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "async",
                    "autofix": 0,
                    "flags": 768,
                    "start": 2,
                    "end": 8
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 15
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 16
        },
        {
            "kind": 154,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 24,
                "end": 25
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 26,
                    "end": 26
                },
                "autofix": 0,
                "flags": 128,
                "start": 26,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "do async\n f(){}; while (y)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 26,
            "end": 26
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

