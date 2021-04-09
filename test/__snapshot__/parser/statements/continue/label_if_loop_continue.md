# Kataw parser test case

## Input

`````js
foo: if (x) while(z) continue foo
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
                "kind": 164,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 9,
                    "end": 10
                },
                "consequent": {
                    "kind": 154,
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 18,
                        "end": 19
                    },
                    "statement": {
                        "kind": 172,
                        "label": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 29,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 20,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 11,
                    "end": 33
                },
                "alternate": null,
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "foo: if (x) while(z) continue foo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

