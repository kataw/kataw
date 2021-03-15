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
    "kind": 2243,
    "source": "function f(\n\nfunction f(){\n\nfunction f(){\n\nfunction f({}\nfunction f(){}\n\nasync function f(){}\n\n function !f(){}\n\n\n function f(!{}\n function f(!a switch foo try catch switch){!}\n function f(){!\n function f(){}\n function f()switch function\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 21
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 11
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 21,
                "end": 23
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 25
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 36,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 40
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 264284,
                                            "name": {
                                                "kind": 131102,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 16473,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 33554598,
                                                            "propertyList": {
                                                                "kind": 33,
                                                                "properties": [],
                                                                "multiline": false,
                                                                "trailingComma": false,
                                                                "transformFlags": 1025,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "start": 55,
                                                                "end": 55
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 54,
                                                            "end": 56
                                                        },
                                                        "isOptional": false,
                                                        "type": null,
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 54,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32769,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 54,
                                                "end": 65
                                            },
                                            "type": null,
                                            "contents": null,
                                            "typeParameters": null,
                                            "flags": 32769,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 41,
                                            "end": 56
                                        },
                                        {
                                            "kind": 264284,
                                            "name": {
                                                "kind": 131102,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 68,
                                                "end": 69
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 70
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 69,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "flags": 32769,
                                            "symbol": null,
                                            "transformFlags": 256,
                                            "start": 56,
                                            "end": 71
                                        },
                                        {
                                            "kind": 1312785,
                                            "name": {
                                                "kind": 131102,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 90,
                                                "end": 91
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 91,
                                                "end": 93
                                            },
                                            "typeParameters": null,
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 260,
                                            "start": 71,
                                            "end": 93
                                        },
                                        {
                                            "kind": 264284,
                                            "name": {
                                                "kind": 131102,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 1073807915,
                                                                "expression": {
                                                                    "kind": 196712,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 106,
                                                                    "end": 107
                                                                },
                                                                "typeArguments": null,
                                                                "argumentList": {
                                                                    "kind": 3,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "transformFlags": 0,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "start": 109,
                                                                    "end": 109
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 107,
                                                                "end": 109
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 106,
                                                            "end": 109
                                                        },
                                                        {
                                                            "kind": 2099237,
                                                            "block": {
                                                                "kind": 2084,
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 110,
                                                                "end": 110
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 109,
                                                            "end": 111
                                                        },
                                                        {
                                                            "kind": 264284,
                                                            "name": {
                                                                "kind": 131102,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 123,
                                                                "end": 125
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 126,
                                                                "end": 127
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2099237,
                                                                            "block": {
                                                                                "kind": 2084,
                                                                                "statements": [],
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 128,
                                                                                "end": 128
                                                                            },
                                                                            "flags": 32768,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 127,
                                                                            "end": 129
                                                                        },
                                                                        {
                                                                            "kind": 264284,
                                                                            "name": {
                                                                                "kind": 131102,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 139,
                                                                                "end": 141
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 90,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 142,
                                                                                "end": 143
                                                                            },
                                                                            "type": null,
                                                                            "contents": {
                                                                                "kind": 91,
                                                                                "functionStatementList": {
                                                                                    "kind": 94,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 2097233,
                                                                                            "expression": {
                                                                                                "kind": 196712,
                                                                                                "text": "a",
                                                                                                "rawText": "a",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 143,
                                                                                                "end": 144
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 143,
                                                                                            "end": 144
                                                                                        },
                                                                                        {
                                                                                            "kind": 2097362,
                                                                                            "expression": {
                                                                                                "kind": 196712,
                                                                                                "text": "foo",
                                                                                                "rawText": "foo",
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 151,
                                                                                                "end": 155
                                                                                            },
                                                                                            "caseBlock": {
                                                                                                "kind": 2093,
                                                                                                "clauses": [],
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 155,
                                                                                                "end": 155
                                                                                            },
                                                                                            "flags": 1,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 144,
                                                                                            "end": 155
                                                                                        },
                                                                                        {
                                                                                            "kind": 2097375,
                                                                                            "block": {
                                                                                                "kind": 2099237,
                                                                                                "block": {
                                                                                                    "kind": 2084,
                                                                                                    "statements": [],
                                                                                                    "multiline": false,
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 159,
                                                                                                    "end": 159
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 159,
                                                                                                "end": 159
                                                                                            },
                                                                                            "catchClause": {
                                                                                                "kind": 2095,
                                                                                                "catchParameter": null,
                                                                                                "block": {
                                                                                                    "kind": 2099237,
                                                                                                    "block": {
                                                                                                        "kind": 2084,
                                                                                                        "statements": [],
                                                                                                        "multiline": false,
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 165,
                                                                                                        "end": 165
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 165,
                                                                                                    "end": 165
                                                                                                },
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 16,
                                                                                                "start": 159,
                                                                                                "end": 165
                                                                                            },
                                                                                            "finallyBlock": null,
                                                                                            "flags": 1,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 16,
                                                                                            "start": 155,
                                                                                            "end": 165
                                                                                        },
                                                                                        {
                                                                                            "kind": 2097362,
                                                                                            "expression": {
                                                                                                "kind": 131322,
                                                                                                "text": "",
                                                                                                "flags": 3,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 172,
                                                                                                "end": 172
                                                                                            },
                                                                                            "caseBlock": {
                                                                                                "kind": 2093,
                                                                                                "clauses": [],
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 173,
                                                                                                "end": 174
                                                                                            },
                                                                                            "flags": 1,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 165,
                                                                                            "end": 174
                                                                                        },
                                                                                        {
                                                                                            "kind": 2097233,
                                                                                            "expression": {
                                                                                                "kind": 65774,
                                                                                                "operator": "!",
                                                                                                "operand": {
                                                                                                    "kind": 131322,
                                                                                                    "text": "",
                                                                                                    "flags": 3,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 175,
                                                                                                    "end": 175
                                                                                                },
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 174,
                                                                                                "end": 175
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 174,
                                                                                            "end": 175
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "flags": 1,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 143,
                                                                                    "end": 175
                                                                                },
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 142,
                                                                                "end": 176
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 32768,
                                                                            "symbol": null,
                                                                            "transformFlags": 256,
                                                                            "start": 129,
                                                                            "end": 176
                                                                        },
                                                                        {
                                                                            "kind": 264284,
                                                                            "name": {
                                                                                "kind": 131102,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 186,
                                                                                "end": 188
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 90,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 189,
                                                                                "end": 190
                                                                            },
                                                                            "type": null,
                                                                            "contents": {
                                                                                "kind": 91,
                                                                                "functionStatementList": {
                                                                                    "kind": 94,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 2097233,
                                                                                            "expression": {
                                                                                                "kind": 65774,
                                                                                                "operator": "!",
                                                                                                "operand": {
                                                                                                    "kind": 8456285,
                                                                                                    "name": {
                                                                                                        "kind": 131102,
                                                                                                        "text": "f",
                                                                                                        "rawText": "f",
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 1025,
                                                                                                        "start": 202,
                                                                                                        "end": 204
                                                                                                    },
                                                                                                    "formalParameters": {
                                                                                                        "kind": 90,
                                                                                                        "formalParameterList": [],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 205,
                                                                                                        "end": 206
                                                                                                    },
                                                                                                    "contents": {
                                                                                                        "kind": 91,
                                                                                                        "functionStatementList": {
                                                                                                            "kind": 94,
                                                                                                            "statements": [],
                                                                                                            "multiline": false,
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 207,
                                                                                                            "end": 207
                                                                                                        },
                                                                                                        "flags": 32768,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 206,
                                                                                                        "end": 208
                                                                                                    },
                                                                                                    "typeParameters": null,
                                                                                                    "type": null,
                                                                                                    "flags": 32768,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 192,
                                                                                                    "end": 208
                                                                                                },
                                                                                                "flags": 32768,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 191,
                                                                                                "end": 208
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 191,
                                                                                            "end": 208
                                                                                        },
                                                                                        {
                                                                                            "kind": 264284,
                                                                                            "name": {
                                                                                                "kind": 131102,
                                                                                                "text": "f",
                                                                                                "rawText": "f",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 1025,
                                                                                                "start": 218,
                                                                                                "end": 220
                                                                                            },
                                                                                            "formalParameters": {
                                                                                                "kind": 90,
                                                                                                "formalParameterList": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 221,
                                                                                                "end": 222
                                                                                            },
                                                                                            "type": null,
                                                                                            "contents": {
                                                                                                "kind": 91,
                                                                                                "functionStatementList": {
                                                                                                    "kind": 94,
                                                                                                    "statements": [
                                                                                                        {
                                                                                                            "kind": 264284,
                                                                                                            "name": {
                                                                                                                "kind": 131102,
                                                                                                                "text": "",
                                                                                                                "rawText": "",
                                                                                                                "flags": 32769,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 1025,
                                                                                                                "start": 237,
                                                                                                                "end": 237
                                                                                                            },
                                                                                                            "formalParameters": {
                                                                                                                "kind": 90,
                                                                                                                "formalParameterList": [],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32769,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 237,
                                                                                                                "end": 237
                                                                                                            },
                                                                                                            "type": null,
                                                                                                            "contents": null,
                                                                                                            "typeParameters": null,
                                                                                                            "flags": 32769,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 2097152,
                                                                                                            "start": 228,
                                                                                                            "end": 237
                                                                                                        }
                                                                                                    ],
                                                                                                    "multiline": false,
                                                                                                    "flags": 32769,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 228,
                                                                                                    "end": 237
                                                                                                },
                                                                                                "flags": 32769,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 222,
                                                                                                "end": 237
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 32769,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 256,
                                                                                            "start": 208,
                                                                                            "end": 237
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "flags": 32769,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 191,
                                                                                    "end": 237
                                                                                },
                                                                                "flags": 32769,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 190,
                                                                                "end": 237
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 32769,
                                                                            "symbol": null,
                                                                            "transformFlags": 256,
                                                                            "start": 176,
                                                                            "end": 237
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 32769,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 127,
                                                                    "end": 237
                                                                },
                                                                "flags": 32769,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 126,
                                                                "end": 237
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 32769,
                                                            "symbol": null,
                                                            "transformFlags": 256,
                                                            "start": 111,
                                                            "end": 237
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 32769,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 106,
                                                    "end": 237
                                                },
                                                "flags": 32769,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 104,
                                                "end": 237
                                            },
                                            "typeParameters": null,
                                            "flags": 32769,
                                            "symbol": null,
                                            "transformFlags": 256,
                                            "start": 93,
                                            "end": 237
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32769,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 237
                                },
                                "flags": 32769,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 237
                            },
                            "typeParameters": null,
                            "flags": 32769,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 26,
                            "end": 237
                        }
                    ],
                    "multiline": true,
                    "flags": 32769,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 237
                },
                "flags": 32769,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 237
            },
            "typeParameters": null,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 256,
            "start": 11,
            "end": 237
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 105,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 109,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 126,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 142,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 145,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 152,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 156,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 160,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 166,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 172,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 174,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 175,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 237,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

