# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
(class {#a() { }});

(class {#a() : 0});
(class {#a() =});
(class {#a() => {}});
(class {#a => {}});
(class {*#a() = 0});
(class {*#a() => 0});
(class {*#a() => {}});
(class {get #a()[]});
(class {yield #a()[]});
(class {yield #a => {}});
(class {async #a() = 0});
(class {async #a => {}});
(class {#a(arguments) {}});
(class {set #a(arguments) {}});

(class {#['a']() { }});
(class {get #['a']() { }});
(class {set #['a'](foo) { }});
(class {*#['a']() { }});
(class {async #['a']() { }});
(class {async *#['a]() { }});

(class {get #a() {} get #a() {}});
(class {get #a() {} get #['a']() {}});
(class {set #a(val) {} set #a(val) {}});
(class {set #a(val) {} set #['a'](val) {}});
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
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 12
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
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 12,
                                        "end": 16
                                    },
                                    "flags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 16
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 19
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
                        "flags": 768,
                        "start": 22,
                        "end": 27
                    },
                    "name": null,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 32,
                                        "end": 33
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
                                            "start": 33,
                                            "end": 33
                                        },
                                        "flags": 256,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 33
                            }
                        ],
                        "flags": 256,
                        "start": 29,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 33
                },
                "flags": 256,
                "start": 19,
                "end": 33
            },
            "flags": 128,
            "start": 19,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 35,
                "end": 37
            },
            "flags": 128,
            "start": 35,
            "end": 37
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 39,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 42,
                            "end": 47
                        },
                        "name": null,
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
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 768,
                                            "start": 49,
                                            "end": 51
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 52,
                                            "end": 53
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
                                                "start": 53,
                                                "end": 53
                                            },
                                            "flags": 256,
                                            "start": 53,
                                            "end": 53
                                        },
                                        "flags": 0,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "flags": 256,
                                    "start": 49,
                                    "end": 53
                                }
                            ],
                            "flags": 256,
                            "start": 49,
                            "end": 53
                        },
                        "flags": 256,
                        "start": 42,
                        "end": 53
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 53,
                        "end": 55
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 55,
                        "end": 55
                    },
                    "flags": 256,
                    "start": 42,
                    "end": 55
                },
                "flags": 256,
                "start": 40,
                "end": 55
            },
            "flags": 128,
            "start": 40,
            "end": 55
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 57,
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
                        "flags": 768,
                        "start": 60,
                        "end": 65
                    },
                    "name": null,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 67,
                                        "end": 69
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 70,
                                        "end": 71
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
                                            "start": 71,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 71,
                                        "end": 71
                                    },
                                    "flags": 0,
                                    "start": 69,
                                    "end": 71
                                },
                                "flags": 256,
                                "start": 67,
                                "end": 71
                            }
                        ],
                        "flags": 256,
                        "start": 67,
                        "end": 71
                    },
                    "flags": 256,
                    "start": 60,
                    "end": 71
                },
                "flags": 256,
                "start": 58,
                "end": 71
            },
            "flags": 128,
            "start": 58,
            "end": 71
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 76,
                "end": 76
            },
            "flags": 128,
            "start": 74,
            "end": 77
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 79,
            "end": 80
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
                        "flags": 768,
                        "start": 82,
                        "end": 87
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#a",
                                    "flags": 768,
                                    "start": 89,
                                    "end": 91
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 89,
                                "end": 91
                            }
                        ],
                        "flags": 256,
                        "start": 89,
                        "end": 91
                    },
                    "flags": 256,
                    "start": 82,
                    "end": 91
                },
                "flags": 256,
                "start": 80,
                "end": 91
            },
            "flags": 128,
            "start": 80,
            "end": 91
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 96,
                "end": 96
            },
            "flags": 128,
            "start": 94,
            "end": 97
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 99,
            "end": 100
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 102,
                            "end": 107
                        },
                        "name": null,
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
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 768,
                                            "start": 110,
                                            "end": 112
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 113,
                                            "end": 114
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
                                                "start": 114,
                                                "end": 114
                                            },
                                            "flags": 256,
                                            "start": 114,
                                            "end": 114
                                        },
                                        "flags": 0,
                                        "start": 112,
                                        "end": 114
                                    },
                                    "flags": 256,
                                    "start": 109,
                                    "end": 114
                                }
                            ],
                            "flags": 256,
                            "start": 109,
                            "end": 114
                        },
                        "flags": 256,
                        "start": 102,
                        "end": 114
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 114,
                        "end": 116
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 116,
                        "end": 118
                    },
                    "flags": 256,
                    "start": 102,
                    "end": 118
                },
                "flags": 256,
                "start": 100,
                "end": 118
            },
            "flags": 128,
            "start": 100,
            "end": 118
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 120,
            "end": 121
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
                        "flags": 768,
                        "start": 123,
                        "end": 128
                    },
                    "name": null,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 131,
                                        "end": 133
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 134,
                                        "end": 135
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
                                            "start": 135,
                                            "end": 135
                                        },
                                        "flags": 256,
                                        "start": 135,
                                        "end": 135
                                    },
                                    "flags": 0,
                                    "start": 133,
                                    "end": 135
                                },
                                "flags": 256,
                                "start": 130,
                                "end": 135
                            }
                        ],
                        "flags": 256,
                        "start": 130,
                        "end": 135
                    },
                    "flags": 256,
                    "start": 123,
                    "end": 135
                },
                "flags": 256,
                "start": 121,
                "end": 135
            },
            "flags": 128,
            "start": 121,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 138,
                "end": 140
            },
            "flags": 128,
            "start": 138,
            "end": 140
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 142,
            "end": 143
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
                        "flags": 768,
                        "start": 145,
                        "end": 150
                    },
                    "name": null,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 153,
                                        "end": 155
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 156,
                                        "end": 157
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
                                            "start": 157,
                                            "end": 157
                                        },
                                        "flags": 256,
                                        "start": 157,
                                        "end": 157
                                    },
                                    "flags": 0,
                                    "start": 155,
                                    "end": 157
                                },
                                "flags": 256,
                                "start": 152,
                                "end": 157
                            }
                        ],
                        "flags": 256,
                        "start": 152,
                        "end": 157
                    },
                    "flags": 256,
                    "start": 145,
                    "end": 157
                },
                "flags": 256,
                "start": 143,
                "end": 157
            },
            "flags": 128,
            "start": 143,
            "end": 157
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 162,
                "end": 162
            },
            "flags": 128,
            "start": 160,
            "end": 163
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 165,
            "end": 166
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
                        "flags": 768,
                        "start": 168,
                        "end": 173
                    },
                    "name": null,
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
                                    "flags": 768,
                                    "start": 175,
                                    "end": 178
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 178,
                                        "end": 181
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 8192,
                                        "start": 182,
                                        "end": 183
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
                                            "start": 183,
                                            "end": 183
                                        },
                                        "flags": 256,
                                        "start": 183,
                                        "end": 183
                                    },
                                    "flags": 8192,
                                    "start": 181,
                                    "end": 183
                                },
                                "flags": 256,
                                "start": 175,
                                "end": 183
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 184,
                                        "end": 184
                                    },
                                    "flags": 256,
                                    "start": 183,
                                    "end": 185
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 183,
                                "end": 185
                            }
                        ],
                        "flags": 256,
                        "start": 175,
                        "end": 186
                    },
                    "flags": 256,
                    "start": 168,
                    "end": 186
                },
                "flags": 256,
                "start": 166,
                "end": 187
            },
            "flags": 128,
            "start": 166,
            "end": 188
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
                        "flags": 768,
                        "start": 190,
                        "end": 195
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 197,
                                    "end": 202
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 197,
                                "end": 202
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 202,
                                        "end": 205
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 206,
                                        "end": 207
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
                                            "start": 207,
                                            "end": 207
                                        },
                                        "flags": 256,
                                        "start": 207,
                                        "end": 207
                                    },
                                    "flags": 0,
                                    "start": 205,
                                    "end": 207
                                },
                                "flags": 256,
                                "start": 202,
                                "end": 207
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 208,
                                        "end": 208
                                    },
                                    "flags": 256,
                                    "start": 207,
                                    "end": 209
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 207,
                                "end": 209
                            }
                        ],
                        "flags": 256,
                        "start": 197,
                        "end": 210
                    },
                    "flags": 256,
                    "start": 190,
                    "end": 210
                },
                "flags": 256,
                "start": 188,
                "end": 211
            },
            "flags": 128,
            "start": 188,
            "end": 212
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
                        "flags": 768,
                        "start": 214,
                        "end": 219
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 221,
                                    "end": 226
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 221,
                                "end": 226
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#a",
                                    "flags": 768,
                                    "start": 226,
                                    "end": 229
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 226,
                                "end": 229
                            }
                        ],
                        "flags": 256,
                        "start": 221,
                        "end": 229
                    },
                    "flags": 256,
                    "start": 214,
                    "end": 229
                },
                "flags": 256,
                "start": 212,
                "end": 229
            },
            "flags": 128,
            "start": 212,
            "end": 229
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 234,
                "end": 234
            },
            "flags": 128,
            "start": 232,
            "end": 235
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 237,
            "end": 238
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 240,
                            "end": 245
                        },
                        "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 247,
                                        "end": 252
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 768,
                                            "start": 252,
                                            "end": 255
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 2048,
                                            "start": 256,
                                            "end": 257
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
                                                "start": 257,
                                                "end": 257
                                            },
                                            "flags": 256,
                                            "start": 257,
                                            "end": 257
                                        },
                                        "flags": 2048,
                                        "start": 255,
                                        "end": 257
                                    },
                                    "flags": 256,
                                    "start": 247,
                                    "end": 257
                                }
                            ],
                            "flags": 256,
                            "start": 247,
                            "end": 257
                        },
                        "flags": 256,
                        "start": 240,
                        "end": 257
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 257,
                        "end": 259
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 259,
                        "end": 261
                    },
                    "flags": 256,
                    "start": 240,
                    "end": 261
                },
                "flags": 256,
                "start": 238,
                "end": 261
            },
            "flags": 128,
            "start": 238,
            "end": 261
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 263,
            "end": 264
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
                        "flags": 768,
                        "start": 266,
                        "end": 271
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
                                "staticToken": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 273,
                                    "end": 278
                                },
                                "key": {
                                    "kind": 67109115,
                                    "text": "#a",
                                    "flags": 768,
                                    "start": 278,
                                    "end": 281
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 273,
                                "end": 281
                            }
                        ],
                        "flags": 256,
                        "start": 273,
                        "end": 281
                    },
                    "flags": 256,
                    "start": 266,
                    "end": 281
                },
                "flags": 256,
                "start": 264,
                "end": 281
            },
            "flags": 128,
            "start": 264,
            "end": 281
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 286,
                "end": 286
            },
            "flags": 128,
            "start": 284,
            "end": 287
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 289,
            "end": 290
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
                        "flags": 768,
                        "start": 292,
                        "end": 297
                    },
                    "name": null,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 299,
                                        "end": 301
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
                                                    "text": "arguments",
                                                    "rawText": "arguments",
                                                    "flags": 768,
                                                    "start": 302,
                                                    "end": 311
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 302,
                                                "end": 311
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 302,
                                        "end": 312
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
                                            "start": 314,
                                            "end": 314
                                        },
                                        "flags": 256,
                                        "start": 312,
                                        "end": 315
                                    },
                                    "flags": 0,
                                    "start": 301,
                                    "end": 315
                                },
                                "flags": 256,
                                "start": 299,
                                "end": 315
                            }
                        ],
                        "flags": 256,
                        "start": 299,
                        "end": 316
                    },
                    "flags": 256,
                    "start": 292,
                    "end": 316
                },
                "flags": 256,
                "start": 290,
                "end": 317
            },
            "flags": 128,
            "start": 290,
            "end": 318
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
                        "flags": 768,
                        "start": 320,
                        "end": 325
                    },
                    "name": null,
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
                                "getKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 327,
                                    "end": 330
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 330,
                                        "end": 333
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
                                                    "text": "arguments",
                                                    "rawText": "arguments",
                                                    "flags": 768,
                                                    "start": 334,
                                                    "end": 343
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 334,
                                                "end": 343
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 334,
                                        "end": 344
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
                                            "start": 346,
                                            "end": 346
                                        },
                                        "flags": 256,
                                        "start": 344,
                                        "end": 347
                                    },
                                    "flags": 4096,
                                    "start": 333,
                                    "end": 347
                                },
                                "flags": 256,
                                "start": 327,
                                "end": 347
                            }
                        ],
                        "flags": 256,
                        "start": 327,
                        "end": 348
                    },
                    "flags": 256,
                    "start": 320,
                    "end": 348
                },
                "flags": 256,
                "start": 318,
                "end": 349
            },
            "flags": 128,
            "start": 318,
            "end": 350
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
                        "flags": 768,
                        "start": 353,
                        "end": 358
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 360,
                                    "end": 361
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 360,
                                "end": 361
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 67109632,
                                            "start": 362,
                                            "end": 365
                                        },
                                        "flags": 256,
                                        "start": 361,
                                        "end": 366
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 367,
                                        "end": 368
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
                                            "start": 370,
                                            "end": 370
                                        },
                                        "flags": 256,
                                        "start": 368,
                                        "end": 372
                                    },
                                    "flags": 0,
                                    "start": 366,
                                    "end": 372
                                },
                                "flags": 256,
                                "start": 361,
                                "end": 372
                            }
                        ],
                        "flags": 256,
                        "start": 360,
                        "end": 373
                    },
                    "flags": 256,
                    "start": 353,
                    "end": 373
                },
                "flags": 256,
                "start": 350,
                "end": 374
            },
            "flags": 128,
            "start": 350,
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
                        "flags": 768,
                        "start": 377,
                        "end": 382
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 387,
                                    "end": 389
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 384,
                                "end": 389
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 67109632,
                                            "start": 390,
                                            "end": 393
                                        },
                                        "flags": 256,
                                        "start": 389,
                                        "end": 394
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 395,
                                        "end": 396
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
                                            "start": 398,
                                            "end": 398
                                        },
                                        "flags": 256,
                                        "start": 396,
                                        "end": 400
                                    },
                                    "flags": 0,
                                    "start": 394,
                                    "end": 400
                                },
                                "flags": 256,
                                "start": 389,
                                "end": 400
                            }
                        ],
                        "flags": 256,
                        "start": 384,
                        "end": 401
                    },
                    "flags": 256,
                    "start": 377,
                    "end": 401
                },
                "flags": 256,
                "start": 375,
                "end": 402
            },
            "flags": 128,
            "start": 375,
            "end": 403
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
                        "flags": 768,
                        "start": 405,
                        "end": 410
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 415,
                                    "end": 417
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 412,
                                "end": 417
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 67109632,
                                            "start": 418,
                                            "end": 421
                                        },
                                        "flags": 256,
                                        "start": 417,
                                        "end": 422
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
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 423,
                                                    "end": 426
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 423,
                                                "end": 426
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 423,
                                        "end": 427
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
                                            "start": 429,
                                            "end": 429
                                        },
                                        "flags": 256,
                                        "start": 427,
                                        "end": 431
                                    },
                                    "flags": 0,
                                    "start": 422,
                                    "end": 431
                                },
                                "flags": 256,
                                "start": 417,
                                "end": 431
                            }
                        ],
                        "flags": 256,
                        "start": 412,
                        "end": 432
                    },
                    "flags": 256,
                    "start": 405,
                    "end": 432
                },
                "flags": 256,
                "start": 403,
                "end": 433
            },
            "flags": 128,
            "start": 403,
            "end": 434
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
                        "flags": 768,
                        "start": 436,
                        "end": 441
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
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 444,
                                    "end": 445
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 443,
                                "end": 445
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 67109632,
                                            "start": 446,
                                            "end": 449
                                        },
                                        "flags": 256,
                                        "start": 445,
                                        "end": 450
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 451,
                                        "end": 452
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
                                            "start": 454,
                                            "end": 454
                                        },
                                        "flags": 256,
                                        "start": 452,
                                        "end": 456
                                    },
                                    "flags": 0,
                                    "start": 450,
                                    "end": 456
                                },
                                "flags": 256,
                                "start": 445,
                                "end": 456
                            }
                        ],
                        "flags": 256,
                        "start": 443,
                        "end": 457
                    },
                    "flags": 256,
                    "start": 436,
                    "end": 457
                },
                "flags": 256,
                "start": 434,
                "end": 458
            },
            "flags": 128,
            "start": 434,
            "end": 459
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
                        "flags": 768,
                        "start": 461,
                        "end": 466
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
                                "staticToken": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 468,
                                    "end": 473
                                },
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 473,
                                    "end": 475
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 468,
                                "end": 475
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 67109632,
                                            "start": 476,
                                            "end": 479
                                        },
                                        "flags": 256,
                                        "start": 475,
                                        "end": 480
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 481,
                                        "end": 482
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
                                            "start": 484,
                                            "end": 484
                                        },
                                        "flags": 256,
                                        "start": 482,
                                        "end": 486
                                    },
                                    "flags": 0,
                                    "start": 480,
                                    "end": 486
                                },
                                "flags": 256,
                                "start": 475,
                                "end": 486
                            }
                        ],
                        "flags": 256,
                        "start": 468,
                        "end": 487
                    },
                    "flags": 256,
                    "start": 461,
                    "end": 487
                },
                "flags": 256,
                "start": 459,
                "end": 488
            },
            "flags": 128,
            "start": 459,
            "end": 489
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 491,
                            "end": 496
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
                                    "staticToken": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 498,
                                        "end": 503
                                    },
                                    "key": {
                                        "kind": 67109115,
                                        "text": "#",
                                        "flags": 768,
                                        "start": 505,
                                        "end": 506
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 498,
                                    "end": 506
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticToken": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "a]() { }});",
                                                "rawText": "'a]() { }});",
                                                "flags": 100664064,
                                                "start": 507,
                                                "end": 519
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 768,
                                                            "start": 522,
                                                            "end": 527
                                                        },
                                                        "name": null,
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
                                                                        "flags": 768,
                                                                        "start": 529,
                                                                        "end": 532
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 67109115,
                                                                            "text": "#a",
                                                                            "flags": 768,
                                                                            "start": 532,
                                                                            "end": 535
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 8192,
                                                                            "start": 536,
                                                                            "end": 537
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
                                                                                "start": 539,
                                                                                "end": 539
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 537,
                                                                            "end": 540
                                                                        },
                                                                        "flags": 8192,
                                                                        "start": 535,
                                                                        "end": 540
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 529,
                                                                    "end": 540
                                                                },
                                                                {
                                                                    "kind": 278,
                                                                    "declareToken": null,
                                                                    "decorators": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 82031,
                                                                        "flags": 768,
                                                                        "start": 540,
                                                                        "end": 544
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 67109115,
                                                                            "text": "#a",
                                                                            "flags": 768,
                                                                            "start": 544,
                                                                            "end": 547
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 8192,
                                                                            "start": 548,
                                                                            "end": 549
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
                                                                                "start": 551,
                                                                                "end": 551
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 549,
                                                                            "end": 552
                                                                        },
                                                                        "flags": 8192,
                                                                        "start": 547,
                                                                        "end": 552
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 540,
                                                                    "end": 552
                                                                }
                                                            ],
                                                            "flags": 256,
                                                            "start": 529,
                                                            "end": 553
                                                        },
                                                        "flags": 256,
                                                        "start": 522,
                                                        "end": 553
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 522,
                                                "end": 553
                                            },
                                            "flags": 256,
                                            "start": 507,
                                            "end": 554
                                        },
                                        "flags": 256,
                                        "start": 506,
                                        "end": 554
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 506,
                                    "end": 554
                                },
                                {
                                    "kind": 281,
                                    "flags": 768,
                                    "start": 554,
                                    "end": 555
                                }
                            ],
                            "flags": 256,
                            "start": 498,
                            "end": 555
                        },
                        "flags": 256,
                        "start": 491,
                        "end": 555
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 768,
                                    "start": 557,
                                    "end": 562
                                },
                                "name": null,
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
                                                "flags": 768,
                                                "start": 564,
                                                "end": 567
                                            },
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 67109115,
                                                    "text": "#a",
                                                    "flags": 768,
                                                    "start": 567,
                                                    "end": 570
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 8192,
                                                    "start": 571,
                                                    "end": 572
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
                                                        "start": 574,
                                                        "end": 574
                                                    },
                                                    "flags": 256,
                                                    "start": 572,
                                                    "end": 575
                                                },
                                                "flags": 8192,
                                                "start": 570,
                                                "end": 575
                                            },
                                            "flags": 256,
                                            "start": 564,
                                            "end": 575
                                        },
                                        {
                                            "kind": 280,
                                            "decorators": null,
                                            "declaredToken": null,
                                            "staticToken": null,
                                            "asyncKeyword": null,
                                            "key": {
                                                "kind": 67109115,
                                                "text": "#",
                                                "flags": 768,
                                                "start": 579,
                                                "end": 581
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 575,
                                            "end": 581
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 67109632,
                                                        "start": 582,
                                                        "end": 585
                                                    },
                                                    "flags": 256,
                                                    "start": 581,
                                                    "end": 586
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 587,
                                                    "end": 588
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
                                                        "start": 590,
                                                        "end": 590
                                                    },
                                                    "flags": 256,
                                                    "start": 588,
                                                    "end": 591
                                                },
                                                "flags": 0,
                                                "start": 586,
                                                "end": 591
                                            },
                                            "flags": 256,
                                            "start": 581,
                                            "end": 591
                                        }
                                    ],
                                    "flags": 256,
                                    "start": 564,
                                    "end": 592
                                },
                                "flags": 256,
                                "start": 557,
                                "end": 592
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 557,
                        "end": 592
                    },
                    "flags": 256,
                    "start": 491,
                    "end": 593
                },
                "flags": 256,
                "start": 489,
                "end": 593
            },
            "flags": 128,
            "start": 489,
            "end": 594
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
                        "flags": 768,
                        "start": 596,
                        "end": 601
                    },
                    "name": null,
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
                                "getKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 603,
                                    "end": 606
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 606,
                                        "end": 609
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
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 768,
                                                    "start": 610,
                                                    "end": 613
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 610,
                                                "end": 613
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 610,
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
                                            "start": 616,
                                            "end": 616
                                        },
                                        "flags": 256,
                                        "start": 614,
                                        "end": 617
                                    },
                                    "flags": 4096,
                                    "start": 609,
                                    "end": 617
                                },
                                "flags": 256,
                                "start": 603,
                                "end": 617
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 617,
                                    "end": 621
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 621,
                                        "end": 624
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
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 768,
                                                    "start": 625,
                                                    "end": 628
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 625,
                                                "end": 628
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 625,
                                        "end": 629
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
                                            "start": 631,
                                            "end": 631
                                        },
                                        "flags": 256,
                                        "start": 629,
                                        "end": 632
                                    },
                                    "flags": 4096,
                                    "start": 624,
                                    "end": 632
                                },
                                "flags": 256,
                                "start": 617,
                                "end": 632
                            }
                        ],
                        "flags": 256,
                        "start": 603,
                        "end": 633
                    },
                    "flags": 256,
                    "start": 596,
                    "end": 633
                },
                "flags": 256,
                "start": 594,
                "end": 634
            },
            "flags": 128,
            "start": 594,
            "end": 635
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
                        "flags": 768,
                        "start": 637,
                        "end": 642
                    },
                    "name": null,
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
                                "getKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 644,
                                    "end": 647
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 647,
                                        "end": 650
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
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 768,
                                                    "start": 651,
                                                    "end": 654
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 651,
                                                "end": 654
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 651,
                                        "end": 655
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
                                            "start": 657,
                                            "end": 657
                                        },
                                        "flags": 256,
                                        "start": 655,
                                        "end": 658
                                    },
                                    "flags": 4096,
                                    "start": 650,
                                    "end": 658
                                },
                                "flags": 256,
                                "start": 644,
                                "end": 658
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 662,
                                    "end": 664
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 658,
                                "end": 664
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 67109632,
                                            "start": 665,
                                            "end": 668
                                        },
                                        "flags": 256,
                                        "start": 664,
                                        "end": 669
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
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 768,
                                                    "start": 670,
                                                    "end": 673
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 670,
                                                "end": 673
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 670,
                                        "end": 674
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
                                            "start": 676,
                                            "end": 676
                                        },
                                        "flags": 256,
                                        "start": 674,
                                        "end": 677
                                    },
                                    "flags": 0,
                                    "start": 669,
                                    "end": 677
                                },
                                "flags": 256,
                                "start": 664,
                                "end": 677
                            }
                        ],
                        "flags": 256,
                        "start": 644,
                        "end": 678
                    },
                    "flags": 256,
                    "start": 637,
                    "end": 678
                },
                "flags": 256,
                "start": 635,
                "end": 679
            },
            "flags": 128,
            "start": 635,
            "end": 680
        }
    ],
    "isModule": true,
    "text": "(class {#a() { }});\n\n(class {#a() : 0});\n(class {#a() =});\n(class {#a() => {}});\n(class {#a => {}});\n(class {*#a() = 0});\n(class {*#a() => 0});\n(class {*#a() => {}});\n(class {get #a()[]});\n(class {yield #a()[]});\n(class {yield #a => {}});\n(class {async #a() = 0});\n(class {async #a => {}});\n(class {#a(arguments) {}});\n(class {set #a(arguments) {}});\n\n(class {#['a']() { }});\n(class {get #['a']() { }});\n(class {set #['a'](foo) { }});\n(class {*#['a']() { }});\n(class {async #['a']() { }});\n(class {async *#['a]() { }});\n\n(class {get #a() {} get #a() {}});\n(class {get #a() {} get #['a']() {}});\n(class {set #a(val) {} set #a(val) {}});\n(class {set #a(val) {} set #['a'](val) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 680
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 33, end: 35
@{x2716}@ Unexpected token. - start: 33, end: 35
@{x2716}@ Unexpected token. - start: 33, end: 35
@{x2716}@ Unexpected token. - start: 33, end: 35
@{x2716}@ Unexpected token. - start: 33, end: 35
@{x2716}@ Statement expected - start: 33, end: 35
@{x2716}@ Statement expected - start: 37, end: 38
@{x2716}@ Statement expected - start: 38, end: 39
@{x2716}@ Unexpected token. - start: 53, end: 55
@{x2716}@ Unexpected token. - start: 53, end: 55
@{x2716}@ Unexpected token. - start: 53, end: 55
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 53, end: 55
@{x2716}@ Expression expected - start: 55, end: 56
@{x2716}@ Unexpected token. - start: 55, end: 56
@{x2716}@ Statement expected - start: 55, end: 56
@{x2716}@ Statement expected - start: 56, end: 57
@{x2716}@ Unexpected token. - start: 71, end: 74
@{x2716}@ Unexpected token. - start: 71, end: 74
@{x2716}@ Unexpected token. - start: 71, end: 74
@{x2716}@ Unexpected token. - start: 71, end: 74
@{x2716}@ Unexpected token. - start: 71, end: 74
@{x2716}@ Statement expected - start: 71, end: 74
@{x2716}@ Statement expected - start: 77, end: 78
@{x2716}@ Statement expected - start: 78, end: 79
@{x2716}@ Unexpected token. - start: 91, end: 94
@{x2716}@ Unexpected token. - start: 91, end: 94
@{x2716}@ Unexpected token. - start: 91, end: 94
@{x2716}@ Statement expected - start: 91, end: 94
@{x2716}@ Statement expected - start: 97, end: 98
@{x2716}@ Statement expected - start: 98, end: 99
@{x2716}@ Unexpected token. - start: 114, end: 116
@{x2716}@ Unexpected token. - start: 114, end: 116
@{x2716}@ Unexpected token. - start: 114, end: 116
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 114, end: 116
@{x2716}@ Unexpected token. - start: 118, end: 119
@{x2716}@ Statement expected - start: 118, end: 119
@{x2716}@ Statement expected - start: 119, end: 120
@{x2716}@ Unexpected token. - start: 135, end: 138
@{x2716}@ Unexpected token. - start: 135, end: 138
@{x2716}@ Unexpected token. - start: 135, end: 138
@{x2716}@ Unexpected token. - start: 135, end: 138
@{x2716}@ Unexpected token. - start: 135, end: 138
@{x2716}@ Statement expected - start: 135, end: 138
@{x2716}@ Statement expected - start: 140, end: 141
@{x2716}@ Statement expected - start: 141, end: 142
@{x2716}@ Unexpected token. - start: 157, end: 160
@{x2716}@ Unexpected token. - start: 157, end: 160
@{x2716}@ Unexpected token. - start: 157, end: 160
@{x2716}@ Unexpected token. - start: 157, end: 160
@{x2716}@ Unexpected token. - start: 157, end: 160
@{x2716}@ Statement expected - start: 157, end: 160
@{x2716}@ Statement expected - start: 163, end: 164
@{x2716}@ Statement expected - start: 164, end: 165
@{x2716}@ Unexpected token. - start: 183, end: 184
@{x2716}@ Unexpected token. - start: 183, end: 184
@{x2716}@ Expression expected - start: 184, end: 185
@{x2716}@ Unexpected token. - start: 207, end: 208
@{x2716}@ Unexpected token. - start: 207, end: 208
@{x2716}@ Expression expected - start: 208, end: 209
@{x2716}@ Unexpected token. - start: 229, end: 232
@{x2716}@ Unexpected token. - start: 229, end: 232
@{x2716}@ Unexpected token. - start: 229, end: 232
@{x2716}@ Statement expected - start: 229, end: 232
@{x2716}@ Statement expected - start: 235, end: 236
@{x2716}@ Statement expected - start: 236, end: 237
@{x2716}@ Unexpected token. - start: 257, end: 259
@{x2716}@ Unexpected token. - start: 257, end: 259
@{x2716}@ Unexpected token. - start: 257, end: 259
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 257, end: 259
@{x2716}@ Unexpected token. - start: 261, end: 262
@{x2716}@ Statement expected - start: 261, end: 262
@{x2716}@ Statement expected - start: 262, end: 263
@{x2716}@ Unexpected token. - start: 281, end: 284
@{x2716}@ Unexpected token. - start: 281, end: 284
@{x2716}@ Unexpected token. - start: 281, end: 284
@{x2716}@ Statement expected - start: 281, end: 284
@{x2716}@ Statement expected - start: 287, end: 288
@{x2716}@ Statement expected - start: 288, end: 289
@{x2716}@ Unexpected token. - start: 360, end: 361
@{x2716}@ Unexpected token. - start: 387, end: 389
@{x2716}@ Unexpected token. - start: 415, end: 417
@{x2716}@ Unexpected token. - start: 444, end: 445
@{x2716}@ Unexpected token. - start: 473, end: 475
@{x2716}@ Unexpected token. - start: 505, end: 506
@{x2716}@ Unterminated string literal - start: 507, end: 519
@{x2716}@ Unexpected token. - start: 554, end: 555
@{x2716}@ Unexpected token. - start: 555, end: 557
@{x2716}@ Unexpected token. - start: 579, end: 581
@{x2716}@ Unexpected token. - start: 593, end: 594
@{x2716}@ Unexpected token. - start: 662, end: 664

```

