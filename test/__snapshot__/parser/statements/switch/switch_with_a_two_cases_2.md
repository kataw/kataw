# Kataw parser test case

## Input

`````js
switch (A) {case B: C; break; case D: E; break;}
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
                "flags": 768,
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
                            "flags": 768,
                            "start": 12,
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
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 28
                                },
                                "label": null,
                                "flags": 128,
                                "start": 22,
                                "end": 29
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 29
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 29,
                            "end": 34
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "D",
                            "rawText": "D",
                            "flags": 768,
                            "start": 34,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 768,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 128,
                                "start": 37,
                                "end": 40
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 40,
                                    "end": 46
                                },
                                "label": null,
                                "flags": 128,
                                "start": 40,
                                "end": 47
                            }
                        ],
                        "flags": 128,
                        "start": 29,
                        "end": 47
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 48
            },
            "flags": 128,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "switch (A) {case B: C; break; case D: E; break;}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

