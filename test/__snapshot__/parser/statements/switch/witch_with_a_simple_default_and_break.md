# Kataw parser test case

## Input

`````js
switch (A) {default: B; break;}
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
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 768,
                            "start": 12,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 128,
                                "start": 20,
                                "end": 23
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 29
                                },
                                "label": null,
                                "flags": 128,
                                "start": 23,
                                "end": 30
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 30
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "switch (A) {default: B; break;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

