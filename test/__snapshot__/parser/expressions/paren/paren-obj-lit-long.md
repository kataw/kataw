# Kataw parser test case

## Input

`````js
({...(obj)} = foo),({...obj} = foo),({...obj.x} = foo),({...{}.x} = foo),({...[].x} = foo)
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
                "kind": 132,
                "expressions": [
                    {
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
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 768,
                                                    "start": 6,
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 13,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 18
                    },
                    {
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
                                                "flags": 21,
                                                "start": 0,
                                                "end": 24
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 768,
                                                "start": 24,
                                                "end": 27
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
                                "start": 20,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 28,
                                "start": 512,
                                "end": 30
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 256,
                            "start": 20,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 35
                    },
                    {
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
                                                "flags": 38,
                                                "start": 0,
                                                "end": 41
                                            },
                                            "argument": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 768,
                                                    "start": 41,
                                                    "end": 44
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 41,
                                                "end": 46
                                            },
                                            "flags": 256,
                                            "start": 38,
                                            "end": 46
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 38,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 47
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 47,
                                "start": 512,
                                "end": 49
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 49,
                                "end": 53
                            },
                            "flags": 256,
                            "start": 37,
                            "end": 53
                        },
                        "flags": 256,
                        "start": 36,
                        "end": 54
                    },
                    {
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
                                                "flags": 57,
                                                "start": 0,
                                                "end": 60
                                            },
                                            "argument": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 61,
                                                        "end": 61
                                                    },
                                                    "flags": 256,
                                                    "start": 60,
                                                    "end": 62
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 63,
                                                    "end": 64
                                                },
                                                "flags": 256,
                                                "start": 60,
                                                "end": 64
                                            },
                                            "flags": 256,
                                            "start": 57,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 57,
                                    "end": 64
                                },
                                "flags": 256,
                                "start": 56,
                                "end": 65
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 65,
                                "start": 512,
                                "end": 67
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 67,
                                "end": 71
                            },
                            "flags": 256,
                            "start": 56,
                            "end": 71
                        },
                        "flags": 256,
                        "start": 55,
                        "end": 72
                    },
                    {
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
                                                "flags": 75,
                                                "start": 0,
                                                "end": 78
                                            },
                                            "argument": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 79,
                                                        "end": 79
                                                    },
                                                    "flags": 256,
                                                    "start": 78,
                                                    "end": 80
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 81,
                                                    "end": 82
                                                },
                                                "flags": 256,
                                                "start": 78,
                                                "end": 82
                                            },
                                            "flags": 256,
                                            "start": 75,
                                            "end": 82
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 75,
                                    "end": 82
                                },
                                "flags": 256,
                                "start": 74,
                                "end": 83
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 83,
                                "start": 512,
                                "end": 85
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 85,
                                "end": 89
                            },
                            "flags": 256,
                            "start": 74,
                            "end": 89
                        },
                        "flags": 256,
                        "start": 73,
                        "end": 90
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 90
            },
            "flags": 128,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "text": "({...(obj)} = foo),({...obj} = foo),({...obj.x} = foo),({...{}.x} = foo),({...[].x} = foo)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 65, end: 67
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 83, end: 85

```

