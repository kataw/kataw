# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js

(class C { #+aaa });

(class C { #@{x1f44d}@ });

(class C { # aaa });

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
                    "kind": 198,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 2,
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticToken": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 67109115,
                                        "text": "#",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 13
                                }
                            ],
                            "flags": 256,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 768,
                        "start": 13,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "aaa",
                        "rawText": "aaa",
                        "flags": 768,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 20,
            "end": 21
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
                        "start": 24,
                        "end": 29
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 29,
                        "end": 31
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
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 33,
                                    "end": 35
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 33,
                                "end": 35
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "@{x1f44d}@",
                                    "rawText": "C",
                                    "flags": 768,
                                    "start": 35,
                                    "end": 37
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            }
                        ],
                        "flags": 256,
                        "start": 33,
                        "end": 39
                    },
                    "flags": 256,
                    "start": 24,
                    "end": 39
                },
                "flags": 256,
                "start": 21,
                "end": 40
            },
            "flags": 128,
            "start": 21,
            "end": 41
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
                        "start": 44,
                        "end": 49
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 768,
                        "start": 49,
                        "end": 51
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
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 53,
                                    "end": 55
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 53,
                                "end": 55
                            },
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "aaa",
                                    "rawText": "aaa",
                                    "flags": 768,
                                    "start": 55,
                                    "end": 59
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 55,
                                "end": 59
                            }
                        ],
                        "flags": 256,
                        "start": 53,
                        "end": 61
                    },
                    "flags": 256,
                    "start": 44,
                    "end": 61
                },
                "flags": 256,
                "start": 41,
                "end": 62
            },
            "flags": 128,
            "start": 41,
            "end": 63
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
                        "start": 66,
                        "end": 71
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
                                        "start": 73,
                                        "end": 75
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 76,
                                        "end": 77
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
                                            "start": 79,
                                            "end": 79
                                        },
                                        "flags": 256,
                                        "start": 77,
                                        "end": 81
                                    },
                                    "flags": 0,
                                    "start": 75,
                                    "end": 81
                                },
                                "flags": 0,
                                "start": 73,
                                "end": 81
                            }
                        ],
                        "flags": 256,
                        "start": 73,
                        "end": 82
                    },
                    "flags": 256,
                    "start": 66,
                    "end": 82
                },
                "flags": 256,
                "start": 63,
                "end": 83
            },
            "flags": 128,
            "start": 63,
            "end": 84
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
                        "start": 87,
                        "end": 92
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
                                        "start": 94,
                                        "end": 96
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 97,
                                        "end": 98
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
                                            "start": 98,
                                            "end": 98
                                        },
                                        "flags": 256,
                                        "start": 98,
                                        "end": 98
                                    },
                                    "flags": 0,
                                    "start": 96,
                                    "end": 98
                                },
                                "flags": 0,
                                "start": 94,
                                "end": 98
                            }
                        ],
                        "flags": 256,
                        "start": 94,
                        "end": 98
                    },
                    "flags": 256,
                    "start": 87,
                    "end": 98
                },
                "flags": 256,
                "start": 84,
                "end": 98
            },
            "flags": 128,
            "start": 84,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 100,
                "end": 102
            },
            "flags": 128,
            "start": 100,
            "end": 102
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 104,
            "end": 105
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
                            "start": 107,
                            "end": 112
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
                                            "start": 114,
                                            "end": 116
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 117,
                                            "end": 118
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
                                            "start": 118,
                                            "end": 118
                                        },
                                        "flags": 0,
                                        "start": 116,
                                        "end": 118
                                    },
                                    "flags": 0,
                                    "start": 114,
                                    "end": 118
                                }
                            ],
                            "flags": 256,
                            "start": 114,
                            "end": 118
                        },
                        "flags": 256,
                        "start": 107,
                        "end": 118
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 118,
                        "end": 120
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 120,
                        "end": 120
                    },
                    "flags": 256,
                    "start": 107,
                    "end": 120
                },
                "flags": 256,
                "start": 105,
                "end": 120
            },
            "flags": 128,
            "start": 105,
            "end": 120
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 122,
            "end": 123
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
                        "start": 125,
                        "end": 130
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
                                        "start": 132,
                                        "end": 134
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 135,
                                        "end": 136
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
                                            "start": 136,
                                            "end": 136
                                        },
                                        "flags": 256,
                                        "start": 136,
                                        "end": 136
                                    },
                                    "flags": 0,
                                    "start": 134,
                                    "end": 136
                                },
                                "flags": 0,
                                "start": 132,
                                "end": 136
                            }
                        ],
                        "flags": 256,
                        "start": 132,
                        "end": 136
                    },
                    "flags": 256,
                    "start": 125,
                    "end": 136
                },
                "flags": 256,
                "start": 123,
                "end": 136
            },
            "flags": 128,
            "start": 123,
            "end": 136
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 141,
                "end": 141
            },
            "flags": 128,
            "start": 139,
            "end": 142
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 144,
            "end": 145
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
                        "start": 147,
                        "end": 152
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
                                    "start": 154,
                                    "end": 156
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 154,
                                "end": 156
                            }
                        ],
                        "flags": 256,
                        "start": 154,
                        "end": 156
                    },
                    "flags": 256,
                    "start": 147,
                    "end": 156
                },
                "flags": 256,
                "start": 145,
                "end": 156
            },
            "flags": 128,
            "start": 145,
            "end": 156
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 161,
                "end": 161
            },
            "flags": 128,
            "start": 159,
            "end": 162
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 164,
            "end": 165
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
                            "start": 167,
                            "end": 172
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
                                            "start": 175,
                                            "end": 177
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 178,
                                            "end": 179
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
                                                "start": 179,
                                                "end": 179
                                            },
                                            "flags": 256,
                                            "start": 179,
                                            "end": 179
                                        },
                                        "flags": 0,
                                        "start": 177,
                                        "end": 179
                                    },
                                    "flags": 0,
                                    "start": 174,
                                    "end": 179
                                }
                            ],
                            "flags": 256,
                            "start": 174,
                            "end": 179
                        },
                        "flags": 256,
                        "start": 167,
                        "end": 179
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 179,
                        "end": 181
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 181,
                        "end": 183
                    },
                    "flags": 256,
                    "start": 167,
                    "end": 183
                },
                "flags": 256,
                "start": 165,
                "end": 183
            },
            "flags": 128,
            "start": 165,
            "end": 183
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 185,
            "end": 186
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
                        "start": 188,
                        "end": 193
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
                                        "start": 196,
                                        "end": 198
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 199,
                                        "end": 200
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
                                            "start": 200,
                                            "end": 200
                                        },
                                        "flags": 256,
                                        "start": 200,
                                        "end": 200
                                    },
                                    "flags": 0,
                                    "start": 198,
                                    "end": 200
                                },
                                "flags": 0,
                                "start": 195,
                                "end": 200
                            }
                        ],
                        "flags": 256,
                        "start": 195,
                        "end": 200
                    },
                    "flags": 256,
                    "start": 188,
                    "end": 200
                },
                "flags": 256,
                "start": 186,
                "end": 200
            },
            "flags": 128,
            "start": 186,
            "end": 200
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 203,
                "end": 205
            },
            "flags": 128,
            "start": 203,
            "end": 205
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 207,
            "end": 208
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
                        "start": 210,
                        "end": 215
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
                                        "start": 218,
                                        "end": 220
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 221,
                                        "end": 222
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
                                            "start": 222,
                                            "end": 222
                                        },
                                        "flags": 256,
                                        "start": 222,
                                        "end": 222
                                    },
                                    "flags": 0,
                                    "start": 220,
                                    "end": 222
                                },
                                "flags": 0,
                                "start": 217,
                                "end": 222
                            }
                        ],
                        "flags": 256,
                        "start": 217,
                        "end": 222
                    },
                    "flags": 256,
                    "start": 210,
                    "end": 222
                },
                "flags": 256,
                "start": 208,
                "end": 222
            },
            "flags": 128,
            "start": 208,
            "end": 222
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 227,
                "end": 227
            },
            "flags": 128,
            "start": 225,
            "end": 228
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 230,
            "end": 231
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
                        "start": 233,
                        "end": 238
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
                                    "start": 240,
                                    "end": 243
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 243,
                                        "end": 246
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 8192,
                                        "start": 247,
                                        "end": 248
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
                                            "start": 248,
                                            "end": 248
                                        },
                                        "flags": 256,
                                        "start": 248,
                                        "end": 248
                                    },
                                    "flags": 8192,
                                    "start": 246,
                                    "end": 248
                                },
                                "flags": 8192,
                                "start": 240,
                                "end": 248
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
                                        "flags": 12,
                                        "start": 249,
                                        "end": 249
                                    },
                                    "flags": 256,
                                    "start": 248,
                                    "end": 250
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 248,
                                "end": 250
                            }
                        ],
                        "flags": 256,
                        "start": 240,
                        "end": 251
                    },
                    "flags": 256,
                    "start": 233,
                    "end": 251
                },
                "flags": 256,
                "start": 231,
                "end": 252
            },
            "flags": 128,
            "start": 231,
            "end": 253
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
                        "start": 255,
                        "end": 260
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
                                    "start": 262,
                                    "end": 267
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 262,
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
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 267,
                                        "end": 270
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 271,
                                        "end": 272
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
                                        "start": 272,
                                        "end": 272
                                    },
                                    "flags": 0,
                                    "start": 270,
                                    "end": 272
                                },
                                "flags": 0,
                                "start": 267,
                                "end": 272
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
                                        "flags": 12,
                                        "start": 273,
                                        "end": 273
                                    },
                                    "flags": 256,
                                    "start": 272,
                                    "end": 274
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 272,
                                "end": 274
                            }
                        ],
                        "flags": 256,
                        "start": 262,
                        "end": 275
                    },
                    "flags": 256,
                    "start": 255,
                    "end": 275
                },
                "flags": 256,
                "start": 253,
                "end": 276
            },
            "flags": 128,
            "start": 253,
            "end": 277
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
                        "start": 279,
                        "end": 284
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
                                    "start": 286,
                                    "end": 291
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 286,
                                "end": 291
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
                                    "start": 291,
                                    "end": 294
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 291,
                                "end": 294
                            }
                        ],
                        "flags": 256,
                        "start": 286,
                        "end": 294
                    },
                    "flags": 256,
                    "start": 279,
                    "end": 294
                },
                "flags": 256,
                "start": 277,
                "end": 294
            },
            "flags": 128,
            "start": 277,
            "end": 294
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 299,
                "end": 299
            },
            "flags": 128,
            "start": 297,
            "end": 300
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 302,
            "end": 303
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
                            "start": 305,
                            "end": 310
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
                                        "start": 312,
                                        "end": 317
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 768,
                                            "start": 317,
                                            "end": 320
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 2048,
                                            "start": 321,
                                            "end": 322
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
                                                "start": 322,
                                                "end": 322
                                            },
                                            "flags": 256,
                                            "start": 322,
                                            "end": 322
                                        },
                                        "flags": 2048,
                                        "start": 320,
                                        "end": 322
                                    },
                                    "flags": 2048,
                                    "start": 312,
                                    "end": 322
                                }
                            ],
                            "flags": 256,
                            "start": 312,
                            "end": 322
                        },
                        "flags": 256,
                        "start": 305,
                        "end": 322
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 322,
                        "end": 324
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 324,
                        "end": 326
                    },
                    "flags": 256,
                    "start": 305,
                    "end": 326
                },
                "flags": 256,
                "start": 303,
                "end": 326
            },
            "flags": 128,
            "start": 303,
            "end": 326
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 328,
            "end": 329
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
                        "start": 331,
                        "end": 336
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
                                    "start": 338,
                                    "end": 343
                                },
                                "key": {
                                    "kind": 67109115,
                                    "text": "#a",
                                    "flags": 768,
                                    "start": 343,
                                    "end": 346
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 338,
                                "end": 346
                            }
                        ],
                        "flags": 256,
                        "start": 338,
                        "end": 346
                    },
                    "flags": 256,
                    "start": 331,
                    "end": 346
                },
                "flags": 256,
                "start": 329,
                "end": 346
            },
            "flags": 128,
            "start": 329,
            "end": 346
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 351,
                "end": 351
            },
            "flags": 128,
            "start": 349,
            "end": 352
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 354,
            "end": 355
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
                        "start": 357,
                        "end": 362
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
                                        "start": 364,
                                        "end": 366
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
                                                    "start": 367,
                                                    "end": 376
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 367,
                                                "end": 376
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 367,
                                        "end": 377
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
                                            "start": 379,
                                            "end": 379
                                        },
                                        "flags": 256,
                                        "start": 377,
                                        "end": 380
                                    },
                                    "flags": 0,
                                    "start": 366,
                                    "end": 380
                                },
                                "flags": 0,
                                "start": 364,
                                "end": 380
                            }
                        ],
                        "flags": 256,
                        "start": 364,
                        "end": 381
                    },
                    "flags": 256,
                    "start": 357,
                    "end": 381
                },
                "flags": 256,
                "start": 355,
                "end": 382
            },
            "flags": 128,
            "start": 355,
            "end": 383
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
                        "start": 385,
                        "end": 390
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
                                    "start": 392,
                                    "end": 395
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 395,
                                        "end": 398
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
                                                    "start": 399,
                                                    "end": 408
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 399,
                                                "end": 408
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 399,
                                        "end": 409
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
                                            "start": 411,
                                            "end": 411
                                        },
                                        "flags": 256,
                                        "start": 409,
                                        "end": 412
                                    },
                                    "flags": 4096,
                                    "start": 398,
                                    "end": 412
                                },
                                "flags": 4096,
                                "start": 392,
                                "end": 412
                            }
                        ],
                        "flags": 256,
                        "start": 392,
                        "end": 413
                    },
                    "flags": 256,
                    "start": 385,
                    "end": 413
                },
                "flags": 256,
                "start": 383,
                "end": 414
            },
            "flags": 128,
            "start": 383,
            "end": 415
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
                        "start": 418,
                        "end": 423
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
                                    "start": 425,
                                    "end": 426
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 425,
                                "end": 426
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
                                            "start": 427,
                                            "end": 430
                                        },
                                        "flags": 256,
                                        "start": 426,
                                        "end": 431
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 432,
                                        "end": 433
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
                                            "start": 435,
                                            "end": 435
                                        },
                                        "flags": 256,
                                        "start": 433,
                                        "end": 437
                                    },
                                    "flags": 0,
                                    "start": 431,
                                    "end": 437
                                },
                                "flags": 0,
                                "start": 426,
                                "end": 437
                            }
                        ],
                        "flags": 256,
                        "start": 425,
                        "end": 438
                    },
                    "flags": 256,
                    "start": 418,
                    "end": 438
                },
                "flags": 256,
                "start": 415,
                "end": 439
            },
            "flags": 128,
            "start": 415,
            "end": 440
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
                        "start": 442,
                        "end": 447
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
                                    "start": 452,
                                    "end": 454
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 449,
                                "end": 454
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
                                            "start": 455,
                                            "end": 458
                                        },
                                        "flags": 256,
                                        "start": 454,
                                        "end": 459
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 460,
                                        "end": 461
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
                                            "start": 463,
                                            "end": 463
                                        },
                                        "flags": 256,
                                        "start": 461,
                                        "end": 465
                                    },
                                    "flags": 0,
                                    "start": 459,
                                    "end": 465
                                },
                                "flags": 0,
                                "start": 454,
                                "end": 465
                            }
                        ],
                        "flags": 256,
                        "start": 449,
                        "end": 466
                    },
                    "flags": 256,
                    "start": 442,
                    "end": 466
                },
                "flags": 256,
                "start": 440,
                "end": 467
            },
            "flags": 128,
            "start": 440,
            "end": 468
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
                        "start": 470,
                        "end": 475
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
                                    "start": 480,
                                    "end": 482
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 477,
                                "end": 482
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
                                            "start": 483,
                                            "end": 486
                                        },
                                        "flags": 256,
                                        "start": 482,
                                        "end": 487
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
                                                    "start": 488,
                                                    "end": 491
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 488,
                                                "end": 491
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 488,
                                        "end": 492
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
                                            "start": 494,
                                            "end": 494
                                        },
                                        "flags": 256,
                                        "start": 492,
                                        "end": 496
                                    },
                                    "flags": 0,
                                    "start": 487,
                                    "end": 496
                                },
                                "flags": 0,
                                "start": 482,
                                "end": 496
                            }
                        ],
                        "flags": 256,
                        "start": 477,
                        "end": 497
                    },
                    "flags": 256,
                    "start": 470,
                    "end": 497
                },
                "flags": 256,
                "start": 468,
                "end": 498
            },
            "flags": 128,
            "start": 468,
            "end": 499
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
                        "start": 501,
                        "end": 506
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
                                    "start": 509,
                                    "end": 510
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 508,
                                "end": 510
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
                                            "start": 511,
                                            "end": 514
                                        },
                                        "flags": 256,
                                        "start": 510,
                                        "end": 515
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 516,
                                        "end": 517
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
                                            "start": 519,
                                            "end": 519
                                        },
                                        "flags": 256,
                                        "start": 517,
                                        "end": 521
                                    },
                                    "flags": 0,
                                    "start": 515,
                                    "end": 521
                                },
                                "flags": 0,
                                "start": 510,
                                "end": 521
                            }
                        ],
                        "flags": 256,
                        "start": 508,
                        "end": 522
                    },
                    "flags": 256,
                    "start": 501,
                    "end": 522
                },
                "flags": 256,
                "start": 499,
                "end": 523
            },
            "flags": 128,
            "start": 499,
            "end": 524
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
                        "start": 526,
                        "end": 531
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
                                    "start": 533,
                                    "end": 538
                                },
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 538,
                                    "end": 540
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 533,
                                "end": 540
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
                                            "start": 541,
                                            "end": 544
                                        },
                                        "flags": 256,
                                        "start": 540,
                                        "end": 545
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 546,
                                        "end": 547
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
                                            "start": 549,
                                            "end": 549
                                        },
                                        "flags": 256,
                                        "start": 547,
                                        "end": 551
                                    },
                                    "flags": 0,
                                    "start": 545,
                                    "end": 551
                                },
                                "flags": 0,
                                "start": 540,
                                "end": 551
                            }
                        ],
                        "flags": 256,
                        "start": 533,
                        "end": 552
                    },
                    "flags": 256,
                    "start": 526,
                    "end": 552
                },
                "flags": 256,
                "start": 524,
                "end": 553
            },
            "flags": 128,
            "start": 524,
            "end": 554
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
                            "start": 556,
                            "end": 561
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
                                        "start": 563,
                                        "end": 568
                                    },
                                    "key": {
                                        "kind": 67109115,
                                        "text": "#",
                                        "flags": 768,
                                        "start": 570,
                                        "end": 571
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 563,
                                    "end": 571
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
                                                "start": 572,
                                                "end": 584
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
                                                            "start": 587,
                                                            "end": 592
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
                                                                        "start": 594,
                                                                        "end": 597
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 67109115,
                                                                            "text": "#a",
                                                                            "flags": 768,
                                                                            "start": 597,
                                                                            "end": 600
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 8192,
                                                                            "start": 601,
                                                                            "end": 602
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
                                                                                "start": 604,
                                                                                "end": 604
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 602,
                                                                            "end": 605
                                                                        },
                                                                        "flags": 8192,
                                                                        "start": 600,
                                                                        "end": 605
                                                                    },
                                                                    "flags": 8192,
                                                                    "start": 594,
                                                                    "end": 605
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
                                                                        "start": 605,
                                                                        "end": 609
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 67109115,
                                                                            "text": "#a",
                                                                            "flags": 768,
                                                                            "start": 609,
                                                                            "end": 612
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 8192,
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
                                                                                "start": 616,
                                                                                "end": 616
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 614,
                                                                            "end": 617
                                                                        },
                                                                        "flags": 8192,
                                                                        "start": 612,
                                                                        "end": 617
                                                                    },
                                                                    "flags": 8192,
                                                                    "start": 605,
                                                                    "end": 617
                                                                }
                                                            ],
                                                            "flags": 256,
                                                            "start": 594,
                                                            "end": 618
                                                        },
                                                        "flags": 256,
                                                        "start": 587,
                                                        "end": 618
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 587,
                                                "end": 618
                                            },
                                            "flags": 256,
                                            "start": 572,
                                            "end": 619
                                        },
                                        "flags": 256,
                                        "start": 571,
                                        "end": 619
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 571,
                                    "end": 619
                                },
                                {
                                    "kind": 281,
                                    "flags": 768,
                                    "start": 619,
                                    "end": 620
                                }
                            ],
                            "flags": 256,
                            "start": 563,
                            "end": 620
                        },
                        "flags": 256,
                        "start": 556,
                        "end": 620
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
                                    "start": 622,
                                    "end": 627
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
                                                "start": 629,
                                                "end": 632
                                            },
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 67109115,
                                                    "text": "#a",
                                                    "flags": 768,
                                                    "start": 632,
                                                    "end": 635
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 8192,
                                                    "start": 636,
                                                    "end": 637
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
                                                        "start": 639,
                                                        "end": 639
                                                    },
                                                    "flags": 256,
                                                    "start": 637,
                                                    "end": 640
                                                },
                                                "flags": 8192,
                                                "start": 635,
                                                "end": 640
                                            },
                                            "flags": 8192,
                                            "start": 629,
                                            "end": 640
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
                                                "start": 644,
                                                "end": 646
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 640,
                                            "end": 646
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
                                                        "start": 647,
                                                        "end": 650
                                                    },
                                                    "flags": 256,
                                                    "start": 646,
                                                    "end": 651
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 652,
                                                    "end": 653
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
                                                        "start": 655,
                                                        "end": 655
                                                    },
                                                    "flags": 256,
                                                    "start": 653,
                                                    "end": 656
                                                },
                                                "flags": 0,
                                                "start": 651,
                                                "end": 656
                                            },
                                            "flags": 0,
                                            "start": 646,
                                            "end": 656
                                        }
                                    ],
                                    "flags": 256,
                                    "start": 629,
                                    "end": 657
                                },
                                "flags": 256,
                                "start": 622,
                                "end": 657
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 622,
                        "end": 657
                    },
                    "flags": 256,
                    "start": 556,
                    "end": 658
                },
                "flags": 256,
                "start": 554,
                "end": 658
            },
            "flags": 128,
            "start": 554,
            "end": 659
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
                        "start": 661,
                        "end": 666
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
                                    "start": 668,
                                    "end": 671
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 671,
                                        "end": 674
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
                                                    "start": 675,
                                                    "end": 678
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 675,
                                                "end": 678
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 675,
                                        "end": 679
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
                                            "start": 681,
                                            "end": 681
                                        },
                                        "flags": 256,
                                        "start": 679,
                                        "end": 682
                                    },
                                    "flags": 4096,
                                    "start": 674,
                                    "end": 682
                                },
                                "flags": 4096,
                                "start": 668,
                                "end": 682
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
                                    "start": 682,
                                    "end": 686
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 686,
                                        "end": 689
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
                                                    "start": 690,
                                                    "end": 693
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 690,
                                                "end": 693
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 690,
                                        "end": 694
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
                                            "start": 696,
                                            "end": 696
                                        },
                                        "flags": 256,
                                        "start": 694,
                                        "end": 697
                                    },
                                    "flags": 4096,
                                    "start": 689,
                                    "end": 697
                                },
                                "flags": 4096,
                                "start": 682,
                                "end": 697
                            }
                        ],
                        "flags": 256,
                        "start": 668,
                        "end": 698
                    },
                    "flags": 256,
                    "start": 661,
                    "end": 698
                },
                "flags": 256,
                "start": 659,
                "end": 699
            },
            "flags": 128,
            "start": 659,
            "end": 700
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
                        "start": 702,
                        "end": 707
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
                                    "start": 709,
                                    "end": 712
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 768,
                                        "start": 712,
                                        "end": 715
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
                                                    "start": 716,
                                                    "end": 719
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 716,
                                                "end": 719
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 716,
                                        "end": 720
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
                                            "start": 722,
                                            "end": 722
                                        },
                                        "flags": 256,
                                        "start": 720,
                                        "end": 723
                                    },
                                    "flags": 4096,
                                    "start": 715,
                                    "end": 723
                                },
                                "flags": 4096,
                                "start": 709,
                                "end": 723
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
                                    "start": 727,
                                    "end": 729
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 723,
                                "end": 729
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
                                            "start": 730,
                                            "end": 733
                                        },
                                        "flags": 256,
                                        "start": 729,
                                        "end": 734
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
                                                    "start": 735,
                                                    "end": 738
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 735,
                                                "end": 738
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 735,
                                        "end": 739
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
                                            "start": 741,
                                            "end": 741
                                        },
                                        "flags": 256,
                                        "start": 739,
                                        "end": 742
                                    },
                                    "flags": 0,
                                    "start": 734,
                                    "end": 742
                                },
                                "flags": 0,
                                "start": 729,
                                "end": 742
                            }
                        ],
                        "flags": 256,
                        "start": 709,
                        "end": 743
                    },
                    "flags": 256,
                    "start": 702,
                    "end": 743
                },
                "flags": 256,
                "start": 700,
                "end": 744
            },
            "flags": 128,
            "start": 700,
            "end": 745
        }
    ],
    "isModule": true,
    "text": "\n(class C { #+aaa });\n\n(class C { #@{x1f44d}@ });\n\n(class C { # aaa });\n\n(class {#a() { }});\n\n(class {#a() : 0});\n(class {#a() =});\n(class {#a() => {}});\n(class {#a => {}});\n(class {*#a() = 0});\n(class {*#a() => 0});\n(class {*#a() => {}});\n(class {get #a()[]});\n(class {yield #a()[]});\n(class {yield #a => {}});\n(class {async #a() = 0});\n(class {async #a => {}});\n(class {#a(arguments) {}});\n(class {set #a(arguments) {}});\n\n(class {#['a']() { }});\n(class {get #['a']() { }});\n(class {set #['a'](foo) { }});\n(class {*#['a']() { }});\n(class {async #['a']() { }});\n(class {async *#['a]() { }});\n\n(class {get #a() {} get #a() {}});\n(class {get #a() {} get #['a']() {}});\n(class {set #a(val) {} set #a(val) {}});\n(class {set #a(val) {} set #['a'](val) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 745
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid character - start: 11, end: 13
@{x2716}@ Statement expected - start: 17, end: 19
@{x2716}@ Statement expected - start: 19, end: 20
@{x2716}@ Invalid character - start: 33, end: 35
@{x2716}@ Invalid character - start: 35, end: 35
@{x2716}@ Invalid astral character - start: 35, end: 35
@{x2716}@ Invalid character - start: 53, end: 55
@{x2716}@ Unexpected token. - start: 98, end: 100
@{x2716}@ Statement expected - start: 98, end: 100
@{x2716}@ Statement expected - start: 102, end: 103
@{x2716}@ Statement expected - start: 103, end: 104
@{x2716}@ Unexpected token. - start: 118, end: 120
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 118, end: 120
@{x2716}@ Expression expected - start: 120, end: 121
@{x2716}@ Statement expected - start: 120, end: 121
@{x2716}@ Statement expected - start: 121, end: 122
@{x2716}@ Unexpected token. - start: 136, end: 139
@{x2716}@ Statement expected - start: 136, end: 139
@{x2716}@ Statement expected - start: 142, end: 143
@{x2716}@ Statement expected - start: 143, end: 144
@{x2716}@ Statement expected - start: 156, end: 159
@{x2716}@ Statement expected - start: 162, end: 163
@{x2716}@ Statement expected - start: 163, end: 164
@{x2716}@ Unexpected token. - start: 179, end: 181
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 179, end: 181
@{x2716}@ Statement expected - start: 183, end: 184
@{x2716}@ Statement expected - start: 184, end: 185
@{x2716}@ Unexpected token. - start: 200, end: 203
@{x2716}@ Statement expected - start: 200, end: 203
@{x2716}@ Statement expected - start: 205, end: 206
@{x2716}@ Statement expected - start: 206, end: 207
@{x2716}@ Unexpected token. - start: 222, end: 225
@{x2716}@ Statement expected - start: 222, end: 225
@{x2716}@ Statement expected - start: 228, end: 229
@{x2716}@ Statement expected - start: 229, end: 230
@{x2716}@ Unexpected token. - start: 248, end: 249
@{x2716}@ Expression expected - start: 249, end: 250
@{x2716}@ Unexpected token. - start: 272, end: 273
@{x2716}@ Expression expected - start: 273, end: 274
@{x2716}@ Statement expected - start: 294, end: 297
@{x2716}@ Statement expected - start: 300, end: 301
@{x2716}@ Statement expected - start: 301, end: 302
@{x2716}@ Unexpected token. - start: 322, end: 324
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 322, end: 324
@{x2716}@ Statement expected - start: 326, end: 327
@{x2716}@ Statement expected - start: 327, end: 328
@{x2716}@ Statement expected - start: 346, end: 349
@{x2716}@ Statement expected - start: 352, end: 353
@{x2716}@ Statement expected - start: 353, end: 354
@{x2716}@ Invalid character - start: 425, end: 426
@{x2716}@ Invalid character - start: 452, end: 454
@{x2716}@ Invalid character - start: 480, end: 482
@{x2716}@ Invalid character - start: 509, end: 510
@{x2716}@ Invalid character - start: 538, end: 540
@{x2716}@ Invalid character - start: 570, end: 571
@{x2716}@ Unterminated string literal - start: 572, end: 584
@{x2716}@ Invalid character - start: 644, end: 646
@{x2716}@ Invalid character - start: 727, end: 729

```

