# Kataw parser test case

## Input

`````js
(a ...b) => 0
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
                    "end": 2
                },
                "flags": 256,
                "start": 0,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 6,
                "end": 7
            },
            "flags": 128,
            "start": 6,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 11,
                "end": 13
            },
            "flags": 128,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "(a ...b) => 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 2, end: 6
@{x2716}@ Unexpected token. - start: 2, end: 6
@{x2716}@ Statement expected - start: 2, end: 6
@{x2716}@ Unexpected token. - start: 7, end: 8
@{x2716}@ Statement expected - start: 7, end: 8
@{x2716}@ Statement expected - start: 8, end: 11

```

