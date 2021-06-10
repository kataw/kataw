# Kataw parser test case

## Input

`````js
switch {}
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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "flags": 48,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 9,
                "end": 9
            },
            "flags": 80,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "switch {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 6, end: 8
✖ Declaration or statement expected - start: 9, end: 9

```

