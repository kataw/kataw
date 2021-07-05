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
                "end": 4
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
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
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
                                        "flags": 2097216,
                                        "start": 12,
                                        "end": 18
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 18
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 18,
                                "end": 20
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 20,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 27
                },
                "flags": 2097152,
                "start": 7,
                "end": 28
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 28,
                "end": 30
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 30,
                        "end": 32
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 30,
                    "end": 32
                },
                "flags": 2097152,
                "start": 30,
                "end": 32
            },
            "flags": 64,
            "start": 0,
            "end": 33
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 33,
                "end": 39
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
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
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
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
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
                                        "flags": 2097216,
                                        "start": 50,
                                        "end": 56
                                    },
                                    "flags": 2097152,
                                    "start": 48,
                                    "end": 56
                                },
                                "flags": 2097152,
                                "start": 48,
                                "end": 56
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 56,
                                "end": 58
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 58,
                                    "end": 65
                                },
                                "flags": 2097152,
                                "start": 58,
                                "end": 65
                            },
                            "flags": 2097152,
                            "start": 45,
                            "end": 65
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 43,
                    "end": 65
                },
                "flags": 2097152,
                "start": 42,
                "end": 66
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 66,
                "end": 68
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 68,
                        "end": 70
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 68,
                    "end": 70
                },
                "flags": 2097152,
                "start": 68,
                "end": 70
            },
            "flags": 65,
            "start": 33,
            "end": 71
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 71,
                "end": 77
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
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
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
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 82,
                                "end": 84
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 84,
                                    "end": 91
                                },
                                "flags": 2097152,
                                "start": 84,
                                "end": 91
                            },
                            "flags": 2097152,
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
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
                                        "flags": 2097216,
                                        "start": 97,
                                        "end": 103
                                    },
                                    "flags": 2097152,
                                    "start": 95,
                                    "end": 103
                                },
                                "flags": 2097152,
                                "start": 95,
                                "end": 103
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 103,
                                "end": 105
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 105,
                                    "end": 112
                                },
                                "flags": 2097152,
                                "start": 105,
                                "end": 112
                            },
                            "flags": 2097152,
                            "start": 92,
                            "end": 112
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 81,
                    "end": 112
                },
                "flags": 2097152,
                "start": 80,
                "end": 113
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 113,
                "end": 115
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 115,
                        "end": 117
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 115,
                    "end": 117
                },
                "flags": 2097152,
                "start": 115,
                "end": 117
            },
            "flags": 65,
            "start": 71,
            "end": 118
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 118,
                "end": 124
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 126,
                "end": 128
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "start": 128,
                        "end": 132
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": {
                                        "kind": 134251592,
                                        "flags": 65,
                                        "start": 133,
                                        "end": 137
                                    },
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 134234353,
                                                "properties": [
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "type",
                                                            "rawText": "type",
                                                            "flags": 96,
                                                            "start": 139,
                                                            "end": 143
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134217967,
                                                                "text": "A",
                                                                "rawText": "\"A\"",
                                                                "flags": 2097216,
                                                                "start": 144,
                                                                "end": 148
                                                            },
                                                            "flags": 2097152,
                                                            "start": 144,
                                                            "end": 148
                                                        },
                                                        "flags": 2097152,
                                                        "start": 139,
                                                        "end": 148
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 137,
                                                "end": 149
                                            },
                                            {
                                                "kind": 134234353,
                                                "properties": [
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "type",
                                                            "rawText": "type",
                                                            "flags": 96,
                                                            "start": 155,
                                                            "end": 159
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134217967,
                                                                "text": "B",
                                                                "rawText": "\"B\"",
                                                                "flags": 2097216,
                                                                "start": 160,
                                                                "end": 164
                                                            },
                                                            "flags": 2097152,
                                                            "start": 160,
                                                            "end": 164
                                                        },
                                                        "flags": 2097152,
                                                        "start": 155,
                                                        "end": 164
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 153,
                                                "end": 165
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 149,
                                        "end": 165
                                    },
                                    "flags": 2097152,
                                    "start": 133,
                                    "end": 165
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 133,
                            "end": 165
                        },
                        "flags": 2097152,
                        "start": 132,
                        "end": 167
                    },
                    "flags": 2097152,
                    "start": 128,
                    "end": 167
                },
                "flags": 2097152,
                "start": 128,
                "end": 167
            },
            "flags": 65,
            "start": 118,
            "end": 168
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 168,
                "end": 174
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 176,
                "end": 178
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "start": 178,
                        "end": 182
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": {
                                        "kind": 134252103,
                                        "flags": 65,
                                        "start": 183,
                                        "end": 187
                                    },
                                    "type": {
                                        "kind": 138,
                                        "types": [
                                            {
                                                "kind": 134234353,
                                                "properties": [
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "type",
                                                            "rawText": "type",
                                                            "flags": 96,
                                                            "start": 189,
                                                            "end": 193
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134217967,
                                                                "text": "A",
                                                                "rawText": "\"A\"",
                                                                "flags": 2097216,
                                                                "start": 194,
                                                                "end": 198
                                                            },
                                                            "flags": 2097152,
                                                            "start": 194,
                                                            "end": 198
                                                        },
                                                        "flags": 2097152,
                                                        "start": 189,
                                                        "end": 198
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 187,
                                                "end": 199
                                            },
                                            {
                                                "kind": 134234353,
                                                "properties": [
                                                    {
                                                        "kind": 193,
                                                        "protoKeyword": null,
                                                        "staticKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "type",
                                                            "rawText": "type",
                                                            "flags": 96,
                                                            "start": 205,
                                                            "end": 209
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134217967,
                                                                "text": "B",
                                                                "rawText": "\"B\"",
                                                                "flags": 2097216,
                                                                "start": 210,
                                                                "end": 214
                                                            },
                                                            "flags": 2097152,
                                                            "start": 210,
                                                            "end": 214
                                                        },
                                                        "flags": 2097152,
                                                        "start": 205,
                                                        "end": 214
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 203,
                                                "end": 215
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 199,
                                        "end": 215
                                    },
                                    "flags": 2097152,
                                    "start": 183,
                                    "end": 215
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 183,
                            "end": 215
                        },
                        "flags": 2097152,
                        "start": 182,
                        "end": 217
                    },
                    "flags": 2097152,
                    "start": 178,
                    "end": 217
                },
                "flags": 2097152,
                "start": 178,
                "end": 217
            },
            "flags": 65,
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

type A3<T: ? string = string > = T
type A4<S,
T: ? string = string > = T
type A5<S= number ,
T: ? string = string > = T
type A = Foo<| { type: "\"A\"" } | { type: "\"B\"" }>
type B = Foo<& { type: "\"A\"" } & { type: "\"B\"" }>
```

### Diagnostics

```javascript
✔ No errors
```

