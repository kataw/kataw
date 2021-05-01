# Kataw parser test case

## Input

`````js
(-a, b) => {}
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 35379,
                                "flags": 64,
                                "start": 1,
                                "end": 2
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "a",
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": " b",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "start": 10,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(-a, b) => {}",
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
✖ Expected a `;` - start: 7, end: 10
✖ Statement expected - start: 7, end: 10

```

