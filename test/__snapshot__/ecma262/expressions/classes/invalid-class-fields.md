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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "#+aaa",
                                        "rawText": "#+aaa",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 11,
                                    "end": 17
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 17
                        },
                        "flags": 9,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 19
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 29
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "#@",
                                        "rawText": "#@",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 36
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 33,
                                    "end": 36
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 31,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 36
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 21,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 36
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x1f44d",
                            "rawText": "x1f44d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 37,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 37,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 36,
            "end": 44
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 45
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 45
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 45
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 44,
                "end": 45
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 45
                },
                "flags": 45,
                "transformFlags": 0,
                "start": 32,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 44,
            "end": 45
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 57
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 59
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "# aaa",
                                        "rawText": "# aaa",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 67
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 61,
                                    "end": 67
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 67
                        },
                        "flags": 59,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 69
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 69
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 49,
                "end": 70
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 79
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
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 85
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
                                                "start": 87,
                                                "end": 87
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 85,
                                            "end": 89
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 89
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 89
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 81,
                            "end": 89
                        },
                        "flags": 79,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 90
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 90
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 71,
                "end": 91
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 100
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
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 102,
                                            "end": 104
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 105,
                                            "end": 106
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
                                                "start": 106,
                                                "end": 106
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 106,
                                            "end": 106
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 102,
                                    "end": 106
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 106
                        },
                        "flags": 100,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 106
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 106
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 92,
                "end": 106
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 108,
                "end": 110
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 108,
            "end": 110
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 115,
                            "end": 120
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
                                                "text": "#a",
                                                "rawText": "#a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 124
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 125,
                                                "end": 126
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
                                                    "start": 126,
                                                    "end": 126
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 126
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 126
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 126
                            },
                            "flags": 120,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 126
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 115,
                        "end": 126
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 126,
                        "end": 128
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 128,
                        "end": 128
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 115,
                    "end": 128
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 113,
                "end": 128
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 113,
            "end": 128
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 133,
                        "end": 138
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
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 140,
                                            "end": 142
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 144
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
                                                "start": 144,
                                                "end": 144
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 144,
                                            "end": 144
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 144
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 140,
                                    "end": 144
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 144
                        },
                        "flags": 138,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 144
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 133,
                    "end": 144
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 131,
                "end": 144
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 131,
            "end": 144
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 149,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 147,
            "end": 150
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 160
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "#a",
                                        "rawText": "#a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 162,
                                        "end": 164
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 162,
                                    "end": 164
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 162,
                            "end": 164
                        },
                        "flags": 160,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 164
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 164
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 153,
                "end": 164
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 153,
            "end": 164
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 169,
                "end": 169
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 167,
            "end": 170
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 175,
                            "end": 180
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
                                            "kind": 201360950,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 182,
                                            "end": 183
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 67191035,
                                                "text": "#a",
                                                "rawText": "#a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 183,
                                                "end": 185
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 186,
                                                "end": 187
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
                                                    "start": 187,
                                                    "end": 187
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 187,
                                                "end": 187
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 185,
                                            "end": 187
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 182,
                                        "end": 187
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 182,
                                "end": 187
                            },
                            "flags": 180,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 187
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 175,
                        "end": 187
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 187,
                        "end": 189
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 189,
                        "end": 191
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 175,
                    "end": 191
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 173,
                "end": 191
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 173,
            "end": 191
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 196,
                        "end": 201
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
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 203,
                                        "end": 204
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 204,
                                            "end": 206
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 207,
                                            "end": 208
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
                                                "start": 208,
                                                "end": 208
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 208,
                                            "end": 208
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 208
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 208
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 203,
                            "end": 208
                        },
                        "flags": 201,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 208
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 196,
                    "end": 208
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 194,
                "end": 208
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 211,
                "end": 213
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 211,
            "end": 213
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 218,
                        "end": 223
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
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 225,
                                        "end": 226
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 226,
                                            "end": 228
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 229,
                                            "end": 230
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
                                                "start": 230,
                                                "end": 230
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 230,
                                            "end": 230
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 228,
                                        "end": 230
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 225,
                                    "end": 230
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 230
                        },
                        "flags": 223,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 230
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 218,
                    "end": 230
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 216,
                "end": 230
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 216,
            "end": 230
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 235,
                "end": 235
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 233,
            "end": 236
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 246
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
                                        "transformFlags": 0,
                                        "start": 248,
                                        "end": 251
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 251,
                                            "end": 254
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 255,
                                            "end": 256
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
                                                "start": 256,
                                                "end": 256
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 256,
                                            "end": 256
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 256
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 248,
                                    "end": 256
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 257,
                                            "end": 257
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 256,
                                        "end": 258
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 256,
                                    "end": 258
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 248,
                            "end": 258
                        },
                        "flags": 246,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 259
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 241,
                    "end": 259
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 239,
                "end": 260
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 263,
                        "end": 268
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 270,
                                        "end": 275
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 270,
                                    "end": 275
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
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 275,
                                            "end": 278
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 279,
                                            "end": 280
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
                                                "start": 280,
                                                "end": 280
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 280,
                                            "end": 280
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 278,
                                        "end": 280
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 275,
                                    "end": 280
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 281,
                                            "end": 281
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 280,
                                        "end": 282
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 280,
                                    "end": 282
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 270,
                            "end": 282
                        },
                        "flags": 268,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 283
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 263,
                    "end": 283
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 261,
                "end": 284
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 287,
                        "end": 292
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 294,
                                        "end": 299
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 294,
                                    "end": 299
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "#a",
                                        "rawText": "#a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 299,
                                        "end": 302
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 299,
                                    "end": 302
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 294,
                            "end": 302
                        },
                        "flags": 292,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 302
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 287,
                    "end": 302
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 285,
                "end": 302
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 285,
            "end": 302
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 307,
                "end": 307
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 305,
            "end": 308
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 313,
                            "end": 318
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
                                            "transformFlags": 0,
                                            "start": 320,
                                            "end": 325
                                        },
                                        "setKeyword": null,
                                        "getKeyword": null,
                                        "asteriskToken": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 67191035,
                                                "text": "#a",
                                                "rawText": "#a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 325,
                                                "end": 328
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "transformFlags": 0,
                                                "start": 329,
                                                "end": 330
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
                                                    "start": 330,
                                                    "end": 330
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 330,
                                                "end": 330
                                            },
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 328,
                                            "end": 330
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 320,
                                        "end": 330
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 320,
                                "end": 330
                            },
                            "flags": 318,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 330
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 313,
                        "end": 330
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 330,
                        "end": 332
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 332,
                        "end": 334
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 313,
                    "end": 334
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 311,
                "end": 334
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 311,
            "end": 334
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 339,
                        "end": 344
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
                                        "transformFlags": 0,
                                        "start": 346,
                                        "end": 351
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 351,
                                            "end": 354
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 354,
                                            "end": 354
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
                                                "start": 354,
                                                "end": 354
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 354,
                                            "end": 354
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 354,
                                        "end": 354
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 346,
                                    "end": 354
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 346,
                            "end": 354
                        },
                        "flags": 344,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 354
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 339,
                    "end": 354
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 337,
                "end": 354
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 337,
            "end": 354
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 359,
                "end": 359
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 357,
            "end": 360
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 365,
                        "end": 370
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
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 372,
                                            "end": 374
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "arguments",
                                                    "rawText": "arguments",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 375,
                                                    "end": 384
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 375,
                                            "end": 385
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
                                                "start": 387,
                                                "end": 387
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 385,
                                            "end": 388
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 374,
                                        "end": 388
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 372,
                                    "end": 388
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 372,
                            "end": 388
                        },
                        "flags": 370,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 389
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 389
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 363,
                "end": 390
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 393,
                        "end": 398
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
                                        "transformFlags": 0,
                                        "start": 400,
                                        "end": 403
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 403,
                                            "end": 406
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "arguments",
                                                    "rawText": "arguments",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 407,
                                                    "end": 416
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 407,
                                            "end": 417
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
                                                "start": 419,
                                                "end": 419
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 417,
                                            "end": 420
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 406,
                                        "end": 420
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 400,
                                    "end": 420
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 400,
                            "end": 420
                        },
                        "flags": 398,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 421
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 393,
                    "end": 421
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 391,
                "end": 422
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 426,
                        "end": 431
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "#[",
                                        "rawText": "#[",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 433,
                                        "end": 435
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 433,
                                    "end": 435
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 435,
                                        "end": 438
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 435,
                                    "end": 438
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 433,
                            "end": 438
                        },
                        "flags": 431,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 438
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 426,
                    "end": 438
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 423,
                "end": 438
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 423,
            "end": 438
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 440,
                    "end": 440
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 443,
                        "end": 443
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 441,
                    "end": 445
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 439,
                "end": 445
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 439,
            "end": 445
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 447,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 450,
                        "end": 455
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
                                        "transformFlags": 0,
                                        "start": 457,
                                        "end": 460
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#[",
                                            "rawText": "#[",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 460,
                                            "end": 463
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 463,
                                            "end": 463
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
                                                "start": 463,
                                                "end": 463
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 463,
                                            "end": 463
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 463,
                                        "end": 463
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 457,
                                    "end": 463
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 463,
                                        "end": 466
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 463,
                                    "end": 466
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 457,
                            "end": 466
                        },
                        "flags": 455,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 466
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 450,
                    "end": 466
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 448,
                "end": 466
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 448,
            "end": 466
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 468,
                    "end": 468
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 471,
                        "end": 471
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 469,
                    "end": 473
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 467,
                "end": 473
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 467,
            "end": 473
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 475,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 478,
                        "end": 483
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
                                        "transformFlags": 0,
                                        "start": 485,
                                        "end": 488
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#[",
                                            "rawText": "#[",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 488,
                                            "end": 491
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 512,
                                            "transformFlags": 0,
                                            "start": 491,
                                            "end": 491
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
                                                "start": 491,
                                                "end": 491
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 491,
                                            "end": 491
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 491,
                                        "end": 491
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 485,
                                    "end": 491
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 491,
                                        "end": 494
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 491,
                                    "end": 494
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 485,
                            "end": 494
                        },
                        "flags": 483,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 494
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 478,
                    "end": 494
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 476,
                "end": 494
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 476,
            "end": 494
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 496,
                    "end": 499
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 495,
                "end": 500
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 495,
            "end": 500
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 502,
                "end": 502
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 500,
            "end": 504
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 506,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 509,
                        "end": 514
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 67191035,
                                        "text": "#[",
                                        "rawText": "#[",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 517,
                                        "end": 519
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 516,
                                    "end": 519
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 519,
                                        "end": 522
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 519,
                                    "end": 522
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 516,
                            "end": 522
                        },
                        "flags": 514,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 522
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 509,
                    "end": 522
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 507,
                "end": 522
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 507,
            "end": 522
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 524,
                    "end": 524
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 527,
                        "end": 527
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 525,
                    "end": 529
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 523,
                "end": 529
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 523,
            "end": 529
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 531,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 534,
                        "end": 539
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
                                        "transformFlags": 0,
                                        "start": 541,
                                        "end": 546
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#[",
                                            "rawText": "#[",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 546,
                                            "end": 549
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 549,
                                            "end": 549
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
                                                "start": 549,
                                                "end": 549
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 549,
                                            "end": 549
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 549,
                                        "end": 549
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 541,
                                    "end": 549
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 549,
                                        "end": 552
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 549,
                                    "end": 552
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 541,
                            "end": 552
                        },
                        "flags": 539,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 552
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 534,
                    "end": 552
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 532,
                "end": 552
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 532,
            "end": 552
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 554,
                    "end": 554
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 557,
                        "end": 557
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 555,
                    "end": 559
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 553,
                "end": 559
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 553,
            "end": 559
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 561,
            "end": 562
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
                        "start": 564,
                        "end": 569
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
                                        "transformFlags": 0,
                                        "start": 571,
                                        "end": 576
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 576,
                                        "end": 578
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#[",
                                            "rawText": "#[",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 578,
                                            "end": 580
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 580
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
                                                "start": 580,
                                                "end": 580
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 580
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 580,
                                        "end": 580
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 571,
                                    "end": 580
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
                                            "kind": 201392131,
                                            "text": "a]() { }});",
                                            "rawText": "'a]() { }});",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 592
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 595,
                                            "end": 600
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
                                                "start": 595,
                                                "end": 595
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 595,
                                            "end": 595
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 592,
                                        "end": 595
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 580,
                                    "end": 595
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "class",
                                        "rawText": "class",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 595,
                                        "end": 600
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 595,
                                    "end": 600
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 571,
                            "end": 600
                        },
                        "flags": 569,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 600
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 564,
                    "end": 600
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 562,
                "end": 600
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 562,
            "end": 600
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "get",
                            "rawText": "get",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 602,
                            "end": 605
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 602,
                        "end": 605
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 67191035,
                                "text": "#a",
                                "rawText": "#a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 605,
                                "end": 608
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 609,
                                "end": 609
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 605,
                            "end": 610
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 605,
                        "end": 610
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 612,
                            "end": 612
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 610,
                        "end": 613
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "get",
                            "rawText": "get",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 613,
                            "end": 617
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 613,
                        "end": 617
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 67191035,
                                "text": "#a",
                                "rawText": "#a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 617,
                                "end": 620
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 621,
                                "end": 621
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 617,
                            "end": 622
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 617,
                        "end": 622
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 624,
                            "end": 624
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 622,
                        "end": 625
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 602,
                "end": 625
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 600,
            "end": 626
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 627,
            "end": 628
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
                        "start": 630,
                        "end": 635
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
                                        "transformFlags": 0,
                                        "start": 637,
                                        "end": 640
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 640,
                                            "end": 643
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 644,
                                            "end": 645
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
                                                "start": 647,
                                                "end": 647
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 645,
                                            "end": 648
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 643,
                                        "end": 648
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 637,
                                    "end": 648
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 648,
                                        "end": 652
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#[",
                                            "rawText": "#[",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 652,
                                            "end": 655
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 655,
                                            "end": 655
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
                                                "start": 655,
                                                "end": 655
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 655,
                                            "end": 655
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 655,
                                        "end": 655
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 648,
                                    "end": 655
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 655,
                                        "end": 658
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 655,
                                    "end": 658
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 637,
                            "end": 658
                        },
                        "flags": 635,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 658
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 630,
                    "end": 658
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 628,
                "end": 658
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 628,
            "end": 658
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 660,
                    "end": 660
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 663,
                        "end": 663
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 661,
                    "end": 664
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 659,
                "end": 664
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 659,
            "end": 664
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 666,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 669,
                        "end": 674
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
                                        "transformFlags": 0,
                                        "start": 676,
                                        "end": 679
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 679,
                                            "end": 682
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 683,
                                                    "end": 686
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 683,
                                            "end": 687
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
                                                "start": 689,
                                                "end": 689
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 687,
                                            "end": 690
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 682,
                                        "end": 690
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 676,
                                    "end": 690
                                },
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
                                        "transformFlags": 0,
                                        "start": 690,
                                        "end": 694
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 694,
                                            "end": 697
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 698,
                                                    "end": 701
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 698,
                                            "end": 702
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
                                                "start": 704,
                                                "end": 704
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 702,
                                            "end": 705
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 697,
                                        "end": 705
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 690,
                                    "end": 705
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 676,
                            "end": 705
                        },
                        "flags": 674,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 706
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 669,
                    "end": 706
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 667,
                "end": 707
            },
            "flags": 16,
            "transformFlags": 4096,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 710,
                        "end": 715
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
                                        "transformFlags": 0,
                                        "start": 717,
                                        "end": 720
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 720,
                                            "end": 723
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "val",
                                                    "rawText": "val",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 724,
                                                    "end": 727
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 724,
                                            "end": 728
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
                                                "start": 730,
                                                "end": 730
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 728,
                                            "end": 731
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 723,
                                        "end": 731
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 717,
                                    "end": 731
                                },
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
                                        "transformFlags": 0,
                                        "start": 731,
                                        "end": 735
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#[",
                                            "rawText": "#[",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 735,
                                            "end": 738
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 512,
                                            "transformFlags": 0,
                                            "start": 738,
                                            "end": 738
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
                                                "start": 738,
                                                "end": 738
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 738,
                                            "end": 738
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 738,
                                        "end": 738
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 731,
                                    "end": 738
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 738,
                                        "end": 741
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 738,
                                    "end": 741
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 717,
                            "end": 741
                        },
                        "flags": 715,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 741
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 710,
                    "end": 741
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 708,
                "end": 741
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 708,
            "end": 741
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "val",
                    "rawText": "val",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 743,
                    "end": 746
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 742,
                "end": 747
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 742,
            "end": 747
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 749,
                "end": 749
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 747,
            "end": 750
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 752,
            "end": 753
        }
    ],
    "isModule": true,
    "source": "\n(class C { #+aaa });\n\n(class C { #@{x1f44d}@ });\n\n(class C { # aaa });\n\n(class {#a() { }});\n\n(class {#a() : 0});\n(class {#a() =});\n(class {#a() => {}});\n(class {#a => {}});\n(class {*#a() = 0});\n(class {*#a() => 0});\n(class {*#a() => {}});\n(class {get #a()[]});\n(class {yield #a()[]});\n(class {yield #a => {}});\n(class {async #a() = 0});\n(class {async #a => {}});\n(class {#a(arguments) {}});\n(class {set #a(arguments) {}});\n\n(class {#['a']() { }});\n(class {get #['a']() { }});\n(class {set #['a'](foo) { }});\n(class {*#['a']() { }});\n(class {async #['a']() { }});\n(class {async *#['a]() { }});\n\n(class {get #a() {} get #a() {}});\n(class {get #a() {} get #['a']() {}});\n(class {set #a(val) {} set #a(val) {}});\n(class {set #a(val) {} set #['a'](val) {}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 753
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 12, end: 13
✖ Invalid character - start: 34, end: 35
✖ The parser expected to find a '}' to match the '{' token here - start: 36, end: 37
✖ Identifier expected. A decorator name can only be an identifier - start: 45, end: 47
✖ Declaration or statement expected - start: 47, end: 48
✖ Invalid character - start: 62, end: 63
✖ Missing an opening brace - '{ - start: 107, end: 108
✖ Declaration or statement expected - start: 110, end: 111
✖ Declaration or statement expected - start: 111, end: 112
✖ Missing an opening brace - '{ - start: 127, end: 128
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 126, end: 128
✖ Identifier expected - start: 128, end: 129
✖ Declaration or statement expected - start: 129, end: 130
✖ Missing an opening brace - '{ - start: 145, end: 147
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 131, end: 147
✖ Declaration or statement expected - start: 150, end: 151
✖ Declaration or statement expected - start: 151, end: 152
✖ The parser expected to find a '}' to match the '{' token here - start: 165, end: 167
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 153, end: 167
✖ Declaration or statement expected - start: 170, end: 171
✖ Declaration or statement expected - start: 171, end: 172
✖ Missing an opening brace - '{ - start: 188, end: 189
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 187, end: 189
✖ Expected a ')' to match the '(' token here - start: 191, end: 192
✖ Declaration or statement expected - start: 192, end: 193
✖ Missing an opening brace - '{ - start: 209, end: 211
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 194, end: 211
✖ Declaration or statement expected - start: 213, end: 214
✖ Declaration or statement expected - start: 214, end: 215
✖ Missing an opening brace - '{ - start: 231, end: 233
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 216, end: 233
✖ Declaration or statement expected - start: 236, end: 237
✖ Declaration or statement expected - start: 237, end: 238
✖ Missing an opening brace - '{ - start: 256, end: 257
✖ Identifier expected - start: 257, end: 258
✖ Missing an opening brace - '{ - start: 280, end: 281
✖ Identifier expected - start: 281, end: 282
✖ The parser expected to find a '}' to match the '{' token here - start: 303, end: 305
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 285, end: 305
✖ Declaration or statement expected - start: 308, end: 309
✖ Declaration or statement expected - start: 309, end: 310
✖ Missing an opening brace - '{ - start: 331, end: 332
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 330, end: 332
✖ Expected a ')' to match the '(' token here - start: 334, end: 335
✖ Declaration or statement expected - start: 335, end: 336
✖ Method definition expected - start: 355, end: 357
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 337, end: 357
✖ Declaration or statement expected - start: 360, end: 361
✖ Declaration or statement expected - start: 361, end: 362
✖ Invalid character - start: 433, end: 434
✖ The parser expected to find a '}' to match the '{' token here - start: 438, end: 439
✖ Declaration or statement expected - start: 445, end: 446
✖ Declaration or statement expected - start: 446, end: 447
✖ Invalid character - start: 461, end: 462
✖ Method definition expected - start: 463, end: 466
✖ The parser expected to find a '}' to match the '{' token here - start: 466, end: 467
✖ Declaration or statement expected - start: 473, end: 474
✖ Declaration or statement expected - start: 474, end: 475
✖ Invalid character - start: 489, end: 490
✖ Method definition expected - start: 491, end: 494
✖ The parser expected to find a '}' to match the '{' token here - start: 494, end: 495
✖ '{' is not allowed here. Did you mean ';'? - start: 500, end: 502
✖ Declaration or statement expected - start: 504, end: 505
✖ Declaration or statement expected - start: 505, end: 506
✖ Invalid character - start: 517, end: 518
✖ The parser expected to find a '}' to match the '{' token here - start: 522, end: 523
✖ Declaration or statement expected - start: 529, end: 530
✖ Declaration or statement expected - start: 530, end: 531
✖ Invalid character - start: 547, end: 548
✖ Method definition expected - start: 549, end: 552
✖ The parser expected to find a '}' to match the '{' token here - start: 552, end: 553
✖ Declaration or statement expected - start: 559, end: 560
✖ Declaration or statement expected - start: 560, end: 561
✖ Invalid character - start: 578, end: 579
✖ Unterminated string literal - start: 580, end: 592
✖ Method definition expected - start: 580, end: 592
✖ Expected a ')' to match the '(' token here - start: 595, end: 600
✖ The parser expected to find a '}' to match the '{' token here - start: 601, end: 602
✖ '; ' is not allowed here. Did you mean ';'? - start: 605, end: 608
✖ '{' is not allowed here. Did you mean ';'? - start: 610, end: 612
✖ '; ' is not allowed here. Did you mean ';'? - start: 617, end: 620
✖ '{' is not allowed here. Did you mean ';'? - start: 622, end: 624
✖ Declaration or statement expected - start: 626, end: 627
✖ Invalid character - start: 653, end: 654
✖ Method definition expected - start: 655, end: 658
✖ The parser expected to find a '}' to match the '{' token here - start: 658, end: 659
✖ Declaration or statement expected - start: 664, end: 665
✖ Declaration or statement expected - start: 665, end: 666
✖ Invalid character - start: 736, end: 737
✖ Method definition expected - start: 738, end: 741
✖ The parser expected to find a '}' to match the '{' token here - start: 741, end: 742
✖ '{' is not allowed here. Did you mean ';'? - start: 747, end: 749
✖ Declaration or statement expected - start: 750, end: 751
✖ Declaration or statement expected - start: 751, end: 752

```

