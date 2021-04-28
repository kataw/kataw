# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js

(class C { constructor() {} });

(class C { static constructor() {} });

(class C { static get constructor() {} });

(class C { static set constructor(_) {} });

(class C { static *constructor() {} });

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
                        "flags": 0,
                        "start": 2,
                        "end": 7
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
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
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 23
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 2048,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 32,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "flags": 2048,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 2048,
                                "start": 11,
                                "end": 28
                            }
                        ],
                        "flags": 32,
                        "start": 11,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
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
                        "flags": 0,
                        "start": 35,
                        "end": 40
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 40,
                        "end": 42
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
                                    "flags": 64,
                                    "start": 44,
                                    "end": 51
                                },
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 51,
                                        "end": 63
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 64,
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
                                            "flags": 32,
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "start": 65,
                                        "end": 68
                                    },
                                    "flags": 0,
                                    "start": 63,
                                    "end": 68
                                },
                                "flags": 0,
                                "start": 51,
                                "end": 68
                            }
                        ],
                        "flags": 32,
                        "start": 44,
                        "end": 70
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 70
                },
                "flags": 32,
                "start": 32,
                "end": 71
            },
            "flags": 16,
            "start": 32,
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
                        "flags": 0,
                        "start": 75,
                        "end": 80
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
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
                                "staticKeyword": {
                                    "kind": 8388716,
                                    "flags": 64,
                                    "start": 84,
                                    "end": 91
                                },
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 91,
                                    "end": 95
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 95,
                                        "end": 107
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1024,
                                        "start": 108,
                                        "end": 109
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 32,
                                            "start": 111,
                                            "end": 111
                                        },
                                        "flags": 32,
                                        "start": 109,
                                        "end": 112
                                    },
                                    "flags": 1024,
                                    "start": 107,
                                    "end": 112
                                },
                                "flags": 1024,
                                "start": 91,
                                "end": 112
                            }
                        ],
                        "flags": 32,
                        "start": 84,
                        "end": 114
                    },
                    "flags": 32,
                    "start": 75,
                    "end": 114
                },
                "flags": 32,
                "start": 72,
                "end": 115
            },
            "flags": 16,
            "start": 72,
            "end": 116
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
                        "flags": 0,
                        "start": 119,
                        "end": 124
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 124,
                        "end": 126
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
                                    "flags": 64,
                                    "start": 128,
                                    "end": 135
                                },
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 135,
                                    "end": 139
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 139,
                                        "end": 151
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
                                                    "flags": 96,
                                                    "start": 152,
                                                    "end": 153
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 152,
                                                "end": 153
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 152,
                                        "end": 154
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 32,
                                            "start": 156,
                                            "end": 156
                                        },
                                        "flags": 32,
                                        "start": 154,
                                        "end": 157
                                    },
                                    "flags": 512,
                                    "start": 151,
                                    "end": 157
                                },
                                "flags": 512,
                                "start": 135,
                                "end": 157
                            }
                        ],
                        "flags": 32,
                        "start": 128,
                        "end": 159
                    },
                    "flags": 32,
                    "start": 119,
                    "end": 159
                },
                "flags": 32,
                "start": 116,
                "end": 160
            },
            "flags": 16,
            "start": 116,
            "end": 161
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
                        "flags": 0,
                        "start": 164,
                        "end": 169
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 169,
                        "end": 171
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
                                    "flags": 64,
                                    "start": 173,
                                    "end": 180
                                },
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 182,
                                        "end": 193
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 194,
                                        "end": 195
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 32,
                                            "start": 197,
                                            "end": 197
                                        },
                                        "flags": 32,
                                        "start": 195,
                                        "end": 198
                                    },
                                    "flags": 0,
                                    "start": 193,
                                    "end": 198
                                },
                                "flags": 0,
                                "start": 180,
                                "end": 198
                            }
                        ],
                        "flags": 32,
                        "start": 173,
                        "end": 200
                    },
                    "flags": 32,
                    "start": 164,
                    "end": 200
                },
                "flags": 32,
                "start": 161,
                "end": 201
            },
            "flags": 16,
            "start": 161,
            "end": 202
        }
    ],
    "isModule": false,
    "text": "\n(class C { constructor() {} });\n\n(class C { static constructor() {} });\n\n(class C { static get constructor() {} });\n\n(class C { static set constructor(_) {} });\n\n(class C { static *constructor() {} });\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 203
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

