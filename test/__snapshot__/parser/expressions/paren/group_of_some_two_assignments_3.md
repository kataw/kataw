# Kataw parser test case

## Input

`````js
(a = 1, b = 2);
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 2,
                                "end": 4
                            },
                            "right": {
                                "kind": 81921,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 4,
                                "end": 6
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 6
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 9,
                                "end": 11
                            },
                            "right": {
                                "kind": 81921,
                                "text": 2,
                                "rawText": "2",
                                "flags": 768,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 13
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "(a = 1, b = 2);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

```

