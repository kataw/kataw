# Kataw parser test case

## Input

`````js
(a?:b:c)
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
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 6,
                "end": 7
            },
            "flags": 128,
            "start": 6,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "(a?:b:c)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 3, end: 4
@{x2716}@ Statement expected - start: 5, end: 6
@{x2716}@ Statement expected - start: 7, end: 8

```

