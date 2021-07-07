  # Kataw parser test case

## Input

`````js
const foo1: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<bigint> = a;
const foo2: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<1n> = a;
const foo3: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<1_1n> = a;
const foo4: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<0xDeeD_BeeFn> = a;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
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
                            "text": "foo1",
                            "rawText": "foo1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "rawText": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 82
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "bigint",
                                                        "rawText": "bigint",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 83,
                                                        "end": 89
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 83,
                                                    "end": 89
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 89
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 89
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 82,
                                    "end": 90
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 90
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 90
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 94
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 94
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 94
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 95
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 95,
                "end": 101
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo2",
                            "rawText": "foo2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 106
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "rawText": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 178
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 286,
                                                    "text": "1",
                                                    "rawText": "1n",
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 179,
                                                    "end": 181
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 179,
                                                "end": 181
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 179,
                                        "end": 181
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 178,
                                    "end": 182
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 182
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 182
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 184,
                            "end": 186
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 101,
                        "end": 186
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 101,
                "end": 186
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 95,
            "end": 187
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 187,
                "end": 193
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo3",
                            "rawText": "foo3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 193,
                            "end": 198
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "rawText": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 199,
                                    "end": 270
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 286,
                                                    "text": "1_1",
                                                    "rawText": "1_1n",
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 271,
                                                    "end": 275
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 271,
                                                "end": 275
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 271,
                                        "end": 275
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 270,
                                    "end": 276
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 276
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 199,
                            "end": 276
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 278,
                            "end": 280
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 193,
                        "end": 280
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 193,
                "end": 280
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 187,
            "end": 281
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 281,
                "end": 287
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo4",
                            "rawText": "foo4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 287,
                            "end": 292
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "rawText": "Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 364
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 286,
                                                    "text": 3740122863,
                                                    "rawText": "0xDeeD_BeeFn",
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 365,
                                                    "end": 377
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 365,
                                                "end": 377
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 365,
                                        "end": 377
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 364,
                                    "end": 378
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 293,
                                "end": 378
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 293,
                            "end": 378
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 380,
                            "end": 382
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 287,
                        "end": 382
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 287,
                "end": 382
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 281,
            "end": 383
        }
    ],
    "isModule": false,
    "source": "const foo1: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<bigint> = a;\nconst foo2: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<1n> = a;\nconst foo3: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<1_1n> = a;\nconst foo4: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<0xDeeD_BeeFn> = a;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 383
}
```

### Printed

```javascript
const foo1: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<
    bigint> = a;
const foo2: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<
    1n> = a;

const foo3: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<
    1_1n> = a;

const foo4: Fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<
    0xdeed_beefn> = a;

```

### Diagnostics

```javascript
✔ No errors
```

