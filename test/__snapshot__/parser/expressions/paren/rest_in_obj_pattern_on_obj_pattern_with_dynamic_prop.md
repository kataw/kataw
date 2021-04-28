# Kataw parser test case

## Input

`````js
({...{}[x]} = y);

(x, {...{}[y]} = z);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 11,
                        "start": 512,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 17
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
                            "flags": 768,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 24,
                                                "start": 0,
                                                "end": 27
                                            },
                                            "argument": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 256,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 30,
                                                    "end": 31
                                                },
                                                "flags": 256,
                                                "start": 27,
                                                "end": 32
                                            },
                                            "flags": 256,
                                            "start": 24,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 33
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 33,
                                "start": 512,
                                "end": 35
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 256,
                            "start": 22,
                            "end": 37
                        }
                    ],
                    "flags": 256,
                    "start": 17,
                    "end": 38
                },
                "flags": 256,
                "start": 17,
                "end": 38
            },
            "flags": 128,
            "start": 17,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "({...{}[x]} = y);\n\n(x, {...{}[y]} = z);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 33, end: 35

```

