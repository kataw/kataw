# Kataw parser test case

## Input

`````js
result = { __proto__: x, __proto__: y } = value;

result = ({ __proto__: x, __proto__: y } = value);
`````

## Output

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 6,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 20
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "flags": 36,
                                    "start": 10,
                                    "end": 23
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "flags": 36,
                                    "start": 24,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "flags": 20,
                            "start": 10,
                            "end": 37
                        },
                        "flags": 52,
                        "start": 8,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 39,
                        "end": 41
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "start": 41,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 47
                },
                "flags": 0,
                "start": 0,
                "end": 47
            },
            "flags": 16,
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
                    "flags": 97,
                    "start": 48,
                    "end": 56
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 56,
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
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 61,
                                            "end": 71
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "flags": 36,
                                        "start": 61,
                                        "end": 74
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 75,
                                            "end": 85
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "flags": 36,
                                        "start": 75,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 20,
                                "start": 61,
                                "end": 88
                            },
                            "flags": 52,
                            "start": 60,
                            "end": 90
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 90,
                            "end": 92
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "start": 92,
                            "end": 98
                        },
                        "flags": 32,
                        "start": 60,
                        "end": 98
                    },
                    "flags": 58,
                    "start": 34,
                    "end": 99
                },
                "flags": 0,
                "start": 48,
                "end": 99
            },
            "flags": 16,
            "start": 48,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "result = { __proto__: x, __proto__: y } = value;\n\nresult = ({ __proto__: x, __proto__: y } = value);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript

result = {__proto__: x, __proto__: y} = value;
result = ({__proto__: x, __proto__: y} = value);

```

### Diagnostics

```javascript
✔ No errors
```

