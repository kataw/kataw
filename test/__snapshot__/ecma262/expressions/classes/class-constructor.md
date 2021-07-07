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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 7
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 23
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 2048,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 25
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
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "flags": 2048,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 28
                                    },
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 28
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 28
                        },
                        "flags": 9,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 30
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 33,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 40
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 42
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 51
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 63
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 2048,
                                            "transformFlags": 0,
                                            "start": 64,
                                            "end": 65
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
                                                "start": 67,
                                                "end": 67
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 68
                                        },
                                        "flags": 2048,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 68
                                    },
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 68
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 68
                        },
                        "flags": 42,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 70
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 70
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 33,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 80
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 82
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 91
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 95
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 107
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 3072,
                                            "transformFlags": 0,
                                            "start": 108,
                                            "end": 109
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
                                                "start": 111,
                                                "end": 111
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 109,
                                            "end": 112
                                        },
                                        "flags": 3072,
                                        "transformFlags": 0,
                                        "start": 107,
                                        "end": 112
                                    },
                                    "flags": 3072,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 112
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 112
                        },
                        "flags": 82,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 114
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 114
                },
                "flags": 72,
                "transformFlags": 0,
                "start": 33,
                "end": 115
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 124
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 126
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 128,
                                        "end": 135
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 135,
                                        "end": 139
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 139,
                                            "end": 151
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "_",
                                                    "rawText": "_",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 152,
                                                    "end": 153
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2656,
                                            "transformFlags": 0,
                                            "start": 152,
                                            "end": 154
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
                                                "start": 156,
                                                "end": 156
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 154,
                                            "end": 157
                                        },
                                        "flags": 2560,
                                        "transformFlags": 0,
                                        "start": 151,
                                        "end": 157
                                    },
                                    "flags": 2560,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 157
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 128,
                            "end": 157
                        },
                        "flags": 126,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 159
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 159
                },
                "flags": 116,
                "transformFlags": 0,
                "start": 33,
                "end": 160
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 164,
                        "end": 169
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 169,
                        "end": 171
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 180
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 180,
                                        "end": 182
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "constructor",
                                            "rawText": "constructor",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 182,
                                            "end": 193
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 194,
                                            "end": 195
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
                                                "start": 197,
                                                "end": 197
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 195,
                                            "end": 198
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 193,
                                        "end": 198
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 180,
                                    "end": 198
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 173,
                            "end": 198
                        },
                        "flags": 171,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 200
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 200
                },
                "flags": 161,
                "transformFlags": 0,
                "start": 33,
                "end": 201
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 161,
            "end": 202
        }
    ],
    "isModule": false,
    "source": "\n(class C { constructor() {} });\n\n(class C { static constructor() {} });\n\n(class C { static get constructor() {} });\n\n(class C { static set constructor(_) {} });\n\n(class C { static *constructor() {} });\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 203
}
```

### Printed

```javascript
(class C {
    constructor() {}
  });
(class C {
    static constructor() {}
  });

(class C {
    static get constructor() {}
  });

(class C {
    static set constructor(_) {}
  });

(class C {
    static *constructor() {}
  });

```

### Diagnostics

```javascript
✔ No errors
```

