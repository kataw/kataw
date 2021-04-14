# Kataw parser test case

## Input

`````js
switch (A) {case B: C; default: D;}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 81921,
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
                            "flags": 768,
                            "start": 12,
                            "end": 16
                        },
                        "expression": {
                            "kind": 81921,
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
                                    "kind": 81921,
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
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "text": "D",
                                    "rawText": "D",
                                    "flags": 768,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 128,
                                "start": 31,
                                "end": 34
                            }
                        ],
                        "flags": 128,
                        "start": 22,
                        "end": 34
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "switch (A) {case B: C; default: D;}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 33
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

