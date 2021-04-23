# Kataw parser test case

## Input

`````js
switch(x) { default: default: case y: break; case z: break; }
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
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [],
                        "flags": 128,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [],
                        "flags": 128,
                        "start": 20,
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 34,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 37,
                                    "end": 43
                                },
                                "label": null,
                                "flags": 128,
                                "start": 37,
                                "end": 44
                            }
                        ],
                        "flags": 128,
                        "start": 29,
                        "end": 44
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 44,
                            "end": 49
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 49,
                            "end": 51
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 768,
                                    "start": 52,
                                    "end": 58
                                },
                                "label": null,
                                "flags": 128,
                                "start": 52,
                                "end": 59
                            }
                        ],
                        "flags": 128,
                        "start": 44,
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
    "text": "switch(x) { default: default: case y: break; case z: break; }",
    "fileName": "__root__",
    "flags": 0,
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

