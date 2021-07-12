# Kataw parser test case

## Input

`````js
while /* comment 1 */ (x// comment 2
) /* comment 3 */ {}
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
                "start": 23,
                "end": 24
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 56,
                    "end": 56
                },
                "flags": 16,
                "start": 38,
                "end": 57
            },
            "flags": 80,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "while /* comment 1 */ (x// comment 2\n) /* comment 3 */ {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

  while/* comment 1 */ (x // comment 2
  )/* comment 3 */ { }

```

### Diagnostics

```javascript
✔ No errors
```

