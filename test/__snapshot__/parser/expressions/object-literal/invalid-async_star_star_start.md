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
                    "flags": 32,
                    "start": 0,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "({async **f(){}})",
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
✖ Property assignment expected - start: 7, end: 10
✖ ',' expected - start: 7, end: 10
✖ The parser expected to find a '}' to match the '{' token here - start: 7, end: 10
✖ Expected a `;` - start: 13, end: 14
✖ Declaration or statement expected - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 17

```

