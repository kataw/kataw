# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class x { #foo() {}}

(class {#a() { }});
(class {get #a() { }});
(class {set #a(foo) { }});
(class {*#a() { }});
(class {async #a() { }});
(class {async *#a() { }});

(class {#a() { } #b() {}});
(class {get #a() { } set #a(foo) {}});
(class {get #a() { } get #b() {} set #a(foo) {}});
(class {get #a() { } get #b() {} set #a(foo) {} set #b(foo) {}});
(class {set #a(foo) { } set #b(foo) {}});
(class {get #a() { } get #b() {}});

(class {#a() { } static a() {}});
(class {#a() { } a() {}});
(class {#a() { } a() {} static a() {}});
(class {get #a() { } get a() {} static get a() {}});
(class {set #a(foo) { } set a(foo) {} static set a(foo) {}});

(class {#a() { } get #b() {}});
(class {#a() { } async #b() {}});
(class {#a() { } async *#b() {}});

(class {#get() {}});
(class { #set() {}});
(class { #yield() {}});
(class { #await() {}});
(class { #async() {}});
(class { #static() {}});
(class { #arguments() {}});
(class { get #yield() {}});
(class { get #await() {}});
(class { get #async() {}});
(class { get #get() {}});
(class { get #static() {}});
(class { get #arguments() {}});
(class { set #yield(test) {}});
(class { set #async(test) {}});
(class { set #await(test) {}});
(class { set #set(test) {}});
(class { set #static(test) {}});
(class { set #arguments(test) {}});
(class { async #yield() {}});
(class { async #async() {}});
(class { async #await() {}});
(class { async #get() {}});
(class { async #set() {}});
(class { async #static() {}});
(class { async #arguments() {}});
(class { *#async() {}});
(class { *#await() {}});
(class { *#yield() {}});
(class { *#get() {}});
(class { *#set() {}});
(class { *#static() {}});
(class { *#arguments() {}});
(class { async *#yield() {}});
(class { async *#async() {}});
(class { async *#await() {}});
(class { async *#get() {}});
(class { async *#set() {}});
(class { async *#static() {}});
(class { async *#arguments() {}});

(class { #b;#a() { }});
(class { #b;get #a() { }});
(class { #b;set #a(foo) { }});
(class { #b;*#a() { }});
(class { #b;async #a() { }});
(class { #b;async *#a() { }});
(class { #b = 1;#a() { }});
(class { #b = 1;get #a() { }});
(class { #b = 1;set #a(foo) { }});
(class { #b = 1;*#a() { }});
(class { #b = 1;async #a() { }});
(class { #b = 1;async *#a() { }});
(class { a;#a() { }});
(class { a;get #a() { }});
(class { a;set #a(foo) { }});
(class { a;*#a() { }});
(class { a;async #a() { }});
(class { a;async *#a() { }});
(class { a = 1;#a() { }});
(class { a = 1;get #a() { }});
(class { a = 1;set #a(foo) { }});
(class { a = 1;*#a() { }});
(class { a = 1;async #a() { }});
(class { a = 1;async *#a() { }});

`````

## Output

### CST

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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                    "text": "#foo",
                                    "rawText": "#foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
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
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 19
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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
                        "start": 23,
                        "end": 28
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
                                            "start": 30,
                                            "end": 32
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 34
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
                                            "start": 34,
                                            "end": 38
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 38
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 38
                        },
                        "flags": 28,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 39
                },
                "flags": 20,
                "transformFlags": 0,
                "start": 33,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 48
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
                                        "start": 50,
                                        "end": 53
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
                                            "start": 53,
                                            "end": 56
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 58
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
                                                "start": 60,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 62
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 62
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 62
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 62
                        },
                        "flags": 48,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 63
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 63
                },
                "flags": 41,
                "transformFlags": 0,
                "start": 33,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 41,
            "end": 65
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
                        "start": 67,
                        "end": 72
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
                                        "start": 74,
                                        "end": 77
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
                                            "start": 77,
                                            "end": 80
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 81,
                                                    "end": 84
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 81,
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
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 89
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 89
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 89
                        },
                        "flags": 72,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 90
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 90
                },
                "flags": 65,
                "transformFlags": 0,
                "start": 33,
                "end": 91
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 65,
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
                        "start": 94,
                        "end": 99
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
                                        "transformFlags": 0,
                                        "start": 101,
                                        "end": 102
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
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
                                                "start": 108,
                                                "end": 108
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 106,
                                            "end": 110
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 110
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 101,
                                    "end": 110
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 110
                        },
                        "flags": 99,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 111
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 111
                },
                "flags": 92,
                "transformFlags": 0,
                "start": 33,
                "end": 112
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 92,
            "end": 113
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 127
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
                                            "start": 127,
                                            "end": 130
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 131,
                                            "end": 132
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
                                                "start": 134,
                                                "end": 134
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 132,
                                            "end": 136
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 130,
                                        "end": 136
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 122,
                                    "end": 136
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 122,
                            "end": 136
                        },
                        "flags": 120,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 137
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 137
                },
                "flags": 113,
                "transformFlags": 0,
                "start": 33,
                "end": 138
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 113,
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
                        "transformFlags": 0,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 148,
                                        "end": 153
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 153,
                                        "end": 155
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 155,
                                            "end": 157
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 159
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
                                                "start": 161,
                                                "end": 161
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 159,
                                            "end": 163
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 157,
                                        "end": 163
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 148,
                                    "end": 163
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 163
                        },
                        "flags": 146,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 164
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 164
                },
                "flags": 139,
                "transformFlags": 0,
                "start": 33,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 139,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 169,
                        "end": 174
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
                                            "start": 176,
                                            "end": 178
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 179,
                                            "end": 180
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
                                            "start": 180,
                                            "end": 184
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 178,
                                        "end": 184
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 184
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
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 184,
                                            "end": 187
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 188,
                                            "end": 189
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
                                                "start": 191,
                                                "end": 191
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 192
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 187,
                                        "end": 192
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 192
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 176,
                            "end": 192
                        },
                        "flags": 174,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 193
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 169,
                    "end": 193
                },
                "flags": 166,
                "transformFlags": 0,
                "start": 33,
                "end": 194
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 166,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 197,
                        "end": 202
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
                                        "start": 204,
                                        "end": 207
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
                                            "start": 207,
                                            "end": 210
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 211,
                                            "end": 212
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
                                                "start": 214,
                                                "end": 214
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 212,
                                            "end": 216
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 210,
                                        "end": 216
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 204,
                                    "end": 216
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
                                        "start": 216,
                                        "end": 220
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
                                            "start": 220,
                                            "end": 223
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 224,
                                                    "end": 227
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 224,
                                            "end": 228
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
                                            "start": 228,
                                            "end": 231
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 223,
                                        "end": 231
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 216,
                                    "end": 231
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 204,
                            "end": 231
                        },
                        "flags": 202,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 232
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 197,
                    "end": 232
                },
                "flags": 195,
                "transformFlags": 0,
                "start": 33,
                "end": 233
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 195,
            "end": 234
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
                        "start": 236,
                        "end": 241
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
                                        "start": 243,
                                        "end": 246
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
                                            "start": 246,
                                            "end": 249
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 250,
                                            "end": 251
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
                                                "start": 253,
                                                "end": 253
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 251,
                                            "end": 255
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 249,
                                        "end": 255
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 243,
                                    "end": 255
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
                                        "start": 255,
                                        "end": 259
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 259,
                                            "end": 262
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 263,
                                            "end": 264
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
                                                "start": 266,
                                                "end": 266
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 264,
                                            "end": 267
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 262,
                                        "end": 267
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 255,
                                    "end": 267
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
                                        "start": 267,
                                        "end": 271
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
                                            "start": 271,
                                            "end": 274
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 275,
                                                    "end": 278
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 275,
                                            "end": 279
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
                                                "start": 281,
                                                "end": 281
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 279,
                                            "end": 282
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 274,
                                        "end": 282
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 267,
                                    "end": 282
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 243,
                            "end": 282
                        },
                        "flags": 241,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 283
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 283
                },
                "flags": 234,
                "transformFlags": 0,
                "start": 33,
                "end": 284
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 234,
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
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 294,
                                        "end": 297
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
                                            "start": 297,
                                            "end": 300
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 301,
                                            "end": 302
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
                                                "start": 304,
                                                "end": 304
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 302,
                                            "end": 306
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 300,
                                        "end": 306
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 294,
                                    "end": 306
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
                                        "start": 306,
                                        "end": 310
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 310,
                                            "end": 313
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 314,
                                            "end": 315
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
                                                "start": 317,
                                                "end": 317
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 315,
                                            "end": 318
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 313,
                                        "end": 318
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 306,
                                    "end": 318
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
                                        "start": 318,
                                        "end": 322
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
                                            "start": 322,
                                            "end": 325
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 326,
                                                    "end": 329
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 326,
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
                                                "start": 332,
                                                "end": 332
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 330,
                                            "end": 333
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 325,
                                        "end": 333
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 318,
                                    "end": 333
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
                                        "start": 333,
                                        "end": 337
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 337,
                                            "end": 340
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 341,
                                                    "end": 344
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 341,
                                            "end": 345
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
                                                "start": 347,
                                                "end": 347
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 345,
                                            "end": 348
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 340,
                                        "end": 348
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 333,
                                    "end": 348
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 294,
                            "end": 348
                        },
                        "flags": 292,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 349
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 287,
                    "end": 349
                },
                "flags": 285,
                "transformFlags": 0,
                "start": 33,
                "end": 350
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 285,
            "end": 351
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
                        "start": 353,
                        "end": 358
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
                                        "start": 360,
                                        "end": 363
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
                                            "start": 363,
                                            "end": 366
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 367,
                                                    "end": 370
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 367,
                                            "end": 371
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
                                                "start": 373,
                                                "end": 373
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 371,
                                            "end": 375
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 366,
                                        "end": 375
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 360,
                                    "end": 375
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
                                        "start": 375,
                                        "end": 379
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 379,
                                            "end": 382
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 383,
                                                    "end": 386
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 383,
                                            "end": 387
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
                                                "start": 389,
                                                "end": 389
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 387,
                                            "end": 390
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 382,
                                        "end": 390
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 375,
                                    "end": 390
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 360,
                            "end": 390
                        },
                        "flags": 358,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 391
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 353,
                    "end": 391
                },
                "flags": 351,
                "transformFlags": 0,
                "start": 33,
                "end": 392
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 351,
            "end": 393
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
                        "start": 395,
                        "end": 400
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
                                        "start": 402,
                                        "end": 405
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
                                            "start": 405,
                                            "end": 408
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 409,
                                            "end": 410
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
                                                "start": 412,
                                                "end": 412
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 410,
                                            "end": 414
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 408,
                                        "end": 414
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 402,
                                    "end": 414
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
                                        "start": 414,
                                        "end": 418
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 418,
                                            "end": 421
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 422,
                                            "end": 423
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
                                                "start": 425,
                                                "end": 425
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 423,
                                            "end": 426
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 421,
                                        "end": 426
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 414,
                                    "end": 426
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 402,
                            "end": 426
                        },
                        "flags": 400,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 427
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 395,
                    "end": 427
                },
                "flags": 393,
                "transformFlags": 0,
                "start": 33,
                "end": 428
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 393,
            "end": 429
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
                                            "start": 439,
                                            "end": 441
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 442,
                                            "end": 443
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
                                                "start": 445,
                                                "end": 445
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 443,
                                            "end": 447
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 441,
                                        "end": 447
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 439,
                                    "end": 447
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 447,
                                        "end": 454
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 454,
                                            "end": 456
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 457,
                                            "end": 458
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
                                                "start": 460,
                                                "end": 460
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 458,
                                            "end": 461
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 456,
                                        "end": 461
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 454,
                                    "end": 461
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 439,
                            "end": 461
                        },
                        "flags": 437,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 462
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 432,
                    "end": 462
                },
                "flags": 429,
                "transformFlags": 0,
                "start": 33,
                "end": 463
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 429,
            "end": 464
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
                        "start": 466,
                        "end": 471
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
                                            "start": 473,
                                            "end": 475
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 476,
                                            "end": 477
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
                                                "start": 479,
                                                "end": 479
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 477,
                                            "end": 481
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 475,
                                        "end": 481
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 473,
                                    "end": 481
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 481,
                                            "end": 483
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 484,
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
                                                "transformFlags": 0,
                                                "start": 487,
                                                "end": 487
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 485,
                                            "end": 488
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 483,
                                        "end": 488
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 481,
                                    "end": 488
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 473,
                            "end": 488
                        },
                        "flags": 471,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 489
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 466,
                    "end": 489
                },
                "flags": 464,
                "transformFlags": 0,
                "start": 33,
                "end": 490
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 464,
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
                        "transformFlags": 0,
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
                                            "start": 500,
                                            "end": 502
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 503,
                                            "end": 504
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
                                                "start": 506,
                                                "end": 506
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 504,
                                            "end": 508
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 502,
                                        "end": 508
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 500,
                                    "end": 508
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 508,
                                            "end": 510
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 511,
                                            "end": 512
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
                                                "start": 514,
                                                "end": 514
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 512,
                                            "end": 515
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 510,
                                        "end": 515
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 508,
                                    "end": 515
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 515,
                                        "end": 522
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 522,
                                            "end": 524
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 525,
                                            "end": 526
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
                                                "start": 528,
                                                "end": 528
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 526,
                                            "end": 529
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 524,
                                        "end": 529
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 522,
                                    "end": 529
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 500,
                            "end": 529
                        },
                        "flags": 498,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 530
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 493,
                    "end": 530
                },
                "flags": 491,
                "transformFlags": 0,
                "start": 33,
                "end": 531
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 491,
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
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 541,
                                        "end": 544
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
                                            "start": 544,
                                            "end": 547
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 548,
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
                                                "start": 551,
                                                "end": 551
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 549,
                                            "end": 553
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 547,
                                        "end": 553
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 541,
                                    "end": 553
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
                                        "start": 553,
                                        "end": 557
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 557,
                                            "end": 559
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 560,
                                            "end": 561
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
                                                "start": 563,
                                                "end": 563
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 561,
                                            "end": 564
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 559,
                                        "end": 564
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 553,
                                    "end": 564
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 564,
                                        "end": 571
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 571,
                                        "end": 575
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 575,
                                            "end": 577
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 578,
                                            "end": 579
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
                                                "start": 581,
                                                "end": 581
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 579,
                                            "end": 582
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 577,
                                        "end": 582
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 571,
                                    "end": 582
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 541,
                            "end": 582
                        },
                        "flags": 539,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 583
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 534,
                    "end": 583
                },
                "flags": 532,
                "transformFlags": 0,
                "start": 33,
                "end": 584
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 532,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 587,
                        "end": 592
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
                                        "start": 594,
                                        "end": 597
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
                                            "start": 597,
                                            "end": 600
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 601,
                                                    "end": 604
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 601,
                                            "end": 605
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
                                                "start": 607,
                                                "end": 607
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 605,
                                            "end": 609
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 600,
                                        "end": 609
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 594,
                                    "end": 609
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
                                        "start": 609,
                                        "end": 613
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 613,
                                            "end": 615
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 616,
                                                    "end": 619
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 616,
                                            "end": 620
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
                                                "start": 622,
                                                "end": 622
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 620,
                                            "end": 623
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 615,
                                        "end": 623
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 609,
                                    "end": 623
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 623,
                                        "end": 630
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 630,
                                        "end": 634
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 634,
                                            "end": 636
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 637,
                                                    "end": 640
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 637,
                                            "end": 641
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
                                                "start": 643,
                                                "end": 643
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 641,
                                            "end": 644
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 636,
                                        "end": 644
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 630,
                                    "end": 644
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 594,
                            "end": 644
                        },
                        "flags": 592,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 645
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 587,
                    "end": 645
                },
                "flags": 585,
                "transformFlags": 0,
                "start": 33,
                "end": 646
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 585,
            "end": 647
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
                        "start": 650,
                        "end": 655
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
                                            "start": 657,
                                            "end": 659
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 660,
                                            "end": 661
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
                                                "start": 663,
                                                "end": 663
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 661,
                                            "end": 665
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 659,
                                        "end": 665
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 657,
                                    "end": 665
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
                                        "start": 665,
                                        "end": 669
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 669,
                                            "end": 672
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 673,
                                            "end": 674
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
                                                "start": 676,
                                                "end": 676
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 674,
                                            "end": 677
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 672,
                                        "end": 677
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 665,
                                    "end": 677
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 657,
                            "end": 677
                        },
                        "flags": 655,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 678
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 650,
                    "end": 678
                },
                "flags": 647,
                "transformFlags": 0,
                "start": 33,
                "end": 679
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 647,
            "end": 680
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
                        "start": 682,
                        "end": 687
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
                                            "start": 689,
                                            "end": 691
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 692,
                                            "end": 693
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
                                                "start": 695,
                                                "end": 695
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 693,
                                            "end": 697
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 691,
                                        "end": 697
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 689,
                                    "end": 697
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 697,
                                        "end": 703
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 703,
                                            "end": 706
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 707,
                                            "end": 708
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
                                                "start": 710,
                                                "end": 710
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 708,
                                            "end": 711
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 706,
                                        "end": 711
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 697,
                                    "end": 711
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 689,
                            "end": 711
                        },
                        "flags": 687,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 712
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 682,
                    "end": 712
                },
                "flags": 680,
                "transformFlags": 0,
                "start": 33,
                "end": 713
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 680,
            "end": 714
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
                        "start": 716,
                        "end": 721
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
                                            "start": 723,
                                            "end": 725
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 726,
                                            "end": 727
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
                                                "start": 729,
                                                "end": 729
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 727,
                                            "end": 731
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 725,
                                        "end": 731
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 723,
                                    "end": 731
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 731,
                                        "end": 737
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 737,
                                        "end": 739
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 739,
                                            "end": 741
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 742,
                                            "end": 743
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
                                                "start": 745,
                                                "end": 745
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 743,
                                            "end": 746
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 741,
                                        "end": 746
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 731,
                                    "end": 746
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 723,
                            "end": 746
                        },
                        "flags": 721,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 747
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 716,
                    "end": 747
                },
                "flags": 714,
                "transformFlags": 0,
                "start": 33,
                "end": 748
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 714,
            "end": 749
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
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "#get",
                                            "rawText": "#get",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 759,
                                            "end": 763
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 764,
                                            "end": 765
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
                                                "start": 767,
                                                "end": 767
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 765,
                                            "end": 768
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 763,
                                        "end": 768
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 759,
                                    "end": 768
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 759,
                            "end": 768
                        },
                        "flags": 757,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 769
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 752,
                    "end": 769
                },
                "flags": 749,
                "transformFlags": 0,
                "start": 33,
                "end": 770
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 749,
            "end": 771
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
                        "start": 773,
                        "end": 778
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
                                            "text": "#set",
                                            "rawText": "#set",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 780,
                                            "end": 785
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 786,
                                            "end": 787
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
                                                "start": 789,
                                                "end": 789
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 787,
                                            "end": 790
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 785,
                                        "end": 790
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 780,
                                    "end": 790
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 780,
                            "end": 790
                        },
                        "flags": 778,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 791
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 773,
                    "end": 791
                },
                "flags": 771,
                "transformFlags": 0,
                "start": 33,
                "end": 792
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 771,
            "end": 793
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
                        "start": 795,
                        "end": 800
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
                                            "text": "#yield",
                                            "rawText": "#yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 802,
                                            "end": 809
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 810,
                                            "end": 811
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
                                                "start": 813,
                                                "end": 813
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 811,
                                            "end": 814
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 809,
                                        "end": 814
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 802,
                                    "end": 814
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 802,
                            "end": 814
                        },
                        "flags": 800,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 815
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 795,
                    "end": 815
                },
                "flags": 793,
                "transformFlags": 0,
                "start": 33,
                "end": 816
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 793,
            "end": 817
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
                        "start": 819,
                        "end": 824
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
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 826,
                                            "end": 833
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 834,
                                            "end": 835
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
                                                "start": 837,
                                                "end": 837
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 835,
                                            "end": 838
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 833,
                                        "end": 838
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 826,
                                    "end": 838
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 826,
                            "end": 838
                        },
                        "flags": 824,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 839
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 819,
                    "end": 839
                },
                "flags": 817,
                "transformFlags": 0,
                "start": 33,
                "end": 840
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 817,
            "end": 841
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
                        "start": 843,
                        "end": 848
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
                                            "text": "#async",
                                            "rawText": "#async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 850,
                                            "end": 857
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 858,
                                            "end": 859
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
                                                "start": 861,
                                                "end": 861
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 859,
                                            "end": 862
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 857,
                                        "end": 862
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 850,
                                    "end": 862
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 850,
                            "end": 862
                        },
                        "flags": 848,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 863
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 843,
                    "end": 863
                },
                "flags": 841,
                "transformFlags": 0,
                "start": 33,
                "end": 864
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 841,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 867,
                        "end": 872
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
                                            "text": "#static",
                                            "rawText": "#static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 874,
                                            "end": 882
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 883,
                                            "end": 884
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
                                                "start": 886,
                                                "end": 886
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 884,
                                            "end": 887
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 882,
                                        "end": 887
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 874,
                                    "end": 887
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 874,
                            "end": 887
                        },
                        "flags": 872,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 888
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 867,
                    "end": 888
                },
                "flags": 865,
                "transformFlags": 0,
                "start": 33,
                "end": 889
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 865,
            "end": 890
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
                        "start": 892,
                        "end": 897
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
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 899,
                                            "end": 910
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 911,
                                            "end": 912
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
                                                "start": 914,
                                                "end": 914
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 912,
                                            "end": 915
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 910,
                                        "end": 915
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 899,
                                    "end": 915
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 899,
                            "end": 915
                        },
                        "flags": 897,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 916
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 892,
                    "end": 916
                },
                "flags": 890,
                "transformFlags": 0,
                "start": 33,
                "end": 917
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 890,
            "end": 918
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
                        "start": 920,
                        "end": 925
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
                                        "start": 927,
                                        "end": 931
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#yield",
                                            "rawText": "#yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 931,
                                            "end": 938
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 939,
                                            "end": 940
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
                                                "start": 942,
                                                "end": 942
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 940,
                                            "end": 943
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 938,
                                        "end": 943
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 927,
                                    "end": 943
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 927,
                            "end": 943
                        },
                        "flags": 925,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 944
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 920,
                    "end": 944
                },
                "flags": 918,
                "transformFlags": 0,
                "start": 33,
                "end": 945
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 918,
            "end": 946
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
                        "start": 948,
                        "end": 953
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
                                        "start": 955,
                                        "end": 959
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 959,
                                            "end": 966
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 970,
                                                "end": 970
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 968,
                                            "end": 971
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 966,
                                        "end": 971
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 955,
                                    "end": 971
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 955,
                            "end": 971
                        },
                        "flags": 953,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 972
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 948,
                    "end": 972
                },
                "flags": 946,
                "transformFlags": 0,
                "start": 33,
                "end": 973
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 946,
            "end": 974
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
                        "start": 976,
                        "end": 981
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
                                        "start": 983,
                                        "end": 987
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#async",
                                            "rawText": "#async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 987,
                                            "end": 994
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 995,
                                            "end": 996
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
                                                "start": 998,
                                                "end": 998
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 996,
                                            "end": 999
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 994,
                                        "end": 999
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 983,
                                    "end": 999
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 983,
                            "end": 999
                        },
                        "flags": 981,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1000
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 976,
                    "end": 1000
                },
                "flags": 974,
                "transformFlags": 0,
                "start": 33,
                "end": 1001
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 974,
            "end": 1002
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
                        "start": 1004,
                        "end": 1009
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
                                        "start": 1011,
                                        "end": 1015
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#get",
                                            "rawText": "#get",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1015,
                                            "end": 1020
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 1024,
                                                "end": 1024
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1022,
                                            "end": 1025
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 1020,
                                        "end": 1025
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 1011,
                                    "end": 1025
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1011,
                            "end": 1025
                        },
                        "flags": 1009,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1026
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1004,
                    "end": 1026
                },
                "flags": 1002,
                "transformFlags": 0,
                "start": 33,
                "end": 1027
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1002,
            "end": 1028
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
                        "start": 1030,
                        "end": 1035
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
                                        "start": 1037,
                                        "end": 1041
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#static",
                                            "rawText": "#static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1041,
                                            "end": 1049
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 1050,
                                            "end": 1051
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
                                                "start": 1053,
                                                "end": 1053
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1051,
                                            "end": 1054
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 1049,
                                        "end": 1054
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 1037,
                                    "end": 1054
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1037,
                            "end": 1054
                        },
                        "flags": 1035,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1055
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1030,
                    "end": 1055
                },
                "flags": 1028,
                "transformFlags": 0,
                "start": 33,
                "end": 1056
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1028,
            "end": 1057
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
                        "start": 1059,
                        "end": 1064
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
                                        "start": 1066,
                                        "end": 1070
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1070,
                                            "end": 1081
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 1082,
                                            "end": 1083
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
                                                "start": 1085,
                                                "end": 1085
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1083,
                                            "end": 1086
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 1081,
                                        "end": 1086
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 1066,
                                    "end": 1086
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1066,
                            "end": 1086
                        },
                        "flags": 1064,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1087
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1059,
                    "end": 1087
                },
                "flags": 1057,
                "transformFlags": 0,
                "start": 33,
                "end": 1088
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1057,
            "end": 1089
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
                        "start": 1091,
                        "end": 1096
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
                                        "start": 1098,
                                        "end": 1102
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#yield",
                                            "rawText": "#yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1102,
                                            "end": 1109
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1110,
                                                    "end": 1114
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1110,
                                            "end": 1115
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
                                                "start": 1117,
                                                "end": 1117
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1115,
                                            "end": 1118
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1109,
                                        "end": 1118
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1098,
                                    "end": 1118
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1098,
                            "end": 1118
                        },
                        "flags": 1096,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1119
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1091,
                    "end": 1119
                },
                "flags": 1089,
                "transformFlags": 0,
                "start": 33,
                "end": 1120
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1089,
            "end": 1121
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
                        "start": 1123,
                        "end": 1128
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
                                        "start": 1130,
                                        "end": 1134
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#async",
                                            "rawText": "#async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1134,
                                            "end": 1141
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1142,
                                                    "end": 1146
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1142,
                                            "end": 1147
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
                                                "start": 1149,
                                                "end": 1149
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1147,
                                            "end": 1150
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1141,
                                        "end": 1150
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1130,
                                    "end": 1150
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1130,
                            "end": 1150
                        },
                        "flags": 1128,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1151
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1123,
                    "end": 1151
                },
                "flags": 1121,
                "transformFlags": 0,
                "start": 33,
                "end": 1152
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1121,
            "end": 1153
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
                        "start": 1155,
                        "end": 1160
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
                                        "start": 1162,
                                        "end": 1166
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1166,
                                            "end": 1173
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1174,
                                                    "end": 1178
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1174,
                                            "end": 1179
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
                                                "start": 1181,
                                                "end": 1181
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1179,
                                            "end": 1182
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1173,
                                        "end": 1182
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1162,
                                    "end": 1182
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1162,
                            "end": 1182
                        },
                        "flags": 1160,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1183
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1155,
                    "end": 1183
                },
                "flags": 1153,
                "transformFlags": 0,
                "start": 33,
                "end": 1184
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1153,
            "end": 1185
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
                        "start": 1187,
                        "end": 1192
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
                                        "start": 1194,
                                        "end": 1198
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#set",
                                            "rawText": "#set",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1198,
                                            "end": 1203
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1204,
                                                    "end": 1208
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1204,
                                            "end": 1209
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
                                                "start": 1211,
                                                "end": 1211
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1209,
                                            "end": 1212
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1203,
                                        "end": 1212
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1194,
                                    "end": 1212
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1194,
                            "end": 1212
                        },
                        "flags": 1192,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1213
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1187,
                    "end": 1213
                },
                "flags": 1185,
                "transformFlags": 0,
                "start": 33,
                "end": 1214
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1185,
            "end": 1215
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
                        "start": 1217,
                        "end": 1222
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
                                        "start": 1224,
                                        "end": 1228
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#static",
                                            "rawText": "#static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1228,
                                            "end": 1236
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1237,
                                                    "end": 1241
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1237,
                                            "end": 1242
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
                                                "start": 1244,
                                                "end": 1244
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1242,
                                            "end": 1245
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1236,
                                        "end": 1245
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1224,
                                    "end": 1245
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1224,
                            "end": 1245
                        },
                        "flags": 1222,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1246
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1217,
                    "end": 1246
                },
                "flags": 1215,
                "transformFlags": 0,
                "start": 33,
                "end": 1247
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1215,
            "end": 1248
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
                        "start": 1250,
                        "end": 1255
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
                                        "start": 1257,
                                        "end": 1261
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1261,
                                            "end": 1272
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1273,
                                                    "end": 1277
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1273,
                                            "end": 1278
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
                                                "start": 1280,
                                                "end": 1280
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1278,
                                            "end": 1281
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1272,
                                        "end": 1281
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1257,
                                    "end": 1281
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1257,
                            "end": 1281
                        },
                        "flags": 1255,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1282
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1250,
                    "end": 1282
                },
                "flags": 1248,
                "transformFlags": 0,
                "start": 33,
                "end": 1283
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1248,
            "end": 1284
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
                        "start": 1286,
                        "end": 1291
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
                                        "start": 1293,
                                        "end": 1299
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#yield",
                                            "rawText": "#yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1299,
                                            "end": 1306
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1307,
                                            "end": 1308
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
                                                "start": 1310,
                                                "end": 1310
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1308,
                                            "end": 1311
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1306,
                                        "end": 1311
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1293,
                                    "end": 1311
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1293,
                            "end": 1311
                        },
                        "flags": 1291,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1312
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1286,
                    "end": 1312
                },
                "flags": 1284,
                "transformFlags": 0,
                "start": 33,
                "end": 1313
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1284,
            "end": 1314
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
                        "start": 1316,
                        "end": 1321
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
                                        "start": 1323,
                                        "end": 1329
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#async",
                                            "rawText": "#async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1329,
                                            "end": 1336
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1337,
                                            "end": 1338
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
                                                "start": 1340,
                                                "end": 1340
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1338,
                                            "end": 1341
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1336,
                                        "end": 1341
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1323,
                                    "end": 1341
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1323,
                            "end": 1341
                        },
                        "flags": 1321,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1342
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1316,
                    "end": 1342
                },
                "flags": 1314,
                "transformFlags": 0,
                "start": 33,
                "end": 1343
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1314,
            "end": 1344
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
                        "start": 1346,
                        "end": 1351
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
                                        "start": 1353,
                                        "end": 1359
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1359,
                                            "end": 1366
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1367,
                                            "end": 1368
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
                                                "start": 1370,
                                                "end": 1370
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1368,
                                            "end": 1371
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1366,
                                        "end": 1371
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1353,
                                    "end": 1371
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1353,
                            "end": 1371
                        },
                        "flags": 1351,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1372
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1346,
                    "end": 1372
                },
                "flags": 1344,
                "transformFlags": 0,
                "start": 33,
                "end": 1373
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1344,
            "end": 1374
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
                        "start": 1376,
                        "end": 1381
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
                                        "start": 1383,
                                        "end": 1389
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#get",
                                            "rawText": "#get",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1389,
                                            "end": 1394
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1395,
                                            "end": 1396
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
                                                "start": 1398,
                                                "end": 1398
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1396,
                                            "end": 1399
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1394,
                                        "end": 1399
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1383,
                                    "end": 1399
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1383,
                            "end": 1399
                        },
                        "flags": 1381,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1400
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1376,
                    "end": 1400
                },
                "flags": 1374,
                "transformFlags": 0,
                "start": 33,
                "end": 1401
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1374,
            "end": 1402
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
                        "start": 1404,
                        "end": 1409
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
                                        "start": 1411,
                                        "end": 1417
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#set",
                                            "rawText": "#set",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1417,
                                            "end": 1422
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1423,
                                            "end": 1424
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
                                                "start": 1426,
                                                "end": 1426
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1424,
                                            "end": 1427
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1422,
                                        "end": 1427
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1411,
                                    "end": 1427
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1411,
                            "end": 1427
                        },
                        "flags": 1409,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1428
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1404,
                    "end": 1428
                },
                "flags": 1402,
                "transformFlags": 0,
                "start": 33,
                "end": 1429
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1402,
            "end": 1430
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
                        "start": 1432,
                        "end": 1437
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
                                        "start": 1439,
                                        "end": 1445
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#static",
                                            "rawText": "#static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1445,
                                            "end": 1453
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1454,
                                            "end": 1455
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
                                                "start": 1457,
                                                "end": 1457
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1455,
                                            "end": 1458
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1453,
                                        "end": 1458
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1439,
                                    "end": 1458
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1439,
                            "end": 1458
                        },
                        "flags": 1437,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1459
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1432,
                    "end": 1459
                },
                "flags": 1430,
                "transformFlags": 0,
                "start": 33,
                "end": 1460
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1430,
            "end": 1461
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
                        "start": 1463,
                        "end": 1468
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
                                        "start": 1470,
                                        "end": 1476
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1476,
                                            "end": 1487
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 1488,
                                            "end": 1489
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
                                                "start": 1491,
                                                "end": 1491
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1489,
                                            "end": 1492
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 1487,
                                        "end": 1492
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 1470,
                                    "end": 1492
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1470,
                            "end": 1492
                        },
                        "flags": 1468,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1493
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1463,
                    "end": 1493
                },
                "flags": 1461,
                "transformFlags": 0,
                "start": 33,
                "end": 1494
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1461,
            "end": 1495
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
                        "start": 1497,
                        "end": 1502
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
                                        "transformFlags": 0,
                                        "start": 1504,
                                        "end": 1506
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#async",
                                            "rawText": "#async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1506,
                                            "end": 1512
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1513,
                                            "end": 1514
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
                                                "start": 1516,
                                                "end": 1516
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1514,
                                            "end": 1517
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1512,
                                        "end": 1517
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1504,
                                    "end": 1517
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1504,
                            "end": 1517
                        },
                        "flags": 1502,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1518
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1497,
                    "end": 1518
                },
                "flags": 1495,
                "transformFlags": 0,
                "start": 33,
                "end": 1519
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1495,
            "end": 1520
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
                        "start": 1522,
                        "end": 1527
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
                                        "transformFlags": 0,
                                        "start": 1529,
                                        "end": 1531
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1531,
                                            "end": 1537
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1538,
                                            "end": 1539
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
                                                "start": 1541,
                                                "end": 1541
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1539,
                                            "end": 1542
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1537,
                                        "end": 1542
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1529,
                                    "end": 1542
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1529,
                            "end": 1542
                        },
                        "flags": 1527,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1543
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1522,
                    "end": 1543
                },
                "flags": 1520,
                "transformFlags": 0,
                "start": 33,
                "end": 1544
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1520,
            "end": 1545
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
                        "start": 1547,
                        "end": 1552
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
                                        "transformFlags": 0,
                                        "start": 1554,
                                        "end": 1556
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#yield",
                                            "rawText": "#yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1556,
                                            "end": 1562
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1563,
                                            "end": 1564
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
                                                "start": 1566,
                                                "end": 1566
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1564,
                                            "end": 1567
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1562,
                                        "end": 1567
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1554,
                                    "end": 1567
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1554,
                            "end": 1567
                        },
                        "flags": 1552,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1568
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1547,
                    "end": 1568
                },
                "flags": 1545,
                "transformFlags": 0,
                "start": 33,
                "end": 1569
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1545,
            "end": 1570
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
                        "start": 1572,
                        "end": 1577
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
                                        "transformFlags": 0,
                                        "start": 1579,
                                        "end": 1581
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#get",
                                            "rawText": "#get",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1581,
                                            "end": 1585
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1586,
                                            "end": 1587
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
                                                "start": 1589,
                                                "end": 1589
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1587,
                                            "end": 1590
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1585,
                                        "end": 1590
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1579,
                                    "end": 1590
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1579,
                            "end": 1590
                        },
                        "flags": 1577,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1591
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1572,
                    "end": 1591
                },
                "flags": 1570,
                "transformFlags": 0,
                "start": 33,
                "end": 1592
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1570,
            "end": 1593
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
                        "start": 1595,
                        "end": 1600
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
                                        "transformFlags": 0,
                                        "start": 1602,
                                        "end": 1604
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#set",
                                            "rawText": "#set",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1604,
                                            "end": 1608
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1609,
                                            "end": 1610
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
                                                "start": 1612,
                                                "end": 1612
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1610,
                                            "end": 1613
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1608,
                                        "end": 1613
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1602,
                                    "end": 1613
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1602,
                            "end": 1613
                        },
                        "flags": 1600,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1614
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1595,
                    "end": 1614
                },
                "flags": 1593,
                "transformFlags": 0,
                "start": 33,
                "end": 1615
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1593,
            "end": 1616
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
                        "start": 1618,
                        "end": 1623
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
                                        "transformFlags": 0,
                                        "start": 1625,
                                        "end": 1627
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#static",
                                            "rawText": "#static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1627,
                                            "end": 1634
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1635,
                                            "end": 1636
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
                                                "start": 1638,
                                                "end": 1638
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1636,
                                            "end": 1639
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1634,
                                        "end": 1639
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1625,
                                    "end": 1639
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1625,
                            "end": 1639
                        },
                        "flags": 1623,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1640
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1618,
                    "end": 1640
                },
                "flags": 1616,
                "transformFlags": 0,
                "start": 33,
                "end": 1641
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1616,
            "end": 1642
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
                        "start": 1644,
                        "end": 1649
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
                                        "transformFlags": 0,
                                        "start": 1651,
                                        "end": 1653
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1653,
                                            "end": 1663
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1664,
                                            "end": 1665
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
                                                "start": 1667,
                                                "end": 1667
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1665,
                                            "end": 1668
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1663,
                                        "end": 1668
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1651,
                                    "end": 1668
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1651,
                            "end": 1668
                        },
                        "flags": 1649,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1669
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1644,
                    "end": 1669
                },
                "flags": 1642,
                "transformFlags": 0,
                "start": 33,
                "end": 1670
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1642,
            "end": 1671
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
                        "start": 1673,
                        "end": 1678
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
                                        "start": 1680,
                                        "end": 1686
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1686,
                                        "end": 1688
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#yield",
                                            "rawText": "#yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1688,
                                            "end": 1694
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1695,
                                            "end": 1696
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
                                                "start": 1698,
                                                "end": 1698
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1696,
                                            "end": 1699
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1694,
                                        "end": 1699
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1680,
                                    "end": 1699
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1680,
                            "end": 1699
                        },
                        "flags": 1678,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1700
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1673,
                    "end": 1700
                },
                "flags": 1671,
                "transformFlags": 0,
                "start": 33,
                "end": 1701
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1671,
            "end": 1702
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
                        "start": 1704,
                        "end": 1709
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
                                        "start": 1711,
                                        "end": 1717
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1717,
                                        "end": 1719
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#async",
                                            "rawText": "#async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1719,
                                            "end": 1725
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1726,
                                            "end": 1727
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
                                                "start": 1729,
                                                "end": 1729
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1727,
                                            "end": 1730
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1725,
                                        "end": 1730
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1711,
                                    "end": 1730
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1711,
                            "end": 1730
                        },
                        "flags": 1709,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1731
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1704,
                    "end": 1731
                },
                "flags": 1702,
                "transformFlags": 0,
                "start": 33,
                "end": 1732
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1702,
            "end": 1733
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
                        "start": 1735,
                        "end": 1740
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
                                        "start": 1742,
                                        "end": 1748
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1748,
                                        "end": 1750
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1750,
                                            "end": 1756
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1757,
                                            "end": 1758
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
                                                "start": 1760,
                                                "end": 1760
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1758,
                                            "end": 1761
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1756,
                                        "end": 1761
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1742,
                                    "end": 1761
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1742,
                            "end": 1761
                        },
                        "flags": 1740,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1762
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1735,
                    "end": 1762
                },
                "flags": 1733,
                "transformFlags": 0,
                "start": 33,
                "end": 1763
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1733,
            "end": 1764
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
                        "start": 1766,
                        "end": 1771
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
                                        "start": 1773,
                                        "end": 1779
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1779,
                                        "end": 1781
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#get",
                                            "rawText": "#get",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1781,
                                            "end": 1785
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1786,
                                            "end": 1787
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
                                                "start": 1789,
                                                "end": 1789
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1787,
                                            "end": 1790
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1785,
                                        "end": 1790
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1773,
                                    "end": 1790
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1773,
                            "end": 1790
                        },
                        "flags": 1771,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1791
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1766,
                    "end": 1791
                },
                "flags": 1764,
                "transformFlags": 0,
                "start": 33,
                "end": 1792
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1764,
            "end": 1793
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
                        "start": 1795,
                        "end": 1800
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
                                        "start": 1802,
                                        "end": 1808
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1808,
                                        "end": 1810
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#set",
                                            "rawText": "#set",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1810,
                                            "end": 1814
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1815,
                                            "end": 1816
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
                                                "start": 1818,
                                                "end": 1818
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1816,
                                            "end": 1819
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1814,
                                        "end": 1819
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1802,
                                    "end": 1819
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1802,
                            "end": 1819
                        },
                        "flags": 1800,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1820
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1795,
                    "end": 1820
                },
                "flags": 1793,
                "transformFlags": 0,
                "start": 33,
                "end": 1821
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1793,
            "end": 1822
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
                        "start": 1824,
                        "end": 1829
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
                                        "start": 1831,
                                        "end": 1837
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1837,
                                        "end": 1839
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#static",
                                            "rawText": "#static",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1839,
                                            "end": 1846
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1847,
                                            "end": 1848
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
                                                "start": 1850,
                                                "end": 1850
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1848,
                                            "end": 1851
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1846,
                                        "end": 1851
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1831,
                                    "end": 1851
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1831,
                            "end": 1851
                        },
                        "flags": 1829,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1852
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1824,
                    "end": 1852
                },
                "flags": 1822,
                "transformFlags": 0,
                "start": 33,
                "end": 1853
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1822,
            "end": 1854
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
                        "start": 1856,
                        "end": 1861
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
                                        "start": 1863,
                                        "end": 1869
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 1869,
                                        "end": 1871
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1871,
                                            "end": 1881
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 1882,
                                            "end": 1883
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
                                                "start": 1885,
                                                "end": 1885
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1883,
                                            "end": 1886
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 1881,
                                        "end": 1886
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 1863,
                                    "end": 1886
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1863,
                            "end": 1886
                        },
                        "flags": 1861,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1887
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1856,
                    "end": 1887
                },
                "flags": 1854,
                "transformFlags": 0,
                "start": 33,
                "end": 1888
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1854,
            "end": 1889
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
                        "start": 1892,
                        "end": 1897
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1899,
                                        "end": 1902
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 1899,
                                    "end": 1902
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1902,
                                    "end": 1903
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
                                            "start": 1903,
                                            "end": 1905
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1906,
                                            "end": 1907
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
                                                "start": 1909,
                                                "end": 1909
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1907,
                                            "end": 1911
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1905,
                                        "end": 1911
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1903,
                                    "end": 1911
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1899,
                            "end": 1911
                        },
                        "flags": 1897,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1912
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1892,
                    "end": 1912
                },
                "flags": 1889,
                "transformFlags": 0,
                "start": 33,
                "end": 1913
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1889,
            "end": 1914
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
                        "start": 1916,
                        "end": 1921
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1923,
                                        "end": 1926
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 1923,
                                    "end": 1926
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1926,
                                    "end": 1927
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
                                        "start": 1927,
                                        "end": 1930
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
                                            "start": 1930,
                                            "end": 1933
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 1934,
                                            "end": 1935
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
                                                "start": 1937,
                                                "end": 1937
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1935,
                                            "end": 1939
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 1933,
                                        "end": 1939
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 1927,
                                    "end": 1939
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1923,
                            "end": 1939
                        },
                        "flags": 1921,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1940
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1916,
                    "end": 1940
                },
                "flags": 1914,
                "transformFlags": 0,
                "start": 33,
                "end": 1941
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1914,
            "end": 1942
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
                        "start": 1944,
                        "end": 1949
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1951,
                                        "end": 1954
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 1951,
                                    "end": 1954
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1954,
                                    "end": 1955
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
                                        "start": 1955,
                                        "end": 1958
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
                                            "start": 1958,
                                            "end": 1961
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1962,
                                                    "end": 1965
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 1962,
                                            "end": 1966
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
                                                "start": 1968,
                                                "end": 1968
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1966,
                                            "end": 1970
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 1961,
                                        "end": 1970
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 1955,
                                    "end": 1970
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1951,
                            "end": 1970
                        },
                        "flags": 1949,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1971
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1944,
                    "end": 1971
                },
                "flags": 1942,
                "transformFlags": 0,
                "start": 33,
                "end": 1972
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1942,
            "end": 1973
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
                        "start": 1975,
                        "end": 1980
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1982,
                                        "end": 1985
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 1982,
                                    "end": 1985
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1985,
                                    "end": 1986
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
                                        "transformFlags": 0,
                                        "start": 1986,
                                        "end": 1987
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1987,
                                            "end": 1989
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 1990,
                                            "end": 1991
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
                                                "start": 1993,
                                                "end": 1993
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1991,
                                            "end": 1995
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 1989,
                                        "end": 1995
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 1986,
                                    "end": 1995
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1982,
                            "end": 1995
                        },
                        "flags": 1980,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1996
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1975,
                    "end": 1996
                },
                "flags": 1973,
                "transformFlags": 0,
                "start": 33,
                "end": 1997
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1973,
            "end": 1998
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
                        "start": 2000,
                        "end": 2005
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2007,
                                        "end": 2010
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2007,
                                    "end": 2010
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2010,
                                    "end": 2011
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2011,
                                        "end": 2016
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
                                            "start": 2016,
                                            "end": 2019
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 2020,
                                            "end": 2021
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
                                                "start": 2023,
                                                "end": 2023
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2021,
                                            "end": 2025
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 2019,
                                        "end": 2025
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 2011,
                                    "end": 2025
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2007,
                            "end": 2025
                        },
                        "flags": 2005,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2026
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2000,
                    "end": 2026
                },
                "flags": 1998,
                "transformFlags": 0,
                "start": 33,
                "end": 2027
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1998,
            "end": 2028
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
                        "start": 2030,
                        "end": 2035
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2037,
                                        "end": 2040
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2037,
                                    "end": 2040
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2040,
                                    "end": 2041
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2041,
                                        "end": 2046
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2046,
                                        "end": 2048
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2048,
                                            "end": 2050
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 2051,
                                            "end": 2052
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
                                                "start": 2054,
                                                "end": 2054
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2052,
                                            "end": 2056
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 2050,
                                        "end": 2056
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 2041,
                                    "end": 2056
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2037,
                            "end": 2056
                        },
                        "flags": 2035,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2057
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2030,
                    "end": 2057
                },
                "flags": 2028,
                "transformFlags": 0,
                "start": 33,
                "end": 2058
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2028,
            "end": 2059
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
                        "start": 2061,
                        "end": 2066
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2068,
                                        "end": 2071
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2073,
                                        "end": 2075
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2068,
                                    "end": 2075
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2075,
                                    "end": 2076
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
                                            "start": 2076,
                                            "end": 2078
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 2079,
                                            "end": 2080
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
                                                "start": 2082,
                                                "end": 2082
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2080,
                                            "end": 2084
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 2078,
                                        "end": 2084
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 2076,
                                    "end": 2084
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2068,
                            "end": 2084
                        },
                        "flags": 2066,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2085
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2061,
                    "end": 2085
                },
                "flags": 2059,
                "transformFlags": 0,
                "start": 33,
                "end": 2086
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2059,
            "end": 2087
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
                        "start": 2089,
                        "end": 2094
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2096,
                                        "end": 2099
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2101,
                                        "end": 2103
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2096,
                                    "end": 2103
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2103,
                                    "end": 2104
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
                                        "start": 2104,
                                        "end": 2107
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
                                            "start": 2107,
                                            "end": 2110
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 2111,
                                            "end": 2112
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
                                                "start": 2114,
                                                "end": 2114
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2112,
                                            "end": 2116
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 2110,
                                        "end": 2116
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 2104,
                                    "end": 2116
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2096,
                            "end": 2116
                        },
                        "flags": 2094,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2117
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2089,
                    "end": 2117
                },
                "flags": 2087,
                "transformFlags": 0,
                "start": 33,
                "end": 2118
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2087,
            "end": 2119
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
                        "start": 2121,
                        "end": 2126
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2128,
                                        "end": 2131
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2133,
                                        "end": 2135
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2128,
                                    "end": 2135
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2135,
                                    "end": 2136
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
                                        "start": 2136,
                                        "end": 2139
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
                                            "start": 2139,
                                            "end": 2142
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2143,
                                                    "end": 2146
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 2143,
                                            "end": 2147
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
                                                "start": 2149,
                                                "end": 2149
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2147,
                                            "end": 2151
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 2142,
                                        "end": 2151
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 2136,
                                    "end": 2151
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2128,
                            "end": 2151
                        },
                        "flags": 2126,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2152
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2121,
                    "end": 2152
                },
                "flags": 2119,
                "transformFlags": 0,
                "start": 33,
                "end": 2153
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2119,
            "end": 2154
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
                        "start": 2156,
                        "end": 2161
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2163,
                                        "end": 2166
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2168,
                                        "end": 2170
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2163,
                                    "end": 2170
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2170,
                                    "end": 2171
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
                                        "transformFlags": 0,
                                        "start": 2171,
                                        "end": 2172
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2172,
                                            "end": 2174
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 2175,
                                            "end": 2176
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
                                                "start": 2178,
                                                "end": 2178
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2176,
                                            "end": 2180
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 2174,
                                        "end": 2180
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 2171,
                                    "end": 2180
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2163,
                            "end": 2180
                        },
                        "flags": 2161,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2181
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2156,
                    "end": 2181
                },
                "flags": 2154,
                "transformFlags": 0,
                "start": 33,
                "end": 2182
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2154,
            "end": 2183
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
                        "start": 2185,
                        "end": 2190
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2192,
                                        "end": 2195
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2197,
                                        "end": 2199
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2192,
                                    "end": 2199
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2199,
                                    "end": 2200
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2200,
                                        "end": 2205
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
                                            "start": 2205,
                                            "end": 2208
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 2209,
                                            "end": 2210
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
                                                "start": 2212,
                                                "end": 2212
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2210,
                                            "end": 2214
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 2208,
                                        "end": 2214
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 2200,
                                    "end": 2214
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2192,
                            "end": 2214
                        },
                        "flags": 2190,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2215
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2185,
                    "end": 2215
                },
                "flags": 2183,
                "transformFlags": 0,
                "start": 33,
                "end": 2216
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2183,
            "end": 2217
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
                        "start": 2219,
                        "end": 2224
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
                                        "text": "#b",
                                        "rawText": "#b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2226,
                                        "end": 2229
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2231,
                                        "end": 2233
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2226,
                                    "end": 2233
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2233,
                                    "end": 2234
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2234,
                                        "end": 2239
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2239,
                                        "end": 2241
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2241,
                                            "end": 2243
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 2244,
                                            "end": 2245
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
                                                "start": 2247,
                                                "end": 2247
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2245,
                                            "end": 2249
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 2243,
                                        "end": 2249
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 2234,
                                    "end": 2249
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2226,
                            "end": 2249
                        },
                        "flags": 2224,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2250
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2219,
                    "end": 2250
                },
                "flags": 2217,
                "transformFlags": 0,
                "start": 33,
                "end": 2251
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2217,
            "end": 2252
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
                        "start": 2254,
                        "end": 2259
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2261,
                                        "end": 2263
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2261,
                                    "end": 2263
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2263,
                                    "end": 2264
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
                                            "start": 2264,
                                            "end": 2266
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 2267,
                                            "end": 2268
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
                                                "start": 2270,
                                                "end": 2270
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2268,
                                            "end": 2272
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 2266,
                                        "end": 2272
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 2264,
                                    "end": 2272
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2261,
                            "end": 2272
                        },
                        "flags": 2259,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2273
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2254,
                    "end": 2273
                },
                "flags": 2252,
                "transformFlags": 0,
                "start": 33,
                "end": 2274
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2252,
            "end": 2275
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
                        "start": 2277,
                        "end": 2282
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2284,
                                        "end": 2286
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2284,
                                    "end": 2286
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2286,
                                    "end": 2287
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
                                        "start": 2287,
                                        "end": 2290
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
                                            "start": 2290,
                                            "end": 2293
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 2294,
                                            "end": 2295
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
                                                "start": 2297,
                                                "end": 2297
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2295,
                                            "end": 2299
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 2293,
                                        "end": 2299
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 2287,
                                    "end": 2299
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2284,
                            "end": 2299
                        },
                        "flags": 2282,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2300
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2277,
                    "end": 2300
                },
                "flags": 2275,
                "transformFlags": 0,
                "start": 33,
                "end": 2301
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2275,
            "end": 2302
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
                        "start": 2304,
                        "end": 2309
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2311,
                                        "end": 2313
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2311,
                                    "end": 2313
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2313,
                                    "end": 2314
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
                                        "start": 2314,
                                        "end": 2317
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
                                            "start": 2317,
                                            "end": 2320
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2321,
                                                    "end": 2324
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 2321,
                                            "end": 2325
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
                                                "start": 2327,
                                                "end": 2327
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2325,
                                            "end": 2329
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 2320,
                                        "end": 2329
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 2314,
                                    "end": 2329
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2311,
                            "end": 2329
                        },
                        "flags": 2309,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2330
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2304,
                    "end": 2330
                },
                "flags": 2302,
                "transformFlags": 0,
                "start": 33,
                "end": 2331
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2302,
            "end": 2332
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
                        "start": 2334,
                        "end": 2339
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2341,
                                        "end": 2343
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2341,
                                    "end": 2343
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2343,
                                    "end": 2344
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
                                        "transformFlags": 0,
                                        "start": 2344,
                                        "end": 2345
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2345,
                                            "end": 2347
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 2348,
                                            "end": 2349
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
                                                "start": 2351,
                                                "end": 2351
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2349,
                                            "end": 2353
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 2347,
                                        "end": 2353
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 2344,
                                    "end": 2353
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2341,
                            "end": 2353
                        },
                        "flags": 2339,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2354
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2334,
                    "end": 2354
                },
                "flags": 2332,
                "transformFlags": 0,
                "start": 33,
                "end": 2355
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2332,
            "end": 2356
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
                        "start": 2358,
                        "end": 2363
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2365,
                                        "end": 2367
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2365,
                                    "end": 2367
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2367,
                                    "end": 2368
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2368,
                                        "end": 2373
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
                                            "start": 2373,
                                            "end": 2376
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 2377,
                                            "end": 2378
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
                                                "start": 2380,
                                                "end": 2380
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2378,
                                            "end": 2382
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 2376,
                                        "end": 2382
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 2368,
                                    "end": 2382
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2365,
                            "end": 2382
                        },
                        "flags": 2363,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2383
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2358,
                    "end": 2383
                },
                "flags": 2356,
                "transformFlags": 0,
                "start": 33,
                "end": 2384
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2356,
            "end": 2385
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
                        "start": 2387,
                        "end": 2392
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2394,
                                        "end": 2396
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2394,
                                    "end": 2396
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2396,
                                    "end": 2397
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2397,
                                        "end": 2402
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2402,
                                        "end": 2404
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2404,
                                            "end": 2406
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 2407,
                                            "end": 2408
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
                                                "start": 2410,
                                                "end": 2410
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2408,
                                            "end": 2412
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 2406,
                                        "end": 2412
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 2397,
                                    "end": 2412
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2394,
                            "end": 2412
                        },
                        "flags": 2392,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2413
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2387,
                    "end": 2413
                },
                "flags": 2385,
                "transformFlags": 0,
                "start": 33,
                "end": 2414
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2385,
            "end": 2415
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
                        "start": 2417,
                        "end": 2422
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2424,
                                        "end": 2426
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2428,
                                        "end": 2430
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2424,
                                    "end": 2430
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2430,
                                    "end": 2431
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
                                            "start": 2431,
                                            "end": 2433
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 2434,
                                            "end": 2435
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
                                                "start": 2437,
                                                "end": 2437
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2435,
                                            "end": 2439
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 2433,
                                        "end": 2439
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 2431,
                                    "end": 2439
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2424,
                            "end": 2439
                        },
                        "flags": 2422,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2440
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2417,
                    "end": 2440
                },
                "flags": 2415,
                "transformFlags": 0,
                "start": 33,
                "end": 2441
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2415,
            "end": 2442
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
                        "start": 2444,
                        "end": 2449
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2451,
                                        "end": 2453
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2455,
                                        "end": 2457
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2451,
                                    "end": 2457
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2457,
                                    "end": 2458
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
                                        "start": 2458,
                                        "end": 2461
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
                                            "start": 2461,
                                            "end": 2464
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 2465,
                                            "end": 2466
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
                                                "start": 2468,
                                                "end": 2468
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2466,
                                            "end": 2470
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 2464,
                                        "end": 2470
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 2458,
                                    "end": 2470
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2451,
                            "end": 2470
                        },
                        "flags": 2449,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2471
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2444,
                    "end": 2471
                },
                "flags": 2442,
                "transformFlags": 0,
                "start": 33,
                "end": 2472
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2442,
            "end": 2473
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
                        "start": 2475,
                        "end": 2480
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2482,
                                        "end": 2484
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2486,
                                        "end": 2488
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2482,
                                    "end": 2488
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2488,
                                    "end": 2489
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
                                        "start": 2489,
                                        "end": 2492
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
                                            "start": 2492,
                                            "end": 2495
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2496,
                                                    "end": 2499
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 2496,
                                            "end": 2500
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
                                                "start": 2502,
                                                "end": 2502
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2500,
                                            "end": 2504
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 2495,
                                        "end": 2504
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 2489,
                                    "end": 2504
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2482,
                            "end": 2504
                        },
                        "flags": 2480,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2505
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2475,
                    "end": 2505
                },
                "flags": 2473,
                "transformFlags": 0,
                "start": 33,
                "end": 2506
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2473,
            "end": 2507
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
                        "start": 2509,
                        "end": 2514
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2516,
                                        "end": 2518
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2520,
                                        "end": 2522
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2516,
                                    "end": 2522
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2522,
                                    "end": 2523
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
                                        "transformFlags": 0,
                                        "start": 2523,
                                        "end": 2524
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2524,
                                            "end": 2526
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 2527,
                                            "end": 2528
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
                                                "start": 2530,
                                                "end": 2530
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2528,
                                            "end": 2532
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 2526,
                                        "end": 2532
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 2523,
                                    "end": 2532
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2516,
                            "end": 2532
                        },
                        "flags": 2514,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2533
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2509,
                    "end": 2533
                },
                "flags": 2507,
                "transformFlags": 0,
                "start": 33,
                "end": 2534
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2507,
            "end": 2535
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
                        "start": 2537,
                        "end": 2542
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2544,
                                        "end": 2546
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2548,
                                        "end": 2550
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2544,
                                    "end": 2550
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2550,
                                    "end": 2551
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2551,
                                        "end": 2556
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
                                            "start": 2556,
                                            "end": 2559
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 2560,
                                            "end": 2561
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
                                                "start": 2563,
                                                "end": 2563
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2561,
                                            "end": 2565
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 2559,
                                        "end": 2565
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 2551,
                                    "end": 2565
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2544,
                            "end": 2565
                        },
                        "flags": 2542,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2566
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2537,
                    "end": 2566
                },
                "flags": 2535,
                "transformFlags": 0,
                "start": 33,
                "end": 2567
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2535,
            "end": 2568
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
                        "start": 2570,
                        "end": 2575
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2577,
                                        "end": 2579
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2581,
                                        "end": 2583
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2577,
                                    "end": 2583
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2583,
                                    "end": 2584
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2584,
                                        "end": 2589
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2589,
                                        "end": 2591
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2591,
                                            "end": 2593
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 2594,
                                            "end": 2595
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
                                                "start": 2597,
                                                "end": 2597
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2595,
                                            "end": 2599
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 2593,
                                        "end": 2599
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 2584,
                                    "end": 2599
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2577,
                            "end": 2599
                        },
                        "flags": 2575,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 2600
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2570,
                    "end": 2600
                },
                "flags": 2568,
                "transformFlags": 0,
                "start": 33,
                "end": 2601
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2568,
            "end": 2602
        }
    ],
    "isModule": true,
    "source": "class x { #foo() {}}\n\n(class {#a() { }});\n(class {get #a() { }});\n(class {set #a(foo) { }});\n(class {*#a() { }});\n(class {async #a() { }});\n(class {async *#a() { }});\n\n(class {#a() { } #b() {}});\n(class {get #a() { } set #a(foo) {}});\n(class {get #a() { } get #b() {} set #a(foo) {}});\n(class {get #a() { } get #b() {} set #a(foo) {} set #b(foo) {}});\n(class {set #a(foo) { } set #b(foo) {}});\n(class {get #a() { } get #b() {}});\n\n(class {#a() { } static a() {}});\n(class {#a() { } a() {}});\n(class {#a() { } a() {} static a() {}});\n(class {get #a() { } get a() {} static get a() {}});\n(class {set #a(foo) { } set a(foo) {} static set a(foo) {}});\n\n(class {#a() { } get #b() {}});\n(class {#a() { } async #b() {}});\n(class {#a() { } async *#b() {}});\n\n(class {#get() {}});\n(class { #set() {}});\n(class { #yield() {}});\n(class { #await() {}});\n(class { #async() {}});\n(class { #static() {}});\n(class { #arguments() {}});\n(class { get #yield() {}});\n(class { get #await() {}});\n(class { get #async() {}});\n(class { get #get() {}});\n(class { get #static() {}});\n(class { get #arguments() {}});\n(class { set #yield(test) {}});\n(class { set #async(test) {}});\n(class { set #await(test) {}});\n(class { set #set(test) {}});\n(class { set #static(test) {}});\n(class { set #arguments(test) {}});\n(class { async #yield() {}});\n(class { async #async() {}});\n(class { async #await() {}});\n(class { async #get() {}});\n(class { async #set() {}});\n(class { async #static() {}});\n(class { async #arguments() {}});\n(class { *#async() {}});\n(class { *#await() {}});\n(class { *#yield() {}});\n(class { *#get() {}});\n(class { *#set() {}});\n(class { *#static() {}});\n(class { *#arguments() {}});\n(class { async *#yield() {}});\n(class { async *#async() {}});\n(class { async *#await() {}});\n(class { async *#get() {}});\n(class { async *#set() {}});\n(class { async *#static() {}});\n(class { async *#arguments() {}});\n\n(class { #b;#a() { }});\n(class { #b;get #a() { }});\n(class { #b;set #a(foo) { }});\n(class { #b;*#a() { }});\n(class { #b;async #a() { }});\n(class { #b;async *#a() { }});\n(class { #b = 1;#a() { }});\n(class { #b = 1;get #a() { }});\n(class { #b = 1;set #a(foo) { }});\n(class { #b = 1;*#a() { }});\n(class { #b = 1;async #a() { }});\n(class { #b = 1;async *#a() { }});\n(class { a;#a() { }});\n(class { a;get #a() { }});\n(class { a;set #a(foo) { }});\n(class { a;*#a() { }});\n(class { a;async #a() { }});\n(class { a;async *#a() { }});\n(class { a = 1;#a() { }});\n(class { a = 1;get #a() { }});\n(class { a = 1;set #a(foo) { }});\n(class { a = 1;*#a() { }});\n(class { a = 1;async #a() { }});\n(class { a = 1;async *#a() { }});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2603
}
```

### Printed

```javascript
class x {
  #foo() {}
}
(class {
    #a() {}
  });

(class {
    get #a() {}
  });

(class {
    set #a(foo) {}
  });

(class {
    *#a() {}
  });

(class {
    async #a() {}
  });

(class {
    async *#a() {}
  });

(class {
    #a() {}
    #b() {}
  });

(class {
    get #a() {}
    set #a(foo) {}
  });

(class {
    get #a() {}
    get #b() {}
    set #a(foo) {}
  });

(class {
    get #a() {}
    get #b() {}
    set #a(foo) {}
    set #b(foo) {}
  });

(class {
    set #a(foo) {}
    set #b(foo) {}
  });

(class {
    get #a() {}
    get #b() {}
  });

(class {
    #a() {}
    static a() {}
  });

(class {
    #a() {}
    a() {}
  });

(class {
    #a() {}
    a() {}
    static a() {}
  });

(class {
    get #a() {}
    get a() {}
    static get a() {}
  });

(class {
    set #a(foo) {}
    set a(foo) {}
    static set a(foo) {}
  });

(class {
    #a() {}
    get #b() {}
  });

(class {
    #a() {}
    async #b() {}
  });

(class {
    #a() {}
    async *#b() {}
  });

(class {
    #get() {}
  });

(class {
    #set() {}
  });

(class {
    #yield() {}
  });

(class {
    #await() {}
  });

(class {
    #async() {}
  });

(class {
    #static() {}
  });

(class {
    #arguments() {}
  });

(class {
    get #yield() {}
  });

(class {
    get #await() {}
  });

(class {
    get #async() {}
  });

(class {
    get #get() {}
  });

(class {
    get #static() {}
  });

(class {
    get #arguments() {}
  });

(class {
    set #yield(test) {}
  });

(class {
    set #async(test) {}
  });

(class {
    set #await(test) {}
  });

(class {
    set #set(test) {}
  });

(class {
    set #static(test) {}
  });

(class {
    set #arguments(test) {}
  });

(class {
    async #yield() {}
  });

(class {
    async #async() {}
  });

(class {
    async #await() {}
  });

(class {
    async #get() {}
  });

(class {
    async #set() {}
  });

(class {
    async #static() {}
  });

(class {
    async #arguments() {}
  });

(class {
    *#async() {}
  });

(class {
    *#await() {}
  });

(class {
    *#yield() {}
  });

(class {
    *#get() {}
  });

(class {
    *#set() {}
  });

(class {
    *#static() {}
  });

(class {
    *#arguments() {}
  });

(class {
    async *#yield() {}
  });

(class {
    async *#async() {}
  });

(class {
    async *#await() {}
  });

(class {
    async *#get() {}
  });

(class {
    async *#set() {}
  });

(class {
    async *#static() {}
  });

(class {
    async *#arguments() {}
  });

(class {
    #b;;#a() {}
  });

(class {
    #b;;get #a() {}
  });

(class {
    #b;;set #a(foo) {}
  });

(class {
    #b;;*#a() {}
  });

(class {
    #b;;async #a() {}
  });

(class {
    #b;;async *#a() {}
  });

(class {
    #b = 1;;#a() {}
  });

(class {
    #b = 1;;get #a() {}
  });

(class {
    #b = 1;;set #a(foo) {}
  });

(class {
    #b = 1;;*#a() {}
  });

(class {
    #b = 1;;async #a() {}
  });

(class {
    #b = 1;;async *#a() {}
  });

(class {
    a;;#a() {}
  });

(class {
    a;;get #a() {}
  });

(class {
    a;;set #a(foo) {}
  });

(class {
    a;;*#a() {}
  });

(class {
    a;;async #a() {}
  });

(class {
    a;;async *#a() {}
  });

(class {
    a = 1;;#a() {}
  });

(class {
    a = 1;;get #a() {}
  });

(class {
    a = 1;;set #a(foo) {}
  });

(class {
    a = 1;;*#a() {}
  });

(class {
    a = 1;;async #a() {}
  });

(class {
    a = 1;;async *#a() {}
  });

```

### Diagnostics

```javascript
✔ No errors
```

