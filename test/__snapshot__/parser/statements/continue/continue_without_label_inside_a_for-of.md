# Kataw parser test case

## Input

`````js
for (x of y) continue
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 172,
                "continueKeyword": {
                    "kind": 37757009,
                    "flags": 12,
                    "start": 0,
                    "end": 21
                },
                "label": null,
                "flags": 128,
                "start": 12,
                "end": 21
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "for (x of y) continue",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

