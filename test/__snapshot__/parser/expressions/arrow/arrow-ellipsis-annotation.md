# Kataw parser test case

## Input

`````js
(...{a}: symbol) => x
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
                    "kind": 132,
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "symbol",
                "rawText": "symbol",
                "flags": 768,
                "start": 8,
                "end": 15
            },
            "flags": 128,
            "start": 8,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "flags": 128,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "(...{a}: symbol) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 7, end: 8
@{x2716}@ Statement expected - start: 15, end: 16
@{x2716}@ Statement expected - start: 16, end: 19

```

