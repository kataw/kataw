# Kataw parser test case

## Input

`````js
result = { __proto__: x, __proto__: y } = value;

result = ({ __proto__: x, __proto__: y } = value);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 6,
                    "start": 512,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 23
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 768,
                                        "start": 24,
                                        "end": 34
                                    },
                                    "flags": 256,
                                    "start": 24,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 10,
                            "end": 37
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 39,
                        "start": 512,
                        "end": 41
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 768,
                        "start": 41,
                        "end": 47
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 47
                },
                "flags": 256,
                "start": 0,
                "end": 47
            },
            "flags": 128,
            "start": 0,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 48,
                    "end": 56
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 56,
                    "start": 512,
                    "end": 58
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 768,
                                            "start": 61,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 61,
                                        "end": 74
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 768,
                                            "start": 75,
                                            "end": 85
                                        },
                                        "flags": 256,
                                        "start": 75,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 61,
                                "end": 88
                            },
                            "flags": 256,
                            "start": 60,
                            "end": 90
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 90,
                            "start": 512,
                            "end": 92
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 768,
                            "start": 92,
                            "end": 98
                        },
                        "flags": 256,
                        "start": 60,
                        "end": 98
                    },
                    "flags": 256,
                    "start": 58,
                    "end": 99
                },
                "flags": 256,
                "start": 48,
                "end": 99
            },
            "flags": 128,
            "start": 48,
            "end": 100
        }
    ],
    "isModule": false,
    "text": "result = { __proto__: x, __proto__: y } = value;\n\nresult = ({ __proto__: x, __proto__: y } = value);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
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

