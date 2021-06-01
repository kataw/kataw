# Kataw parser test case

## Input

`````js
while (true) x: continue x;
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
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 80,
                        "start": 15,
                        "end": 24
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "flags": 16,
                    "start": 15,
                    "end": 27
                },
                "flags": 16,
                "start": 12,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "while (true) x: continue x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 15, end: 27

```

