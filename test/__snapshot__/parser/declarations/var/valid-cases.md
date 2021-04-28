# Kataw parser test case

## Input

`````js
var x;

var x = 5;

var x = 4;

var x = 5;

var {x} = {x: 4, b: (x = 5)};

var x = {a: 4, b: (x = 5)};

'use strict'; var x = 0; { let x = 6; }

var x; try {} catch (x) { x = 5; }

var f = ({x:arg = 1}, {y:b=(arg=2)}) => {}

var f = ({x:arg = (arg = 2)}) => {}

var foo;

var foo = 0;

var [foo] = [1];

var {foo} = {foo: 2};

var {foo=3} = {};

var {get = defaultValue} = obj;

var {propName = defaultValue} = obj;

var {propName: localVar = defaultValue} = obj;

var {get} = obj;
`````

## Options

### Parser Options

`````js
{ module: true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
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
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 6,
                "end": 11
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
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 11,
                        "end": 17
                    }
                ],
                "flags": 128,
                "start": 11,
                "end": 17
            },
            "flags": 128,
            "start": 6,
            "end": 18
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 18,
                "end": 23
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
                            "flags": 768,
                            "start": 23,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "4",
                            "flags": 768,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 23,
                        "end": 29
                    }
                ],
                "flags": 128,
                "start": 23,
                "end": 29
            },
            "flags": 128,
            "start": 18,
            "end": 30
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 30,
                "end": 35
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
                            "flags": 768,
                            "start": 35,
                            "end": 37
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 768,
                            "start": 39,
                            "end": 41
                        },
                        "flags": 128,
                        "start": 35,
                        "end": 41
                    }
                ],
                "flags": 128,
                "start": 35,
                "end": 41
            },
            "flags": 128,
            "start": 30,
            "end": 42
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 42,
                "end": 47
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 49,
                                            "end": 50
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 49,
                                        "end": 50
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 49,
                                "end": 50
                            },
                            "flags": 256,
                            "start": 47,
                            "end": 51
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 768,
                                            "start": 57,
                                            "end": 59
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 55,
                                            "end": 56
                                        },
                                        "flags": 256,
                                        "start": 55,
                                        "end": 59
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 65,
                                                    "end": 66
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 512,
                                                    "start": 66,
                                                    "end": 68
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 68,
                                                    "end": 70
                                                },
                                                "flags": 256,
                                                "start": 63,
                                                "end": 70
                                            },
                                            "flags": 256,
                                            "start": 63,
                                            "end": 71
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 60,
                                            "end": 62
                                        },
                                        "flags": 256,
                                        "start": 60,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 55,
                                "end": 71
                            },
                            "flags": 256,
                            "start": 53,
                            "end": 72
                        },
                        "flags": 128,
                        "start": 47,
                        "end": 72
                    }
                ],
                "flags": 128,
                "start": 47,
                "end": 72
            },
            "flags": 128,
            "start": 42,
            "end": 73
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 73,
                "end": 78
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
                            "flags": 768,
                            "start": 78,
                            "end": 80
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 768,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 84,
                                            "end": 85
                                        },
                                        "flags": 256,
                                        "start": 84,
                                        "end": 88
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 94,
                                                    "end": 95
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 512,
                                                    "start": 95,
                                                    "end": 97
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 97,
                                                    "end": 99
                                                },
                                                "flags": 256,
                                                "start": 92,
                                                "end": 99
                                            },
                                            "flags": 256,
                                            "start": 92,
                                            "end": 100
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 89,
                                            "end": 91
                                        },
                                        "flags": 256,
                                        "start": 89,
                                        "end": 100
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 84,
                                "end": 100
                            },
                            "flags": 256,
                            "start": 82,
                            "end": 101
                        },
                        "flags": 128,
                        "start": 78,
                        "end": 101
                    }
                ],
                "flags": 128,
                "start": 78,
                "end": 101
            },
            "flags": 128,
            "start": 73,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 67109633,
                "start": 102,
                "end": 116
            },
            "flags": 128,
            "start": 102,
            "end": 117
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 117,
                "end": 121
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
                            "flags": 768,
                            "start": 121,
                            "end": 123
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 125,
                            "end": 127
                        },
                        "flags": 128,
                        "start": 121,
                        "end": 127
                    }
                ],
                "flags": 128,
                "start": 121,
                "end": 127
            },
            "flags": 128,
            "start": 117,
            "end": 128
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 640,
                            "start": 130,
                            "end": 134
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
                                        "flags": 768,
                                        "start": 134,
                                        "end": 136
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 6,
                                        "rawText": "6",
                                        "flags": 768,
                                        "start": 138,
                                        "end": 140
                                    },
                                    "flags": 128,
                                    "start": 134,
                                    "end": 140
                                }
                            ],
                            "flags": 128,
                            "start": 134,
                            "end": 140
                        },
                        "flags": 128,
                        "start": 130,
                        "end": 141
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 130,
                "end": 141
            },
            "flags": 128,
            "start": 128,
            "end": 143
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 143,
                "end": 148
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
                            "flags": 768,
                            "start": 148,
                            "end": 150
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 148,
                        "end": 150
                    }
                ],
                "flags": 128,
                "start": 148,
                "end": 150
            },
            "flags": 128,
            "start": 143,
            "end": 151
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 151,
                "end": 155
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 157,
                    "end": 157
                },
                "flags": 128,
                "start": 155,
                "end": 158
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 158,
                    "end": 164
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 166,
                    "end": 167
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 170,
                                        "end": 172
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 512,
                                        "start": 172,
                                        "end": 174
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 768,
                                        "start": 174,
                                        "end": 176
                                    },
                                    "flags": 256,
                                    "start": 170,
                                    "end": 176
                                },
                                "flags": 128,
                                "start": 170,
                                "end": 177
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 170,
                        "end": 177
                    },
                    "flags": 128,
                    "start": 168,
                    "end": 179
                },
                "flags": 128,
                "start": 158,
                "end": 179
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 151,
            "end": 179
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 179,
                "end": 184
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 184,
                            "end": 186
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 217,
                                "end": 220
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "arg",
                                                            "rawText": "arg",
                                                            "flags": 768,
                                                            "start": 193,
                                                            "end": 196
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 512,
                                                            "start": 196,
                                                            "end": 198
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 198,
                                                            "end": 200
                                                        },
                                                        "flags": 256,
                                                        "start": 191,
                                                        "end": 200
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 191,
                                                        "end": 192
                                                    },
                                                    "flags": 256,
                                                    "start": 191,
                                                    "end": 200
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 191,
                                            "end": 200
                                        },
                                        "flags": 256,
                                        "start": 190,
                                        "end": 201
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 206,
                                                            "end": 207
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 512,
                                                            "start": 207,
                                                            "end": 208
                                                        },
                                                        "right": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "arg",
                                                                    "rawText": "arg",
                                                                    "flags": 768,
                                                                    "start": 209,
                                                                    "end": 212
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 512,
                                                                    "start": 212,
                                                                    "end": 213
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 2,
                                                                    "rawText": "2",
                                                                    "flags": 768,
                                                                    "start": 213,
                                                                    "end": 214
                                                                },
                                                                "flags": 256,
                                                                "start": 208,
                                                                "end": 214
                                                            },
                                                            "flags": 256,
                                                            "start": 208,
                                                            "end": 215
                                                        },
                                                        "flags": 256,
                                                        "start": 204,
                                                        "end": 215
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 204,
                                                        "end": 205
                                                    },
                                                    "flags": 256,
                                                    "start": 204,
                                                    "end": 215
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 204,
                                            "end": 215
                                        },
                                        "flags": 256,
                                        "start": 202,
                                        "end": 216
                                    }
                                ]
                            ],
                            "asyncToken": null,
                            "returnType": null,
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
                                "start": 220,
                                "end": 223
                            },
                            "flags": 256,
                            "start": 188,
                            "end": 223
                        },
                        "flags": 128,
                        "start": 184,
                        "end": 223
                    }
                ],
                "flags": 128,
                "start": 184,
                "end": 223
            },
            "flags": 128,
            "start": 179,
            "end": 223
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 223,
                "end": 228
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 228,
                            "end": 230
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 254,
                                "end": 257
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "arg",
                                                        "rawText": "arg",
                                                        "flags": 768,
                                                        "start": 237,
                                                        "end": 240
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 512,
                                                        "start": 240,
                                                        "end": 242
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "arg",
                                                                "rawText": "arg",
                                                                "flags": 768,
                                                                "start": 244,
                                                                "end": 247
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 512,
                                                                "start": 247,
                                                                "end": 249
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 768,
                                                                "start": 249,
                                                                "end": 251
                                                            },
                                                            "flags": 256,
                                                            "start": 242,
                                                            "end": 251
                                                        },
                                                        "flags": 256,
                                                        "start": 242,
                                                        "end": 252
                                                    },
                                                    "flags": 256,
                                                    "start": 235,
                                                    "end": 252
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 235,
                                                    "end": 236
                                                },
                                                "flags": 256,
                                                "start": 235,
                                                "end": 252
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 235,
                                        "end": 252
                                    },
                                    "flags": 256,
                                    "start": 234,
                                    "end": 253
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 259,
                                    "end": 259
                                },
                                "flags": 256,
                                "start": 257,
                                "end": 260
                            },
                            "flags": 256,
                            "start": 232,
                            "end": 260
                        },
                        "flags": 128,
                        "start": 228,
                        "end": 260
                    }
                ],
                "flags": 128,
                "start": 228,
                "end": 260
            },
            "flags": 128,
            "start": 223,
            "end": 260
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 260,
                "end": 265
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 265,
                            "end": 269
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 265,
                        "end": 269
                    }
                ],
                "flags": 128,
                "start": 265,
                "end": 269
            },
            "flags": 128,
            "start": 260,
            "end": 270
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 270,
                "end": 275
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 275,
                            "end": 279
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 281,
                            "end": 283
                        },
                        "flags": 128,
                        "start": 275,
                        "end": 283
                    }
                ],
                "flags": 128,
                "start": 275,
                "end": 283
            },
            "flags": 128,
            "start": 270,
            "end": 284
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 284,
                "end": 289
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
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
                                "trailingComma": false,
                                "flags": 256,
                                "start": 291,
                                "end": 294
                            },
                            "flags": 256,
                            "start": 289,
                            "end": 295
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 299,
                                        "end": 300
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 299,
                                "end": 300
                            },
                            "flags": 256,
                            "start": 297,
                            "end": 301
                        },
                        "flags": 128,
                        "start": 289,
                        "end": 301
                    }
                ],
                "flags": 128,
                "start": 289,
                "end": 301
            },
            "flags": 128,
            "start": 284,
            "end": 302
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 302,
                "end": 307
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 309,
                                            "end": 312
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 309,
                                        "end": 312
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 309,
                                "end": 312
                            },
                            "flags": 256,
                            "start": 307,
                            "end": 313
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 768,
                                            "start": 321,
                                            "end": 323
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 317,
                                            "end": 320
                                        },
                                        "flags": 256,
                                        "start": 317,
                                        "end": 323
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 317,
                                "end": 323
                            },
                            "flags": 256,
                            "start": 315,
                            "end": 324
                        },
                        "flags": 128,
                        "start": 307,
                        "end": 324
                    }
                ],
                "flags": 128,
                "start": 307,
                "end": 324
            },
            "flags": 128,
            "start": 302,
            "end": 325
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 325,
                "end": 330
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 332,
                                            "end": 335
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 768,
                                            "start": 336,
                                            "end": 337
                                        },
                                        "flags": 256,
                                        "start": 332,
                                        "end": 337
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 332,
                                "end": 337
                            },
                            "flags": 256,
                            "start": 330,
                            "end": 338
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 342,
                                "end": 342
                            },
                            "flags": 256,
                            "start": 340,
                            "end": 343
                        },
                        "flags": 128,
                        "start": 330,
                        "end": 343
                    }
                ],
                "flags": 128,
                "start": 330,
                "end": 343
            },
            "flags": 128,
            "start": 325,
            "end": 344
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 344,
                "end": 349
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 768,
                                            "start": 351,
                                            "end": 354
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "defaultValue",
                                            "rawText": "defaultValue",
                                            "flags": 768,
                                            "start": 356,
                                            "end": 369
                                        },
                                        "flags": 256,
                                        "start": 351,
                                        "end": 369
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 351,
                                "end": 369
                            },
                            "flags": 256,
                            "start": 349,
                            "end": 370
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 372,
                            "end": 376
                        },
                        "flags": 128,
                        "start": 349,
                        "end": 376
                    }
                ],
                "flags": 128,
                "start": 349,
                "end": 376
            },
            "flags": 128,
            "start": 344,
            "end": 377
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 377,
                "end": 382
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "propName",
                                            "rawText": "propName",
                                            "flags": 768,
                                            "start": 384,
                                            "end": 392
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "defaultValue",
                                            "rawText": "defaultValue",
                                            "flags": 768,
                                            "start": 394,
                                            "end": 407
                                        },
                                        "flags": 256,
                                        "start": 384,
                                        "end": 407
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 384,
                                "end": 407
                            },
                            "flags": 256,
                            "start": 382,
                            "end": 408
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 410,
                            "end": 414
                        },
                        "flags": 128,
                        "start": 382,
                        "end": 414
                    }
                ],
                "flags": 128,
                "start": 382,
                "end": 414
            },
            "flags": 128,
            "start": 377,
            "end": 415
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 415,
                "end": 420
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "propName",
                                            "rawText": "propName",
                                            "flags": 768,
                                            "start": 422,
                                            "end": 431
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "localVar",
                                                "rawText": "localVar",
                                                "flags": 768,
                                                "start": 431,
                                                "end": 440
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "defaultValue",
                                                "rawText": "defaultValue",
                                                "flags": 768,
                                                "start": 442,
                                                "end": 455
                                            },
                                            "flags": 256,
                                            "start": 431,
                                            "end": 455
                                        },
                                        "flags": 256,
                                        "start": 422,
                                        "end": 455
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 422,
                                "end": 455
                            },
                            "flags": 256,
                            "start": 420,
                            "end": 456
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 458,
                            "end": 462
                        },
                        "flags": 128,
                        "start": 420,
                        "end": 462
                    }
                ],
                "flags": 128,
                "start": 420,
                "end": 462
            },
            "flags": 128,
            "start": 415,
            "end": 463
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 463,
                "end": 468
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 768,
                                            "start": 470,
                                            "end": 473
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 470,
                                        "end": 473
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 470,
                                "end": 473
                            },
                            "flags": 256,
                            "start": 468,
                            "end": 474
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 476,
                            "end": 480
                        },
                        "flags": 128,
                        "start": 468,
                        "end": 480
                    }
                ],
                "flags": 128,
                "start": 468,
                "end": 480
            },
            "flags": 128,
            "start": 463,
            "end": 481
        }
    ],
    "isModule": true,
    "text": "var x;\n\nvar x = 5;\n\nvar x = 4;\n\nvar x = 5;\n\nvar {x} = {x: 4, b: (x = 5)};\n\nvar x = {a: 4, b: (x = 5)};\n\n'use strict'; var x = 0; { let x = 6; }\n\nvar x; try {} catch (x) { x = 5; }\n\nvar f = ({x:arg = 1}, {y:b=(arg=2)}) => {}\n\nvar f = ({x:arg = (arg = 2)}) => {}\n\nvar foo;\n\nvar foo = 0;\n\nvar [foo] = [1];\n\nvar {foo} = {foo: 2};\n\nvar {foo=3} = {};\n\nvar {get = defaultValue} = obj;\n\nvar {propName = defaultValue} = obj;\n\nvar {propName: localVar = defaultValue} = obj;\n\nvar {get} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 481
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

