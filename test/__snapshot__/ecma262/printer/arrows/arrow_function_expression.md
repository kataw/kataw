# Kataw parser test case

## Input

`````js
(a => {}).length
typeof (() => {});
(() => {})()``;
(() => {})``;
new (() => {});
if ((() => {}) ? 1 : 0) {}
let f = () => ({}())
let a = () => ({} instanceof a);
a = () => ({} && a);
a = () => ({}() && a);
a = () => ({} && a && b);
a = () => ({} + a);
a = () => ({}()() && a);
a = () => ({}.b && a);
a = () => ({}[b] && a);
a = () => ({}`` && a);
a = () => ({} = 0);
a = () => ({}, a);
a => a instanceof {};
a => ({}().b && 0)
a => ({}().c = 0)
x => ({}()())
x => ({}()``)
x => ({}().b);
a = b => c;
x => (y = z);
x => (y += z);
f(a => ({})) + 1;
(a => ({})) || 0;
a = b => c;
a = b => {
  return c
};

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 23
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 30
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 33
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 33
                    },
                    "flags": 23,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 34
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 16,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 38
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 42
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 45
                        },
                        "flags": 35,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 46
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 47
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 35,
                    "end": 48
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 50
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 35,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 35,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 54
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 58
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 60
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 61
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 61
                    },
                    "flags": 51,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 62
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 51,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 51,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 69
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 72
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 73,
                            "end": 76
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 78,
                                "end": 78
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 79
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 79
                    },
                    "flags": 69,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 80
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 2048,
                "start": 65,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 65,
            "end": 81
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 81,
                "end": 84
            },
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 88
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 92
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 94
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 95
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 87,
                        "end": 95
                    },
                    "flags": 86,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 96
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 98
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 98,
                    "end": 100
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 102
                },
                "alternate": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 102,
                    "end": 104
                },
                "flags": 118,
                "transformFlags": 4096,
                "start": 86,
                "end": 104
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 107
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 105,
                "end": 108
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 81,
            "end": 108
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 108,
                "end": 112
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 114
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 118
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 122
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 125,
                                            "end": 125
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 124,
                                        "end": 126
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 127,
                                        "end": 127
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 122,
                                    "end": 128
                                },
                                "flags": 122,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 129
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 129
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 112,
                        "end": 129
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 112,
                "end": 129
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 108,
            "end": 129
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 129,
                "end": 133
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 133,
                            "end": 135
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 139,
                                "end": 139
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 140,
                                "end": 143
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 146,
                                            "end": 146
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 145,
                                        "end": 147
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 158
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 160
                                    },
                                    "flags": 48,
                                    "transformFlags": 5120,
                                    "start": 143,
                                    "end": 160
                                },
                                "flags": 143,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 161
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 161
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 133,
                        "end": 161
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 133,
                "end": 161
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 129,
            "end": 162
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 164
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 166
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 168,
                        "end": 168
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 169,
                        "end": 172
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 175,
                                    "end": 175
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 174,
                                "end": 176
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 176,
                                "end": 179
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 179,
                                "end": 181
                            },
                            "flags": 48,
                            "transformFlags": 5120,
                            "start": 172,
                            "end": 181
                        },
                        "flags": 172,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 182
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 166,
                    "end": 182
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 162,
                "end": 182
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 162,
            "end": 183
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 185
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 185,
                    "end": 187
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 189,
                        "end": 189
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 190,
                        "end": 193
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 131,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 196,
                                        "end": 196
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 195,
                                    "end": 197
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 198,
                                    "end": 198
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 193,
                                "end": 199
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 202
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 204
                            },
                            "flags": 268435488,
                            "transformFlags": 5120,
                            "start": 193,
                            "end": 204
                        },
                        "flags": 193,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 205
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 205
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 183,
                "end": 205
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 183,
            "end": 206
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 206,
                    "end": 208
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 208,
                    "end": 210
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 212
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 213,
                        "end": 216
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 219,
                                        "end": 219
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 218,
                                    "end": 220
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 220,
                                    "end": 223
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 223,
                                    "end": 225
                                },
                                "flags": 48,
                                "transformFlags": 5120,
                                "start": 216,
                                "end": 225
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 228
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 228,
                                "end": 230
                            },
                            "flags": 48,
                            "transformFlags": 5120,
                            "start": 216,
                            "end": 230
                        },
                        "flags": 216,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 231
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 210,
                    "end": 231
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 206,
                "end": 231
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 206,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 234
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 236
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 238,
                        "end": 238
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 239,
                        "end": 242
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 245,
                                    "end": 245
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 244,
                                "end": 246
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 248
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 250
                            },
                            "flags": 48,
                            "transformFlags": 5120,
                            "start": 242,
                            "end": 250
                        },
                        "flags": 242,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 251
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 251
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 232,
                "end": 251
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 232,
            "end": 252
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 252,
                    "end": 254
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 254,
                    "end": 256
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 258,
                        "end": 258
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 259,
                        "end": 262
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 131,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 265,
                                            "end": 265
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 264,
                                        "end": 266
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 267,
                                        "end": 267
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 262,
                                    "end": 268
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 269,
                                    "end": 269
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 262,
                                "end": 270
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 270,
                                "end": 273
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 275
                            },
                            "flags": 268435488,
                            "transformFlags": 5120,
                            "start": 262,
                            "end": 275
                        },
                        "flags": 262,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 276
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 256,
                    "end": 276
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 252,
                "end": 276
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 252,
            "end": 277
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 277,
                    "end": 279
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 279,
                    "end": 281
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 283,
                        "end": 283
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 284,
                        "end": 287
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 290,
                                        "end": 290
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 289,
                                    "end": 291
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 292,
                                    "end": 293
                                },
                                "flags": 48,
                                "transformFlags": 2,
                                "start": 287,
                                "end": 293
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 293,
                                "end": 296
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 296,
                                "end": 298
                            },
                            "flags": 48,
                            "transformFlags": 5120,
                            "start": 287,
                            "end": 298
                        },
                        "flags": 287,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 299
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 281,
                    "end": 299
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 277,
                "end": 299
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 277,
            "end": 300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 300,
                    "end": 302
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 302,
                    "end": 304
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 306,
                        "end": 306
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 307,
                        "end": 310
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 130,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 313,
                                        "end": 313
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 312,
                                    "end": 314
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 315,
                                    "end": 316
                                },
                                "flags": 536870944,
                                "transformFlags": 4,
                                "start": 310,
                                "end": 317
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 317,
                                "end": 320
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 320,
                                "end": 322
                            },
                            "flags": 536870944,
                            "transformFlags": 5120,
                            "start": 310,
                            "end": 322
                        },
                        "flags": 310,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 323
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 304,
                    "end": 323
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 300,
                "end": 323
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 300,
            "end": 324
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 324,
                    "end": 326
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 326,
                    "end": 328
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 330,
                        "end": 330
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 331,
                        "end": 334
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 226,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 337,
                                        "end": 337
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 336,
                                    "end": 338
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 134217824,
                                    "transformFlags": 0,
                                    "start": 338,
                                    "end": 340
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 334,
                                "end": 340
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 340,
                                "end": 343
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 343,
                                "end": 345
                            },
                            "flags": 32,
                            "transformFlags": 5120,
                            "start": 334,
                            "end": 345
                        },
                        "flags": 334,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 346
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 328,
                    "end": 346
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 324,
                "end": 346
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 324,
            "end": 347
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 347,
                    "end": 349
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 349,
                    "end": 351
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 353,
                        "end": 353
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 354,
                        "end": 357
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 360,
                                    "end": 360
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 359,
                                "end": 361
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 361,
                                "end": 363
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 363,
                                "end": 365
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 359,
                            "end": 365
                        },
                        "flags": 357,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 366
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 351,
                    "end": 366
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 347,
                "end": 366
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 347,
            "end": 367
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 369
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 369,
                    "end": 371
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 373,
                        "end": 373
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 374,
                        "end": 377
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 380,
                                        "end": 380
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 379,
                                    "end": 381
                                },
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 382,
                                    "end": 384
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 377,
                            "end": 385
                        },
                        "flags": 377,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 385
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 371,
                    "end": 385
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 367,
                "end": 385
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 367,
            "end": 386
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 386,
                    "end": 388
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 388,
                    "end": 391
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 391,
                        "end": 393
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 393,
                        "end": 404
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 406
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 404,
                        "end": 407
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 391,
                    "end": 407
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 386,
                "end": 407
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 386,
            "end": 408
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 408,
                    "end": 410
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 410,
                    "end": 413
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 129,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 416,
                                        "end": 416
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 415,
                                    "end": 417
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 418,
                                    "end": 418
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 413,
                                "end": 419
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 420,
                                "end": 421
                            },
                            "flags": 268435488,
                            "transformFlags": 2,
                            "start": 413,
                            "end": 421
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 421,
                            "end": 424
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 424,
                            "end": 426
                        },
                        "flags": 268435488,
                        "transformFlags": 5120,
                        "start": 413,
                        "end": 426
                    },
                    "flags": 413,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 427
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 408,
                "end": 427
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 408,
            "end": 427
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 427,
                    "end": 429
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 429,
                    "end": 432
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 129,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 435,
                                        "end": 435
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 434,
                                    "end": 436
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 437,
                                    "end": 437
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 432,
                                "end": 438
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 439,
                                "end": 440
                            },
                            "flags": 268435488,
                            "transformFlags": 2,
                            "start": 432,
                            "end": 440
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 440,
                            "end": 442
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 442,
                            "end": 444
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 432,
                        "end": 444
                    },
                    "flags": 432,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 445
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 427,
                "end": 445
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 427,
            "end": 445
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 445,
                    "end": 447
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 447,
                    "end": 450
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 453,
                                    "end": 453
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 452,
                                "end": 454
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 455,
                                "end": 455
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 450,
                            "end": 456
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 457,
                            "end": 457
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 450,
                        "end": 458
                    },
                    "flags": 450,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 459
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 445,
                "end": 459
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 445,
            "end": 459
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 459,
                    "end": 461
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 461,
                    "end": 464
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 226,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 467,
                                    "end": 467
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 466,
                                "end": 468
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 469,
                                "end": 469
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 464,
                            "end": 470
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 470,
                            "end": 472
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 464,
                        "end": 472
                    },
                    "flags": 464,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 473
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 459,
                "end": 473
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 459,
            "end": 473
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 473,
                    "end": 475
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 475,
                    "end": 478
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 481,
                                    "end": 481
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 480,
                                "end": 482
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 483,
                                "end": 483
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 478,
                            "end": 484
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 485,
                            "end": 486
                        },
                        "flags": 268435488,
                        "transformFlags": 2,
                        "start": 478,
                        "end": 486
                    },
                    "flags": 478,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 487
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 473,
                "end": 487
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 473,
            "end": 488
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 488,
                    "end": 490
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 490,
                    "end": 492
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 492,
                        "end": 494
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 494,
                        "end": 497
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 497,
                        "end": 499
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 492,
                    "end": 499
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 488,
                "end": 499
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 488,
            "end": 500
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 500,
                    "end": 502
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 502,
                    "end": 505
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 507,
                            "end": 508
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 508,
                            "end": 510
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 510,
                            "end": 512
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 505,
                        "end": 512
                    },
                    "flags": 505,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 513
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 500,
                "end": 513
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 500,
            "end": 514
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 514,
                    "end": 516
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 516,
                    "end": 519
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 521,
                            "end": 522
                        },
                        "operatorToken": {
                            "kind": 4130,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 522,
                            "end": 525
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 525,
                            "end": 527
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 519,
                        "end": 527
                    },
                    "flags": 519,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 528
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 514,
                "end": 528
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 514,
            "end": 529
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 529,
                        "end": 531
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 532,
                                    "end": 533
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 533,
                                    "end": 536
                                },
                                "contents": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 539,
                                            "end": 539
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 538,
                                        "end": 540
                                    },
                                    "flags": 536,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 541
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 532,
                                "end": 541
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 532,
                        "end": 541
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 529,
                    "end": 542
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 542,
                    "end": 544
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 544,
                    "end": 546
                },
                "flags": 268435488,
                "transformFlags": 5120,
                "start": 529,
                "end": 546
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 529,
            "end": 547
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 549,
                            "end": 550
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 550,
                            "end": 553
                        },
                        "contents": {
                            "kind": 121,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 556,
                                    "end": 556
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 555,
                                "end": 557
                            },
                            "flags": 553,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 558
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 549,
                        "end": 558
                    },
                    "flags": 547,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 559
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 559,
                    "end": 562
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 562,
                    "end": 564
                },
                "flags": 547,
                "transformFlags": 5120,
                "start": 547,
                "end": 564
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 547,
            "end": 565
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 565,
                    "end": 567
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 567,
                    "end": 569
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 569,
                        "end": 571
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 571,
                        "end": 574
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 574,
                        "end": 576
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 569,
                    "end": 576
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 565,
                "end": 576
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 565,
            "end": 577
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 577,
                    "end": 579
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 579,
                    "end": 581
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 581,
                        "end": 583
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 583,
                        "end": 586
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 81,
                                        "transformFlags": 0,
                                        "start": 588,
                                        "end": 597
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 597,
                                        "end": 599
                                    },
                                    "flags": 81,
                                    "transformFlags": 256,
                                    "start": 588,
                                    "end": 599
                                }
                            ],
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 588,
                            "end": 599
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 586,
                        "end": 601
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 581,
                    "end": 601
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 577,
                "end": 601
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 577,
            "end": 602
        }
    ],
    "isModule": false,
    "source": "(a => {}).length\ntypeof (() => {});\n(() => {})()``;\n(() => {})``;\nnew (() => {});\nif ((() => {}) ? 1 : 0) {}\nlet f = () => ({}())\nlet a = () => ({} instanceof a);\na = () => ({} && a);\na = () => ({}() && a);\na = () => ({} && a && b);\na = () => ({} + a);\na = () => ({}()() && a);\na = () => ({}.b && a);\na = () => ({}[b] && a);\na = () => ({}`` && a);\na = () => ({} = 0);\na = () => ({}, a);\na => a instanceof {};\na => ({}().b && 0)\na => ({}().c = 0)\nx => ({}()())\nx => ({}()``)\nx => ({}().b);\na = b => c;\nx => (y = z);\nx => (y += z);\nf(a => ({})) + 1;\n(a => ({})) || 0;\na = b => c;\na = b => {\n  return c\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 603
}
```

### Printed

```javascript
(a => {}).length;
typeof (() => {});

(() => {})()``;

(() => {})``;

new (() => {});

if ((() => {}) ? 1 : 0) {}

let f = () => ({}());

let a = () => ({} instanceof a);

a = () => ({} && a);

a = () => ({}() && a);

a = () => ({} && a && b);

a = () => ({} + a);

a = () => ({}()() && a);

a = () => ({}.b && a);

a = () => ({}[b] && a);

a = () => ({}`` && a);

a = () => ({} = 0);

a = () => ({}, a);

a => a instanceof {};

a => ({}().b && 0);

a => ({}().c = 0);

x => ({}()());

x => ({}()``);

x => ({}().b);

a = b => c;

x => (y = z);

x => (y += z);

f(a => ({})) + 1;

(a => ({})) || 0;

a = b => c;

a = b => {
  return c;
};

```

### Diagnostics

```javascript
✔ No errors
```

