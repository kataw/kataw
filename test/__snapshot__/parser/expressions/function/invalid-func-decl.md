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
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 11
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 11
        },
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 21,
                "end": 23
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 24,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 36,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 39,
                                "end": 40
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
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
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 55,
                                                                "end": 55
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 54,
                                                            "end": 56
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 54,
                                                "end": 65
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 56
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 56,
                                                "end": 56
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 41,
                                            "end": 56
                                        },
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 68,
                                                "end": 69
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 70,
                                                    "end": 70
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 56,
                                            "end": 71
                                        },
                                        {
                                            "kind": 176,
                                            "asyncToken": {
                                                "kind": 82031,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 71,
                                                "end": 78
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 90,
                                                "end": 91
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 91,
                                                "end": 93
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 1280,
                                            "start": 71,
                                            "end": 93
                                        },
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 104,
                                                    "end": 104
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 93,
                                            "end": 104
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 104,
                                                    "end": 106
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "f",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 106,
                                                        "end": 107
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 108,
                                                        "end": 108
                                                    },
                                                    "flags": 256,
                                                    "start": 106,
                                                    "end": 109
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 104,
                                                "end": 109
                                            },
                                            "autofix": 0,
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
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 110,
                                                "end": 110
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 109,
                                            "end": 111
                                        },
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 123,
                                                "end": 125
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 126,
                                                "end": 127
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 126,
                                                    "end": 126
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 111,
                                            "end": 126
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "autofix": 0,
                                                    "flags": 0,
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
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 128,
                                                        "end": 128
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 127,
                                                    "end": 129
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 126,
                                                "end": 129
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 126,
                                            "end": 129
                                        },
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 139,
                                                "end": 141
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 142,
                                                "end": 143
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 142,
                                                    "end": 142
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 142,
                                                "end": 142
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 129,
                                            "end": 142
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 142,
                                                    "end": 143
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 143,
                                                    "end": 144
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 142,
                                                "end": 144
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 142,
                                            "end": 144
                                        },
                                        {
                                            "kind": 160,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 151,
                                                "end": 155
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 155,
                                                "end": 155
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 144,
                                            "end": 155
                                        },
                                        {
                                            "kind": 159,
                                            "block": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "multiLine": false,
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 159,
                                                    "end": 159
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 159,
                                                "end": 159
                                            },
                                            "catchClause": {
                                                "kind": 173,
                                                "catchParameter": null,
                                                "block": {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [],
                                                        "multiLine": false,
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 165,
                                                        "end": 165
                                                    },
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 165,
                                                    "end": 165
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 159,
                                                "end": 165
                                            },
                                            "finallyBlock": null,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 155,
                                            "end": 165
                                        },
                                        {
                                            "kind": 160,
                                            "expression": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 172,
                                                "end": 172
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 173,
                                                "end": 174
                                            },
                                            "autofix": 0,
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
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 174,
                                                    "end": 175
                                                },
                                                "expression": {
                                                    "kind": 253,
                                                    "text": "",
                                                    "autofix": 0,
                                                    "flags": 12,
                                                    "start": 175,
                                                    "end": 175
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 174,
                                                "end": 175
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 174,
                                            "end": 175
                                        }
                                    ],
                                    "multiline": true,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 175
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 40,
                                "end": 176
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 26,
                            "end": 176
                        },
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 186,
                                "end": 188
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 189,
                                "end": 190
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 191,
                                                    "end": 192
                                                },
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncToken": null,
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 81921,
                                                        "value": "f",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 202,
                                                        "end": 204
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 205,
                                                        "end": 206
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 207,
                                                            "end": 207
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 206,
                                                        "end": 208
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 192,
                                                    "end": 208
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 191,
                                                "end": 208
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 191,
                                            "end": 208
                                        },
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 218,
                                                "end": 220
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 221,
                                                "end": 222
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 222,
                                                    "end": 222
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 222,
                                                "end": 222
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 208,
                                            "end": 222
                                        },
                                        {
                                            "kind": 160,
                                            "expression": {
                                                "kind": 177,
                                                "asyncToken": null,
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 253,
                                                    "text": "",
                                                    "autofix": 0,
                                                    "flags": 12,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 237,
                                                        "end": 237
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 237,
                                                    "end": 237
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 228,
                                                "end": 237
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 237,
                                                "end": 237
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 222,
                                            "end": 237
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 191,
                                    "end": 237
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 190,
                                "end": 237
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 176,
                            "end": 237
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 26,
                    "end": 237
                },
                "autofix": 0,
                "flags": 256,
                "start": 25,
                "end": 237
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 11,
            "end": 237
        }
    ],
    "isModule": true,
    "text": "function f(\n\nfunction f(){\n\nfunction f(){\n\nfunction f({}\nfunction f(){}\n\nasync function f(){}\n\n function !f(){}\n\n\n function f(!{}\n function f(!a switch foo try catch switch){!}\n function f(){!\n function f(){}\n function f()switch function\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 56,
            "end": 65
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 56,
            "end": 65
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 56,
            "end": 65
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 56,
            "end": 65
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 104,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 104,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 104,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 104,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 109,
            "end": 110
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 126,
            "end": 127
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 126,
            "end": 127
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 126,
            "end": 127
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 142,
            "end": 143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 142,
            "end": 143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 142,
            "end": 143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 144,
            "end": 151
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 151,
            "end": 155
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 155,
            "end": 159
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 155,
            "end": 159
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 155,
            "end": 159
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 159,
            "end": 165
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 165,
            "end": 172
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 172,
            "end": 173
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 172,
            "end": 173
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 174,
            "end": 175
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 175,
            "end": 176
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 222,
            "end": 228
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 222,
            "end": 228
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 228,
            "end": 237
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 238
        }
    ],
    "start": 0,
    "end": 238
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

