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
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "b",
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 6,
                "end": 7
            },
            "flags": 16,
            "start": 6,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "original": "0",
                "rawText": " 0",
                "flags": 96,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(a ...b) => 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 2, end: 6
✖ Statement expected - start: 2, end: 6
✖ Expected a `;` - start: 7, end: 8
✖ Statement expected - start: 7, end: 8
✖ Statement expected - start: 8, end: 11

```

