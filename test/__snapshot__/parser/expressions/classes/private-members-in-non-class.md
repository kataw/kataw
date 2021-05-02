# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js
 #a = 1;

function() { #a = () => {}}

function() { #a}

() => { #a() { }}

class C { test() {get #a() { }}}

'use strict'; ({set #a(foo) { }});

'use strict'; ({*#a() { }});

({async #a() { }} = {});

({async *#a() { }} = {});
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
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "start": 5,
            "end": 8
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 8,
                "end": 18
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 18,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 20,
                "end": 22
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 8,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 30,
                    "end": 33
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 33,
                    "end": 36
                },
                "flags": 32,
                "start": 27,
                "end": 36
            },
            "flags": 16,
            "start": 27,
            "end": 36
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 37,
                "end": 47
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 47,
                "end": 47
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 47,
                "end": 49
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 51,
                    "end": 51
                },
                "flags": 32,
                "start": 49,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 37,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 59,
                    "end": 62
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 64,
                        "end": 64
                    },
                    "flags": 32,
                    "start": 62,
                    "end": 64
                },
                "flags": 32,
                "start": 55,
                "end": 64
            },
            "flags": 16,
            "start": 55,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 71,
                    "end": 71
                },
                "flags": 32,
                "start": 67,
                "end": 71
            },
            "flags": 16,
            "start": 67,
            "end": 71
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 74,
                "end": 81
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 81,
                "end": 83
            },
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
                                "kind": 134299649,
                                "text": "test",
                                "rawText": "test",
                                "flags": 96,
                                "start": 85,
                                "end": 90
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 91,
                                "end": 92
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "get",
                                                "rawText": "get",
                                                "flags": 96,
                                                "start": 94,
                                                "end": 97
                                            },
                                            "flags": 16,
                                            "start": 94,
                                            "end": 97
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 94,
                                    "end": 97
                                },
                                "flags": 32,
                                "start": 92,
                                "end": 97
                            },
                            "flags": 0,
                            "start": 90,
                            "end": 97
                        },
                        "flags": 0,
                        "start": 85,
                        "end": 97
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
                                "start": 97,
                                "end": 100
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 101,
                                "end": 102
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 104,
                                    "end": 104
                                },
                                "flags": 32,
                                "start": 102,
                                "end": 106
                            },
                            "flags": 0,
                            "start": 100,
                            "end": 106
                        },
                        "flags": 0,
                        "start": 97,
                        "end": 106
                    }
                ],
                "flags": 32,
                "start": 85,
                "end": 107
            },
            "flags": 16,
            "start": 74,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 108,
                "end": 122
            },
            "flags": 16,
            "start": 108,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 126,
                                    "end": 129
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 129,
                                        "end": 132
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
                                                    "start": 133,
                                                    "end": 136
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 133,
                                                "end": 136
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 133,
                                        "end": 137
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 139,
                                            "end": 139
                                        },
                                        "flags": 32,
                                        "start": 137,
                                        "end": 141
                                    },
                                    "flags": 544,
                                    "start": 132,
                                    "end": 141
                                },
                                "flags": 32,
                                "start": 126,
                                "end": 141
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 126,
                        "end": 141
                    },
                    "flags": 32,
                    "start": 125,
                    "end": 142
                },
                "flags": 32,
                "start": 123,
                "end": 143
            },
            "flags": 16,
            "start": 123,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 144,
                "end": 158
            },
            "flags": 16,
            "start": 144,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 162,
                                    "end": 163
                                },
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#a",
                                        "flags": 96,
                                        "start": 163,
                                        "end": 165
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 166,
                                        "end": 167
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 169,
                                            "end": 169
                                        },
                                        "flags": 32,
                                        "start": 167,
                                        "end": 171
                                    },
                                    "flags": 160,
                                    "start": 165,
                                    "end": 171
                                },
                                "flags": 32,
                                "start": 162,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 162,
                        "end": 171
                    },
                    "flags": 32,
                    "start": 161,
                    "end": 172
                },
                "flags": 32,
                "start": 159,
                "end": 173
            },
            "flags": 16,
            "start": 159,
            "end": 174
        },
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
                                    "kind": 257,
                                    "generatorToken": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 178,
                                        "end": 183
                                    },
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 96,
                                            "start": 183,
                                            "end": 186
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 288,
                                            "start": 187,
                                            "end": 188
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 190,
                                                "end": 190
                                            },
                                            "flags": 32,
                                            "start": 188,
                                            "end": 192
                                        },
                                        "flags": 288,
                                        "start": 186,
                                        "end": 192
                                    },
                                    "flags": 32,
                                    "start": 178,
                                    "end": 192
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 178,
                            "end": 192
                        },
                        "flags": 32,
                        "start": 177,
                        "end": 193
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 193,
                        "end": 195
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 197,
                            "end": 197
                        },
                        "flags": 32,
                        "start": 195,
                        "end": 198
                    },
                    "flags": 32,
                    "start": 177,
                    "end": 198
                },
                "flags": 32,
                "start": 174,
                "end": 199
            },
            "flags": 16,
            "start": 174,
            "end": 200
        },
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
                                    "kind": 257,
                                    "generatorToken": null,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 204,
                                        "end": 209
                                    },
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67109115,
                                            "text": "#a",
                                            "flags": 96,
                                            "start": 211,
                                            "end": 213
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 416,
                                            "start": 214,
                                            "end": 215
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 217,
                                                "end": 217
                                            },
                                            "flags": 32,
                                            "start": 215,
                                            "end": 219
                                        },
                                        "flags": 416,
                                        "start": 213,
                                        "end": 219
                                    },
                                    "flags": 32,
                                    "start": 204,
                                    "end": 219
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 204,
                            "end": 219
                        },
                        "flags": 32,
                        "start": 203,
                        "end": 220
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 220,
                        "end": 222
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 224,
                            "end": 224
                        },
                        "flags": 32,
                        "start": 222,
                        "end": 225
                    },
                    "flags": 32,
                    "start": 203,
                    "end": 225
                },
                "flags": 32,
                "start": 200,
                "end": 226
            },
            "flags": 16,
            "start": 200,
            "end": 227
        }
    ],
    "isModule": false,
    "source": " #a = 1;\n\nfunction() { #a = () => {}}\n\nfunction() { #a}\n\n() => { #a() { }}\n\nclass C { test() {get #a() { }}}\n\n'use strict'; ({set #a(foo) { }});\n\n'use strict'; ({*#a() { }});\n\n({async #a() { }} = {});\n\n({async *#a() { }} = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 227
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 0, end: 3
✖ Statement expected - start: 3, end: 5
✖ Binding identifier expected - start: 18, end: 19
✖ Private identifiers are not allowed outside class_bodies - start: 22, end: 25
✖ Statement expected - start: 25, end: 27
✖ Statement expected - start: 36, end: 37
✖ Binding identifier expected - start: 47, end: 48
✖ Private identifiers are not allowed outside class_bodies - start: 51, end: 54
✖ Statement expected - start: 54, end: 55
✖ Expected a `;` - start: 64, end: 67
✖ Private identifiers are not allowed outside class_bodies - start: 64, end: 67
✖ Expression expected - start: 71, end: 73
✖ Statement expected - start: 71, end: 73
✖ Statement expected - start: 73, end: 74
✖ Expected a `;` - start: 97, end: 100
✖ Statement expected - start: 107, end: 108
✖ Private identifiers are not allowed outside class_bodies - start: 129, end: 132
✖ Private identifiers are not allowed outside class_bodies - start: 163, end: 165
✖ Private identifiers are not allowed outside class_bodies - start: 183, end: 186
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 193, end: 195
✖ Private identifiers are not allowed outside class_bodies - start: 211, end: 213
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 220, end: 222

```

