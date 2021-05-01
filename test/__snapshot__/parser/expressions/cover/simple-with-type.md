# Kataw parser test case

## Input

`````js
(s: any) => x
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
                "original": "any",
                "text": "any",
                "rawText": " any",
                "flags": 96,
                "start": 3,
                "end": 7
            },
            "flags": 16,
            "start": 3,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
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
    "source": "(s: any) => x",
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
✖ Expected a `;` - start: 2, end: 3
✖ Statement expected - start: 2, end: 3
✖ Expected a `;` - start: 7, end: 8
✖ Statement expected - start: 7, end: 8
✖ Statement expected - start: 8, end: 11

```

