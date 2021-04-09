# Kataw parser test case

## Input

`````js
for (x in a>c;;) x
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 34883,
                    "autofix": 0,
                    "flags": 0,
                    "start": 11,
                    "end": 12
                },
                "right": {
                    "kind": 81921,
                    "value": "c",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 9,
                "end": 13
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for (x in a>c;;) x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 16
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

