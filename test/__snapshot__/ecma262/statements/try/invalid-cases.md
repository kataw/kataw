# Kataw parser test case

## Input

`````js
try {} catch (e) { let e = x; }

try {} catch (e) { const e = x; }

try {

try {} catch

function f() {try

try {} catch

let foo; try {} catch foo) {} let foo;

try { var foo = 1; } catch (e) {} let foo = 1;

try { throw []; } catch ([...x = []]) {}

try catch({ ...function) {} })

try } catch({x: async (y) => z}) {}

try {} catch([async x => ]) }

try catch({ x: (function*() {}) }) {}

catch({ x: (function() {}) }) {}

try {} catch( }) {

try { } catch ([x, x]) {}

try {} catch () {}

function f() { try { } catch (e) { function e(){} }}

try {} catch (x) { let x }

let foo; try {} catch (foo) {} let foo;

try { var foo = 1; } catch (e) {} let foo = 1;

try { throw []; } catch ([...x = []]) {}

try {} catch({ ...function() {} }) {}

try {} catch({x: async (y) => z}) {}

try {} catch([async x => z]) {}

try {} catch({ x: (function*() {}) }) {}

try {} catch({ x: (function() {}) }) {}

try {} catch({ x: (foo()) }) {}

try {} catch({ x: "str" }) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 18,
                                    "end": 22
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 24
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "flags": 16,
                                            "start": 22,
                                            "end": 28
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 22,
                                    "end": 28
                                },
                                "flags": 33554448,
                                "start": 18,
                                "end": 29
                            }
                        ],
                        "flags": 16,
                        "start": 18,
                        "end": 29
                    },
                    "flags": 16,
                    "start": 16,
                    "end": 31
                },
                "flags": 80,
                "start": 6,
                "end": 31
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 31
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 31,
                "end": 36
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 38,
                    "end": 38
                },
                "flags": 16,
                "start": 36,
                "end": 39
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 39,
                    "end": 45
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 47,
                    "end": 48
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 80,
                                    "start": 51,
                                    "end": 57
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 57,
                                                "end": 59
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 61,
                                                "end": 63
                                            },
                                            "flags": 16,
                                            "start": 57,
                                            "end": 63
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 57,
                                    "end": 63
                                },
                                "flags": 33554448,
                                "start": 51,
                                "end": 64
                            }
                        ],
                        "flags": 16,
                        "start": 51,
                        "end": 64
                    },
                    "flags": 16,
                    "start": 49,
                    "end": 66
                },
                "flags": 80,
                "start": 39,
                "end": 66
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 31,
            "end": 66
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 66,
                "end": 71
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 81,
                                "start": 73,
                                "end": 78
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 80,
                                    "end": 80
                                },
                                "flags": 16,
                                "start": 78,
                                "end": 81
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 81,
                                    "end": 87
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 87,
                                        "end": 87
                                    },
                                    "flags": 17,
                                    "start": 87,
                                    "end": 87
                                },
                                "flags": 80,
                                "start": 81,
                                "end": 87
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "start": 73,
                            "end": 87
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 87,
                                "end": 97
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 97,
                                "end": 99
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 100,
                                "end": 100
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 80,
                                                "start": 103,
                                                "end": 106
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 106,
                                                    "end": 106
                                                },
                                                "flags": 17,
                                                "start": 106,
                                                "end": 106
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 106,
                                                    "end": 106
                                                },
                                                "flags": 17,
                                                "start": 106,
                                                "end": 106
                                            },
                                            "flags": 16,
                                            "start": 103,
                                            "end": 106
                                        },
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 81,
                                                "start": 106,
                                                "end": 111
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 113,
                                                    "end": 113
                                                },
                                                "flags": 16,
                                                "start": 111,
                                                "end": 114
                                            },
                                            "catchClause": {
                                                "kind": 173,
                                                "catchKeyword": {
                                                    "kind": 4202575,
                                                    "flags": 80,
                                                    "start": 114,
                                                    "end": 120
                                                },
                                                "catchParameter": null,
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 120,
                                                        "end": 120
                                                    },
                                                    "flags": 17,
                                                    "start": 120,
                                                    "end": 120
                                                },
                                                "flags": 80,
                                                "start": 114,
                                                "end": 120
                                            },
                                            "finallyKeyword": null,
                                            "finallyBlock": null,
                                            "flags": 16,
                                            "start": 106,
                                            "end": 120
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 120,
                                                "end": 125
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 125,
                                                            "end": 129
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 125,
                                                        "end": 129
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 125,
                                                "end": 129
                                            },
                                            "flags": 33554448,
                                            "start": 120,
                                            "end": 130
                                        },
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 80,
                                                "start": 130,
                                                "end": 134
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 136,
                                                    "end": 136
                                                },
                                                "flags": 16,
                                                "start": 134,
                                                "end": 137
                                            },
                                            "catchClause": {
                                                "kind": 173,
                                                "catchKeyword": {
                                                    "kind": 4202575,
                                                    "flags": 80,
                                                    "start": 137,
                                                    "end": 143
                                                },
                                                "catchParameter": null,
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 143,
                                                        "end": 143
                                                    },
                                                    "flags": 16,
                                                    "start": 143,
                                                    "end": 143
                                                },
                                                "flags": 80,
                                                "start": 137,
                                                "end": 143
                                            },
                                            "finallyKeyword": null,
                                            "finallyBlock": null,
                                            "flags": 16,
                                            "start": 130,
                                            "end": 143
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 143,
                                                "end": 147
                                            },
                                            "flags": 16,
                                            "start": 143,
                                            "end": 147
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 103,
                                    "end": 147
                                },
                                "flags": 32,
                                "start": 101,
                                "end": 147
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 87,
                            "end": 147
                        }
                    ],
                    "flags": 17,
                    "start": 73,
                    "end": 147
                },
                "flags": 16,
                "start": 71,
                "end": 147
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 147,
                    "end": 147
                },
                "flags": 16,
                "start": 147,
                "end": 147
            },
            "flags": 16,
            "start": 66,
            "end": 147
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 150,
                "end": 150
            },
            "flags": 16,
            "start": 148,
            "end": 151
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 151,
                "end": 155
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 155,
                            "end": 159
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 155,
                        "end": 159
                    }
                ],
                "flags": 16,
                "start": 155,
                "end": 159
            },
            "flags": 33554448,
            "start": 151,
            "end": 160
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 160,
                "end": 165
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 167,
                                "end": 171
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
                                            "start": 171,
                                            "end": 175
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 177,
                                            "end": 179
                                        },
                                        "flags": 16,
                                        "start": 171,
                                        "end": 179
                                    }
                                ],
                                "flags": 16,
                                "start": 171,
                                "end": 179
                            },
                            "flags": 16,
                            "start": 167,
                            "end": 180
                        }
                    ],
                    "flags": 16,
                    "start": 167,
                    "end": 180
                },
                "flags": 16,
                "start": 165,
                "end": 182
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 182,
                    "end": 188
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 190,
                    "end": 191
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 194,
                        "end": 194
                    },
                    "flags": 16,
                    "start": 192,
                    "end": 195
                },
                "flags": 80,
                "start": 182,
                "end": 195
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 160,
            "end": 195
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 195,
                "end": 199
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 199,
                            "end": 203
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 205,
                            "end": 207
                        },
                        "flags": 16,
                        "start": 199,
                        "end": 207
                    }
                ],
                "flags": 16,
                "start": 199,
                "end": 207
            },
            "flags": 33554448,
            "start": 195,
            "end": 208
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 208,
                "end": 213
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 158,
                            "throwKeyword": {
                                "kind": 37757026,
                                "flags": 80,
                                "start": 215,
                                "end": 221
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 223,
                                    "end": 223
                                },
                                "flags": 32,
                                "start": 221,
                                "end": 224
                            },
                            "flags": 80,
                            "start": 215,
                            "end": 225
                        }
                    ],
                    "flags": 16,
                    "start": 215,
                    "end": 225
                },
                "flags": 16,
                "start": 213,
                "end": 227
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 227,
                    "end": 233
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 236,
                                    "end": 239
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 239,
                                    "end": 240
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 244,
                                        "end": 244
                                    },
                                    "flags": 32,
                                    "start": 242,
                                    "end": 245
                                },
                                "flags": 32,
                                "start": 236,
                                "end": 245
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 236,
                        "end": 245
                    },
                    "flags": 32,
                    "start": 235,
                    "end": 246
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 249,
                        "end": 249
                    },
                    "flags": 16,
                    "start": 247,
                    "end": 250
                },
                "flags": 80,
                "start": 227,
                "end": 250
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 208,
            "end": 250
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 250,
                "end": 255
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 255,
                    "end": 255
                },
                "flags": 16,
                "start": 255,
                "end": 255
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 255,
                    "end": 261
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 263,
                                    "end": 267
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "function",
                                    "rawText": "function",
                                    "flags": 96,
                                    "start": 267,
                                    "end": 275
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 0,
                                "start": 263,
                                "end": 275
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 263,
                        "end": 275
                    },
                    "flags": 32,
                    "start": 262,
                    "end": 275
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 278,
                        "end": 278
                    },
                    "flags": 16,
                    "start": 276,
                    "end": 279
                },
                "flags": 80,
                "start": 255,
                "end": 279
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 250,
            "end": 279
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 282,
                "end": 287
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 287,
                    "end": 287
                },
                "flags": 16,
                "start": 287,
                "end": 287
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 287,
                    "end": 287
                },
                "flags": 16,
                "start": 287,
                "end": 287
            },
            "flags": 16,
            "start": 282,
            "end": 287
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 289,
                    "end": 289
                },
                "flags": 16,
                "start": 289,
                "end": 289
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 289,
                    "end": 295
                },
                "catchParameter": {
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
                                    "start": 297,
                                    "end": 298
                                },
                                "value": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 299,
                                    "end": 305
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 297,
                                "end": 305
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 297,
                        "end": 305
                    },
                    "flags": 32,
                    "start": 296,
                    "end": 305
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 305,
                        "end": 305
                    },
                    "flags": 16,
                    "start": 305,
                    "end": 305
                },
                "flags": 80,
                "start": 289,
                "end": 305
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 289,
            "end": 305
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 307,
                            "end": 308
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 307,
                    "end": 309
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 309,
                    "end": 312
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 312,
                    "end": 314
                },
                "flags": 32,
                "start": 305,
                "end": 314
            },
            "flags": 16,
            "start": 305,
            "end": 314
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 318,
                "end": 318
            },
            "flags": 16,
            "start": 316,
            "end": 319
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 319,
                "end": 324
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 326,
                    "end": 326
                },
                "flags": 16,
                "start": 324,
                "end": 327
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 327,
                    "end": 333
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 335,
                                "end": 340
                            },
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 340,
                                "end": 342
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 335,
                        "end": 342
                    },
                    "flags": 32,
                    "start": 334,
                    "end": 342
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 342,
                        "end": 342
                    },
                    "flags": 16,
                    "start": 342,
                    "end": 342
                },
                "flags": 80,
                "start": 327,
                "end": 342
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 319,
            "end": 342
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 350,
                "end": 355
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 355,
                    "end": 355
                },
                "flags": 16,
                "start": 355,
                "end": 355
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 355,
                    "end": 361
                },
                "catchParameter": {
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
                                    "start": 363,
                                    "end": 365
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 366,
                                    "end": 366
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 363,
                                "end": 366
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 363,
                        "end": 366
                    },
                    "flags": 32,
                    "start": 362,
                    "end": 366
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 366,
                        "end": 366
                    },
                    "flags": 16,
                    "start": 366,
                    "end": 366
                },
                "flags": 80,
                "start": 355,
                "end": 366
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 350,
            "end": 366
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 368,
                        "end": 376
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 376,
                        "end": 377
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 378,
                        "end": 378
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 381,
                            "end": 381
                        },
                        "flags": 32,
                        "start": 379,
                        "end": 382
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 368,
                    "end": 382
                },
                "flags": 366,
                "start": 32,
                "end": 383
            },
            "flags": 16,
            "start": 366,
            "end": 383
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 388,
                "end": 388
            },
            "flags": 16,
            "start": 386,
            "end": 389
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 389,
                    "end": 389
                },
                "flags": 17,
                "start": 389,
                "end": 389
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "start": 389,
                    "end": 396
                },
                "catchParameter": {
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
                                    "start": 398,
                                    "end": 400
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 401,
                                    "end": 401
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 398,
                                "end": 401
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 398,
                        "end": 401
                    },
                    "flags": 32,
                    "start": 397,
                    "end": 401
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 401,
                        "end": 401
                    },
                    "flags": 16,
                    "start": 401,
                    "end": 401
                },
                "flags": 81,
                "start": 389,
                "end": 401
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 389,
            "end": 401
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 403,
                        "end": 411
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 412,
                        "end": 412
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 415,
                            "end": 415
                        },
                        "flags": 32,
                        "start": 413,
                        "end": 416
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 403,
                    "end": 416
                },
                "flags": 401,
                "start": 32,
                "end": 417
            },
            "flags": 16,
            "start": 401,
            "end": 417
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 422,
                "end": 422
            },
            "flags": 16,
            "start": 420,
            "end": 423
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 423,
                "end": 428
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 430,
                    "end": 430
                },
                "flags": 16,
                "start": 428,
                "end": 431
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 431,
                    "end": 437
                },
                "catchParameter": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 438,
                    "end": 438
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 438,
                        "end": 438
                    },
                    "flags": 16,
                    "start": 438,
                    "end": 438
                },
                "flags": 80,
                "start": 431,
                "end": 438
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 423,
            "end": 438
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 443,
                            "end": 448
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 450,
                                "end": 450
                            },
                            "flags": 16,
                            "start": 448,
                            "end": 452
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 452,
                                "end": 458
                            },
                            "catchParameter": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 461,
                                            "end": 462
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 463,
                                            "end": 465
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 461,
                                    "end": 465
                                },
                                "flags": 32,
                                "start": 460,
                                "end": 466
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 469,
                                    "end": 469
                                },
                                "flags": 16,
                                "start": 467,
                                "end": 470
                            },
                            "flags": 80,
                            "start": 452,
                            "end": 470
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 443,
                        "end": 470
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 470,
                            "end": 475
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 477,
                                "end": 477
                            },
                            "flags": 16,
                            "start": 475,
                            "end": 478
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 478,
                                "end": 484
                            },
                            "catchParameter": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 486,
                                "end": 486
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 489,
                                    "end": 489
                                },
                                "flags": 16,
                                "start": 487,
                                "end": 490
                            },
                            "flags": 80,
                            "start": 478,
                            "end": 490
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 470,
                        "end": 490
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 65,
                            "start": 490,
                            "end": 500
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 500,
                            "end": 502
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 503,
                            "end": 503
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 159,
                                        "tryKeyword": {
                                            "kind": 37757027,
                                            "flags": 80,
                                            "start": 506,
                                            "end": 510
                                        },
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 512,
                                                "end": 512
                                            },
                                            "flags": 16,
                                            "start": 510,
                                            "end": 514
                                        },
                                        "catchClause": {
                                            "kind": 173,
                                            "catchKeyword": {
                                                "kind": 4202575,
                                                "flags": 80,
                                                "start": 514,
                                                "end": 520
                                            },
                                            "catchParameter": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 522,
                                                "end": 523
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 176,
                                                            "declareKeyword": null,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 64,
                                                                "start": 526,
                                                                "end": 535
                                                            },
                                                            "asteriskToken": null,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "e",
                                                                "rawText": "e",
                                                                "flags": 96,
                                                                "start": 535,
                                                                "end": 537
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 538,
                                                                "end": 538
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 540,
                                                                    "end": 540
                                                                },
                                                                "flags": 32,
                                                                "start": 539,
                                                                "end": 541
                                                            },
                                                            "returnType": null,
                                                            "flags": 16,
                                                            "start": 526,
                                                            "end": 541
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 526,
                                                    "end": 541
                                                },
                                                "flags": 16,
                                                "start": 524,
                                                "end": 543
                                            },
                                            "flags": 80,
                                            "start": 514,
                                            "end": 543
                                        },
                                        "finallyKeyword": null,
                                        "finallyBlock": null,
                                        "flags": 16,
                                        "start": 506,
                                        "end": 543
                                    }
                                ],
                                "flags": 32,
                                "start": 506,
                                "end": 543
                            },
                            "flags": 32,
                            "start": 504,
                            "end": 544
                        },
                        "returnType": null,
                        "flags": 16,
                        "start": 490,
                        "end": 544
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 544,
                            "end": 549
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 551,
                                "end": 551
                            },
                            "flags": 16,
                            "start": 549,
                            "end": 552
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 552,
                                "end": 558
                            },
                            "catchParameter": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 560,
                                "end": 561
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 564,
                                                "end": 568
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
                                                            "start": 568,
                                                            "end": 570
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 568,
                                                        "end": 570
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 568,
                                                "end": 570
                                            },
                                            "flags": 33554448,
                                            "start": 564,
                                            "end": 570
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 564,
                                    "end": 570
                                },
                                "flags": 16,
                                "start": 562,
                                "end": 572
                            },
                            "flags": 80,
                            "start": 552,
                            "end": 572
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 544,
                        "end": 572
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 81,
                            "start": 572,
                            "end": 577
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 577,
                                        "end": 581
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 577,
                                    "end": 581
                                }
                            ],
                            "flags": 17,
                            "start": 577,
                            "end": 581
                        },
                        "flags": 33554448,
                        "start": 572,
                        "end": 582
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "start": 582,
                            "end": 586
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 588,
                                "end": 588
                            },
                            "flags": 16,
                            "start": 586,
                            "end": 589
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 589,
                                "end": 595
                            },
                            "catchParameter": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 597,
                                "end": 600
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 603,
                                    "end": 603
                                },
                                "flags": 16,
                                "start": 601,
                                "end": 604
                            },
                            "flags": 80,
                            "start": 589,
                            "end": 604
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 582,
                        "end": 604
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 604,
                            "end": 608
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 608,
                                        "end": 612
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 608,
                                    "end": 612
                                }
                            ],
                            "flags": 16,
                            "start": 608,
                            "end": 612
                        },
                        "flags": 33554448,
                        "start": 604,
                        "end": 613
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 613,
                            "end": 618
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 620,
                                            "end": 624
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
                                                        "start": 624,
                                                        "end": 628
                                                    },
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 630,
                                                        "end": 632
                                                    },
                                                    "flags": 16,
                                                    "start": 624,
                                                    "end": 632
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 624,
                                            "end": 632
                                        },
                                        "flags": 16,
                                        "start": 620,
                                        "end": 633
                                    }
                                ],
                                "flags": 16,
                                "start": 620,
                                "end": 633
                            },
                            "flags": 16,
                            "start": 618,
                            "end": 635
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 635,
                                "end": 641
                            },
                            "catchParameter": {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 643,
                                "end": 644
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 647,
                                    "end": 647
                                },
                                "flags": 16,
                                "start": 645,
                                "end": 648
                            },
                            "flags": 80,
                            "start": 635,
                            "end": 648
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 613,
                        "end": 648
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 648,
                            "end": 652
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 652,
                                        "end": 656
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 658,
                                        "end": 660
                                    },
                                    "flags": 16,
                                    "start": 652,
                                    "end": 660
                                }
                            ],
                            "flags": 16,
                            "start": 652,
                            "end": 660
                        },
                        "flags": 33554448,
                        "start": 648,
                        "end": 661
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 661,
                            "end": 666
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 158,
                                        "throwKeyword": {
                                            "kind": 37757026,
                                            "flags": 80,
                                            "start": 668,
                                            "end": 674
                                        },
                                        "expression": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 676,
                                                "end": 676
                                            },
                                            "flags": 32,
                                            "start": 674,
                                            "end": 677
                                        },
                                        "flags": 80,
                                        "start": 668,
                                        "end": 678
                                    }
                                ],
                                "flags": 16,
                                "start": 668,
                                "end": 678
                            },
                            "flags": 16,
                            "start": 666,
                            "end": 680
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 680,
                                "end": 686
                            },
                            "catchParameter": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 689,
                                                "end": 692
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 692,
                                                "end": 693
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 697,
                                                    "end": 697
                                                },
                                                "flags": 32,
                                                "start": 695,
                                                "end": 698
                                            },
                                            "flags": 32,
                                            "start": 689,
                                            "end": 698
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 689,
                                    "end": 698
                                },
                                "flags": 32,
                                "start": 688,
                                "end": 699
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 702,
                                    "end": 702
                                },
                                "flags": 16,
                                "start": 700,
                                "end": 703
                            },
                            "flags": 80,
                            "start": 680,
                            "end": 703
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 661,
                        "end": 703
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 703,
                            "end": 708
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 710,
                                "end": 710
                            },
                            "flags": 16,
                            "start": 708,
                            "end": 711
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 711,
                                "end": 717
                            },
                            "catchParameter": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 719,
                                                "end": 723
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "function",
                                                "rawText": "function",
                                                "flags": 96,
                                                "start": 723,
                                                "end": 731
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 0,
                                            "start": 719,
                                            "end": 731
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 719,
                                    "end": 731
                                },
                                "flags": 32,
                                "start": 718,
                                "end": 731
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 731,
                                    "end": 731
                                },
                                "flags": 16,
                                "start": 731,
                                "end": 731
                            },
                            "flags": 80,
                            "start": 711,
                            "end": 731
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 703,
                        "end": 731
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
                                "start": 732,
                                "end": 732
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
                                    "start": 735,
                                    "end": 735
                                },
                                "flags": 32,
                                "start": 733,
                                "end": 736
                            },
                            "flags": 32,
                            "start": 731,
                            "end": 736
                        },
                        "flags": 16,
                        "start": 731,
                        "end": 736
                    }
                ],
                "flags": 17,
                "start": 443,
                "end": 736
            },
            "flags": 16,
            "start": 441,
            "end": 738
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 741,
                "end": 741
            },
            "flags": 16,
            "start": 739,
            "end": 742
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 742,
                "end": 747
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 749,
                    "end": 749
                },
                "flags": 16,
                "start": 747,
                "end": 750
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 750,
                    "end": 756
                },
                "catchParameter": {
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
                                    "start": 758,
                                    "end": 759
                                },
                                "value": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 760,
                                    "end": 766
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 758,
                                "end": 766
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 758,
                        "end": 766
                    },
                    "flags": 32,
                    "start": 757,
                    "end": 766
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 766,
                        "end": 766
                    },
                    "flags": 16,
                    "start": 766,
                    "end": 766
                },
                "flags": 80,
                "start": 750,
                "end": 766
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 742,
            "end": 766
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 768,
                            "end": 769
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 768,
                    "end": 770
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 770,
                    "end": 773
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 773,
                    "end": 775
                },
                "flags": 32,
                "start": 766,
                "end": 775
            },
            "flags": 16,
            "start": 766,
            "end": 775
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 779,
                "end": 779
            },
            "flags": 16,
            "start": 777,
            "end": 780
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 780,
                "end": 785
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 787,
                    "end": 787
                },
                "flags": 16,
                "start": 785,
                "end": 788
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 788,
                    "end": 794
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 796,
                                "end": 801
                            },
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 801,
                                "end": 803
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 796,
                        "end": 803
                    },
                    "flags": 32,
                    "start": 795,
                    "end": 803
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 803,
                        "end": 803
                    },
                    "flags": 16,
                    "start": 803,
                    "end": 803
                },
                "flags": 80,
                "start": 788,
                "end": 803
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 780,
            "end": 803
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 806,
                "end": 808
            },
            "flags": 16,
            "start": 806,
            "end": 808
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 812,
                "end": 812
            },
            "flags": 16,
            "start": 810,
            "end": 813
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 813,
                "end": 818
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 820,
                    "end": 820
                },
                "flags": 16,
                "start": 818,
                "end": 821
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 821,
                    "end": 827
                },
                "catchParameter": {
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
                                    "start": 829,
                                    "end": 831
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 832,
                                    "end": 832
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 829,
                                "end": 832
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 829,
                        "end": 832
                    },
                    "flags": 32,
                    "start": 828,
                    "end": 832
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 832,
                        "end": 832
                    },
                    "flags": 16,
                    "start": 832,
                    "end": 832
                },
                "flags": 80,
                "start": 821,
                "end": 832
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 813,
            "end": 832
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 834,
                        "end": 842
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 842,
                        "end": 843
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 844,
                        "end": 844
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 847,
                            "end": 847
                        },
                        "flags": 32,
                        "start": 845,
                        "end": 848
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 834,
                    "end": 848
                },
                "flags": 832,
                "start": 32,
                "end": 849
            },
            "flags": 16,
            "start": 832,
            "end": 849
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 854,
                "end": 854
            },
            "flags": 16,
            "start": 852,
            "end": 855
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 855,
                "end": 860
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 862,
                    "end": 862
                },
                "flags": 16,
                "start": 860,
                "end": 863
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 863,
                    "end": 869
                },
                "catchParameter": {
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
                                    "start": 871,
                                    "end": 873
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 874,
                                    "end": 874
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 871,
                                "end": 874
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 871,
                        "end": 874
                    },
                    "flags": 32,
                    "start": 870,
                    "end": 874
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 874,
                        "end": 874
                    },
                    "flags": 16,
                    "start": 874,
                    "end": 874
                },
                "flags": 80,
                "start": 863,
                "end": 874
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 855,
            "end": 874
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 876,
                        "end": 884
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 885,
                        "end": 885
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 888,
                            "end": 888
                        },
                        "flags": 32,
                        "start": 886,
                        "end": 889
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 876,
                    "end": 889
                },
                "flags": 874,
                "start": 32,
                "end": 890
            },
            "flags": 16,
            "start": 874,
            "end": 890
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 895,
                "end": 895
            },
            "flags": 16,
            "start": 893,
            "end": 896
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 896,
                "end": 901
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 903,
                    "end": 903
                },
                "flags": 16,
                "start": 901,
                "end": 904
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 904,
                    "end": 910
                },
                "catchParameter": {
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
                                    "start": 912,
                                    "end": 914
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 915,
                                    "end": 915
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 912,
                                "end": 915
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 912,
                        "end": 915
                    },
                    "flags": 32,
                    "start": 911,
                    "end": 915
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 915,
                        "end": 915
                    },
                    "flags": 16,
                    "start": 915,
                    "end": 915
                },
                "flags": 80,
                "start": 904,
                "end": 915
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 896,
            "end": 915
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 917,
                        "end": 920
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 921,
                        "end": 921
                    },
                    "flags": 268435488,
                    "start": 915,
                    "end": 922
                },
                "flags": 915,
                "start": 32,
                "end": 923
            },
            "flags": 16,
            "start": 915,
            "end": 923
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 928,
                "end": 928
            },
            "flags": 16,
            "start": 926,
            "end": 929
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 929,
                "end": 934
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 936,
                    "end": 936
                },
                "flags": 16,
                "start": 934,
                "end": 937
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 937,
                    "end": 943
                },
                "catchParameter": {
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
                                    "start": 945,
                                    "end": 947
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 948,
                                    "end": 948
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 945,
                                "end": 948
                            },
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 201392131,
                                    "text": "str",
                                    "rawText": "\"str\"",
                                    "flags": 96,
                                    "start": 948,
                                    "end": 954
                                },
                                "value": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 954,
                                    "end": 954
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 948,
                                "end": 954
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 945,
                        "end": 954
                    },
                    "flags": 32,
                    "start": 944,
                    "end": 956
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 959,
                        "end": 959
                    },
                    "flags": 16,
                    "start": 957,
                    "end": 960
                },
                "flags": 80,
                "start": 937,
                "end": 960
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 929,
            "end": 960
        }
    ],
    "isModule": false,
    "source": "try {} catch (e) { let e = x; }\n\ntry {} catch (e) { const e = x; }\n\ntry {\n\ntry {} catch\n\nfunction f() {try\n\ntry {} catch\n\nlet foo; try {} catch foo) {} let foo;\n\ntry { var foo = 1; } catch (e) {} let foo = 1;\n\ntry { throw []; } catch ([...x = []]) {}\n\ntry catch({ ...function) {} })\n\ntry } catch({x: async (y) => z}) {}\n\ntry {} catch([async x => ]) }\n\ntry catch({ x: (function*() {}) }) {}\n\ncatch({ x: (function() {}) }) {}\n\ntry {} catch( }) {\n\ntry { } catch ([x, x]) {}\n\ntry {} catch () {}\n\nfunction f() { try { } catch (e) { function e(){} }}\n\ntry {} catch (x) { let x }\n\nlet foo; try {} catch (foo) {} let foo;\n\ntry { var foo = 1; } catch (e) {} let foo = 1;\n\ntry { throw []; } catch ([...x = []]) {}\n\ntry {} catch({ ...function() {} }) {}\n\ntry {} catch({x: async (y) => z}) {}\n\ntry {} catch([async x => z]) {}\n\ntry {} catch({ x: (function*() {}) }) {}\n\ntry {} catch({ x: (function() {}) }) {}\n\ntry {} catch({ x: (foo()) }) {}\n\ntry {} catch({ x: \"str\" }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 960
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A block-scoped variable cannot shadow a catch clause binding - start: 22, end: 24
✖ A block-scoped variable cannot shadow a catch clause binding - start: 57, end: 59
✖ Declaration or statement expected - start: 106, end: 111
✖ Expected a `;` - start: 147, end: 148
✖ Cannot redeclare block-scoped variable - start: 171, end: 175
✖ Duplicate identifier - start: 199, end: 203
✖ A rest element cannot have an initializer - start: 242, end: 244
✖ ',' expected - start: 275, end: 276
✖ The parser expected to find a '}' to match the '{' token here - start: 275, end: 276
✖ Declaration or statement expected - start: 279, end: 281
✖ Declaration or statement expected - start: 281, end: 282
✖ Declaration or statement expected - start: 287, end: 289
✖ 'try' expected - start: 289, end: 295
✖ ',' expected - start: 305, end: 307
✖ The parser expected to find a '}' to match the '{' token here - start: 306, end: 307
✖ Declaration or statement expected - start: 314, end: 315
✖ Declaration or statement expected - start: 315, end: 316
✖ ',' expected - start: 340, end: 342
✖ ',' expected - start: 342, end: 345
✖ Did you forgot a ']' to match the `[` token? - start: 343, end: 345
✖ Declaration or statement expected - start: 345, end: 347
✖ Declaration or statement expected - start: 347, end: 348
✖ Declaration or statement expected - start: 348, end: 350
✖ Object property expected - start: 366, end: 368
✖ ',' expected - start: 366, end: 368
✖ Declaration or statement expected - start: 383, end: 385
✖ Declaration or statement expected - start: 385, end: 386
✖ 'try' expected - start: 389, end: 396
✖ Object property expected - start: 401, end: 403
✖ ',' expected - start: 401, end: 403
✖ Declaration or statement expected - start: 417, end: 419
✖ Declaration or statement expected - start: 419, end: 420
✖ Binding identifier expected - start: 438, end: 440
✖ Declaration or statement expected - start: 440, end: 441
✖ Duplicate identifier - start: 463, end: 465
✖ Binding identifier expected - start: 486, end: 487
✖ A block-scoped variable cannot shadow a catch clause binding - start: 535, end: 537
✖ A block-scoped variable cannot shadow a catch clause binding - start: 568, end: 570
✖ Duplicate identifier - start: 608, end: 612
✖ Cannot redeclare block-scoped variable - start: 624, end: 628
✖ Cannot redeclare block-scoped variable - start: 624, end: 628
✖ Duplicate identifier - start: 652, end: 656
✖ A rest element cannot have an initializer - start: 695, end: 697
✖ ',' expected - start: 731, end: 732
✖ The parser expected to find a '}' to match the '{' token here - start: 731, end: 732
✖ Declaration or statement expected - start: 738, end: 739
✖ ',' expected - start: 766, end: 768
✖ The parser expected to find a '}' to match the '{' token here - start: 767, end: 768
✖ Declaration or statement expected - start: 775, end: 776
✖ Declaration or statement expected - start: 776, end: 777
✖ ',' expected - start: 801, end: 803
✖ ',' expected - start: 803, end: 806
✖ Did you forgot a ']' to match the `[` token? - start: 804, end: 806
✖ Expected a `;` - start: 808, end: 809
✖ Declaration or statement expected - start: 809, end: 810
✖ Object property expected - start: 832, end: 834
✖ ',' expected - start: 832, end: 834
✖ Declaration or statement expected - start: 849, end: 851
✖ Declaration or statement expected - start: 851, end: 852
✖ Object property expected - start: 874, end: 876
✖ ',' expected - start: 874, end: 876
✖ Declaration or statement expected - start: 890, end: 892
✖ Declaration or statement expected - start: 892, end: 893
✖ Object property expected - start: 915, end: 917
✖ ',' expected - start: 915, end: 917
✖ Declaration or statement expected - start: 923, end: 925
✖ Declaration or statement expected - start: 925, end: 926
✖ Object property expected - start: 948, end: 954
✖ ',' expected - start: 948, end: 954
✖ Object property expected - start: 954, end: 956

```

