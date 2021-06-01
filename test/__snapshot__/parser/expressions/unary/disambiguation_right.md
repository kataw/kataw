# Kataw parser test case

## Input

`````js
x + + y.x
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 99634,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 536870944,
                        "start": 5,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 3,
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
    "source": "x + + y.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

x + +y.x;
```

### Diagnostics

```javascript
✔ No errors
```

