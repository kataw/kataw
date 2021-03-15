# Kataw parser test case

## Input

`````js
type x = [];
type x = [];
type x = [];
type x = t extends a[] ? b : c;
type x = t extends a ? b : c;
type x = t extends [] ? b : c;
type x = t extends [] ? [] : c;
declare type x = y; declare type x = y;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type x = [];\ntype x = [];\ntype x = [];\ntype x = t extends a[] ? b : c;\ntype x = t extends a ? b : c;\ntype x = t extends [] ? b : c;\ntype x = t extends [] ? [] : c;\ndeclare type x = y; declare type x = y;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 12
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 21,
                "end": 24
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 12,
            "end": 25
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 30,
                "end": 32
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 34,
                "end": 37
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 25,
            "end": 38
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 43,
                "end": 45
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "t",
                        "rawText": "t",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 47,
                    "end": 57
                },
                "extendsType": {
                    "kind": 8199,
                    "elementType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 59
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 57,
                        "end": 60
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 57,
                    "end": 63
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 63,
                        "end": 65
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 63,
                    "end": 67
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 69
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 67,
                    "end": 70
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 47,
                "end": 69
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 38,
            "end": 70
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 75,
                "end": 77
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "t",
                        "rawText": "t",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 81
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 79,
                    "end": 89
                },
                "extendsType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 89,
                        "end": 91
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 89,
                    "end": 93
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 95
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 93,
                    "end": 97
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 99
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 97,
                    "end": 100
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 79,
                "end": 99
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 70,
            "end": 100
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 105,
                "end": 107
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "t",
                        "rawText": "t",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 109,
                        "end": 111
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 109,
                    "end": 119
                },
                "extendsType": {
                    "kind": 134226144,
                    "elementTypes": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 119,
                    "end": 122
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 126
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 124,
                    "end": 128
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 128,
                        "end": 130
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 128,
                    "end": 131
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 109,
                "end": 130
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 100,
            "end": 131
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 136,
                "end": 138
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "t",
                        "rawText": "t",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 140,
                        "end": 142
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 140,
                    "end": 150
                },
                "extendsType": {
                    "kind": 134226144,
                    "elementTypes": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 150,
                    "end": 153
                },
                "trueType": {
                    "kind": 134226144,
                    "elementTypes": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 155,
                    "end": 158
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 160,
                        "end": 162
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 160,
                    "end": 163
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 140,
                "end": 162
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 131,
            "end": 163
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 176,
                "end": 178
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 180,
                    "end": 182
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 180,
                "end": 183
            },
            "typeParameters": null,
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 171,
            "end": 183
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 196,
                "end": 198
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 202
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 200,
                "end": 203
            },
            "typeParameters": null,
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 191,
            "end": 203
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 203
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

