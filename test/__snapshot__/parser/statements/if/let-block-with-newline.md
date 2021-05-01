# Kataw parser test case

## Input

`````js
if (false) let // ASI
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 4,
                "end": 9
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 10,
                    "end": 14
                },
                "flags": 16,
                "start": 10,
                "end": 14
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 14,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "if (false) let // ASI\n{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

