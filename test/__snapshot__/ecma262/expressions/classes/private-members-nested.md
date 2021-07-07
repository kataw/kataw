# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js
(class { get #a() {class C { #a() {} }} });

(class { get #a() {class C { get #a() {} }} });

(class { set #a(val) {} get #a() { class C { get #a() {} set #a(val) {} }} });

(class { #a() { class C { set #a(val) {} }} });
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
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 12
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
                                            "start": 12,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
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
                                                            "start": 19,
                                                            "end": 24
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 24,
                                                            "end": 26
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
                                                                                "text": "#a",
                                                                                "rawText": "#a",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 28,
                                                                                "end": 31
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 33
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
                                                                                    "start": 35,
                                                                                    "end": 35
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 33,
                                                                                "end": 36
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 0,
                                                                            "start": 31,
                                                                            "end": 36
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 28,
                                                                        "end": 36
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 28,
                                                                "end": 36
                                                            },
                                                            "flags": 26,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 38
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 38
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 39
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 39
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 39
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 39
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 41
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 41
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 43
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
                        "start": 46,
                        "end": 51
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
                                        "start": 53,
                                        "end": 57
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
                                            "start": 57,
                                            "end": 60
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 62
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
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
                                                            "start": 64,
                                                            "end": 69
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 69,
                                                            "end": 71
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
                                                                            "transformFlags": 0,
                                                                            "start": 73,
                                                                            "end": 77
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
                                                                                "start": 77,
                                                                                "end": 80
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 1024,
                                                                                "transformFlags": 0,
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
                                                                                    "transformFlags": 0,
                                                                                    "start": 84,
                                                                                    "end": 84
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 82,
                                                                                "end": 85
                                                                            },
                                                                            "flags": 1024,
                                                                            "transformFlags": 0,
                                                                            "start": 80,
                                                                            "end": 85
                                                                        },
                                                                        "flags": 1024,
                                                                        "transformFlags": 0,
                                                                        "start": 73,
                                                                        "end": 85
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 73,
                                                                "end": 85
                                                            },
                                                            "flags": 71,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 87
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 64,
                                                        "end": 87
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 87
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 62,
                                            "end": 88
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 88
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 88
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 88
                        },
                        "flags": 51,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 90
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 90
                },
                "flags": 43,
                "transformFlags": 0,
                "start": 33,
                "end": 91
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 43,
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
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 102,
                                        "end": 106
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
                                            "start": 106,
                                            "end": 109
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
                                                    "start": 110,
                                                    "end": 113
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 110,
                                            "end": 114
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
                                                "start": 116,
                                                "end": 116
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 117
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 109,
                                        "end": 117
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 102,
                                    "end": 117
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
                                        "start": 117,
                                        "end": 121
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
                                            "start": 121,
                                            "end": 124
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
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
                                                "statements": [
                                                    {
                                                        "kind": 178,
                                                        "declareKeyword": null,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 128,
                                                            "end": 134
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 134,
                                                            "end": 136
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
                                                                            "transformFlags": 0,
                                                                            "start": 138,
                                                                            "end": 142
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
                                                                                "start": 142,
                                                                                "end": 145
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 1024,
                                                                                "transformFlags": 0,
                                                                                "start": 146,
                                                                                "end": 147
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
                                                                                    "start": 149,
                                                                                    "end": 149
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 147,
                                                                                "end": 150
                                                                            },
                                                                            "flags": 1024,
                                                                            "transformFlags": 0,
                                                                            "start": 145,
                                                                            "end": 150
                                                                        },
                                                                        "flags": 1024,
                                                                        "transformFlags": 0,
                                                                        "start": 138,
                                                                        "end": 150
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
                                                                            "start": 150,
                                                                            "end": 154
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
                                                                                "start": 154,
                                                                                "end": 157
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
                                                                                        "start": 158,
                                                                                        "end": 161
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 608,
                                                                                "transformFlags": 0,
                                                                                "start": 158,
                                                                                "end": 162
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
                                                                                    "start": 164,
                                                                                    "end": 164
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 162,
                                                                                "end": 165
                                                                            },
                                                                            "flags": 512,
                                                                            "transformFlags": 0,
                                                                            "start": 157,
                                                                            "end": 165
                                                                        },
                                                                        "flags": 512,
                                                                        "transformFlags": 0,
                                                                        "start": 150,
                                                                        "end": 165
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 138,
                                                                "end": 165
                                                            },
                                                            "flags": 136,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 167
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 128,
                                                        "end": 167
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 128,
                                                "end": 167
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 168
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 168
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 117,
                                    "end": 168
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 168
                        },
                        "flags": 100,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 170
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 170
                },
                "flags": 92,
                "transformFlags": 0,
                "start": 33,
                "end": 171
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 92,
            "end": 172
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
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "#a",
                                            "rawText": "#a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 182,
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
                                                "statements": [
                                                    {
                                                        "kind": 178,
                                                        "declareKeyword": null,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 189,
                                                            "end": 195
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 195,
                                                            "end": 197
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
                                                                            "transformFlags": 0,
                                                                            "start": 199,
                                                                            "end": 203
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
                                                                                "start": 203,
                                                                                "end": 206
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
                                                                                        "start": 207,
                                                                                        "end": 210
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 608,
                                                                                "transformFlags": 0,
                                                                                "start": 207,
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
                                                                                    "start": 213,
                                                                                    "end": 213
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 211,
                                                                                "end": 214
                                                                            },
                                                                            "flags": 512,
                                                                            "transformFlags": 0,
                                                                            "start": 206,
                                                                            "end": 214
                                                                        },
                                                                        "flags": 512,
                                                                        "transformFlags": 0,
                                                                        "start": 199,
                                                                        "end": 214
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 199,
                                                                "end": 214
                                                            },
                                                            "flags": 197,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 216
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 189,
                                                        "end": 216
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 189,
                                                "end": 216
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 187,
                                            "end": 217
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 185,
                                        "end": 217
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 182,
                                    "end": 217
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 182,
                            "end": 217
                        },
                        "flags": 180,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 219
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 219
                },
                "flags": 172,
                "transformFlags": 0,
                "start": 33,
                "end": 220
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 172,
            "end": 221
        }
    ],
    "isModule": false,
    "source": "(class { get #a() {class C { #a() {} }} });\n\n(class { get #a() {class C { get #a() {} }} });\n\n(class { set #a(val) {} get #a() { class C { get #a() {} set #a(val) {} }} });\n\n(class { #a() { class C { set #a(val) {} }} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 221
}
```

### Printed

```javascript
(class {
    get #a() {
      class C {
        #a() {}
      }
    }
  });
(class {
    get #a() {
      class C {
        get #a() {}
      }
    }
  });

(class {
    set #a(val) {}
    get #a() {
      class C {
        get #a() {}
        set #a(val) {}
      }
    }
  });

(class {
    #a() {
      class C {
        set #a(val) {}
      }
    }
  });

```

### Diagnostics

```javascript
✔ No errors
```

