# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
[foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 119,
                                                                                            "elementList": {
                                                                                                "kind": 270,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 119,
                                                                                                        "elementList": {
                                                                                                            "kind": 270,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 119,
                                                                                                                    "elementList": {
                                                                                                                        "kind": 270,
                                                                                                                        "elements": [
                                                                                                                            {
                                                                                                                                "kind": 119,
                                                                                                                                "elementList": {
                                                                                                                                    "kind": 270,
                                                                                                                                    "elements": [
                                                                                                                                        {
                                                                                                                                            "kind": 119,
                                                                                                                                            "elementList": {
                                                                                                                                                "kind": 270,
                                                                                                                                                "elements": [
                                                                                                                                                    {
                                                                                                                                                        "kind": 119,
                                                                                                                                                        "elementList": {
                                                                                                                                                            "kind": 270,
                                                                                                                                                            "elements": [
                                                                                                                                                                {
                                                                                                                                                                    "kind": 119,
                                                                                                                                                                    "elementList": {
                                                                                                                                                                        "kind": 270,
                                                                                                                                                                        "elements": [
                                                                                                                                                                            {
                                                                                                                                                                                "kind": 119,
                                                                                                                                                                                "elementList": {
                                                                                                                                                                                    "kind": 270,
                                                                                                                                                                                    "elements": [
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 134299649,
                                                                                                                                                                                            "text": "x",
                                                                                                                                                                                            "rawText": "x",
                                                                                                                                                                                            "flags": 96,
                                                                                                                                                                                            "start": 19,
                                                                                                                                                                                            "end": 20
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 134299649,
                                                                                                                                                                                            "text": "y",
                                                                                                                                                                                            "rawText": "y",
                                                                                                                                                                                            "flags": 96,
                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                            "end": 22
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 134299649,
                                                                                                                                                                                            "text": "z",
                                                                                                                                                                                            "rawText": "z",
                                                                                                                                                                                            "flags": 96,
                                                                                                                                                                                            "start": 23,
                                                                                                                                                                                            "end": 24
                                                                                                                                                                                        }
                                                                                                                                                                                    ],
                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                    "start": 19,
                                                                                                                                                                                    "end": 24
                                                                                                                                                                                },
                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                "start": 18,
                                                                                                                                                                                "end": 25
                                                                                                                                                                            }
                                                                                                                                                                        ],
                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                        "flags": 32,
                                                                                                                                                                        "start": 18,
                                                                                                                                                                        "end": 25
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 32,
                                                                                                                                                                    "start": 17,
                                                                                                                                                                    "end": 26
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                            "trailingComma": false,
                                                                                                                                                            "flags": 32,
                                                                                                                                                            "start": 17,
                                                                                                                                                            "end": 26
                                                                                                                                                        },
                                                                                                                                                        "flags": 32,
                                                                                                                                                        "start": 16,
                                                                                                                                                        "end": 27
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "trailingComma": false,
                                                                                                                                                "flags": 32,
                                                                                                                                                "start": 16,
                                                                                                                                                "end": 27
                                                                                                                                            },
                                                                                                                                            "flags": 32,
                                                                                                                                            "start": 15,
                                                                                                                                            "end": 28
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                    "trailingComma": false,
                                                                                                                                    "flags": 32,
                                                                                                                                    "start": 15,
                                                                                                                                    "end": 28
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "start": 14,
                                                                                                                                "end": 29
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 14,
                                                                                                                        "end": 29
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 13,
                                                                                                                    "end": 30
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 13,
                                                                                                            "end": 30
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 12,
                                                                                                        "end": 31
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 12,
                                                                                                "end": 31
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 11,
                                                                                            "end": 32
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 11,
                                                                                    "end": 32
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 10,
                                                                                "end": 33
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 10,
                                                                        "end": 33
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 9,
                                                                    "end": 34
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 9,
                                                            "end": 34
                                                        },
                                                        "flags": 32,
                                                        "start": 8,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 8,
                                                "end": 35
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 7,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 37
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 42
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 47
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 47,
                    "end": 49
                },
                "right": {
                    "kind": 134299649,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 96,
                    "start": 49,
                    "end": 53
                },
                "flags": 32,
                "start": 0,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "[foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

[foo, [[[[[[[[[[[[[x, y, z,],],],],],],],],],],],],], bar = B,] = arr;

```

### Diagnostics

```javascript
✔ No errors
```

