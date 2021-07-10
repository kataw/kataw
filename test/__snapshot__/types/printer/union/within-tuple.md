# Kataw parser test case

## Input

`````js
type A = [AAAAAAAAAAAAAAAAAAAAAA | BBBBBBBBBBBBBBBBBBBBBB | CCCCCCCCCCCCCCCCCCCCCC | DDDDDDDDDDDDDDDDDDDDDD]

type B = [
  | AAAAAAAAAAAAAAAAAAAAAA
  | BBBBBBBBBBBBBBBBBBBBBB
  | CCCCCCCCCCCCCCCCCCCCCC
  | DDDDDDDDDDDDDDDDDDDDDD
]

type C = [
  | [AAAAAAAAAAAAAAAAAAAAAA | BBBBBBBBBBBBBBBBBBBBBB | CCCCCCCCCCCCCCCCCCCCCC | DDDDDDDDDDDDDDDDDDDDDD]
  | [AAAAAAAAAAAAAAAAAAAAAA | BBBBBBBBBBBBBBBBBBBBBB | CCCCCCCCCCCCCCCCCCCCCC | DDDDDDDDDDDDDDDDDDDDDD]
]
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "AAAAAAAAAAAAAAAAAAAAAA",
                                            "rawText": "AAAAAAAAAAAAAAAAAAAAAA",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 32
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 32
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "BBBBBBBBBBBBBBBBBBBBBB",
                                            "rawText": "BBBBBBBBBBBBBBBBBBBBBB",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 57
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 57
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "CCCCCCCCCCCCCCCCCCCCCC",
                                            "rawText": "CCCCCCCCCCCCCCCCCCCCCC",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 82
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 82
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "DDDDDDDDDDDDDDDDDDDDDD",
                                            "rawText": "DDDDDDDDDDDDDDDDDDDDDD",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 107
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 107
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 107
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 107
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 108
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 108
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 108
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 108,
                "end": 114
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 114,
                "end": 116
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 116,
                "end": 118
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 139,
                            "bitwiseOrToken": {
                                "kind": 134251592,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 124
                            },
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "AAAAAAAAAAAAAAAAAAAAAA",
                                            "rawText": "AAAAAAAAAAAAAAAAAAAAAA",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 147
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 147
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "BBBBBBBBBBBBBBBBBBBBBB",
                                            "rawText": "BBBBBBBBBBBBBBBBBBBBBB",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 151,
                                            "end": 174
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 151,
                                        "end": 174
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "CCCCCCCCCCCCCCCCCCCCCC",
                                            "rawText": "CCCCCCCCCCCCCCCCCCCCCC",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 178,
                                            "end": 201
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 178,
                                        "end": 201
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "DDDDDDDDDDDDDDDDDDDDDD",
                                            "rawText": "DDDDDDDDDDDDDDDDDDDDDD",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 205,
                                            "end": 228
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 205,
                                        "end": 228
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 147,
                                "end": 228
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 228
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097153,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 230
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 118,
                "end": 230
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 108,
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 236,
                "end": 238
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 238,
                "end": 240
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 139,
                            "bitwiseOrToken": {
                                "kind": 134251592,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 242,
                                "end": 246
                            },
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 147,
                                        "elementTypes": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 137,
                                                    "types": [
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "AAAAAAAAAAAAAAAAAAAAAA",
                                                                "rawText": "AAAAAAAAAAAAAAAAAAAAAA",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 248,
                                                                "end": 270
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 248,
                                                            "end": 270
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "BBBBBBBBBBBBBBBBBBBBBB",
                                                                "rawText": "BBBBBBBBBBBBBBBBBBBBBB",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 272,
                                                                "end": 295
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 272,
                                                            "end": 295
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "CCCCCCCCCCCCCCCCCCCCCC",
                                                                "rawText": "CCCCCCCCCCCCCCCCCCCCCC",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 297,
                                                                "end": 320
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 297,
                                                            "end": 320
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "DDDDDDDDDDDDDDDDDDDDDD",
                                                                "rawText": "DDDDDDDDDDDDDDDDDDDDDD",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 322,
                                                                "end": 345
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 322,
                                                            "end": 345
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 270,
                                                    "end": 345
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 248,
                                                "end": 345
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 246,
                                        "end": 346
                                    },
                                    {
                                        "kind": 147,
                                        "elementTypes": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 137,
                                                    "types": [
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "AAAAAAAAAAAAAAAAAAAAAA",
                                                                "rawText": "AAAAAAAAAAAAAAAAAAAAAA",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 352,
                                                                "end": 374
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 352,
                                                            "end": 374
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "BBBBBBBBBBBBBBBBBBBBBB",
                                                                "rawText": "BBBBBBBBBBBBBBBBBBBBBB",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 376,
                                                                "end": 399
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 376,
                                                            "end": 399
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "CCCCCCCCCCCCCCCCCCCCCC",
                                                                "rawText": "CCCCCCCCCCCCCCCCCCCCCC",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 401,
                                                                "end": 424
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 401,
                                                            "end": 424
                                                        },
                                                        {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "DDDDDDDDDDDDDDDDDDDDDD",
                                                                "rawText": "DDDDDDDDDDDDDDDDDDDDDD",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 426,
                                                                "end": 449
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 426,
                                                            "end": 449
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 374,
                                                    "end": 449
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 352,
                                                "end": 449
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 350,
                                        "end": 450
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 346,
                                "end": 450
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 242,
                            "end": 450
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097153,
                    "transformFlags": 0,
                    "start": 240,
                    "end": 452
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 240,
                "end": 452
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 230,
            "end": 452
        }
    ],
    "isModule": false,
    "source": "type A = [AAAAAAAAAAAAAAAAAAAAAA | BBBBBBBBBBBBBBBBBBBBBB | CCCCCCCCCCCCCCCCCCCCCC | DDDDDDDDDDDDDDDDDDDDDD]\n\ntype B = [\n  | AAAAAAAAAAAAAAAAAAAAAA\n  | BBBBBBBBBBBBBBBBBBBBBB\n  | CCCCCCCCCCCCCCCCCCCCCC\n  | DDDDDDDDDDDDDDDDDDDDDD\n]\n\ntype C = [\n  | [AAAAAAAAAAAAAAAAAAAAAA | BBBBBBBBBBBBBBBBBBBBBB | CCCCCCCCCCCCCCCCCCCCCC | DDDDDDDDDDDDDDDDDDDDDD]\n  | [AAAAAAAAAAAAAAAAAAAAAA | BBBBBBBBBBBBBBBBBBBBBB | CCCCCCCCCCCCCCCCCCCCCC | DDDDDDDDDDDDDDDDDDDDDD]\n]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 452
}
```

### Printed

```javascript
type A = [
  AAAAAAAAAAAAAAAAAAAAAA |
    BBBBBBBBBBBBBBBBBBBBBB |
    CCCCCCCCCCCCCCCCCCCCCC |
    DDDDDDDDDDDDDDDDDDDDDD
]
type B = [
  | AAAAAAAAAAAAAAAAAAAAAA |
    BBBBBBBBBBBBBBBBBBBBBB |
    CCCCCCCCCCCCCCCCCCCCCC |
    DDDDDDDDDDDDDDDDDDDDDD
]

type C = [
  | [
    AAAAAAAAAAAAAAAAAAAAAA |
      BBBBBBBBBBBBBBBBBBBBBB |
      CCCCCCCCCCCCCCCCCCCCCC |
      DDDDDDDDDDDDDDDDDDDDDD
  ] |
    [
      AAAAAAAAAAAAAAAAAAAAAA |
        BBBBBBBBBBBBBBBBBBBBBB |
        CCCCCCCCCCCCCCCCCCCCCC |
        DDDDDDDDDDDDDDDDDDDDDD
    ]
]

```

### Diagnostics

```javascript
✔ No errors
```

