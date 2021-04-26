# Kataw parser test case

## Input

`````js
(...rest = ...NaN) => {};
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
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "NaN",
                "rawText": "NaN",
                "flags": 768,
                "start": 14,
                "end": 17
            },
            "flags": 128,
            "start": 14,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 23,
                "end": 23
            },
            "flags": 128,
            "start": 21,
            "end": 24
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 24,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "(...rest = ...NaN) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ A rest element cannot have an initializer - start: 8, end: 10
@{x2716}@ Expression expected - start: 10, end: 14
@{x2716}@ Statement expected - start: 10, end: 14
@{x2716}@ Statement expected - start: 17, end: 18
@{x2716}@ Statement expected - start: 18, end: 21

```

