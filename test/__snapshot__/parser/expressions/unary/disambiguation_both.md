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
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "def",
                            "rawText": "def",
                            "flags": 768,
                            "start": 4,
                            "end": 7
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 14,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 11,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 9,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "+ x.def + + y.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

