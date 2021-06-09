# Kataw parser test case

## Input

`````js
async (yield)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
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
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 7,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async (yield)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

