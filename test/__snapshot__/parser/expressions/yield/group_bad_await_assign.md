# Kataw parser test case

## Input

`````js
(x=(await)=y)
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
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 2,
                        "start": 512,
                        "end": 3
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 768,
                                "start": 4,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 10,
                            "start": 512,
                            "end": 11
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "(x=(await)=y)",
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
✔ No errors
```

