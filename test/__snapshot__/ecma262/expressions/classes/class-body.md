# Kataw parser test case

## Input

`````js
(class { ;});
(class { ;;});
(class { m() {}});
(class { m() {};});
(class { ; m() {}});
(class { m() {}; n(x) {}});
(class { get x() {}});
(class { set x(v) {}});
(class { get() {}});
(class { set() {}});
(class { *g() {}});
(class { *g() {};});
(class { ; *g() {}});
(class { *g() {}; *h(x) {}});
(class { async *x(){}});
(class { static() {}});
(class { get static() {}});
(class { set static(v) {}});
(class { static m() {}});
(class { static get x() {}});
(class { static set x(v) {}});
(class { static get() {}});
(class { static set() {}});
(class { static static() {}});
(class { static get static() {}});
(class { static set static(v) {}});
(class { *static() {}});
(class { static *static() {}});
(class { *get() {}});
(class { *set() {}});
(class { static *g() {}});
(class { async(){}});
(class { *async(){}});
(class { static async(){}});
(class { static *async(){}});
(class { static async *x(){}});
(class { static async x(){}});
(class { static async(){}});
(class { static *async(){}});
(class { async x(){}});
(class { async 0(){}});
(class { async get(){}});
(class { async set(){}});
(class { async static(){}});
(class { async async(){}});
(class { async(){}});
(class { *async(){}});
(class { get 42.5() {}});
(class { set static(v) {}});
(class { static this() {}});
(class { static get class() {}});
(class { static set 42.5(v) {}});
(class { *const() {}});
(class { static *"str"() {}});
(class C { true() {}});
(class C { get false() {}});
(class C { set function(v) {}});
(class C { static if() {}});
(class C { static get let() {}});
(class C { static set get(v) {}});
(class C { *set() {}});
(class C { static *static() {}});

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
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 10
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
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
                        "start": 15,
                        "end": 20
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 24
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 25
                                }
                            ],
                            "flags": 32,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 20,
                        "start": 32,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 26
                },
                "flags": 32,
                "start": 13,
                "end": 27
            },
            "flags": 16,
            "start": 13,
            "end": 28
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
                        "start": 30,
                        "end": 35
                    },
                    "name": null,
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
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 96,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "start": 41,
                                            "end": 44
                                        },
                                        "flags": 0,
                                        "start": 39,
                                        "end": 44
                                    },
                                    "flags": 0,
                                    "start": 37,
                                    "end": 44
                                }
                            ],
                            "flags": 32,
                            "start": 37,
                            "end": 44
                        },
                        "flags": 35,
                        "start": 32,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 45
                },
                "flags": 32,
                "start": 28,
                "end": 46
            },
            "flags": 16,
            "start": 28,
            "end": 47
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
                        "start": 49,
                        "end": 54
                    },
                    "name": null,
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
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 96,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 62,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "start": 60,
                                            "end": 63
                                        },
                                        "flags": 0,
                                        "start": 58,
                                        "end": 63
                                    },
                                    "flags": 0,
                                    "start": 56,
                                    "end": 63
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 63,
                                    "end": 64
                                }
                            ],
                            "flags": 32,
                            "start": 56,
                            "end": 64
                        },
                        "flags": 54,
                        "start": 32,
                        "end": 65
                    },
                    "flags": 32,
                    "start": 49,
                    "end": 65
                },
                "flags": 32,
                "start": 47,
                "end": 66
            },
            "flags": 16,
            "start": 47,
            "end": 67
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
                        "start": 69,
                        "end": 74
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 76,
                                    "end": 78
                                },
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
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 96,
                                            "start": 78,
                                            "end": 80
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 81,
                                            "end": 82
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 84,
                                                "end": 84
                                            },
                                            "flags": 32,
                                            "start": 82,
                                            "end": 85
                                        },
                                        "flags": 0,
                                        "start": 80,
                                        "end": 85
                                    },
                                    "flags": 0,
                                    "start": 78,
                                    "end": 85
                                }
                            ],
                            "flags": 32,
                            "start": 76,
                            "end": 85
                        },
                        "flags": 74,
                        "start": 32,
                        "end": 86
                    },
                    "flags": 32,
                    "start": 69,
                    "end": 86
                },
                "flags": 32,
                "start": 67,
                "end": 87
            },
            "flags": 16,
            "start": 67,
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
                        "flags": 64,
                        "start": 90,
                        "end": 95
                    },
                    "name": null,
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
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 96,
                                            "start": 97,
                                            "end": 99
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 100,
                                            "end": 101
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 103,
                                                "end": 103
                                            },
                                            "flags": 32,
                                            "start": 101,
                                            "end": 104
                                        },
                                        "flags": 0,
                                        "start": 99,
                                        "end": 104
                                    },
                                    "flags": 0,
                                    "start": 97,
                                    "end": 104
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 104,
                                    "end": 105
                                },
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
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 96,
                                            "start": 105,
                                            "end": 107
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
                                                    "start": 108,
                                                    "end": 109
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "start": 108,
                                            "end": 110
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 112,
                                                "end": 112
                                            },
                                            "flags": 32,
                                            "start": 110,
                                            "end": 113
                                        },
                                        "flags": 0,
                                        "start": 107,
                                        "end": 113
                                    },
                                    "flags": 0,
                                    "start": 105,
                                    "end": 113
                                }
                            ],
                            "flags": 32,
                            "start": 97,
                            "end": 113
                        },
                        "flags": 95,
                        "start": 32,
                        "end": 114
                    },
                    "flags": 32,
                    "start": 90,
                    "end": 114
                },
                "flags": 32,
                "start": 88,
                "end": 115
            },
            "flags": 16,
            "start": 88,
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
                        "start": 118,
                        "end": 123
                    },
                    "name": null,
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 125,
                                        "end": 129
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 129,
                                            "end": 131
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 135,
                                                "end": 135
                                            },
                                            "flags": 32,
                                            "start": 133,
                                            "end": 136
                                        },
                                        "flags": 1024,
                                        "start": 131,
                                        "end": 136
                                    },
                                    "flags": 1024,
                                    "start": 125,
                                    "end": 136
                                }
                            ],
                            "flags": 32,
                            "start": 125,
                            "end": 136
                        },
                        "flags": 123,
                        "start": 32,
                        "end": 137
                    },
                    "flags": 32,
                    "start": 118,
                    "end": 137
                },
                "flags": 32,
                "start": 116,
                "end": 138
            },
            "flags": 16,
            "start": 116,
            "end": 139
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
                        "start": 141,
                        "end": 146
                    },
                    "name": null,
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
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 148,
                                        "end": 152
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 152,
                                            "end": 154
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 155,
                                                    "end": 156
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 155,
                                            "end": 157
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 159,
                                                "end": 159
                                            },
                                            "flags": 32,
                                            "start": 157,
                                            "end": 160
                                        },
                                        "flags": 512,
                                        "start": 154,
                                        "end": 160
                                    },
                                    "flags": 512,
                                    "start": 148,
                                    "end": 160
                                }
                            ],
                            "flags": 32,
                            "start": 148,
                            "end": 160
                        },
                        "flags": 146,
                        "start": 32,
                        "end": 161
                    },
                    "flags": 32,
                    "start": 141,
                    "end": 161
                },
                "flags": 32,
                "start": 139,
                "end": 162
            },
            "flags": 16,
            "start": 139,
            "end": 163
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
                        "start": 165,
                        "end": 170
                    },
                    "name": null,
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
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 172,
                                            "end": 176
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 177,
                                            "end": 178
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 180,
                                                "end": 180
                                            },
                                            "flags": 32,
                                            "start": 178,
                                            "end": 181
                                        },
                                        "flags": 0,
                                        "start": 176,
                                        "end": 181
                                    },
                                    "flags": 0,
                                    "start": 172,
                                    "end": 181
                                }
                            ],
                            "flags": 32,
                            "start": 172,
                            "end": 181
                        },
                        "flags": 170,
                        "start": 32,
                        "end": 182
                    },
                    "flags": 32,
                    "start": 165,
                    "end": 182
                },
                "flags": 32,
                "start": 163,
                "end": 183
            },
            "flags": 16,
            "start": 163,
            "end": 184
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
                        "start": 186,
                        "end": 191
                    },
                    "name": null,
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
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 96,
                                            "start": 193,
                                            "end": 197
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 198,
                                            "end": 199
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 201,
                                                "end": 201
                                            },
                                            "flags": 32,
                                            "start": 199,
                                            "end": 202
                                        },
                                        "flags": 0,
                                        "start": 197,
                                        "end": 202
                                    },
                                    "flags": 0,
                                    "start": 193,
                                    "end": 202
                                }
                            ],
                            "flags": 32,
                            "start": 193,
                            "end": 202
                        },
                        "flags": 191,
                        "start": 32,
                        "end": 203
                    },
                    "flags": 32,
                    "start": 186,
                    "end": 203
                },
                "flags": 32,
                "start": 184,
                "end": 204
            },
            "flags": 16,
            "start": 184,
            "end": 205
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
                        "start": 207,
                        "end": 212
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 214,
                                        "end": 216
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 216,
                                            "end": 217
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 218,
                                            "end": 219
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 221,
                                                "end": 221
                                            },
                                            "flags": 32,
                                            "start": 219,
                                            "end": 222
                                        },
                                        "flags": 0,
                                        "start": 217,
                                        "end": 222
                                    },
                                    "flags": 0,
                                    "start": 214,
                                    "end": 222
                                }
                            ],
                            "flags": 32,
                            "start": 214,
                            "end": 222
                        },
                        "flags": 212,
                        "start": 32,
                        "end": 223
                    },
                    "flags": 32,
                    "start": 207,
                    "end": 223
                },
                "flags": 32,
                "start": 205,
                "end": 224
            },
            "flags": 16,
            "start": 205,
            "end": 225
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
                        "start": 227,
                        "end": 232
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 234,
                                        "end": 236
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 236,
                                            "end": 237
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 238,
                                            "end": 239
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 241,
                                                "end": 241
                                            },
                                            "flags": 32,
                                            "start": 239,
                                            "end": 242
                                        },
                                        "flags": 0,
                                        "start": 237,
                                        "end": 242
                                    },
                                    "flags": 0,
                                    "start": 234,
                                    "end": 242
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 242,
                                    "end": 243
                                }
                            ],
                            "flags": 32,
                            "start": 234,
                            "end": 243
                        },
                        "flags": 232,
                        "start": 32,
                        "end": 244
                    },
                    "flags": 32,
                    "start": 227,
                    "end": 244
                },
                "flags": 32,
                "start": 225,
                "end": 245
            },
            "flags": 16,
            "start": 225,
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
                        "flags": 64,
                        "start": 248,
                        "end": 253
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 255,
                                    "end": 257
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 257,
                                        "end": 259
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 259,
                                            "end": 260
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 261,
                                            "end": 262
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 264,
                                                "end": 264
                                            },
                                            "flags": 32,
                                            "start": 262,
                                            "end": 265
                                        },
                                        "flags": 0,
                                        "start": 260,
                                        "end": 265
                                    },
                                    "flags": 0,
                                    "start": 257,
                                    "end": 265
                                }
                            ],
                            "flags": 32,
                            "start": 255,
                            "end": 265
                        },
                        "flags": 253,
                        "start": 32,
                        "end": 266
                    },
                    "flags": 32,
                    "start": 248,
                    "end": 266
                },
                "flags": 32,
                "start": 246,
                "end": 267
            },
            "flags": 16,
            "start": 246,
            "end": 268
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
                        "start": 270,
                        "end": 275
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 277,
                                        "end": 279
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 279,
                                            "end": 280
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 281,
                                            "end": 282
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 284,
                                                "end": 284
                                            },
                                            "flags": 32,
                                            "start": 282,
                                            "end": 285
                                        },
                                        "flags": 0,
                                        "start": 280,
                                        "end": 285
                                    },
                                    "flags": 0,
                                    "start": 277,
                                    "end": 285
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 285,
                                    "end": 286
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 286,
                                        "end": 288
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "h",
                                            "rawText": "h",
                                            "flags": 96,
                                            "start": 288,
                                            "end": 289
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
                                                    "start": 290,
                                                    "end": 291
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "start": 290,
                                            "end": 292
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 294,
                                                "end": 294
                                            },
                                            "flags": 32,
                                            "start": 292,
                                            "end": 295
                                        },
                                        "flags": 0,
                                        "start": 289,
                                        "end": 295
                                    },
                                    "flags": 0,
                                    "start": 286,
                                    "end": 295
                                }
                            ],
                            "flags": 32,
                            "start": 277,
                            "end": 295
                        },
                        "flags": 275,
                        "start": 32,
                        "end": 296
                    },
                    "flags": 32,
                    "start": 270,
                    "end": 296
                },
                "flags": 32,
                "start": 268,
                "end": 297
            },
            "flags": 16,
            "start": 268,
            "end": 298
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
                        "start": 300,
                        "end": 305
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 307,
                                        "end": 313
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 313,
                                        "end": 315
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 315,
                                            "end": 316
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "start": 317,
                                            "end": 318
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 319,
                                                "end": 319
                                            },
                                            "flags": 32,
                                            "start": 318,
                                            "end": 320
                                        },
                                        "flags": 384,
                                        "start": 316,
                                        "end": 320
                                    },
                                    "flags": 384,
                                    "start": 307,
                                    "end": 320
                                }
                            ],
                            "flags": 32,
                            "start": 307,
                            "end": 320
                        },
                        "flags": 305,
                        "start": 32,
                        "end": 321
                    },
                    "flags": 32,
                    "start": 300,
                    "end": 321
                },
                "flags": 32,
                "start": 298,
                "end": 322
            },
            "flags": 16,
            "start": 298,
            "end": 323
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
                        "start": 325,
                        "end": 330
                    },
                    "name": null,
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
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 332,
                                            "end": 339
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 340,
                                            "end": 341
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 343,
                                                "end": 343
                                            },
                                            "flags": 32,
                                            "start": 341,
                                            "end": 344
                                        },
                                        "flags": 0,
                                        "start": 339,
                                        "end": 344
                                    },
                                    "flags": 0,
                                    "start": 332,
                                    "end": 344
                                }
                            ],
                            "flags": 32,
                            "start": 332,
                            "end": 344
                        },
                        "flags": 330,
                        "start": 32,
                        "end": 345
                    },
                    "flags": 32,
                    "start": 325,
                    "end": 345
                },
                "flags": 32,
                "start": 323,
                "end": 346
            },
            "flags": 16,
            "start": 323,
            "end": 347
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
                        "start": 349,
                        "end": 354
                    },
                    "name": null,
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 356,
                                        "end": 360
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 360,
                                            "end": 367
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 368,
                                            "end": 369
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 371,
                                                "end": 371
                                            },
                                            "flags": 32,
                                            "start": 369,
                                            "end": 372
                                        },
                                        "flags": 1024,
                                        "start": 367,
                                        "end": 372
                                    },
                                    "flags": 1024,
                                    "start": 356,
                                    "end": 372
                                }
                            ],
                            "flags": 32,
                            "start": 356,
                            "end": 372
                        },
                        "flags": 354,
                        "start": 32,
                        "end": 373
                    },
                    "flags": 32,
                    "start": 349,
                    "end": 373
                },
                "flags": 32,
                "start": 347,
                "end": 374
            },
            "flags": 16,
            "start": 347,
            "end": 375
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
                        "start": 377,
                        "end": 382
                    },
                    "name": null,
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
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 384,
                                        "end": 388
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 388,
                                            "end": 395
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 396,
                                                    "end": 397
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 396,
                                            "end": 398
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 400,
                                                "end": 400
                                            },
                                            "flags": 32,
                                            "start": 398,
                                            "end": 401
                                        },
                                        "flags": 512,
                                        "start": 395,
                                        "end": 401
                                    },
                                    "flags": 512,
                                    "start": 384,
                                    "end": 401
                                }
                            ],
                            "flags": 32,
                            "start": 384,
                            "end": 401
                        },
                        "flags": 382,
                        "start": 32,
                        "end": 402
                    },
                    "flags": 32,
                    "start": 377,
                    "end": 402
                },
                "flags": 32,
                "start": 375,
                "end": 403
            },
            "flags": 16,
            "start": 375,
            "end": 404
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
                        "start": 406,
                        "end": 411
                    },
                    "name": null,
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
                                        "start": 413,
                                        "end": 420
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 96,
                                            "start": 420,
                                            "end": 422
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 423,
                                            "end": 424
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 426,
                                                "end": 426
                                            },
                                            "flags": 32,
                                            "start": 424,
                                            "end": 427
                                        },
                                        "flags": 0,
                                        "start": 422,
                                        "end": 427
                                    },
                                    "flags": 0,
                                    "start": 420,
                                    "end": 427
                                }
                            ],
                            "flags": 32,
                            "start": 413,
                            "end": 427
                        },
                        "flags": 411,
                        "start": 32,
                        "end": 428
                    },
                    "flags": 32,
                    "start": 406,
                    "end": 428
                },
                "flags": 32,
                "start": 404,
                "end": 429
            },
            "flags": 16,
            "start": 404,
            "end": 430
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
                        "start": 432,
                        "end": 437
                    },
                    "name": null,
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
                                        "start": 439,
                                        "end": 446
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 446,
                                        "end": 450
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 450,
                                            "end": 452
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 453,
                                            "end": 454
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 456,
                                                "end": 456
                                            },
                                            "flags": 32,
                                            "start": 454,
                                            "end": 457
                                        },
                                        "flags": 1024,
                                        "start": 452,
                                        "end": 457
                                    },
                                    "flags": 1024,
                                    "start": 446,
                                    "end": 457
                                }
                            ],
                            "flags": 32,
                            "start": 439,
                            "end": 457
                        },
                        "flags": 437,
                        "start": 32,
                        "end": 458
                    },
                    "flags": 32,
                    "start": 432,
                    "end": 458
                },
                "flags": 32,
                "start": 430,
                "end": 459
            },
            "flags": 16,
            "start": 430,
            "end": 460
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
                        "start": 462,
                        "end": 467
                    },
                    "name": null,
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
                                        "start": 469,
                                        "end": 476
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 476,
                                        "end": 480
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 480,
                                            "end": 482
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 483,
                                                    "end": 484
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 483,
                                            "end": 485
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 487,
                                                "end": 487
                                            },
                                            "flags": 32,
                                            "start": 485,
                                            "end": 488
                                        },
                                        "flags": 512,
                                        "start": 482,
                                        "end": 488
                                    },
                                    "flags": 512,
                                    "start": 476,
                                    "end": 488
                                }
                            ],
                            "flags": 32,
                            "start": 469,
                            "end": 488
                        },
                        "flags": 467,
                        "start": 32,
                        "end": 489
                    },
                    "flags": 32,
                    "start": 462,
                    "end": 489
                },
                "flags": 32,
                "start": 460,
                "end": 490
            },
            "flags": 16,
            "start": 460,
            "end": 491
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
                        "start": 493,
                        "end": 498
                    },
                    "name": null,
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
                                        "start": 500,
                                        "end": 507
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 507,
                                            "end": 511
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 512,
                                            "end": 513
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 515,
                                                "end": 515
                                            },
                                            "flags": 32,
                                            "start": 513,
                                            "end": 516
                                        },
                                        "flags": 0,
                                        "start": 511,
                                        "end": 516
                                    },
                                    "flags": 0,
                                    "start": 507,
                                    "end": 516
                                }
                            ],
                            "flags": 32,
                            "start": 500,
                            "end": 516
                        },
                        "flags": 498,
                        "start": 32,
                        "end": 517
                    },
                    "flags": 32,
                    "start": 493,
                    "end": 517
                },
                "flags": 32,
                "start": 491,
                "end": 518
            },
            "flags": 16,
            "start": 491,
            "end": 519
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
                        "start": 521,
                        "end": 526
                    },
                    "name": null,
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
                                        "start": 528,
                                        "end": 535
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 96,
                                            "start": 535,
                                            "end": 539
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 540,
                                            "end": 541
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 543,
                                                "end": 543
                                            },
                                            "flags": 32,
                                            "start": 541,
                                            "end": 544
                                        },
                                        "flags": 0,
                                        "start": 539,
                                        "end": 544
                                    },
                                    "flags": 0,
                                    "start": 535,
                                    "end": 544
                                }
                            ],
                            "flags": 32,
                            "start": 528,
                            "end": 544
                        },
                        "flags": 526,
                        "start": 32,
                        "end": 545
                    },
                    "flags": 32,
                    "start": 521,
                    "end": 545
                },
                "flags": 32,
                "start": 519,
                "end": 546
            },
            "flags": 16,
            "start": 519,
            "end": 547
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
                        "start": 549,
                        "end": 554
                    },
                    "name": null,
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
                                        "start": 556,
                                        "end": 563
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 563,
                                            "end": 570
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 571,
                                            "end": 572
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 574,
                                                "end": 574
                                            },
                                            "flags": 32,
                                            "start": 572,
                                            "end": 575
                                        },
                                        "flags": 0,
                                        "start": 570,
                                        "end": 575
                                    },
                                    "flags": 0,
                                    "start": 563,
                                    "end": 575
                                }
                            ],
                            "flags": 32,
                            "start": 556,
                            "end": 575
                        },
                        "flags": 554,
                        "start": 32,
                        "end": 576
                    },
                    "flags": 32,
                    "start": 549,
                    "end": 576
                },
                "flags": 32,
                "start": 547,
                "end": 577
            },
            "flags": 16,
            "start": 547,
            "end": 578
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
                        "start": 580,
                        "end": 585
                    },
                    "name": null,
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
                                        "start": 587,
                                        "end": 594
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 594,
                                        "end": 598
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 598,
                                            "end": 605
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 606,
                                            "end": 607
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 609,
                                                "end": 609
                                            },
                                            "flags": 32,
                                            "start": 607,
                                            "end": 610
                                        },
                                        "flags": 1024,
                                        "start": 605,
                                        "end": 610
                                    },
                                    "flags": 1024,
                                    "start": 594,
                                    "end": 610
                                }
                            ],
                            "flags": 32,
                            "start": 587,
                            "end": 610
                        },
                        "flags": 585,
                        "start": 32,
                        "end": 611
                    },
                    "flags": 32,
                    "start": 580,
                    "end": 611
                },
                "flags": 32,
                "start": 578,
                "end": 612
            },
            "flags": 16,
            "start": 578,
            "end": 613
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
                        "start": 615,
                        "end": 620
                    },
                    "name": null,
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
                                        "start": 622,
                                        "end": 629
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 629,
                                        "end": 633
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 633,
                                            "end": 640
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 641,
                                                    "end": 642
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 641,
                                            "end": 643
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 645,
                                                "end": 645
                                            },
                                            "flags": 32,
                                            "start": 643,
                                            "end": 646
                                        },
                                        "flags": 512,
                                        "start": 640,
                                        "end": 646
                                    },
                                    "flags": 512,
                                    "start": 629,
                                    "end": 646
                                }
                            ],
                            "flags": 32,
                            "start": 622,
                            "end": 646
                        },
                        "flags": 620,
                        "start": 32,
                        "end": 647
                    },
                    "flags": 32,
                    "start": 615,
                    "end": 647
                },
                "flags": 32,
                "start": 613,
                "end": 648
            },
            "flags": 16,
            "start": 613,
            "end": 649
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
                        "start": 651,
                        "end": 656
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 658,
                                        "end": 660
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 660,
                                            "end": 666
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 667,
                                            "end": 668
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 670,
                                                "end": 670
                                            },
                                            "flags": 32,
                                            "start": 668,
                                            "end": 671
                                        },
                                        "flags": 0,
                                        "start": 666,
                                        "end": 671
                                    },
                                    "flags": 0,
                                    "start": 658,
                                    "end": 671
                                }
                            ],
                            "flags": 32,
                            "start": 658,
                            "end": 671
                        },
                        "flags": 656,
                        "start": 32,
                        "end": 672
                    },
                    "flags": 32,
                    "start": 651,
                    "end": 672
                },
                "flags": 32,
                "start": 649,
                "end": 673
            },
            "flags": 16,
            "start": 649,
            "end": 674
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
                        "start": 676,
                        "end": 681
                    },
                    "name": null,
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
                                        "start": 683,
                                        "end": 690
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 690,
                                        "end": 692
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 692,
                                            "end": 698
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 699,
                                            "end": 700
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 702,
                                                "end": 702
                                            },
                                            "flags": 32,
                                            "start": 700,
                                            "end": 703
                                        },
                                        "flags": 0,
                                        "start": 698,
                                        "end": 703
                                    },
                                    "flags": 0,
                                    "start": 690,
                                    "end": 703
                                }
                            ],
                            "flags": 32,
                            "start": 683,
                            "end": 703
                        },
                        "flags": 681,
                        "start": 32,
                        "end": 704
                    },
                    "flags": 32,
                    "start": 676,
                    "end": 704
                },
                "flags": 32,
                "start": 674,
                "end": 705
            },
            "flags": 16,
            "start": 674,
            "end": 706
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
                        "start": 708,
                        "end": 713
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 715,
                                        "end": 717
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 717,
                                            "end": 720
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 721,
                                            "end": 722
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 724,
                                                "end": 724
                                            },
                                            "flags": 32,
                                            "start": 722,
                                            "end": 725
                                        },
                                        "flags": 0,
                                        "start": 720,
                                        "end": 725
                                    },
                                    "flags": 0,
                                    "start": 715,
                                    "end": 725
                                }
                            ],
                            "flags": 32,
                            "start": 715,
                            "end": 725
                        },
                        "flags": 713,
                        "start": 32,
                        "end": 726
                    },
                    "flags": 32,
                    "start": 708,
                    "end": 726
                },
                "flags": 32,
                "start": 706,
                "end": 727
            },
            "flags": 16,
            "start": 706,
            "end": 728
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
                        "start": 730,
                        "end": 735
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 737,
                                        "end": 739
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 96,
                                            "start": 739,
                                            "end": 742
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 743,
                                            "end": 744
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 746,
                                                "end": 746
                                            },
                                            "flags": 32,
                                            "start": 744,
                                            "end": 747
                                        },
                                        "flags": 0,
                                        "start": 742,
                                        "end": 747
                                    },
                                    "flags": 0,
                                    "start": 737,
                                    "end": 747
                                }
                            ],
                            "flags": 32,
                            "start": 737,
                            "end": 747
                        },
                        "flags": 735,
                        "start": 32,
                        "end": 748
                    },
                    "flags": 32,
                    "start": 730,
                    "end": 748
                },
                "flags": 32,
                "start": 728,
                "end": 749
            },
            "flags": 16,
            "start": 728,
            "end": 750
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
                        "start": 752,
                        "end": 757
                    },
                    "name": null,
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
                                        "start": 759,
                                        "end": 766
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 766,
                                        "end": 768
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 768,
                                            "end": 769
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 770,
                                            "end": 771
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 773,
                                                "end": 773
                                            },
                                            "flags": 32,
                                            "start": 771,
                                            "end": 774
                                        },
                                        "flags": 0,
                                        "start": 769,
                                        "end": 774
                                    },
                                    "flags": 0,
                                    "start": 766,
                                    "end": 774
                                }
                            ],
                            "flags": 32,
                            "start": 759,
                            "end": 774
                        },
                        "flags": 757,
                        "start": 32,
                        "end": 775
                    },
                    "flags": 32,
                    "start": 752,
                    "end": 775
                },
                "flags": 32,
                "start": 750,
                "end": 776
            },
            "flags": 16,
            "start": 750,
            "end": 777
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
                        "start": 779,
                        "end": 784
                    },
                    "name": null,
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
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 786,
                                            "end": 792
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 793,
                                            "end": 794
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 795,
                                                "end": 795
                                            },
                                            "flags": 32,
                                            "start": 794,
                                            "end": 796
                                        },
                                        "flags": 0,
                                        "start": 792,
                                        "end": 796
                                    },
                                    "flags": 0,
                                    "start": 786,
                                    "end": 796
                                }
                            ],
                            "flags": 32,
                            "start": 786,
                            "end": 796
                        },
                        "flags": 784,
                        "start": 32,
                        "end": 797
                    },
                    "flags": 32,
                    "start": 779,
                    "end": 797
                },
                "flags": 32,
                "start": 777,
                "end": 798
            },
            "flags": 16,
            "start": 777,
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
                        "flags": 64,
                        "start": 801,
                        "end": 806
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 808,
                                        "end": 810
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 810,
                                            "end": 815
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 816,
                                            "end": 817
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 818,
                                                "end": 818
                                            },
                                            "flags": 32,
                                            "start": 817,
                                            "end": 819
                                        },
                                        "flags": 0,
                                        "start": 815,
                                        "end": 819
                                    },
                                    "flags": 0,
                                    "start": 808,
                                    "end": 819
                                }
                            ],
                            "flags": 32,
                            "start": 808,
                            "end": 819
                        },
                        "flags": 806,
                        "start": 32,
                        "end": 820
                    },
                    "flags": 32,
                    "start": 801,
                    "end": 820
                },
                "flags": 32,
                "start": 799,
                "end": 821
            },
            "flags": 16,
            "start": 799,
            "end": 822
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
                        "start": 824,
                        "end": 829
                    },
                    "name": null,
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
                                        "start": 831,
                                        "end": 838
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 838,
                                            "end": 844
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 845,
                                            "end": 846
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 847,
                                                "end": 847
                                            },
                                            "flags": 32,
                                            "start": 846,
                                            "end": 848
                                        },
                                        "flags": 0,
                                        "start": 844,
                                        "end": 848
                                    },
                                    "flags": 0,
                                    "start": 838,
                                    "end": 848
                                }
                            ],
                            "flags": 32,
                            "start": 831,
                            "end": 848
                        },
                        "flags": 829,
                        "start": 32,
                        "end": 849
                    },
                    "flags": 32,
                    "start": 824,
                    "end": 849
                },
                "flags": 32,
                "start": 822,
                "end": 850
            },
            "flags": 16,
            "start": 822,
            "end": 851
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
                        "start": 853,
                        "end": 858
                    },
                    "name": null,
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
                                        "start": 860,
                                        "end": 867
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 867,
                                        "end": 869
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 869,
                                            "end": 874
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 875,
                                            "end": 876
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 877,
                                                "end": 877
                                            },
                                            "flags": 32,
                                            "start": 876,
                                            "end": 878
                                        },
                                        "flags": 0,
                                        "start": 874,
                                        "end": 878
                                    },
                                    "flags": 0,
                                    "start": 867,
                                    "end": 878
                                }
                            ],
                            "flags": 32,
                            "start": 860,
                            "end": 878
                        },
                        "flags": 858,
                        "start": 32,
                        "end": 879
                    },
                    "flags": 32,
                    "start": 853,
                    "end": 879
                },
                "flags": 32,
                "start": 851,
                "end": 880
            },
            "flags": 16,
            "start": 851,
            "end": 881
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
                        "start": 883,
                        "end": 888
                    },
                    "name": null,
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
                                        "start": 890,
                                        "end": 897
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 897,
                                        "end": 903
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 903,
                                        "end": 905
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 905,
                                            "end": 906
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "start": 907,
                                            "end": 908
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 909,
                                                "end": 909
                                            },
                                            "flags": 32,
                                            "start": 908,
                                            "end": 910
                                        },
                                        "flags": 384,
                                        "start": 906,
                                        "end": 910
                                    },
                                    "flags": 384,
                                    "start": 897,
                                    "end": 910
                                }
                            ],
                            "flags": 32,
                            "start": 890,
                            "end": 910
                        },
                        "flags": 888,
                        "start": 32,
                        "end": 911
                    },
                    "flags": 32,
                    "start": 883,
                    "end": 911
                },
                "flags": 32,
                "start": 881,
                "end": 912
            },
            "flags": 16,
            "start": 881,
            "end": 913
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
                        "start": 915,
                        "end": 920
                    },
                    "name": null,
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
                                        "start": 922,
                                        "end": 929
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 929,
                                        "end": 935
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 935,
                                            "end": 937
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 938,
                                            "end": 939
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 940,
                                                "end": 940
                                            },
                                            "flags": 32,
                                            "start": 939,
                                            "end": 941
                                        },
                                        "flags": 256,
                                        "start": 937,
                                        "end": 941
                                    },
                                    "flags": 256,
                                    "start": 929,
                                    "end": 941
                                }
                            ],
                            "flags": 32,
                            "start": 922,
                            "end": 941
                        },
                        "flags": 920,
                        "start": 32,
                        "end": 942
                    },
                    "flags": 32,
                    "start": 915,
                    "end": 942
                },
                "flags": 32,
                "start": 913,
                "end": 943
            },
            "flags": 16,
            "start": 913,
            "end": 944
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
                        "start": 946,
                        "end": 951
                    },
                    "name": null,
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
                                        "start": 953,
                                        "end": 960
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 960,
                                            "end": 966
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 967,
                                            "end": 968
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 969,
                                                "end": 969
                                            },
                                            "flags": 32,
                                            "start": 968,
                                            "end": 970
                                        },
                                        "flags": 0,
                                        "start": 966,
                                        "end": 970
                                    },
                                    "flags": 0,
                                    "start": 960,
                                    "end": 970
                                }
                            ],
                            "flags": 32,
                            "start": 953,
                            "end": 970
                        },
                        "flags": 951,
                        "start": 32,
                        "end": 971
                    },
                    "flags": 32,
                    "start": 946,
                    "end": 971
                },
                "flags": 32,
                "start": 944,
                "end": 972
            },
            "flags": 16,
            "start": 944,
            "end": 973
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
                        "start": 975,
                        "end": 980
                    },
                    "name": null,
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
                                        "start": 982,
                                        "end": 989
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 989,
                                        "end": 991
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 991,
                                            "end": 996
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 997,
                                            "end": 998
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 999,
                                                "end": 999
                                            },
                                            "flags": 32,
                                            "start": 998,
                                            "end": 1000
                                        },
                                        "flags": 0,
                                        "start": 996,
                                        "end": 1000
                                    },
                                    "flags": 0,
                                    "start": 989,
                                    "end": 1000
                                }
                            ],
                            "flags": 32,
                            "start": 982,
                            "end": 1000
                        },
                        "flags": 980,
                        "start": 32,
                        "end": 1001
                    },
                    "flags": 32,
                    "start": 975,
                    "end": 1001
                },
                "flags": 32,
                "start": 973,
                "end": 1002
            },
            "flags": 16,
            "start": 973,
            "end": 1003
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
                        "start": 1005,
                        "end": 1010
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 1012,
                                        "end": 1018
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1018,
                                            "end": 1020
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1021,
                                            "end": 1022
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1023,
                                                "end": 1023
                                            },
                                            "flags": 32,
                                            "start": 1022,
                                            "end": 1024
                                        },
                                        "flags": 256,
                                        "start": 1020,
                                        "end": 1024
                                    },
                                    "flags": 256,
                                    "start": 1012,
                                    "end": 1024
                                }
                            ],
                            "flags": 32,
                            "start": 1012,
                            "end": 1024
                        },
                        "flags": 1010,
                        "start": 32,
                        "end": 1025
                    },
                    "flags": 32,
                    "start": 1005,
                    "end": 1025
                },
                "flags": 32,
                "start": 1003,
                "end": 1026
            },
            "flags": 16,
            "start": 1003,
            "end": 1027
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
                        "start": 1029,
                        "end": 1034
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 1036,
                                        "end": 1042
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 1042,
                                            "end": 1044
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1045,
                                            "end": 1046
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1047,
                                                "end": 1047
                                            },
                                            "flags": 32,
                                            "start": 1046,
                                            "end": 1048
                                        },
                                        "flags": 256,
                                        "start": 1044,
                                        "end": 1048
                                    },
                                    "flags": 256,
                                    "start": 1036,
                                    "end": 1048
                                }
                            ],
                            "flags": 32,
                            "start": 1036,
                            "end": 1048
                        },
                        "flags": 1034,
                        "start": 32,
                        "end": 1049
                    },
                    "flags": 32,
                    "start": 1029,
                    "end": 1049
                },
                "flags": 32,
                "start": 1027,
                "end": 1050
            },
            "flags": 16,
            "start": 1027,
            "end": 1051
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
                        "start": 1053,
                        "end": 1058
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 1060,
                                        "end": 1066
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 1066,
                                            "end": 1070
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1071,
                                            "end": 1072
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1073,
                                                "end": 1073
                                            },
                                            "flags": 32,
                                            "start": 1072,
                                            "end": 1074
                                        },
                                        "flags": 256,
                                        "start": 1070,
                                        "end": 1074
                                    },
                                    "flags": 256,
                                    "start": 1060,
                                    "end": 1074
                                }
                            ],
                            "flags": 32,
                            "start": 1060,
                            "end": 1074
                        },
                        "flags": 1058,
                        "start": 32,
                        "end": 1075
                    },
                    "flags": 32,
                    "start": 1053,
                    "end": 1075
                },
                "flags": 32,
                "start": 1051,
                "end": 1076
            },
            "flags": 16,
            "start": 1051,
            "end": 1077
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
                        "start": 1079,
                        "end": 1084
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 1086,
                                        "end": 1092
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 96,
                                            "start": 1092,
                                            "end": 1096
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1097,
                                            "end": 1098
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1099,
                                                "end": 1099
                                            },
                                            "flags": 32,
                                            "start": 1098,
                                            "end": 1100
                                        },
                                        "flags": 256,
                                        "start": 1096,
                                        "end": 1100
                                    },
                                    "flags": 256,
                                    "start": 1086,
                                    "end": 1100
                                }
                            ],
                            "flags": 32,
                            "start": 1086,
                            "end": 1100
                        },
                        "flags": 1084,
                        "start": 32,
                        "end": 1101
                    },
                    "flags": 32,
                    "start": 1079,
                    "end": 1101
                },
                "flags": 32,
                "start": 1077,
                "end": 1102
            },
            "flags": 16,
            "start": 1077,
            "end": 1103
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
                        "start": 1105,
                        "end": 1110
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 1112,
                                        "end": 1118
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 1118,
                                            "end": 1125
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1126,
                                            "end": 1127
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1128,
                                                "end": 1128
                                            },
                                            "flags": 32,
                                            "start": 1127,
                                            "end": 1129
                                        },
                                        "flags": 256,
                                        "start": 1125,
                                        "end": 1129
                                    },
                                    "flags": 256,
                                    "start": 1112,
                                    "end": 1129
                                }
                            ],
                            "flags": 32,
                            "start": 1112,
                            "end": 1129
                        },
                        "flags": 1110,
                        "start": 32,
                        "end": 1130
                    },
                    "flags": 32,
                    "start": 1105,
                    "end": 1130
                },
                "flags": 32,
                "start": 1103,
                "end": 1131
            },
            "flags": 16,
            "start": 1103,
            "end": 1132
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
                        "start": 1134,
                        "end": 1139
                    },
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 1141,
                                        "end": 1147
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 1147,
                                            "end": 1153
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 1154,
                                            "end": 1155
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1156,
                                                "end": 1156
                                            },
                                            "flags": 32,
                                            "start": 1155,
                                            "end": 1157
                                        },
                                        "flags": 256,
                                        "start": 1153,
                                        "end": 1157
                                    },
                                    "flags": 256,
                                    "start": 1141,
                                    "end": 1157
                                }
                            ],
                            "flags": 32,
                            "start": 1141,
                            "end": 1157
                        },
                        "flags": 1139,
                        "start": 32,
                        "end": 1158
                    },
                    "flags": 32,
                    "start": 1134,
                    "end": 1158
                },
                "flags": 32,
                "start": 1132,
                "end": 1159
            },
            "flags": 16,
            "start": 1132,
            "end": 1160
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
                        "start": 1162,
                        "end": 1167
                    },
                    "name": null,
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
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 1169,
                                            "end": 1175
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1176,
                                            "end": 1177
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1178,
                                                "end": 1178
                                            },
                                            "flags": 32,
                                            "start": 1177,
                                            "end": 1179
                                        },
                                        "flags": 0,
                                        "start": 1175,
                                        "end": 1179
                                    },
                                    "flags": 0,
                                    "start": 1169,
                                    "end": 1179
                                }
                            ],
                            "flags": 32,
                            "start": 1169,
                            "end": 1179
                        },
                        "flags": 1167,
                        "start": 32,
                        "end": 1180
                    },
                    "flags": 32,
                    "start": 1162,
                    "end": 1180
                },
                "flags": 32,
                "start": 1160,
                "end": 1181
            },
            "flags": 16,
            "start": 1160,
            "end": 1182
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
                        "start": 1184,
                        "end": 1189
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 1191,
                                        "end": 1193
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 1193,
                                            "end": 1198
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1199,
                                            "end": 1200
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1201,
                                                "end": 1201
                                            },
                                            "flags": 32,
                                            "start": 1200,
                                            "end": 1202
                                        },
                                        "flags": 0,
                                        "start": 1198,
                                        "end": 1202
                                    },
                                    "flags": 0,
                                    "start": 1191,
                                    "end": 1202
                                }
                            ],
                            "flags": 32,
                            "start": 1191,
                            "end": 1202
                        },
                        "flags": 1189,
                        "start": 32,
                        "end": 1203
                    },
                    "flags": 32,
                    "start": 1184,
                    "end": 1203
                },
                "flags": 32,
                "start": 1182,
                "end": 1204
            },
            "flags": 16,
            "start": 1182,
            "end": 1205
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
                        "start": 1207,
                        "end": 1212
                    },
                    "name": null,
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 1214,
                                        "end": 1218
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 42.5,
                                            "rawText": "42.5",
                                            "flags": 32864,
                                            "start": 1218,
                                            "end": 1223
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 1224,
                                            "end": 1225
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1227,
                                                "end": 1227
                                            },
                                            "flags": 32,
                                            "start": 1225,
                                            "end": 1228
                                        },
                                        "flags": 1024,
                                        "start": 1223,
                                        "end": 1228
                                    },
                                    "flags": 1024,
                                    "start": 1214,
                                    "end": 1228
                                }
                            ],
                            "flags": 32,
                            "start": 1214,
                            "end": 1228
                        },
                        "flags": 1212,
                        "start": 32,
                        "end": 1229
                    },
                    "flags": 32,
                    "start": 1207,
                    "end": 1229
                },
                "flags": 32,
                "start": 1205,
                "end": 1230
            },
            "flags": 16,
            "start": 1205,
            "end": 1231
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
                        "start": 1233,
                        "end": 1238
                    },
                    "name": null,
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
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 1240,
                                        "end": 1244
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 1244,
                                            "end": 1251
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 1252,
                                                    "end": 1253
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 1252,
                                            "end": 1254
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1256,
                                                "end": 1256
                                            },
                                            "flags": 32,
                                            "start": 1254,
                                            "end": 1257
                                        },
                                        "flags": 512,
                                        "start": 1251,
                                        "end": 1257
                                    },
                                    "flags": 512,
                                    "start": 1240,
                                    "end": 1257
                                }
                            ],
                            "flags": 32,
                            "start": 1240,
                            "end": 1257
                        },
                        "flags": 1238,
                        "start": 32,
                        "end": 1258
                    },
                    "flags": 32,
                    "start": 1233,
                    "end": 1258
                },
                "flags": 32,
                "start": 1231,
                "end": 1259
            },
            "flags": 16,
            "start": 1231,
            "end": 1260
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
                        "start": 1262,
                        "end": 1267
                    },
                    "name": null,
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
                                        "start": 1269,
                                        "end": 1276
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 96,
                                            "start": 1276,
                                            "end": 1281
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1282,
                                            "end": 1283
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1285,
                                                "end": 1285
                                            },
                                            "flags": 32,
                                            "start": 1283,
                                            "end": 1286
                                        },
                                        "flags": 0,
                                        "start": 1281,
                                        "end": 1286
                                    },
                                    "flags": 0,
                                    "start": 1276,
                                    "end": 1286
                                }
                            ],
                            "flags": 32,
                            "start": 1269,
                            "end": 1286
                        },
                        "flags": 1267,
                        "start": 32,
                        "end": 1287
                    },
                    "flags": 32,
                    "start": 1262,
                    "end": 1287
                },
                "flags": 32,
                "start": 1260,
                "end": 1288
            },
            "flags": 16,
            "start": 1260,
            "end": 1289
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
                        "start": 1291,
                        "end": 1296
                    },
                    "name": null,
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
                                        "start": 1298,
                                        "end": 1305
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 1305,
                                        "end": 1309
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "class",
                                            "rawText": "class",
                                            "flags": 96,
                                            "start": 1309,
                                            "end": 1315
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 1316,
                                            "end": 1317
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1319,
                                                "end": 1319
                                            },
                                            "flags": 32,
                                            "start": 1317,
                                            "end": 1320
                                        },
                                        "flags": 1024,
                                        "start": 1315,
                                        "end": 1320
                                    },
                                    "flags": 1024,
                                    "start": 1305,
                                    "end": 1320
                                }
                            ],
                            "flags": 32,
                            "start": 1298,
                            "end": 1320
                        },
                        "flags": 1296,
                        "start": 32,
                        "end": 1321
                    },
                    "flags": 32,
                    "start": 1291,
                    "end": 1321
                },
                "flags": 32,
                "start": 1289,
                "end": 1322
            },
            "flags": 16,
            "start": 1289,
            "end": 1323
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
                        "start": 1325,
                        "end": 1330
                    },
                    "name": null,
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
                                        "start": 1332,
                                        "end": 1339
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 1339,
                                        "end": 1343
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 42.5,
                                            "rawText": "42.5",
                                            "flags": 32864,
                                            "start": 1343,
                                            "end": 1348
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 1349,
                                                    "end": 1350
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 1349,
                                            "end": 1351
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1353,
                                                "end": 1353
                                            },
                                            "flags": 32,
                                            "start": 1351,
                                            "end": 1354
                                        },
                                        "flags": 512,
                                        "start": 1348,
                                        "end": 1354
                                    },
                                    "flags": 512,
                                    "start": 1339,
                                    "end": 1354
                                }
                            ],
                            "flags": 32,
                            "start": 1332,
                            "end": 1354
                        },
                        "flags": 1330,
                        "start": 32,
                        "end": 1355
                    },
                    "flags": 32,
                    "start": 1325,
                    "end": 1355
                },
                "flags": 32,
                "start": 1323,
                "end": 1356
            },
            "flags": 16,
            "start": 1323,
            "end": 1357
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
                        "start": 1359,
                        "end": 1364
                    },
                    "name": null,
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 1366,
                                        "end": 1368
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "const",
                                            "rawText": "const",
                                            "flags": 96,
                                            "start": 1368,
                                            "end": 1373
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1374,
                                            "end": 1375
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1377,
                                                "end": 1377
                                            },
                                            "flags": 32,
                                            "start": 1375,
                                            "end": 1378
                                        },
                                        "flags": 0,
                                        "start": 1373,
                                        "end": 1378
                                    },
                                    "flags": 0,
                                    "start": 1366,
                                    "end": 1378
                                }
                            ],
                            "flags": 32,
                            "start": 1366,
                            "end": 1378
                        },
                        "flags": 1364,
                        "start": 32,
                        "end": 1379
                    },
                    "flags": 32,
                    "start": 1359,
                    "end": 1379
                },
                "flags": 32,
                "start": 1357,
                "end": 1380
            },
            "flags": 16,
            "start": 1357,
            "end": 1381
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
                        "start": 1383,
                        "end": 1388
                    },
                    "name": null,
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
                                        "start": 1390,
                                        "end": 1397
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 1397,
                                        "end": 1399
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "str",
                                            "rawText": "\"str\"",
                                            "flags": 96,
                                            "start": 1399,
                                            "end": 1404
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1405,
                                            "end": 1406
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1408,
                                                "end": 1408
                                            },
                                            "flags": 32,
                                            "start": 1406,
                                            "end": 1409
                                        },
                                        "flags": 0,
                                        "start": 1404,
                                        "end": 1409
                                    },
                                    "flags": 0,
                                    "start": 1397,
                                    "end": 1409
                                }
                            ],
                            "flags": 32,
                            "start": 1390,
                            "end": 1409
                        },
                        "flags": 1388,
                        "start": 32,
                        "end": 1410
                    },
                    "flags": 32,
                    "start": 1383,
                    "end": 1410
                },
                "flags": 32,
                "start": 1381,
                "end": 1411
            },
            "flags": 16,
            "start": 1381,
            "end": 1412
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
                        "start": 1414,
                        "end": 1419
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1419,
                        "end": 1421
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
                                            "text": "true",
                                            "rawText": "true",
                                            "flags": 96,
                                            "start": 1423,
                                            "end": 1428
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1429,
                                            "end": 1430
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1432,
                                                "end": 1432
                                            },
                                            "flags": 32,
                                            "start": 1430,
                                            "end": 1433
                                        },
                                        "flags": 0,
                                        "start": 1428,
                                        "end": 1433
                                    },
                                    "flags": 0,
                                    "start": 1423,
                                    "end": 1433
                                }
                            ],
                            "flags": 32,
                            "start": 1423,
                            "end": 1433
                        },
                        "flags": 1421,
                        "start": 32,
                        "end": 1434
                    },
                    "flags": 32,
                    "start": 1414,
                    "end": 1434
                },
                "flags": 32,
                "start": 1412,
                "end": 1435
            },
            "flags": 16,
            "start": 1412,
            "end": 1436
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
                        "start": 1438,
                        "end": 1443
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1443,
                        "end": 1445
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 1447,
                                        "end": 1451
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "false",
                                            "rawText": "false",
                                            "flags": 96,
                                            "start": 1451,
                                            "end": 1457
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 1458,
                                            "end": 1459
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1461,
                                                "end": 1461
                                            },
                                            "flags": 32,
                                            "start": 1459,
                                            "end": 1462
                                        },
                                        "flags": 1024,
                                        "start": 1457,
                                        "end": 1462
                                    },
                                    "flags": 1024,
                                    "start": 1447,
                                    "end": 1462
                                }
                            ],
                            "flags": 32,
                            "start": 1447,
                            "end": 1462
                        },
                        "flags": 1445,
                        "start": 32,
                        "end": 1463
                    },
                    "flags": 32,
                    "start": 1438,
                    "end": 1463
                },
                "flags": 32,
                "start": 1436,
                "end": 1464
            },
            "flags": 16,
            "start": 1436,
            "end": 1465
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
                        "start": 1467,
                        "end": 1472
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1472,
                        "end": 1474
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
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 1476,
                                        "end": 1480
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "function",
                                            "rawText": "function",
                                            "flags": 96,
                                            "start": 1480,
                                            "end": 1489
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 1490,
                                                    "end": 1491
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 1490,
                                            "end": 1492
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1494,
                                                "end": 1494
                                            },
                                            "flags": 32,
                                            "start": 1492,
                                            "end": 1495
                                        },
                                        "flags": 512,
                                        "start": 1489,
                                        "end": 1495
                                    },
                                    "flags": 512,
                                    "start": 1476,
                                    "end": 1495
                                }
                            ],
                            "flags": 32,
                            "start": 1476,
                            "end": 1495
                        },
                        "flags": 1474,
                        "start": 32,
                        "end": 1496
                    },
                    "flags": 32,
                    "start": 1467,
                    "end": 1496
                },
                "flags": 32,
                "start": 1465,
                "end": 1497
            },
            "flags": 16,
            "start": 1465,
            "end": 1498
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
                        "start": 1500,
                        "end": 1505
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1505,
                        "end": 1507
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
                                        "start": 1509,
                                        "end": 1516
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "if",
                                            "rawText": "if",
                                            "flags": 96,
                                            "start": 1516,
                                            "end": 1519
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1520,
                                            "end": 1521
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1523,
                                                "end": 1523
                                            },
                                            "flags": 32,
                                            "start": 1521,
                                            "end": 1524
                                        },
                                        "flags": 0,
                                        "start": 1519,
                                        "end": 1524
                                    },
                                    "flags": 0,
                                    "start": 1516,
                                    "end": 1524
                                }
                            ],
                            "flags": 32,
                            "start": 1509,
                            "end": 1524
                        },
                        "flags": 1507,
                        "start": 32,
                        "end": 1525
                    },
                    "flags": 32,
                    "start": 1500,
                    "end": 1525
                },
                "flags": 32,
                "start": 1498,
                "end": 1526
            },
            "flags": 16,
            "start": 1498,
            "end": 1527
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
                        "start": 1529,
                        "end": 1534
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1534,
                        "end": 1536
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
                                        "start": 1538,
                                        "end": 1545
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 1545,
                                        "end": 1549
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 96,
                                            "start": 1549,
                                            "end": 1553
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 1554,
                                            "end": 1555
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1557,
                                                "end": 1557
                                            },
                                            "flags": 32,
                                            "start": 1555,
                                            "end": 1558
                                        },
                                        "flags": 1024,
                                        "start": 1553,
                                        "end": 1558
                                    },
                                    "flags": 1024,
                                    "start": 1545,
                                    "end": 1558
                                }
                            ],
                            "flags": 32,
                            "start": 1538,
                            "end": 1558
                        },
                        "flags": 1536,
                        "start": 32,
                        "end": 1559
                    },
                    "flags": 32,
                    "start": 1529,
                    "end": 1559
                },
                "flags": 32,
                "start": 1527,
                "end": 1560
            },
            "flags": 16,
            "start": 1527,
            "end": 1561
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
                        "start": 1563,
                        "end": 1568
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1568,
                        "end": 1570
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
                                        "start": 1572,
                                        "end": 1579
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 1579,
                                        "end": 1583
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 1583,
                                            "end": 1587
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 1588,
                                                    "end": 1589
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 1588,
                                            "end": 1590
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1592,
                                                "end": 1592
                                            },
                                            "flags": 32,
                                            "start": 1590,
                                            "end": 1593
                                        },
                                        "flags": 512,
                                        "start": 1587,
                                        "end": 1593
                                    },
                                    "flags": 512,
                                    "start": 1579,
                                    "end": 1593
                                }
                            ],
                            "flags": 32,
                            "start": 1572,
                            "end": 1593
                        },
                        "flags": 1570,
                        "start": 32,
                        "end": 1594
                    },
                    "flags": 32,
                    "start": 1563,
                    "end": 1594
                },
                "flags": 32,
                "start": 1561,
                "end": 1595
            },
            "flags": 16,
            "start": 1561,
            "end": 1596
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
                        "start": 1598,
                        "end": 1603
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1603,
                        "end": 1605
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
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 1607,
                                        "end": 1609
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 96,
                                            "start": 1609,
                                            "end": 1612
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1613,
                                            "end": 1614
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1616,
                                                "end": 1616
                                            },
                                            "flags": 32,
                                            "start": 1614,
                                            "end": 1617
                                        },
                                        "flags": 0,
                                        "start": 1612,
                                        "end": 1617
                                    },
                                    "flags": 0,
                                    "start": 1607,
                                    "end": 1617
                                }
                            ],
                            "flags": 32,
                            "start": 1607,
                            "end": 1617
                        },
                        "flags": 1605,
                        "start": 32,
                        "end": 1618
                    },
                    "flags": 32,
                    "start": 1598,
                    "end": 1618
                },
                "flags": 32,
                "start": 1596,
                "end": 1619
            },
            "flags": 16,
            "start": 1596,
            "end": 1620
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
                        "start": 1622,
                        "end": 1627
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 1627,
                        "end": 1629
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
                                        "start": 1631,
                                        "end": 1638
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 1638,
                                        "end": 1640
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 96,
                                            "start": 1640,
                                            "end": 1646
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 1647,
                                            "end": 1648
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 1650,
                                                "end": 1650
                                            },
                                            "flags": 32,
                                            "start": 1648,
                                            "end": 1651
                                        },
                                        "flags": 0,
                                        "start": 1646,
                                        "end": 1651
                                    },
                                    "flags": 0,
                                    "start": 1638,
                                    "end": 1651
                                }
                            ],
                            "flags": 32,
                            "start": 1631,
                            "end": 1651
                        },
                        "flags": 1629,
                        "start": 32,
                        "end": 1652
                    },
                    "flags": 32,
                    "start": 1622,
                    "end": 1652
                },
                "flags": 32,
                "start": 1620,
                "end": 1653
            },
            "flags": 16,
            "start": 1620,
            "end": 1654
        }
    ],
    "isModule": false,
    "source": "(class { ;});\n(class { ;;});\n(class { m() {}});\n(class { m() {};});\n(class { ; m() {}});\n(class { m() {}; n(x) {}});\n(class { get x() {}});\n(class { set x(v) {}});\n(class { get() {}});\n(class { set() {}});\n(class { *g() {}});\n(class { *g() {};});\n(class { ; *g() {}});\n(class { *g() {}; *h(x) {}});\n(class { async *x(){}});\n(class { static() {}});\n(class { get static() {}});\n(class { set static(v) {}});\n(class { static m() {}});\n(class { static get x() {}});\n(class { static set x(v) {}});\n(class { static get() {}});\n(class { static set() {}});\n(class { static static() {}});\n(class { static get static() {}});\n(class { static set static(v) {}});\n(class { *static() {}});\n(class { static *static() {}});\n(class { *get() {}});\n(class { *set() {}});\n(class { static *g() {}});\n(class { async(){}});\n(class { *async(){}});\n(class { static async(){}});\n(class { static *async(){}});\n(class { static async *x(){}});\n(class { static async x(){}});\n(class { static async(){}});\n(class { static *async(){}});\n(class { async x(){}});\n(class { async 0(){}});\n(class { async get(){}});\n(class { async set(){}});\n(class { async static(){}});\n(class { async async(){}});\n(class { async(){}});\n(class { *async(){}});\n(class { get 42.5() {}});\n(class { set static(v) {}});\n(class { static this() {}});\n(class { static get class() {}});\n(class { static set 42.5(v) {}});\n(class { *const() {}});\n(class { static *\"str\"() {}});\n(class C { true() {}});\n(class C { get false() {}});\n(class C { set function(v) {}});\n(class C { static if() {}});\n(class C { static get let() {}});\n(class C { static set get(v) {}});\n(class C { *set() {}});\n(class C { static *static() {}});\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1655
}
```

### Printed

```javascript

(class  {
  ;
});
(class  {
  ;
  ;
});
(class  {
  m() { }
});
(class  {
  m() { }
  ;
});
(class  {
  ;
  m() { }
});
(class  {
  m() { }
  ;
  n(x) { }
});
(class  {
  get x() { }
});
(class  {
  set x(v) { }
});
(class  {
  get() { }
});
(class  {
  set() { }
});
(class  {
  *g() { }
});
(class  {
  *g() { }
  ;
});
(class  {
  ;
  *g() { }
});
(class  {
  *g() { }
  ;
  *h(x) { }
});
(class  {
  async *x() { }
});
(class  {
  static() { }
});
(class  {
  get static() { }
});
(class  {
  set static(v) { }
});
(class  {
  static m() { }
});
(class  {
  static get x() { }
});
(class  {
  static set x(v) { }
});
(class  {
  static get() { }
});
(class  {
  static set() { }
});
(class  {
  static static() { }
});
(class  {
  static get static() { }
});
(class  {
  static set static(v) { }
});
(class  {
  *static() { }
});
(class  {
  static *static() { }
});
(class  {
  *get() { }
});
(class  {
  *set() { }
});
(class  {
  static *g() { }
});
(class  {
  async() { }
});
(class  {
  *async() { }
});
(class  {
  static async() { }
});
(class  {
  static *async() { }
});
(class  {
  static async *x() { }
});
(class  {
  static async x() { }
});
(class  {
  static async() { }
});
(class  {
  static *async() { }
});
(class  {
  async x() { }
});
(class  {
  async 0() { }
});
(class  {
  async get() { }
});
(class  {
  async set() { }
});
(class  {
  async static() { }
});
(class  {
  async async() { }
});
(class  {
  async() { }
});
(class  {
  *async() { }
});
(class  {
  get 42.5() { }
});
(class  {
  set static(v) { }
});
(class  {
  static this() { }
});
(class  {
  static get class() { }
});
(class  {
  static set 42.5(v) { }
});
(class  {
  *const() { }
});
(class  {
  static *'"str"'() { }
});
(class C {
  true() { }
});
(class C {
  get false() { }
});
(class C {
  set function(v) { }
});
(class C {
  static if() { }
});
(class C {
  static get let() { }
});
(class C {
  static set get(v) { }
});
(class C {
  *set() { }
});
(class C {
  static *static() { }
});

```

### Diagnostics

```javascript
✔ No errors
```

