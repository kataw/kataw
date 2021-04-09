# Kataw parser test case

## Input

`````js
foo;bar;
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
                "kind": 81921,
                "value": "foo",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "bar",
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "foo;bar;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

