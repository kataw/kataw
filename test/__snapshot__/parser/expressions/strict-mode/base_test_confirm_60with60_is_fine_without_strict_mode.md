# Kataw parser test case

## Input

`````js
; with (x) y;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 168,
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 0,
                "start": 1,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 16,
                "start": 10,
                "end": 13
            },
            "flags": 16,
            "start": 1,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "; with (x) y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

with (x)
  y;
```

### Diagnostics

```javascript
✔ No errors
```

