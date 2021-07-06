# Kataw parser test case

## Input

`````js
switch (A) {case B: C; default: D;}
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
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 22
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 30
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 31
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "D",
                                    "rawText": "D",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 34
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 34
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 34
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "switch (A) {case B: C; default: D;}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
switch (A) {
  case B:
    C;
  default
    D;
}
```

### Diagnostics

```javascript
✔ No errors
```

