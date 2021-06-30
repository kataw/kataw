# Kataw parser test case

## Input

`````js
 ({...a ? b : c});
 (x, {...a ? b : c});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 6
                                },
                                "argument": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 15
                                },
                                "flags": 1073741856,
                                "start": 3,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 15
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "argument": {
                                            "kind": 197,
                                            "shortCircuit": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "questionToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "consequent": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "alternate": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 37
                                        },
                                        "flags": 1073741856,
                                        "start": 25,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 25,
                                "end": 37
                            },
                            "flags": 48,
                            "start": 23,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 39
                },
                "flags": 32,
                "start": 18,
                "end": 39
            },
            "flags": 16,
            "start": 18,
            "end": 40
        }
    ],
    "isModule": false,
    "source": " ({...a ? b : c});\n (x, {...a ? b : c});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

({ ...a ? b : c });
(x, { ...a ? b : c });

```

### Diagnostics

```javascript
✔ No errors
```

