# Kataw parser test case

## Input

`````js
foo: for (x in y) continue foo
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
                "value": "foo",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 166,
                "initializer": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 10,
                    "end": 11
                },
                "expression": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "statement": {
                    "kind": 172,
                    "label": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 26,
                        "end": 30
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 17,
                    "end": 30
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "foo: for (x in y) continue foo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 45,
            "error": "A 'continue' statement can only be used within an enclosing iteration statement.",
            "start": 17,
            "end": 26
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

