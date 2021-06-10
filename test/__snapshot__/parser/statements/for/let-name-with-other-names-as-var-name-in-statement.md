# Kataw parser test case

## Input

`````js
for (let a, b, x, d;;) { var foo; var bar; { var doo, x, ee; } }

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
                            "text": "a",
                            "rawText": "a",
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
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 13
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 14,
                        "end": 16
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 19
            },
            "condition": null,
            "incrementor": null,
            "statement": {
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
                                "start": 24,
                                "end": 28
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 32
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 28,
                                        "end": 32
                                    }
                                ],
                                "flags": 16,
                                "start": 28,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 33
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 33,
                                "end": 37
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 37,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 37,
                                        "end": 41
                                    }
                                ],
                                "flags": 16,
                                "start": 37,
                                "end": 41
                            },
                            "flags": 16,
                            "start": 33,
                            "end": 42
                        },
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
                                            "start": 44,
                                            "end": 48
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "doo",
                                                        "rawText": "doo",
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 52
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 48,
                                                    "end": 52
                                                },
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 53,
                                                        "end": 55
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "ee",
                                                        "rawText": "ee",
                                                        "flags": 96,
                                                        "start": 56,
                                                        "end": 59
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 56,
                                                    "end": 59
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 48,
                                            "end": 59
                                        },
                                        "flags": 16,
                                        "start": 44,
                                        "end": 60
                                    }
                                ],
                                "flags": 16,
                                "start": 44,
                                "end": 60
                            },
                            "flags": 16,
                            "start": 42,
                            "end": 62
                        }
                    ],
                    "flags": 16,
                    "start": 24,
                    "end": 62
                },
                "flags": 16,
                "start": 22,
                "end": 64
            },
            "flags": 80,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "for (let a, b, x, d;;) { var foo; var bar; { var doo, x, ee; } }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 53, end: 55

```

