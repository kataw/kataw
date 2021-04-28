# Kataw parser test case

## Input

`````js
({async **f(){}})
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
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "({async **f(){}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 7, end: 10
✖ Statement expected - start: 15, end: 16
✖ Statement expected - start: 16, end: 17

```

