# Kataw parser test case

## Input

`````js
type O1 = {...{p:T}|{q:U}};

type UnsealedInUnion = Union1 | Union2 | typeof y;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "O1",
                "rawText": "O1",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 11,
                            "end": 14
                        },
                        "type": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "value": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 18
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 15,
                                            "end": 18
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 14,
                                    "end": 19
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "q",
                                                "rawText": "q",
                                                "flags": 96,
                                                "start": 21,
                                                "end": 22
                                            },
                                            "value": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 24
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 23,
                                                "end": 24
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 24
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                }
                            ],
                            "flags": 0,
                            "start": 19,
                            "end": 25
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 11,
                        "end": 25
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 9,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 27,
                "end": 49
            },
            "name": {
                "kind": 134299649,
                "text": "UnsealedInUnion",
                "rawText": "UnsealedInUnion",
                "flags": 96,
                "start": 33,
                "end": 49
            },
            "typeParameters": null,
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Union1",
                            "rawText": "Union1",
                            "flags": 96,
                            "start": 51,
                            "end": 58
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 51,
                        "end": 58
                    },
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Union2",
                            "rawText": "Union2",
                            "flags": 96,
                            "start": 60,
                            "end": 67
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 60,
                        "end": 67
                    },
                    {
                        "kind": 134299891,
                        "typeOfKeyword": {
                            "kind": 138477613,
                            "flags": 64,
                            "start": 69,
                            "end": 76
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 76,
                                "end": 78
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 76,
                            "end": 78
                        },
                        "flags": 0,
                        "start": 69,
                        "end": 78
                    }
                ],
                "flags": 0,
                "start": 58,
                "end": 78
            },
            "flags": 16,
            "start": 27,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "type O1 = {...{p:T}|{q:U}};\n\ntype UnsealedInUnion = Union1 | Union2 | typeof y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```

