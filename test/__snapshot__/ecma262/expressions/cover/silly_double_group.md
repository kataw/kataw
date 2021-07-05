# Kataw parser test case

## Input

`````js
((x));
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2,
                        "end": 3
                    },
                    "flags": 1,
                    "start": 32,
                    "end": 4
                },
                "flags": 0,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "((x));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

((x));
```

### Diagnostics

```javascript
✔ No errors
```

