# Kataw parser test case

## Input

`````js
const fn: ( Object, ?Object ) => void = ( o1, o2 ) => o1;
const fn2: ( Object, ?Object, ) => void = ( o1, o2, ) => o1;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 768,
                            "start": 5,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 18
                                    }
                                ],
                                "returnType": {
                                    "kind": 134217970,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "flags": 0,
                                    "start": 19,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 9,
                                "end": 27
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 27
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 5,
                        "end": 27
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477615,
                        "flags": 768,
                        "start": 32,
                        "end": 37
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 37,
                        "end": 37
                    },
                    "flags": 256,
                    "start": 32,
                    "end": 37
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 37,
                    "end": 39
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 50,
                        "end": 53
                    },
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 768,
                                "start": 41,
                                "end": 44
                            },
                            {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 768,
                                "start": 45,
                                "end": 48
                            }
                        ]
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 768,
                        "start": 53,
                        "end": 56
                    },
                    "flags": 256,
                    "start": 39,
                    "end": 56
                },
                "flags": 256,
                "start": 32,
                "end": 56
            },
            "flags": 128,
            "start": 32,
            "end": 57
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 57,
                "end": 63
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn2",
                            "rawText": "fn2",
                            "flags": 768,
                            "start": 63,
                            "end": 67
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 768,
                                            "start": 70,
                                            "end": 77
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 70,
                                        "end": 77
                                    }
                                ],
                                "returnType": {
                                    "kind": 134217970,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 768,
                                            "start": 80,
                                            "end": 86
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 80,
                                        "end": 86
                                    },
                                    "flags": 0,
                                    "start": 78,
                                    "end": 86
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 68,
                                "end": 86
                            },
                            "flags": 0,
                            "start": 67,
                            "end": 86
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 63,
                        "end": 86
                    }
                ],
                "flags": 160,
                "start": 63,
                "end": 87
            },
            "flags": 128,
            "start": 57,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477615,
                        "flags": 768,
                        "start": 92,
                        "end": 97
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 97,
                        "end": 97
                    },
                    "flags": 256,
                    "start": 92,
                    "end": 97
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 97,
                    "end": 99
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 111,
                        "end": 114
                    },
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 768,
                                "start": 101,
                                "end": 104
                            },
                            {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 768,
                                "start": 105,
                                "end": 108
                            }
                        ]
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 768,
                        "start": 114,
                        "end": 117
                    },
                    "flags": 256,
                    "start": 99,
                    "end": 117
                },
                "flags": 256,
                "start": 92,
                "end": 117
            },
            "flags": 128,
            "start": 92,
            "end": 118
        }
    ],
    "isModule": false,
    "text": "const fn: ( Object, ?Object ) => void = ( o1, o2 ) => o1;\nconst fn2: ( Object, ?Object, ) => void = ( o1, o2, ) => o1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 118
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Missing initializer in const declaration - start: 27, end: 29
@{x2716}@ ',' expected - start: 27, end: 29
@{x2716}@ Statement expected - start: 27, end: 29
@{x2716}@ Statement expected - start: 29, end: 32
@{x2716}@ Expression expected - start: 37, end: 39
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 37, end: 39
@{x2716}@ Missing initializer in const declaration - start: 86, end: 87
@{x2716}@ Statement expected - start: 87, end: 89
@{x2716}@ Statement expected - start: 89, end: 92
@{x2716}@ Expression expected - start: 97, end: 99
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 97, end: 99

```

