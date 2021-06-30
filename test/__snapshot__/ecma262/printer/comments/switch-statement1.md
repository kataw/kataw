# Kataw parser test case

## Input

`````js
switch /* comment 1 */ (x) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 24,
                "end": 25
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 26,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "switch /* comment 1 */ (x) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

switch/* comment 1 */ (x) {
}

```

### Diagnostics

```javascript
✔ No errors
```

