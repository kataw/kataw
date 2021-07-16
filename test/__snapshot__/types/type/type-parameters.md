# Kataw parser test case

## Input

`````js
type A1<T = string> = T;
type A2<T = *> = T;
type A3<T: ?string = string> = T;
type A4<S, T: ?string = string> = T;
type A5<S = number, T: ?string = string> = T;
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
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "A1",
                "rawText": "A1",
                "flags": 96,
                "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "type": null,
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 18
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 18
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 7,
                "end": 19
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 21
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
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 21,
                "end": 23
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 24,
                "end": 29
            },
            "name": {
                "kind": 134299649,
                "text": "A2",
                "rawText": "A2",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 32
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
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
                            },
                            "type": null,
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 67143222,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 38
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 38
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 32,
                "end": 39
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 39,
                "end": 41
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
            "flags": 65,
            "transformFlags": 0,
            "start": 24,
            "end": 44
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 44,
                "end": 49
            },
            "name": {
                "kind": 134299649,
                "text": "A3",
                "rawText": "A3",
                "flags": 96,
                "transformFlags": 0,
                "start": 49,
                "end": 52
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
                                "transformFlags": 0,
                                "start": 53,
                                "end": 54
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
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 63
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 63
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 63
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 65
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 72
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 72
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 72
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 72
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 52,
                "end": 73
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 73,
                "end": 75
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
            "flags": 65,
            "transformFlags": 0,
            "start": 44,
            "end": 78
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 78,
                "end": 83
            },
            "name": {
                "kind": 134299649,
                "text": "A4",
                "rawText": "A4",
                "flags": 96,
                "transformFlags": 0,
                "start": 83,
                "end": 86
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
                                "transformFlags": 0,
                                "start": 87,
                                "end": 88
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 88
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 89,
                                "end": 91
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
                                        "transformFlags": 0,
                                        "start": 92,
                                        "end": 94
                                    },
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 94,
                                        "end": 100
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 92,
                                    "end": 100
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 100
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 102
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 102,
                                    "end": 109
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 109
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 109
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 109
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 86,
                "end": 110
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 110,
                "end": 112
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
                        "transformFlags": 0,
                        "start": 112,
                        "end": 114
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 114
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 112,
                "end": 114
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 78,
            "end": 115
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 115,
                "end": 120
            },
            "name": {
                "kind": 134299649,
                "text": "A5",
                "rawText": "A5",
                "flags": 96,
                "transformFlags": 0,
                "start": 120,
                "end": 123
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
                                "transformFlags": 0,
                                "start": 124,
                                "end": 125
                            },
                            "type": null,
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 127
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 127,
                                    "end": 134
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 134
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 134
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 137
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
                                        "transformFlags": 0,
                                        "start": 138,
                                        "end": 140
                                    },
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 140,
                                        "end": 146
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 138,
                                    "end": 146
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 138,
                                "end": 146
                            },
                            "assignToken": {
                                "kind": 4125,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 148
                            },
                            "defaultType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 148,
                                    "end": 155
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 155
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 155
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 155
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 123,
                "end": 156
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 156,
                "end": 158
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
                        "transformFlags": 0,
                        "start": 158,
                        "end": 160
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 160
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 158,
                "end": 160
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 115,
            "end": 161
        }
    ],
    "isModule": false,
    "source": "type A1<T = string> = T;\ntype A2<T = *> = T;\ntype A3<T: ?string = string> = T;\ntype A4<S, T: ?string = string> = T;\ntype A5<S = number, T: ?string = string> = T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 161
}
```

### Printed

```javascript
type A1<T= string> = T
type A2<T= *> = T

type A3<T: ? string= string> = T

type A4<S, T: ? string= string> = T

type A5<S= number, T: ? string= string> = T

```

### Diagnostics

```javascript
✔ No errors
```

