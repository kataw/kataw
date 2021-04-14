# Kataw parser test case

## Input

`````js
foo
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
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "text": "foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

