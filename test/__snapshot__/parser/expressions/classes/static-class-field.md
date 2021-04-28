# Kataw parser test case

## Input

`````js
class x { static #foo = bar }

(class C { static a = 0;});
(class C { static a = 0; b});
(class C { static a = 0; b(){}});
(class C { static a = 0; *b(){}});
(class C { static a = 0; ['b'](){}});
(class C { static a;});
(class C { static a; b;});
(class C { static a; b(){}});
(class C { static a; *b(){}});
(class C { static a; ['b'](){}});
(class C { static ['a'] = 0;});
(class C { static ['a'] = 0; b});
(class C { static ['a'] = 0; b(){}});
(class C { static ['a'] = 0; *b(){}});
(class C { static ['a'] = 0; ['b'](){}});
(class C { static ['a'];});
(class C { static ['a']; b;});
(class C { static ['a']; b(){}});
(class C { static ['a']; *b(){}});
(class C { static ['a']; ['b'](){}});

(class extends x { static 0 = 0;});
(class extends x { static 0;});
(class extends x { static 'a' = 0;});
(class extends x { static 'a';});

(class C { static yield = 0});

(class C { static yield
 a});

(class C { static async;});
(class C { static async = 0;});
(class C { static async});
(class C { static async = 0});

(class C { static async
 a(){}});  // a field named async, and a method named a.

(class C { static async
a});

(class C { static await;});
(class C { static await = 0;});

(class C { static await
 a});

(class C { static c = [c] = c});

(class  { static a = 0
});

(class  { static a = 0
 b});

(class  { static a = 0
 b(){}});

(class  { static a
});

(class  { static a
 b
});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 9,
                            "start": 512,
                            "end": 16
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#foo",
                            "flags": 768,
                            "start": 16,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 23,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 16,
                        "end": 27
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 32,
                        "start": 0,
                        "end": 37
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 37,
                        "end": 39
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 41,
                                    "start": 512,
                                    "end": 48
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 48,
                                    "end": 50
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 52,
                                    "end": 54
                                },
                                "flags": 256,
                                "start": 48,
                                "end": 54
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 54,
                                "end": 55
                            }
                        ],
                        "flags": 256,
                        "start": 41,
                        "end": 56
                    },
                    "flags": 256,
                    "start": 32,
                    "end": 56
                },
                "flags": 256,
                "start": 29,
                "end": 57
            },
            "flags": 128,
            "start": 29,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 60,
                        "start": 0,
                        "end": 65
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 65,
                        "end": 67
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 69,
                                    "start": 512,
                                    "end": 76
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 76,
                                    "end": 78
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 80,
                                    "end": 82
                                },
                                "flags": 256,
                                "start": 76,
                                "end": 82
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 82,
                                "end": 83
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 83,
                                    "end": 85
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 83,
                                "end": 85
                            }
                        ],
                        "flags": 256,
                        "start": 69,
                        "end": 86
                    },
                    "flags": 256,
                    "start": 60,
                    "end": 86
                },
                "flags": 256,
                "start": 58,
                "end": 87
            },
            "flags": 128,
            "start": 58,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 90,
                        "start": 0,
                        "end": 95
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 95,
                        "end": 97
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 99,
                                    "start": 512,
                                    "end": 106
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 106,
                                    "end": 108
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 110,
                                    "end": 112
                                },
                                "flags": 256,
                                "start": 106,
                                "end": 112
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 112,
                                "end": 113
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 113,
                                        "end": 115
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 116,
                                        "end": 117
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 118,
                                            "end": 118
                                        },
                                        "flags": 256,
                                        "start": 117,
                                        "end": 119
                                    },
                                    "flags": 0,
                                    "start": 115,
                                    "end": 119
                                },
                                "flags": 0,
                                "start": 113,
                                "end": 119
                            }
                        ],
                        "flags": 256,
                        "start": 99,
                        "end": 120
                    },
                    "flags": 256,
                    "start": 90,
                    "end": 120
                },
                "flags": 256,
                "start": 88,
                "end": 121
            },
            "flags": 128,
            "start": 88,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 124,
                        "start": 0,
                        "end": 129
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 129,
                        "end": 131
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 133,
                                    "start": 512,
                                    "end": 140
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 140,
                                    "end": 142
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 144,
                                    "end": 146
                                },
                                "flags": 256,
                                "start": 140,
                                "end": 146
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 146,
                                "end": 147
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 149,
                                        "end": 150
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 151,
                                        "end": 152
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 153,
                                            "end": 153
                                        },
                                        "flags": 256,
                                        "start": 152,
                                        "end": 154
                                    },
                                    "flags": 0,
                                    "start": 150,
                                    "end": 154
                                },
                                "flags": 0,
                                "start": 147,
                                "end": 154
                            }
                        ],
                        "flags": 256,
                        "start": 133,
                        "end": 155
                    },
                    "flags": 256,
                    "start": 124,
                    "end": 155
                },
                "flags": 256,
                "start": 122,
                "end": 156
            },
            "flags": 128,
            "start": 122,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 159,
                        "start": 0,
                        "end": 164
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 164,
                        "end": 166
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 168,
                                    "start": 512,
                                    "end": 175
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 175,
                                    "end": 177
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 179,
                                    "end": 181
                                },
                                "flags": 256,
                                "start": 175,
                                "end": 181
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 181,
                                "end": 182
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 67109632,
                                            "start": 184,
                                            "end": 187
                                        },
                                        "flags": 256,
                                        "start": 182,
                                        "end": 188
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 189,
                                        "end": 190
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 191,
                                            "end": 191
                                        },
                                        "flags": 256,
                                        "start": 190,
                                        "end": 192
                                    },
                                    "flags": 0,
                                    "start": 188,
                                    "end": 192
                                },
                                "flags": 0,
                                "start": 182,
                                "end": 192
                            }
                        ],
                        "flags": 256,
                        "start": 168,
                        "end": 193
                    },
                    "flags": 256,
                    "start": 159,
                    "end": 193
                },
                "flags": 256,
                "start": 157,
                "end": 194
            },
            "flags": 128,
            "start": 157,
            "end": 195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 197,
                        "start": 0,
                        "end": 202
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 202,
                        "end": 204
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 206,
                                    "start": 512,
                                    "end": 213
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 213,
                                    "end": 215
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 213,
                                "end": 215
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 215,
                                "end": 216
                            }
                        ],
                        "flags": 256,
                        "start": 206,
                        "end": 217
                    },
                    "flags": 256,
                    "start": 197,
                    "end": 217
                },
                "flags": 256,
                "start": 195,
                "end": 218
            },
            "flags": 128,
            "start": 195,
            "end": 219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 221,
                        "start": 0,
                        "end": 226
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 226,
                        "end": 228
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 230,
                                    "start": 512,
                                    "end": 237
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 237,
                                    "end": 239
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 237,
                                "end": 239
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 239,
                                "end": 240
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 240,
                                    "end": 242
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 240,
                                "end": 242
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 242,
                                "end": 243
                            }
                        ],
                        "flags": 256,
                        "start": 230,
                        "end": 244
                    },
                    "flags": 256,
                    "start": 221,
                    "end": 244
                },
                "flags": 256,
                "start": 219,
                "end": 245
            },
            "flags": 128,
            "start": 219,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 248,
                        "start": 0,
                        "end": 253
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 253,
                        "end": 255
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 257,
                                    "start": 512,
                                    "end": 264
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 264,
                                    "end": 266
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 264,
                                "end": 266
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 266,
                                "end": 267
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 267,
                                        "end": 269
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 270,
                                        "end": 271
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 272,
                                            "end": 272
                                        },
                                        "flags": 256,
                                        "start": 271,
                                        "end": 273
                                    },
                                    "flags": 0,
                                    "start": 269,
                                    "end": 273
                                },
                                "flags": 0,
                                "start": 267,
                                "end": 273
                            }
                        ],
                        "flags": 256,
                        "start": 257,
                        "end": 274
                    },
                    "flags": 256,
                    "start": 248,
                    "end": 274
                },
                "flags": 256,
                "start": 246,
                "end": 275
            },
            "flags": 128,
            "start": 246,
            "end": 276
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 278,
                        "start": 0,
                        "end": 283
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 283,
                        "end": 285
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 287,
                                    "start": 512,
                                    "end": 294
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 294,
                                    "end": 296
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 294,
                                "end": 296
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 296,
                                "end": 297
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 299,
                                        "end": 300
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 301,
                                        "end": 302
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 303,
                                            "end": 303
                                        },
                                        "flags": 256,
                                        "start": 302,
                                        "end": 304
                                    },
                                    "flags": 0,
                                    "start": 300,
                                    "end": 304
                                },
                                "flags": 0,
                                "start": 297,
                                "end": 304
                            }
                        ],
                        "flags": 256,
                        "start": 287,
                        "end": 305
                    },
                    "flags": 256,
                    "start": 278,
                    "end": 305
                },
                "flags": 256,
                "start": 276,
                "end": 306
            },
            "flags": 128,
            "start": 276,
            "end": 307
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 309,
                        "start": 0,
                        "end": 314
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 314,
                        "end": 316
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 318,
                                    "start": 512,
                                    "end": 325
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 325,
                                    "end": 327
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 325,
                                "end": 327
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 327,
                                "end": 328
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 67109632,
                                            "start": 330,
                                            "end": 333
                                        },
                                        "flags": 256,
                                        "start": 328,
                                        "end": 334
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 335,
                                        "end": 336
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 337,
                                            "end": 337
                                        },
                                        "flags": 256,
                                        "start": 336,
                                        "end": 338
                                    },
                                    "flags": 0,
                                    "start": 334,
                                    "end": 338
                                },
                                "flags": 0,
                                "start": 328,
                                "end": 338
                            }
                        ],
                        "flags": 256,
                        "start": 318,
                        "end": 339
                    },
                    "flags": 256,
                    "start": 309,
                    "end": 339
                },
                "flags": 256,
                "start": 307,
                "end": 340
            },
            "flags": 128,
            "start": 307,
            "end": 341
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 343,
                        "start": 0,
                        "end": 348
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 348,
                        "end": 350
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 352,
                                    "start": 512,
                                    "end": 359
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 361,
                                        "end": 364
                                    },
                                    "flags": 256,
                                    "start": 359,
                                    "end": 365
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 367,
                                    "end": 369
                                },
                                "flags": 256,
                                "start": 359,
                                "end": 369
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 369,
                                "end": 370
                            }
                        ],
                        "flags": 256,
                        "start": 352,
                        "end": 371
                    },
                    "flags": 256,
                    "start": 343,
                    "end": 371
                },
                "flags": 256,
                "start": 341,
                "end": 372
            },
            "flags": 128,
            "start": 341,
            "end": 373
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 375,
                        "start": 0,
                        "end": 380
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 380,
                        "end": 382
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 384,
                                    "start": 512,
                                    "end": 391
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 393,
                                        "end": 396
                                    },
                                    "flags": 256,
                                    "start": 391,
                                    "end": 397
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 399,
                                    "end": 401
                                },
                                "flags": 256,
                                "start": 391,
                                "end": 401
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 401,
                                "end": 402
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 402,
                                    "end": 404
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 402,
                                "end": 404
                            }
                        ],
                        "flags": 256,
                        "start": 384,
                        "end": 405
                    },
                    "flags": 256,
                    "start": 375,
                    "end": 405
                },
                "flags": 256,
                "start": 373,
                "end": 406
            },
            "flags": 128,
            "start": 373,
            "end": 407
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 409,
                        "start": 0,
                        "end": 414
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 414,
                        "end": 416
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 418,
                                    "start": 512,
                                    "end": 425
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 427,
                                        "end": 430
                                    },
                                    "flags": 256,
                                    "start": 425,
                                    "end": 431
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 433,
                                    "end": 435
                                },
                                "flags": 256,
                                "start": 425,
                                "end": 435
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 435,
                                "end": 436
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 436,
                                        "end": 438
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 439,
                                        "end": 440
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 441,
                                            "end": 441
                                        },
                                        "flags": 256,
                                        "start": 440,
                                        "end": 442
                                    },
                                    "flags": 0,
                                    "start": 438,
                                    "end": 442
                                },
                                "flags": 0,
                                "start": 436,
                                "end": 442
                            }
                        ],
                        "flags": 256,
                        "start": 418,
                        "end": 443
                    },
                    "flags": 256,
                    "start": 409,
                    "end": 443
                },
                "flags": 256,
                "start": 407,
                "end": 444
            },
            "flags": 128,
            "start": 407,
            "end": 445
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 447,
                        "start": 0,
                        "end": 452
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 452,
                        "end": 454
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 456,
                                    "start": 512,
                                    "end": 463
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 465,
                                        "end": 468
                                    },
                                    "flags": 256,
                                    "start": 463,
                                    "end": 469
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 471,
                                    "end": 473
                                },
                                "flags": 256,
                                "start": 463,
                                "end": 473
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 473,
                                "end": 474
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 476,
                                        "end": 477
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 478,
                                        "end": 479
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 480,
                                            "end": 480
                                        },
                                        "flags": 256,
                                        "start": 479,
                                        "end": 481
                                    },
                                    "flags": 0,
                                    "start": 477,
                                    "end": 481
                                },
                                "flags": 0,
                                "start": 474,
                                "end": 481
                            }
                        ],
                        "flags": 256,
                        "start": 456,
                        "end": 482
                    },
                    "flags": 256,
                    "start": 447,
                    "end": 482
                },
                "flags": 256,
                "start": 445,
                "end": 483
            },
            "flags": 128,
            "start": 445,
            "end": 484
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 486,
                        "start": 0,
                        "end": 491
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 491,
                        "end": 493
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 495,
                                    "start": 512,
                                    "end": 502
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 504,
                                        "end": 507
                                    },
                                    "flags": 256,
                                    "start": 502,
                                    "end": 508
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 510,
                                    "end": 512
                                },
                                "flags": 256,
                                "start": 502,
                                "end": 512
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 512,
                                "end": 513
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 67109632,
                                            "start": 515,
                                            "end": 518
                                        },
                                        "flags": 256,
                                        "start": 513,
                                        "end": 519
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 520,
                                        "end": 521
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 522,
                                            "end": 522
                                        },
                                        "flags": 256,
                                        "start": 521,
                                        "end": 523
                                    },
                                    "flags": 0,
                                    "start": 519,
                                    "end": 523
                                },
                                "flags": 0,
                                "start": 513,
                                "end": 523
                            }
                        ],
                        "flags": 256,
                        "start": 495,
                        "end": 524
                    },
                    "flags": 256,
                    "start": 486,
                    "end": 524
                },
                "flags": 256,
                "start": 484,
                "end": 525
            },
            "flags": 128,
            "start": 484,
            "end": 526
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 528,
                        "start": 0,
                        "end": 533
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 533,
                        "end": 535
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 537,
                                    "start": 512,
                                    "end": 544
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 546,
                                        "end": 549
                                    },
                                    "flags": 256,
                                    "start": 544,
                                    "end": 550
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 544,
                                "end": 550
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 550,
                                "end": 551
                            }
                        ],
                        "flags": 256,
                        "start": 537,
                        "end": 552
                    },
                    "flags": 256,
                    "start": 528,
                    "end": 552
                },
                "flags": 256,
                "start": 526,
                "end": 553
            },
            "flags": 128,
            "start": 526,
            "end": 554
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 556,
                        "start": 0,
                        "end": 561
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 561,
                        "end": 563
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 565,
                                    "start": 512,
                                    "end": 572
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 574,
                                        "end": 577
                                    },
                                    "flags": 256,
                                    "start": 572,
                                    "end": 578
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 572,
                                "end": 578
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 578,
                                "end": 579
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 579,
                                    "end": 581
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 579,
                                "end": 581
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 581,
                                "end": 582
                            }
                        ],
                        "flags": 256,
                        "start": 565,
                        "end": 583
                    },
                    "flags": 256,
                    "start": 556,
                    "end": 583
                },
                "flags": 256,
                "start": 554,
                "end": 584
            },
            "flags": 128,
            "start": 554,
            "end": 585
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 587,
                        "start": 0,
                        "end": 592
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 592,
                        "end": 594
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 596,
                                    "start": 512,
                                    "end": 603
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 605,
                                        "end": 608
                                    },
                                    "flags": 256,
                                    "start": 603,
                                    "end": 609
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 603,
                                "end": 609
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 609,
                                "end": 610
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 610,
                                        "end": 612
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 613,
                                        "end": 614
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 615,
                                            "end": 615
                                        },
                                        "flags": 256,
                                        "start": 614,
                                        "end": 616
                                    },
                                    "flags": 0,
                                    "start": 612,
                                    "end": 616
                                },
                                "flags": 0,
                                "start": 610,
                                "end": 616
                            }
                        ],
                        "flags": 256,
                        "start": 596,
                        "end": 617
                    },
                    "flags": 256,
                    "start": 587,
                    "end": 617
                },
                "flags": 256,
                "start": 585,
                "end": 618
            },
            "flags": 128,
            "start": 585,
            "end": 619
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 621,
                        "start": 0,
                        "end": 626
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 626,
                        "end": 628
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 630,
                                    "start": 512,
                                    "end": 637
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 639,
                                        "end": 642
                                    },
                                    "flags": 256,
                                    "start": 637,
                                    "end": 643
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 637,
                                "end": 643
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 643,
                                "end": 644
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 646,
                                        "end": 647
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 648,
                                        "end": 649
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 650,
                                            "end": 650
                                        },
                                        "flags": 256,
                                        "start": 649,
                                        "end": 651
                                    },
                                    "flags": 0,
                                    "start": 647,
                                    "end": 651
                                },
                                "flags": 0,
                                "start": 644,
                                "end": 651
                            }
                        ],
                        "flags": 256,
                        "start": 630,
                        "end": 652
                    },
                    "flags": 256,
                    "start": 621,
                    "end": 652
                },
                "flags": 256,
                "start": 619,
                "end": 653
            },
            "flags": 128,
            "start": 619,
            "end": 654
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 656,
                        "start": 0,
                        "end": 661
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 661,
                        "end": 663
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 665,
                                    "start": 512,
                                    "end": 672
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 67109632,
                                        "start": 674,
                                        "end": 677
                                    },
                                    "flags": 256,
                                    "start": 672,
                                    "end": 678
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 672,
                                "end": 678
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 678,
                                "end": 679
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 67109632,
                                            "start": 681,
                                            "end": 684
                                        },
                                        "flags": 256,
                                        "start": 679,
                                        "end": 685
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 686,
                                        "end": 687
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 688,
                                            "end": 688
                                        },
                                        "flags": 256,
                                        "start": 687,
                                        "end": 689
                                    },
                                    "flags": 0,
                                    "start": 685,
                                    "end": 689
                                },
                                "flags": 0,
                                "start": 679,
                                "end": 689
                            }
                        ],
                        "flags": 256,
                        "start": 665,
                        "end": 690
                    },
                    "flags": 256,
                    "start": 656,
                    "end": 690
                },
                "flags": 256,
                "start": 654,
                "end": 691
            },
            "flags": 128,
            "start": 654,
            "end": 692
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 695,
                        "start": 0,
                        "end": 700
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 700,
                            "start": 0,
                            "end": 708
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 708,
                            "end": 710
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 708,
                        "end": 710
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 712,
                                    "start": 512,
                                    "end": 719
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 719,
                                    "end": 721
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 723,
                                    "end": 725
                                },
                                "flags": 256,
                                "start": 719,
                                "end": 725
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 725,
                                "end": 726
                            }
                        ],
                        "flags": 256,
                        "start": 712,
                        "end": 727
                    },
                    "flags": 256,
                    "start": 695,
                    "end": 727
                },
                "flags": 256,
                "start": 692,
                "end": 728
            },
            "flags": 128,
            "start": 692,
            "end": 729
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 731,
                        "start": 0,
                        "end": 736
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 736,
                            "start": 0,
                            "end": 744
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 744,
                            "end": 746
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 744,
                        "end": 746
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 748,
                                    "start": 512,
                                    "end": 755
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 755,
                                    "end": 757
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 755,
                                "end": 757
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 757,
                                "end": 758
                            }
                        ],
                        "flags": 256,
                        "start": 748,
                        "end": 759
                    },
                    "flags": 256,
                    "start": 731,
                    "end": 759
                },
                "flags": 256,
                "start": 729,
                "end": 760
            },
            "flags": 128,
            "start": 729,
            "end": 761
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 763,
                        "start": 0,
                        "end": 768
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 0,
                            "end": 776
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 776,
                            "end": 778
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 776,
                        "end": 778
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 780,
                                    "start": 512,
                                    "end": 787
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 201392131,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 67109632,
                                    "start": 787,
                                    "end": 791
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 793,
                                    "end": 795
                                },
                                "flags": 256,
                                "start": 787,
                                "end": 795
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 795,
                                "end": 796
                            }
                        ],
                        "flags": 256,
                        "start": 780,
                        "end": 797
                    },
                    "flags": 256,
                    "start": 763,
                    "end": 797
                },
                "flags": 256,
                "start": 761,
                "end": 798
            },
            "flags": 128,
            "start": 761,
            "end": 799
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 801,
                        "start": 0,
                        "end": 806
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 806,
                            "start": 0,
                            "end": 814
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 814,
                            "end": 816
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 814,
                        "end": 816
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 818,
                                    "start": 512,
                                    "end": 825
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 201392131,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 67109632,
                                    "start": 825,
                                    "end": 829
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 825,
                                "end": 829
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 829,
                                "end": 830
                            }
                        ],
                        "flags": 256,
                        "start": 818,
                        "end": 831
                    },
                    "flags": 256,
                    "start": 801,
                    "end": 831
                },
                "flags": 256,
                "start": 799,
                "end": 832
            },
            "flags": 128,
            "start": 799,
            "end": 833
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 836,
                        "start": 0,
                        "end": 841
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 841,
                        "end": 843
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 845,
                                    "start": 512,
                                    "end": 852
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 852,
                                    "end": 858
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 860,
                                    "end": 862
                                },
                                "flags": 256,
                                "start": 852,
                                "end": 862
                            }
                        ],
                        "flags": 256,
                        "start": 845,
                        "end": 863
                    },
                    "flags": 256,
                    "start": 836,
                    "end": 863
                },
                "flags": 256,
                "start": 833,
                "end": 864
            },
            "flags": 128,
            "start": 833,
            "end": 865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 868,
                        "start": 0,
                        "end": 873
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 873,
                        "end": 875
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 877,
                                    "start": 512,
                                    "end": 884
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 884,
                                    "end": 890
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 884,
                                "end": 890
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 890,
                                    "end": 893
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 890,
                                "end": 893
                            }
                        ],
                        "flags": 256,
                        "start": 877,
                        "end": 894
                    },
                    "flags": 256,
                    "start": 868,
                    "end": 894
                },
                "flags": 256,
                "start": 865,
                "end": 895
            },
            "flags": 128,
            "start": 865,
            "end": 896
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 899,
                        "start": 0,
                        "end": 904
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 904,
                        "end": 906
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 908,
                                    "start": 512,
                                    "end": 915
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 915,
                                    "end": 921
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 915,
                                "end": 921
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 921,
                                "end": 922
                            }
                        ],
                        "flags": 256,
                        "start": 908,
                        "end": 923
                    },
                    "flags": 256,
                    "start": 899,
                    "end": 923
                },
                "flags": 256,
                "start": 896,
                "end": 924
            },
            "flags": 128,
            "start": 896,
            "end": 925
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 927,
                        "start": 0,
                        "end": 932
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 932,
                        "end": 934
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 936,
                                    "start": 512,
                                    "end": 943
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 943,
                                    "end": 949
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 951,
                                    "end": 953
                                },
                                "flags": 256,
                                "start": 943,
                                "end": 953
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 953,
                                "end": 954
                            }
                        ],
                        "flags": 256,
                        "start": 936,
                        "end": 955
                    },
                    "flags": 256,
                    "start": 927,
                    "end": 955
                },
                "flags": 256,
                "start": 925,
                "end": 956
            },
            "flags": 128,
            "start": 925,
            "end": 957
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 959,
                        "start": 0,
                        "end": 964
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 964,
                        "end": 966
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 968,
                                    "start": 512,
                                    "end": 975
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 975,
                                    "end": 981
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 975,
                                "end": 981
                            }
                        ],
                        "flags": 256,
                        "start": 968,
                        "end": 982
                    },
                    "flags": 256,
                    "start": 959,
                    "end": 982
                },
                "flags": 256,
                "start": 957,
                "end": 983
            },
            "flags": 128,
            "start": 957,
            "end": 984
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 986,
                        "start": 0,
                        "end": 991
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 991,
                        "end": 993
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 995,
                                    "start": 512,
                                    "end": 1002
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 1002,
                                    "end": 1008
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1010,
                                    "end": 1012
                                },
                                "flags": 256,
                                "start": 1002,
                                "end": 1012
                            }
                        ],
                        "flags": 256,
                        "start": 995,
                        "end": 1013
                    },
                    "flags": 256,
                    "start": 986,
                    "end": 1013
                },
                "flags": 256,
                "start": 984,
                "end": 1014
            },
            "flags": 128,
            "start": 984,
            "end": 1015
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1018,
                        "start": 0,
                        "end": 1023
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 1023,
                        "end": 1025
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": {
                                    "kind": 8388716,
                                    "flags": 1027,
                                    "start": 512,
                                    "end": 1034
                                },
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 1034,
                                    "start": 512,
                                    "end": 1040
                                },
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 1040,
                                        "end": 1043
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 2048,
                                        "start": 1044,
                                        "end": 1045
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 1046,
                                            "end": 1046
                                        },
                                        "flags": 256,
                                        "start": 1045,
                                        "end": 1047
                                    },
                                    "flags": 2048,
                                    "start": 1043,
                                    "end": 1047
                                },
                                "flags": 2048,
                                "start": 1034,
                                "end": 1047
                            }
                        ],
                        "flags": 256,
                        "start": 1027,
                        "end": 1048
                    },
                    "flags": 256,
                    "start": 1018,
                    "end": 1048
                },
                "flags": 256,
                "start": 1015,
                "end": 1049
            },
            "flags": 128,
            "start": 1015,
            "end": 1050
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1100,
                        "start": 0,
                        "end": 1105
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 1105,
                        "end": 1107
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1109,
                                    "start": 512,
                                    "end": 1116
                                },
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 1116,
                                    "start": 512,
                                    "end": 1122
                                },
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1122,
                                    "end": 1124
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1116,
                                "end": 1124
                            }
                        ],
                        "flags": 256,
                        "start": 1109,
                        "end": 1125
                    },
                    "flags": 256,
                    "start": 1100,
                    "end": 1125
                },
                "flags": 256,
                "start": 1050,
                "end": 1126
            },
            "flags": 128,
            "start": 1050,
            "end": 1127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1130,
                        "start": 0,
                        "end": 1135
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 1135,
                        "end": 1137
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1139,
                                    "start": 512,
                                    "end": 1146
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 1146,
                                    "end": 1152
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1146,
                                "end": 1152
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 1152,
                                "end": 1153
                            }
                        ],
                        "flags": 256,
                        "start": 1139,
                        "end": 1154
                    },
                    "flags": 256,
                    "start": 1130,
                    "end": 1154
                },
                "flags": 256,
                "start": 1127,
                "end": 1155
            },
            "flags": 128,
            "start": 1127,
            "end": 1156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1158,
                        "start": 0,
                        "end": 1163
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 1163,
                        "end": 1165
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1167,
                                    "start": 512,
                                    "end": 1174
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 1174,
                                    "end": 1180
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1182,
                                    "end": 1184
                                },
                                "flags": 256,
                                "start": 1174,
                                "end": 1184
                            },
                            {
                                "kind": 281,
                                "flags": 768,
                                "start": 1184,
                                "end": 1185
                            }
                        ],
                        "flags": 256,
                        "start": 1167,
                        "end": 1186
                    },
                    "flags": 256,
                    "start": 1158,
                    "end": 1186
                },
                "flags": 256,
                "start": 1156,
                "end": 1187
            },
            "flags": 128,
            "start": 1156,
            "end": 1188
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1191,
                        "start": 0,
                        "end": 1196
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 1196,
                        "end": 1198
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1200,
                                    "start": 512,
                                    "end": 1207
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 1207,
                                    "end": 1213
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1207,
                                "end": 1213
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1213,
                                    "end": 1216
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1213,
                                "end": 1216
                            }
                        ],
                        "flags": 256,
                        "start": 1200,
                        "end": 1217
                    },
                    "flags": 256,
                    "start": 1191,
                    "end": 1217
                },
                "flags": 256,
                "start": 1188,
                "end": 1218
            },
            "flags": 128,
            "start": 1188,
            "end": 1219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1222,
                        "start": 0,
                        "end": 1227
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 1227,
                        "end": 1229
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1231,
                                    "start": 512,
                                    "end": 1238
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 768,
                                    "start": 1238,
                                    "end": 1240
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 768,
                                                    "start": 1244,
                                                    "end": 1245
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1244,
                                            "end": 1245
                                        },
                                        "flags": 256,
                                        "start": 1242,
                                        "end": 1246
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 1246,
                                        "start": 512,
                                        "end": 1248
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 1248,
                                        "end": 1250
                                    },
                                    "flags": 256,
                                    "start": 1242,
                                    "end": 1250
                                },
                                "flags": 256,
                                "start": 1238,
                                "end": 1250
                            }
                        ],
                        "flags": 256,
                        "start": 1231,
                        "end": 1251
                    },
                    "flags": 256,
                    "start": 1222,
                    "end": 1251
                },
                "flags": 256,
                "start": 1219,
                "end": 1252
            },
            "flags": 128,
            "start": 1219,
            "end": 1253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1256,
                        "start": 0,
                        "end": 1261
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1264,
                                    "start": 512,
                                    "end": 1271
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1271,
                                    "end": 1273
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1275,
                                    "end": 1277
                                },
                                "flags": 256,
                                "start": 1271,
                                "end": 1277
                            }
                        ],
                        "flags": 256,
                        "start": 1264,
                        "end": 1279
                    },
                    "flags": 256,
                    "start": 1256,
                    "end": 1279
                },
                "flags": 256,
                "start": 1253,
                "end": 1280
            },
            "flags": 128,
            "start": 1253,
            "end": 1281
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1284,
                        "start": 0,
                        "end": 1289
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1292,
                                    "start": 512,
                                    "end": 1299
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1299,
                                    "end": 1301
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1303,
                                    "end": 1305
                                },
                                "flags": 256,
                                "start": 1299,
                                "end": 1305
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 1305,
                                    "end": 1308
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1305,
                                "end": 1308
                            }
                        ],
                        "flags": 256,
                        "start": 1292,
                        "end": 1309
                    },
                    "flags": 256,
                    "start": 1284,
                    "end": 1309
                },
                "flags": 256,
                "start": 1281,
                "end": 1310
            },
            "flags": 128,
            "start": 1281,
            "end": 1311
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1314,
                        "start": 0,
                        "end": 1319
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1322,
                                    "start": 512,
                                    "end": 1329
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1329,
                                    "end": 1331
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1333,
                                    "end": 1335
                                },
                                "flags": 256,
                                "start": 1329,
                                "end": 1335
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 1335,
                                        "end": 1338
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 1339,
                                        "end": 1340
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 1341,
                                            "end": 1341
                                        },
                                        "flags": 256,
                                        "start": 1340,
                                        "end": 1342
                                    },
                                    "flags": 0,
                                    "start": 1338,
                                    "end": 1342
                                },
                                "flags": 0,
                                "start": 1335,
                                "end": 1342
                            }
                        ],
                        "flags": 256,
                        "start": 1322,
                        "end": 1343
                    },
                    "flags": 256,
                    "start": 1314,
                    "end": 1343
                },
                "flags": 256,
                "start": 1311,
                "end": 1344
            },
            "flags": 128,
            "start": 1311,
            "end": 1345
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1348,
                        "start": 0,
                        "end": 1353
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1356,
                                    "start": 512,
                                    "end": 1363
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1363,
                                    "end": 1365
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1363,
                                "end": 1365
                            }
                        ],
                        "flags": 256,
                        "start": 1356,
                        "end": 1367
                    },
                    "flags": 256,
                    "start": 1348,
                    "end": 1367
                },
                "flags": 256,
                "start": 1345,
                "end": 1368
            },
            "flags": 128,
            "start": 1345,
            "end": 1369
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1372,
                        "start": 0,
                        "end": 1377
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 1380,
                                    "start": 512,
                                    "end": 1387
                                },
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1387,
                                    "end": 1389
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1387,
                                "end": 1389
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 1389,
                                    "end": 1392
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 1389,
                                "end": 1392
                            }
                        ],
                        "flags": 256,
                        "start": 1380,
                        "end": 1394
                    },
                    "flags": 256,
                    "start": 1372,
                    "end": 1394
                },
                "flags": 256,
                "start": 1369,
                "end": 1395
            },
            "flags": 128,
            "start": 1369,
            "end": 1396
        }
    ],
    "isModule": false,
    "text": "class x { static #foo = bar }\n\n(class C { static a = 0;});\n(class C { static a = 0; b});\n(class C { static a = 0; b(){}});\n(class C { static a = 0; *b(){}});\n(class C { static a = 0; ['b'](){}});\n(class C { static a;});\n(class C { static a; b;});\n(class C { static a; b(){}});\n(class C { static a; *b(){}});\n(class C { static a; ['b'](){}});\n(class C { static ['a'] = 0;});\n(class C { static ['a'] = 0; b});\n(class C { static ['a'] = 0; b(){}});\n(class C { static ['a'] = 0; *b(){}});\n(class C { static ['a'] = 0; ['b'](){}});\n(class C { static ['a'];});\n(class C { static ['a']; b;});\n(class C { static ['a']; b(){}});\n(class C { static ['a']; *b(){}});\n(class C { static ['a']; ['b'](){}});\n\n(class extends x { static 0 = 0;});\n(class extends x { static 0;});\n(class extends x { static 'a' = 0;});\n(class extends x { static 'a';});\n\n(class C { static yield = 0});\n\n(class C { static yield\n a});\n\n(class C { static async;});\n(class C { static async = 0;});\n(class C { static async});\n(class C { static async = 0});\n\n(class C { static async\n a(){}});  // a field named async, and a method named a.\n\n(class C { static async\na});\n\n(class C { static await;});\n(class C { static await = 0;});\n\n(class C { static await\n a});\n\n(class C { static c = [c] = c});\n\n(class  { static a = 0\n});\n\n(class  { static a = 0\n b});\n\n(class  { static a = 0\n b(){}});\n\n(class  { static a\n});\n\n(class  { static a\n b\n});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1396
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

