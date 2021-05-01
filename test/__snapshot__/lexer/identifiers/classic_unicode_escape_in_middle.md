# Kataw parser test case

## Input

`````js
xxx\u0065xxx
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
                "original": "xxx\\u0065xxx",
                "text": "xxxexxx",
                "rawText": "xxx\\u0065xxx",
                "flags": 96,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "xxx\\u0065xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

