# Kataw parser test case

## Input

`````js
switch (A) {case B: C; break; case D: E; break;}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
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
                            "flags": 80,
                            "start": 12,
                            "end": 16
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
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
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 16,
                                "start": 19,
                                "end": 22
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "start": 22,
                                    "end": 28
                                },
                                "label": null,
                                "flags": 16,
                                "start": 22,
                                "end": 29
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 29
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 29,
                            "end": 34
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "D",
                            "rawText": "D",
                            "flags": 96,
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
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 16,
                                "start": 37,
                                "end": 40
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "start": 40,
                                    "end": 46
                                },
                                "label": null,
                                "flags": 16,
                                "start": 40,
                                "end": 47
                            }
                        ],
                        "flags": 16,
                        "start": 29,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "switch (A) {case B: C; break; case D: E; break;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

switch(A) {
  case B:
    C;
    break;
  case D:
    E;
    break;
}
```

### Diagnostics

```javascript
✔ No errors
```

