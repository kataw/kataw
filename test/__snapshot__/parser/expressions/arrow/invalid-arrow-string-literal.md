# Kataw parser test case

## Input

`````js
("a") => {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "a",
                    "rawText": "\"a\"",
                    "flags": 96,
                    "start": 1,
                    "end": 4
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 8,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(\"a\") => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 5

```

