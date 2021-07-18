# Kataw parser test case

### Printer Options

`````js
{ printWidth: 20 }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
type A = & string;
type B =
  & { foo: string }
  & { bar: number };

type C = [& { foo: 1 } & { bar: 2 }, & { foo: 3 } & { bar: 4 }];
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
                "bitwiseAndToken": {
                    "kind": 134252103,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 17
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 17
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 18,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": {
                    "kind": 134252103,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 31
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
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 37
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
                                            "start": 38,
                                            "end": 45
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 45
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 47
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
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 57
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
                                            "start": 58,
                                            "end": 65
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 65
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 65
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 67
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 67
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 27,
                "end": 67
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 18,
            "end": 68
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 68,
                "end": 74
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 74,
                "end": 76
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 76,
                "end": 78
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
                            "bitwiseAndToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 81
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
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 83,
                                                    "end": 87
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 88,
                                                        "end": 90
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 90
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 90
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 92
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
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 96,
                                                    "end": 100
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 101,
                                                        "end": 103
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 101,
                                                    "end": 103
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 96,
                                                "end": 103
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 94,
                                        "end": 105
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 105
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 105
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 108
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
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 110,
                                                    "end": 114
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 115,
                                                        "end": 117
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 115,
                                                    "end": 117
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 110,
                                                "end": 117
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 108,
                                        "end": 119
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
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 123,
                                                    "end": 127
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134217968,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 128,
                                                        "end": 130
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 128,
                                                    "end": 130
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 123,
                                                "end": 130
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 121,
                                        "end": 132
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 132
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 132
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 133
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 78,
                "end": 133
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 68,
            "end": 134
        }
    ],
    "isModule": true,
    "source": "type A = & string;\ntype B =\n  & { foo: string }\n  & { bar: number };\n\ntype C = [& { foo: 1 } & { bar: 2 }, & { foo: 3 } & { bar: 4 }];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 134
}
```

### Printed

```javascript
type A = & string
type B = & {
  foo: string
} & { bar: number }

type C = [
  & { foo: 1 } & {
    bar: 2
  },
  & { foo: 3 } & {
    bar: 4
  }
]

```

### Diagnostics

```javascript
✔ No errors
```

