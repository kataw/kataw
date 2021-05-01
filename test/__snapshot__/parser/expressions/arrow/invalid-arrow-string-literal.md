# Kataw parser test case

## Input

`````js
("a") => {}
`````

## Output

### Hybrid CST

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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 5, end: 8
✖ Statement expected - start: 5, end: 8

```

