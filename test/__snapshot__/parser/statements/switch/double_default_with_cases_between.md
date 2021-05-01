# Kataw parser test case

## Input

`````js
switch(x) { default: break; case y: break; case z: break; default: break; }
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 11,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "label": null,
                                "flags": 16,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 16,
                        "start": 11,
                        "end": 27
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 32,
                            "end": 34
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 35,
                                    "end": 41
                                },
                                "label": null,
                                "flags": 16,
                                "start": 35,
                                "end": 42
                            }
                        ],
                        "flags": 16,
                        "start": 27,
                        "end": 42
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 42,
                            "end": 47
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": " z",
                            "flags": 96,
                            "start": 47,
                            "end": 49
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 50,
                                    "end": 56
                                },
                                "label": null,
                                "flags": 16,
                                "start": 50,
                                "end": 57
                            }
                        ],
                        "flags": 16,
                        "start": 42,
                        "end": 57
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 57,
                            "end": 65
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 66,
                                    "end": 72
                                },
                                "label": null,
                                "flags": 16,
                                "start": 66,
                                "end": 73
                            }
                        ],
                        "flags": 16,
                        "start": 57,
                        "end": 73
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 75
            },
            "flags": 16,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "switch(x) { default: break; case y: break; case z: break; default: break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
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

