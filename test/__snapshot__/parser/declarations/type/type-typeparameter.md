# Kataw parser test case

## Input

`````js
type A3<T: ?string = string> = T;

type A4<S, T: ?string = string> = T;

type A5<S = number, T: ?string = string> = T;

type A = Foo<
  | {type: "A"}
  | {type: "B"}
>;

type B = Foo<
  & {type: "A"}
  & {type: "B"}
>;
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
                "text": "A3",
                "rawText": "A3",
                "flags": 96,
                "start": 4,
                "end": 7
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
                            "start": 8,
                            "end": 9
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 12
                                },
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 18
                                },
                                "flags": 0,
                                "start": 10,
                                "end": 18
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 18
                        },
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 20,
                            "end": 27
                        },
                        "flags": 0,
                        "start": 8,
                        "end": 27
                    }
                ],
                "flags": 0,
                "start": 7,
                "end": 28
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 96,
                    "start": 30,
                    "end": 32
                },
                "typeParameters": null,
                "flags": 0,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 33,
                "end": 42
            },
            "name": {
                "kind": 134299649,
                "text": "A4",
                "rawText": "A4",
                "flags": 96,
                "start": 39,
                "end": 42
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
                            "start": 43,
                            "end": 44
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 43,
                        "end": 44
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 45,
                            "end": 47
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 48,
                                    "end": 50
                                },
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 50,
                                    "end": 56
                                },
                                "flags": 0,
                                "start": 48,
                                "end": 56
                            },
                            "flags": 0,
                            "start": 47,
                            "end": 56
                        },
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 58,
                            "end": 65
                        },
                        "flags": 0,
                        "start": 45,
                        "end": 65
                    }
                ],
                "flags": 0,
                "start": 42,
                "end": 66
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 96,
                    "start": 68,
                    "end": 70
                },
                "typeParameters": null,
                "flags": 0,
                "start": 68,
                "end": 70
            },
            "flags": 16,
            "start": 33,
            "end": 71
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 71,
                "end": 80
            },
            "name": {
                "kind": 134299649,
                "text": "A5",
                "rawText": "A5",
                "flags": 96,
                "start": 77,
                "end": 80
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
                            "start": 81,
                            "end": 82
                        },
                        "type": null,
                        "defaultType": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 84,
                            "end": 91
                        },
                        "flags": 0,
                        "start": 81,
                        "end": 91
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 92,
                            "end": 94
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 95,
                                    "end": 97
                                },
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 97,
                                    "end": 103
                                },
                                "flags": 0,
                                "start": 95,
                                "end": 103
                            },
                            "flags": 0,
                            "start": 94,
                            "end": 103
                        },
                        "defaultType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 105,
                            "end": 112
                        },
                        "flags": 0,
                        "start": 92,
                        "end": 112
                    }
                ],
                "flags": 0,
                "start": 80,
                "end": 113
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 96,
                    "start": 115,
                    "end": 117
                },
                "typeParameters": null,
                "flags": 0,
                "start": 115,
                "end": 117
            },
            "flags": 16,
            "start": 71,
            "end": 118
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 118,
                "end": 126
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 124,
                "end": 126
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 128,
                    "end": 132
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
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
                                                    "text": "type",
                                                    "rawText": "type",
                                                    "flags": 96,
                                                    "start": 139,
                                                    "end": 143
                                                },
                                                "value": {
                                                    "kind": 134217967,
                                                    "value": "A",
                                                    "flags": 0,
                                                    "start": 144,
                                                    "end": 148
                                                },
                                                "optionalToken": null,
                                                "staticToken": null,
                                                "flags": 0,
                                                "start": 139,
                                                "end": 148
                                            }
                                        ],
                                        "indexers": [],
                                        "callProperties": [],
                                        "internalSlots": [],
                                        "flags": 0,
                                        "start": 137,
                                        "end": 149
                                    },
                                    {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "type",
                                                    "rawText": "type",
                                                    "flags": 96,
                                                    "start": 155,
                                                    "end": 159
                                                },
                                                "value": {
                                                    "kind": 134217967,
                                                    "value": "B",
                                                    "flags": 0,
                                                    "start": 160,
                                                    "end": 164
                                                },
                                                "optionalToken": null,
                                                "staticToken": null,
                                                "flags": 0,
                                                "start": 155,
                                                "end": 164
                                            }
                                        ],
                                        "indexers": [],
                                        "callProperties": [],
                                        "internalSlots": [],
                                        "flags": 0,
                                        "start": 153,
                                        "end": 165
                                    }
                                ],
                                "flags": 0,
                                "start": 149,
                                "end": 165
                            },
                            "flags": 0,
                            "start": 133,
                            "end": 165
                        }
                    ],
                    "flags": 0,
                    "start": 132,
                    "end": 167
                },
                "flags": 0,
                "start": 128,
                "end": 167
            },
            "flags": 16,
            "start": 118,
            "end": 168
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 168,
                "end": 176
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 174,
                "end": 176
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 178,
                    "end": 182
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "type",
                                                    "rawText": "type",
                                                    "flags": 96,
                                                    "start": 189,
                                                    "end": 193
                                                },
                                                "value": {
                                                    "kind": 134217967,
                                                    "value": "A",
                                                    "flags": 0,
                                                    "start": 194,
                                                    "end": 198
                                                },
                                                "optionalToken": null,
                                                "staticToken": null,
                                                "flags": 0,
                                                "start": 189,
                                                "end": 198
                                            }
                                        ],
                                        "indexers": [],
                                        "callProperties": [],
                                        "internalSlots": [],
                                        "flags": 0,
                                        "start": 187,
                                        "end": 199
                                    },
                                    {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "type",
                                                    "rawText": "type",
                                                    "flags": 96,
                                                    "start": 205,
                                                    "end": 209
                                                },
                                                "value": {
                                                    "kind": 134217967,
                                                    "value": "B",
                                                    "flags": 0,
                                                    "start": 210,
                                                    "end": 214
                                                },
                                                "optionalToken": null,
                                                "staticToken": null,
                                                "flags": 0,
                                                "start": 205,
                                                "end": 214
                                            }
                                        ],
                                        "indexers": [],
                                        "callProperties": [],
                                        "internalSlots": [],
                                        "flags": 0,
                                        "start": 203,
                                        "end": 215
                                    }
                                ],
                                "flags": 0,
                                "start": 199,
                                "end": 215
                            },
                            "flags": 0,
                            "start": 183,
                            "end": 215
                        }
                    ],
                    "flags": 0,
                    "start": 182,
                    "end": 217
                },
                "flags": 0,
                "start": 178,
                "end": 217
            },
            "flags": 16,
            "start": 168,
            "end": 218
        }
    ],
    "isModule": false,
    "source": "type A3<T: ?string = string> = T;\n\ntype A4<S, T: ?string = string> = T;\n\ntype A5<S = number, T: ?string = string> = T;\n\ntype A = Foo<\n  | {type: \"A\"}\n  | {type: \"B\"}\n>;\n\ntype B = Foo<\n  & {type: \"A\"}\n  & {type: \"B\"}\n>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 218
}
```

### Printed

```javascript






```

### Diagnostics

```javascript
✔ No errors
```

