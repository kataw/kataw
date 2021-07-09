    # Kataw parser test case

## Input

`````js
type FieldLayoutWith<
  T : string,
  S : unknown = { xxxxxxxx: number; y: string; }
> = {
  type: T;
  code: string;
  size: S;
};

type FieldLayoutWith<
  T : string,
  S : unknown,
> = {
  type: T;
  code: string;
  size: S;
};

type FieldLayoutWith<
  T : string,
> = {
  type: T;
  code: string;
  size: S;
};

type FieldLayoutWith<
  T : stringgggggggggggggggggg,
  S : stringgggggggggggggggggg
> = {
  type: T;
  code: string;
  size: S;
};
`````

## Options

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
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "FieldLayoutWith",
                "rawText": "FieldLayoutWith",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 20
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 25
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 34
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 34
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 34
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "S",
                                "rawText": "S",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 39
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234255,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 49
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 49
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 51
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
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
                                                "text": "xxxxxxxx",
                                                "rawText": "xxxxxxxx",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 62
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 63,
                                                    "end": 70
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 70
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 71
                                        },
                                        {
                                            "kind": 193,
                                            "protoKeyword": null,
                                            "staticKeyword": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 71,
                                                "end": 73
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 74,
                                                    "end": 81
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 81
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 82
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 84
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 84
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 84
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 84
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 20,
                "end": 86
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 86,
                "end": 88
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 97
                            },
                            "optionalToken": null,
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
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 100
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 100
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 100
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 101
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "code",
                                "rawText": "code",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 108
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 109,
                                    "end": 116
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 116
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 117
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "size",
                                "rawText": "size",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 124
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 125,
                                        "end": 127
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 125,
                                    "end": 127
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 127
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 117,
                            "end": 128
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 130
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 88,
                "end": 130
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 131
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 131,
                "end": 137
            },
            "name": {
                "kind": 134299649,
                "text": "FieldLayoutWith",
                "rawText": "FieldLayoutWith",
                "flags": 96,
                "transformFlags": 0,
                "start": 137,
                "end": 153
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 158
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 160,
                                    "end": 167
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 160,
                                "end": 167
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 154,
                            "end": 167
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "S",
                                "rawText": "S",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 172
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234255,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 174,
                                    "end": 182
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 182
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 168,
                            "end": 182
                        }
                    ],
                    "trailingComma": true,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 183
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 153,
                "end": 185
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 185,
                "end": 187
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 189,
                                "end": 196
                            },
                            "optionalToken": null,
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
                                        "transformFlags": 0,
                                        "start": 197,
                                        "end": 199
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 197,
                                    "end": 199
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 197,
                                "end": 199
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 200
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "code",
                                "rawText": "code",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 200,
                                "end": 207
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 208,
                                    "end": 215
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 208,
                                "end": 215
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 200,
                            "end": 216
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "size",
                                "rawText": "size",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 223
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 224,
                                        "end": 226
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 224,
                                    "end": 226
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 224,
                                "end": 226
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 216,
                            "end": 227
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 229
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 187,
                "end": 229
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 131,
            "end": 230
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 230,
                "end": 236
            },
            "name": {
                "kind": 134299649,
                "text": "FieldLayoutWith",
                "rawText": "FieldLayoutWith",
                "flags": 96,
                "transformFlags": 0,
                "start": 236,
                "end": 252
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 253,
                                "end": 257
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 266
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 259,
                                "end": 266
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 253,
                            "end": 266
                        }
                    ],
                    "trailingComma": true,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 253,
                    "end": 267
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 252,
                "end": 269
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 269,
                "end": 271
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 280
                            },
                            "optionalToken": null,
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
                                        "transformFlags": 0,
                                        "start": 281,
                                        "end": 283
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 281,
                                    "end": 283
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 281,
                                "end": 283
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 273,
                            "end": 284
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "code",
                                "rawText": "code",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 284,
                                "end": 291
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 292,
                                    "end": 299
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 292,
                                "end": 299
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 284,
                            "end": 300
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "size",
                                "rawText": "size",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 300,
                                "end": 307
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 308,
                                        "end": 310
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 308,
                                    "end": 310
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 308,
                                "end": 310
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 300,
                            "end": 311
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 271,
                    "end": 313
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 271,
                "end": 313
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 230,
            "end": 314
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 314,
                "end": 320
            },
            "name": {
                "kind": 134299649,
                "text": "FieldLayoutWith",
                "rawText": "FieldLayoutWith",
                "flags": 96,
                "transformFlags": 0,
                "start": 320,
                "end": 336
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 337,
                                "end": 341
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "stringgggggggggggggggggg",
                                        "rawText": "stringgggggggggggggggggg",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 343,
                                        "end": 368
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 343,
                                    "end": 368
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 343,
                                "end": 368
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 337,
                            "end": 368
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "S",
                                "rawText": "S",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 369,
                                "end": 373
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "stringgggggggggggggggggg",
                                        "rawText": "stringgggggggggggggggggg",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 375,
                                        "end": 400
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 375,
                                    "end": 400
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 375,
                                "end": 400
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 369,
                            "end": 400
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 337,
                    "end": 400
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 336,
                "end": 402
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 402,
                "end": 404
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 406,
                                "end": 413
                            },
                            "optionalToken": null,
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
                                        "transformFlags": 0,
                                        "start": 414,
                                        "end": 416
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 414,
                                    "end": 416
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 414,
                                "end": 416
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 417
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "code",
                                "rawText": "code",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 417,
                                "end": 424
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 425,
                                    "end": 432
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 425,
                                "end": 432
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 417,
                            "end": 433
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "size",
                                "rawText": "size",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 433,
                                "end": 440
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 441,
                                        "end": 443
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 441,
                                    "end": 443
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 441,
                                "end": 443
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 433,
                            "end": 444
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 404,
                    "end": 446
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 404,
                "end": 446
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 314,
            "end": 447
        }
    ],
    "isModule": false,
    "source": "type FieldLayoutWith<\n  T : string,\n  S : unknown = { xxxxxxxx: number; y: string; }\n> = {\n  type: T;\n  code: string;\n  size: S;\n};\n\ntype FieldLayoutWith<\n  T : string,\n  S : unknown,\n> = {\n  type: T;\n  code: string;\n  size: S;\n};\n\ntype FieldLayoutWith<\n  T : string,\n> = {\n  type: T;\n  code: string;\n  size: S;\n};\n\ntype FieldLayoutWith<\n  T : stringgggggggggggggggggg,\n  S : stringgggggggggggggggggg\n> = {\n  type: T;\n  code: string;\n  size: S;\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 447
}
```

### Printed

```javascript
type FieldLayoutWith<T: string, S: unknown= { xxxxxxxx: number, y: string }> = {
  type: T,
  code: string,
  size: S
}
type FieldLayoutWith<T: string, S: unknown> = { type: T, code: string, size: S }

type FieldLayoutWith<T: string> = { type: T, code: string, size: S }

type FieldLayoutWith<
  T: stringgggggggggggggggggg,
  S: stringgggggggggggggggggg> = { type: T, code: string, size: S }

```

### Diagnostics

```javascript
✔ No errors
```

