# Kataw parser test case

## Input

`````js
loop: while (x) { break loop; }
`````

## Output

### CST

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
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 4,
                "end": 5
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 5,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "start": 17,
                                    "end": 23
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 29
                            }
                        ],
                        "flags": 16,
                        "start": 17,
                        "end": 29
                    },
                    "flags": 16,
                    "start": 15,
                    "end": 31
                },
                "flags": 80,
                "start": 5,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "loop: while (x) { break loop; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

 loop: while (x) { break loop; } 
```

### Diagnostics

```javascript
✔ No errors
```

