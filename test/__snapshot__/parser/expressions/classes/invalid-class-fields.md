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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticToken": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 67109115,
                                        "text": "#",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 11,
                                    "end": 13
                                }
                            ],
                            "flags": 32,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 13,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "aaa",
                        "rawText": "aaa",
                        "flags": 96,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 16,
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
                        "flags": 0,
                        "start": 24,
                        "end": 29
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
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
                                    "flags": 96,
                                    "start": 33,
                                    "end": 35
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 33,
                                "end": 35
                            }
                        ],
                        "flags": 32,
                        "start": 33,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 35
                },
                "flags": 32,
                "start": 21,
                "end": 35
            },
            "flags": 16,
            "start": 21,
            "end": 35
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 36,
                "end": 36
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x1f44d",
                "rawText": "x1f44d",
                "flags": 96,
                "start": 37,
                "end": 43
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 35,
                "end": 35
            },
            "flags": 16,
            "start": 35,
            "end": 43
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 45,
                "end": 45
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 47,
                "end": 47
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 44,
                "end": 44
            },
            "flags": 16,
            "start": 44,
            "end": 47
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 48,
            "end": 49
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
                        "start": 52,
                        "end": 57
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 57,
                        "end": 59
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
                                    "flags": 96,
                                    "start": 61,
                                    "end": 63
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 61,
                                "end": 63
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
                                    "flags": 96,
                                    "start": 63,
                                    "end": 67
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 63,
                                "end": 67
                            }
                        ],
                        "flags": 32,
                        "start": 61,
                        "end": 69
                    },
                    "flags": 32,
                    "start": 52,
                    "end": 69
                },
                "flags": 32,
                "start": 49,
                "end": 70
            },
            "flags": 16,
            "start": 49,
            "end": 71
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
                        "start": 74,
                        "end": 79
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 81,
                                        "end": 83
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 87,
                                            "end": 87
                                        },
                                        "flags": 32,
                                        "start": 85,
                                        "end": 89
                                    },
                                    "flags": 0,
                                    "start": 83,
                                    "end": 89
                                },
                                "flags": 0,
                                "start": 81,
                                "end": 89
                            }
                        ],
                        "flags": 32,
                        "start": 81,
                        "end": 90
                    },
                    "flags": 32,
                    "start": 74,
                    "end": 90
                },
                "flags": 32,
                "start": 71,
                "end": 91
            },
            "flags": 16,
            "start": 71,
            "end": 92
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
                        "start": 95,
                        "end": 100
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 102,
                                        "end": 104
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 105,
                                        "end": 106
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 106,
                                            "end": 106
                                        },
                                        "flags": 32,
                                        "start": 106,
                                        "end": 106
                                    },
                                    "flags": 0,
                                    "start": 104,
                                    "end": 106
                                },
                                "flags": 0,
                                "start": 102,
                                "end": 106
                            }
                        ],
                        "flags": 32,
                        "start": 102,
                        "end": 106
                    },
                    "flags": 32,
                    "start": 95,
                    "end": 106
                },
                "flags": 32,
                "start": 92,
                "end": 106
            },
            "flags": 16,
            "start": 92,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 108,
                "end": 110
            },
            "flags": 16,
            "start": 108,
            "end": 110
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 112,
            "end": 113
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
                            "flags": 0,
                            "start": 115,
                            "end": 120
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
                                    "generatorToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 96,
                                            "start": 122,
                                            "end": 124
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 125,
                                            "end": 126
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "flags": 32,
                                            "start": 126,
                                            "end": 126
                                        },
                                        "flags": 0,
                                        "start": 124,
                                        "end": 126
                                    },
                                    "flags": 0,
                                    "start": 122,
                                    "end": 126
                                }
                            ],
                            "flags": 32,
                            "start": 122,
                            "end": 126
                        },
                        "flags": 32,
                        "start": 115,
                        "end": 126
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 126,
                        "end": 128
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 128,
                        "end": 128
                    },
                    "flags": 32,
                    "start": 115,
                    "end": 128
                },
                "flags": 32,
                "start": 113,
                "end": 128
            },
            "flags": 16,
            "start": 113,
            "end": 128
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 130,
            "end": 131
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
                        "start": 133,
                        "end": 138
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 140,
                                        "end": 142
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 143,
                                        "end": 144
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 144,
                                            "end": 144
                                        },
                                        "flags": 32,
                                        "start": 144,
                                        "end": 144
                                    },
                                    "flags": 0,
                                    "start": 142,
                                    "end": 144
                                },
                                "flags": 0,
                                "start": 140,
                                "end": 144
                            }
                        ],
                        "flags": 32,
                        "start": 140,
                        "end": 144
                    },
                    "flags": 32,
                    "start": 133,
                    "end": 144
                },
                "flags": 32,
                "start": 131,
                "end": 144
            },
            "flags": 16,
            "start": 131,
            "end": 144
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 149,
                "end": 149
            },
            "flags": 16,
            "start": 147,
            "end": 150
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 152,
            "end": 153
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
                        "start": 155,
                        "end": 160
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
                                    "flags": 96,
                                    "start": 162,
                                    "end": 164
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 162,
                                "end": 164
                            }
                        ],
                        "flags": 32,
                        "start": 162,
                        "end": 164
                    },
                    "flags": 32,
                    "start": 155,
                    "end": 164
                },
                "flags": 32,
                "start": 153,
                "end": 164
            },
            "flags": 16,
            "start": 153,
            "end": 164
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 169,
                "end": 169
            },
            "flags": 16,
            "start": 167,
            "end": 170
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 172,
            "end": 173
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
                            "flags": 0,
                            "start": 175,
                            "end": 180
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
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 182,
                                        "end": 183
                                    },
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 96,
                                            "start": 183,
                                            "end": 185
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 186,
                                            "end": 187
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 187,
                                                "end": 187
                                            },
                                            "flags": 32,
                                            "start": 187,
                                            "end": 187
                                        },
                                        "flags": 0,
                                        "start": 185,
                                        "end": 187
                                    },
                                    "flags": 0,
                                    "start": 182,
                                    "end": 187
                                }
                            ],
                            "flags": 32,
                            "start": 182,
                            "end": 187
                        },
                        "flags": 32,
                        "start": 175,
                        "end": 187
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 187,
                        "end": 189
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 189,
                        "end": 191
                    },
                    "flags": 32,
                    "start": 175,
                    "end": 191
                },
                "flags": 32,
                "start": 173,
                "end": 191
            },
            "flags": 16,
            "start": 173,
            "end": 191
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 193,
            "end": 194
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
                        "start": 196,
                        "end": 201
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
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 203,
                                    "end": 204
                                },
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 204,
                                        "end": 206
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 207,
                                        "end": 208
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 208,
                                            "end": 208
                                        },
                                        "flags": 32,
                                        "start": 208,
                                        "end": 208
                                    },
                                    "flags": 0,
                                    "start": 206,
                                    "end": 208
                                },
                                "flags": 0,
                                "start": 203,
                                "end": 208
                            }
                        ],
                        "flags": 32,
                        "start": 203,
                        "end": 208
                    },
                    "flags": 32,
                    "start": 196,
                    "end": 208
                },
                "flags": 32,
                "start": 194,
                "end": 208
            },
            "flags": 16,
            "start": 194,
            "end": 208
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 211,
                "end": 213
            },
            "flags": 16,
            "start": 211,
            "end": 213
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 215,
            "end": 216
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
                        "start": 218,
                        "end": 223
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
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 225,
                                    "end": 226
                                },
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 226,
                                        "end": 228
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 229,
                                        "end": 230
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 230,
                                            "end": 230
                                        },
                                        "flags": 32,
                                        "start": 230,
                                        "end": 230
                                    },
                                    "flags": 0,
                                    "start": 228,
                                    "end": 230
                                },
                                "flags": 0,
                                "start": 225,
                                "end": 230
                            }
                        ],
                        "flags": 32,
                        "start": 225,
                        "end": 230
                    },
                    "flags": 32,
                    "start": 218,
                    "end": 230
                },
                "flags": 32,
                "start": 216,
                "end": 230
            },
            "flags": 16,
            "start": 216,
            "end": 230
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 235,
                "end": 235
            },
            "flags": 16,
            "start": 233,
            "end": 236
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 238,
            "end": 239
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
                        "start": 241,
                        "end": 246
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 248,
                                    "end": 251
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 251,
                                        "end": 254
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1024,
                                        "start": 255,
                                        "end": 256
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 256,
                                            "end": 256
                                        },
                                        "flags": 32,
                                        "start": 256,
                                        "end": 256
                                    },
                                    "flags": 1024,
                                    "start": 254,
                                    "end": 256
                                },
                                "flags": 1024,
                                "start": 248,
                                "end": 256
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
                                        "flags": 68,
                                        "start": 257,
                                        "end": 257
                                    },
                                    "flags": 32,
                                    "start": 256,
                                    "end": 258
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 256,
                                "end": 258
                            }
                        ],
                        "flags": 32,
                        "start": 248,
                        "end": 259
                    },
                    "flags": 32,
                    "start": 241,
                    "end": 259
                },
                "flags": 32,
                "start": 239,
                "end": 260
            },
            "flags": 16,
            "start": 239,
            "end": 261
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
                        "start": 263,
                        "end": 268
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
                                    "flags": 96,
                                    "start": 270,
                                    "end": 275
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 270,
                                "end": 275
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 275,
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
                                            "flags": 32,
                                            "start": 280,
                                            "end": 280
                                        },
                                        "flags": 32,
                                        "start": 280,
                                        "end": 280
                                    },
                                    "flags": 0,
                                    "start": 278,
                                    "end": 280
                                },
                                "flags": 0,
                                "start": 275,
                                "end": 280
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
                                        "flags": 68,
                                        "start": 281,
                                        "end": 281
                                    },
                                    "flags": 32,
                                    "start": 280,
                                    "end": 282
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 280,
                                "end": 282
                            }
                        ],
                        "flags": 32,
                        "start": 270,
                        "end": 283
                    },
                    "flags": 32,
                    "start": 263,
                    "end": 283
                },
                "flags": 32,
                "start": 261,
                "end": 284
            },
            "flags": 16,
            "start": 261,
            "end": 285
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
                        "start": 287,
                        "end": 292
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
                                    "flags": 96,
                                    "start": 294,
                                    "end": 299
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 294,
                                "end": 299
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
                                    "flags": 96,
                                    "start": 299,
                                    "end": 302
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 299,
                                "end": 302
                            }
                        ],
                        "flags": 32,
                        "start": 294,
                        "end": 302
                    },
                    "flags": 32,
                    "start": 287,
                    "end": 302
                },
                "flags": 32,
                "start": 285,
                "end": 302
            },
            "flags": 16,
            "start": 285,
            "end": 302
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 307,
                "end": 307
            },
            "flags": 16,
            "start": 305,
            "end": 308
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 310,
            "end": 311
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
                            "flags": 0,
                            "start": 313,
                            "end": 318
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
                                    "generatorToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 320,
                                        "end": 325
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 96,
                                            "start": 325,
                                            "end": 328
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 329,
                                            "end": 330
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 330,
                                                "end": 330
                                            },
                                            "flags": 32,
                                            "start": 330,
                                            "end": 330
                                        },
                                        "flags": 256,
                                        "start": 328,
                                        "end": 330
                                    },
                                    "flags": 256,
                                    "start": 320,
                                    "end": 330
                                }
                            ],
                            "flags": 32,
                            "start": 320,
                            "end": 330
                        },
                        "flags": 32,
                        "start": 313,
                        "end": 330
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 330,
                        "end": 332
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 332,
                        "end": 334
                    },
                    "flags": 32,
                    "start": 313,
                    "end": 334
                },
                "flags": 32,
                "start": 311,
                "end": 334
            },
            "flags": 16,
            "start": 311,
            "end": 334
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 336,
            "end": 337
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
                        "start": 339,
                        "end": 344
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
                                    "flags": 64,
                                    "start": 346,
                                    "end": 351
                                },
                                "key": {
                                    "kind": 67109115,
                                    "text": "#a",
                                    "flags": 96,
                                    "start": 351,
                                    "end": 354
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 346,
                                "end": 354
                            }
                        ],
                        "flags": 32,
                        "start": 346,
                        "end": 354
                    },
                    "flags": 32,
                    "start": 339,
                    "end": 354
                },
                "flags": 32,
                "start": 337,
                "end": 354
            },
            "flags": 16,
            "start": 337,
            "end": 354
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 359,
                "end": 359
            },
            "flags": 16,
            "start": 357,
            "end": 360
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 362,
            "end": 363
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
                        "start": 365,
                        "end": 370
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 372,
                                        "end": 374
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
                                                    "flags": 96,
                                                    "start": 375,
                                                    "end": 384
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 375,
                                                "end": 384
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 375,
                                        "end": 385
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 387,
                                            "end": 387
                                        },
                                        "flags": 32,
                                        "start": 385,
                                        "end": 388
                                    },
                                    "flags": 0,
                                    "start": 374,
                                    "end": 388
                                },
                                "flags": 0,
                                "start": 372,
                                "end": 388
                            }
                        ],
                        "flags": 32,
                        "start": 372,
                        "end": 389
                    },
                    "flags": 32,
                    "start": 365,
                    "end": 389
                },
                "flags": 32,
                "start": 363,
                "end": 390
            },
            "flags": 16,
            "start": 363,
            "end": 391
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
                        "start": 393,
                        "end": 398
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 400,
                                    "end": 403
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 403,
                                        "end": 406
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
                                                    "flags": 96,
                                                    "start": 407,
                                                    "end": 416
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 407,
                                                "end": 416
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 407,
                                        "end": 417
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 419,
                                            "end": 419
                                        },
                                        "flags": 32,
                                        "start": 417,
                                        "end": 420
                                    },
                                    "flags": 512,
                                    "start": 406,
                                    "end": 420
                                },
                                "flags": 512,
                                "start": 400,
                                "end": 420
                            }
                        ],
                        "flags": 32,
                        "start": 400,
                        "end": 421
                    },
                    "flags": 32,
                    "start": 393,
                    "end": 421
                },
                "flags": 32,
                "start": 391,
                "end": 422
            },
            "flags": 16,
            "start": 391,
            "end": 423
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
                        "start": 426,
                        "end": 431
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
                                    "flags": 96,
                                    "start": 433,
                                    "end": 434
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 433,
                                "end": 434
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
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
                                            "flags": 4194400,
                                            "start": 435,
                                            "end": 438
                                        },
                                        "flags": 32,
                                        "start": 434,
                                        "end": 439
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 440,
                                        "end": 441
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 443,
                                            "end": 443
                                        },
                                        "flags": 32,
                                        "start": 441,
                                        "end": 445
                                    },
                                    "flags": 0,
                                    "start": 439,
                                    "end": 445
                                },
                                "flags": 0,
                                "start": 434,
                                "end": 445
                            }
                        ],
                        "flags": 32,
                        "start": 433,
                        "end": 446
                    },
                    "flags": 32,
                    "start": 426,
                    "end": 446
                },
                "flags": 32,
                "start": 423,
                "end": 447
            },
            "flags": 16,
            "start": 423,
            "end": 448
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
                        "start": 450,
                        "end": 455
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
                                    "flags": 96,
                                    "start": 460,
                                    "end": 462
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 457,
                                "end": 462
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
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
                                            "flags": 4194400,
                                            "start": 463,
                                            "end": 466
                                        },
                                        "flags": 32,
                                        "start": 462,
                                        "end": 467
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 468,
                                        "end": 469
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 471,
                                            "end": 471
                                        },
                                        "flags": 32,
                                        "start": 469,
                                        "end": 473
                                    },
                                    "flags": 0,
                                    "start": 467,
                                    "end": 473
                                },
                                "flags": 0,
                                "start": 462,
                                "end": 473
                            }
                        ],
                        "flags": 32,
                        "start": 457,
                        "end": 474
                    },
                    "flags": 32,
                    "start": 450,
                    "end": 474
                },
                "flags": 32,
                "start": 448,
                "end": 475
            },
            "flags": 16,
            "start": 448,
            "end": 476
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
                        "start": 478,
                        "end": 483
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
                                    "flags": 96,
                                    "start": 488,
                                    "end": 490
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 485,
                                "end": 490
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
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
                                            "flags": 4194400,
                                            "start": 491,
                                            "end": 494
                                        },
                                        "flags": 32,
                                        "start": 490,
                                        "end": 495
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
                                                    "flags": 96,
                                                    "start": 496,
                                                    "end": 499
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 496,
                                                "end": 499
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 496,
                                        "end": 500
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 502,
                                            "end": 502
                                        },
                                        "flags": 32,
                                        "start": 500,
                                        "end": 504
                                    },
                                    "flags": 0,
                                    "start": 495,
                                    "end": 504
                                },
                                "flags": 0,
                                "start": 490,
                                "end": 504
                            }
                        ],
                        "flags": 32,
                        "start": 485,
                        "end": 505
                    },
                    "flags": 32,
                    "start": 478,
                    "end": 505
                },
                "flags": 32,
                "start": 476,
                "end": 506
            },
            "flags": 16,
            "start": 476,
            "end": 507
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
                        "start": 509,
                        "end": 514
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
                                    "flags": 96,
                                    "start": 517,
                                    "end": 518
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 516,
                                "end": 518
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
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
                                            "flags": 4194400,
                                            "start": 519,
                                            "end": 522
                                        },
                                        "flags": 32,
                                        "start": 518,
                                        "end": 523
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 524,
                                        "end": 525
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 527,
                                            "end": 527
                                        },
                                        "flags": 32,
                                        "start": 525,
                                        "end": 529
                                    },
                                    "flags": 0,
                                    "start": 523,
                                    "end": 529
                                },
                                "flags": 0,
                                "start": 518,
                                "end": 529
                            }
                        ],
                        "flags": 32,
                        "start": 516,
                        "end": 530
                    },
                    "flags": 32,
                    "start": 509,
                    "end": 530
                },
                "flags": 32,
                "start": 507,
                "end": 531
            },
            "flags": 16,
            "start": 507,
            "end": 532
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
                        "start": 534,
                        "end": 539
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
                                    "flags": 64,
                                    "start": 541,
                                    "end": 546
                                },
                                "key": {
                                    "kind": 67109115,
                                    "text": "#",
                                    "flags": 96,
                                    "start": 546,
                                    "end": 548
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 541,
                                "end": 548
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
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
                                            "flags": 4194400,
                                            "start": 549,
                                            "end": 552
                                        },
                                        "flags": 32,
                                        "start": 548,
                                        "end": 553
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 554,
                                        "end": 555
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 557,
                                            "end": 557
                                        },
                                        "flags": 32,
                                        "start": 555,
                                        "end": 559
                                    },
                                    "flags": 0,
                                    "start": 553,
                                    "end": 559
                                },
                                "flags": 0,
                                "start": 548,
                                "end": 559
                            }
                        ],
                        "flags": 32,
                        "start": 541,
                        "end": 560
                    },
                    "flags": 32,
                    "start": 534,
                    "end": 560
                },
                "flags": 32,
                "start": 532,
                "end": 561
            },
            "flags": 16,
            "start": 532,
            "end": 562
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
                            "flags": 0,
                            "start": 564,
                            "end": 569
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
                                        "flags": 64,
                                        "start": 571,
                                        "end": 576
                                    },
                                    "key": {
                                        "kind": 67109115,
                                        "text": "#",
                                        "flags": 96,
                                        "start": 578,
                                        "end": 579
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 571,
                                    "end": 579
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
                                                "flags": 6291552,
                                                "start": 580,
                                                "end": 592
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 0,
                                                            "start": 595,
                                                            "end": 600
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
                                                                    "generatorToken": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 16498,
                                                                        "flags": 64,
                                                                        "start": 602,
                                                                        "end": 605
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 67109115,
                                                                            "text": "#a",
                                                                            "flags": 96,
                                                                            "start": 605,
                                                                            "end": 608
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1024,
                                                                            "start": 609,
                                                                            "end": 610
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "start": 612,
                                                                                "end": 612
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 610,
                                                                            "end": 613
                                                                        },
                                                                        "flags": 1024,
                                                                        "start": 608,
                                                                        "end": 613
                                                                    },
                                                                    "flags": 1024,
                                                                    "start": 602,
                                                                    "end": 613
                                                                },
                                                                {
                                                                    "kind": 278,
                                                                    "declareToken": null,
                                                                    "decorators": null,
                                                                    "generatorToken": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 16498,
                                                                        "flags": 64,
                                                                        "start": 613,
                                                                        "end": 617
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 67109115,
                                                                            "text": "#a",
                                                                            "flags": 96,
                                                                            "start": 617,
                                                                            "end": 620
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1024,
                                                                            "start": 621,
                                                                            "end": 622
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "start": 624,
                                                                                "end": 624
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 622,
                                                                            "end": 625
                                                                        },
                                                                        "flags": 1024,
                                                                        "start": 620,
                                                                        "end": 625
                                                                    },
                                                                    "flags": 1024,
                                                                    "start": 613,
                                                                    "end": 625
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 602,
                                                            "end": 626
                                                        },
                                                        "flags": 32,
                                                        "start": 595,
                                                        "end": 626
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 595,
                                                "end": 626
                                            },
                                            "flags": 32,
                                            "start": 580,
                                            "end": 627
                                        },
                                        "flags": 32,
                                        "start": 579,
                                        "end": 627
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 579,
                                    "end": 627
                                },
                                {
                                    "kind": 281,
                                    "flags": 96,
                                    "start": 627,
                                    "end": 628
                                }
                            ],
                            "flags": 32,
                            "start": 571,
                            "end": 628
                        },
                        "flags": 32,
                        "start": 564,
                        "end": 628
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 630,
                                    "end": 635
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
                                            "generatorToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "setKeyword": {
                                                "kind": 16498,
                                                "flags": 64,
                                                "start": 637,
                                                "end": 640
                                            },
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 67109115,
                                                    "text": "#a",
                                                    "flags": 96,
                                                    "start": 640,
                                                    "end": 643
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 1024,
                                                    "start": 644,
                                                    "end": 645
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 647,
                                                        "end": 647
                                                    },
                                                    "flags": 32,
                                                    "start": 645,
                                                    "end": 648
                                                },
                                                "flags": 1024,
                                                "start": 643,
                                                "end": 648
                                            },
                                            "flags": 1024,
                                            "start": 637,
                                            "end": 648
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
                                                "flags": 96,
                                                "start": 652,
                                                "end": 654
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 648,
                                            "end": 654
                                        },
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": null,
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
                                                        "flags": 4194400,
                                                        "start": 655,
                                                        "end": 658
                                                    },
                                                    "flags": 32,
                                                    "start": 654,
                                                    "end": 659
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 660,
                                                    "end": 661
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 663,
                                                        "end": 663
                                                    },
                                                    "flags": 32,
                                                    "start": 661,
                                                    "end": 664
                                                },
                                                "flags": 0,
                                                "start": 659,
                                                "end": 664
                                            },
                                            "flags": 0,
                                            "start": 654,
                                            "end": 664
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 637,
                                    "end": 665
                                },
                                "flags": 32,
                                "start": 630,
                                "end": 665
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 630,
                        "end": 665
                    },
                    "flags": 32,
                    "start": 564,
                    "end": 666
                },
                "flags": 32,
                "start": 562,
                "end": 666
            },
            "flags": 16,
            "start": 562,
            "end": 667
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
                        "start": 669,
                        "end": 674
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 676,
                                    "end": 679
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 679,
                                        "end": 682
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
                                                    "flags": 96,
                                                    "start": 683,
                                                    "end": 686
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 683,
                                                "end": 686
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 683,
                                        "end": 687
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 689,
                                            "end": 689
                                        },
                                        "flags": 32,
                                        "start": 687,
                                        "end": 690
                                    },
                                    "flags": 512,
                                    "start": 682,
                                    "end": 690
                                },
                                "flags": 512,
                                "start": 676,
                                "end": 690
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 690,
                                    "end": 694
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 694,
                                        "end": 697
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
                                                    "flags": 96,
                                                    "start": 698,
                                                    "end": 701
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 698,
                                                "end": 701
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 698,
                                        "end": 702
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 704,
                                            "end": 704
                                        },
                                        "flags": 32,
                                        "start": 702,
                                        "end": 705
                                    },
                                    "flags": 512,
                                    "start": 697,
                                    "end": 705
                                },
                                "flags": 512,
                                "start": 690,
                                "end": 705
                            }
                        ],
                        "flags": 32,
                        "start": 676,
                        "end": 706
                    },
                    "flags": 32,
                    "start": 669,
                    "end": 706
                },
                "flags": 32,
                "start": 667,
                "end": 707
            },
            "flags": 16,
            "start": 667,
            "end": 708
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
                        "start": 710,
                        "end": 715
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
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 717,
                                    "end": 720
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 720,
                                        "end": 723
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
                                                    "flags": 96,
                                                    "start": 724,
                                                    "end": 727
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 724,
                                                "end": 727
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 724,
                                        "end": 728
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 730,
                                            "end": 730
                                        },
                                        "flags": 32,
                                        "start": 728,
                                        "end": 731
                                    },
                                    "flags": 512,
                                    "start": 723,
                                    "end": 731
                                },
                                "flags": 512,
                                "start": 717,
                                "end": 731
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
                                    "flags": 96,
                                    "start": 735,
                                    "end": 737
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 731,
                                "end": 737
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
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
                                            "flags": 4194400,
                                            "start": 738,
                                            "end": 741
                                        },
                                        "flags": 32,
                                        "start": 737,
                                        "end": 742
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
                                                    "flags": 96,
                                                    "start": 743,
                                                    "end": 746
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 743,
                                                "end": 746
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 743,
                                        "end": 747
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 749,
                                            "end": 749
                                        },
                                        "flags": 32,
                                        "start": 747,
                                        "end": 750
                                    },
                                    "flags": 0,
                                    "start": 742,
                                    "end": 750
                                },
                                "flags": 0,
                                "start": 737,
                                "end": 750
                            }
                        ],
                        "flags": 32,
                        "start": 717,
                        "end": 751
                    },
                    "flags": 32,
                    "start": 710,
                    "end": 751
                },
                "flags": 32,
                "start": 708,
                "end": 752
            },
            "flags": 16,
            "start": 708,
            "end": 753
        }
    ],
    "isModule": true,
    "source": "\n(class C { #+aaa });\n\n(class C { #@{x1f44d}@ });\n\n(class C { # aaa });\n\n(class {#a() { }});\n\n(class {#a() : 0});\n(class {#a() =});\n(class {#a() => {}});\n(class {#a => {}});\n(class {*#a() = 0});\n(class {*#a() => 0});\n(class {*#a() => {}});\n(class {get #a()[]});\n(class {yield #a()[]});\n(class {yield #a => {}});\n(class {async #a() = 0});\n(class {async #a => {}});\n(class {#a(arguments) {}});\n(class {set #a(arguments) {}});\n\n(class {#['a']() { }});\n(class {get #['a']() { }});\n(class {set #['a'](foo) { }});\n(class {*#['a']() { }});\n(class {async #['a']() { }});\n(class {async *#['a]() { }});\n\n(class {get #a() {} get #a() {}});\n(class {get #a() {} get #['a']() {}});\n(class {set #a(val) {} set #a(val) {}});\n(class {set #a(val) {} set #['a'](val) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 753
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 11, end: 13
✖ Statement expected - start: 17, end: 19
✖ Statement expected - start: 19, end: 20
✖ Invalid character - start: 33, end: 35
✖ Statement expected - start: 43, end: 44
✖ Binding identifier expected - start: 47, end: 48
✖ Statement expected - start: 47, end: 48
✖ Invalid character - start: 61, end: 63
✖ Unexpected token. - start: 106, end: 108
✖ Statement expected - start: 106, end: 108
✖ Statement expected - start: 110, end: 111
✖ Statement expected - start: 111, end: 112
✖ Unexpected token. - start: 126, end: 128
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 126, end: 128
✖ Expression expected - start: 128, end: 129
✖ Statement expected - start: 128, end: 129
✖ Statement expected - start: 129, end: 130
✖ Unexpected token. - start: 144, end: 147
✖ Statement expected - start: 144, end: 147
✖ Statement expected - start: 150, end: 151
✖ Statement expected - start: 151, end: 152
✖ Statement expected - start: 164, end: 167
✖ Statement expected - start: 170, end: 171
✖ Statement expected - start: 171, end: 172
✖ Unexpected token. - start: 187, end: 189
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 187, end: 189
✖ Statement expected - start: 191, end: 192
✖ Statement expected - start: 192, end: 193
✖ Unexpected token. - start: 208, end: 211
✖ Statement expected - start: 208, end: 211
✖ Statement expected - start: 213, end: 214
✖ Statement expected - start: 214, end: 215
✖ Unexpected token. - start: 230, end: 233
✖ Statement expected - start: 230, end: 233
✖ Statement expected - start: 236, end: 237
✖ Statement expected - start: 237, end: 238
✖ Unexpected token. - start: 256, end: 257
✖ Expression expected - start: 257, end: 258
✖ Unexpected token. - start: 280, end: 281
✖ Expression expected - start: 281, end: 282
✖ Statement expected - start: 302, end: 305
✖ Statement expected - start: 308, end: 309
✖ Statement expected - start: 309, end: 310
✖ Unexpected token. - start: 330, end: 332
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 330, end: 332
✖ Statement expected - start: 334, end: 335
✖ Statement expected - start: 335, end: 336
✖ Statement expected - start: 354, end: 357
✖ Statement expected - start: 360, end: 361
✖ Statement expected - start: 361, end: 362
✖ Invalid character - start: 433, end: 434
✖ Invalid character - start: 460, end: 462
✖ Invalid character - start: 488, end: 490
✖ Invalid character - start: 517, end: 518
✖ Invalid character - start: 546, end: 548
✖ Invalid character - start: 578, end: 579
✖ Unterminated string literal - start: 580, end: 592
✖ Invalid character - start: 652, end: 654
✖ Invalid character - start: 735, end: 737

```

