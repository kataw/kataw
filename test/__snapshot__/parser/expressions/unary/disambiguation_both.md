# Kataw parser test case

## Input

`````js
+ x.def + + y.x
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
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": " x",
                            "flags": 96,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 134299649,
                            "original": "def",
                            "text": "def",
                            "rawText": "def",
                            "flags": 96,
                            "start": 4,
                            "end": 7
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "original": "y",
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "+ x.def + + y.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

