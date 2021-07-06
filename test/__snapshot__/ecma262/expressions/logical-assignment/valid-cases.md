# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
x(y.z ?? 1);
x(y[z] ?? 1);

x(0 ?? 1);
x(0n ?? 1);
x('' ?? 1);
x(/./ ?? 1);
x({} ?? 1);
x((() => {}) ?? 1);
x(class {} ?? 1);
x(function() {} ?? 1);

x(null ?? 1);
x(undefined ?? 1);

x(void y ?? 1);
x(-y ?? 1);
x(+y ?? 1);
x(!y ?? 1);
x(~y ?? 1);
x(--y ?? 1);
x(++y ?? 1);
x(y-- ?? 1);
x(y++ ?? 1);
x(delete y ?? 1);
x(typeof y ?? 1);

x((y, 0) ?? 1);
x((y, !z) ?? 1);
x((y, null) ?? 1);
x((y, void z) ?? 1);

x((y + z) ?? 1);
x((y - z) ?? 1);
x((y * z) ?? 1);
x((y / z) ?? 1);
x((y % z) ?? 1);
x((y ** z) ?? 1);
x((y << z) ?? 1);
x((y >> z) ?? 1);
x((y >>> z) ?? 1);
x((y | z) ?? 1);
x((y & z) ?? 1);
x((y ^ z) ?? 1);
x((y < z) ?? 1);
x((y > z) ?? 1);
x((y <= z) ?? 1);
x((y >= z) ?? 1);
x((y == z) ?? 1);
x((y != z) ?? 1);
x((y === z) ?? 1);
x((y !== z) ?? 1);

x((y || z) ?? 1);
x((y && z) ?? 1);
x((y ?? z) ?? 1);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 5
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 2,
                                "end": 5
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 2,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 10
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 130,
                                "member": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 18
                                },
                                "flags": 536870944,
                                "transformFlags": 4,
                                "start": 15,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 24
                            },
                            "flags": 536870944,
                            "transformFlags": 1024,
                            "start": 15,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 24
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 12,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 29
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 31
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 34
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 30,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 36
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 26,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 40
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 201392400,
                                "text": 0,
                                "rawText": "0n",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 43
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 41,
                            "end": 48
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 48
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 38,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 38,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 52
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 201392131,
                                "text": "",
                                "rawText": "''",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 55
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 58
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 60
                            },
                            "flags": 4194400,
                            "transformFlags": 1024,
                            "start": 53,
                            "end": 60
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 60
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 50,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 50,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 371,
                                "text": "/./",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 68
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 71
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 73
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 65,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 73
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 62,
                "end": 74
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 62,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 77
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 79,
                                    "end": 79
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 78,
                                "end": 80
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 83
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 85
                            },
                            "flags": 48,
                            "transformFlags": 1024,
                            "start": 78,
                            "end": 85
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 85
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 75,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 75,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 89
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
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
                                        "start": 92,
                                        "end": 92
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 93,
                                        "end": 96
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 98,
                                            "end": 98
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 99
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 99
                                },
                                "flags": 90,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 100
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 103
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 103,
                                "end": 105
                            },
                            "flags": 122,
                            "transformFlags": 1024,
                            "start": 90,
                            "end": 105
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 105
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 87,
                "end": 106
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 87,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 109
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 110,
                                    "end": 115
                                },
                                "name": null,
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 117
                                    },
                                    "flags": 115,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 118
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 118
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 121
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 123
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 110,
                            "end": 123
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 123
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 107,
                "end": 124
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 107,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 125,
                    "end": 127
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 128,
                                    "end": 136
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
                                    "start": 137,
                                    "end": 137
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 140,
                                        "end": 140
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 138,
                                    "end": 141
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 128,
                                "end": 141
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 144
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 146
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 128,
                            "end": 146
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 146
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 125,
                "end": 147
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 125,
            "end": 148
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 148,
                    "end": 151
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 152,
                                "end": 156
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 159
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 161
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 152,
                            "end": 161
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 161
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 148,
                "end": 162
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 148,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 163,
                    "end": 165
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 166,
                                "end": 175
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 175,
                                "end": 178
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 178,
                                "end": 180
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 166,
                            "end": 180
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 166,
                    "end": 180
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 163,
                "end": 181
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 163,
            "end": 182
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 182,
                    "end": 185
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477615,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 186,
                                    "end": 190
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 190,
                                    "end": 192
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 186,
                                "end": 192
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 192,
                                "end": 195
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 195,
                                "end": 197
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 186,
                            "end": 197
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 197
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 182,
                "end": 198
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 182,
            "end": 199
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 199,
                    "end": 201
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 202,
                                    "end": 203
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 204
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 202,
                                "end": 204
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 204,
                                "end": 207
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 209
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 202,
                            "end": 209
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 202,
                    "end": 209
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 199,
                "end": 210
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 199,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 213
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 214,
                                    "end": 215
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 215,
                                    "end": 216
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 214,
                                "end": 216
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 219
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 219,
                                "end": 221
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 214,
                            "end": 221
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 214,
                    "end": 221
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 211,
                "end": 222
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 211,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 223,
                    "end": 225
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 226,
                                    "end": 227
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 228
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 226,
                                "end": 228
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 228,
                                "end": 231
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 231,
                                "end": 233
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 226,
                            "end": 233
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 226,
                    "end": 233
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 223,
                "end": 234
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 223,
            "end": 235
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 235,
                    "end": 237
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65585,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 238,
                                    "end": 239
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 240
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 238,
                                "end": 240
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 240,
                                "end": 243
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 243,
                                "end": 245
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 238,
                            "end": 245
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 238,
                    "end": 245
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 235,
                "end": 246
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 235,
            "end": 247
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 247,
                    "end": 249
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 250,
                                    "end": 252
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 252,
                                    "end": 253
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 250,
                                "end": 253
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 253,
                                "end": 256
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 256,
                                "end": 258
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 250,
                            "end": 258
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 250,
                    "end": 258
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 247,
                "end": 259
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 247,
            "end": 260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 260,
                    "end": 262
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 263,
                                    "end": 265
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 265,
                                    "end": 266
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 263,
                                "end": 266
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 266,
                                "end": 269
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 269,
                                "end": 271
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 263,
                            "end": 271
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 263,
                    "end": 271
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 260,
                "end": 272
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 260,
            "end": 273
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 273,
                    "end": 275
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 277,
                                    "end": 279
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 276,
                                    "end": 277
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 276,
                                "end": 279
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 279,
                                "end": 282
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 282,
                                "end": 284
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 276,
                            "end": 284
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 276,
                    "end": 284
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 273,
                "end": 285
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 273,
            "end": 286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 286,
                    "end": 288
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 290,
                                    "end": 292
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 289,
                                    "end": 290
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 289,
                                "end": 292
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 292,
                                "end": 295
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 297
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 289,
                            "end": 297
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 289,
                    "end": 297
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 286,
                "end": 298
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 286,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 299,
                    "end": 301
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 302,
                                    "end": 308
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 308,
                                    "end": 310
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 302,
                                "end": 310
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 313
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 313,
                                "end": 315
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 302,
                            "end": 315
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 302,
                    "end": 315
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 299,
                "end": 316
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 299,
            "end": 317
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 317,
                    "end": 319
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477613,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 320,
                                    "end": 326
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 326,
                                    "end": 328
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 320,
                                "end": 328
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 328,
                                "end": 331
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 331,
                                "end": 333
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 320,
                            "end": 333
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 320,
                    "end": 333
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 317,
                "end": 334
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 317,
            "end": 335
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 335,
                    "end": 338
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 340,
                                            "end": 341
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 342,
                                            "end": 344
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 339,
                                    "end": 344
                                },
                                "flags": 339,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 345
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 345,
                                "end": 348
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 348,
                                "end": 350
                            },
                            "flags": 371,
                            "transformFlags": 1024,
                            "start": 339,
                            "end": 350
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 339,
                    "end": 350
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 335,
                "end": 351
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 335,
            "end": 352
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 352,
                    "end": 354
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 356,
                                            "end": 357
                                        },
                                        {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 358,
                                                "end": 360
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 360,
                                                "end": 361
                                            },
                                            "flags": 32,
                                            "transformFlags": 1024,
                                            "start": 358,
                                            "end": 361
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 355,
                                    "end": 361
                                },
                                "flags": 355,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 362
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 365
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 365,
                                "end": 367
                            },
                            "flags": 355,
                            "transformFlags": 1024,
                            "start": 355,
                            "end": 367
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 355,
                    "end": 367
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 352,
                "end": 368
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 352,
            "end": 369
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 369,
                    "end": 371
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 373,
                                            "end": 374
                                        },
                                        {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 375,
                                            "end": 380
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 372,
                                    "end": 380
                                },
                                "flags": 372,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 381
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 381,
                                "end": 384
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 384,
                                "end": 386
                            },
                            "flags": 372,
                            "transformFlags": 1024,
                            "start": 372,
                            "end": 386
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 372,
                    "end": 386
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 369,
                "end": 387
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 369,
            "end": 388
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 388,
                    "end": 390
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 392,
                                            "end": 393
                                        },
                                        {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 138477615,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 394,
                                                "end": 399
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 399,
                                                "end": 401
                                            },
                                            "flags": 32,
                                            "transformFlags": 1024,
                                            "start": 394,
                                            "end": 401
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 391,
                                    "end": 401
                                },
                                "flags": 391,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 402
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 402,
                                "end": 405
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 405,
                                "end": 407
                            },
                            "flags": 423,
                            "transformFlags": 1024,
                            "start": 391,
                            "end": 407
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 391,
                    "end": 407
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 388,
                "end": 408
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 388,
            "end": 409
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 409,
                    "end": 412
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 414,
                                        "end": 415
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 415,
                                        "end": 417
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 417,
                                        "end": 419
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 413,
                                    "end": 419
                                },
                                "flags": 413,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 420
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 420,
                                "end": 423
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 423,
                                "end": 425
                            },
                            "flags": 445,
                            "transformFlags": 1024,
                            "start": 413,
                            "end": 425
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 413,
                    "end": 425
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 409,
                "end": 426
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 409,
            "end": 427
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 427,
                    "end": 429
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 431,
                                        "end": 432
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 432,
                                        "end": 434
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 434,
                                        "end": 436
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 430,
                                    "end": 436
                                },
                                "flags": 430,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 437
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 437,
                                "end": 440
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 440,
                                "end": 442
                            },
                            "flags": 430,
                            "transformFlags": 1024,
                            "start": 430,
                            "end": 442
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 430,
                    "end": 442
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 427,
                "end": 443
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 427,
            "end": 444
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 444,
                    "end": 446
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 448,
                                        "end": 449
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 449,
                                        "end": 451
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 451,
                                        "end": 453
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 447,
                                    "end": 453
                                },
                                "flags": 447,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 454
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 454,
                                "end": 457
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 457,
                                "end": 459
                            },
                            "flags": 447,
                            "transformFlags": 1024,
                            "start": 447,
                            "end": 459
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 447,
                    "end": 459
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 444,
                "end": 460
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 444,
            "end": 461
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 461,
                    "end": 463
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 465,
                                        "end": 466
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 466,
                                        "end": 468
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 468,
                                        "end": 470
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 464,
                                    "end": 470
                                },
                                "flags": 464,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 471
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 471,
                                "end": 474
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 474,
                                "end": 476
                            },
                            "flags": 496,
                            "transformFlags": 1024,
                            "start": 464,
                            "end": 476
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 464,
                    "end": 476
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 461,
                "end": 477
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 461,
            "end": 478
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 478,
                    "end": 480
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 482,
                                        "end": 483
                                    },
                                    "operatorToken": {
                                        "kind": 35639,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 483,
                                        "end": 485
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 485,
                                        "end": 487
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 481,
                                    "end": 487
                                },
                                "flags": 481,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 488
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 488,
                                "end": 491
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 491,
                                "end": 493
                            },
                            "flags": 481,
                            "transformFlags": 1024,
                            "start": 481,
                            "end": 493
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 481,
                    "end": 493
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 478,
                "end": 494
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 478,
            "end": 495
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 495,
                    "end": 497
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 499,
                                        "end": 500
                                    },
                                    "operatorToken": {
                                        "kind": 35897,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 500,
                                        "end": 503
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 503,
                                        "end": 505
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 498,
                                    "end": 505
                                },
                                "flags": 498,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 506
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 506,
                                "end": 509
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 509,
                                "end": 511
                            },
                            "flags": 498,
                            "transformFlags": 1024,
                            "start": 498,
                            "end": 511
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 498,
                    "end": 511
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 495,
                "end": 512
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 495,
            "end": 513
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 513,
                    "end": 515
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 517,
                                        "end": 518
                                    },
                                    "operatorToken": {
                                        "kind": 35140,
                                        "flags": 96,
                                        "transformFlags": 64,
                                        "start": 518,
                                        "end": 521
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 521,
                                        "end": 523
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 516,
                                    "end": 523
                                },
                                "flags": 516,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 524
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 524,
                                "end": 527
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 527,
                                "end": 529
                            },
                            "flags": 548,
                            "transformFlags": 1024,
                            "start": 516,
                            "end": 529
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 516,
                    "end": 529
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 513,
                "end": 530
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 513,
            "end": 531
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 531,
                    "end": 533
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 535,
                                        "end": 536
                                    },
                                    "operatorToken": {
                                        "kind": 35141,
                                        "flags": 96,
                                        "transformFlags": 64,
                                        "start": 536,
                                        "end": 539
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 539,
                                        "end": 541
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 534,
                                    "end": 541
                                },
                                "flags": 534,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 542
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 542,
                                "end": 545
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 545,
                                "end": 547
                            },
                            "flags": 566,
                            "transformFlags": 1024,
                            "start": 534,
                            "end": 547
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 534,
                    "end": 547
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 531,
                "end": 548
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 531,
            "end": 549
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 549,
                    "end": 551
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 553,
                                        "end": 554
                                    },
                                    "operatorToken": {
                                        "kind": 35142,
                                        "flags": 96,
                                        "transformFlags": 64,
                                        "start": 554,
                                        "end": 558
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 558,
                                        "end": 560
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 552,
                                    "end": 560
                                },
                                "flags": 552,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 561
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 561,
                                "end": 564
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 564,
                                "end": 566
                            },
                            "flags": 552,
                            "transformFlags": 1024,
                            "start": 552,
                            "end": 566
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 552,
                    "end": 566
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 549,
                "end": 567
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 549,
            "end": 568
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 568,
                    "end": 570
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 572,
                                        "end": 573
                                    },
                                    "operatorToken": {
                                        "kind": 134251592,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 573,
                                        "end": 575
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 575,
                                        "end": 577
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 571,
                                    "end": 577
                                },
                                "flags": 571,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 578
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 578,
                                "end": 581
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 581,
                                "end": 583
                            },
                            "flags": 571,
                            "transformFlags": 1024,
                            "start": 571,
                            "end": 583
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 571,
                    "end": 583
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 568,
                "end": 584
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 568,
            "end": 585
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 585,
                    "end": 587
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 589,
                                        "end": 590
                                    },
                                    "operatorToken": {
                                        "kind": 134252103,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 590,
                                        "end": 592
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 592,
                                        "end": 594
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 588,
                                    "end": 594
                                },
                                "flags": 588,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 595
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 595,
                                "end": 598
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 598,
                                "end": 600
                            },
                            "flags": 620,
                            "transformFlags": 1024,
                            "start": 588,
                            "end": 600
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 588,
                    "end": 600
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 585,
                "end": 601
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 585,
            "end": 602
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 602,
                    "end": 604
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 606,
                                        "end": 607
                                    },
                                    "operatorToken": {
                                        "kind": 134251849,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 607,
                                        "end": 609
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 609,
                                        "end": 611
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 605,
                                    "end": 611
                                },
                                "flags": 605,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 612
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 612,
                                "end": 615
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 615,
                                "end": 617
                            },
                            "flags": 637,
                            "transformFlags": 1024,
                            "start": 605,
                            "end": 617
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 605,
                    "end": 617
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 602,
                "end": 618
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 602,
            "end": 619
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 619,
                    "end": 621
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 623,
                                        "end": 624
                                    },
                                    "operatorToken": {
                                        "kind": 536971330,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 624,
                                        "end": 626
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 626,
                                        "end": 628
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 622,
                                    "end": 628
                                },
                                "flags": 622,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 629
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 629,
                                "end": 632
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 632,
                                "end": 634
                            },
                            "flags": 622,
                            "transformFlags": 1024,
                            "start": 622,
                            "end": 634
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 622,
                    "end": 634
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 619,
                "end": 635
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 619,
            "end": 636
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 636,
                    "end": 638
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 640,
                                        "end": 641
                                    },
                                    "operatorToken": {
                                        "kind": 34883,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 641,
                                        "end": 643
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 643,
                                        "end": 645
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 639,
                                    "end": 645
                                },
                                "flags": 639,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 646
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 646,
                                "end": 649
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 649,
                                "end": 651
                            },
                            "flags": 639,
                            "transformFlags": 1024,
                            "start": 639,
                            "end": 651
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 639,
                    "end": 651
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 636,
                "end": 652
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 636,
            "end": 653
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 653,
                    "end": 655
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 657,
                                        "end": 658
                                    },
                                    "operatorToken": {
                                        "kind": 34880,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 658,
                                        "end": 661
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 661,
                                        "end": 663
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 656,
                                    "end": 663
                                },
                                "flags": 656,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 664
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 664,
                                "end": 667
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 667,
                                "end": 669
                            },
                            "flags": 688,
                            "transformFlags": 1024,
                            "start": 656,
                            "end": 669
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 656,
                    "end": 669
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 653,
                "end": 670
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 653,
            "end": 671
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 671,
                    "end": 673
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 675,
                                        "end": 676
                                    },
                                    "operatorToken": {
                                        "kind": 34881,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 676,
                                        "end": 679
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 679,
                                        "end": 681
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 674,
                                    "end": 681
                                },
                                "flags": 674,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 682
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 682,
                                "end": 685
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 685,
                                "end": 687
                            },
                            "flags": 674,
                            "transformFlags": 1024,
                            "start": 674,
                            "end": 687
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 674,
                    "end": 687
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 671,
                "end": 688
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 671,
            "end": 689
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 689,
                    "end": 691
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 693,
                                        "end": 694
                                    },
                                    "operatorToken": {
                                        "kind": 34622,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 694,
                                        "end": 697
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 697,
                                        "end": 699
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 692,
                                    "end": 699
                                },
                                "flags": 692,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 700
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 700,
                                "end": 703
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 703,
                                "end": 705
                            },
                            "flags": 692,
                            "transformFlags": 1024,
                            "start": 692,
                            "end": 705
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 692,
                    "end": 705
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 689,
                "end": 706
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 689,
            "end": 707
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 707,
                    "end": 709
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 711,
                                        "end": 712
                                    },
                                    "operatorToken": {
                                        "kind": 34623,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 712,
                                        "end": 715
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 715,
                                        "end": 717
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 710,
                                    "end": 717
                                },
                                "flags": 710,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 718
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 718,
                                "end": 721
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 721,
                                "end": 723
                            },
                            "flags": 742,
                            "transformFlags": 1024,
                            "start": 710,
                            "end": 723
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 710,
                    "end": 723
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 707,
                "end": 724
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 707,
            "end": 725
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 725,
                    "end": 727
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 729,
                                        "end": 730
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 730,
                                        "end": 734
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 734,
                                        "end": 736
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 728,
                                    "end": 736
                                },
                                "flags": 728,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 737
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 737,
                                "end": 740
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 740,
                                "end": 742
                            },
                            "flags": 760,
                            "transformFlags": 1024,
                            "start": 728,
                            "end": 742
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 728,
                    "end": 742
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 725,
                "end": 743
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 725,
            "end": 744
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 744,
                    "end": 746
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 748,
                                        "end": 749
                                    },
                                    "operatorToken": {
                                        "kind": 34621,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 749,
                                        "end": 753
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 753,
                                        "end": 755
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 747,
                                    "end": 755
                                },
                                "flags": 747,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 756
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 756,
                                "end": 759
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 759,
                                "end": 761
                            },
                            "flags": 747,
                            "transformFlags": 1024,
                            "start": 747,
                            "end": 761
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 747,
                    "end": 761
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 744,
                "end": 762
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 744,
            "end": 763
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 763,
                    "end": 766
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 768,
                                        "end": 769
                                    },
                                    "operatorToken": {
                                        "kind": 33339,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 769,
                                        "end": 772
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 772,
                                        "end": 774
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 767,
                                    "end": 774
                                },
                                "flags": 767,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 775
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 775,
                                "end": 778
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 778,
                                "end": 780
                            },
                            "flags": 767,
                            "transformFlags": 1024,
                            "start": 767,
                            "end": 780
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 767,
                    "end": 780
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 763,
                "end": 781
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 763,
            "end": 782
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 782,
                    "end": 784
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 786,
                                        "end": 787
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 787,
                                        "end": 790
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 790,
                                        "end": 792
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 785,
                                    "end": 792
                                },
                                "flags": 785,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 793
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 793,
                                "end": 796
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 796,
                                "end": 798
                            },
                            "flags": 817,
                            "transformFlags": 1024,
                            "start": 785,
                            "end": 798
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 785,
                    "end": 798
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 782,
                "end": 799
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 782,
            "end": 800
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 800,
                    "end": 802
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 804,
                                        "end": 805
                                    },
                                    "operatorToken": {
                                        "kind": 33047,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 805,
                                        "end": 808
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 808,
                                        "end": 810
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 803,
                                    "end": 810
                                },
                                "flags": 803,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 811
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 811,
                                "end": 814
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 814,
                                "end": 816
                            },
                            "flags": 803,
                            "transformFlags": 1024,
                            "start": 803,
                            "end": 816
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 803,
                    "end": 816
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 800,
                "end": 817
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 800,
            "end": 818
        }
    ],
    "isModule": false,
    "source": "x(y.z ?? 1);\nx(y[z] ?? 1);\n\nx(0 ?? 1);\nx(0n ?? 1);\nx('' ?? 1);\nx(/./ ?? 1);\nx({} ?? 1);\nx((() => {}) ?? 1);\nx(class {} ?? 1);\nx(function() {} ?? 1);\n\nx(null ?? 1);\nx(undefined ?? 1);\n\nx(void y ?? 1);\nx(-y ?? 1);\nx(+y ?? 1);\nx(!y ?? 1);\nx(~y ?? 1);\nx(--y ?? 1);\nx(++y ?? 1);\nx(y-- ?? 1);\nx(y++ ?? 1);\nx(delete y ?? 1);\nx(typeof y ?? 1);\n\nx((y, 0) ?? 1);\nx((y, !z) ?? 1);\nx((y, null) ?? 1);\nx((y, void z) ?? 1);\n\nx((y + z) ?? 1);\nx((y - z) ?? 1);\nx((y * z) ?? 1);\nx((y / z) ?? 1);\nx((y % z) ?? 1);\nx((y ** z) ?? 1);\nx((y << z) ?? 1);\nx((y >> z) ?? 1);\nx((y >>> z) ?? 1);\nx((y | z) ?? 1);\nx((y & z) ?? 1);\nx((y ^ z) ?? 1);\nx((y < z) ?? 1);\nx((y > z) ?? 1);\nx((y <= z) ?? 1);\nx((y >= z) ?? 1);\nx((y == z) ?? 1);\nx((y != z) ?? 1);\nx((y === z) ?? 1);\nx((y !== z) ?? 1);\n\nx((y || z) ?? 1);\nx((y && z) ?? 1);\nx((y ?? z) ?? 1);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 818
}
```

### Printed

```javascript

x(
  y.z ?? 1
);
x(
  y[z] ?? 1
);

x(
  0 ?? 1
);

x(
  0n ?? 1
);

x(
  '\'\'' ?? 1
);

x(
  /./ ?? 1
);

x(
  {} ?? 1
);

x(
  (() => {}) ?? 1
);

x(
  class  {} ?? 1
);

x(
  function () {} ?? 1
);

x(
  null  ?? 1
);

x(
  undefined ?? 1
);

x(
  void y ?? 1
);

x(
  -y ?? 1
);

x(
  +y ?? 1
);

x(
  !y ?? 1
);

x(
  ~y ?? 1
);

x(
  -- y ?? 1
);

x(
  ++ y ?? 1
);

x(
  y--  ?? 1
);

x(
  y++  ?? 1
);

x(
  delete y ?? 1
);

x(
  typeof y ?? 1
);

x(
  (y, 0) ?? 1
);

x(
  (y, !z) ?? 1
);

x(
  (y, null ) ?? 1
);

x(
  (y, void z) ?? 1
);

x(
  (y + z) ?? 1
);

x(
  (y - z) ?? 1
);

x(
  (y * z) ?? 1
);

x(
  (y / z) ?? 1
);

x(
  (y % z) ?? 1
);

x(
  (y ** z) ?? 1
);

x(
  (y << z) ?? 1
);

x(
  (y >> z) ?? 1
);

x(
  (y >>> z) ?? 1
);

x(
  (y | z) ?? 1
);

x(
  (y & z) ?? 1
);

x(
  (y ^ z) ?? 1
);

x(
  (y  < z) ?? 1
);

x(
  (y > z) ?? 1
);

x(
  (y <= z) ?? 1
);

x(
  (y >= z) ?? 1
);

x(
  (y == z) ?? 1
);

x(
  (y != z) ?? 1
);

x(
  (y === z) ?? 1
);

x(
  (y !== z) ?? 1
);

x(
  (y || z) ?? 1
);

x(
  (y && z) ?? 1
);

x(
  (y ?? z) ?? 1
);

```

### Diagnostics

```javascript
✔ No errors
```

