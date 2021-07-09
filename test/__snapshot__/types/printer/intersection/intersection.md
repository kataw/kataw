# Kataw parser test case

## Input

`````js

type Props = {
  propA: X
} & {
  propB: X
} & {
  propC: X
} & {
  propD: X
};

type Props = {
  focusedChildren?: React.Children,
  onClick: () => void,
  overlayChildren?: React.Children,
  style?: Object,
  thumbnail: ImageSource,
} & FooterProps;

type DuplexStreamOptions = ReadableStreamOptions & {
  allowHalfOpen?: boolean,
  readableObjectMode?: boolean
};

type DuplexStreamOptions = {
  allowHalfOpen?: boolean,
  readableObjectMode?: boolean
} & {
  allowHalfOpen?: boolean,
  readableObjectMode?: boolean
};

type DuplexStreamOptions = ReadableStreamOptions &
  WritableStreamOptions & {
    allowHalfOpen?: boolean,
    readableObjectMode?: boolean
  };

type DuplexStreamOptions = ReadableStreamOptions &
  WritableStreamOptions & {
    allowHalfOpen?: boolean,
    readableObjectMode?: boolean
  } & {
    allowHalfOpen?: boolean,
    readableObjectMode?: boolean
  };
`````

## Options

`````js
{ allowTypes : true, module: true }
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
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Props",
                "rawText": "Props",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 11,
                "end": 13
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
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
                                        "text": "propA",
                                        "rawText": "propA",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 23
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
                                                "text": "X",
                                                "rawText": "X",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 28
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
                                        "text": "propB",
                                        "rawText": "propB",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 40
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
                                                "text": "X",
                                                "rawText": "X",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 43
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 45
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
                                        "text": "propC",
                                        "rawText": "propC",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 57
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
                                                "text": "X",
                                                "rawText": "X",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 60
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 60
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 60
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 60
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 62
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
                                        "text": "propD",
                                        "rawText": "propD",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 66,
                                        "end": 74
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
                                                "text": "X",
                                                "rawText": "X",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 77
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 77
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 77
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 77
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 79
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 79
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 13,
                "end": 79
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 0,
            "end": 80
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 80,
                "end": 86
            },
            "name": {
                "kind": 134299649,
                "text": "Props",
                "rawText": "Props",
                "flags": 96,
                "transformFlags": 0,
                "start": 86,
                "end": 92
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 92,
                "end": 94
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
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
                                        "text": "focusedChildren",
                                        "rawText": "focusedChildren",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 114
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 145,
                                                "qualification": {
                                                    "kind": 134299649,
                                                    "text": "React",
                                                    "rawText": "React",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 116,
                                                    "end": 122
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "Children",
                                                    "rawText": "Children",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 123,
                                                    "end": 131
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 116,
                                                "end": 131
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 131
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 131
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 96,
                                    "end": 132
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "onClick",
                                        "rawText": "onClick",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 132,
                                        "end": 142
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 288,
                                            "typeParameters": null,
                                            "arrowTypeParameterList": {
                                                "kind": 292,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 145,
                                                "end": 145
                                            },
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 146,
                                                "end": 149
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 138477615,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 149,
                                                    "end": 154
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 149,
                                                "end": 154
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 154
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 143,
                                        "end": 154
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 132,
                                    "end": 155
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "overlayChildren",
                                        "rawText": "overlayChildren",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 155,
                                        "end": 173
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 174
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 145,
                                                "qualification": {
                                                    "kind": 134299649,
                                                    "text": "React",
                                                    "rawText": "React",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 175,
                                                    "end": 181
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "Children",
                                                    "rawText": "Children",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 182,
                                                    "end": 190
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 175,
                                                "end": 190
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 175,
                                            "end": 190
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 175,
                                        "end": 190
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 155,
                                    "end": 191
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "style",
                                        "rawText": "style",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 191,
                                        "end": 199
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 200
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "Object",
                                                "rawText": "Object",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 201,
                                                "end": 208
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 201,
                                            "end": 208
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 201,
                                        "end": 208
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 191,
                                    "end": 209
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "thumbnail",
                                        "rawText": "thumbnail",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 209,
                                        "end": 221
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
                                                "text": "ImageSource",
                                                "rawText": "ImageSource",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 222,
                                                "end": 234
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 222,
                                            "end": 234
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 222,
                                        "end": 234
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 209,
                                    "end": 235
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 237
                        },
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "FooterProps",
                                "rawText": "FooterProps",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 239,
                                "end": 251
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 239,
                            "end": 251
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 237,
                    "end": 251
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 94,
                "end": 251
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 80,
            "end": 252
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 252,
                "end": 258
            },
            "name": {
                "kind": 134299649,
                "text": "DuplexStreamOptions",
                "rawText": "DuplexStreamOptions",
                "flags": 96,
                "transformFlags": 0,
                "start": 258,
                "end": 278
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 278,
                "end": 280
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "ReadableStreamOptions",
                                "rawText": "ReadableStreamOptions",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 280,
                                "end": 302
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 280,
                            "end": 302
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
                                        "text": "allowHalfOpen",
                                        "rawText": "allowHalfOpen",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 306,
                                        "end": 322
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 322,
                                        "end": 323
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 324,
                                            "end": 332
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 324,
                                        "end": 332
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 306,
                                    "end": 333
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "readableObjectMode",
                                        "rawText": "readableObjectMode",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 333,
                                        "end": 354
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 354,
                                        "end": 355
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 356,
                                            "end": 364
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 356,
                                        "end": 364
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 333,
                                    "end": 364
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 304,
                            "end": 366
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 302,
                    "end": 366
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 280,
                "end": 366
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 252,
            "end": 367
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 367,
                "end": 373
            },
            "name": {
                "kind": 134299649,
                "text": "DuplexStreamOptions",
                "rawText": "DuplexStreamOptions",
                "flags": 96,
                "transformFlags": 0,
                "start": 373,
                "end": 393
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 393,
                "end": 395
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
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
                                        "text": "allowHalfOpen",
                                        "rawText": "allowHalfOpen",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 397,
                                        "end": 413
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 413,
                                        "end": 414
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 415,
                                            "end": 423
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 415,
                                        "end": 423
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 397,
                                    "end": 424
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "readableObjectMode",
                                        "rawText": "readableObjectMode",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 424,
                                        "end": 445
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 445,
                                        "end": 446
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 447,
                                            "end": 455
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 447,
                                        "end": 455
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 424,
                                    "end": 455
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 395,
                            "end": 457
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
                                        "text": "allowHalfOpen",
                                        "rawText": "allowHalfOpen",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 461,
                                        "end": 477
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 477,
                                        "end": 478
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 479,
                                            "end": 487
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 479,
                                        "end": 487
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 461,
                                    "end": 488
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "readableObjectMode",
                                        "rawText": "readableObjectMode",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 488,
                                        "end": 509
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 509,
                                        "end": 510
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 511,
                                            "end": 519
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 511,
                                        "end": 519
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 488,
                                    "end": 519
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 459,
                            "end": 521
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 457,
                    "end": 521
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 395,
                "end": 521
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 367,
            "end": 522
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 522,
                "end": 528
            },
            "name": {
                "kind": 134299649,
                "text": "DuplexStreamOptions",
                "rawText": "DuplexStreamOptions",
                "flags": 96,
                "transformFlags": 0,
                "start": 528,
                "end": 548
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 548,
                "end": 550
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "ReadableStreamOptions",
                                "rawText": "ReadableStreamOptions",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 550,
                                "end": 572
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 550,
                            "end": 572
                        },
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "WritableStreamOptions",
                                "rawText": "WritableStreamOptions",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 574,
                                "end": 598
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 574,
                            "end": 598
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
                                        "text": "allowHalfOpen",
                                        "rawText": "allowHalfOpen",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 602,
                                        "end": 620
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 620,
                                        "end": 621
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 622,
                                            "end": 630
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 622,
                                        "end": 630
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 602,
                                    "end": 631
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "readableObjectMode",
                                        "rawText": "readableObjectMode",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 631,
                                        "end": 654
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 654,
                                        "end": 655
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 656,
                                            "end": 664
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 656,
                                        "end": 664
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 631,
                                    "end": 664
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 600,
                            "end": 668
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 572,
                    "end": 668
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 550,
                "end": 668
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 522,
            "end": 669
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 669,
                "end": 675
            },
            "name": {
                "kind": 134299649,
                "text": "DuplexStreamOptions",
                "rawText": "DuplexStreamOptions",
                "flags": 96,
                "transformFlags": 0,
                "start": 675,
                "end": 695
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 695,
                "end": 697
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "ReadableStreamOptions",
                                "rawText": "ReadableStreamOptions",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 697,
                                "end": 719
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 697,
                            "end": 719
                        },
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "WritableStreamOptions",
                                "rawText": "WritableStreamOptions",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 721,
                                "end": 745
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 721,
                            "end": 745
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
                                        "text": "allowHalfOpen",
                                        "rawText": "allowHalfOpen",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 749,
                                        "end": 767
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 767,
                                        "end": 768
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 769,
                                            "end": 777
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 769,
                                        "end": 777
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 749,
                                    "end": 778
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "readableObjectMode",
                                        "rawText": "readableObjectMode",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 778,
                                        "end": 801
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 801,
                                        "end": 802
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 803,
                                            "end": 811
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 803,
                                        "end": 811
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 778,
                                    "end": 811
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 747,
                            "end": 815
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
                                        "text": "allowHalfOpen",
                                        "rawText": "allowHalfOpen",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 819,
                                        "end": 837
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 837,
                                        "end": 838
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 839,
                                            "end": 847
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 839,
                                        "end": 847
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 819,
                                    "end": 848
                                },
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "readableObjectMode",
                                        "rawText": "readableObjectMode",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 848,
                                        "end": 871
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 871,
                                        "end": 872
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 873,
                                            "end": 881
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 873,
                                        "end": 881
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 848,
                                    "end": 881
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 817,
                            "end": 885
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 719,
                    "end": 885
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 697,
                "end": 885
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 669,
            "end": 886
        }
    ],
    "isModule": true,
    "source": "\ntype Props = {\n  propA: X\n} & {\n  propB: X\n} & {\n  propC: X\n} & {\n  propD: X\n};\n\ntype Props = {\n  focusedChildren?: React.Children,\n  onClick: () => void,\n  overlayChildren?: React.Children,\n  style?: Object,\n  thumbnail: ImageSource,\n} & FooterProps;\n\ntype DuplexStreamOptions = ReadableStreamOptions & {\n  allowHalfOpen?: boolean,\n  readableObjectMode?: boolean\n};\n\ntype DuplexStreamOptions = {\n  allowHalfOpen?: boolean,\n  readableObjectMode?: boolean\n} & {\n  allowHalfOpen?: boolean,\n  readableObjectMode?: boolean\n};\n\ntype DuplexStreamOptions = ReadableStreamOptions &\n  WritableStreamOptions & {\n    allowHalfOpen?: boolean,\n    readableObjectMode?: boolean\n  };\n\ntype DuplexStreamOptions = ReadableStreamOptions &\n  WritableStreamOptions & {\n    allowHalfOpen?: boolean,\n    readableObjectMode?: boolean\n  } & {\n    allowHalfOpen?: boolean,\n    readableObjectMode?: boolean\n  };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 886
}
```

### Printed

```javascript
type Props = { propA: X } & { propB: X } & { propC: X } & { propD: X }
type Props = {
  focusedChildren? : React.Children,
  onClick: () => void,
  overlayChildren? : React.Children,
  style? : Object,
  thumbnail: ImageSource
} & FooterProps

type DuplexStreamOptions = ReadableStreamOptions & {
  allowHalfOpen? : boolean,
  readableObjectMode? : boolean
}

type DuplexStreamOptions = {
  allowHalfOpen? : boolean,
  readableObjectMode? : boolean
} & { allowHalfOpen? : boolean, readableObjectMode? : boolean }

type DuplexStreamOptions = ReadableStreamOptions &
  WritableStreamOptions & {
    allowHalfOpen? : boolean,
    readableObjectMode? : boolean
  }

type DuplexStreamOptions = ReadableStreamOptions &
  WritableStreamOptions & {
    allowHalfOpen? : boolean,
    readableObjectMode? : boolean
  } & { allowHalfOpen? : boolean, readableObjectMode? : boolean }

```

### Diagnostics

```javascript
✔ No errors
```

