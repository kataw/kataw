# Kataw parser test case

## Input

`````js
const a = {
  a: "a"
};

const b = {
  'b': "b"
};

const b2 = {
  // Escapes should stay as escapes and not be unquoted.
  '\u0062': "b",
  '\u0031': "1"
};

const c = {
  c1: "c1",
  'c2': "c2"
};

const d = {
  d1: "d1",
  'd-2': "d2"
};

// None of these should become quoted, regardless of the quoteProps value.
const e = {
  NaN: null,
  1: null,
  1.5: null,
  .1: null,
  1.: null,
  1.0: null,
  999999999999999999999: null,
  0.99999999999999999: null,
  1E2: null,
  1e+3: null,
  1e+100: null,
  0b10: null,
  0o10: null,
  0xf: null,
  // Commented out because Flow does not parse BigInt as object keys.
  // 2n: null,
}

const f = {
  // This should be unquoted for quoteProps=as-needed.
  "NaN": null,
  // Flow does parses number keys, but errors on them during type checking so
  // don’t unquote them:
  "1": null,
  "1.5": null,
  // These should never be unquoted. `1e+100` technically could (it’s the only
  // one where `String(Number(key)) === key`), but we came to the conclusion
  // that it is unexpected.
  ".1": null,
  "1.": null,
  "1.0": null,
  "999999999999999999999": null,
  "0.99999999999999999": null,
  "1E2": null,
  "1e+3": null,
  "1e+100": null,
  "0b10": null,
  "0o10": null,
  "0xf": null,
  "2n": null,
}

Object.entries({
  // To force quotes for quoteProps=consistent.
  'a-': 'a-',
  // These can be quoted:
  NaN: 'NaN',
  1: '1',
  1.5: '1.5',
  // Prettier will normalize these to `0.1` and `1` – then they can be quoted.
  .1: '.1',
  1.: '1.',
  // These should never be quoted. The _actual_ keys are shown as comments.
  // Copy-paste this into the console to verify. If we were to convert these
  // numbers into decimal (which completely valid), “information/intent” is
  // lost. Either way, writing code like this is super confusing.
  1.0: '1.0', // 1
  999999999999999999999: '999999999999999999999', // 1e+21
  0.99999999999999999: '0.99999999999999999', // 1
  1E2: '1E2', // 100
  1e+3: '1e+3', // 1000
  1e+100: '1e+100', // 1e+100 – this one is identical, but would be inconsistent to quote.
  0b10: '0b10', // 2
  0o10: '0o10', // 8
  0xf: '0xf', // 15
  // Commented out because Flow does not parse BigInt as object keys.
  // 2n: '2n', // 2
  0xb_b: '0xb_b', // 187
  // 0xb_b_bn: '0xb_b_bn', // 3003
  // 0xan: '0xan', // 10
  // 0b100000000000_000000000000000011n: '0b100000000000_000000000000000011n' // 536870915
})

// Negative numbers cannot be unquoted.
!{
  "-1": null,
  "-1.5": null,
}
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
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
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
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
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
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "\"a\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 11,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 20
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 9,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 22
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 23,
                "end": 30
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 32
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "'b'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "\"b\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 36,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194321,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 47
                            },
                            "flags": 4194353,
                            "transformFlags": 8,
                            "start": 34,
                            "end": 49
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 30,
                        "end": 49
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 30,
                "end": 49
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 23,
            "end": 50
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 50,
                "end": 57
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b2",
                            "rawText": "b2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 60
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "'\\u0062'",
                                            "flags": 4210785,
                                            "transformFlags": 0,
                                            "start": 64,
                                            "end": 132
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "\"b\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 133,
                                            "end": 137
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 64,
                                        "end": 137
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1",
                                            "rawText": "'\\u0031'",
                                            "flags": 4210785,
                                            "transformFlags": 0,
                                            "start": 138,
                                            "end": 149
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1",
                                            "rawText": "\"1\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 150,
                                            "end": 154
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 138,
                                        "end": 154
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4210705,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 154
                            },
                            "flags": 4210737,
                            "transformFlags": 8,
                            "start": 62,
                            "end": 156
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 57,
                        "end": 156
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 57,
                "end": 156
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 50,
            "end": 157
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 157,
                "end": 164
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 164,
                            "end": 166
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c1",
                                            "rawText": "c1",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 170,
                                            "end": 175
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "c1",
                                            "rawText": "\"c1\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 181
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 170,
                                        "end": 181
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "c2",
                                            "rawText": "'c2'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 182,
                                            "end": 189
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "c2",
                                            "rawText": "\"c2\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 190,
                                            "end": 195
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 182,
                                        "end": 195
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 195
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 168,
                            "end": 197
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 164,
                        "end": 197
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 164,
                "end": 197
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 157,
            "end": 198
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 198,
                "end": 205
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 207
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d1",
                                            "rawText": "d1",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 211,
                                            "end": 216
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "d1",
                                            "rawText": "\"d1\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 217,
                                            "end": 222
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 211,
                                        "end": 222
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "d-2",
                                            "rawText": "'d-2'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 223,
                                            "end": 231
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "d2",
                                            "rawText": "\"d2\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 232,
                                            "end": 237
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 223,
                                        "end": 237
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 211,
                                "end": 237
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 209,
                            "end": 239
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 205,
                        "end": 239
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 205,
                "end": 239
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 198,
            "end": 240
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 240,
                "end": 322
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 322,
                            "end": 324
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "NaN",
                                            "rawText": "NaN",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 328,
                                            "end": 334
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 335,
                                            "end": 340
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 328,
                                        "end": 340
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 341,
                                            "end": 345
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 346,
                                            "end": 351
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 341,
                                        "end": 351
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1.5,
                                            "rawText": "1.5",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 352,
                                            "end": 358
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 359,
                                            "end": 364
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 352,
                                        "end": 364
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 0.1,
                                            "rawText": ".1",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 365,
                                            "end": 370
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 371,
                                            "end": 376
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 365,
                                        "end": 376
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1.",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 377,
                                            "end": 382
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 383,
                                            "end": 388
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 377,
                                        "end": 388
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1.0",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 389,
                                            "end": 395
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 396,
                                            "end": 401
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 389,
                                        "end": 401
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1e+21,
                                            "rawText": "999999999999999999999",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 402,
                                            "end": 426
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 427,
                                            "end": 432
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 402,
                                        "end": 432
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0.99999999999999999",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 433,
                                            "end": 455
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 456,
                                            "end": 461
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 433,
                                        "end": 461
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 100,
                                            "rawText": "1E2",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 462,
                                            "end": 468
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 469,
                                            "end": 474
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 462,
                                        "end": 474
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1000,
                                            "rawText": "1e+3",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 475,
                                            "end": 482
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 483,
                                            "end": 488
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 475,
                                        "end": 488
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1e+100,
                                            "rawText": "1e+100",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 489,
                                            "end": 498
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 499,
                                            "end": 504
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 489,
                                        "end": 504
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "0b10",
                                            "flags": 524384,
                                            "transformFlags": 0,
                                            "start": 505,
                                            "end": 512
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 513,
                                            "end": 518
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 505,
                                        "end": 518
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 8,
                                            "rawText": "0o10",
                                            "flags": 262240,
                                            "transformFlags": 0,
                                            "start": 519,
                                            "end": 526
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 527,
                                            "end": 532
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 519,
                                        "end": 532
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 15,
                                            "rawText": "0xf",
                                            "flags": 1048672,
                                            "transformFlags": 0,
                                            "start": 533,
                                            "end": 539
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 540,
                                            "end": 545
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 533,
                                        "end": 545
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 328,
                                "end": 546
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 326,
                            "end": 633
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 322,
                        "end": 633
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 322,
                "end": 633
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 240,
            "end": 633
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 633,
                "end": 640
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
                            "start": 640,
                            "end": 642
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "NaN",
                                            "rawText": "\"NaN\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 646,
                                            "end": 709
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 710,
                                            "end": 715
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 646,
                                        "end": 715
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1",
                                            "rawText": "\"1\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 716,
                                            "end": 825
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 826,
                                            "end": 831
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 716,
                                        "end": 831
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1.5",
                                            "rawText": "\"1.5\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 832,
                                            "end": 840
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 841,
                                            "end": 846
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 832,
                                        "end": 846
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": ".1",
                                            "rawText": "\".1\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 847,
                                            "end": 1038
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1039,
                                            "end": 1044
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 847,
                                        "end": 1044
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1.",
                                            "rawText": "\"1.\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1045,
                                            "end": 1052
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1053,
                                            "end": 1058
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1045,
                                        "end": 1058
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1.0",
                                            "rawText": "\"1.0\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1059,
                                            "end": 1067
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1068,
                                            "end": 1073
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1059,
                                        "end": 1073
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "999999999999999999999",
                                            "rawText": "\"999999999999999999999\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1074,
                                            "end": 1100
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1101,
                                            "end": 1106
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1074,
                                        "end": 1106
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "0.99999999999999999",
                                            "rawText": "\"0.99999999999999999\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1107,
                                            "end": 1131
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1132,
                                            "end": 1137
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1107,
                                        "end": 1137
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1E2",
                                            "rawText": "\"1E2\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1138,
                                            "end": 1146
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1147,
                                            "end": 1152
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1138,
                                        "end": 1152
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1e+3",
                                            "rawText": "\"1e+3\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1153,
                                            "end": 1162
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1163,
                                            "end": 1168
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1153,
                                        "end": 1168
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1e+100",
                                            "rawText": "\"1e+100\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1169,
                                            "end": 1180
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1181,
                                            "end": 1186
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1169,
                                        "end": 1186
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "0b10",
                                            "rawText": "\"0b10\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1187,
                                            "end": 1196
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1197,
                                            "end": 1202
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1187,
                                        "end": 1202
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "0o10",
                                            "rawText": "\"0o10\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1203,
                                            "end": 1212
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1213,
                                            "end": 1218
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1203,
                                        "end": 1218
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "0xf",
                                            "rawText": "\"0xf\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1219,
                                            "end": 1227
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1228,
                                            "end": 1233
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1219,
                                        "end": 1233
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "2n",
                                            "rawText": "\"2n\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1234,
                                            "end": 1241
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1242,
                                            "end": 1247
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1234,
                                        "end": 1247
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 646,
                                "end": 1248
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 644,
                            "end": 1250
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 640,
                        "end": 1250
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 640,
                "end": 1250
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 633,
            "end": 1250
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "Object",
                        "rawText": "Object",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 1250,
                        "end": 1258
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "entries",
                        "rawText": "entries",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1259,
                        "end": 1266
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 1250,
                    "end": 1266
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "a-",
                                            "rawText": "'a-'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 1268,
                                            "end": 1323
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "a-",
                                            "rawText": "'a-'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1324,
                                            "end": 1329
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1268,
                                        "end": 1329
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "NaN",
                                            "rawText": "NaN",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1330,
                                            "end": 1362
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "NaN",
                                            "rawText": "'NaN'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1363,
                                            "end": 1369
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1330,
                                        "end": 1369
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1370,
                                            "end": 1374
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1",
                                            "rawText": "'1'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1375,
                                            "end": 1379
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1370,
                                        "end": 1379
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1.5,
                                            "rawText": "1.5",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 1380,
                                            "end": 1386
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1.5",
                                            "rawText": "'1.5'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1387,
                                            "end": 1393
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1380,
                                        "end": 1393
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 0.1,
                                            "rawText": ".1",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 1394,
                                            "end": 1478
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": ".1",
                                            "rawText": "'.1'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1479,
                                            "end": 1484
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1394,
                                        "end": 1484
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1.",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 1485,
                                            "end": 1490
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1.",
                                            "rawText": "'1.'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1491,
                                            "end": 1496
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1485,
                                        "end": 1496
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1.0",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 1497,
                                            "end": 1798
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1.0",
                                            "rawText": "'1.0'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1799,
                                            "end": 1805
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1497,
                                        "end": 1805
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1e+21,
                                            "rawText": "999999999999999999999",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1806,
                                            "end": 1835
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "999999999999999999999",
                                            "rawText": "'999999999999999999999'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1836,
                                            "end": 1860
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1806,
                                        "end": 1860
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0.99999999999999999",
                                            "flags": 32865,
                                            "transformFlags": 0,
                                            "start": 1861,
                                            "end": 1892
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "0.99999999999999999",
                                            "rawText": "'0.99999999999999999'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1893,
                                            "end": 1915
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1861,
                                        "end": 1915
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 100,
                                            "rawText": "1E2",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1916,
                                            "end": 1927
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1E2",
                                            "rawText": "'1E2'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1928,
                                            "end": 1934
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1916,
                                        "end": 1934
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1000,
                                            "rawText": "1e+3",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1935,
                                            "end": 1949
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1e+3",
                                            "rawText": "'1e+3'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1950,
                                            "end": 1957
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1935,
                                        "end": 1957
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1e+100,
                                            "rawText": "1e+100",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1958,
                                            "end": 1975
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "1e+100",
                                            "rawText": "'1e+100'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1976,
                                            "end": 1985
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1958,
                                        "end": 1985
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "0b10",
                                            "flags": 524384,
                                            "transformFlags": 0,
                                            "start": 1986,
                                            "end": 2064
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "0b10",
                                            "rawText": "'0b10'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2065,
                                            "end": 2072
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 1986,
                                        "end": 2072
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 8,
                                            "rawText": "0o10",
                                            "flags": 262240,
                                            "transformFlags": 0,
                                            "start": 2073,
                                            "end": 2085
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "0o10",
                                            "rawText": "'0o10'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2086,
                                            "end": 2093
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 2073,
                                        "end": 2093
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 15,
                                            "rawText": "0xf",
                                            "flags": 1048672,
                                            "transformFlags": 0,
                                            "start": 2094,
                                            "end": 2105
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "0xf",
                                            "rawText": "'0xf'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2106,
                                            "end": 2112
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 2094,
                                        "end": 2112
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 187,
                                            "rawText": "0xb_b",
                                            "flags": 1114208,
                                            "transformFlags": 0,
                                            "start": 2113,
                                            "end": 2217
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "0xb_b",
                                            "rawText": "'0xb_b'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 2218,
                                            "end": 2226
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 2113,
                                        "end": 2226
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 4194321,
                                "transformFlags": 0,
                                "start": 1268,
                                "end": 2227
                            },
                            "flags": 4194353,
                            "transformFlags": 8,
                            "start": 1267,
                            "end": 2387
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1267,
                    "end": 2387
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1250,
                "end": 2388
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1250,
            "end": 2388
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2388,
                    "end": 2431
                },
                "operand": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "-1",
                                    "rawText": "\"-1\"",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 2432,
                                    "end": 2439
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2440,
                                    "end": 2445
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2432,
                                "end": 2445
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "-1.5",
                                    "rawText": "\"-1.5\"",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 2446,
                                    "end": 2455
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2456,
                                    "end": 2461
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2446,
                                "end": 2461
                            }
                        ],
                        "trailingComma": true,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 2432,
                        "end": 2462
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 2431,
                    "end": 2464
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 2388,
                "end": 2464
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2388,
            "end": 2464
        }
    ],
    "isModule": false,
    "source": "const a = {\n  a: \"a\"\n};\n\nconst b = {\n  'b': \"b\"\n};\n\nconst b2 = {\n  // Escapes should stay as escapes and not be unquoted.\n  '\\u0062': \"b\",\n  '\\u0031': \"1\"\n};\n\nconst c = {\n  c1: \"c1\",\n  'c2': \"c2\"\n};\n\nconst d = {\n  d1: \"d1\",\n  'd-2': \"d2\"\n};\n\n// None of these should become quoted, regardless of the quoteProps value.\nconst e = {\n  NaN: null,\n  1: null,\n  1.5: null,\n  .1: null,\n  1.: null,\n  1.0: null,\n  999999999999999999999: null,\n  0.99999999999999999: null,\n  1E2: null,\n  1e+3: null,\n  1e+100: null,\n  0b10: null,\n  0o10: null,\n  0xf: null,\n  // Commented out because Flow does not parse BigInt as object keys.\n  // 2n: null,\n}\n\nconst f = {\n  // This should be unquoted for quoteProps=as-needed.\n  \"NaN\": null,\n  // Flow does parses number keys, but errors on them during type checking so\n  // don’t unquote them:\n  \"1\": null,\n  \"1.5\": null,\n  // These should never be unquoted. `1e+100` technically could (it’s the only\n  // one where `String(Number(key)) === key`), but we came to the conclusion\n  // that it is unexpected.\n  \".1\": null,\n  \"1.\": null,\n  \"1.0\": null,\n  \"999999999999999999999\": null,\n  \"0.99999999999999999\": null,\n  \"1E2\": null,\n  \"1e+3\": null,\n  \"1e+100\": null,\n  \"0b10\": null,\n  \"0o10\": null,\n  \"0xf\": null,\n  \"2n\": null,\n}\n\nObject.entries({\n  // To force quotes for quoteProps=consistent.\n  'a-': 'a-',\n  // These can be quoted:\n  NaN: 'NaN',\n  1: '1',\n  1.5: '1.5',\n  // Prettier will normalize these to `0.1` and `1` – then they can be quoted.\n  .1: '.1',\n  1.: '1.',\n  // These should never be quoted. The _actual_ keys are shown as comments.\n  // Copy-paste this into the console to verify. If we were to convert these\n  // numbers into decimal (which completely valid), “information/intent” is\n  // lost. Either way, writing code like this is super confusing.\n  1.0: '1.0', // 1\n  999999999999999999999: '999999999999999999999', // 1e+21\n  0.99999999999999999: '0.99999999999999999', // 1\n  1E2: '1E2', // 100\n  1e+3: '1e+3', // 1000\n  1e+100: '1e+100', // 1e+100 – this one is identical, but would be inconsistent to quote.\n  0b10: '0b10', // 2\n  0o10: '0o10', // 8\n  0xf: '0xf', // 15\n  // Commented out because Flow does not parse BigInt as object keys.\n  // 2n: '2n', // 2\n  0xb_b: '0xb_b', // 187\n  // 0xb_b_bn: '0xb_b_bn', // 3003\n  // 0xan: '0xan', // 10\n  // 0b100000000000_000000000000000011n: '0b100000000000_000000000000000011n' // 536870915\n})\n\n// Negative numbers cannot be unquoted.\n!{\n  \"-1\": null,\n  \"-1.5\": null,\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2464
}
```

### Printed

```javascript
const a = {
    a: "\"a\""
  };
const b = {
    "'b'": "\"b\""
  };

const b2 = {
    // Escapes should stay as escapes and not be unquoted.
    "'\u0062'": "\"b\"",
    "'\u0031'": "\"1\""
  };

const c = {
    c1: "\"c1\"",
    "'c2'": "\"c2\""
  };

const d = {
    d1: "\"d1\"",
    "'d-2'": "\"d2\""
  };

// None of these should become quoted, regardless of the quoteProps value.
const e = {
    NaN: null,
    1: null,
    1.5: null,
    0.1: null,
    1: null,
    1.0: null,
    999999999999999999999: null,
    0.99999999999999999: null,
    1e2: null,
    1e3: null,
    1e100: null,
    0b10: null,
    0o10: null,
    0xf: null,
  };

const f = {
    // This should be unquoted for quoteProps=as-needed.
    "\"NaN\"": null,
    // Flow does parses number keys, but errors on them during type checking so
    // don’t unquote them:
    "\"1\"": null,
    "\"1.5\"": null,
    // These should never be unquoted. `1e+100` technically could (it’s the only
    // one where `String(Number(key)) === key`), but we came to the conclusion
    // that it is unexpected.
    "\".1\"": null,
    "\"1.\"": null,
    "\"1.0\"": null,
    "\"999999999999999999999\"": null,
    "\"0.99999999999999999\"": null,
    "\"1E2\"": null,
    "\"1e+3\"": null,
    "\"1e+100\"": null,
    "\"0b10\"": null,
    "\"0o10\"": null,
    "\"0xf\"": null,
    "\"2n\"": null,
  };

Object.entries({
  // To force quotes for quoteProps=consistent.
  "'a-'": "'a-'",
  // These can be quoted:
  NaN: "'NaN'",
  1: "'1'",
  1.5: "'1.5'",
  // Prettier will normalize these to `0.1` and `1` – then they can be quoted.
  0.1: "'.1'",
  1: "'1.'",
  // These should never be quoted. The _actual_ keys are shown as comments.
  // Copy-paste this into the console to verify. If we were to convert these
  // numbers into decimal (which completely valid), “information/intent” is
  // lost. Either way, writing code like this is super confusing.
  1.0: "'1.0'",
  // 1
  999999999999999999999: "'999999999999999999999'",
  // 1e+21
  0.99999999999999999: "'0.99999999999999999'",
  // 1
  1e2: "'1E2'",
  // 100
  1e3: "'1e+3'",
  // 1000
  1e100: "'1e+100'",
  // 1e+100 – this one is identical, but would be inconsistent to quote.
  0b10: "'0b10'",
  // 2
  0o10: "'0o10'",
  // 8
  0xf: "'0xf'",
  // 15
  // Commented out because Flow does not parse BigInt as object keys.
  // 2n: '2n', // 2
  0xb_b: "'0xb_b'",
});

// Negative numbers cannot be unquoted.
!{
  "\"-1\"": null,
  "\"-1.5\"": null,
};

```

### Diagnostics

```javascript
✔ No errors
```

