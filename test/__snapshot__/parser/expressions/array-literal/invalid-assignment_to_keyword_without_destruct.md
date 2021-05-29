# Kataw parser test case

## Input

`````js
[true = x]
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 24752947,
                                "flags": 0,
                                "start": 1,
                                "end": 5
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 5,
                                "end": 7
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "[true = x]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7

```

