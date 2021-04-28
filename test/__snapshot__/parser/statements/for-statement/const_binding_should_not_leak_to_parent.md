# Kataw parser test case

## Input

`````js
for (const { x, } = { x: 23 }; a < 1; ) {}; for (const { x, } = { x: 23 }; a < 1; ) {};
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 14
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": true,
                                "flags": 256,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "23",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 256,
                                        "start": 21,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 21,
                                "end": 27
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 10,
                        "end": 29
                    }
                ],
                "flags": 160,
                "start": 10,
                "end": 29
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 768,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 34,
                    "end": 36
                },
                "flags": 256,
                "start": 30,
                "end": 36
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 41,
                    "end": 41
                },
                "flags": 128,
                "start": 39,
                "end": 42
            },
            "flags": 128,
            "start": 0,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 42,
            "end": 43
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 43,
                "end": 47
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 56,
                                        "end": 58
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": true,
                                "flags": 256,
                                "start": 56,
                                "end": 59
                            },
                            "flags": 256,
                            "start": 54,
                            "end": 61
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "23",
                                            "flags": 768,
                                            "start": 68,
                                            "end": 71
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 65,
                                            "end": 67
                                        },
                                        "flags": 256,
                                        "start": 65,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 65,
                                "end": 71
                            },
                            "flags": 256,
                            "start": 63,
                            "end": 73
                        },
                        "flags": 128,
                        "start": 54,
                        "end": 73
                    }
                ],
                "flags": 160,
                "start": 54,
                "end": 73
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 74,
                    "end": 76
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 768,
                    "start": 76,
                    "end": 78
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 78,
                    "end": 80
                },
                "flags": 256,
                "start": 74,
                "end": 80
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 85,
                    "end": 85
                },
                "flags": 128,
                "start": 83,
                "end": 86
            },
            "flags": 128,
            "start": 43,
            "end": 86
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 86,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "for (const { x, } = { x: 23 }; a < 1; ) {}; for (const { x, } = { x: 23 }; a < 1; ) {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 87
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

