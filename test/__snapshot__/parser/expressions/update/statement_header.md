# Kataw parser test case

## Input

`````js
if (--
a);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 164,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "autofix": 0,
                    "flags": 0,
                    "start": 4,
                    "end": 6
                },
                "expression": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 10
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "if (--\na);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

