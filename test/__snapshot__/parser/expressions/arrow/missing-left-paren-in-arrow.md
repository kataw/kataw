# Kataw parser test case

## Input

`````js
) => 0
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "flags": 128,
            "start": 4,
            "end": 6
        }
    ],
    "isModule": false,
    "text": ") => 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 1
@{x2716}@ Statement expected - start: 1, end: 4

```

