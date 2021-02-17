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
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 6
                },
                "type": {
                    "kind": 224,
                    "elementTypes": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 11
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 12
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 19
                },
                "type": {
                    "kind": 224,
                    "elementTypes": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 21,
                    "end": 24
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 12,
                "end": 25
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 30,
                    "end": 32
                },
                "type": {
                    "kind": 224,
                    "elementTypes": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 34,
                    "end": 37
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 25,
                "end": 38
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 43,
                    "end": 45
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 47,
                            "end": 49
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 47,
                        "end": 57
                    },
                    "extendsType": {
                        "kind": 7,
                        "elementType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 57,
                                "end": 59
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 57,
                            "end": 60
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 57,
                        "end": 63
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 63,
                            "end": 65
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 63,
                        "end": 67
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 67,
                            "end": 69
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 67,
                        "end": 70
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 47,
                    "end": 69
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 38,
                "end": 70
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 75,
                    "end": 77
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 79,
                            "end": 81
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 79,
                        "end": 89
                    },
                    "extendsType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 89,
                            "end": 91
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 89,
                        "end": 93
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 93,
                            "end": 95
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 93,
                        "end": 97
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 97,
                            "end": 99
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 97,
                        "end": 100
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 79,
                    "end": 99
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 70,
                "end": 100
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 105,
                    "end": 107
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 109,
                            "end": 111
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 109,
                        "end": 119
                    },
                    "extendsType": {
                        "kind": 224,
                        "elementTypes": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 119,
                        "end": 122
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 124,
                            "end": 126
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 124,
                        "end": 128
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 128,
                            "end": 130
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 128,
                        "end": 131
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 109,
                    "end": 130
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 100,
                "end": 131
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 136,
                    "end": 138
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 140,
                            "end": 142
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 140,
                        "end": 150
                    },
                    "extendsType": {
                        "kind": 224,
                        "elementTypes": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 150,
                        "end": 153
                    },
                    "trueType": {
                        "kind": 224,
                        "elementTypes": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 155,
                        "end": 158
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 160,
                            "end": 162
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 160,
                        "end": 163
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 140,
                    "end": 162
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 131,
                "end": 163
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 176,
                    "end": 178
                },
                "type": {
                    "kind": 236,
                    "typeName": {
                        "kind": 196711,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 180,
                        "end": 182
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 180,
                    "end": 183
                },
                "typeParameters": null,
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 171,
                "end": 183
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 196,
                    "end": 198
                },
                "type": {
                    "kind": 236,
                    "typeName": {
                        "kind": 196711,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 200,
                        "end": 202
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 200,
                    "end": 203
                },
                "typeParameters": null,
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 191,
                "end": 203
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 203
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

