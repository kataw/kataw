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

var {[a]: foo} = bar;

var {[(a, b)]: foo} = bar;

var {y: y, 'z': z} = x;

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

### CST

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
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 11,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 17
            },
            "flags": 16,
            "start": 6,
            "end": 18
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "4",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 23,
                "end": 29
            },
            "flags": 16,
            "start": 18,
            "end": 30
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 35,
                            "end": 37
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 39,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 35,
                "end": 41
            },
            "flags": 16,
            "start": 30,
            "end": 42
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 49,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 47,
                            "end": 51
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 55,
                                            "end": 56
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "start": 57,
                                            "end": 59
                                        },
                                        "flags": 32,
                                        "start": 55,
                                        "end": 59
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 60,
                                            "end": 62
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 65,
                                                    "end": 66
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 66,
                                                    "end": 68
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 96,
                                                    "start": 68,
                                                    "end": 70
                                                },
                                                "flags": 32,
                                                "start": 63,
                                                "end": 70
                                            },
                                            "flags": 32,
                                            "start": 63,
                                            "end": 71
                                        },
                                        "flags": 32,
                                        "start": 60,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 55,
                                "end": 71
                            },
                            "flags": 48,
                            "start": 53,
                            "end": 72
                        },
                        "flags": 16,
                        "start": 47,
                        "end": 72
                    }
                ],
                "flags": 16,
                "start": 47,
                "end": 72
            },
            "flags": 16,
            "start": 42,
            "end": 73
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 78,
                            "end": 80
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 84,
                                            "end": 85
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "flags": 32,
                                        "start": 84,
                                        "end": 88
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 89,
                                            "end": 91
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 94,
                                                    "end": 95
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 95,
                                                    "end": 97
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 96,
                                                    "start": 97,
                                                    "end": 99
                                                },
                                                "flags": 32,
                                                "start": 92,
                                                "end": 99
                                            },
                                            "flags": 32,
                                            "start": 92,
                                            "end": 100
                                        },
                                        "flags": 32,
                                        "start": 89,
                                        "end": 100
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 84,
                                "end": 100
                            },
                            "flags": 48,
                            "start": 82,
                            "end": 101
                        },
                        "flags": 16,
                        "start": 78,
                        "end": 101
                    }
                ],
                "flags": 16,
                "start": 78,
                "end": 101
            },
            "flags": 16,
            "start": 73,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 102,
                "end": 116
            },
            "flags": 16,
            "start": 102,
            "end": 117
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "flags": 96,
                            "start": 121,
                            "end": 123
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 125,
                            "end": 127
                        },
                        "flags": 16,
                        "start": 121,
                        "end": 127
                    }
                ],
                "flags": 16,
                "start": 121,
                "end": 127
            },
            "flags": 16,
            "start": 117,
            "end": 128
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
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
                                        "flags": 96,
                                        "start": 134,
                                        "end": 136
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 6,
                                        "rawText": "6",
                                        "flags": 96,
                                        "start": 138,
                                        "end": 140
                                    },
                                    "flags": 16,
                                    "start": 134,
                                    "end": 140
                                }
                            ],
                            "flags": 16,
                            "start": 134,
                            "end": 140
                        },
                        "flags": 33554448,
                        "start": 130,
                        "end": 141
                    }
                ],
                "flags": 16,
                "start": 130,
                "end": 141
            },
            "flags": 16,
            "start": 128,
            "end": 143
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 148,
                            "end": 150
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 148,
                        "end": 150
                    }
                ],
                "flags": 16,
                "start": 148,
                "end": 150
            },
            "flags": 16,
            "start": 143,
            "end": 151
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 151,
                "end": 155
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 157,
                    "end": 157
                },
                "flags": 16,
                "start": 155,
                "end": 158
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 158,
                    "end": 164
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 166,
                    "end": 167
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 170,
                                        "end": 172
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 172,
                                        "end": 174
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 96,
                                        "start": 174,
                                        "end": 176
                                    },
                                    "flags": 32,
                                    "start": 170,
                                    "end": 176
                                },
                                "flags": 16,
                                "start": 170,
                                "end": 177
                            }
                        ],
                        "flags": 16,
                        "start": 170,
                        "end": 177
                    },
                    "flags": 16,
                    "start": 168,
                    "end": 179
                },
                "flags": 80,
                "start": 158,
                "end": 179
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 151,
            "end": 179
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 184,
                            "end": 186
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 329,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 191,
                                                    "end": 192
                                                },
                                                "value": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "arg",
                                                        "rawText": "arg",
                                                        "flags": 96,
                                                        "start": 193,
                                                        "end": 196
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 196,
                                                        "end": 198
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 198,
                                                        "end": 200
                                                    },
                                                    "flags": 32,
                                                    "start": 191,
                                                    "end": 200
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 191,
                                                "end": 200
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 191,
                                        "end": 200
                                    },
                                    "flags": 48,
                                    "start": 190,
                                    "end": 201
                                },
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 329,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 204,
                                                    "end": 205
                                                },
                                                "value": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 206,
                                                        "end": 207
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
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
                                                                "flags": 96,
                                                                "start": 209,
                                                                "end": 212
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 212,
                                                                "end": 213
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 96,
                                                                "start": 213,
                                                                "end": 214
                                                            },
                                                            "flags": 32,
                                                            "start": 208,
                                                            "end": 214
                                                        },
                                                        "flags": 32,
                                                        "start": 208,
                                                        "end": 215
                                                    },
                                                    "flags": 32,
                                                    "start": 204,
                                                    "end": 215
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 204,
                                                "end": 215
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 204,
                                        "end": 215
                                    },
                                    "flags": 48,
                                    "start": 202,
                                    "end": 216
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 217,
                                "end": 220
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 222,
                                    "end": 222
                                },
                                "flags": 32,
                                "start": 220,
                                "end": 223
                            },
                            "flags": 34,
                            "start": 188,
                            "end": 223
                        },
                        "flags": 16,
                        "start": 184,
                        "end": 223
                    }
                ],
                "flags": 16,
                "start": 184,
                "end": 223
            },
            "flags": 16,
            "start": 179,
            "end": 223
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 228,
                            "end": 230
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 329,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 235,
                                                    "end": 236
                                                },
                                                "value": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "arg",
                                                        "rawText": "arg",
                                                        "flags": 96,
                                                        "start": 237,
                                                        "end": 240
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
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
                                                                "flags": 96,
                                                                "start": 244,
                                                                "end": 247
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 247,
                                                                "end": 249
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 96,
                                                                "start": 249,
                                                                "end": 251
                                                            },
                                                            "flags": 32,
                                                            "start": 242,
                                                            "end": 251
                                                        },
                                                        "flags": 32,
                                                        "start": 242,
                                                        "end": 252
                                                    },
                                                    "flags": 32,
                                                    "start": 235,
                                                    "end": 252
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 235,
                                                "end": 252
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 235,
                                        "end": 252
                                    },
                                    "flags": 48,
                                    "start": 234,
                                    "end": 253
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 254,
                                "end": 257
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 259,
                                    "end": 259
                                },
                                "flags": 32,
                                "start": 257,
                                "end": 260
                            },
                            "flags": 34,
                            "start": 232,
                            "end": 260
                        },
                        "flags": 16,
                        "start": 228,
                        "end": 260
                    }
                ],
                "flags": 16,
                "start": 228,
                "end": 260
            },
            "flags": 16,
            "start": 223,
            "end": 260
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 260,
                "end": 265
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
                                        "kind": 329,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 268,
                                                "end": 269
                                            },
                                            "flags": 32,
                                            "start": 267,
                                            "end": 270
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 271,
                                            "end": 275
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 267,
                                        "end": 275
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 267,
                                "end": 275
                            },
                            "flags": 32,
                            "start": 265,
                            "end": 276
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 278,
                            "end": 282
                        },
                        "flags": 16,
                        "start": 265,
                        "end": 282
                    }
                ],
                "flags": 16,
                "start": 265,
                "end": 282
            },
            "flags": 16,
            "start": 260,
            "end": 283
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 283,
                "end": 288
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
                                        "kind": 329,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 132,
                                                    "expressions": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 292,
                                                            "end": 293
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 294,
                                                            "end": 296
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 291,
                                                    "end": 297
                                                },
                                                "flags": 32,
                                                "start": 291,
                                                "end": 297
                                            },
                                            "flags": 32,
                                            "start": 290,
                                            "end": 298
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 299,
                                            "end": 303
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 290,
                                        "end": 303
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 290,
                                "end": 303
                            },
                            "flags": 32,
                            "start": 288,
                            "end": 304
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 306,
                            "end": 310
                        },
                        "flags": 16,
                        "start": 288,
                        "end": 310
                    }
                ],
                "flags": 16,
                "start": 288,
                "end": 310
            },
            "flags": 16,
            "start": 283,
            "end": 311
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 311,
                "end": 316
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
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 318,
                                            "end": 319
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 320,
                                            "end": 322
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 318,
                                        "end": 322
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 201392131,
                                            "text": "z",
                                            "rawText": "'z'",
                                            "flags": 4194400,
                                            "start": 323,
                                            "end": 327
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 328,
                                            "end": 330
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 323,
                                        "end": 330
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 318,
                                "end": 330
                            },
                            "flags": 32,
                            "start": 316,
                            "end": 331
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 333,
                            "end": 335
                        },
                        "flags": 16,
                        "start": 316,
                        "end": 335
                    }
                ],
                "flags": 16,
                "start": 316,
                "end": 335
            },
            "flags": 16,
            "start": 311,
            "end": 336
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 336,
                "end": 341
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
                            "flags": 96,
                            "start": 341,
                            "end": 345
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 341,
                        "end": 345
                    }
                ],
                "flags": 16,
                "start": 341,
                "end": 345
            },
            "flags": 16,
            "start": 336,
            "end": 346
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 346,
                "end": 351
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
                            "flags": 96,
                            "start": 351,
                            "end": 355
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 357,
                            "end": 359
                        },
                        "flags": 16,
                        "start": 351,
                        "end": 359
                    }
                ],
                "flags": 16,
                "start": 351,
                "end": 359
            },
            "flags": 16,
            "start": 346,
            "end": 360
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 360,
                "end": 365
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 367,
                                        "end": 370
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 367,
                                "end": 370
                            },
                            "flags": 32,
                            "start": 365,
                            "end": 371
                        },
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
                                        "flags": 96,
                                        "start": 375,
                                        "end": 376
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 375,
                                "end": 376
                            },
                            "flags": 32,
                            "start": 373,
                            "end": 377
                        },
                        "flags": 16,
                        "start": 365,
                        "end": 377
                    }
                ],
                "flags": 16,
                "start": 365,
                "end": 377
            },
            "flags": 16,
            "start": 360,
            "end": 378
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 378,
                "end": 383
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
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 385,
                                        "end": 388
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 385,
                                "end": 388
                            },
                            "flags": 32,
                            "start": 383,
                            "end": 389
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 393,
                                            "end": 396
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 397,
                                            "end": 399
                                        },
                                        "flags": 32,
                                        "start": 393,
                                        "end": 399
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 393,
                                "end": 399
                            },
                            "flags": 48,
                            "start": 391,
                            "end": 400
                        },
                        "flags": 16,
                        "start": 383,
                        "end": 400
                    }
                ],
                "flags": 16,
                "start": 383,
                "end": 400
            },
            "flags": 16,
            "start": 378,
            "end": 401
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 401,
                "end": 406
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 408,
                                            "end": 411
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 412,
                                            "end": 413
                                        },
                                        "flags": 0,
                                        "start": 408,
                                        "end": 413
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 408,
                                "end": 413
                            },
                            "flags": 32,
                            "start": 406,
                            "end": 414
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 418,
                                "end": 418
                            },
                            "flags": 48,
                            "start": 416,
                            "end": 419
                        },
                        "flags": 16,
                        "start": 406,
                        "end": 419
                    }
                ],
                "flags": 16,
                "start": 406,
                "end": 419
            },
            "flags": 16,
            "start": 401,
            "end": 420
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 420,
                "end": 425
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 427,
                                            "end": 430
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "defaultValue",
                                            "rawText": "defaultValue",
                                            "flags": 96,
                                            "start": 432,
                                            "end": 445
                                        },
                                        "flags": 0,
                                        "start": 427,
                                        "end": 445
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 427,
                                "end": 445
                            },
                            "flags": 32,
                            "start": 425,
                            "end": 446
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 448,
                            "end": 452
                        },
                        "flags": 16,
                        "start": 425,
                        "end": 452
                    }
                ],
                "flags": 16,
                "start": 425,
                "end": 452
            },
            "flags": 16,
            "start": 420,
            "end": 453
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 453,
                "end": 458
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "propName",
                                            "rawText": "propName",
                                            "flags": 96,
                                            "start": 460,
                                            "end": 468
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "defaultValue",
                                            "rawText": "defaultValue",
                                            "flags": 96,
                                            "start": 470,
                                            "end": 483
                                        },
                                        "flags": 0,
                                        "start": 460,
                                        "end": 483
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 460,
                                "end": 483
                            },
                            "flags": 32,
                            "start": 458,
                            "end": 484
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 486,
                            "end": 490
                        },
                        "flags": 16,
                        "start": 458,
                        "end": 490
                    }
                ],
                "flags": 16,
                "start": 458,
                "end": 490
            },
            "flags": 16,
            "start": 453,
            "end": 491
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 491,
                "end": 496
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
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "propName",
                                            "rawText": "propName",
                                            "flags": 96,
                                            "start": 498,
                                            "end": 506
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "localVar",
                                            "rawText": "localVar",
                                            "flags": 96,
                                            "start": 507,
                                            "end": 516
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "defaultValue",
                                            "rawText": "defaultValue",
                                            "flags": 96,
                                            "start": 518,
                                            "end": 531
                                        },
                                        "flags": 32,
                                        "start": 498,
                                        "end": 531
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 498,
                                "end": 531
                            },
                            "flags": 32,
                            "start": 496,
                            "end": 532
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 534,
                            "end": 538
                        },
                        "flags": 16,
                        "start": 496,
                        "end": 538
                    }
                ],
                "flags": 16,
                "start": 496,
                "end": 538
            },
            "flags": 16,
            "start": 491,
            "end": 539
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 539,
                "end": 544
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
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 96,
                                        "start": 546,
                                        "end": 549
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 546,
                                "end": 549
                            },
                            "flags": 32,
                            "start": 544,
                            "end": 550
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 552,
                            "end": 556
                        },
                        "flags": 16,
                        "start": 544,
                        "end": 556
                    }
                ],
                "flags": 16,
                "start": 544,
                "end": 556
            },
            "flags": 16,
            "start": 539,
            "end": 557
        }
    ],
    "isModule": true,
    "source": "var x;\n\nvar x = 5;\n\nvar x = 4;\n\nvar x = 5;\n\nvar {x} = {x: 4, b: (x = 5)};\n\nvar x = {a: 4, b: (x = 5)};\n\n'use strict'; var x = 0; { let x = 6; }\n\nvar x; try {} catch (x) { x = 5; }\n\nvar f = ({x:arg = 1}, {y:b=(arg=2)}) => {}\n\nvar f = ({x:arg = (arg = 2)}) => {}\n\nvar {[a]: foo} = bar;\n\nvar {[(a, b)]: foo} = bar;\n\nvar {y: y, 'z': z} = x;\n\nvar foo;\n\nvar foo = 0;\n\nvar [foo] = [1];\n\nvar {foo} = {foo: 2};\n\nvar {foo=3} = {};\n\nvar {get = defaultValue} = obj;\n\nvar {propName = defaultValue} = obj;\n\nvar {propName: localVar = defaultValue} = obj;\n\nvar {get} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 557
}
```

### Printed

```javascript

 var x;, var x = 5;, var x = 4;, var x = 5;, var {
    x
} = { x : 4, b : (x=5) };, var x = { a : 4, b : (x=5) };, 'use strict';, var x = 0;, { let x = 6; }, var x;, try {  }
catch (x){ x=5; }, var f = ({
        x : arg=1
    }, {
        y : b=(arg=2)
    }) => {
};, var f = ({
        x : arg=(arg=2)
    }) => {
};, var {
     : foo
} = bar;, var {
     : foo
} = bar;, var {
    y : y,
    'z' : z
} = x;, var foo;, var foo = 0;, var [foo] = [1];, var {
    foo
} = { foo : 2 };, var {
    foo = 3
} = {  };, var {
    get = defaultValue
} = obj;, var {
    propName = defaultValue
} = obj;, var {
    propName : localVar
} = obj;, var {
    get
} = obj; 
```

### Diagnostics

```javascript
✔ No errors
```

