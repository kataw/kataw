# Kataw parser test case

## Input

`````js
o = {f(){ let x; var x; }};

o = {f(){ var x; let x; }};

o = {f(){ var x; const x = y; }};

o = {f(){ let x; function x(){} }};

o = {f(){ const x = y; function x(){} }};

o = {f(){ function x(){} const x = y; }};

o = {f(){ function x(){} var x = y; }};
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 9,
                                                        "end": 13
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 13,
                                                                    "end": 15
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 13,
                                                                "end": 15
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "flags": 33554448,
                                                    "start": 9,
                                                    "end": 16
                                                },
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 16,
                                                        "end": 20
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 20,
                                                                    "end": 22
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 20,
                                                                "end": 22
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "flags": 16,
                                                    "start": 16,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 9,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 25
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 27,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 30,
                    "end": 32
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 36,
                                        "end": 37
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 38,
                                                        "end": 42
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 42,
                                                                    "end": 44
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 42,
                                                                "end": 44
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 42,
                                                        "end": 44
                                                    },
                                                    "flags": 16,
                                                    "start": 38,
                                                    "end": 45
                                                },
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 45,
                                                        "end": 49
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 49,
                                                                    "end": 51
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 49,
                                                                "end": 51
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 49,
                                                        "end": 51
                                                    },
                                                    "flags": 33554448,
                                                    "start": 45,
                                                    "end": 52
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 38,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 34,
                        "end": 54
                    },
                    "flags": 48,
                    "start": 32,
                    "end": 55
                },
                "flags": 32,
                "start": 27,
                "end": 55
            },
            "flags": 16,
            "start": 27,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 56,
                    "end": 59
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 59,
                    "end": 61
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 63,
                                        "end": 64
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 65,
                                        "end": 66
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 67,
                                                        "end": 71
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 71,
                                                                "end": 73
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 71,
                                                        "end": 73
                                                    },
                                                    "flags": 16,
                                                    "start": 67,
                                                    "end": 74
                                                },
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 37757004,
                                                        "flags": 80,
                                                        "start": 74,
                                                        "end": 80
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 80,
                                                                    "end": 82
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 84,
                                                                    "end": 86
                                                                },
                                                                "flags": 16,
                                                                "start": 80,
                                                                "end": 86
                                                            }
                                                        ],
                                                        "flags": 16777232,
                                                        "start": 80,
                                                        "end": 86
                                                    },
                                                    "flags": 33554448,
                                                    "start": 74,
                                                    "end": 87
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 67,
                                            "end": 87
                                        },
                                        "flags": 32,
                                        "start": 66,
                                        "end": 89
                                    },
                                    "flags": 32,
                                    "start": 64,
                                    "end": 89
                                },
                                "flags": 32,
                                "start": 63,
                                "end": 89
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 63,
                        "end": 89
                    },
                    "flags": 48,
                    "start": 61,
                    "end": 90
                },
                "flags": 32,
                "start": 56,
                "end": 90
            },
            "flags": 16,
            "start": 56,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 91,
                    "end": 94
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 94,
                    "end": 96
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 98,
                                        "end": 99
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 100,
                                        "end": 101
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 102,
                                                        "end": 106
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 106,
                                                                    "end": 108
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 106,
                                                                "end": 108
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 106,
                                                        "end": 108
                                                    },
                                                    "flags": 33554448,
                                                    "start": 102,
                                                    "end": 109
                                                },
                                                {
                                                    "kind": 176,
                                                    "declareKeyword": null,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 109,
                                                        "end": 118
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 118,
                                                        "end": 120
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 120,
                                                        "end": 122
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 123,
                                                            "end": 123
                                                        },
                                                        "flags": 32,
                                                        "start": 122,
                                                        "end": 124
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 109,
                                                    "end": 124
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 102,
                                            "end": 124
                                        },
                                        "flags": 32,
                                        "start": 101,
                                        "end": 126
                                    },
                                    "flags": 32,
                                    "start": 99,
                                    "end": 126
                                },
                                "flags": 32,
                                "start": 98,
                                "end": 126
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 98,
                        "end": 126
                    },
                    "flags": 48,
                    "start": 96,
                    "end": 127
                },
                "flags": 32,
                "start": 91,
                "end": 127
            },
            "flags": 16,
            "start": 91,
            "end": 128
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 128,
                    "end": 131
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 131,
                    "end": 133
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 135,
                                        "end": 136
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 137,
                                        "end": 138
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 37757004,
                                                        "flags": 80,
                                                        "start": 139,
                                                        "end": 145
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 145,
                                                                    "end": 147
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 149,
                                                                    "end": 151
                                                                },
                                                                "flags": 16,
                                                                "start": 145,
                                                                "end": 151
                                                            }
                                                        ],
                                                        "flags": 16777232,
                                                        "start": 145,
                                                        "end": 151
                                                    },
                                                    "flags": 33554448,
                                                    "start": 139,
                                                    "end": 152
                                                },
                                                {
                                                    "kind": 176,
                                                    "declareKeyword": null,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 152,
                                                        "end": 161
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 161,
                                                        "end": 163
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 163,
                                                        "end": 165
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 166,
                                                            "end": 166
                                                        },
                                                        "flags": 32,
                                                        "start": 165,
                                                        "end": 167
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 152,
                                                    "end": 167
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 139,
                                            "end": 167
                                        },
                                        "flags": 32,
                                        "start": 138,
                                        "end": 169
                                    },
                                    "flags": 32,
                                    "start": 136,
                                    "end": 169
                                },
                                "flags": 32,
                                "start": 135,
                                "end": 169
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 135,
                        "end": 169
                    },
                    "flags": 48,
                    "start": 133,
                    "end": 170
                },
                "flags": 32,
                "start": 128,
                "end": 170
            },
            "flags": 16,
            "start": 128,
            "end": 171
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 171,
                    "end": 174
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 174,
                    "end": 176
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 178,
                                        "end": 179
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 180,
                                        "end": 181
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 176,
                                                    "declareKeyword": null,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 182,
                                                        "end": 191
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 191,
                                                        "end": 193
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 193,
                                                        "end": 195
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 196,
                                                            "end": 196
                                                        },
                                                        "flags": 32,
                                                        "start": 195,
                                                        "end": 197
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 182,
                                                    "end": 197
                                                },
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 37757004,
                                                        "flags": 80,
                                                        "start": 197,
                                                        "end": 203
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 203,
                                                                    "end": 205
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 207,
                                                                    "end": 209
                                                                },
                                                                "flags": 16,
                                                                "start": 203,
                                                                "end": 209
                                                            }
                                                        ],
                                                        "flags": 16777232,
                                                        "start": 203,
                                                        "end": 209
                                                    },
                                                    "flags": 33554448,
                                                    "start": 197,
                                                    "end": 210
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 182,
                                            "end": 210
                                        },
                                        "flags": 32,
                                        "start": 181,
                                        "end": 212
                                    },
                                    "flags": 32,
                                    "start": 179,
                                    "end": 212
                                },
                                "flags": 32,
                                "start": 178,
                                "end": 212
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 178,
                        "end": 212
                    },
                    "flags": 48,
                    "start": 176,
                    "end": 213
                },
                "flags": 32,
                "start": 171,
                "end": 213
            },
            "flags": 16,
            "start": 171,
            "end": 214
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 214,
                    "end": 217
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 217,
                    "end": 219
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 221,
                                        "end": 222
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 223,
                                        "end": 224
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 176,
                                                    "declareKeyword": null,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 225,
                                                        "end": 234
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 234,
                                                        "end": 236
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 236,
                                                        "end": 238
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 239,
                                                            "end": 239
                                                        },
                                                        "flags": 32,
                                                        "start": 238,
                                                        "end": 240
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 225,
                                                    "end": 240
                                                },
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 240,
                                                        "end": 244
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 244,
                                                                    "end": 246
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 248,
                                                                    "end": 250
                                                                },
                                                                "flags": 16,
                                                                "start": 244,
                                                                "end": 250
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 244,
                                                        "end": 250
                                                    },
                                                    "flags": 16,
                                                    "start": 240,
                                                    "end": 251
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 225,
                                            "end": 251
                                        },
                                        "flags": 32,
                                        "start": 224,
                                        "end": 253
                                    },
                                    "flags": 32,
                                    "start": 222,
                                    "end": 253
                                },
                                "flags": 32,
                                "start": 221,
                                "end": 253
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 221,
                        "end": 253
                    },
                    "flags": 48,
                    "start": 219,
                    "end": 254
                },
                "flags": 32,
                "start": 214,
                "end": 254
            },
            "flags": 16,
            "start": 214,
            "end": 255
        }
    ],
    "isModule": false,
    "source": "o = {f(){ let x; var x; }};\n\no = {f(){ var x; let x; }};\n\no = {f(){ var x; const x = y; }};\n\no = {f(){ let x; function x(){} }};\n\no = {f(){ const x = y; function x(){} }};\n\no = {f(){ function x(){} const x = y; }};\n\no = {f(){ function x(){} var x = y; }};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 255
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 20, end: 22
✖ Duplicate identifier - start: 49, end: 51
✖ Duplicate identifier - start: 80, end: 82
✖ Cannot redeclare block-scoped variable - start: 118, end: 120
✖ Cannot redeclare block-scoped variable - start: 161, end: 163
✖ Duplicate identifier - start: 203, end: 205

```

