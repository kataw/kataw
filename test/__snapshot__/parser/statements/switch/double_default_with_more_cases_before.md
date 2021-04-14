# Kataw parser test case

## Input

`````js
switch(x) { case y: break; case z: break; default: default: }
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
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 11,
                            "end": 16
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 16,
                            "end": 18
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 25
                                },
                                "label": null,
                                "flags": 128,
                                "start": 19,
                                "end": 26
                            }
                        ],
                        "flags": 128,
                        "start": 11,
                        "end": 26
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 26,
                            "end": 31
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 31,
                            "end": 33
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 34,
                                    "end": 40
                                },
                                "label": null,
                                "flags": 128,
                                "start": 34,
                                "end": 41
                            }
                        ],
                        "flags": 128,
                        "start": 26,
                        "end": 41
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [],
                        "flags": 128,
                        "start": 41,
                        "end": 50
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [],
                        "flags": 128,
                        "start": 50,
                        "end": 59
                    }
                ],
                "flags": 128,
                "start": 9,
                "end": 61
            },
            "flags": 128,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "switch(x) { case y: break; case z: break; default: default: }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 58
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 58,
            "end": 59
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 59,
            "end": 61
        }
    ],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

