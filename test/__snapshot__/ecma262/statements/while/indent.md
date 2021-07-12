# Kataw parser test case

## Input

`````js
if (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD) {}
while (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD) {}
do {}
while (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD);

if (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) {}
while (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) {}
do {}
while (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD));

while (0) 1;

do 1;
while (0);
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
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "someVeryLongStringA",
                            "rawText": "someVeryLongStringA",
                            "flags": 96,
                            "start": 4,
                            "end": 23
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 23,
                            "end": 26
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "someVeryLongStringB",
                            "rawText": "someVeryLongStringB",
                            "flags": 96,
                            "start": 26,
                            "end": 46
                        },
                        "flags": 96,
                        "start": 4,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 46,
                        "end": 49
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "someVeryLongStringC",
                        "rawText": "someVeryLongStringC",
                        "flags": 96,
                        "start": 49,
                        "end": 69
                    },
                    "flags": 96,
                    "start": 4,
                    "end": 69
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "start": 69,
                    "end": 72
                },
                "right": {
                    "kind": 134299649,
                    "text": "someVeryLongStringD",
                    "rawText": "someVeryLongStringD",
                    "flags": 96,
                    "start": 72,
                    "end": 92
                },
                "flags": 96,
                "start": 4,
                "end": 92
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 95,
                    "end": 95
                },
                "flags": 16,
                "start": 93,
                "end": 96
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 96
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "start": 96,
                "end": 102
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "someVeryLongStringA",
                            "rawText": "someVeryLongStringA",
                            "flags": 96,
                            "start": 104,
                            "end": 123
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 123,
                            "end": 126
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "someVeryLongStringB",
                            "rawText": "someVeryLongStringB",
                            "flags": 96,
                            "start": 126,
                            "end": 146
                        },
                        "flags": 96,
                        "start": 104,
                        "end": 146
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 146,
                        "end": 149
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "someVeryLongStringC",
                        "rawText": "someVeryLongStringC",
                        "flags": 96,
                        "start": 149,
                        "end": 169
                    },
                    "flags": 96,
                    "start": 104,
                    "end": 169
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "start": 169,
                    "end": 172
                },
                "right": {
                    "kind": 134299649,
                    "text": "someVeryLongStringD",
                    "rawText": "someVeryLongStringD",
                    "flags": 96,
                    "start": 172,
                    "end": 192
                },
                "flags": 96,
                "start": 104,
                "end": 192
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 195,
                    "end": 195
                },
                "flags": 16,
                "start": 193,
                "end": 196
            },
            "flags": 81,
            "start": 96,
            "end": 196
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 81,
                "start": 196,
                "end": 199
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 201,
                    "end": 201
                },
                "flags": 16,
                "start": 199,
                "end": 202
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 65,
                "start": 202,
                "end": 208
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "someVeryLongStringA",
                            "rawText": "someVeryLongStringA",
                            "flags": 96,
                            "start": 210,
                            "end": 229
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 229,
                            "end": 232
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "someVeryLongStringB",
                            "rawText": "someVeryLongStringB",
                            "flags": 96,
                            "start": 232,
                            "end": 252
                        },
                        "flags": 96,
                        "start": 210,
                        "end": 252
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 252,
                        "end": 255
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "someVeryLongStringC",
                        "rawText": "someVeryLongStringC",
                        "flags": 96,
                        "start": 255,
                        "end": 275
                    },
                    "flags": 96,
                    "start": 210,
                    "end": 275
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "start": 275,
                    "end": 278
                },
                "right": {
                    "kind": 134299649,
                    "text": "someVeryLongStringD",
                    "rawText": "someVeryLongStringD",
                    "flags": 96,
                    "start": 278,
                    "end": 298
                },
                "flags": 96,
                "start": 210,
                "end": 298
            },
            "flags": 81,
            "start": 196,
            "end": 300
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 300,
                "end": 304
            },
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "someVeryLongFunc",
                    "rawText": "someVeryLongFunc",
                    "flags": 96,
                    "start": 306,
                    "end": 322
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgA",
                            "rawText": "someVeryLongArgA",
                            "flags": 96,
                            "start": 323,
                            "end": 339
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgB",
                            "rawText": "someVeryLongArgB",
                            "flags": 96,
                            "start": 340,
                            "end": 357
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgC",
                            "rawText": "someVeryLongArgC",
                            "flags": 96,
                            "start": 358,
                            "end": 375
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgD",
                            "rawText": "someVeryLongArgD",
                            "flags": 96,
                            "start": 376,
                            "end": 393
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 323,
                    "end": 393
                },
                "flags": 268435488,
                "start": 306,
                "end": 394
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 397,
                    "end": 397
                },
                "flags": 16,
                "start": 395,
                "end": 398
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 300,
            "end": 398
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "start": 398,
                "end": 404
            },
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "someVeryLongFunc",
                    "rawText": "someVeryLongFunc",
                    "flags": 96,
                    "start": 406,
                    "end": 422
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgA",
                            "rawText": "someVeryLongArgA",
                            "flags": 96,
                            "start": 423,
                            "end": 439
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgB",
                            "rawText": "someVeryLongArgB",
                            "flags": 96,
                            "start": 440,
                            "end": 457
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgC",
                            "rawText": "someVeryLongArgC",
                            "flags": 96,
                            "start": 458,
                            "end": 475
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgD",
                            "rawText": "someVeryLongArgD",
                            "flags": 96,
                            "start": 476,
                            "end": 493
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 423,
                    "end": 493
                },
                "flags": 268435488,
                "start": 406,
                "end": 494
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 497,
                    "end": 497
                },
                "flags": 16,
                "start": 495,
                "end": 498
            },
            "flags": 81,
            "start": 398,
            "end": 498
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 81,
                "start": 498,
                "end": 501
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 503,
                    "end": 503
                },
                "flags": 16,
                "start": 501,
                "end": 504
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 65,
                "start": 504,
                "end": 510
            },
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "someVeryLongFunc",
                    "rawText": "someVeryLongFunc",
                    "flags": 96,
                    "start": 512,
                    "end": 528
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgA",
                            "rawText": "someVeryLongArgA",
                            "flags": 96,
                            "start": 529,
                            "end": 545
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgB",
                            "rawText": "someVeryLongArgB",
                            "flags": 96,
                            "start": 546,
                            "end": 563
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgC",
                            "rawText": "someVeryLongArgC",
                            "flags": 96,
                            "start": 564,
                            "end": 581
                        },
                        {
                            "kind": 134299649,
                            "text": "someVeryLongArgD",
                            "rawText": "someVeryLongArgD",
                            "flags": 96,
                            "start": 582,
                            "end": 599
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 529,
                    "end": 599
                },
                "flags": 268435488,
                "start": 512,
                "end": 600
            },
            "flags": 81,
            "start": 498,
            "end": 602
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "start": 602,
                "end": 609
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 611,
                "end": 612
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 613,
                    "end": 615
                },
                "flags": 16,
                "start": 613,
                "end": 616
            },
            "flags": 81,
            "start": 602,
            "end": 616
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 81,
                "start": 616,
                "end": 620
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 620,
                    "end": 622
                },
                "flags": 16,
                "start": 620,
                "end": 623
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 65,
                "start": 623,
                "end": 629
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 631,
                "end": 632
            },
            "flags": 81,
            "start": 616,
            "end": 634
        }
    ],
    "isModule": false,
    "source": "if (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD) {}\nwhile (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD) {}\ndo {}\nwhile (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD);\n\nif (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) {}\nwhile (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) {}\ndo {}\nwhile (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD));\n\nwhile (0) 1;\n\ndo 1;\nwhile (0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 634
}
```

### Printed

```javascript

  if (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD) { }
  while (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD) { }
  do { } while (someVeryLongStringA && someVeryLongStringB && someVeryLongStringC && someVeryLongStringD)
  if (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) { }
  while (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) { }
  do { } while (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD))
  while (0)
    1;
  do
    1; while (0)

```

### Diagnostics

```javascript
✔ No errors
```

