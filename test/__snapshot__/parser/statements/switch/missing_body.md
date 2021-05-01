# Kataw parser test case

## Input

`````js
switch (x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 10,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "switch (x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
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

