# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js
(class { set #b(val) {} fn() { return this.#b; } });

(class { get #b() { } fn() { this.#b++; } });

(class { get #b() { } fn(obj) { ({ y: this.#b } = obj); } });

(class { #b() { } fn() { this.#b++; } });

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
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 12
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
                                            "start": 12,
                                            "end": 15
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
                                                    "start": 16,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
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
                                                "start": 22,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 23
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
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 161,
                                                        "returnKeyword": {
                                                            "kind": 37757022,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 37
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 37,
                                                                "end": 42
                                                            },
                                                            "expression": {
                                                                "kind": 67191035,
                                                                "text": "#b",
                                                                "rawText": "#b",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 45
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 37,
                                                            "end": 45
                                                        },
                                                        "flags": 80,
                                                        "transformFlags": 256,
                                                        "start": 30,
                                                        "end": 46
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 46
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 48
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 48
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 48
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 48
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 50
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 50
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 52
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
                        "start": 55,
                        "end": 60
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
                                        "start": 62,
                                        "end": 66
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
                                            "start": 66,
                                            "end": 69
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
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
                                                "start": 73,
                                                "end": 73
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 75
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 75
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 75
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
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 78
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 79,
                                            "end": 80
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 127,
                                                            "operandToken": {
                                                                "kind": 196635,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 90,
                                                                "end": 92
                                                            },
                                                            "operand": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 82,
                                                                    "end": 87
                                                                },
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#b",
                                                                    "rawText": "#b",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 88,
                                                                    "end": 90
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 82,
                                                                "end": 90
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 82,
                                                            "end": 92
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 82,
                                                        "end": 93
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 82,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 80,
                                            "end": 95
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 95
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 95
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 95
                        },
                        "flags": 60,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 97
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 97
                },
                "flags": 52,
                "transformFlags": 0,
                "start": 33,
                "end": 98
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 52,
            "end": 99
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
                        "start": 102,
                        "end": 107
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
                                        "start": 109,
                                        "end": 113
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
                                            "start": 113,
                                            "end": 116
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 117,
                                            "end": 118
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
                                                "start": 120,
                                                "end": 120
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 122
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 122
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 109,
                                    "end": 122
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
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 125
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 126,
                                                    "end": 129
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 130
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 135,
                                                                                    "end": 137
                                                                                },
                                                                                "right": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 138,
                                                                                        "end": 143
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 67191035,
                                                                                        "text": "#b",
                                                                                        "rawText": "#b",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 144,
                                                                                        "end": 146
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "transformFlags": 2,
                                                                                    "start": 135,
                                                                                    "end": 146
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 135,
                                                                                "end": 146
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 135,
                                                                        "end": 146
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 134,
                                                                    "end": 148
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 148,
                                                                    "end": 150
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "obj",
                                                                    "rawText": "obj",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 150,
                                                                    "end": 154
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 134,
                                                                "end": 154
                                                            },
                                                            "flags": 132,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 155
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 132,
                                                        "end": 156
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 132,
                                                "end": 156
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 130,
                                            "end": 158
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 125,
                                        "end": 158
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 122,
                                    "end": 158
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 109,
                            "end": 158
                        },
                        "flags": 107,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 160
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 102,
                    "end": 160
                },
                "flags": 99,
                "transformFlags": 0,
                "start": 33,
                "end": 161
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 99,
            "end": 162
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
                                            "text": "#b",
                                            "rawText": "#b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 172,
                                            "end": 175
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 177
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
                                            "start": 177,
                                            "end": 181
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 175,
                                        "end": 181
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 172,
                                    "end": 181
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
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 181,
                                            "end": 184
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 185,
                                            "end": 186
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 127,
                                                            "operandToken": {
                                                                "kind": 196635,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 196,
                                                                "end": 198
                                                            },
                                                            "operand": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 188,
                                                                    "end": 193
                                                                },
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#b",
                                                                    "rawText": "#b",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 194,
                                                                    "end": 196
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 188,
                                                                "end": 196
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 188,
                                                            "end": 198
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 188,
                                                        "end": 199
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 188,
                                                "end": 199
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 186,
                                            "end": 201
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 184,
                                        "end": 201
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 201
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 172,
                            "end": 201
                        },
                        "flags": 170,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 203
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 203
                },
                "flags": 162,
                "transformFlags": 0,
                "start": 33,
                "end": 204
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 162,
            "end": 205
        }
    ],
    "isModule": false,
    "source": "(class { set #b(val) {} fn() { return this.#b; } });\n\n(class { get #b() { } fn() { this.#b++; } });\n\n(class { get #b() { } fn(obj) { ({ y: this.#b } = obj); } });\n\n(class { #b() { } fn() { this.#b++; } });\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 206
}
```

### Printed

```javascript

(class  {
    set #b(val) {}
    fn() {
      return this.#b;
    }
  });
(class  {
    get #b() {}
    fn() {
      this.#b++;
    }
  });

(class  {
    get #b() {}
    fn(obj) {
      ({ y: this.#b } = obj);
    }
  });

(class  {
    #b() {}
    fn() {
      this.#b++;
    }
  });

```

### Diagnostics

```javascript
✔ No errors
```

