# Kataw parser test case

## Input

`````js
while /* comment */ (x) {}
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 21,
                "end": 22
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 25,
                    "end": 25
                },
                "flags": 16,
                "start": 23,
                "end": 26
            },
            "flags": 80,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "while /* comment */ (x) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

while/* comment */  (x) {}
```

### Diagnostics

```javascript
✔ No errors
```

