# Kataw parser test case

## Input

`````js
class A6<T = string> {}
class A7<T: ?string = string> {}
class A8<S, T: ?string = string> {}
class A9<S = number, T: ?string = string> {}
(class A10<T = string> {});
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A6",
                "rawText": "A6",
                "flags": 96,
                "start": 5,
                "end": 8
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "type": null,
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 12,
                            "end": 19
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 19
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 20
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 20,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 23,
                "end": 29
            },
            "name": {
                "kind": 134299649,
                "text": "A7",
                "rawText": "A7",
                "flags": 96,
                "start": 29,
                "end": 32
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 33,
                            "end": 34
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 37
                                },
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 43
                                },
                                "flags": 0,
                                "start": 35,
                                "end": 43
                            },
                            "flags": 0,
                            "start": 34,
                            "end": 43
                        },
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 45,
                            "end": 52
                        },
                        "flags": 0,
                        "start": 33,
                        "end": 52
                    }
                ],
                "flags": 0,
                "start": 32,
                "end": 53
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 55,
                    "end": 55
                },
                "flags": 53,
                "start": 32,
                "end": 56
            },
            "flags": 16,
            "start": 23,
            "end": 56
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 56,
                "end": 62
            },
            "name": {
                "kind": 134299649,
                "text": "A8",
                "rawText": "A8",
                "flags": 96,
                "start": 62,
                "end": 65
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "S",
                            "rawText": "S",
                            "flags": 96,
                            "start": 66,
                            "end": 67
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 66,
                        "end": 67
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 68,
                            "end": 70
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 71,
                                    "end": 73
                                },
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 73,
                                    "end": 79
                                },
                                "flags": 0,
                                "start": 71,
                                "end": 79
                            },
                            "flags": 0,
                            "start": 70,
                            "end": 79
                        },
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 81,
                            "end": 88
                        },
                        "flags": 0,
                        "start": 68,
                        "end": 88
                    }
                ],
                "flags": 0,
                "start": 65,
                "end": 89
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 91,
                    "end": 91
                },
                "flags": 89,
                "start": 32,
                "end": 92
            },
            "flags": 16,
            "start": 56,
            "end": 92
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 92,
                "end": 98
            },
            "name": {
                "kind": 134299649,
                "text": "A9",
                "rawText": "A9",
                "flags": 96,
                "start": 98,
                "end": 101
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "S",
                            "rawText": "S",
                            "flags": 96,
                            "start": 102,
                            "end": 103
                        },
                        "type": null,
                        "defaultType": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 105,
                            "end": 112
                        },
                        "flags": 0,
                        "start": 102,
                        "end": 112
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 113,
                            "end": 115
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 116,
                                    "end": 118
                                },
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 118,
                                    "end": 124
                                },
                                "flags": 0,
                                "start": 116,
                                "end": 124
                            },
                            "flags": 0,
                            "start": 115,
                            "end": 124
                        },
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 126,
                            "end": 133
                        },
                        "flags": 0,
                        "start": 113,
                        "end": 133
                    }
                ],
                "flags": 0,
                "start": 101,
                "end": 134
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 136,
                    "end": 136
                },
                "flags": 134,
                "start": 32,
                "end": 137
            },
            "flags": 16,
            "start": 92,
            "end": 137
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 139,
                        "end": 144
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A10",
                        "rawText": "A10",
                        "flags": 96,
                        "start": 144,
                        "end": 148
                    },
                    "typeParameters": {
                        "kind": 265,
                        "typeParameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 149,
                                    "end": 150
                                },
                                "type": null,
                                "defaultType": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 152,
                                    "end": 159
                                },
                                "flags": 0,
                                "start": 149,
                                "end": 159
                            }
                        ],
                        "flags": 0,
                        "start": 148,
                        "end": 160
                    },
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
                            "elements": [],
                            "flags": 32,
                            "start": 162,
                            "end": 162
                        },
                        "flags": 160,
                        "start": 32,
                        "end": 163
                    },
                    "flags": 32,
                    "start": 139,
                    "end": 163
                },
                "flags": 32,
                "start": 137,
                "end": 164
            },
            "flags": 16,
            "start": 137,
            "end": 165
        }
    ],
    "isModule": false,
    "source": "class A6<T = string> {}\nclass A7<T: ?string = string> {}\nclass A8<S, T: ?string = string> {}\nclass A9<S = number, T: ?string = string> {}\n(class A10<T = string> {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 165
}
```

### Printed

```javascript

class A6 {}
class A7 {}
class A8 {}
class A9 {}
(class A10 {});
```

### Diagnostics

```javascript
✔ No errors
```

