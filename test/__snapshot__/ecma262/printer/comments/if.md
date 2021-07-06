# Kataw parser test case

## Input

`````js
if (1)
// comment
{
  false
}
// comment
else if (2)
  true
// multi
// ple
// lines
else if (3)
  // existing comment
  true
// okay?
else if (4) {
  // empty with existing comment
}
// comment
else {
}

if (5) // comment
true

if (6) // comment
{true}
else if (7) // comment
true
else // comment
{true}

if (8) // comment
// comment
{true}
else if (9) // comment
// comment
true
else // comment
// comment
{true}

if (10) /* comment */ // comment
{true}
else if (11) /* comment */
true
else if (12) // comment /* comment */ // comment
true
else if (13) /* comment */ /* comment */ // comment
true
else /* comment */
{true}

if (14) // comment
/* comment */
// comment
{true}
else if (15) // comment
/* comment */
/* comment */ // comment
true
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 205586437,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 27
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 27
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 6,
                "end": 29
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "transformFlags": 0,
                "start": 29,
                "end": 45
            },
            "alternate": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 48
                },
                "expression": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 51
                },
                "consequent": {
                    "kind": 120,
                    "expression": {
                        "kind": 24752947,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 59
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 59
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 89
                },
                "alternate": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 89,
                        "end": 92
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "3",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 94,
                        "end": 95
                    },
                    "consequent": {
                        "kind": 120,
                        "expression": {
                            "kind": 24752947,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 125
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 96,
                        "end": 125
                    },
                    "elseKeyword": {
                        "kind": 4194389,
                        "flags": 65,
                        "transformFlags": 0,
                        "start": 125,
                        "end": 139
                    },
                    "alternate": {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 142
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 144,
                            "end": 145
                        },
                        "consequent": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 148
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 146,
                            "end": 183
                        },
                        "elseKeyword": {
                            "kind": 4194389,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 183,
                            "end": 199
                        },
                        "alternate": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 201,
                                "end": 201
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 199,
                            "end": 203
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 203
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 203
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 45,
                "end": 203
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 203
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 203,
                "end": 207
            },
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "5",
                "flags": 96,
                "transformFlags": 0,
                "start": 209,
                "end": 210
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 24752947,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 227
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 211,
                "end": 227
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 203,
            "end": 227
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 227,
                "end": 231
            },
            "expression": {
                "kind": 201392130,
                "text": 6,
                "rawText": "6",
                "flags": 96,
                "transformFlags": 0,
                "start": 233,
                "end": 234
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 252
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 248,
                            "end": 252
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 248,
                    "end": 252
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 235,
                "end": 253
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "transformFlags": 0,
                "start": 253,
                "end": 258
            },
            "alternate": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 258,
                    "end": 261
                },
                "expression": {
                    "kind": 201392130,
                    "text": 7,
                    "rawText": "7",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 263,
                    "end": 264
                },
                "consequent": {
                    "kind": 120,
                    "expression": {
                        "kind": 24752947,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 265,
                        "end": 281
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 265,
                    "end": 281
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 281,
                    "end": 286
                },
                "alternate": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 299,
                                    "end": 303
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 299,
                                "end": 303
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 299,
                        "end": 303
                    },
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 286,
                    "end": 304
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 258,
                "end": 304
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 227,
            "end": 304
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 304,
                "end": 308
            },
            "expression": {
                "kind": 201392130,
                "text": 8,
                "rawText": "8",
                "flags": 96,
                "transformFlags": 0,
                "start": 310,
                "end": 311
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 336,
                                "end": 340
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 336,
                            "end": 340
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 336,
                    "end": 340
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 312,
                "end": 341
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "transformFlags": 0,
                "start": 341,
                "end": 346
            },
            "alternate": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 346,
                    "end": 349
                },
                "expression": {
                    "kind": 201392130,
                    "text": 9,
                    "rawText": "9",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 351,
                    "end": 352
                },
                "consequent": {
                    "kind": 120,
                    "expression": {
                        "kind": 24752947,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 353,
                        "end": 380
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 353,
                    "end": 380
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 380,
                    "end": 385
                },
                "alternate": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 409,
                                    "end": 413
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 409,
                                "end": 413
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 409,
                        "end": 413
                    },
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 385,
                    "end": 414
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 346,
                "end": 414
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 304,
            "end": 414
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 414,
                "end": 418
            },
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "10",
                "flags": 96,
                "transformFlags": 0,
                "start": 420,
                "end": 422
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 450,
                                "end": 454
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 450,
                            "end": 454
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 450,
                    "end": 454
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 423,
                "end": 455
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "transformFlags": 0,
                "start": 455,
                "end": 460
            },
            "alternate": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 460,
                    "end": 463
                },
                "expression": {
                    "kind": 201392130,
                    "text": 11,
                    "rawText": "11",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 465,
                    "end": 467
                },
                "consequent": {
                    "kind": 120,
                    "expression": {
                        "kind": 24752947,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 468,
                        "end": 487
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 468,
                    "end": 487
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 487,
                    "end": 492
                },
                "alternate": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 492,
                        "end": 495
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 12,
                        "rawText": "12",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 497,
                        "end": 499
                    },
                    "consequent": {
                        "kind": 120,
                        "expression": {
                            "kind": 24752947,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 500,
                            "end": 541
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 500,
                        "end": 541
                    },
                    "elseKeyword": {
                        "kind": 4194389,
                        "flags": 65,
                        "transformFlags": 0,
                        "start": 541,
                        "end": 546
                    },
                    "alternate": {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 546,
                            "end": 549
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 13,
                            "rawText": "13",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 551,
                            "end": 553
                        },
                        "consequent": {
                            "kind": 120,
                            "expression": {
                                "kind": 24752947,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 554,
                                "end": 598
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 554,
                            "end": 598
                        },
                        "elseKeyword": {
                            "kind": 4194389,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 598,
                            "end": 603
                        },
                        "alternate": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 619,
                                            "end": 623
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 619,
                                        "end": 623
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 619,
                                "end": 623
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 603,
                            "end": 624
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 546,
                        "end": 624
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 492,
                    "end": 624
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 460,
                "end": 624
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 414,
            "end": 624
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 624,
                "end": 628
            },
            "expression": {
                "kind": 201392130,
                "text": 14,
                "rawText": "14",
                "flags": 96,
                "transformFlags": 0,
                "start": 630,
                "end": 632
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 671,
                                "end": 675
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 671,
                            "end": 675
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 671,
                    "end": 675
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 633,
                "end": 676
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "transformFlags": 0,
                "start": 676,
                "end": 681
            },
            "alternate": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 681,
                    "end": 684
                },
                "expression": {
                    "kind": 201392130,
                    "text": 15,
                    "rawText": "15",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 686,
                    "end": 688
                },
                "consequent": {
                    "kind": 120,
                    "expression": {
                        "kind": 24752947,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 689,
                        "end": 744
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 689,
                    "end": 744
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 80,
                "transformFlags": 0,
                "start": 681,
                "end": 744
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 624,
            "end": 744
        }
    ],
    "isModule": false,
    "source": "if (1)\n// comment\n{\n  false\n}\n// comment\nelse if (2)\n  true\n// multi\n// ple\n// lines\nelse if (3)\n  // existing comment\n  true\n// okay?\nelse if (4) {\n  // empty with existing comment\n}\n// comment\nelse {\n}\n\nif (5) // comment\ntrue\n\nif (6) // comment\n{true}\nelse if (7) // comment\ntrue\nelse // comment\n{true}\n\nif (8) // comment\n// comment\n{true}\nelse if (9) // comment\n// comment\ntrue\nelse // comment\n// comment\n{true}\n\nif (10) /* comment */ // comment\n{true}\nelse if (11) /* comment */\ntrue\nelse if (12) // comment /* comment */ // comment\ntrue\nelse if (13) /* comment */ /* comment */ // comment\ntrue\nelse /* comment */\n{true}\n\nif (14) // comment\n/* comment */\n// comment\n{true}\nelse if (15) // comment\n/* comment */\n/* comment */ // comment\ntrue",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 744
}
```

### Printed

```javascript

if (1) {
    false ;
  }
else  if (2) true ;
else  if (3) true ;
else  if (4) {}
else  {}
if (5) true ;

if (6) {
    true ;
  }
else  if (7) true ;
else  {
    true ;
  }

if (8) {
    true ;
  }
else  if (9) true ;
else  {
    true ;
  }

if (10) {
    true ;
  }
else  if (11) true ;
else  if (12) true ;
else  if (13) true ;
else  {
    true ;
  }

if (14) {
    true ;
  }
else  if (15) true ;

```

### Diagnostics

```javascript
✔ No errors
```

