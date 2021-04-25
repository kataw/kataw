# Kataw parser test case

## Input

`````js
(true)
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 256,
                        "start": 0,
                        "end": 1
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 24752947,
                    "flags": 768,
                    "start": 1,
                    "end": 5
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "(true)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 5
@{x2716}@ Unexpected token. - start: 1, end: 5
@{x2716}@ Expression expected - start: 5, end: 6
@{x2716}@ Unexpected token. - start: 5, end: 6
@{x2716}@ Statement expected - start: 5, end: 6

```

