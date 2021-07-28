# Kataw parser test case

## Input

`````js
// parentheses around numeric literal should be preserved
function test5(): string {
  return (100).toString();
}

0
1

0.1
1.1

.1
1.

0b1
0B1
0o1
0O1
0x1
0X1

0x123abcdef456ABCDEF
0X123abcdef456ABCDEF
0xdeadbeef;

0b111000
0b000111
0B111000
0B000111
0o111000
0o000111
0O111000
0O000111
0x111000
0x000111
0X111000
0X000111

1e1
1e+1
1e-1
1.e1
.1e1
1.1e1
1.1e0010
.1e+0010
.1e-0010

1E1
1E+1
1E-1
1.E1
.1E1
1.1E1
1.1E0010
.1E+0010
.1E-0010

0.5e0
0.5e00
0.5e+0
0.5e+00
0.5e-0
0.5e-00

1
1.00500
1.0
1.5
1.50
0
0.00500
0.0
0.0000
.0
500600.001230045000
1.00500e60
1.0e60
0.00500e60
0.0e60
0.0000e60
.0e60
0.e60
0e60
500600.001230045000e60
10
9700
10e100

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
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 66
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "test5",
                "rawText": "test5",
                "flags": 96,
                "transformFlags": 0,
                "start": 66,
                "end": 72
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 73,
                "end": 73
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
                                "start": 84,
                                "end": 93
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 100,
                                            "rawText": "100",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 98
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 93,
                                        "end": 99
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toString",
                                        "rawText": "toString",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 100,
                                        "end": 108
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 93,
                                    "end": 108
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 109,
                                    "end": 109
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 93,
                                "end": 110
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 84,
                            "end": 111
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 111
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 82,
                "end": 113
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 82
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 75,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 97,
                "transformFlags": 0,
                "start": 113,
                "end": 116
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 113,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 97,
                "transformFlags": 0,
                "start": 116,
                "end": 118
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 116,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.1,
                "rawText": "0.1",
                "flags": 32865,
                "transformFlags": 0,
                "start": 118,
                "end": 123
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 118,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.1,
                "rawText": "1.1",
                "flags": 32865,
                "transformFlags": 0,
                "start": 123,
                "end": 127
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 123,
            "end": 127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.1,
                "rawText": ".1",
                "flags": 97,
                "transformFlags": 0,
                "start": 127,
                "end": 131
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 127,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1.",
                "flags": 32865,
                "transformFlags": 0,
                "start": 131,
                "end": 134
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 131,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0b1",
                "flags": 524384,
                "transformFlags": 0,
                "start": 134,
                "end": 139
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 134,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0B1",
                "flags": 524384,
                "transformFlags": 0,
                "start": 139,
                "end": 143
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 139,
            "end": 143
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0o1",
                "flags": 262240,
                "transformFlags": 0,
                "start": 143,
                "end": 147
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 143,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0O1",
                "flags": 262240,
                "transformFlags": 0,
                "start": 147,
                "end": 151
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 147,
            "end": 151
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0x1",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 151,
                "end": 155
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 151,
            "end": 155
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0X1",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 155,
                "end": 159
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 155,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 336273896217600850000,
                "rawText": "0x123abcdef456ABCDEF",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 159,
                "end": 181
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 159,
            "end": 181
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 336273896217600850000,
                "rawText": "0X123abcdef456ABCDEF",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 181,
                "end": 202
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 181,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3735928559,
                "rawText": "0xdeadbeef",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 202,
                "end": 213
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 202,
            "end": 214
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 56,
                "rawText": "0b111000",
                "flags": 524384,
                "transformFlags": 0,
                "start": 214,
                "end": 224
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 214,
            "end": 224
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7,
                "rawText": "0b000111",
                "flags": 524384,
                "transformFlags": 0,
                "start": 224,
                "end": 233
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 224,
            "end": 233
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 56,
                "rawText": "0B111000",
                "flags": 524384,
                "transformFlags": 0,
                "start": 233,
                "end": 242
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 233,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7,
                "rawText": "0B000111",
                "flags": 524384,
                "transformFlags": 0,
                "start": 242,
                "end": 251
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 242,
            "end": 251
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 37376,
                "rawText": "0o111000",
                "flags": 262240,
                "transformFlags": 0,
                "start": 251,
                "end": 260
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 251,
            "end": 260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 73,
                "rawText": "0o000111",
                "flags": 262240,
                "transformFlags": 0,
                "start": 260,
                "end": 269
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 260,
            "end": 269
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 37376,
                "rawText": "0O111000",
                "flags": 262240,
                "transformFlags": 0,
                "start": 269,
                "end": 278
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 269,
            "end": 278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 73,
                "rawText": "0O000111",
                "flags": 262240,
                "transformFlags": 0,
                "start": 278,
                "end": 287
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 278,
            "end": 287
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1118208,
                "rawText": "0x111000",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 287,
                "end": 296
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 287,
            "end": 296
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 273,
                "rawText": "0x000111",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 296,
                "end": 305
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 296,
            "end": 305
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1118208,
                "rawText": "0X111000",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 305,
                "end": 314
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 305,
            "end": 314
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 273,
                "rawText": "0X000111",
                "flags": 1048672,
                "transformFlags": 0,
                "start": 314,
                "end": 323
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 314,
            "end": 323
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1e1",
                "flags": 97,
                "transformFlags": 0,
                "start": 323,
                "end": 328
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 323,
            "end": 328
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1e+1",
                "flags": 97,
                "transformFlags": 0,
                "start": 328,
                "end": 333
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 328,
            "end": 333
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.1,
                "rawText": "1e-1",
                "flags": 97,
                "transformFlags": 0,
                "start": 333,
                "end": 338
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 333,
            "end": 338
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1.e1",
                "flags": 32865,
                "transformFlags": 0,
                "start": 338,
                "end": 343
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 338,
            "end": 343
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": ".1e1",
                "flags": 97,
                "transformFlags": 0,
                "start": 343,
                "end": 348
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 343,
            "end": 348
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 11,
                "rawText": "1.1e1",
                "flags": 32865,
                "transformFlags": 0,
                "start": 348,
                "end": 354
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 348,
            "end": 354
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 11000000000,
                "rawText": "1.1e0010",
                "flags": 32865,
                "transformFlags": 0,
                "start": 354,
                "end": 363
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 354,
            "end": 363
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1000000000,
                "rawText": ".1e+0010",
                "flags": 97,
                "transformFlags": 0,
                "start": 363,
                "end": 372
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 363,
            "end": 372
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1e-11,
                "rawText": ".1e-0010",
                "flags": 97,
                "transformFlags": 0,
                "start": 372,
                "end": 381
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 372,
            "end": 381
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1E1",
                "flags": 97,
                "transformFlags": 0,
                "start": 381,
                "end": 386
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 381,
            "end": 386
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1E+1",
                "flags": 97,
                "transformFlags": 0,
                "start": 386,
                "end": 391
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 386,
            "end": 391
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.1,
                "rawText": "1E-1",
                "flags": 97,
                "transformFlags": 0,
                "start": 391,
                "end": 396
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 391,
            "end": 396
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1.E1",
                "flags": 32865,
                "transformFlags": 0,
                "start": 396,
                "end": 401
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 396,
            "end": 401
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": ".1E1",
                "flags": 97,
                "transformFlags": 0,
                "start": 401,
                "end": 406
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 401,
            "end": 406
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 11,
                "rawText": "1.1E1",
                "flags": 32865,
                "transformFlags": 0,
                "start": 406,
                "end": 412
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 406,
            "end": 412
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 11000000000,
                "rawText": "1.1E0010",
                "flags": 32865,
                "transformFlags": 0,
                "start": 412,
                "end": 421
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 412,
            "end": 421
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1000000000,
                "rawText": ".1E+0010",
                "flags": 97,
                "transformFlags": 0,
                "start": 421,
                "end": 430
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 421,
            "end": 430
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1e-11,
                "rawText": ".1E-0010",
                "flags": 97,
                "transformFlags": 0,
                "start": 430,
                "end": 439
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 430,
            "end": 439
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "rawText": "0.5e0",
                "flags": 32865,
                "transformFlags": 0,
                "start": 439,
                "end": 446
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 439,
            "end": 446
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "rawText": "0.5e00",
                "flags": 32865,
                "transformFlags": 0,
                "start": 446,
                "end": 453
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 446,
            "end": 453
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "rawText": "0.5e+0",
                "flags": 32865,
                "transformFlags": 0,
                "start": 453,
                "end": 460
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 453,
            "end": 460
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "rawText": "0.5e+00",
                "flags": 32865,
                "transformFlags": 0,
                "start": 460,
                "end": 468
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 460,
            "end": 468
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "rawText": "0.5e-0",
                "flags": 32865,
                "transformFlags": 0,
                "start": 468,
                "end": 475
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 468,
            "end": 475
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "rawText": "0.5e-00",
                "flags": 32865,
                "transformFlags": 0,
                "start": 475,
                "end": 483
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 475,
            "end": 483
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 97,
                "transformFlags": 0,
                "start": 483,
                "end": 486
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 483,
            "end": 486
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.005,
                "rawText": "1.00500",
                "flags": 32865,
                "transformFlags": 0,
                "start": 486,
                "end": 494
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 486,
            "end": 494
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1.0",
                "flags": 32865,
                "transformFlags": 0,
                "start": 494,
                "end": 498
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 494,
            "end": 498
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.5,
                "rawText": "1.5",
                "flags": 32865,
                "transformFlags": 0,
                "start": 498,
                "end": 502
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 498,
            "end": 502
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.5,
                "rawText": "1.50",
                "flags": 32865,
                "transformFlags": 0,
                "start": 502,
                "end": 507
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 502,
            "end": 507
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 97,
                "transformFlags": 0,
                "start": 507,
                "end": 509
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 507,
            "end": 509
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.005,
                "rawText": "0.00500",
                "flags": 32865,
                "transformFlags": 0,
                "start": 509,
                "end": 517
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 509,
            "end": 517
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0.0",
                "flags": 32865,
                "transformFlags": 0,
                "start": 517,
                "end": 521
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 517,
            "end": 521
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0.0000",
                "flags": 32865,
                "transformFlags": 0,
                "start": 521,
                "end": 528
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 521,
            "end": 528
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": ".0",
                "flags": 97,
                "transformFlags": 0,
                "start": 528,
                "end": 531
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 528,
            "end": 531
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 500600.001230045,
                "rawText": "500600.001230045000",
                "flags": 32865,
                "transformFlags": 0,
                "start": 531,
                "end": 551
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 531,
            "end": 551
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.005e+60,
                "rawText": "1.00500e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 551,
                "end": 562
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 551,
            "end": 562
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1e+60,
                "rawText": "1.0e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 562,
                "end": 569
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 562,
            "end": 569
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5e+57,
                "rawText": "0.00500e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 569,
                "end": 580
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 569,
            "end": 580
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0.0e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 580,
                "end": 587
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 580,
            "end": 587
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0.0000e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 587,
                "end": 597
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 587,
            "end": 597
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": ".0e60",
                "flags": 97,
                "transformFlags": 0,
                "start": 597,
                "end": 603
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 597,
            "end": 603
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0.e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 603,
                "end": 609
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 603,
            "end": 609
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0e60",
                "flags": 97,
                "transformFlags": 0,
                "start": 609,
                "end": 614
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 609,
            "end": 614
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5.00600001230045e+65,
                "rawText": "500600.001230045000e60",
                "flags": 32865,
                "transformFlags": 0,
                "start": 614,
                "end": 637
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 614,
            "end": 637
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "10",
                "flags": 97,
                "transformFlags": 0,
                "start": 637,
                "end": 640
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 637,
            "end": 640
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 9700,
                "rawText": "9700",
                "flags": 97,
                "transformFlags": 0,
                "start": 640,
                "end": 645
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 640,
            "end": 645
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1e+101,
                "rawText": "10e100",
                "flags": 97,
                "transformFlags": 0,
                "start": 645,
                "end": 652
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 645,
            "end": 652
        }
    ],
    "isModule": false,
    "source": "// parentheses around numeric literal should be preserved\nfunction test5(): string {\n  return (100).toString();\n}\n\n0\n1\n\n0.1\n1.1\n\n.1\n1.\n\n0b1\n0B1\n0o1\n0O1\n0x1\n0X1\n\n0x123abcdef456ABCDEF\n0X123abcdef456ABCDEF\n0xdeadbeef;\n\n0b111000\n0b000111\n0B111000\n0B000111\n0o111000\n0o000111\n0O111000\n0O000111\n0x111000\n0x000111\n0X111000\n0X000111\n\n1e1\n1e+1\n1e-1\n1.e1\n.1e1\n1.1e1\n1.1e0010\n.1e+0010\n.1e-0010\n\n1E1\n1E+1\n1E-1\n1.E1\n.1E1\n1.1E1\n1.1E0010\n.1E+0010\n.1E-0010\n\n0.5e0\n0.5e00\n0.5e+0\n0.5e+00\n0.5e-0\n0.5e-00\n\n1\n1.00500\n1.0\n1.5\n1.50\n0\n0.00500\n0.0\n0.0000\n.0\n500600.001230045000\n1.00500e60\n1.0e60\n0.00500e60\n0.0e60\n0.0000e60\n.0e60\n0.e60\n0e60\n500600.001230045000e60\n10\n9700\n10e100\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 653
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 134, end: 139
✖ '; ' is not allowed here. Did you mean ';'? - start: 139, end: 143
✖ '; ' is not allowed here. Did you mean ';'? - start: 143, end: 147
✖ '; ' is not allowed here. Did you mean ';'? - start: 147, end: 151
✖ '; ' is not allowed here. Did you mean ';'? - start: 151, end: 155
✖ '; ' is not allowed here. Did you mean ';'? - start: 155, end: 159
✖ '; ' is not allowed here. Did you mean ';'? - start: 159, end: 181
✖ '; ' is not allowed here. Did you mean ';'? - start: 181, end: 202
✖ '; ' is not allowed here. Did you mean ';'? - start: 202, end: 213
✖ '; ' is not allowed here. Did you mean ';'? - start: 224, end: 233
✖ '; ' is not allowed here. Did you mean ';'? - start: 233, end: 242
✖ '; ' is not allowed here. Did you mean ';'? - start: 242, end: 251
✖ '; ' is not allowed here. Did you mean ';'? - start: 251, end: 260
✖ '; ' is not allowed here. Did you mean ';'? - start: 260, end: 269
✖ '; ' is not allowed here. Did you mean ';'? - start: 269, end: 278
✖ '; ' is not allowed here. Did you mean ';'? - start: 278, end: 287
✖ '; ' is not allowed here. Did you mean ';'? - start: 287, end: 296
✖ '; ' is not allowed here. Did you mean ';'? - start: 296, end: 305
✖ '; ' is not allowed here. Did you mean ';'? - start: 305, end: 314
✖ '; ' is not allowed here. Did you mean ';'? - start: 314, end: 323

```

