# Kataw parser test case

## Input

`````js
a ? b ? c : d ** x : e
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 81921,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "questionToken": {
                        "kind": 22,
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    "consequent": {
                        "kind": 81921,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "alternate": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "text": "d",
                            "rawText": "d",
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 768,
                            "start": 13,
                            "end": 16
                        },
                        "right": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 18
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "alternate": {
                    "kind": 81921,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "a ? b ? c : d ** x : e",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

