# Kataw parser test case

## Input

`````js
while (true) x: while (true) continue x;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 7,
                "end": 11
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 14,
                    "end": 15
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 24752947,
                        "flags": 96,
                        "start": 23,
                        "end": 27
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "start": 28,
                            "end": 37
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 37,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 28,
                        "end": 40
                    },
                    "flags": 16,
                    "start": 15,
                    "end": 40
                },
                "flags": 16,
                "start": 12,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "while (true) x: while (true) continue x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

while (true) x: while (true) continue x;
```

### Diagnostics

```javascript
✔ No errors
```

