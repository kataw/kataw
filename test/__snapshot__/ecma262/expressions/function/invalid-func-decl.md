# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
function f(

function f(){

function f(){

function f({}
function f(){}

async function f(){}

 function !f(){}


 function f(!{}
 function f(!a switch foo try catch switch){!}
 function f(){!
 function f(){}
 function f()switch function

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 11,
                "end": 21
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 24,
                "end": 24
            },
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
                                "flags": 65,
                                "start": 26,
                                "end": 36
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 36,
                                "end": 38
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 39,
                                "end": 39
                            },
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
                                                "flags": 65,
                                                "start": 41,
                                                "end": 51
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 55,
                                                            "end": 55
                                                        },
                                                        "flags": 32,
                                                        "start": 54,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 56
                                                },
                                                "flags": 32,
                                                "start": 56,
                                                "end": 56
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 41,
                                            "end": 56
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 65,
                                                "start": 56,
                                                "end": 65
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 68,
                                                "end": 68
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 70,
                                                    "end": 70
                                                },
                                                "flags": 32,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 56,
                                            "end": 71
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 65,
                                                "start": 71,
                                                "end": 78
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 78,
                                                "end": 87
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 90,
                                                "end": 90
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 32,
                                                "start": 91,
                                                "end": 93
                                            },
                                            "returnType": null,
                                            "flags": 144,
                                            "start": 71,
                                            "end": 93
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 65,
                                                "start": 93,
                                                "end": 104
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 104,
                                                "end": 104
                                            },
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
                                                "start": 104,
                                                "end": 104
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 93,
                                            "end": 104
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "start": 104,
                                                    "end": 106
                                                },
                                                "operand": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 106,
                                                        "end": 107
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 108,
                                                        "end": 108
                                                    },
                                                    "flags": 268435488,
                                                    "start": 106,
                                                    "end": 109
                                                },
                                                "flags": 32,
                                                "start": 104,
                                                "end": 109
                                            },
                                            "flags": 16,
                                            "start": 104,
                                            "end": 109
                                        },
                                        {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 110,
                                                "end": 110
                                            },
                                            "flags": 16,
                                            "start": 109,
                                            "end": 111
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 65,
                                                "start": 111,
                                                "end": 123
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 123,
                                                "end": 125
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 126,
                                                    "end": 126
                                                },
                                                "flags": 32,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 111,
                                            "end": 126
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "start": 126,
                                                    "end": 127
                                                },
                                                "operand": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 128,
                                                        "end": 128
                                                    },
                                                    "flags": 48,
                                                    "start": 127,
                                                    "end": 129
                                                },
                                                "flags": 32,
                                                "start": 126,
                                                "end": 129
                                            },
                                            "flags": 16,
                                            "start": 126,
                                            "end": 129
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 65,
                                                "start": 129,
                                                "end": 139
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 139,
                                                "end": 141
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 142,
                                                "end": 142
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 142,
                                                    "end": 142
                                                },
                                                "flags": 32,
                                                "start": 142,
                                                "end": 142
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 129,
                                            "end": 142
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "start": 142,
                                                    "end": 143
                                                },
                                                "operand": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 143,
                                                    "end": 144
                                                },
                                                "flags": 32,
                                                "start": 142,
                                                "end": 144
                                            },
                                            "flags": 16,
                                            "start": 142,
                                            "end": 144
                                        },
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 80,
                                                "start": 144,
                                                "end": 151
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 151,
                                                "end": 155
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "flags": 16,
                                                "start": 155,
                                                "end": 155
                                            },
                                            "flags": 80,
                                            "start": 144,
                                            "end": 155
                                        },
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 80,
                                                "start": 155,
                                                "end": 159
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 159,
                                                    "end": 159
                                                },
                                                "flags": 16,
                                                "start": 159,
                                                "end": 159
                                            },
                                            "catchClause": {
                                                "kind": 173,
                                                "catchKeyword": {
                                                    "kind": 4202575,
                                                    "flags": 80,
                                                    "start": 159,
                                                    "end": 165
                                                },
                                                "catchParameter": null,
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 165,
                                                        "end": 165
                                                    },
                                                    "flags": 16,
                                                    "start": 165,
                                                    "end": 165
                                                },
                                                "flags": 80,
                                                "start": 159,
                                                "end": 165
                                            },
                                            "finallyKeyword": null,
                                            "finallyBlock": null,
                                            "flags": 16,
                                            "start": 155,
                                            "end": 165
                                        },
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 80,
                                                "start": 165,
                                                "end": 172
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 172,
                                                "end": 172
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "flags": 16,
                                                "start": 173,
                                                "end": 174
                                            },
                                            "flags": 80,
                                            "start": 165,
                                            "end": 174
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "start": 174,
                                                    "end": 175
                                                },
                                                "operand": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 175,
                                                    "end": 175
                                                },
                                                "flags": 32,
                                                "start": 174,
                                                "end": 175
                                            },
                                            "flags": 16,
                                            "start": 174,
                                            "end": 175
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 41,
                                    "end": 175
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 176
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 26,
                            "end": 176
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 176,
                                "end": 186
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 186,
                                "end": 188
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 189,
                                "end": 189
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "start": 191,
                                                    "end": 192
                                                },
                                                "operand": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 65,
                                                        "start": 192,
                                                        "end": 202
                                                    },
                                                    "asteriskToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 202,
                                                        "end": 204
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 205,
                                                        "end": 205
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 207,
                                                            "end": 207
                                                        },
                                                        "flags": 32,
                                                        "start": 206,
                                                        "end": 208
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 192,
                                                    "end": 208
                                                },
                                                "flags": 32,
                                                "start": 191,
                                                "end": 208
                                            },
                                            "flags": 16,
                                            "start": 191,
                                            "end": 208
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 65,
                                                "start": 208,
                                                "end": 218
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 218,
                                                "end": 220
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 221,
                                                "end": 221
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
                                                "start": 222,
                                                "end": 222
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 208,
                                            "end": 222
                                        },
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 80,
                                                "start": 222,
                                                "end": 228
                                            },
                                            "expression": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 228,
                                                    "end": 237
                                                },
                                                "asteriskToken": null,
                                                "name": null,
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 237,
                                                        "end": 237
                                                    },
                                                    "flags": 32,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "returnType": null,
                                                "flags": 32,
                                                "start": 228,
                                                "end": 237
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "flags": 16,
                                                "start": 237,
                                                "end": 237
                                            },
                                            "flags": 80,
                                            "start": 222,
                                            "end": 237
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 191,
                                    "end": 237
                                },
                                "flags": 32,
                                "start": 190,
                                "end": 237
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 176,
                            "end": 237
                        }
                    ],
                    "flags": 33,
                    "start": 26,
                    "end": 237
                },
                "flags": 32,
                "start": 25,
                "end": 237
            },
            "returnType": null,
            "flags": 16,
            "start": 11,
            "end": 237
        }
    ],
    "isModule": true,
    "source": "function f(\n\nfunction f(){\n\nfunction f(){\n\nfunction f({}\nfunction f(){}\n\nasync function f(){}\n\n function !f(){}\n\n\n function f(!{}\n function f(!a switch foo try catch switch){!}\n function f(){!\n function f(){}\n function f()switch function\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 238
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 13, end: 21
✖ Duplicate identifier - start: 21, end: 23
✖ ',' expected - start: 57, end: 65
✖ Duplicate identifier - start: 65, end: 67
✖ Duplicate identifier - start: 87, end: 89
✖ Binding identifier expected - start: 104, end: 106
✖ Missing an opening parentheses - '( - start: 105, end: 106
✖ Expected a `;` - start: 109, end: 110
✖ Duplicate identifier - start: 123, end: 125
✖ Expected a ')' to match the '(' token here - start: 126, end: 127
✖ Duplicate identifier - start: 139, end: 141
✖ Expected a ')' to match the '(' token here - start: 142, end: 143
✖ Expected a `;` - start: 144, end: 151
✖ Missing an opening parentheses - '( - start: 152, end: 155
✖ Declaration or statement expected - start: 156, end: 159
✖ Missing an opening parentheses - '( - start: 172, end: 173
✖ The parser expected to find a '}' to match the '{' token here - start: 174, end: 175
✖ Identifier expected - start: 175, end: 176
✖ Duplicate identifier - start: 186, end: 188
✖ Missing an opening brace - '{ - start: 222, end: 228
✖ Missing an opening parentheses - '( - start: 229, end: 237
✖ Missing an opening parentheses - '( - start: 237, end: 238

```

