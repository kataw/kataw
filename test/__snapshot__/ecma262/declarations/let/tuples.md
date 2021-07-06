# Kataw parser test case

## Input

`````js
let tests = [
  function(t: [number]) {
    t[1]; // error, out of bounds
    t[-1]; // error, out of bounds
  },
  // toString's to an invalid index
  function(t: [number, string]) {
    t[0.5]; // error: index out of bounds
    t[0.0000000000000000000001]; // error: index ("1e-22") out of bounds
  },
 // through a variable
  function (t: [number]) {
    const x = 0.5;
    t[x]; // error, not an integer
  },
  // Return length from a function with mismatched return type.
  function () {
    // error: tuple length 2 !~> string
    function a(x: [1, 2]): string { return x.length; }
  },
]
`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "tests",
                            "rawText": "tests",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 24
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "t",
                                                        "rawText": "t",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 26
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 147,
                                                            "elementTypes": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 134234345,
                                                                        "flags": 2097216,
                                                                        "transformFlags": 0,
                                                                        "start": 29,
                                                                        "end": 35
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 35
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 27,
                                                            "end": 36
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 27,
                                                        "end": 36
                                                    },
                                                    "right": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 36
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 36
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
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "t",
                                                                "rawText": "t",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 39,
                                                                "end": 45
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 47
                                                            },
                                                            "flags": 536870944,
                                                            "transformFlags": 4,
                                                            "start": 39,
                                                            "end": 48
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 49
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "t",
                                                                "rawText": "t",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 49,
                                                                "end": 79
                                                            },
                                                            "expression": {
                                                                "kind": 126,
                                                                "operandToken": {
                                                                    "kind": 134318643,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 80,
                                                                    "end": 81
                                                                },
                                                                "operand": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 81,
                                                                    "end": 82
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1024,
                                                                "start": 80,
                                                                "end": 82
                                                            },
                                                            "flags": 536870944,
                                                            "transformFlags": 4,
                                                            "start": 49,
                                                            "end": 83
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 84
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 84
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 112
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 112
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 160
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "t",
                                                        "rawText": "t",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 161,
                                                        "end": 162
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 147,
                                                            "elementTypes": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 134234345,
                                                                        "flags": 2097216,
                                                                        "transformFlags": 0,
                                                                        "start": 165,
                                                                        "end": 171
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 165,
                                                                    "end": 171
                                                                },
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 134234347,
                                                                        "flags": 2097216,
                                                                        "transformFlags": 0,
                                                                        "start": 172,
                                                                        "end": 179
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 172,
                                                                    "end": 179
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 163,
                                                            "end": 180
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 163,
                                                        "end": 180
                                                    },
                                                    "right": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 161,
                                                    "end": 180
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 161,
                                            "end": 180
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
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "t",
                                                                "rawText": "t",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 183,
                                                                "end": 189
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 0.5,
                                                                "rawText": "0.5",
                                                                "flags": 32864,
                                                                "transformFlags": 0,
                                                                "start": 190,
                                                                "end": 193
                                                            },
                                                            "flags": 536870944,
                                                            "transformFlags": 4,
                                                            "start": 183,
                                                            "end": 194
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 183,
                                                        "end": 195
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "t",
                                                                "rawText": "t",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 195,
                                                                "end": 231
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1e-22,
                                                                "rawText": "0.0000000000000000000001",
                                                                "flags": 32864,
                                                                "transformFlags": 0,
                                                                "start": 232,
                                                                "end": 256
                                                            },
                                                            "flags": 536870944,
                                                            "transformFlags": 4,
                                                            "start": 195,
                                                            "end": 257
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 195,
                                                        "end": 258
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 183,
                                                "end": 258
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 181,
                                            "end": 302
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 302
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 303,
                                            "end": 337
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "t",
                                                        "rawText": "t",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 339,
                                                        "end": 340
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 147,
                                                            "elementTypes": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 134234345,
                                                                        "flags": 2097216,
                                                                        "transformFlags": 0,
                                                                        "start": 343,
                                                                        "end": 349
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 343,
                                                                    "end": 349
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 341,
                                                            "end": 350
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 341,
                                                        "end": 350
                                                    },
                                                    "right": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
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
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 162,
                                                        "lexicalKeyword": {
                                                            "kind": 37757004,
                                                            "flags": 81,
                                                            "transformFlags": 0,
                                                            "start": 353,
                                                            "end": 363
                                                        },
                                                        "binding": {
                                                            "kind": 151,
                                                            "bindingList": [
                                                                {
                                                                    "kind": 190,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 363,
                                                                        "end": 365
                                                                    },
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 201392130,
                                                                        "text": 0.5,
                                                                        "rawText": "0.5",
                                                                        "flags": 32864,
                                                                        "transformFlags": 0,
                                                                        "start": 367,
                                                                        "end": 371
                                                                    },
                                                                    "flags": 16,
                                                                    "transformFlags": 128,
                                                                    "start": 363,
                                                                    "end": 371
                                                                }
                                                            ],
                                                            "flags": 16777232,
                                                            "transformFlags": 0,
                                                            "start": 363,
                                                            "end": 371
                                                        },
                                                        "flags": 33554448,
                                                        "transformFlags": 0,
                                                        "start": 353,
                                                        "end": 372
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 130,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "t",
                                                                "rawText": "t",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 372,
                                                                "end": 378
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 379,
                                                                "end": 380
                                                            },
                                                            "flags": 536870944,
                                                            "transformFlags": 4,
                                                            "start": 372,
                                                            "end": 381
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 372,
                                                        "end": 382
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 353,
                                                "end": 382
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 351,
                                            "end": 411
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 303,
                                        "end": 411
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 412,
                                            "end": 487
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
                                            "start": 489,
                                            "end": 489
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
                                                            "transformFlags": 0,
                                                            "start": 492,
                                                            "end": 545
                                                        },
                                                        "asteriskToken": null,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 545,
                                                            "end": 547
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
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 548,
                                                                        "end": 549
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": {
                                                                        "kind": 139,
                                                                        "bitwiseOrToken": null,
                                                                        "bitwiseAndToken": null,
                                                                        "type": {
                                                                            "kind": 147,
                                                                            "elementTypes": [
                                                                                {
                                                                                    "kind": 139,
                                                                                    "bitwiseOrToken": null,
                                                                                    "bitwiseAndToken": null,
                                                                                    "type": {
                                                                                        "kind": 134217968,
                                                                                        "text": 1,
                                                                                        "rawText": "1",
                                                                                        "flags": 2097216,
                                                                                        "transformFlags": 0,
                                                                                        "start": 552,
                                                                                        "end": 553
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 552,
                                                                                    "end": 553
                                                                                },
                                                                                {
                                                                                    "kind": 139,
                                                                                    "bitwiseOrToken": null,
                                                                                    "bitwiseAndToken": null,
                                                                                    "type": {
                                                                                        "kind": 134217968,
                                                                                        "text": 2,
                                                                                        "rawText": "2",
                                                                                        "flags": 2097216,
                                                                                        "transformFlags": 0,
                                                                                        "start": 554,
                                                                                        "end": 556
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 554,
                                                                                    "end": 556
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 550,
                                                                            "end": 557
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 550,
                                                                        "end": 557
                                                                    },
                                                                    "right": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 548,
                                                                    "end": 557
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 548,
                                                            "end": 557
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
                                                                            "flags": 80,
                                                                            "transformFlags": 0,
                                                                            "start": 568,
                                                                            "end": 575
                                                                        },
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 575,
                                                                                "end": 577
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "length",
                                                                                "rawText": "length",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 578,
                                                                                "end": 584
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 2,
                                                                            "start": 575,
                                                                            "end": 584
                                                                        },
                                                                        "flags": 80,
                                                                        "transformFlags": 256,
                                                                        "start": 568,
                                                                        "end": 585
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 568,
                                                                "end": 585
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 566,
                                                            "end": 587
                                                        },
                                                        "returnType": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234347,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 559,
                                                                "end": 566
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 559,
                                                            "end": 566
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 492,
                                                        "end": 587
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 492,
                                                "end": 587
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 490,
                                            "end": 591
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 412,
                                        "end": 591
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 592
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 594
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 594
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 594
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 594
        }
    ],
    "isModule": false,
    "source": "let tests = [\n  function(t: [number]) {\n    t[1]; // error, out of bounds\n    t[-1]; // error, out of bounds\n  },\n  // toString's to an invalid index\n  function(t: [number, string]) {\n    t[0.5]; // error: index out of bounds\n    t[0.0000000000000000000001]; // error: index (\"1e-22\") out of bounds\n  },\n // through a variable\n  function (t: [number]) {\n    const x = 0.5;\n    t[x]; // error, not an integer\n  },\n  // Return length from a function with mismatched return type.\n  function () {\n    // error: tuple length 2 !~> string\n    function a(x: [1, 2]): string { return x.length; }\n  },\n]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 594
}
```

### Printed

```javascript

let tests = [
    function (t: [number ]) {
      t[1];
      t[-1];
    },
    function (t: [number , string ]) {
      t[0.5];
      t[0.0000000000000000000001];
    },
    function (t: [number ]) {
      const x = 0.5;
      t[x];
    },
    function () {
      function a(x: [1, 2]): string  {
        return x.length;
      }
    }
  ];
```

### Diagnostics

```javascript
✔ No errors
```

