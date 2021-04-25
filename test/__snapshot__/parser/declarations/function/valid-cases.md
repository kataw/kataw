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
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 11,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 11,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 768,
                                "start": 17,
                                "end": 25
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "h",
                                "rawText": "h",
                                "flags": 768,
                                "start": 25,
                                "end": 27
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                    "flags": 768,
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
                                                            "flags": 768,
                                                            "start": 34,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 34,
                                                    "end": 37
                                                },
                                                "flags": 256,
                                                "start": 31,
                                                "end": 38
                                            },
                                            "flags": 128,
                                            "start": 31,
                                            "end": 38
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 31,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 40
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 17,
                            "end": 40
                        },
                        {
                            "kind": 168,
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 41,
                                    "end": 43
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 45
                            },
                            "flags": 128,
                            "start": 41,
                            "end": 45
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 17,
                    "end": 45
                },
                "flags": 256,
                "start": 15,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 46
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 46,
                "end": 56
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 56,
                "end": 58
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 59,
                            "end": 62
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 63,
                            "end": 64
                        },
                        "flags": 258,
                        "start": 59,
                        "end": 64
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 69,
                                            "end": 72
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 69,
                                    "end": 72
                                },
                                "flags": 256,
                                "start": 67,
                                "end": 73
                            },
                            "flags": 128,
                            "start": 67,
                            "end": 73
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 67,
                    "end": 73
                },
                "flags": 256,
                "start": 65,
                "end": 74
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 46,
            "end": 74
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 74,
                "end": 84
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 84,
                "end": 86
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 87,
                            "end": 90
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 87,
                        "end": 90
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arguments",
                            "rawText": "arguments",
                            "flags": 768,
                            "start": 91,
                            "end": 101
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 91,
                        "end": 101
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 106,
                                            "end": 109
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 106,
                                    "end": 109
                                },
                                "flags": 256,
                                "start": 104,
                                "end": 110
                            },
                            "flags": 128,
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
                                        "flags": 768,
                                        "start": 111,
                                        "end": 121
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 122,
                                        "end": 123
                                    },
                                    "flags": 256,
                                    "start": 111,
                                    "end": 124
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 124,
                                    "end": 126
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 126,
                                    "end": 129
                                },
                                "flags": 256,
                                "start": 111,
                                "end": 129
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 133,
                                            "end": 136
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 133,
                                    "end": 136
                                },
                                "flags": 256,
                                "start": 130,
                                "end": 137
                            },
                            "flags": 128,
                            "start": 130,
                            "end": 137
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 104,
                    "end": 137
                },
                "flags": 256,
                "start": 102,
                "end": 138
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 74,
            "end": 138
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 138,
                "end": 148
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 148,
                "end": 150
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
                            "start": 151,
                            "end": 154
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 154,
                            "end": 157
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 151,
                        "end": 157
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 162,
                                            "end": 165
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 162,
                                    "end": 165
                                },
                                "flags": 256,
                                "start": 160,
                                "end": 166
                            },
                            "flags": 128,
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
                                        "flags": 768,
                                        "start": 167,
                                        "end": 177
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 178,
                                        "end": 179
                                    },
                                    "flags": 256,
                                    "start": 167,
                                    "end": 180
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 180,
                                    "end": 182
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 182,
                                    "end": 185
                                },
                                "flags": 256,
                                "start": 167,
                                "end": 185
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 189,
                                            "end": 192
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 189,
                                    "end": 192
                                },
                                "flags": 256,
                                "start": 186,
                                "end": 193
                            },
                            "flags": 128,
                            "start": 186,
                            "end": 193
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 160,
                    "end": 193
                },
                "flags": 256,
                "start": 158,
                "end": 194
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 138,
            "end": 194
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 194,
                "end": 204
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 204,
                "end": 206
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 207,
                            "end": 210
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 207,
                        "end": 210
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 215,
                                            "end": 218
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 215,
                                    "end": 218
                                },
                                "flags": 256,
                                "start": 213,
                                "end": 219
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 220,
                                    "end": 224
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 224,
                                    "end": 226
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 226,
                                    "end": 229
                                },
                                "flags": 256,
                                "start": 220,
                                "end": 229
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 233,
                                            "end": 236
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 233,
                                    "end": 236
                                },
                                "flags": 256,
                                "start": 230,
                                "end": 237
                            },
                            "flags": 128,
                            "start": 230,
                            "end": 237
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 213,
                    "end": 237
                },
                "flags": 256,
                "start": 211,
                "end": 238
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 194,
            "end": 238
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 238,
                "end": 248
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 248,
                "end": 250
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 251,
                            "end": 254
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 251,
                        "end": 254
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 259,
                                            "end": 262
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 259,
                                    "end": 262
                                },
                                "flags": 256,
                                "start": 257,
                                "end": 263
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 264,
                                    "end": 269
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "arg = 42",
                                            "rawText": "arg = 42",
                                            "flags": 67109632,
                                            "start": 270,
                                            "end": 280
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 270,
                                    "end": 280
                                },
                                "flags": 256,
                                "start": 264,
                                "end": 281
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 285,
                                            "end": 288
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 285,
                                    "end": 288
                                },
                                "flags": 256,
                                "start": 282,
                                "end": 289
                            },
                            "flags": 128,
                            "start": 282,
                            "end": 289
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 257,
                    "end": 289
                },
                "flags": 256,
                "start": 255,
                "end": 290
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 238,
            "end": 290
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 290,
                "end": 300
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 300,
                "end": 302
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 303,
                            "end": 306
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 303,
                        "end": 306
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 311,
                                            "end": 314
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 311,
                                    "end": 314
                                },
                                "flags": 256,
                                "start": 309,
                                "end": 315
                            },
                            "flags": 128,
                            "start": 309,
                            "end": 316
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 768,
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
                                            "flags": 768,
                                            "start": 320,
                                            "end": 324
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 768,
                                            "start": 326,
                                            "end": 329
                                        },
                                        "flags": 128,
                                        "start": 320,
                                        "end": 329
                                    }
                                ],
                                "flags": 128,
                                "start": 320,
                                "end": 329
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 333,
                                            "end": 336
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 333,
                                    "end": 336
                                },
                                "flags": 256,
                                "start": 330,
                                "end": 337
                            },
                            "flags": 128,
                            "start": 330,
                            "end": 337
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 309,
                    "end": 337
                },
                "flags": 256,
                "start": 307,
                "end": 338
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 290,
            "end": 338
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 338,
                "end": 348
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 348,
                "end": 350
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 351,
                            "end": 354
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 351,
                        "end": 354
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 355,
                            "end": 357
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 358,
                            "end": 359
                        },
                        "flags": 258,
                        "start": 355,
                        "end": 359
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 364,
                                            "end": 367
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 364,
                                    "end": 367
                                },
                                "flags": 256,
                                "start": 362,
                                "end": 368
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 369,
                                    "end": 373
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 373,
                                    "end": 375
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 375,
                                    "end": 378
                                },
                                "flags": 256,
                                "start": 369,
                                "end": 378
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 382,
                                            "end": 385
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 382,
                                    "end": 385
                                },
                                "flags": 256,
                                "start": 379,
                                "end": 386
                            },
                            "flags": 128,
                            "start": 379,
                            "end": 386
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 362,
                    "end": 386
                },
                "flags": 256,
                "start": 360,
                "end": 387
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 338,
            "end": 387
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 387,
                "end": 397
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 397,
                "end": 399
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 400,
                            "end": 403
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 400,
                        "end": 403
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
                            "start": 404,
                            "end": 408
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 408,
                            "end": 409
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 404,
                        "end": 409
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 414,
                                            "end": 417
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 414,
                                    "end": 417
                                },
                                "flags": 256,
                                "start": 412,
                                "end": 418
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 419,
                                    "end": 423
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 423,
                                    "end": 425
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 425,
                                    "end": 428
                                },
                                "flags": 256,
                                "start": 419,
                                "end": 428
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 432,
                                            "end": 435
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 432,
                                    "end": 435
                                },
                                "flags": 256,
                                "start": 429,
                                "end": 436
                            },
                            "flags": 128,
                            "start": 429,
                            "end": 436
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 412,
                    "end": 436
                },
                "flags": 256,
                "start": 410,
                "end": 437
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 387,
            "end": 437
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 437,
                "end": 447
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 447,
                "end": 449
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 450,
                            "end": 453
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 454,
                            "end": 455
                        },
                        "flags": 258,
                        "start": 450,
                        "end": 455
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 460,
                                            "end": 463
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 460,
                                    "end": 463
                                },
                                "flags": 256,
                                "start": 458,
                                "end": 464
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 465,
                                    "end": 469
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 469,
                                    "end": 471
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 471,
                                    "end": 474
                                },
                                "flags": 256,
                                "start": 465,
                                "end": 474
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 478,
                                            "end": 481
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 478,
                                    "end": 481
                                },
                                "flags": 256,
                                "start": 475,
                                "end": 482
                            },
                            "flags": 128,
                            "start": 475,
                            "end": 482
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 458,
                    "end": 482
                },
                "flags": 256,
                "start": 456,
                "end": 483
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 437,
            "end": 483
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 483,
                "end": 493
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 493,
                "end": 495
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 496,
                            "end": 499
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 496,
                        "end": 499
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                            "rawText": "use strict",
                            "flags": 67109632,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 518,
                                            "end": 521
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 518,
                                    "end": 521
                                },
                                "flags": 256,
                                "start": 515,
                                "end": 522
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 523,
                                    "end": 527
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 527,
                                    "end": 529
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 529,
                                    "end": 532
                                },
                                "flags": 256,
                                "start": 523,
                                "end": 532
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 536,
                                            "end": 539
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 536,
                                    "end": 539
                                },
                                "flags": 256,
                                "start": 533,
                                "end": 540
                            },
                            "flags": 128,
                            "start": 533,
                            "end": 540
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 502,
                    "end": 540
                },
                "flags": 256,
                "start": 500,
                "end": 541
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 483,
            "end": 541
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 541,
                "end": 551
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 551,
                "end": 553
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 554,
                            "end": 557
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 554,
                        "end": 557
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 560,
                                            "end": 561
                                        },
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
                                                            "flags": 768,
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
                                                                    "flags": 768,
                                                                    "start": 565,
                                                                    "end": 568
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 565,
                                                            "end": 568
                                                        },
                                                        "flags": 256,
                                                        "start": 562,
                                                        "end": 569
                                                    },
                                                    {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "arg",
                                                            "rawText": "arg",
                                                            "flags": 768,
                                                            "start": 570,
                                                            "end": 574
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 768,
                                                            "start": 574,
                                                            "end": 575
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 42,
                                                            "rawText": "42",
                                                            "flags": 768,
                                                            "start": 575,
                                                            "end": 577
                                                        },
                                                        "flags": 256,
                                                        "start": 562,
                                                        "end": 577
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 562,
                                                "end": 578
                                            },
                                            "flags": 256,
                                            "start": 562,
                                            "end": 578
                                        },
                                        "flags": 256,
                                        "start": 560,
                                        "end": 578
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 560,
                                "end": 578
                            },
                            "flags": 256,
                            "start": 558,
                            "end": 579
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 558,
                        "end": 579
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 584,
                                            "end": 587
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 584,
                                    "end": 587
                                },
                                "flags": 256,
                                "start": 582,
                                "end": 588
                            },
                            "flags": 128,
                            "start": 582,
                            "end": 588
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 582,
                    "end": 588
                },
                "flags": 256,
                "start": 580,
                "end": 589
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 541,
            "end": 589
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 589,
                "end": 599
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 599,
                "end": 601
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 602,
                            "end": 605
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 602,
                        "end": 605
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 610,
                                            "end": 613
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 610,
                                    "end": 613
                                },
                                "flags": 256,
                                "start": 608,
                                "end": 614
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 618,
                                                "end": 626
                                            },
                                            "generatorToken": null,
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
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
                                                                    "flags": 768,
                                                                    "start": 630,
                                                                    "end": 633
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 768,
                                                                    "start": 633,
                                                                    "end": 635
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 768,
                                                                    "start": 635,
                                                                    "end": 638
                                                                },
                                                                "flags": 256,
                                                                "start": 630,
                                                                "end": 638
                                                            },
                                                            "flags": 128,
                                                            "start": 630,
                                                            "end": 638
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 630,
                                                    "end": 638
                                                },
                                                "flags": 256,
                                                "start": 628,
                                                "end": 639
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 256,
                                            "start": 618,
                                            "end": 639
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 618,
                                    "end": 639
                                },
                                "flags": 256,
                                "start": 615,
                                "end": 640
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 644,
                                            "end": 647
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 644,
                                    "end": 647
                                },
                                "flags": 256,
                                "start": 641,
                                "end": 648
                            },
                            "flags": 128,
                            "start": 641,
                            "end": 648
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 608,
                    "end": 648
                },
                "flags": 256,
                "start": 606,
                "end": 649
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 589,
            "end": 649
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 649,
                "end": 659
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 659,
                "end": 661
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 662,
                            "end": 665
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 662,
                        "end": 665
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 670,
                                            "end": 673
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 670,
                                    "end": 673
                                },
                                "flags": 256,
                                "start": 668,
                                "end": 674
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 675,
                                    "end": 677
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 680,
                                                "end": 683
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "arg",
                                                    "rawText": "arg",
                                                    "flags": 768,
                                                    "start": 683,
                                                    "end": 687
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 687,
                                                    "end": 689
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 768,
                                                    "start": 689,
                                                    "end": 692
                                                },
                                                "flags": 256,
                                                "start": 683,
                                                "end": 692
                                            },
                                            "flags": 256,
                                            "start": 678,
                                            "end": 692
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 678,
                                    "end": 692
                                },
                                "flags": 256,
                                "start": 675,
                                "end": 693
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 697,
                                            "end": 700
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 697,
                                    "end": 700
                                },
                                "flags": 256,
                                "start": 694,
                                "end": 701
                            },
                            "flags": 128,
                            "start": 694,
                            "end": 701
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 668,
                    "end": 701
                },
                "flags": 256,
                "start": 666,
                "end": 702
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 649,
            "end": 702
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 702,
                "end": 712
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 712,
                "end": 714
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 715,
                            "end": 718
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 715,
                        "end": 718
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 723,
                                            "end": 726
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 723,
                                    "end": 726
                                },
                                "flags": 256,
                                "start": 721,
                                "end": 727
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 728,
                                    "end": 730
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 733,
                                                "end": 736
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "eval",
                                                    "rawText": "eval",
                                                    "flags": 768,
                                                    "start": 736,
                                                    "end": 741
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "arg = 42",
                                                            "rawText": "arg = 42",
                                                            "flags": 67109632,
                                                            "start": 742,
                                                            "end": 752
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 742,
                                                    "end": 752
                                                },
                                                "flags": 256,
                                                "start": 736,
                                                "end": 753
                                            },
                                            "flags": 256,
                                            "start": 731,
                                            "end": 753
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 731,
                                    "end": 753
                                },
                                "flags": 256,
                                "start": 728,
                                "end": 754
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 758,
                                            "end": 761
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 758,
                                    "end": 761
                                },
                                "flags": 256,
                                "start": 755,
                                "end": 762
                            },
                            "flags": 128,
                            "start": 755,
                            "end": 762
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 721,
                    "end": 762
                },
                "flags": 256,
                "start": 719,
                "end": 763
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 702,
            "end": 763
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 763,
                "end": 773
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 773,
                "end": 775
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
                            "start": 776,
                            "end": 779
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 779,
                            "end": 782
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 776,
                        "end": 782
                    }
                ],
                "trailingComma": false,
                "flags": 258,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 787,
                                            "end": 790
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 787,
                                    "end": 790
                                },
                                "flags": 256,
                                "start": 785,
                                "end": 791
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 792,
                                    "end": 797
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "arg = 42",
                                            "rawText": "arg = 42",
                                            "flags": 67109632,
                                            "start": 798,
                                            "end": 808
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 798,
                                    "end": 808
                                },
                                "flags": 256,
                                "start": 792,
                                "end": 809
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 813,
                                            "end": 816
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 813,
                                    "end": 816
                                },
                                "flags": 256,
                                "start": 810,
                                "end": 817
                            },
                            "flags": 128,
                            "start": 810,
                            "end": 817
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 785,
                    "end": 817
                },
                "flags": 256,
                "start": 783,
                "end": 818
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 763,
            "end": 818
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 818,
                "end": 828
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 828,
                "end": 830
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 831,
                            "end": 834
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 831,
                        "end": 834
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 839,
                                            "end": 842
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 839,
                                    "end": 842
                                },
                                "flags": 256,
                                "start": 837,
                                "end": 843
                            },
                            "flags": 128,
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
                                        "flags": 768,
                                        "start": 844,
                                        "end": 854
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 855,
                                        "end": 856
                                    },
                                    "flags": 256,
                                    "start": 844,
                                    "end": 857
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 857,
                                    "end": 859
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 42,
                                    "rawText": "42",
                                    "flags": 768,
                                    "start": 859,
                                    "end": 862
                                },
                                "flags": 256,
                                "start": 844,
                                "end": 862
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 866,
                                            "end": 869
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 866,
                                    "end": 869
                                },
                                "flags": 256,
                                "start": 863,
                                "end": 870
                            },
                            "flags": 128,
                            "start": 863,
                            "end": 870
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 837,
                    "end": 870
                },
                "flags": 256,
                "start": 835,
                "end": 871
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 818,
            "end": 871
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 871,
                "end": 881
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 881,
                "end": 883
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 884,
                            "end": 887
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 884,
                        "end": 887
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 892,
                                            "end": 895
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 892,
                                    "end": 895
                                },
                                "flags": 256,
                                "start": 890,
                                "end": 896
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 900,
                                            "end": 909
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 900,
                                    "end": 909
                                },
                                "flags": 256,
                                "start": 897,
                                "end": 910
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 914,
                                            "end": 917
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 914,
                                    "end": 917
                                },
                                "flags": 256,
                                "start": 911,
                                "end": 918
                            },
                            "flags": 128,
                            "start": 911,
                            "end": 918
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 890,
                    "end": 918
                },
                "flags": 256,
                "start": 888,
                "end": 919
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 871,
            "end": 919
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 919,
                "end": 929
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 929,
                "end": 931
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 932,
                            "end": 935
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 932,
                        "end": 935
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 940,
                                            "end": 943
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 940,
                                    "end": 943
                                },
                                "flags": 256,
                                "start": 938,
                                "end": 944
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 945,
                                    "end": 950
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "arguments[0] = 42",
                                            "rawText": "arguments[0] = 42",
                                            "flags": 67109632,
                                            "start": 951,
                                            "end": 970
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 951,
                                    "end": 970
                                },
                                "flags": 256,
                                "start": 945,
                                "end": 971
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 975,
                                            "end": 978
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 975,
                                    "end": 978
                                },
                                "flags": 256,
                                "start": 972,
                                "end": 979
                            },
                            "flags": 128,
                            "start": 972,
                            "end": 979
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 938,
                    "end": 979
                },
                "flags": 256,
                "start": 936,
                "end": 980
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 919,
            "end": 980
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 980,
                "end": 990
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 990,
                "end": 992
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 993,
                            "end": 996
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 993,
                        "end": 996
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 1001,
                                            "end": 1004
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 1001,
                                    "end": 1004
                                },
                                "flags": 256,
                                "start": 999,
                                "end": 1005
                            },
                            "flags": 128,
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
                                    "flags": 768,
                                    "start": 1006,
                                    "end": 1008
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 1011,
                                                "end": 1014
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 130,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "arguments",
                                                        "rawText": "arguments",
                                                        "flags": 768,
                                                        "start": 1014,
                                                        "end": 1024
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 768,
                                                        "start": 1025,
                                                        "end": 1026
                                                    },
                                                    "flags": 256,
                                                    "start": 1014,
                                                    "end": 1027
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 1027,
                                                    "end": 1029
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 768,
                                                    "start": 1029,
                                                    "end": 1032
                                                },
                                                "flags": 256,
                                                "start": 1014,
                                                "end": 1032
                                            },
                                            "flags": 256,
                                            "start": 1009,
                                            "end": 1032
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 1009,
                                    "end": 1032
                                },
                                "flags": 256,
                                "start": 1006,
                                "end": 1033
                            },
                            "flags": 128,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 1037,
                                            "end": 1040
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 1037,
                                    "end": 1040
                                },
                                "flags": 256,
                                "start": 1034,
                                "end": 1041
                            },
                            "flags": 128,
                            "start": 1034,
                            "end": 1041
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 999,
                    "end": 1041
                },
                "flags": 256,
                "start": 997,
                "end": 1042
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 980,
            "end": 1042
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 1042,
                "end": 1052
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 1052,
                "end": 1054
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
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1056,
                                            "end": 1058
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "arg",
                                                "rawText": "arg",
                                                "flags": 768,
                                                "start": 1058,
                                                "end": 1061
                                            },
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 1063,
                                                "end": 1065
                                            },
                                            "flags": 256,
                                            "start": 1058,
                                            "end": 1065
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 1056,
                                        "end": 1065
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 1056,
                                "end": 1065
                            },
                            "flags": 256,
                            "start": 1055,
                            "end": 1066
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 1055,
                        "end": 1066
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
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
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 1069,
                                            "end": 1071
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
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
                                                        "flags": 768,
                                                        "start": 1074,
                                                        "end": 1077
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 1077,
                                                        "end": 1078
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 768,
                                                        "start": 1078,
                                                        "end": 1079
                                                    },
                                                    "flags": 256,
                                                    "start": 1073,
                                                    "end": 1079
                                                },
                                                "flags": 256,
                                                "start": 1073,
                                                "end": 1080
                                            },
                                            "flags": 256,
                                            "start": 1071,
                                            "end": 1080
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 1069,
                                        "end": 1080
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 1069,
                                "end": 1080
                            },
                            "flags": 256,
                            "start": 1067,
                            "end": 1081
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 1067,
                        "end": 1081
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 1054,
                "end": 1082
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 1084,
                    "end": 1084
                },
                "flags": 256,
                "start": 1082,
                "end": 1085
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 1042,
            "end": 1085
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 1085,
                "end": 1095
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 1095,
                "end": 1097
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
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1099,
                                            "end": 1101
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "arg",
                                                "rawText": "arg",
                                                "flags": 768,
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
                                                        "flags": 768,
                                                        "start": 1108,
                                                        "end": 1111
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 1111,
                                                        "end": 1113
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 768,
                                                        "start": 1113,
                                                        "end": 1115
                                                    },
                                                    "flags": 256,
                                                    "start": 1106,
                                                    "end": 1115
                                                },
                                                "flags": 256,
                                                "start": 1106,
                                                "end": 1116
                                            },
                                            "flags": 256,
                                            "start": 1101,
                                            "end": 1116
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 1099,
                                        "end": 1116
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 1099,
                                "end": 1116
                            },
                            "flags": 256,
                            "start": 1098,
                            "end": 1117
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 258,
                        "start": 1098,
                        "end": 1117
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 1097,
                "end": 1118
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 1120,
                    "end": 1120
                },
                "flags": 256,
                "start": 1118,
                "end": 1121
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 1085,
            "end": 1121
        }
    ],
    "isModule": false,
    "text": "function f(arg) {function h() { g(arg) }; h()}\n\nfunction f(arg=1) {g(arg)}\n\nfunction f(arg, arguments) {g(arg); arguments[0] = 42; g(arg)}\n\nfunction f(...arg) {g(arg); arguments[0] = 42; g(arg)}\n\nfunction f(arg) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg) {g(arg); eval('arg = 42'); g(arg)}\n\nfunction f(arg) {g(arg); var arg = 42; g(arg)}\n\nfunction f(arg, x=1) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg, ...x) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg=1) {g(arg); arg = 42; g(arg)}\n\nfunction f(arg) {'use strict'; g(arg); arg = 42; g(arg)}\n\nfunction f(arg, {a=(g(arg), arg=42)}) {g(arg)}\n\nfunction f(arg) {g(arg); g(function() {arg = 42}); g(arg)}\n\nfunction f(arg) {g(arg); g(() => arg = 42); g(arg)}\n\nfunction f(arg) {g(arg); g(() => eval('arg = 42')); g(arg)}\n\nfunction f(...arg) {g(arg); eval('arg = 42'); g(arg)}\n\nfunction f(arg) {g(arg); arguments[0] = 42; g(arg)}\n\nfunction f(arg) {g(arg); h(arguments); g(arg)}\n\nfunction f(arg) {g(arg); eval('arguments[0] = 42'); g(arg)}\n\nfunction f(arg) {g(arg); g(() => arguments[0] = 42); g(arg)}\n\nfunction f({x:arg = 1}, {y:b=(arg=2)}) {}\n\nfunction f({x:arg = (arg = 2)}) {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1122
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

