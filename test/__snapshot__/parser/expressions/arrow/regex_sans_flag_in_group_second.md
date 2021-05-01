# Kataw parser test case

## Input

`````js
(x, /x/g) => x
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
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 221,
                            "text": "/x/g",
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(x, /x/g) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 9, end: 12
✖ Statement expected - start: 9, end: 12

```

