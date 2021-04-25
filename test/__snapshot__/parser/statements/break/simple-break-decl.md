# Kataw parser test case

## Input

`````js
loop: while (x) { break loop; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "loop",
                "rawText": "loop",
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 5,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "statement": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 17,
                                    "end": 23
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 128,
                                "start": 17,
                                "end": 29
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 17,
                        "end": 29
                    },
                    "flags": 128,
                    "start": 15,
                    "end": 31
                },
                "flags": 128,
                "start": 5,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "loop: while (x) { break loop; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

