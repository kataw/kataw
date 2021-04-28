# Kataw parser test case

## Input

`````js
{ (x = x + yield); }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
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
                                    "start": 3,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 4,
                                    "start": 512,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 8,
                                        "start": 512,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 18
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "{ (x = x + yield); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

