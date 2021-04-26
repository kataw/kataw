# Kataw parser test case

## Input

`````js
(,) => x
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
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 2,
                            "end": 2
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 2
                },
                "flags": 256,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 6,
                "end": 8
            },
            "flags": 128,
            "start": 6,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "(,) => x",
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
@{x2716}@ Expression expected - start: 1, end: 2
@{x2716}@ Expression expected - start: 2, end: 3
@{x2716}@ Statement expected - start: 3, end: 6

```

