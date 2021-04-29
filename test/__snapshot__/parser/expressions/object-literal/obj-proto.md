# Kataw parser test case

## Input

`````js
({ __proto__: null, get __proto__(){} });
({ __proto__: null, __proto__(){}, });
({ __proto__: null, set __proto__(x){} });
({ "__proto__": null, get __proto__(){}, set __proto__(x){} });
({ "__proto__": null, __proto__(){}, });
({ "__proto__": null, set __proto__(x){} });
({ "__proto__": null, __proto__ });
({ __proto__, __proto__ });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 34,
                                    "end": 35
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 36,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 1056,
                                "start": 33,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 37
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 39
                },
                "flags": 32,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 55,
                                    "end": 60
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 44,
                                "end": 60
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 61,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 72,
                                    "end": 73
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 74,
                                        "end": 74
                                    },
                                    "flags": 32,
                                    "start": 73,
                                    "end": 75
                                },
                                "flags": 32,
                                "start": 71,
                                "end": 75
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "start": 44,
                        "end": 76
                    },
                    "flags": 32,
                    "start": 43,
                    "end": 78
                },
                "flags": 32,
                "start": 41,
                "end": 79
            },
            "flags": 16,
            "start": 41,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 94,
                                    "end": 99
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 83,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 83,
                                "end": 99
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 104,
                                    "end": 114
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 115,
                                                "end": 116
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 115,
                                            "end": 116
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 115,
                                    "end": 117
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 118,
                                        "end": 118
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 119
                                },
                                "flags": 544,
                                "start": 114,
                                "end": 119
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 83,
                        "end": 119
                    },
                    "flags": 32,
                    "start": 82,
                    "end": 121
                },
                "flags": 32,
                "start": 80,
                "end": 122
            },
            "flags": 16,
            "start": 80,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 139,
                                    "end": 144
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 126,
                                    "end": 138
                                },
                                "flags": 32,
                                "start": 126,
                                "end": 144
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 149,
                                    "end": 159
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 160,
                                    "end": 161
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 162,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "start": 161,
                                    "end": 163
                                },
                                "flags": 1056,
                                "start": 159,
                                "end": 163
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 168,
                                    "end": 178
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 179,
                                                "end": 180
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 179,
                                            "end": 180
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 179,
                                    "end": 181
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 182,
                                        "end": 182
                                    },
                                    "flags": 32,
                                    "start": 181,
                                    "end": 183
                                },
                                "flags": 544,
                                "start": 178,
                                "end": 183
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 126,
                        "end": 183
                    },
                    "flags": 32,
                    "start": 125,
                    "end": 185
                },
                "flags": 32,
                "start": 123,
                "end": 186
            },
            "flags": 16,
            "start": 123,
            "end": 187
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 203,
                                    "end": 208
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 190,
                                    "end": 202
                                },
                                "flags": 32,
                                "start": 190,
                                "end": 208
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 209,
                                    "end": 219
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 220,
                                    "end": 221
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 222,
                                        "end": 222
                                    },
                                    "flags": 32,
                                    "start": 221,
                                    "end": 223
                                },
                                "flags": 32,
                                "start": 219,
                                "end": 223
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "start": 190,
                        "end": 224
                    },
                    "flags": 32,
                    "start": 189,
                    "end": 226
                },
                "flags": 32,
                "start": 187,
                "end": 227
            },
            "flags": 16,
            "start": 187,
            "end": 228
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 244,
                                    "end": 249
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 231,
                                    "end": 243
                                },
                                "flags": 32,
                                "start": 231,
                                "end": 249
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 254,
                                    "end": 264
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 265,
                                                "end": 266
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 265,
                                            "end": 266
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 265,
                                    "end": 267
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 268,
                                        "end": 268
                                    },
                                    "flags": 32,
                                    "start": 267,
                                    "end": 269
                                },
                                "flags": 544,
                                "start": 264,
                                "end": 269
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 231,
                        "end": 269
                    },
                    "flags": 32,
                    "start": 230,
                    "end": 271
                },
                "flags": 32,
                "start": 228,
                "end": 272
            },
            "flags": 16,
            "start": 228,
            "end": 273
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 289,
                                    "end": 294
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 276,
                                    "end": 288
                                },
                                "flags": 32,
                                "start": 276,
                                "end": 294
                            },
                            {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "start": 295,
                                "end": 305
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 276,
                        "end": 305
                    },
                    "flags": 32,
                    "start": 275,
                    "end": 307
                },
                "flags": 32,
                "start": 273,
                "end": 308
            },
            "flags": 16,
            "start": 273,
            "end": 309
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "start": 312,
                                "end": 322
                            },
                            {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "start": 323,
                                "end": 333
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 312,
                        "end": 333
                    },
                    "flags": 32,
                    "start": 311,
                    "end": 335
                },
                "flags": 32,
                "start": 309,
                "end": 336
            },
            "flags": 16,
            "start": 309,
            "end": 337
        }
    ],
    "isModule": false,
    "text": "({ __proto__: null, get __proto__(){} });\n({ __proto__: null, __proto__(){}, });\n({ __proto__: null, set __proto__(x){} });\n({ \"__proto__\": null, get __proto__(){}, set __proto__(x){} });\n({ \"__proto__\": null, __proto__(){}, });\n({ \"__proto__\": null, set __proto__(x){} });\n({ \"__proto__\": null, __proto__ });\n({ __proto__, __proto__ });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 337
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

