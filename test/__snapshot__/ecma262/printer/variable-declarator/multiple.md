# Kataw parser test case

## Input

`````js
var assert = require('assert'),
  lookup = require('../lookup');

const eloBar     = require("elo-bar")
  , foo        = require("foo")
  , otherThing = require("other-thing");

var a, b, c;

let superSuperSuperLong1, superSuperSuperLong2, superSuperSuperLong3, superSuperSuperLong4;

for (var i = 0, len = arr.length; i < len; i++) {}

var templateTagsMapping = {
    '%{itemIndex}': 'index',
    '%{itemContentMetaTextViews}': 'views'
  },
  separator = '<span class="item__content__meta__separator">•</span>',
  templateTagsList = $.map(templateTagsMapping, function(value, key) {
    return key;
  }),
  data;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "assert",
                            "rawText": "assert",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "require",
                                "rawText": "require",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 20
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "assert",
                                        "rawText": "'assert'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 29
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 12,
                            "end": 30
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 30
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "lookup",
                            "rawText": "lookup",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 40
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "require",
                                "rawText": "require",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 50
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "../lookup",
                                        "rawText": "'../lookup'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 62
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 62
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 42,
                            "end": 63
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 31,
                        "end": 63
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 64
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 64,
                "end": 71
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "eloBar",
                            "rawText": "eloBar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 78
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "require",
                                "rawText": "require",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 92
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "elo-bar",
                                        "rawText": "\"elo-bar\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 93,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 93,
                                "end": 102
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 84,
                            "end": 103
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 71,
                        "end": 103
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 71,
                "end": 103
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 64,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 111
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 111,
                            "end": 120
                        },
                        "right": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "require",
                                "rawText": "require",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 128
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 129,
                                        "end": 134
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 134
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 120,
                            "end": 135
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 107,
                        "end": 135
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "otherThing",
                            "rawText": "otherThing",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 150
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 150,
                            "end": 152
                        },
                        "right": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "require",
                                "rawText": "require",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 152,
                                "end": 160
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "other-thing",
                                        "rawText": "\"other-thing\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 161,
                                        "end": 174
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 174
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 152,
                            "end": 175
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 139,
                        "end": 175
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 107,
                "end": 175
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 107,
            "end": 176
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 176,
                "end": 181
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 181,
                            "end": 183
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 181,
                        "end": 183
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 184,
                            "end": 186
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 184,
                        "end": 186
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 187,
                            "end": 189
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 187,
                        "end": 189
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 181,
                "end": 189
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 176,
            "end": 190
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 190,
                "end": 195
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "superSuperSuperLong1",
                            "rawText": "superSuperSuperLong1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 195,
                            "end": 216
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 195,
                        "end": 216
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "superSuperSuperLong2",
                            "rawText": "superSuperSuperLong2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 217,
                            "end": 238
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 217,
                        "end": 238
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "superSuperSuperLong3",
                            "rawText": "superSuperSuperLong3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 239,
                            "end": 260
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 239,
                        "end": 260
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "superSuperSuperLong4",
                            "rawText": "superSuperSuperLong4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 261,
                            "end": 282
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 261,
                        "end": 282
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 195,
                "end": 282
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 190,
            "end": 283
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 283,
                "end": 288
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 290,
                    "end": 293
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 293,
                                "end": 295
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 297,
                                "end": 299
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 293,
                            "end": 299
                        },
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "len",
                                "rawText": "len",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 300,
                                "end": 304
                            },
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "arr",
                                    "rawText": "arr",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 306,
                                    "end": 310
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 311,
                                    "end": 317
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 306,
                                "end": 317
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 300,
                            "end": 317
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 293,
                    "end": 317
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 283,
                "end": 318
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 329,
                    "end": 331
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 327,
                    "end": 329
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 327,
                "end": 331
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 318,
                    "end": 320
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 320,
                    "end": 322
                },
                "right": {
                    "kind": 134299649,
                    "text": "len",
                    "rawText": "len",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 322,
                    "end": 326
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 318,
                "end": 326
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 334,
                    "end": 334
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 332,
                "end": 335
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 283,
            "end": 335
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 335,
                "end": 340
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "templateTagsMapping",
                            "rawText": "templateTagsMapping",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 340,
                            "end": 360
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
                                            "text": "%{itemIndex}",
                                            "rawText": "'%{itemIndex}'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 364,
                                            "end": 383
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "index",
                                            "rawText": "'index'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 384,
                                            "end": 392
                                        },
                                        "flags": 4194337,
                                        "transformFlags": 128,
                                        "start": 364,
                                        "end": 392
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "%{itemContentMetaTextViews}",
                                            "rawText": "'%{itemContentMetaTextViews}'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 393,
                                            "end": 427
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "views",
                                            "rawText": "'views'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 428,
                                            "end": 436
                                        },
                                        "flags": 4194337,
                                        "transformFlags": 128,
                                        "start": 393,
                                        "end": 436
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194321,
                                "transformFlags": 0,
                                "start": 364,
                                "end": 436
                            },
                            "flags": 4194353,
                            "transformFlags": 8,
                            "start": 362,
                            "end": 440
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 340,
                        "end": 440
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "separator",
                            "rawText": "separator",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 441,
                            "end": 453
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "<span class=\"item__content__meta__separator\">•</span>",
                            "rawText": "'<span class=\"item__content__meta__separator\">•</span>'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 455,
                            "end": 511
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 441,
                        "end": 511
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "templateTagsList",
                            "rawText": "templateTagsList",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 531
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "$",
                                    "rawText": "$",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 533,
                                    "end": 535
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "map",
                                    "rawText": "map",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 536,
                                    "end": 539
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 533,
                                "end": 539
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "templateTagsMapping",
                                        "rawText": "templateTagsMapping",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 540,
                                        "end": 559
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 560,
                                            "end": 569
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 570,
                                                    "end": 575
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 576,
                                                    "end": 580
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 570,
                                            "end": 580
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
                                                            "start": 583,
                                                            "end": 594
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 594,
                                                            "end": 598
                                                        },
                                                        "flags": 81,
                                                        "transformFlags": 256,
                                                        "start": 583,
                                                        "end": 599
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 583,
                                                "end": 599
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 581,
                                            "end": 603
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 560,
                                        "end": 603
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 540,
                                "end": 603
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 533,
                            "end": 604
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 512,
                        "end": 604
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "data",
                            "rawText": "data",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 605,
                            "end": 612
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 605,
                        "end": 612
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 340,
                "end": 612
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 335,
            "end": 613
        }
    ],
    "isModule": false,
    "source": "var assert = require('assert'),\n  lookup = require('../lookup');\n\nconst eloBar     = require(\"elo-bar\")\n  , foo        = require(\"foo\")\n  , otherThing = require(\"other-thing\");\n\nvar a, b, c;\n\nlet superSuperSuperLong1, superSuperSuperLong2, superSuperSuperLong3, superSuperSuperLong4;\n\nfor (var i = 0, len = arr.length; i < len; i++) {}\n\nvar templateTagsMapping = {\n    '%{itemIndex}': 'index',\n    '%{itemContentMetaTextViews}': 'views'\n  },\n  separator = '<span class=\"item__content__meta__separator\">•</span>',\n  templateTagsList = $.map(templateTagsMapping, function(value, key) {\n    return key;\n  }),\n  data;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 614
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 103, end: 107

```

