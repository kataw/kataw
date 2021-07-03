# Kataw parser test case

## Input

`````js
(!a) += 1
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "operand": {
                            "kind": 134299649,
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
                    "flags": 0,
                    "start": 32,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "start": 4,
                    "end": 7
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(!a) += 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

(! a) += 1;

```

### Diagnostics

```javascript
✔ No errors
```

