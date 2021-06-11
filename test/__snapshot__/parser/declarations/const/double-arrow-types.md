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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
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
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 32
                                },
                                "parameters": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
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
                                            "start": 9,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "types": null,
                                        "flags": 0,
                                        "start": 9,
                                        "end": 18
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": null,
                                        "optionalToken": null,
                                        "types": {
                                            "kind": 134217970,
                                            "nullableToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 19,
                                                "end": 21
                                            },
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
                                        "flags": 0,
                                        "start": 19,
                                        "end": 27
                                    }
                                ],
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 32,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 9,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 37
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 50,
                                "end": 53
                            },
                            "typeParameters": null,
                            "parameters": [
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
                            ],
                            "asyncKeyword": null,
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
                        "flags": 16,
                        "start": 5,
                        "end": 56
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 56
            },
            "flags": 33554448,
            "start": 0,
            "end": 57
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
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
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 89,
                                    "end": 92
                                },
                                "parameters": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
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
                                            "start": 68,
                                            "end": 77
                                        },
                                        "optionalToken": null,
                                        "types": null,
                                        "flags": 0,
                                        "start": 68,
                                        "end": 77
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": null,
                                        "optionalToken": null,
                                        "types": {
                                            "kind": 134217970,
                                            "nullableToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 78,
                                                "end": 80
                                            },
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
                                        "flags": 0,
                                        "start": 78,
                                        "end": 86
                                    }
                                ],
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 92,
                                    "end": 97
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 68,
                                "end": 97
                            },
                            "flags": 0,
                            "start": 67,
                            "end": 97
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 111,
                                "end": 114
                            },
                            "typeParameters": null,
                            "parameters": [
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
                            ],
                            "asyncKeyword": null,
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
                        "flags": 16,
                        "start": 63,
                        "end": 117
                    }
                ],
                "flags": 16777232,
                "start": 63,
                "end": 117
            },
            "flags": 33554448,
            "start": 57,
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

const fn = (o1, o2) =>  o1;
const fn2 = (o1, o2) =>  o1;
```

### Diagnostics

```javascript
✔ No errors
```

