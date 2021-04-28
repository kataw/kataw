# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js

(class C { get constructor() {}});

(class C {get constructor(_) {} });

(class C { get 'constructor'() {} });

(class C { get c\\u006fnstructor() {} });

(class C { get 'c\\u006fnstructor'() {} });

(class C { get 'c\\u006fnstructor'(_) {} });

(class C { *'c\\u006fnstructor'() {} });

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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 2,
                        "start": 0,
                        "end": 7
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 7,
                        "end": 9
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
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 11,
                                    "start": 512,
                                    "end": 15
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 768,
                                        "start": 15,
                                        "end": 27
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 24576,
                                        "start": 28,
                                        "end": 29
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
                                            "start": 31,
                                            "end": 31
                                        },
                                        "flags": 256,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "flags": 24576,
                                    "start": 27,
                                    "end": 32
                                },
                                "flags": 24576,
                                "start": 11,
                                "end": 32
                            }
                        ],
                        "flags": 256,
                        "start": 11,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 35
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
                        "flags": 38,
                        "start": 0,
                        "end": 43
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 43,
                        "end": 45
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
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 47,
                                    "start": 512,
                                    "end": 50
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 768,
                                        "start": 50,
                                        "end": 62
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
                                                    "text": "_",
                                                    "rawText": "_",
                                                    "flags": 768,
                                                    "start": 63,
                                                    "end": 64
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 63,
                                                "end": 64
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 24832,
                                        "start": 63,
                                        "end": 65
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
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 256,
                                        "start": 65,
                                        "end": 68
                                    },
                                    "flags": 24576,
                                    "start": 62,
                                    "end": 68
                                },
                                "flags": 24576,
                                "start": 47,
                                "end": 68
                            }
                        ],
                        "flags": 256,
                        "start": 47,
                        "end": 70
                    },
                    "flags": 256,
                    "start": 38,
                    "end": 70
                },
                "flags": 256,
                "start": 35,
                "end": 71
            },
            "flags": 128,
            "start": 35,
            "end": 72
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
                        "flags": 75,
                        "start": 0,
                        "end": 80
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 80,
                        "end": 82
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
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 84,
                                    "start": 512,
                                    "end": 88
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 67109632,
                                        "start": 88,
                                        "end": 102
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 24576,
                                        "start": 103,
                                        "end": 104
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
                                            "start": 106,
                                            "end": 106
                                        },
                                        "flags": 256,
                                        "start": 104,
                                        "end": 107
                                    },
                                    "flags": 24576,
                                    "start": 102,
                                    "end": 107
                                },
                                "flags": 24576,
                                "start": 84,
                                "end": 107
                            }
                        ],
                        "flags": 256,
                        "start": 84,
                        "end": 109
                    },
                    "flags": 256,
                    "start": 75,
                    "end": 109
                },
                "flags": 256,
                "start": 72,
                "end": 110
            },
            "flags": 128,
            "start": 72,
            "end": 111
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
                        "flags": 114,
                        "start": 0,
                        "end": 119
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 119,
                        "end": 121
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 768,
                                    "start": 127,
                                    "end": 129
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 123,
                                "end": 129
                            }
                        ],
                        "flags": 256,
                        "start": 123,
                        "end": 129
                    },
                    "flags": 256,
                    "start": 114,
                    "end": 129
                },
                "flags": 256,
                "start": 111,
                "end": 129
            },
            "flags": 128,
            "start": 111,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "onstructor",
                    "rawText": "c",
                    "flags": 768,
                    "start": 130,
                    "end": 145
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 146,
                    "end": 146
                },
                "flags": 256,
                "start": 130,
                "end": 147
            },
            "flags": 128,
            "start": 130,
            "end": 147
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 149,
                "end": 149
            },
            "flags": 128,
            "start": 147,
            "end": 150
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 153,
            "end": 154
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
                        "flags": 157,
                        "start": 0,
                        "end": 162
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 162,
                        "end": 164
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
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 166,
                                    "start": 512,
                                    "end": 170
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "c\\u006fnstructor",
                                        "rawText": "c\\u006fnstructor",
                                        "flags": 67109632,
                                        "start": 170,
                                        "end": 190
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 8192,
                                        "start": 191,
                                        "end": 192
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
                                            "start": 194,
                                            "end": 194
                                        },
                                        "flags": 256,
                                        "start": 192,
                                        "end": 195
                                    },
                                    "flags": 8192,
                                    "start": 190,
                                    "end": 195
                                },
                                "flags": 8192,
                                "start": 166,
                                "end": 195
                            }
                        ],
                        "flags": 256,
                        "start": 166,
                        "end": 197
                    },
                    "flags": 256,
                    "start": 157,
                    "end": 197
                },
                "flags": 256,
                "start": 154,
                "end": 198
            },
            "flags": 128,
            "start": 154,
            "end": 199
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
                        "flags": 202,
                        "start": 0,
                        "end": 207
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 207,
                        "end": 209
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
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 211,
                                    "start": 512,
                                    "end": 215
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "c\\u006fnstructor",
                                        "rawText": "c\\u006fnstructor",
                                        "flags": 67109632,
                                        "start": 215,
                                        "end": 235
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
                                                    "text": "_",
                                                    "rawText": "_",
                                                    "flags": 768,
                                                    "start": 236,
                                                    "end": 237
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 236,
                                                "end": 237
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 8448,
                                        "start": 236,
                                        "end": 238
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
                                            "start": 240,
                                            "end": 240
                                        },
                                        "flags": 256,
                                        "start": 238,
                                        "end": 241
                                    },
                                    "flags": 8192,
                                    "start": 235,
                                    "end": 241
                                },
                                "flags": 8192,
                                "start": 211,
                                "end": 241
                            }
                        ],
                        "flags": 256,
                        "start": 211,
                        "end": 243
                    },
                    "flags": 256,
                    "start": 202,
                    "end": 243
                },
                "flags": 256,
                "start": 199,
                "end": 244
            },
            "flags": 128,
            "start": 199,
            "end": 245
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
                                        "kind": 201392131,
                                        "text": "c\\u006fnstructor",
                                        "rawText": "c\\u006fnstructor",
                                        "flags": 67109632,
                                        "start": 259,
                                        "end": 278
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 279,
                                        "end": 280
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
                                            "start": 282,
                                            "end": 282
                                        },
                                        "flags": 256,
                                        "start": 280,
                                        "end": 283
                                    },
                                    "flags": 0,
                                    "start": 278,
                                    "end": 283
                                },
                                "flags": 0,
                                "start": 257,
                                "end": 283
                            }
                        ],
                        "flags": 256,
                        "start": 257,
                        "end": 285
                    },
                    "flags": 256,
                    "start": 248,
                    "end": 285
                },
                "flags": 256,
                "start": 245,
                "end": 286
            },
            "flags": 128,
            "start": 245,
            "end": 287
        }
    ],
    "isModule": false,
    "text": "\n(class C { get constructor() {}});\n\n(class C {get constructor(_) {} });\n\n(class C { get 'constructor'() {} });\n\n(class C { get c\\\\u006fnstructor() {} });\n\n(class C { get 'c\\\\u006fnstructor'() {} });\n\n(class C { get 'c\\\\u006fnstructor'(_) {} });\n\n(class C { *'c\\\\u006fnstructor'() {} });\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 288
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Class constructor may not be a accessor - start: 27, end: 28
✖ Class constructor may not be a accessor - start: 62, end: 63
✖ A 'get' accessor cannot have parameters. - start: 63, end: 64
✖ Class constructor may not be a accessor - start: 102, end: 103
✖ Invalid hexadecimal escape sequence - start: 127, end: 129
✖ Invalid hexadecimal escape sequence - start: 129, end: 129
✖ Statement expected - start: 129, end: 130
✖ Statement expected - start: 150, end: 152
✖ Statement expected - start: 152, end: 153
✖ A 'get' accessor cannot have parameters. - start: 236, end: 237

```

