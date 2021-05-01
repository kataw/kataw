# Kataw parser test case

## Input

`````js
async
 (x) = y;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "original": "async",
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "original": "x",
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 32,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "y",
                "text": "y",
                "rawText": " y",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "async\n (x) = y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 10, end: 12

```

