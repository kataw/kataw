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
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 6,
                "end": 7
            },
            "flags": 16,
            "start": 6,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "(a?:b:c)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 3, end: 4
✖ Expected a ')' to match the '(' token here - start: 5, end: 6
✖ Expected a `;` - start: 5, end: 6
✖ Declaration or statement expected - start: 5, end: 6
✖ Expected a `;` - start: 7, end: 8
✖ Declaration or statement expected - start: 7, end: 8

```

