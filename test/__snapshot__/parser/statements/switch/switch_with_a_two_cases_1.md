# Kataw parser test case

## Input

`````js
switch (A) {case B: C; case D: E;}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 12,
                            "start": 0,
                            "end": 16
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 768,
                            "start": 16,
                            "end": 18
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 128,
                                "start": 19,
                                "end": 22
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 22
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 22,
                            "start": 0,
                            "end": 27
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "D",
                            "rawText": "D",
                            "flags": 768,
                            "start": 27,
                            "end": 29
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 128,
                                "start": 30,
                                "end": 33
                            }
                        ],
                        "flags": 128,
                        "start": 22,
                        "end": 33
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "switch (A) {case B: C; case D: E;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
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

