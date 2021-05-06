# Kataw parser test case

## Input

`````js
switch(x) { default: default: case y: break; case z: break; }
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
                        "statements": [],
                        "flags": 16,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 20,
                            "end": 28
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 20,
                        "end": 29
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 34,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 37,
                                    "end": 43
                                },
                                "label": null,
                                "flags": 16,
                                "start": 37,
                                "end": 44
                            }
                        ],
                        "flags": 16,
                        "start": 29,
                        "end": 44
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 44,
                            "end": 49
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 49,
                            "end": 51
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 52,
                                    "end": 58
                                },
                                "label": null,
                                "flags": 16,
                                "start": 52,
                                "end": 59
                            }
                        ],
                        "flags": 16,
                        "start": 44,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "switch(x) { default: default: case y: break; case z: break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
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

