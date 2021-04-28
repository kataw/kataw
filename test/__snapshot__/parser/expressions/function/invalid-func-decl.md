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

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 11,
                    "end": 11
                },
                "flags": 256,
                "start": 11,
                "end": 11
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 11,
                "end": 21
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 21,
                "end": 23
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 23,
                "end": 25
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
                                "flags": 768,
                                "start": 26,
                                "end": 36
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 36,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 38,
                                "end": 40
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
                                                "flags": 768,
                                                "start": 41,
                                                "end": 51
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 215,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [],
                                                                "multiline": false,
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 55,
                                                                "end": 55
                                                            },
                                                            "flags": 256,
                                                            "start": 54,
                                                            "end": 56
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 258,
                                                        "start": 54,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 258,
                                                "start": 53,
                                                "end": 65
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 56
                                                },
                                                "flags": 256,
                                                "start": 56,
                                                "end": 56
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 41,
                                            "end": 56
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 56,
                                                "end": 65
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 67,
                                                "end": 69
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 70,
                                                    "end": 70
                                                },
                                                "flags": 256,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 56,
                                            "end": 71
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 768,
                                                "start": 71,
                                                "end": 78
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 78,
                                                "end": 87
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 89,
                                                "end": 91
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 256,
                                                "start": 91,
                                                "end": 93
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 1152,
                                            "start": 71,
                                            "end": 93
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 93,
                                                "end": 104
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 12,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 104,
                                                    "end": 104
                                                },
                                                "flags": 256,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 93,
                                            "end": 104
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 104,
                                                    "end": 106
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 768,
                                                        "start": 106,
                                                        "end": 107
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 108,
                                                        "end": 108
                                                    },
                                                    "flags": 256,
                                                    "start": 106,
                                                    "end": 109
                                                },
                                                "flags": 256,
                                                "start": 104,
                                                "end": 109
                                            },
                                            "flags": 128,
                                            "start": 104,
                                            "end": 109
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "multiLine": false,
                                                "flags": 128,
                                                "start": 110,
                                                "end": 110
                                            },
                                            "flags": 128,
                                            "start": 109,
                                            "end": 111
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 111,
                                                "end": 123
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 123,
                                                "end": 125
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 125,
                                                "end": 127
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 126,
                                                    "end": 126
                                                },
                                                "flags": 256,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 111,
                                            "end": 126
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 126,
                                                    "end": 127
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 128,
                                                        "end": 128
                                                    },
                                                    "flags": 256,
                                                    "start": 127,
                                                    "end": 129
                                                },
                                                "flags": 256,
                                                "start": 126,
                                                "end": 129
                                            },
                                            "flags": 128,
                                            "start": 126,
                                            "end": 129
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 129,
                                                "end": 139
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 139,
                                                "end": 141
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 141,
                                                "end": 143
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 142,
                                                    "end": 142
                                                },
                                                "flags": 256,
                                                "start": 142,
                                                "end": 142
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 129,
                                            "end": 142
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 142,
                                                    "end": 143
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 143,
                                                    "end": 144
                                                },
                                                "flags": 256,
                                                "start": 142,
                                                "end": 144
                                            },
                                            "flags": 128,
                                            "start": 142,
                                            "end": 144
                                        },
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 768,
                                                "start": 144,
                                                "end": 151
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 151,
                                                "end": 155
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "flags": 128,
                                                "start": 155,
                                                "end": 155
                                            },
                                            "flags": 128,
                                            "start": 144,
                                            "end": 155
                                        },
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 768,
                                                "start": 155,
                                                "end": 159
                                            },
                                            "block": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 159,
                                                    "end": 159
                                                },
                                                "flags": 128,
                                                "start": 159,
                                                "end": 159
                                            },
                                            "catchClause": {
                                                "kind": 173,
                                                "catchKeyword": {
                                                    "kind": 4202575,
                                                    "flags": 768,
                                                    "start": 159,
                                                    "end": 165
                                                },
                                                "catchParameter": null,
                                                "block": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "multiLine": false,
                                                        "flags": 128,
                                                        "start": 165,
                                                        "end": 165
                                                    },
                                                    "flags": 128,
                                                    "start": 165,
                                                    "end": 165
                                                },
                                                "flags": 128,
                                                "start": 159,
                                                "end": 165
                                            },
                                            "finallyKeyword": null,
                                            "finallyBlock": null,
                                            "flags": 128,
                                            "start": 155,
                                            "end": 165
                                        },
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 768,
                                                "start": 165,
                                                "end": 172
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 12,
                                                "start": 172,
                                                "end": 172
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "flags": 128,
                                                "start": 173,
                                                "end": 174
                                            },
                                            "flags": 128,
                                            "start": 165,
                                            "end": 174
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 768,
                                                    "start": 174,
                                                    "end": 175
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 12,
                                                    "start": 175,
                                                    "end": 175
                                                },
                                                "flags": 256,
                                                "start": 174,
                                                "end": 175
                                            },
                                            "flags": 128,
                                            "start": 174,
                                            "end": 175
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 175
                                },
                                "flags": 256,
                                "start": 40,
                                "end": 176
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 26,
                            "end": 176
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 176,
                                "end": 186
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 186,
                                "end": 188
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 188,
                                "end": 190
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
                                                    "flags": 768,
                                                    "start": 191,
                                                    "end": 192
                                                },
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 768,
                                                        "start": 192,
                                                        "end": 202
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 768,
                                                        "start": 202,
                                                        "end": 204
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 204,
                                                        "end": 206
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "multiline": false,
                                                            "flags": 256,
                                                            "start": 207,
                                                            "end": 207
                                                        },
                                                        "flags": 256,
                                                        "start": 206,
                                                        "end": 208
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 256,
                                                    "start": 192,
                                                    "end": 208
                                                },
                                                "flags": 256,
                                                "start": 191,
                                                "end": 208
                                            },
                                            "flags": 128,
                                            "start": 191,
                                            "end": 208
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 208,
                                                "end": 218
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 218,
                                                "end": 220
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 220,
                                                "end": 222
                                            },
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
                                                "start": 222,
                                                "end": 222
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 208,
                                            "end": 222
                                        },
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 768,
                                                "start": 222,
                                                "end": 228
                                            },
                                            "expression": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 768,
                                                    "start": 228,
                                                    "end": 237
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 237,
                                                        "end": 237
                                                    },
                                                    "flags": 256,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 256,
                                                "start": 228,
                                                "end": 237
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "flags": 128,
                                                "start": 237,
                                                "end": 237
                                            },
                                            "flags": 128,
                                            "start": 222,
                                            "end": 237
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 191,
                                    "end": 237
                                },
                                "flags": 256,
                                "start": 190,
                                "end": 237
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 176,
                            "end": 237
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 26,
                    "end": 237
                },
                "flags": 256,
                "start": 25,
                "end": 237
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 11,
            "end": 237
        }
    ],
    "isModule": true,
    "text": "function f(\n\nfunction f(){\n\nfunction f(){\n\nfunction f({}\nfunction f(){}\n\nasync function f(){}\n\n function !f(){}\n\n\n function f(!{}\n function f(!a switch foo try catch switch){!}\n function f(){!\n function f(){}\n function f()switch function\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 238
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 11, end: 21
✖ ',' expected - start: 56, end: 65
✖ Unexpected token. - start: 56, end: 65
✖ Binding identifier expected - start: 104, end: 106
✖ Unexpected token. - start: 104, end: 106
✖ Unexpected token. - start: 126, end: 127
✖ Unexpected token. - start: 142, end: 143
✖ Expression expected - start: 172, end: 173
✖ Expression expected - start: 175, end: 176
✖ Unexpected token. - start: 222, end: 228
✖ Unexpected token. - start: 237, end: 238

```

