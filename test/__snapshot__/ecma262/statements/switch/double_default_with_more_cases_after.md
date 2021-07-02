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
                "flags": 80,
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
                            "flags": 80,
                            "start": 11,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 19,
                            "end": 20
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
                            "flags": 80,
                            "start": 20,
                            "end": 28
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 28,
                            "end": 29
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
                            "flags": 80,
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
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 36,
                            "end": 37
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
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
                            "flags": 80,
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
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 51,
                            "end": 52
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
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
                "start": 11,
                "end": 59
            },
            "flags": 80,
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

```

### Diagnostics

```javascript
✖ A 'default' clause cannot appear more than once in a 'switch' statement. - start: 28, end: 29

```

