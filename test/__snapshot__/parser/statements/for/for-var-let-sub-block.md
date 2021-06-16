# Kataw parser test case

## Input

`````js
for (let x;;) { { var x; } }

for (var x;;) { { let x; } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 10
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 21
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 16,
                                        "start": 17,
                                        "end": 24
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 26
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 26
                },
                "flags": 16,
                "start": 13,
                "end": 28
            },
            "flags": 80,
            "start": 0,
            "end": 28
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 28,
                "end": 33
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 38,
                            "end": 40
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 38,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 38,
                "end": 40
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 162,
                                        "lexicalKeyword": {
                                            "kind": 41951307,
                                            "flags": 80,
                                            "start": 47,
                                            "end": 51
                                        },
                                        "binding": {
                                            "kind": 151,
                                            "bindingList": [
                                                {
                                                    "kind": 190,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 51,
                                                        "end": 53
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 51,
                                                    "end": 53
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "flags": 33554448,
                                        "start": 47,
                                        "end": 54
                                    }
                                ],
                                "flags": 16,
                                "start": 47,
                                "end": 54
                            },
                            "flags": 16,
                            "start": 45,
                            "end": 56
                        }
                    ],
                    "flags": 16,
                    "start": 45,
                    "end": 56
                },
                "flags": 16,
                "start": 43,
                "end": 58
            },
            "flags": 81,
            "start": 28,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "for (let x;;) { { var x; } }\n\nfor (var x;;) { { let x; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 21, end: 23

```

