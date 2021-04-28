# Kataw parser test case

## Input

`````js
(++x, y) => x;
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
                            "kind": 128,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 1,
                                "start": 512,
                                "end": 3
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 11,
                "end": 13
            },
            "flags": 128,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(++x, y) => x;",
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
✖ Statement expected - start: 8, end: 11

```

