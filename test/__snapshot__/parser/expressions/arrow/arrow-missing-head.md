# Kataw parser test case

## Input

`````js
=> {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 4,
                "end": 4
            },
            "flags": 16,
            "start": 2,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "=> {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 2

```

