# Kataw parser test case

## Input

`````js
(a,b)+=2
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            }
                        ],
                        "flags": 256,
                        "start": 0,
                        "end": 5
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 5,
                    "start": 512,
                    "end": 7
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "(a,b)+=2",
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
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7

```

