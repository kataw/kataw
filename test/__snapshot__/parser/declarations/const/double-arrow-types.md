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
                "flags": 0,
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
                            "flags": 96,
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
                                            "flags": 96,
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
                                            "flags": 96,
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
                        "flags": 16,
                        "start": 5,
                        "end": 27
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 27
            },
            "flags": 33554448,
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
                        "flags": 64,
                        "start": 32,
                        "end": 37
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 37,
                        "end": 37
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 37
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 37,
                    "end": 39
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
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
                                "flags": 96,
                                "start": 41,
                                "end": 44
                            },
                            {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 96,
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
                        "flags": 96,
                        "start": 53,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 39,
                    "end": 56
                },
                "flags": 32,
                "start": 32,
                "end": 56
            },
            "flags": 16,
            "start": 32,
            "end": 57
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
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
                            "flags": 96,
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
                                            "flags": 96,
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
                                            "flags": 96,
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
                        "flags": 16,
                        "start": 63,
                        "end": 86
                    }
                ],
                "flags": 16777232,
                "start": 63,
                "end": 87
            },
            "flags": 33554448,
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
                        "flags": 64,
                        "start": 92,
                        "end": 97
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 97,
                        "end": 97
                    },
                    "flags": 32,
                    "start": 92,
                    "end": 97
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 97,
                    "end": 99
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
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
                                "flags": 96,
                                "start": 101,
                                "end": 104
                            },
                            {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 96,
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
                        "flags": 96,
                        "start": 114,
                        "end": 117
                    },
                    "flags": 32,
                    "start": 99,
                    "end": 117
                },
                "flags": 32,
                "start": 92,
                "end": 117
            },
            "flags": 16,
            "start": 92,
            "end": 118
        }
    ],
    "isModule": false,
    "source": "const fn: ( Object, ?Object ) => void = ( o1, o2 ) => o1;\nconst fn2: ( Object, ?Object, ) => void = ( o1, o2, ) => o1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 118
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 27, end: 29
✖ ',' expected - start: 27, end: 29
✖ Expected a `;` - start: 27, end: 29
✖ Declaration or statement expected - start: 27, end: 29
✖ Declaration or statement expected - start: 29, end: 32
✖ Expression expected - start: 37, end: 39
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 37, end: 39
✖ Missing initializer in const declaration - start: 86, end: 87
✖ Expected a `;` - start: 87, end: 89
✖ Declaration or statement expected - start: 87, end: 89
✖ Declaration or statement expected - start: 89, end: 92
✖ Expression expected - start: 97, end: 99
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 97, end: 99

```

