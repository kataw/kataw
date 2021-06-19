# Kataw parser test case

## Input

`````js
switch (0) { case 1: let f; default: var f }
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
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
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
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 20,
                                    "end": 24
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 33554448,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 27
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 27,
                            "end": 35
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "start": 36,
                                    "end": 40
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 40,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 16,
                                "start": 36,
                                "end": 42
                            }
                        ],
                        "flags": 16,
                        "start": 27,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 44
            },
            "flags": 80,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: let f; default: var f }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 40, end: 42

```

