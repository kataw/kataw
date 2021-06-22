# Kataw parser test case

## Input

`````js
function f(arg) {function h() { g(arg) }; h()}

function f(arg=1) {g(arg)}

function f(arg, arguments) {g(arg); arguments[0] = 42; g(arg)}

function f(...arg) {g(arg); arguments[0] = 42; g(arg)}

function f(arg) {g(arg); arg = 42; g(arg)}

function f(arg) {g(arg); eval('arg = 42'); g(arg)}

function f(arg) {g(arg); var arg = 42; g(arg)}

function f(arg, x=1) {g(arg); arg = 42; g(arg)}

function f(arg, ...x) {g(arg); arg = 42; g(arg)}

function f(arg=1) {g(arg); arg = 42; g(arg)}

function f(arg) {'use strict'; g(arg); arg = 42; g(arg)}

function f(arg, {a=(g(arg), arg=42)}) {g(arg)}

function f(arg) {g(arg); g(function() {arg = 42}); g(arg)}

function f(arg) {g(arg); g(() => arg = 42); g(arg)}

function f(arg) {g(arg); g(() => eval('arg = 42')); g(arg)}

function f(...arg) {g(arg); eval('arg = 42'); g(arg)}

function f(arg) {g(arg); arguments[0] = 42; g(arg)}

function f(arg) {g(arg); h(arguments); g(arg)}

function f(arg) {g(arg); eval('arguments[0] = 42'); g(arg)}

function f(arg) {g(arg); g(() => arguments[0] = 42); g(arg)}

function f({x:arg = 1}, {y:b=(arg=2)}) {}

function f({x:arg = (arg = 2)}) {}

`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 15
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
                                "flags": 64,
                                "start": 17,
                                "end": 25
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "h",
                                "rawText": "h",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 27,
                                "end": 29
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
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 33
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "arg",
                                                            "rawText": "arg",
                                                            "flags": 96,
                                                            "start": 34,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 34,
                                                    "end": 37
                                                },
                                                "flags": 268435488,
                                                "start": 31,
                                                "end": 38
                                            },
                                            "flags": 16,
                                            "start": 31,
                                            "end": 38
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 31,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 40
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 17,
                            "end": 40
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 40,
                            "end": 41
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "h",
                                    "rawText": "h",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 43
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 268435488,
                                "start": 41,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 41,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "start": 17,
                    "end": 45
                },
                "flags": 32,
                "start": 15,
                "end": 46
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 46
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 46,
                "end": 56
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 56,
                "end": 58
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 96,
                            "start": 59,
                            "end": 62
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 63,
                            "end": 64
                        },
                        "flags": 34,
                        "start": 59,
                        "end": 64
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 58,
                "end": 65
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 67,
                                    "end": 68
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 69,
                                            "end": 72
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 69,
                                    "end": 72
                                },
                                "flags": 268435488,
                                "start": 67,
                                "end": 73
                            },
                            "flags": 16,
                            "start": 67,
                            "end": 73
                        }
                    ],
                    "flags": 32,
                    "start": 67,
                    "end": 73
                },
                "flags": 32,
                "start": 65,
                "end": 74
            },
            "returnType": null,
            "flags": 16,
            "start": 46,
            "end": 74
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 74,
                "end": 84
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 84,
                "end": 86
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 87,
                        "end": 90
                    },
                    {
                        "kind": 134299649,
                        "text": "arguments",
                        "rawText": "arguments",
                        "flags": 96,
                        "start": 91,
                        "end": 101
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 86,
                "end": 102
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 104,
                                    "end": 105
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 106,
                                            "end": 109
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 106,
                                    "end": 109
                                },
                                "flags": 268435488,
                                "start": 104,
                                "end": 110
                            },
                            "flags": 16,
                            "start": 104,
                            "end": 111
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 111,
                                        "end": 121
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 122,
                                        "end": 123
                                    },
                                    "flags": 536870944,
                                    "start": 111,
                                    "end": 124
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 124,
                                    "end": 126
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 126,
                                    "end": 129
                                },
                                "flags": 32,
                                "start": 111,
                                "end": 129
                            },
                            "flags": 16,
                            "start": 111,
                            "end": 130
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 130,
                                    "end": 132
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 133,
                                            "end": 136
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 133,
                                    "end": 136
                                },
                                "flags": 268435488,
                                "start": 130,
                                "end": 137
                            },
                            "flags": 16,
                            "start": 130,
                            "end": 137
                        }
                    ],
                    "flags": 32,
                    "start": 104,
                    "end": 137
                },
                "flags": 32,
                "start": 102,
                "end": 138
            },
            "returnType": null,
            "flags": 16,
            "start": 74,
            "end": 138
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 138,
                "end": 148
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 148,
                "end": 150
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 151,
                            "end": 154
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 96,
                            "start": 154,
                            "end": 157
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 151,
                        "end": 157
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 150,
                "end": 158
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 160,
                                    "end": 161
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 162,
                                            "end": 165
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 162,
                                    "end": 165
                                },
                                "flags": 268435488,
                                "start": 160,
                                "end": 166
                            },
                            "flags": 16,
                            "start": 160,
                            "end": 167
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 167,
                                        "end": 177
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 178,
                                        "end": 179
                                    },
                                    "flags": 536870944,
                                    "start": 167,
                                    "end": 180
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 180,
                                    "end": 182
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 182,
                                    "end": 185
                                },
                                "flags": 32,
                                "start": 167,
                                "end": 185
                            },
                            "flags": 16,
                            "start": 167,
                            "end": 186
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 186,
                                    "end": 188
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 189,
                                            "end": 192
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 189,
                                    "end": 192
                                },
                                "flags": 268435488,
                                "start": 186,
                                "end": 193
                            },
                            "flags": 16,
                            "start": 186,
                            "end": 193
                        }
                    ],
                    "flags": 32,
                    "start": 160,
                    "end": 193
                },
                "flags": 32,
                "start": 158,
                "end": 194
            },
            "returnType": null,
            "flags": 16,
            "start": 138,
            "end": 194
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 194,
                "end": 204
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 204,
                "end": 206
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 207,
                        "end": 210
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 206,
                "end": 211
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 213,
                                    "end": 214
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 215,
                                            "end": 218
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 215,
                                    "end": 218
                                },
                                "flags": 268435488,
                                "start": 213,
                                "end": 219
                            },
                            "flags": 16,
                            "start": 213,
                            "end": 220
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arg",
                                    "rawText": "arg",
                                    "flags": 96,
                                    "start": 220,
                                    "end": 224
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 224,
                                    "end": 226
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 226,
                                    "end": 229
                                },
                                "flags": 32,
                                "start": 220,
                                "end": 229
                            },
                            "flags": 16,
                            "start": 220,
                            "end": 230
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 230,
                                    "end": 232
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 233,
                                            "end": 236
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 233,
                                    "end": 236
                                },
                                "flags": 268435488,
                                "start": 230,
                                "end": 237
                            },
                            "flags": 16,
                            "start": 230,
                            "end": 237
                        }
                    ],
                    "flags": 32,
                    "start": 213,
                    "end": 237
                },
                "flags": 32,
                "start": 211,
                "end": 238
            },
            "returnType": null,
            "flags": 16,
            "start": 194,
            "end": 238
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 238,
                "end": 248
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 248,
                "end": 250
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 251,
                        "end": 254
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 250,
                "end": 255
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 257,
                                    "end": 258
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 259,
                                            "end": 262
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 259,
                                    "end": 262
                                },
                                "flags": 268435488,
                                "start": 257,
                                "end": 263
                            },
                            "flags": 16,
                            "start": 257,
                            "end": 264
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 264,
                                    "end": 269
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "arg = 42",
                                            "rawText": "'arg = 42'",
                                            "flags": 4194400,
                                            "start": 270,
                                            "end": 280
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 270,
                                    "end": 280
                                },
                                "flags": 268435488,
                                "start": 264,
                                "end": 281
                            },
                            "flags": 16,
                            "start": 264,
                            "end": 282
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 282,
                                    "end": 284
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 285,
                                            "end": 288
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 285,
                                    "end": 288
                                },
                                "flags": 268435488,
                                "start": 282,
                                "end": 289
                            },
                            "flags": 16,
                            "start": 282,
                            "end": 289
                        }
                    ],
                    "flags": 32,
                    "start": 257,
                    "end": 289
                },
                "flags": 32,
                "start": 255,
                "end": 290
            },
            "returnType": null,
            "flags": 16,
            "start": 238,
            "end": 290
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 290,
                "end": 300
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 300,
                "end": 302
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 303,
                        "end": 306
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 302,
                "end": 307
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 309,
                                    "end": 310
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 311,
                                            "end": 314
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 311,
                                    "end": 314
                                },
                                "flags": 268435488,
                                "start": 309,
                                "end": 315
                            },
                            "flags": 16,
                            "start": 309,
                            "end": 316
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 316,
                                "end": 320
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 320,
                                            "end": 324
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 326,
                                            "end": 329
                                        },
                                        "flags": 16,
                                        "start": 320,
                                        "end": 329
                                    }
                                ],
                                "flags": 16,
                                "start": 320,
                                "end": 329
                            },
                            "flags": 16,
                            "start": 316,
                            "end": 330
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 330,
                                    "end": 332
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 333,
                                            "end": 336
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 333,
                                    "end": 336
                                },
                                "flags": 268435488,
                                "start": 330,
                                "end": 337
                            },
                            "flags": 16,
                            "start": 330,
                            "end": 337
                        }
                    ],
                    "flags": 32,
                    "start": 309,
                    "end": 337
                },
                "flags": 32,
                "start": 307,
                "end": 338
            },
            "returnType": null,
            "flags": 16,
            "start": 290,
            "end": 338
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 338,
                "end": 348
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 348,
                "end": 350
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 351,
                        "end": 354
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 355,
                            "end": 357
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 358,
                            "end": 359
                        },
                        "flags": 34,
                        "start": 355,
                        "end": 359
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 350,
                "end": 360
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 362,
                                    "end": 363
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 364,
                                            "end": 367
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 364,
                                    "end": 367
                                },
                                "flags": 268435488,
                                "start": 362,
                                "end": 368
                            },
                            "flags": 16,
                            "start": 362,
                            "end": 369
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arg",
                                    "rawText": "arg",
                                    "flags": 96,
                                    "start": 369,
                                    "end": 373
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 373,
                                    "end": 375
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 375,
                                    "end": 378
                                },
                                "flags": 32,
                                "start": 369,
                                "end": 378
                            },
                            "flags": 16,
                            "start": 369,
                            "end": 379
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 379,
                                    "end": 381
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 382,
                                            "end": 385
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 382,
                                    "end": 385
                                },
                                "flags": 268435488,
                                "start": 379,
                                "end": 386
                            },
                            "flags": 16,
                            "start": 379,
                            "end": 386
                        }
                    ],
                    "flags": 32,
                    "start": 362,
                    "end": 386
                },
                "flags": 32,
                "start": 360,
                "end": 387
            },
            "returnType": null,
            "flags": 16,
            "start": 338,
            "end": 387
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 387,
                "end": 397
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 397,
                "end": 399
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 400,
                        "end": 403
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 404,
                            "end": 408
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 408,
                            "end": 409
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 404,
                        "end": 409
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 399,
                "end": 410
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 412,
                                    "end": 413
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 414,
                                            "end": 417
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 414,
                                    "end": 417
                                },
                                "flags": 268435488,
                                "start": 412,
                                "end": 418
                            },
                            "flags": 16,
                            "start": 412,
                            "end": 419
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arg",
                                    "rawText": "arg",
                                    "flags": 96,
                                    "start": 419,
                                    "end": 423
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 423,
                                    "end": 425
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 425,
                                    "end": 428
                                },
                                "flags": 32,
                                "start": 419,
                                "end": 428
                            },
                            "flags": 16,
                            "start": 419,
                            "end": 429
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 429,
                                    "end": 431
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 432,
                                            "end": 435
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 432,
                                    "end": 435
                                },
                                "flags": 268435488,
                                "start": 429,
                                "end": 436
                            },
                            "flags": 16,
                            "start": 429,
                            "end": 436
                        }
                    ],
                    "flags": 32,
                    "start": 412,
                    "end": 436
                },
                "flags": 32,
                "start": 410,
                "end": 437
            },
            "returnType": null,
            "flags": 16,
            "start": 387,
            "end": 437
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 437,
                "end": 447
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 447,
                "end": 449
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 96,
                            "start": 450,
                            "end": 453
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 454,
                            "end": 455
                        },
                        "flags": 34,
                        "start": 450,
                        "end": 455
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 449,
                "end": 456
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 458,
                                    "end": 459
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 460,
                                            "end": 463
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 460,
                                    "end": 463
                                },
                                "flags": 268435488,
                                "start": 458,
                                "end": 464
                            },
                            "flags": 16,
                            "start": 458,
                            "end": 465
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arg",
                                    "rawText": "arg",
                                    "flags": 96,
                                    "start": 465,
                                    "end": 469
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 469,
                                    "end": 471
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 471,
                                    "end": 474
                                },
                                "flags": 32,
                                "start": 465,
                                "end": 474
                            },
                            "flags": 16,
                            "start": 465,
                            "end": 475
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 475,
                                    "end": 477
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 478,
                                            "end": 481
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 478,
                                    "end": 481
                                },
                                "flags": 268435488,
                                "start": 475,
                                "end": 482
                            },
                            "flags": 16,
                            "start": 475,
                            "end": 482
                        }
                    ],
                    "flags": 32,
                    "start": 458,
                    "end": 482
                },
                "flags": 32,
                "start": 456,
                "end": 483
            },
            "returnType": null,
            "flags": 16,
            "start": 437,
            "end": 483
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 483,
                "end": 493
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 493,
                "end": 495
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 496,
                        "end": 499
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 495,
                "end": 500
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 502,
                            "end": 514
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 515,
                                    "end": 517
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 518,
                                            "end": 521
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 518,
                                    "end": 521
                                },
                                "flags": 268435488,
                                "start": 515,
                                "end": 522
                            },
                            "flags": 16,
                            "start": 515,
                            "end": 523
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arg",
                                    "rawText": "arg",
                                    "flags": 96,
                                    "start": 523,
                                    "end": 527
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 527,
                                    "end": 529
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 529,
                                    "end": 532
                                },
                                "flags": 32,
                                "start": 523,
                                "end": 532
                            },
                            "flags": 16,
                            "start": 523,
                            "end": 533
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 533,
                                    "end": 535
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 536,
                                            "end": 539
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 536,
                                    "end": 539
                                },
                                "flags": 268435488,
                                "start": 533,
                                "end": 540
                            },
                            "flags": 16,
                            "start": 533,
                            "end": 540
                        }
                    ],
                    "flags": 4194336,
                    "start": 502,
                    "end": 540
                },
                "flags": 32,
                "start": 500,
                "end": 541
            },
            "returnType": null,
            "flags": 16,
            "start": 483,
            "end": 541
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 541,
                "end": 551
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 551,
                "end": 553
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 554,
                        "end": 557
                    },
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 560,
                                        "end": 561
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 132,
                                            "expressions": [
                                                {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "g",
                                                        "rawText": "g",
                                                        "flags": 96,
                                                        "start": 563,
                                                        "end": 564
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "arg",
                                                                "rawText": "arg",
                                                                "flags": 96,
                                                                "start": 565,
                                                                "end": 568
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 565,
                                                        "end": 568
                                                    },
                                                    "flags": 268435488,
                                                    "start": 562,
                                                    "end": 569
                                                },
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "arg",
                                                        "rawText": "arg",
                                                        "flags": 96,
                                                        "start": 570,
                                                        "end": 574
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 574,
                                                        "end": 575
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 575,
                                                        "end": 577
                                                    },
                                                    "flags": 32,
                                                    "start": 562,
                                                    "end": 577
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 562,
                                            "end": 578
                                        },
                                        "flags": 32,
                                        "start": 562,
                                        "end": 578
                                    },
                                    "flags": 0,
                                    "start": 560,
                                    "end": 578
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 560,
                            "end": 578
                        },
                        "flags": 32,
                        "start": 558,
                        "end": 579
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 553,
                "end": 580
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 582,
                                    "end": 583
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 584,
                                            "end": 587
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 584,
                                    "end": 587
                                },
                                "flags": 268435488,
                                "start": 582,
                                "end": 588
                            },
                            "flags": 16,
                            "start": 582,
                            "end": 588
                        }
                    ],
                    "flags": 32,
                    "start": 582,
                    "end": 588
                },
                "flags": 32,
                "start": 580,
                "end": 589
            },
            "returnType": null,
            "flags": 16,
            "start": 541,
            "end": 589
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 589,
                "end": 599
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 599,
                "end": 601
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 602,
                        "end": 605
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 601,
                "end": 606
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 608,
                                    "end": 609
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 610,
                                            "end": 613
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 610,
                                    "end": 613
                                },
                                "flags": 268435488,
                                "start": 608,
                                "end": 614
                            },
                            "flags": 16,
                            "start": 608,
                            "end": 615
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 615,
                                    "end": 617
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 618,
                                                "end": 626
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 626,
                                                "end": 628
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
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "arg",
                                                                    "rawText": "arg",
                                                                    "flags": 96,
                                                                    "start": 630,
                                                                    "end": 633
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 633,
                                                                    "end": 635
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 96,
                                                                    "start": 635,
                                                                    "end": 638
                                                                },
                                                                "flags": 32,
                                                                "start": 630,
                                                                "end": 638
                                                            },
                                                            "flags": 16,
                                                            "start": 630,
                                                            "end": 638
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 630,
                                                    "end": 638
                                                },
                                                "flags": 32,
                                                "start": 628,
                                                "end": 639
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 618,
                                            "end": 639
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 618,
                                    "end": 639
                                },
                                "flags": 268435488,
                                "start": 615,
                                "end": 640
                            },
                            "flags": 16,
                            "start": 615,
                            "end": 641
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 641,
                                    "end": 643
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 644,
                                            "end": 647
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 644,
                                    "end": 647
                                },
                                "flags": 268435488,
                                "start": 641,
                                "end": 648
                            },
                            "flags": 16,
                            "start": 641,
                            "end": 648
                        }
                    ],
                    "flags": 32,
                    "start": 608,
                    "end": 648
                },
                "flags": 32,
                "start": 606,
                "end": 649
            },
            "returnType": null,
            "flags": 16,
            "start": 589,
            "end": 649
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 649,
                "end": 659
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 659,
                "end": 661
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 662,
                        "end": 665
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 661,
                "end": 666
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 668,
                                    "end": 669
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 670,
                                            "end": 673
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 670,
                                    "end": 673
                                },
                                "flags": 268435488,
                                "start": 668,
                                "end": 674
                            },
                            "flags": 16,
                            "start": 668,
                            "end": 675
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 675,
                                    "end": 677
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 679,
                                                "end": 679
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 680,
                                                "end": 683
                                            },
                                            "contents": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "arg",
                                                    "rawText": "arg",
                                                    "flags": 96,
                                                    "start": 683,
                                                    "end": 687
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 687,
                                                    "end": 689
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 96,
                                                    "start": 689,
                                                    "end": 692
                                                },
                                                "flags": 32,
                                                "start": 683,
                                                "end": 692
                                            },
                                            "flags": 32,
                                            "start": 678,
                                            "end": 692
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 678,
                                    "end": 692
                                },
                                "flags": 268435488,
                                "start": 675,
                                "end": 693
                            },
                            "flags": 16,
                            "start": 675,
                            "end": 694
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 694,
                                    "end": 696
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 697,
                                            "end": 700
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 697,
                                    "end": 700
                                },
                                "flags": 268435488,
                                "start": 694,
                                "end": 701
                            },
                            "flags": 16,
                            "start": 694,
                            "end": 701
                        }
                    ],
                    "flags": 32,
                    "start": 668,
                    "end": 701
                },
                "flags": 32,
                "start": 666,
                "end": 702
            },
            "returnType": null,
            "flags": 16,
            "start": 649,
            "end": 702
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 702,
                "end": 712
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 712,
                "end": 714
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 715,
                        "end": 718
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 714,
                "end": 719
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 721,
                                    "end": 722
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 723,
                                            "end": 726
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 723,
                                    "end": 726
                                },
                                "flags": 268435488,
                                "start": 721,
                                "end": 727
                            },
                            "flags": 16,
                            "start": 721,
                            "end": 728
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 728,
                                    "end": 730
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 732,
                                                "end": 732
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 733,
                                                "end": 736
                                            },
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "eval",
                                                    "rawText": "eval",
                                                    "flags": 96,
                                                    "start": 736,
                                                    "end": 741
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "arg = 42",
                                                            "rawText": "'arg = 42'",
                                                            "flags": 4194400,
                                                            "start": 742,
                                                            "end": 752
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 742,
                                                    "end": 752
                                                },
                                                "flags": 268435488,
                                                "start": 736,
                                                "end": 753
                                            },
                                            "flags": 32,
                                            "start": 731,
                                            "end": 753
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 731,
                                    "end": 753
                                },
                                "flags": 268435488,
                                "start": 728,
                                "end": 754
                            },
                            "flags": 16,
                            "start": 728,
                            "end": 755
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 755,
                                    "end": 757
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 758,
                                            "end": 761
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 758,
                                    "end": 761
                                },
                                "flags": 268435488,
                                "start": 755,
                                "end": 762
                            },
                            "flags": 16,
                            "start": 755,
                            "end": 762
                        }
                    ],
                    "flags": 32,
                    "start": 721,
                    "end": 762
                },
                "flags": 32,
                "start": 719,
                "end": 763
            },
            "returnType": null,
            "flags": 16,
            "start": 702,
            "end": 763
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 763,
                "end": 773
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 773,
                "end": 775
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 776,
                            "end": 779
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 96,
                            "start": 779,
                            "end": 782
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 776,
                        "end": 782
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 775,
                "end": 783
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 785,
                                    "end": 786
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 787,
                                            "end": 790
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 787,
                                    "end": 790
                                },
                                "flags": 268435488,
                                "start": 785,
                                "end": 791
                            },
                            "flags": 16,
                            "start": 785,
                            "end": 792
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 792,
                                    "end": 797
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "arg = 42",
                                            "rawText": "'arg = 42'",
                                            "flags": 4194400,
                                            "start": 798,
                                            "end": 808
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 798,
                                    "end": 808
                                },
                                "flags": 268435488,
                                "start": 792,
                                "end": 809
                            },
                            "flags": 16,
                            "start": 792,
                            "end": 810
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 810,
                                    "end": 812
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 813,
                                            "end": 816
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 813,
                                    "end": 816
                                },
                                "flags": 268435488,
                                "start": 810,
                                "end": 817
                            },
                            "flags": 16,
                            "start": 810,
                            "end": 817
                        }
                    ],
                    "flags": 32,
                    "start": 785,
                    "end": 817
                },
                "flags": 32,
                "start": 783,
                "end": 818
            },
            "returnType": null,
            "flags": 16,
            "start": 763,
            "end": 818
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 818,
                "end": 828
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 828,
                "end": 830
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 831,
                        "end": 834
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 830,
                "end": 835
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 837,
                                    "end": 838
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 839,
                                            "end": 842
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 839,
                                    "end": 842
                                },
                                "flags": 268435488,
                                "start": 837,
                                "end": 843
                            },
                            "flags": 16,
                            "start": 837,
                            "end": 844
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 844,
                                        "end": 854
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 855,
                                        "end": 856
                                    },
                                    "flags": 536870944,
                                    "start": 844,
                                    "end": 857
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 857,
                                    "end": 859
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 96,
                                    "start": 859,
                                    "end": 862
                                },
                                "flags": 32,
                                "start": 844,
                                "end": 862
                            },
                            "flags": 16,
                            "start": 844,
                            "end": 863
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 863,
                                    "end": 865
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 866,
                                            "end": 869
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 866,
                                    "end": 869
                                },
                                "flags": 268435488,
                                "start": 863,
                                "end": 870
                            },
                            "flags": 16,
                            "start": 863,
                            "end": 870
                        }
                    ],
                    "flags": 32,
                    "start": 837,
                    "end": 870
                },
                "flags": 32,
                "start": 835,
                "end": 871
            },
            "returnType": null,
            "flags": 16,
            "start": 818,
            "end": 871
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 871,
                "end": 881
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 881,
                "end": 883
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 884,
                        "end": 887
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 883,
                "end": 888
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 890,
                                    "end": 891
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 892,
                                            "end": 895
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 892,
                                    "end": 895
                                },
                                "flags": 268435488,
                                "start": 890,
                                "end": 896
                            },
                            "flags": 16,
                            "start": 890,
                            "end": 897
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "h",
                                    "rawText": "h",
                                    "flags": 96,
                                    "start": 897,
                                    "end": 899
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arguments",
                                            "rawText": "arguments",
                                            "flags": 96,
                                            "start": 900,
                                            "end": 909
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 900,
                                    "end": 909
                                },
                                "flags": 268435488,
                                "start": 897,
                                "end": 910
                            },
                            "flags": 16,
                            "start": 897,
                            "end": 911
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 911,
                                    "end": 913
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 914,
                                            "end": 917
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 914,
                                    "end": 917
                                },
                                "flags": 268435488,
                                "start": 911,
                                "end": 918
                            },
                            "flags": 16,
                            "start": 911,
                            "end": 918
                        }
                    ],
                    "flags": 32,
                    "start": 890,
                    "end": 918
                },
                "flags": 32,
                "start": 888,
                "end": 919
            },
            "returnType": null,
            "flags": 16,
            "start": 871,
            "end": 919
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 919,
                "end": 929
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 929,
                "end": 931
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 932,
                        "end": 935
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 931,
                "end": 936
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 938,
                                    "end": 939
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 940,
                                            "end": 943
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 940,
                                    "end": 943
                                },
                                "flags": 268435488,
                                "start": 938,
                                "end": 944
                            },
                            "flags": 16,
                            "start": 938,
                            "end": 945
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 945,
                                    "end": 950
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "arguments[0] = 42",
                                            "rawText": "'arguments[0] = 42'",
                                            "flags": 4194400,
                                            "start": 951,
                                            "end": 970
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 951,
                                    "end": 970
                                },
                                "flags": 268435488,
                                "start": 945,
                                "end": 971
                            },
                            "flags": 16,
                            "start": 945,
                            "end": 972
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 972,
                                    "end": 974
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 975,
                                            "end": 978
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 975,
                                    "end": 978
                                },
                                "flags": 268435488,
                                "start": 972,
                                "end": 979
                            },
                            "flags": 16,
                            "start": 972,
                            "end": 979
                        }
                    ],
                    "flags": 32,
                    "start": 938,
                    "end": 979
                },
                "flags": 32,
                "start": 936,
                "end": 980
            },
            "returnType": null,
            "flags": 16,
            "start": 919,
            "end": 980
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 980,
                "end": 990
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 990,
                "end": 992
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "arg",
                        "rawText": "arg",
                        "flags": 96,
                        "start": 993,
                        "end": 996
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 992,
                "end": 997
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 999,
                                    "end": 1000
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 1001,
                                            "end": 1004
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1001,
                                    "end": 1004
                                },
                                "flags": 268435488,
                                "start": 999,
                                "end": 1005
                            },
                            "flags": 16,
                            "start": 999,
                            "end": 1006
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 1006,
                                    "end": 1008
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 1010,
                                                "end": 1010
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 1011,
                                                "end": 1014
                                            },
                                            "contents": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 130,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "arguments",
                                                        "rawText": "arguments",
                                                        "flags": 96,
                                                        "start": 1014,
                                                        "end": 1024
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "start": 1025,
                                                        "end": 1026
                                                    },
                                                    "flags": 536870944,
                                                    "start": 1014,
                                                    "end": 1027
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 1027,
                                                    "end": 1029
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 96,
                                                    "start": 1029,
                                                    "end": 1032
                                                },
                                                "flags": 32,
                                                "start": 1014,
                                                "end": 1032
                                            },
                                            "flags": 32,
                                            "start": 1009,
                                            "end": 1032
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1009,
                                    "end": 1032
                                },
                                "flags": 268435488,
                                "start": 1006,
                                "end": 1033
                            },
                            "flags": 16,
                            "start": 1006,
                            "end": 1034
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 1034,
                                    "end": 1036
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 96,
                                            "start": 1037,
                                            "end": 1040
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1037,
                                    "end": 1040
                                },
                                "flags": 268435488,
                                "start": 1034,
                                "end": 1041
                            },
                            "flags": 16,
                            "start": 1034,
                            "end": 1041
                        }
                    ],
                    "flags": 32,
                    "start": 999,
                    "end": 1041
                },
                "flags": 32,
                "start": 997,
                "end": 1042
            },
            "returnType": null,
            "flags": 16,
            "start": 980,
            "end": 1042
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1042,
                "end": 1052
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 1052,
                "end": 1054
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
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
                                        "start": 1056,
                                        "end": 1057
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "arg",
                                        "rawText": "arg",
                                        "flags": 96,
                                        "start": 1058,
                                        "end": 1061
                                    },
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 1063,
                                        "end": 1065
                                    },
                                    "flags": 32,
                                    "start": 1056,
                                    "end": 1065
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1056,
                            "end": 1065
                        },
                        "flags": 32,
                        "start": 1055,
                        "end": 1066
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
                                        "start": 1069,
                                        "end": 1070
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 1071,
                                        "end": 1072
                                    },
                                    "initializer": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "arg",
                                                "rawText": "arg",
                                                "flags": 96,
                                                "start": 1074,
                                                "end": 1077
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 1077,
                                                "end": 1078
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 1078,
                                                "end": 1079
                                            },
                                            "flags": 32,
                                            "start": 1073,
                                            "end": 1079
                                        },
                                        "flags": 32,
                                        "start": 1073,
                                        "end": 1080
                                    },
                                    "flags": 32,
                                    "start": 1069,
                                    "end": 1080
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1069,
                            "end": 1080
                        },
                        "flags": 32,
                        "start": 1067,
                        "end": 1081
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1054,
                "end": 1082
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 1084,
                    "end": 1084
                },
                "flags": 32,
                "start": 1082,
                "end": 1085
            },
            "returnType": null,
            "flags": 16,
            "start": 1042,
            "end": 1085
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1085,
                "end": 1095
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 1095,
                "end": 1097
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
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
                                        "start": 1099,
                                        "end": 1100
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "arg",
                                        "rawText": "arg",
                                        "flags": 96,
                                        "start": 1101,
                                        "end": 1104
                                    },
                                    "initializer": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "arg",
                                                "rawText": "arg",
                                                "flags": 96,
                                                "start": 1108,
                                                "end": 1111
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 1111,
                                                "end": 1113
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 1113,
                                                "end": 1115
                                            },
                                            "flags": 32,
                                            "start": 1106,
                                            "end": 1115
                                        },
                                        "flags": 32,
                                        "start": 1106,
                                        "end": 1116
                                    },
                                    "flags": 32,
                                    "start": 1099,
                                    "end": 1116
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1099,
                            "end": 1116
                        },
                        "flags": 32,
                        "start": 1098,
                        "end": 1117
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1097,
                "end": 1118
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 1120,
                    "end": 1120
                },
                "flags": 32,
                "start": 1118,
                "end": 1121
            },
            "returnType": null,
            "flags": 16,
            "start": 1085,
            "end": 1121
        }
    ],
    "isModule": false,
    "source": "function f(arg) {function h() { g(arg) }; h()}\n\nfunction f(arg=1) {g(arg)}\n\nfunction f(arg, arguments) {g(arg); arguments[0] = 42; g(arg)}\n\nfunction f(...arg) {g(arg); arguments[0] = 42; g(arg)}\n\nfunction f(arg) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg) {g(arg); eval('arg = 42'); g(arg)}\n\nfunction f(arg) {g(arg); var arg = 42; g(arg)}\n\nfunction f(arg, x=1) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg, ...x) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg=1) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg) {'use strict'; g(arg); arg = 42; g(arg)}\n\nfunction f(arg, {a=(g(arg), arg=42)}) {g(arg)}\n\nfunction f(arg) {g(arg); g(function() {arg = 42}); g(arg)}\n\nfunction f(arg) {g(arg); g(() => arg = 42); g(arg)}\n\nfunction f(arg) {g(arg); g(() => eval('arg = 42')); g(arg)}\n\nfunction f(...arg) {g(arg); eval('arg = 42'); g(arg)}\n\nfunction f(arg) {g(arg); arguments[0] = 42; g(arg)}\n\nfunction f(arg) {g(arg); h(arguments); g(arg)}\n\nfunction f(arg) {g(arg); eval('arguments[0] = 42'); g(arg)}\n\nfunction f(arg) {g(arg); g(() => arguments[0] = 42); g(arg)}\n\nfunction f({x:arg = 1}, {y:b=(arg=2)}) {}\n\nfunction f({x:arg = (arg = 2)}) {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1122
}
```

### Printed

```javascript

function f() {
  function h() {
    g(arg);
  }
  h();
}
function f() {
  g(arg);
}
function f() {
  g(arg);
  arguments[0] = 42;
  g(arg);
}
function f() {
  g(arg);
  arguments[0] = 42;
  g(arg);
}
function f() {
  g(arg);
  arg = 42;
  g(arg);
}
function f() {
  g(arg);
  eval("'arg = 42'");
  g(arg);
}
function f() {
  g(arg);
  var arg = 42;
  g(arg);
}
function f() {
  g(arg);
  arg = 42;
  g(arg);
}
function f() {
  g(arg);
  arg = 42;
  g(arg);
}
function f() {
  g(arg);
  arg = 42;
  g(arg);
}
function f() {
  g(arg);
  arg = 42;
  g(arg);
}
function f() {
  g(arg);
}
function f() {
  g(arg);
  g(function () {
    arg = 42;
  });
  g(arg);
}
function f() {
  g(arg);
  g(() =>  arg = 42);
  g(arg);
}
function f() {
  g(arg);
  g(() =>  eval("'arg = 42'"));
  g(arg);
}
function f() {
  g(arg);
  eval("'arg = 42'");
  g(arg);
}
function f() {
  g(arg);
  arguments[0] = 42;
  g(arg);
}
function f() {
  g(arg);
  h(arguments);
  g(arg);
}
function f() {
  g(arg);
  eval("'arguments[0] = 42'");
  g(arg);
}
function f() {
  g(arg);
  g(() =>  arguments[0] = 42);
  g(arg);
}
function f() {}
function f() {}
```

### Diagnostics

```javascript
✔ No errors
```

