# Kataw parser test case

## Input

`````js
switch (A) {default: B; break;}
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
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 29
                                },
                                "label": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 30
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 30
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 30
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "switch (A) {default: B; break;}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
switch (A) {
  default
    B;
    break ;
}
```

### Diagnostics

```javascript
✔ No errors
```

