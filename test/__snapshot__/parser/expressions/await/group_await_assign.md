# Kataw parser test case

## Input

`````js
(x=(await z)=y)
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
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "flags": 128,
            "start": 9,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "flags": 128,
            "start": 13,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(x=(await z)=y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 9, end: 11
@{x2716}@ Unexpected token. - start: 9, end: 11
@{x2716}@ Unexpected token. - start: 9, end: 11
@{x2716}@ Unexpected token. - start: 11, end: 12
@{x2716}@ Statement expected - start: 11, end: 12
@{x2716}@ Statement expected - start: 12, end: 13
@{x2716}@ Unexpected token. - start: 14, end: 15
@{x2716}@ Statement expected - start: 14, end: 15

```

