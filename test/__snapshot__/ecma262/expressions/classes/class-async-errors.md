# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js
(class { *async x(){}});
(class { async *(){}});
(class { async get x(){}});
(class { async set x(y){}});
(class { async x : 0});
(class { async : 0});

(class { async static x(){}});

(class { static *async x(){}});
(class { static async *(){}});
(class { static async get x(){}});
(class { static async set x(y){}});
(class { static async x : 0});
(class { static async : 0});

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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 8,
                                    "end": 15
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
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
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 21
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 21
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 21
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 24
        },
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
                        "start": 26,
                        "end": 31
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
                                        "start": 33,
                                        "end": 39
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 41
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 43
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
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 45
                        },
                        "flags": 31,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 46
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 46
                },
                "flags": 24,
                "transformFlags": 0,
                "start": 33,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 48
        },
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
                        "start": 50,
                        "end": 55
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
                                        "start": 57,
                                        "end": 63
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
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 67
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 67
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
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 67
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 69
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 70,
                                            "end": 71
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
                                                "start": 72,
                                                "end": 72
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 73
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 73
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 73
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 73
                        },
                        "flags": 55,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 74
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 74
                },
                "flags": 48,
                "transformFlags": 0,
                "start": 33,
                "end": 75
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 48,
            "end": 76
        },
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
                        "start": 78,
                        "end": 83
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
                                        "start": 85,
                                        "end": 91
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
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 95
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 95
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
                                                "start": 95,
                                                "end": 95
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 95
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 95
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 95
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 97
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 98,
                                                    "end": 99
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 98,
                                            "end": 100
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
                                                "start": 101,
                                                "end": 101
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 102
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 97,
                                        "end": 102
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 102
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 102
                        },
                        "flags": 83,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 103
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 103
                },
                "flags": 76,
                "transformFlags": 0,
                "start": 33,
                "end": 104
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 76,
            "end": 105
        },
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
                        "start": 107,
                        "end": 112
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
                                        "start": 114,
                                        "end": 120
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
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 122
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 122
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
                                                "start": 122,
                                                "end": 122
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 122
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 122
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 122
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 122
                        },
                        "flags": 112,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 122
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 122
                },
                "flags": 105,
                "transformFlags": 0,
                "start": 33,
                "end": 122
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 105,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 124,
                "end": 126
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 124,
            "end": 126
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 128,
            "end": 129
        },
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
                        "start": 131,
                        "end": 136
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
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 138,
                                        "end": 144
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 138,
                                    "end": 144
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 138,
                            "end": 144
                        },
                        "flags": 136,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 144
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 131,
                    "end": 144
                },
                "flags": 129,
                "transformFlags": 0,
                "start": 33,
                "end": 144
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 129,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 146,
                "end": 148
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 146,
            "end": 148
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 150,
            "end": 151
        },
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
                        "start": 154,
                        "end": 159
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
                                        "start": 161,
                                        "end": 167
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
                                            "transformFlags": 0,
                                            "start": 167,
                                            "end": 174
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 174
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
                                                "start": 174,
                                                "end": 174
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 174
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 174,
                                        "end": 174
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 161,
                                    "end": 174
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 176
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 179,
                                                "end": 179
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 178,
                                            "end": 180
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 180
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 174,
                                    "end": 180
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 180
                        },
                        "flags": 159,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 181
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 181
                },
                "flags": 151,
                "transformFlags": 0,
                "start": 33,
                "end": 182
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 151,
            "end": 183
        },
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
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 193,
                                        "end": 200
                                    },
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 202,
                                        "end": 207
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 200,
                                    "end": 207
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 207,
                                            "end": 209
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 210,
                                            "end": 211
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
                                                "start": 212,
                                                "end": 212
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 211,
                                            "end": 213
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 209,
                                        "end": 213
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 207,
                                    "end": 213
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 193,
                            "end": 213
                        },
                        "flags": 191,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 214
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 214
                },
                "flags": 183,
                "transformFlags": 0,
                "start": 33,
                "end": 215
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 183,
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
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 225,
                                        "end": 232
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 232,
                                        "end": 238
                                    },
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 238,
                                        "end": 240
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 240,
                                            "end": 240
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 241,
                                            "end": 242
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
                                                "start": 243,
                                                "end": 243
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 244
                                        },
                                        "flags": 384,
                                        "transformFlags": 0,
                                        "start": 240,
                                        "end": 244
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 232,
                                    "end": 244
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 244
                        },
                        "flags": 223,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 245
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 218,
                    "end": 245
                },
                "flags": 216,
                "transformFlags": 0,
                "start": 33,
                "end": 246
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 216,
            "end": 247
        },
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
                        "start": 249,
                        "end": 254
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
                                        "transformFlags": 0,
                                        "start": 256,
                                        "end": 263
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 263,
                                        "end": 269
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
                                            "transformFlags": 0,
                                            "start": 269,
                                            "end": 273
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 273,
                                            "end": 273
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
                                                "start": 273,
                                                "end": 273
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 273,
                                            "end": 273
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 273,
                                        "end": 273
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 263,
                                    "end": 273
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 273,
                                            "end": 275
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 276,
                                            "end": 277
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
                                                "start": 278,
                                                "end": 278
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 277,
                                            "end": 279
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 275,
                                        "end": 279
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 273,
                                    "end": 279
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 256,
                            "end": 279
                        },
                        "flags": 254,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 280
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 249,
                    "end": 280
                },
                "flags": 247,
                "transformFlags": 0,
                "start": 33,
                "end": 281
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 247,
            "end": 282
        },
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
                        "start": 284,
                        "end": 289
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
                                        "transformFlags": 0,
                                        "start": 291,
                                        "end": 298
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 298,
                                        "end": 304
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
                                            "transformFlags": 0,
                                            "start": 304,
                                            "end": 308
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 308
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
                                                "start": 308,
                                                "end": 308
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 308
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 308,
                                        "end": 308
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 298,
                                    "end": 308
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 310
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 311,
                                                    "end": 312
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 311,
                                            "end": 313
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
                                                "start": 314,
                                                "end": 314
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 313,
                                            "end": 315
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 310,
                                        "end": 315
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 308,
                                    "end": 315
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 291,
                            "end": 315
                        },
                        "flags": 289,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 316
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 284,
                    "end": 316
                },
                "flags": 282,
                "transformFlags": 0,
                "start": 33,
                "end": 317
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 282,
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 320,
                        "end": 325
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
                                        "transformFlags": 0,
                                        "start": 327,
                                        "end": 334
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 334,
                                        "end": 340
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
                                            "transformFlags": 0,
                                            "start": 340,
                                            "end": 342
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 342,
                                            "end": 342
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
                                                "start": 342,
                                                "end": 342
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 342,
                                            "end": 342
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 342,
                                        "end": 342
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 334,
                                    "end": 342
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 327,
                            "end": 342
                        },
                        "flags": 325,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 342
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 320,
                    "end": 342
                },
                "flags": 318,
                "transformFlags": 0,
                "start": 33,
                "end": 342
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 318,
            "end": 342
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 344,
                "end": 346
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 344,
            "end": 346
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 348,
            "end": 349
        },
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
                        "start": 351,
                        "end": 356
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
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 358,
                                        "end": 365
                                    },
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 365,
                                        "end": 371
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 365,
                                    "end": 371
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 358,
                            "end": 371
                        },
                        "flags": 356,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 371
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 351,
                    "end": 371
                },
                "flags": 349,
                "transformFlags": 0,
                "start": 33,
                "end": 371
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 349,
            "end": 371
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 373,
                "end": 375
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 373,
            "end": 375
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 377,
            "end": 378
        }
    ],
    "isModule": false,
    "source": "(class { *async x(){}});\n(class { async *(){}});\n(class { async get x(){}});\n(class { async set x(y){}});\n(class { async x : 0});\n(class { async : 0});\n\n(class { async static x(){}});\n\n(class { static *async x(){}});\n(class { static async *(){}});\n(class { static async get x(){}});\n(class { static async set x(y){}});\n(class { static async x : 0});\n(class { static async : 0});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 379
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 41, end: 42
✖ 'async' modifier cannot be used here - start: 67, end: 69
✖ Method definition expected - start: 68, end: 69
✖ 'async' modifier cannot be used here - start: 95, end: 97
✖ Method definition expected - start: 96, end: 97
✖ Method definition expected - start: 123, end: 124
✖ Declaration or statement expected - start: 126, end: 127
✖ Declaration or statement expected - start: 127, end: 128
✖ The parser expected to find a '}' to match the '{' token here - start: 145, end: 146
✖ Declaration or statement expected - start: 148, end: 149
✖ Declaration or statement expected - start: 149, end: 150
✖ Method definition expected - start: 175, end: 176
✖ Identifier expected - start: 240, end: 241
✖ 'async' modifier cannot be used here - start: 273, end: 275
✖ Method definition expected - start: 274, end: 275
✖ 'async' modifier cannot be used here - start: 308, end: 310
✖ Method definition expected - start: 309, end: 310
✖ Method definition expected - start: 343, end: 344
✖ Declaration or statement expected - start: 346, end: 347
✖ Declaration or statement expected - start: 347, end: 348
✖ The parser expected to find a '}' to match the '{' token here - start: 372, end: 373
✖ Declaration or statement expected - start: 375, end: 376
✖ Declaration or statement expected - start: 376, end: 377

```

