# Kataw parser test case

## Input

`````js
switch (A) {default: D; case B: C; }
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
                "clauses": {
                    "kind": 383,
                    "clauses": [
                        {
                            "kind": 170,
                            "defaultKeyword": {
                                "kind": 4194387,
                                "flags": 80,
                                "start": 12,
                                "end": 19
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 19,
                                "end": 20
                            },
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "D",
                                        "rawText": "D",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "flags": 16,
                                    "start": 20,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "start": 12,
                            "end": 23
                        },
                        {
                            "kind": 175,
                            "caseKeyword": {
                                "kind": 4194382,
                                "flags": 80,
                                "start": 23,
                                "end": 28
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 30,
                                "end": 31
                            },
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "flags": 16,
                                    "start": 31,
                                    "end": 34
                                }
                            ],
                            "flags": 16,
                            "start": 23,
                            "end": 34
                        }
                    ],
                    "flags": 16,
                    "start": 12,
                    "end": 34
                },
                "flags": 16,
                "start": 10,
                "end": 36
            },
            "flags": 80,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "switch (A) {default: D; case B: C; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

switch (A) {
  default: 
    D;
  case B: 
    C;
}

```

### Diagnostics

```javascript
✔ No errors
```

