# Kataw parser test case

## Input

`````js
(true)
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 32,
                        "start": 0,
                        "end": 1
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 24752947,
                    "flags": 64,
                    "start": 1,
                    "end": 5
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 5,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "(true)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 5
✖ Expression expected - start: 5, end: 6
✖ Statement expected - start: 5, end: 6

```

