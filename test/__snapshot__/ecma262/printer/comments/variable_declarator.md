# Kataw parser test case

## Input

`````js
let obj1 = // Comment
{
  key: 'val'
}

let obj2 // Comment
= {
  key: 'val'
}

let obj3 = { // Comment
  key: 'val'
}

let obj4 = {
  // Comment
  key: 'val'
}

let obj5 = // Comment
[
  'val'
]

let obj6 // Comment
= [
  'val'
]

let obj7 = [ // Comment
  'val'
]

let obj8 = [
  // Comment
  'val'
]

let obj9 = // Comment
`val`;

let obj10 = // Comment
`
val
val
`;

let obj11 = // Comment
tag`val`;

let obj12 = // Comment
tag`
val
val
`;

let // Comment
  foo1 = 'val';

let // Comment
  foo2 = 'val',
  bar = 'val';

const foo3 = 123
// Nothing to see here.
;["2", "3"].forEach(x => console.log(x))
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
                            "text": "obj1",
                            "rawText": "obj1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
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
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "val",
                                            "rawText": "'val'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 36
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 23,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 36
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 10,
                            "end": 38
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 38
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 38
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 38,
                "end": 43
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj2",
                            "rawText": "obj2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 48
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
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 69
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "val",
                                            "rawText": "'val'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 70,
                                            "end": 76
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 63,
                                        "end": 76
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 76
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 61,
                            "end": 78
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 43,
                        "end": 78
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 43,
                "end": 78
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 38,
            "end": 78
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 78,
                "end": 83
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj3",
                            "rawText": "obj3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 88
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
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 92,
                                            "end": 109
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "val",
                                            "rawText": "'val'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 110,
                                            "end": 116
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 92,
                                        "end": 116
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 116
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 90,
                            "end": 118
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 83,
                        "end": 118
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 83,
                "end": 118
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 78,
            "end": 118
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 118,
                "end": 123
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj4",
                            "rawText": "obj4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 128
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
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 132,
                                            "end": 151
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "val",
                                            "rawText": "'val'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 152,
                                            "end": 158
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 132,
                                        "end": 158
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 158
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 130,
                            "end": 160
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 123,
                        "end": 160
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 123,
                "end": 160
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 118,
            "end": 160
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 160,
                "end": 165
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj5",
                            "rawText": "obj5",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 165,
                            "end": 170
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "val",
                                        "rawText": "'val'",
                                        "flags": 4194401,
                                        "transformFlags": 0,
                                        "start": 185,
                                        "end": 193
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194337,
                                "transformFlags": 0,
                                "start": 185,
                                "end": 193
                            },
                            "flags": 33,
                            "transformFlags": 8,
                            "start": 172,
                            "end": 195
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 165,
                        "end": 195
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 165,
                "end": 195
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 160,
            "end": 195
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 195,
                "end": 200
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj6",
                            "rawText": "obj6",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 200,
                            "end": 205
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "val",
                                        "rawText": "'val'",
                                        "flags": 4194401,
                                        "transformFlags": 0,
                                        "start": 220,
                                        "end": 228
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194337,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 228
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 218,
                            "end": 230
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 200,
                        "end": 230
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 200,
                "end": 230
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 195,
            "end": 230
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 230,
                "end": 235
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj7",
                            "rawText": "obj7",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 235,
                            "end": 240
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "val",
                                        "rawText": "'val'",
                                        "flags": 4194401,
                                        "transformFlags": 0,
                                        "start": 244,
                                        "end": 263
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194337,
                                "transformFlags": 0,
                                "start": 244,
                                "end": 263
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 242,
                            "end": 265
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 235,
                        "end": 265
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 235,
                "end": 265
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 230,
            "end": 265
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 265,
                "end": 270
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj8",
                            "rawText": "obj8",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 270,
                            "end": 275
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "val",
                                        "rawText": "'val'",
                                        "flags": 4194401,
                                        "transformFlags": 0,
                                        "start": 279,
                                        "end": 300
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194337,
                                "transformFlags": 0,
                                "start": 279,
                                "end": 300
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 277,
                            "end": 302
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 270,
                        "end": 302
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 270,
                "end": 302
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 265,
            "end": 302
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 302,
                "end": 307
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj9",
                            "rawText": "obj9",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 307,
                            "end": 312
                        },
                        "type": null,
                        "initializer": {
                            "kind": 458761,
                            "text": "val",
                            "rawText": "val",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 314,
                            "end": 331
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 307,
                        "end": 331
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 307,
                "end": 331
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 302,
            "end": 332
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 332,
                "end": 337
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj10",
                            "rawText": "obj10",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 337,
                            "end": 343
                        },
                        "type": null,
                        "initializer": {
                            "kind": 458761,
                            "text": "\nval\nval\n",
                            "rawText": "\nval\nval\n",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 368
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 337,
                        "end": 368
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 337,
                "end": 368
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 332,
            "end": 369
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 369,
                "end": 374
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj11",
                            "rawText": "obj11",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 374,
                            "end": 380
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "tag",
                                "rawText": "tag",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 382,
                                "end": 397
                            },
                            "template": {
                                "kind": 458761,
                                "text": "val",
                                "rawText": "val",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 397,
                                "end": 402
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 382,
                            "end": 402
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 374,
                        "end": 402
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 374,
                "end": 402
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 369,
            "end": 403
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 403,
                "end": 408
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj12",
                            "rawText": "obj12",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 408,
                            "end": 414
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "tag",
                                "rawText": "tag",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 416,
                                "end": 431
                            },
                            "template": {
                                "kind": 458761,
                                "text": "\nval\nval\n",
                                "rawText": "\nval\nval\n",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 431,
                                "end": 442
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 416,
                            "end": 442
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 408,
                        "end": 442
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 408,
                "end": 442
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 403,
            "end": 443
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 443,
                "end": 448
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo1",
                            "rawText": "foo1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 448,
                            "end": 466
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "val",
                            "rawText": "'val'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 468,
                            "end": 474
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 448,
                        "end": 474
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 448,
                "end": 474
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 443,
            "end": 475
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 475,
                "end": 480
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo2",
                            "rawText": "foo2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 480,
                            "end": 498
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "val",
                            "rawText": "'val'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 500,
                            "end": 506
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 480,
                        "end": 506
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 507,
                            "end": 513
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "val",
                            "rawText": "'val'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 515,
                            "end": 521
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 507,
                        "end": 521
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 480,
                "end": 521
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 475,
            "end": 522
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 522,
                "end": 529
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo3",
                            "rawText": "foo3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 529,
                            "end": 534
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 123,
                            "rawText": "123",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 536,
                            "end": 540
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 529,
                        "end": 540
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 529,
                "end": 540
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 522,
            "end": 566
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
                                    "kind": 201392131,
                                    "text": "2",
                                    "rawText": "\"2\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 567,
                                    "end": 570
                                },
                                {
                                    "kind": 201392131,
                                    "text": "3",
                                    "rawText": "\"3\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 571,
                                    "end": 575
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 567,
                            "end": 575
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 566,
                        "end": 576
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "forEach",
                        "rawText": "forEach",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 577,
                        "end": 584
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 566,
                    "end": 584
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 585,
                                "end": 586
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 586,
                                "end": 589
                            },
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 589,
                                        "end": 597
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 598,
                                        "end": 601
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 589,
                                    "end": 601
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
                                            "start": 602,
                                            "end": 603
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 602,
                                    "end": 603
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 589,
                                "end": 604
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 585,
                            "end": 604
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 585,
                    "end": 604
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 566,
                "end": 605
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 566,
            "end": 605
        }
    ],
    "isModule": false,
    "source": "let obj1 = // Comment\n{\n  key: 'val'\n}\n\nlet obj2 // Comment\n= {\n  key: 'val'\n}\n\nlet obj3 = { // Comment\n  key: 'val'\n}\n\nlet obj4 = {\n  // Comment\n  key: 'val'\n}\n\nlet obj5 = // Comment\n[\n  'val'\n]\n\nlet obj6 // Comment\n= [\n  'val'\n]\n\nlet obj7 = [ // Comment\n  'val'\n]\n\nlet obj8 = [\n  // Comment\n  'val'\n]\n\nlet obj9 = // Comment\n`val`;\n\nlet obj10 = // Comment\n`\nval\nval\n`;\n\nlet obj11 = // Comment\ntag`val`;\n\nlet obj12 = // Comment\ntag`\nval\nval\n`;\n\nlet // Comment\n  foo1 = 'val';\n\nlet // Comment\n  foo2 = 'val',\n  bar = 'val';\n\nconst foo3 = 123\n// Nothing to see here.\n;[\"2\", \"3\"].forEach(x => console.log(x))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 605
}
```

### Printed

```javascript
let obj1 = { key: "'val'" };
let obj2 = { key: "'val'" };

let obj3 = { key: "'val'" };

let obj4 = { key: "'val'" };

let obj5 = ["'val'"];

let obj6 = ["'val'"];

let obj7 = ["'val'"];

let obj8 = ["'val'"];

let obj9 = `val`;

let obj10 = `
val
val
`;

let obj11 = tag`val`;

let obj12 = tag`
val
val
`;

let foo1 = "'val'";

let foo2 = "'val'", bar = "'val'";

const foo3 = 123;
["\"2\"", "\"3\""].forEach(x => console.log(x));
```

### Diagnostics

```javascript
✔ No errors
```

