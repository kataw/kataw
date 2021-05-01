# Kataw parser test case

## Input

`````js
async (a.b) => x;
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
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 10
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 32,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "async (a.b) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 11, end: 14

```

