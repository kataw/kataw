# Kataw parser test case

## Input

`````js
!a;
+b;

typeof x;
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
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 1,
                    "end": 2
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 2
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "autofix": 0,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "expression": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 6
                },
                "autofix": 0,
                "flags": 256,
                "start": 3,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 3,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259885,
                    "autofix": 0,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 7,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "!a;\n+b;\n\ntypeof x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

