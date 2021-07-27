# Kataw parser test case

## Input

`````js

// with preexisting semi

x; [1, 2, 3].forEach(fn)
x; [a, b, ...c] = [1, 2]
x; /r/i.test('r')
x; +1
x; - 1
x; ('h' + 'i').repeat(10)
x; (1, 2)
x; (() => {})()
x; ({ a: 1 }).entries()
x; ({ a: 1 }).entries()
x; <Hello />
x; `string`
x; (x, y) => x

// doesn't have to be preceded by a semicolon

class X {} [1, 2, 3].forEach(fn)


// don't semicolon if it doesn't start statement

if (true) (() => {})()


// check indentation

if (true) {
  x; (() => {})()
}

// check statement clauses

do break; while (false)
if (true) do break; while (false)

if (true) 1; else 2
for (;;) ;
for (x of y) ;

debugger

// check that it doesn't break non-ASI

1
- 1

1
+ 1

1
/ 1

arr
[0]

fn
(x)

!1

1
< 1

tag
`string`

x; x => x

x; (a || b).c++

x; ++(a || b).c

while (false)
  (function(){}())

aReallyLongLine012345678901234567890123456789012345678901234567890123456789 *
  (b + c)

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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 32
                                },
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 35
                                },
                                {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 38
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 29,
                        "end": 39
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "forEach",
                        "rawText": "forEach",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 47
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 29,
                    "end": 47
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 50
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 50
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 29,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 51,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 51,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 57
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 60
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 65
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 66
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 66
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 66
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 54,
                    "end": 67
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 69
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 72
                            },
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 75
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 75
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 69,
                    "end": 76
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 54,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 54,
            "end": 76
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 76,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 76,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 371,
                        "text": "/r/i",
                        "rawText": "/r/i",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 84
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "test",
                        "rawText": "test",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 85,
                        "end": 89
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 79,
                    "end": 89
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392131,
                            "text": "r",
                            "rawText": "'r'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 93
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 93
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 79,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 79,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 94,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 94,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 99
                },
                "operand": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 100
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 97,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 97,
            "end": 100
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 100,
                "end": 102
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 100,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 105
                },
                "operand": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 107
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 103,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 103,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 107,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 107,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 201392131,
                                "text": "h",
                                "rawText": "'h'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 112,
                                "end": 115
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 117
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "i",
                                "rawText": "'i'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 121
                            },
                            "flags": 4194400,
                            "transformFlags": 5120,
                            "start": 112,
                            "end": 121
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 110,
                        "end": 122
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "repeat",
                        "rawText": "repeat",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 123,
                        "end": 129
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 110,
                    "end": 129
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 130,
                            "end": 132
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 130,
                    "end": 132
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 110,
                "end": 133
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 110,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 133,
                "end": 135
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 133,
            "end": 136
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 138,
                            "end": 139
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 142
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 136,
                    "end": 142
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 136,
                "end": 143
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 136,
            "end": 143
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 143,
                "end": 145
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 143,
            "end": 146
        },
        {
            "kind": 120,
            "expression": {
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
                            "start": 149,
                            "end": 149
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 150,
                            "end": 153
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 155,
                                "end": 155
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 156
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 156
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 146,
                    "end": 157
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 158
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 146,
                "end": 159
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 146,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 159,
                "end": 161
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 159,
            "end": 162
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
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
                                            "transformFlags": 0,
                                            "start": 165,
                                            "end": 167
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 168,
                                            "end": 170
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 165,
                                        "end": 170
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 165,
                                "end": 170
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 164,
                            "end": 172
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 162,
                        "end": 173
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "entries",
                        "rawText": "entries",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 174,
                        "end": 181
                    },
                    "flags": 34,
                    "transformFlags": 2,
                    "start": 162,
                    "end": 181
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 182,
                    "end": 182
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 162,
                "end": 183
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 162,
            "end": 183
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 183,
                "end": 185
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 183,
            "end": 186
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
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
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 191
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 192,
                                            "end": 194
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 189,
                                        "end": 194
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 189,
                                "end": 194
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 188,
                            "end": 196
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 186,
                        "end": 197
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "entries",
                        "rawText": "entries",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 198,
                        "end": 205
                    },
                    "flags": 34,
                    "transformFlags": 2,
                    "start": 186,
                    "end": 205
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 206,
                    "end": 206
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 186,
                "end": 207
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 186,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 207,
                "end": 209
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 207,
            "end": 210
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 210,
                        "end": 210
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 210,
                        "end": 212
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "Hello",
                            "rawText": "Hello",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 212,
                            "end": 217
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 217,
                            "end": 219
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 219
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 217,
                        "end": 219
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 210,
                    "end": 219
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 219,
                    "end": 220
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 220,
                    "end": 222
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 210,
                "end": 222
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 210,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "string",
                "rawText": "string",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 223,
                "end": 232
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 223,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 232,
                "end": 234
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 232,
            "end": 235
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 237,
                            "end": 238
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 239,
                            "end": 241
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 237,
                    "end": 242
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 242,
                    "end": 245
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 245,
                    "end": 247
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 235,
                "end": 247
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 235,
            "end": 247
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 247,
                "end": 301
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 301,
                "end": 303
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 305
                },
                "flags": 303,
                "transformFlags": 0,
                "start": 32,
                "end": 306
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 247,
            "end": 306
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 308,
                                    "end": 309
                                },
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 310,
                                    "end": 312
                                },
                                {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 313,
                                    "end": 315
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 308,
                            "end": 315
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 306,
                        "end": 316
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "forEach",
                        "rawText": "forEach",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 317,
                        "end": 324
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 306,
                    "end": 324
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 325,
                            "end": 327
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 325,
                    "end": 327
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 306,
                "end": 328
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 306,
            "end": 328
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 328,
                "end": 383
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 385,
                "end": 389
            },
            "consequent": {
                "kind": 120,
                "expression": {
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
                                "start": 393,
                                "end": 393
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 394,
                                "end": 397
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 399,
                                    "end": 399
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 397,
                                "end": 400
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 392,
                            "end": 400
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 390,
                        "end": 401
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 402,
                        "end": 402
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 390,
                    "end": 403
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 390,
                "end": 403
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 328,
            "end": 403
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 403,
                "end": 430
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 432,
                "end": 436
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 439,
                                "end": 443
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 439,
                            "end": 444
                        },
                        {
                            "kind": 120,
                            "expression": {
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
                                            "start": 447,
                                            "end": 447
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 448,
                                            "end": 451
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 453,
                                                "end": 453
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 451,
                                            "end": 454
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 446,
                                        "end": 454
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 444,
                                    "end": 455
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 456,
                                    "end": 456
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 444,
                                "end": 457
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 444,
                            "end": 457
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 439,
                    "end": 457
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 437,
                "end": 459
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 403,
            "end": 459
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 81,
                "transformFlags": 0,
                "start": 459,
                "end": 491
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 491,
                    "end": 497
                },
                "label": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 491,
                "end": 498
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 498,
                "end": 504
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 506,
                "end": 511
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 459,
            "end": 512
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 512,
                "end": 515
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 517,
                "end": 521
            },
            "consequent": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 522,
                    "end": 525
                },
                "statement": {
                    "kind": 150,
                    "breakKeyword": {
                        "kind": 37757005,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 525,
                        "end": 531
                    },
                    "label": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 525,
                    "end": 532
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 532,
                    "end": 538
                },
                "expression": {
                    "kind": 205586437,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 540,
                    "end": 545
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 522,
                "end": 546
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 512,
            "end": 546
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 546,
                "end": 550
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 552,
                "end": 556
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 557,
                    "end": 559
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 557,
                "end": 560
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 560,
                "end": 565
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 565,
                    "end": 567
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 565,
                "end": 567
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 546,
            "end": 567
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 567,
                "end": 571
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 576,
                "end": 578
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 567,
            "end": 578
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 578,
                "end": 582
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 584,
                "end": 585
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 585,
                "end": 588
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 588,
                "end": 590
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 591,
                "end": 593
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 578,
            "end": 593
        },
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 81,
                "transformFlags": 0,
                "start": 593,
                "end": 603
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 593,
            "end": 603
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 603,
                    "end": 646
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 646,
                    "end": 648
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 648,
                    "end": 650
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 603,
                "end": 650
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 603,
            "end": 650
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 650,
                    "end": 653
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 653,
                    "end": 655
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 655,
                    "end": 657
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 650,
                "end": 657
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 650,
            "end": 657
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 657,
                    "end": 660
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 97,
                    "transformFlags": 32,
                    "start": 660,
                    "end": 662
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 662,
                    "end": 664
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 657,
                "end": 664
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 657,
            "end": 664
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 664,
                    "end": 669
                },
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 671,
                    "end": 672
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 664,
                "end": 673
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 664,
            "end": 673
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 673,
                    "end": 677
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 679,
                            "end": 680
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 679,
                    "end": 680
                },
                "flags": 33,
                "transformFlags": 1,
                "start": 673,
                "end": 681
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 673,
            "end": 681
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 681,
                    "end": 684
                },
                "operand": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 684,
                    "end": 685
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 681,
                "end": 685
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 681,
            "end": 685
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 685,
                    "end": 688
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 688,
                    "end": 690
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 690,
                    "end": 692
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 685,
                "end": 692
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 685,
            "end": 692
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 692,
                    "end": 697
                },
                "template": {
                    "kind": 458761,
                    "text": "string",
                    "rawText": "string",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 697,
                    "end": 706
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 692,
                "end": 706
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 692,
            "end": 706
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 706,
                "end": 709
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 706,
            "end": 710
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
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 710,
                    "end": 712
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 712,
                    "end": 715
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 715,
                    "end": 717
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 710,
                "end": 717
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 710,
            "end": 717
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 717,
                "end": 720
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 717,
            "end": 721
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 732,
                    "end": 734
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 723,
                                "end": 724
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 724,
                                "end": 727
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 727,
                                "end": 729
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 721,
                            "end": 729
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 721,
                        "end": 730
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 731,
                        "end": 732
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 721,
                    "end": 732
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 721,
                "end": 734
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 721,
            "end": 734
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 734,
                "end": 737
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 734,
            "end": 738
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 738,
                    "end": 741
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 742,
                                "end": 743
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 743,
                                "end": 746
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 746,
                                "end": 748
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 741,
                            "end": 748
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 741,
                        "end": 749
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 750,
                        "end": 751
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 741,
                    "end": 751
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 738,
                "end": 751
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 738,
            "end": 751
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 751,
                "end": 758
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 760,
                "end": 765
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 770,
                                "end": 778
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 779,
                                "end": 779
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 781,
                                    "end": 781
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 780,
                                "end": 782
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 770,
                            "end": 782
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 783,
                            "end": 783
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 770,
                        "end": 784
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 766,
                    "end": 785
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 766,
                "end": 785
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 751,
            "end": 785
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "aReallyLongLine012345678901234567890123456789012345678901234567890123456789",
                    "rawText": "aReallyLongLine012345678901234567890123456789012345678901234567890123456789",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 785,
                    "end": 862
                },
                "operatorToken": {
                    "kind": 201360950,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 862,
                    "end": 864
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 868,
                            "end": 869
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 869,
                            "end": 871
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 871,
                            "end": 873
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 864,
                        "end": 873
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 864,
                    "end": 874
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 785,
                "end": 874
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 785,
            "end": 874
        }
    ],
    "isModule": false,
    "source": "\n// with preexisting semi\n\nx; [1, 2, 3].forEach(fn)\nx; [a, b, ...c] = [1, 2]\nx; /r/i.test('r')\nx; +1\nx; - 1\nx; ('h' + 'i').repeat(10)\nx; (1, 2)\nx; (() => {})()\nx; ({ a: 1 }).entries()\nx; ({ a: 1 }).entries()\nx; <Hello />\nx; `string`\nx; (x, y) => x\n\n// doesn't have to be preceded by a semicolon\n\nclass X {} [1, 2, 3].forEach(fn)\n\n\n// don't semicolon if it doesn't start statement\n\nif (true) (() => {})()\n\n\n// check indentation\n\nif (true) {\n  x; (() => {})()\n}\n\n// check statement clauses\n\ndo break; while (false)\nif (true) do break; while (false)\n\nif (true) 1; else 2\nfor (;;) ;\nfor (x of y) ;\n\ndebugger\n\n// check that it doesn't break non-ASI\n\n1\n- 1\n\n1\n+ 1\n\n1\n/ 1\n\narr\n[0]\n\nfn\n(x)\n\n!1\n\n1\n< 1\n\ntag\n`string`\n\nx; x => x\n\nx; (a || b).c++\n\nx; ++(a || b).c\n\nwhile (false)\n  (function(){}())\n\naReallyLongLine012345678901234567890123456789012345678901234567890123456789 *\n  (b + c)\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 875
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 210, end: 212
✖ Identifier expected - start: 219, end: 220

```

