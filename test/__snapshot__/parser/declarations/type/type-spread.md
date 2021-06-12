# Kataw parser test case

## Input

`````js
type D = {[string]: number};
type E = {foo:number, ...D};
type C2 = {...A2, ...B2};
type D2 = {p: string};
type C9 = {...A9, ...B9};
type D9 = {p?: number | string};
type C11 = {...A11, ...B11};
type D11 = {p?: number};
type D15 = {[string]: number, p?: string | number};
type D31 = {[string]: number, p?: string | number};
type D32 = {p?: number};
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
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 11,
                            "end": 17
                        },
                        "type": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 28,
                "end": 35
            },
            "name": {
                "kind": 134299649,
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "start": 33,
                "end": 35
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 39,
                            "end": 42
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 43,
                            "end": 49
                        },
                        "flags": 0,
                        "start": 39,
                        "end": 50
                    },
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 50,
                            "end": 54
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 96,
                                "start": 54,
                                "end": 55
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 54,
                            "end": 55
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 50,
                        "end": 55
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 37,
                "end": 56
            },
            "flags": 17,
            "start": 28,
            "end": 57
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 57,
                "end": 65
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 62,
                "end": 65
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 69,
                            "end": 72
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "A2",
                                "rawText": "A2",
                                "flags": 96,
                                "start": 72,
                                "end": 74
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 72,
                            "end": 74
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 69,
                        "end": 74
                    },
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 75,
                            "end": 79
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "B2",
                                "rawText": "B2",
                                "flags": 96,
                                "start": 79,
                                "end": 81
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 79,
                            "end": 81
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 75,
                        "end": 81
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 67,
                "end": 82
            },
            "flags": 17,
            "start": 57,
            "end": 83
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 83,
                "end": 91
            },
            "name": {
                "kind": 134299649,
                "text": "D2",
                "rawText": "D2",
                "flags": 96,
                "start": 88,
                "end": 91
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 95,
                            "end": 96
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 97,
                            "end": 104
                        },
                        "flags": 0,
                        "start": 95,
                        "end": 104
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 93,
                "end": 105
            },
            "flags": 17,
            "start": 83,
            "end": 106
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 106,
                "end": 114
            },
            "name": {
                "kind": 134299649,
                "text": "C9",
                "rawText": "C9",
                "flags": 96,
                "start": 111,
                "end": 114
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 118,
                            "end": 121
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "A9",
                                "rawText": "A9",
                                "flags": 96,
                                "start": 121,
                                "end": 123
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 121,
                            "end": 123
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 118,
                        "end": 123
                    },
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 124,
                            "end": 128
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "B9",
                                "rawText": "B9",
                                "flags": 96,
                                "start": 128,
                                "end": 130
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 128,
                            "end": 130
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 124,
                        "end": 130
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 116,
                "end": 131
            },
            "flags": 17,
            "start": 106,
            "end": 132
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 132,
                "end": 140
            },
            "name": {
                "kind": 134299649,
                "text": "D9",
                "rawText": "D9",
                "flags": 96,
                "start": 137,
                "end": 140
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 144,
                            "end": 145
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 145,
                            "end": 146
                        },
                        "value": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 147,
                                    "end": 154
                                },
                                {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 156,
                                    "end": 163
                                }
                            ],
                            "flags": 0,
                            "start": 154,
                            "end": 163
                        },
                        "flags": 0,
                        "start": 144,
                        "end": 163
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 142,
                "end": 164
            },
            "flags": 17,
            "start": 132,
            "end": 165
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 165,
                "end": 174
            },
            "name": {
                "kind": 134299649,
                "text": "C11",
                "rawText": "C11",
                "flags": 96,
                "start": 170,
                "end": 174
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 178,
                            "end": 181
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "A11",
                                "rawText": "A11",
                                "flags": 96,
                                "start": 181,
                                "end": 184
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 181,
                            "end": 184
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 178,
                        "end": 184
                    },
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 185,
                            "end": 189
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "B11",
                                "rawText": "B11",
                                "flags": 96,
                                "start": 189,
                                "end": 192
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 189,
                            "end": 192
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 185,
                        "end": 192
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 176,
                "end": 193
            },
            "flags": 17,
            "start": 165,
            "end": 194
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 194,
                "end": 203
            },
            "name": {
                "kind": 134299649,
                "text": "D11",
                "rawText": "D11",
                "flags": 96,
                "start": 199,
                "end": 203
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 207,
                            "end": 208
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 208,
                            "end": 209
                        },
                        "value": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 210,
                            "end": 217
                        },
                        "flags": 0,
                        "start": 207,
                        "end": 217
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 205,
                "end": 218
            },
            "flags": 17,
            "start": 194,
            "end": 219
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 219,
                "end": 228
            },
            "name": {
                "kind": 134299649,
                "text": "D15",
                "rawText": "D15",
                "flags": 96,
                "start": 224,
                "end": 228
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 233,
                            "end": 239
                        },
                        "type": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 241,
                            "end": 248
                        },
                        "flags": 0,
                        "start": 232,
                        "end": 249
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 249,
                            "end": 251
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 251,
                            "end": 252
                        },
                        "value": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 253,
                                    "end": 260
                                },
                                {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 262,
                                    "end": 269
                                }
                            ],
                            "flags": 0,
                            "start": 260,
                            "end": 269
                        },
                        "flags": 0,
                        "start": 249,
                        "end": 269
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 230,
                "end": 270
            },
            "flags": 17,
            "start": 219,
            "end": 271
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 271,
                "end": 280
            },
            "name": {
                "kind": 134299649,
                "text": "D31",
                "rawText": "D31",
                "flags": 96,
                "start": 276,
                "end": 280
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 285,
                            "end": 291
                        },
                        "type": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 293,
                            "end": 300
                        },
                        "flags": 0,
                        "start": 284,
                        "end": 301
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 301,
                            "end": 303
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 303,
                            "end": 304
                        },
                        "value": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 305,
                                    "end": 312
                                },
                                {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 314,
                                    "end": 321
                                }
                            ],
                            "flags": 0,
                            "start": 312,
                            "end": 321
                        },
                        "flags": 0,
                        "start": 301,
                        "end": 321
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 282,
                "end": 322
            },
            "flags": 17,
            "start": 271,
            "end": 323
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 323,
                "end": 332
            },
            "name": {
                "kind": 134299649,
                "text": "D32",
                "rawText": "D32",
                "flags": 96,
                "start": 328,
                "end": 332
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 336,
                            "end": 337
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 337,
                            "end": 338
                        },
                        "value": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 339,
                            "end": 346
                        },
                        "flags": 0,
                        "start": 336,
                        "end": 346
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 334,
                "end": 347
            },
            "flags": 17,
            "start": 323,
            "end": 348
        }
    ],
    "isModule": false,
    "source": "type D = {[string]: number};\ntype E = {foo:number, ...D};\ntype C2 = {...A2, ...B2};\ntype D2 = {p: string};\ntype C9 = {...A9, ...B9};\ntype D9 = {p?: number | string};\ntype C11 = {...A11, ...B11};\ntype D11 = {p?: number};\ntype D15 = {[string]: number, p?: string | number};\ntype D31 = {[string]: number, p?: string | number};\ntype D32 = {p?: number};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 348
}
```

### Printed

```javascript












```

### Diagnostics

```javascript
✔ No errors
```

