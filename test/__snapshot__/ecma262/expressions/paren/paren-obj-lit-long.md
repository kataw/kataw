# Kataw parser test case

## Input

`````js
({...(obj)} = foo),({...obj} = foo),({...obj.x} = foo),({...{}.x} = foo),({...[].x} = foo)
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
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 5
                                            },
                                            "argument": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 9
                                                },
                                                "flags": 5,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 10
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 10
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 11
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 13
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 17
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 17
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 34,
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
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 24
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 27
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 20,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 34
                        },
                        "flags": 19,
                        "transformFlags": 0,
                        "start": 34,
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
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 41
                                            },
                                            "argument": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 44
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 41,
                                                "end": 46
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 46
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 46
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 37,
                                "end": 47
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 49
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 53
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 37,
                            "end": 53
                        },
                        "flags": 36,
                        "transformFlags": 0,
                        "start": 34,
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
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 57,
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
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 61
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 60,
                                                    "end": 62
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 63,
                                                    "end": 64
                                                },
                                                "flags": 48,
                                                "transformFlags": 2,
                                                "start": 60,
                                                "end": 64
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 64
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 56,
                                "end": 65
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 67
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 71
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 56,
                            "end": 71
                        },
                        "flags": 55,
                        "transformFlags": 0,
                        "start": 34,
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
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 75,
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
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 79,
                                                        "end": 79
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 8,
                                                    "start": 78,
                                                    "end": 80
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 81,
                                                    "end": 82
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 78,
                                                "end": 82
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 82
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 82
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 74,
                                "end": 83
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 85
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 89
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 74,
                            "end": 89
                        },
                        "flags": 73,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 90
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 90
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "({...(obj)} = foo),({...obj} = foo),({...obj.x} = foo),({...{}.x} = foo),({...[].x} = foo)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
({ ...(obj) } = foo),
({ ...obj } = foo),
({ ...obj.x } = foo),
({ ...{}.x } = foo),
({ ...[].x } = foo);
```

### Diagnostics

```javascript
✔ No errors
```

