# Kataw parser test case

## Input

`````js
type union =
 | {type: "A"}
 | {type: "B"}
;

type overloads =
  & ((x: string) => number)
  & ((x: number) => string)
;

type union2 = {
  x:
    | {type: "A"}
    | {type: "B"}
};

type overloads2 = {
  x:
    & {type: "A"}
    & {type: "B"}
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                "text": "union",
                "rawText": "union",
                "flags": 96,
                "start": 4,
                "end": 10
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 10,
                "end": 12
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": {
                    "kind": 134251592,
                    "flags": 65,
                    "start": 12,
                    "end": 15
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
                                        "start": 17,
                                        "end": 21
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
                                            "start": 22,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 15,
                            "end": 27
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
                                        "start": 32,
                                        "end": 36
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
                                            "start": 37,
                                            "end": 41
                                        },
                                        "flags": 2097152,
                                        "start": 37,
                                        "end": 41
                                    },
                                    "flags": 2097152,
                                    "start": 32,
                                    "end": 41
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 30,
                            "end": 42
                        }
                    ],
                    "flags": 2097152,
                    "start": 27,
                    "end": 42
                },
                "flags": 2097152,
                "start": 12,
                "end": 42
            },
            "flags": 64,
            "start": 0,
            "end": 44
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 44,
                "end": 50
            },
            "name": {
                "kind": 134299649,
                "text": "overloads",
                "rawText": "overloads",
                "flags": 96,
                "start": 50,
                "end": 60
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 60,
                "end": 62
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": {
                    "kind": 134252103,
                    "flags": 65,
                    "start": 62,
                    "end": 66
                },
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 290,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 288,
                                    "typeParameters": null,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 69,
                                                    "end": 70
                                                },
                                                "optionalToken": null,
                                                "types": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "start": 71,
                                                        "end": 78
                                                    },
                                                    "flags": 2097152,
                                                    "start": 71,
                                                    "end": 78
                                                },
                                                "flags": 2097152,
                                                "start": 66,
                                                "end": 78
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 66,
                                        "end": 78
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 79,
                                        "end": 82
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 82,
                                            "end": 89
                                        },
                                        "flags": 2097152,
                                        "start": 82,
                                        "end": 89
                                    },
                                    "flags": 2097152,
                                    "start": 66,
                                    "end": 89
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 66,
                                "end": 89
                            },
                            "flags": 2097152,
                            "start": 66,
                            "end": 90
                        },
                        {
                            "kind": 290,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 288,
                                    "typeParameters": null,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 97,
                                                    "end": 98
                                                },
                                                "optionalToken": null,
                                                "types": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234345,
                                                        "flags": 2097216,
                                                        "start": 99,
                                                        "end": 106
                                                    },
                                                    "flags": 2097152,
                                                    "start": 99,
                                                    "end": 106
                                                },
                                                "flags": 2097152,
                                                "start": 94,
                                                "end": 106
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 94,
                                        "end": 106
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 107,
                                        "end": 110
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 110,
                                            "end": 117
                                        },
                                        "flags": 2097152,
                                        "start": 110,
                                        "end": 117
                                    },
                                    "flags": 2097152,
                                    "start": 94,
                                    "end": 117
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 94,
                                "end": 117
                            },
                            "flags": 2097152,
                            "start": 94,
                            "end": 118
                        }
                    ],
                    "flags": 2097152,
                    "start": 90,
                    "end": 118
                },
                "flags": 2097152,
                "start": 62,
                "end": 118
            },
            "flags": 65,
            "start": 44,
            "end": 120
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 120,
                "end": 126
            },
            "name": {
                "kind": 134299649,
                "text": "union2",
                "rawText": "union2",
                "flags": 96,
                "start": 126,
                "end": 133
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 133,
                "end": 135
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 137,
                                "end": 141
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": {
                                    "kind": 134251592,
                                    "flags": 65,
                                    "start": 142,
                                    "end": 148
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
                                                        "start": 150,
                                                        "end": 154
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
                                                            "start": 155,
                                                            "end": 159
                                                        },
                                                        "flags": 2097152,
                                                        "start": 155,
                                                        "end": 159
                                                    },
                                                    "flags": 2097152,
                                                    "start": 150,
                                                    "end": 159
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 148,
                                            "end": 160
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
                                                        "start": 168,
                                                        "end": 172
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
                                                            "start": 173,
                                                            "end": 177
                                                        },
                                                        "flags": 2097152,
                                                        "start": 173,
                                                        "end": 177
                                                    },
                                                    "flags": 2097152,
                                                    "start": 168,
                                                    "end": 177
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 166,
                                            "end": 178
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 160,
                                    "end": 178
                                },
                                "flags": 2097152,
                                "start": 142,
                                "end": 178
                            },
                            "flags": 2097152,
                            "start": 137,
                            "end": 178
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 135,
                    "end": 180
                },
                "flags": 2097152,
                "start": 135,
                "end": 180
            },
            "flags": 65,
            "start": 120,
            "end": 181
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 181,
                "end": 187
            },
            "name": {
                "kind": 134299649,
                "text": "overloads2",
                "rawText": "overloads2",
                "flags": 96,
                "start": 187,
                "end": 198
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 198,
                "end": 200
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 202,
                                "end": 206
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": {
                                    "kind": 134252103,
                                    "flags": 65,
                                    "start": 207,
                                    "end": 213
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
                                                        "start": 215,
                                                        "end": 219
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
                                                            "start": 220,
                                                            "end": 224
                                                        },
                                                        "flags": 2097152,
                                                        "start": 220,
                                                        "end": 224
                                                    },
                                                    "flags": 2097152,
                                                    "start": 215,
                                                    "end": 224
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 213,
                                            "end": 225
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
                                                        "start": 233,
                                                        "end": 237
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
                                                            "start": 238,
                                                            "end": 242
                                                        },
                                                        "flags": 2097152,
                                                        "start": 238,
                                                        "end": 242
                                                    },
                                                    "flags": 2097152,
                                                    "start": 233,
                                                    "end": 242
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 231,
                                            "end": 243
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 225,
                                    "end": 243
                                },
                                "flags": 2097152,
                                "start": 207,
                                "end": 243
                            },
                            "flags": 2097152,
                            "start": 202,
                            "end": 243
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 200,
                    "end": 245
                },
                "flags": 2097152,
                "start": 200,
                "end": 245
            },
            "flags": 65,
            "start": 181,
            "end": 246
        }
    ],
    "isModule": false,
    "source": "type union =\n | {type: \"A\"}\n | {type: \"B\"}\n;\n\ntype overloads =\n  & ((x: string) => number)\n  & ((x: number) => string)\n;\n\ntype union2 = {\n  x:\n    | {type: \"A\"}\n    | {type: \"B\"}\n};\n\ntype overloads2 = {\n  x:\n    & {type: \"A\"}\n    & {type: \"B\"}\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 246
}
```

### Printed

```javascript

type union = | { type: "\"A\"" } | { type: "\"B\"" }
type overloads = & ((x: string) => number) & ((x: number) => string)
type union2 = { x: | { type: "\"A\"" } | { type: "\"B\"" } }
type overloads2 = { x: & { type: "\"A\"" } & { type: "\"B\"" } }

```

### Diagnostics

```javascript
✔ No errors
```

