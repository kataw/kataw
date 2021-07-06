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

### CST

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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 23
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 37
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 39
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 54
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 60
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 44,
                                "end": 60
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 71
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 36,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 73
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 74,
                                            "end": 74
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 75
                                    },
                                    "flags": 36,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 75
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 75
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 76
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 43,
                    "end": 78
                },
                "flags": 41,
                "transformFlags": 0,
                "start": 35,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 93
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 99
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 83,
                                "end": 99
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 100,
                                    "end": 104
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 114
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 115,
                                                "end": 116
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 117
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 118
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 119
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 119
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 119
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 119
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 82,
                    "end": 121
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 35,
                "end": 122
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 126,
                                    "end": 138
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 139,
                                    "end": 144
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 126,
                                "end": 144
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 145,
                                    "end": 149
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 149,
                                        "end": 159
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 160,
                                        "end": 161
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 162
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 161,
                                        "end": 163
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 159,
                                    "end": 163
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 145,
                                "end": 163
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 164,
                                    "end": 168
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 168,
                                        "end": 178
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 179,
                                                "end": 180
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 179,
                                        "end": 181
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 182,
                                            "end": 182
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 181,
                                        "end": 183
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 178,
                                    "end": 183
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 164,
                                "end": 183
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 126,
                        "end": 183
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 125,
                    "end": 185
                },
                "flags": 123,
                "transformFlags": 0,
                "start": 35,
                "end": 186
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 190,
                                    "end": 202
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 208
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 190,
                                "end": 208
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 209,
                                        "end": 219
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 36,
                                        "transformFlags": 0,
                                        "start": 220,
                                        "end": 221
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 222,
                                            "end": 222
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 221,
                                        "end": 223
                                    },
                                    "flags": 36,
                                    "transformFlags": 0,
                                    "start": 219,
                                    "end": 223
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 223
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 190,
                        "end": 224
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 189,
                    "end": 226
                },
                "flags": 187,
                "transformFlags": 0,
                "start": 35,
                "end": 227
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 243
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 244,
                                    "end": 249
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 231,
                                "end": 249
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 250,
                                    "end": 254
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 264
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 265,
                                                "end": 266
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 265,
                                        "end": 267
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 268,
                                            "end": 268
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 267,
                                        "end": 269
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 264,
                                    "end": 269
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 250,
                                "end": 269
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 231,
                        "end": 269
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 230,
                    "end": 271
                },
                "flags": 228,
                "transformFlags": 0,
                "start": 35,
                "end": 272
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 276,
                                    "end": 288
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 289,
                                    "end": 294
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 276,
                                "end": 294
                            },
                            {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 305
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 276,
                        "end": 305
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 275,
                    "end": 307
                },
                "flags": 273,
                "transformFlags": 0,
                "start": 35,
                "end": 308
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 312,
                                "end": 322
                            },
                            {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 323,
                                "end": 333
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 312,
                        "end": 333
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 311,
                    "end": 335
                },
                "flags": 309,
                "transformFlags": 0,
                "start": 35,
                "end": 336
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 309,
            "end": 337
        }
    ],
    "isModule": false,
    "source": "({ __proto__: null, get __proto__(){} });\n({ __proto__: null, __proto__(){}, });\n({ __proto__: null, set __proto__(x){} });\n({ \"__proto__\": null, get __proto__(){}, set __proto__(x){} });\n({ \"__proto__\": null, __proto__(){}, });\n({ \"__proto__\": null, set __proto__(x){} });\n({ \"__proto__\": null, __proto__ });\n({ __proto__, __proto__ });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 337
}
```

### Printed

```javascript

({__proto__: null , get __proto__() {}});
({__proto__: null , __proto__() {}});

({__proto__: null , set __proto__(x) {}});

({"\"__proto__\"": null , get __proto__() {}, set __proto__(x) {}});

({"\"__proto__\"": null , __proto__() {}});

({"\"__proto__\"": null , set __proto__(x) {}});

({"\"__proto__\"": null , __proto__});

({__proto__, __proto__});

```

### Diagnostics

```javascript
✔ No errors
```

