# Kataw parser test case

## Input

`````js
function StatelessFunctionalComponent({
  isActive,
  onFiltersUpdated,
  onSelect,
  onSubmitAndDeselect,
  onCancel,
  searchFilters,
  title,
  items,
}) {
  x
}


function StatelessFunctionalComponent2({
  isActive = true,
  onFiltersUpdated = () => null,
  onSelect = () => null,
  onSubmitAndDeselect = () => null,
  onCancel = () => null,
  searchFilters = null,
  title = '',
  items = [],
} = {}) {
  return x;
}

function StatelessFunctionalComponent3(
  {
    isActive,
    onFiltersUpdated = () => null,
    onSelect = () => null,
    onSubmitAndDeselect = () => null,
    onCancel = () => null,
    searchFilters = null,
    title = '',
    items = [],
  } = {
    isActive: true
  }
) {
  return x;
}

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
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "StatelessFunctionalComponent",
                "rawText": "StatelessFunctionalComponent",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 37
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "isActive",
                                    "rawText": "isActive",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 50
                                },
                                {
                                    "kind": 134299649,
                                    "text": "onFiltersUpdated",
                                    "rawText": "onFiltersUpdated",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 70
                                },
                                {
                                    "kind": 134299649,
                                    "text": "onSelect",
                                    "rawText": "onSelect",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 82
                                },
                                {
                                    "kind": 134299649,
                                    "text": "onSubmitAndDeselect",
                                    "rawText": "onSubmitAndDeselect",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 105
                                },
                                {
                                    "kind": 134299649,
                                    "text": "onCancel",
                                    "rawText": "onCancel",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 106,
                                    "end": 117
                                },
                                {
                                    "kind": 134299649,
                                    "text": "searchFilters",
                                    "rawText": "searchFilters",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 118,
                                    "end": 134
                                },
                                {
                                    "kind": 134299649,
                                    "text": "title",
                                    "rawText": "title",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 143
                                },
                                {
                                    "kind": 134299649,
                                    "text": "items",
                                    "rawText": "items",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 144,
                                    "end": 152
                                }
                            ],
                            "trailingComma": true,
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 153
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 155
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 38,
                "end": 155
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 162
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 158,
                            "end": 162
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 162
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 156,
                "end": 164
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 164
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 164,
                "end": 175
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "StatelessFunctionalComponent2",
                "rawText": "StatelessFunctionalComponent2",
                "flags": 96,
                "transformFlags": 0,
                "start": 175,
                "end": 205
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "isActive",
                                            "rawText": "isActive",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 207,
                                            "end": 218
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 220,
                                            "end": 225
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 207,
                                        "end": 225
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onFiltersUpdated",
                                            "rawText": "onFiltersUpdated",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 226,
                                            "end": 245
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 249,
                                                "end": 249
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 250,
                                                "end": 253
                                            },
                                            "contents": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 253,
                                                "end": 258
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 247,
                                            "end": 258
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 226,
                                        "end": 258
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onSelect",
                                            "rawText": "onSelect",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 259,
                                            "end": 270
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 274,
                                                "end": 274
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 275,
                                                "end": 278
                                            },
                                            "contents": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 278,
                                                "end": 283
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 272,
                                            "end": 283
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 259,
                                        "end": 283
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onSubmitAndDeselect",
                                            "rawText": "onSubmitAndDeselect",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 284,
                                            "end": 306
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 310,
                                                "end": 310
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 311,
                                                "end": 314
                                            },
                                            "contents": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 314,
                                                "end": 319
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 319
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 284,
                                        "end": 319
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onCancel",
                                            "rawText": "onCancel",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 320,
                                            "end": 331
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 335,
                                                "end": 335
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 336,
                                                "end": 339
                                            },
                                            "contents": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 339,
                                                "end": 344
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 333,
                                            "end": 344
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 320,
                                        "end": 344
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "searchFilters",
                                            "rawText": "searchFilters",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 345,
                                            "end": 361
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 363,
                                            "end": 368
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 345,
                                        "end": 368
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "title",
                                            "rawText": "title",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 369,
                                            "end": 377
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "''",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 379,
                                            "end": 382
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 369,
                                        "end": 382
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 383,
                                            "end": 391
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 395,
                                                "end": 395
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 393,
                                            "end": 396
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 383,
                                        "end": 396
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 397
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 206,
                            "end": 399
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 403,
                                "end": 403
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 401,
                            "end": 404
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 206,
                        "end": 404
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 206,
                "end": 404
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
                                "start": 407,
                                "end": 416
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 416,
                                "end": 418
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 407,
                            "end": 419
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 407,
                    "end": 419
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 405,
                "end": 421
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 164,
            "end": 421
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 421,
                "end": 431
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "StatelessFunctionalComponent3",
                "rawText": "StatelessFunctionalComponent3",
                "flags": 96,
                "transformFlags": 0,
                "start": 431,
                "end": 461
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "isActive",
                                        "rawText": "isActive",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 466,
                                        "end": 479
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onFiltersUpdated",
                                            "rawText": "onFiltersUpdated",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 480,
                                            "end": 501
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 505,
                                                "end": 505
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 506,
                                                "end": 509
                                            },
                                            "contents": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 509,
                                                "end": 514
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 503,
                                            "end": 514
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 480,
                                        "end": 514
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onSelect",
                                            "rawText": "onSelect",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 515,
                                            "end": 528
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 532,
                                                "end": 532
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
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 536,
                                                "end": 541
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 530,
                                            "end": 541
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 515,
                                        "end": 541
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onSubmitAndDeselect",
                                            "rawText": "onSubmitAndDeselect",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 542,
                                            "end": 566
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 570,
                                                "end": 570
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
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 574,
                                                "end": 579
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 568,
                                            "end": 579
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 542,
                                        "end": 579
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "onCancel",
                                            "rawText": "onCancel",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 593
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                "start": 597,
                                                "end": 597
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 598,
                                                "end": 601
                                            },
                                            "contents": {
                                                "kind": 138477575,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 601,
                                                "end": 606
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 595,
                                            "end": 606
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 580,
                                        "end": 606
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "searchFilters",
                                            "rawText": "searchFilters",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 607,
                                            "end": 625
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 627,
                                            "end": 632
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 607,
                                        "end": 632
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "title",
                                            "rawText": "title",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 633,
                                            "end": 643
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "''",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 645,
                                            "end": 648
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 633,
                                        "end": 648
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 649,
                                            "end": 659
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 663,
                                                "end": 663
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 661,
                                            "end": 664
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 649,
                                        "end": 664
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 466,
                                "end": 665
                            },
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 462,
                            "end": 669
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "isActive",
                                            "rawText": "isActive",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 673,
                                            "end": 686
                                        },
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 687,
                                            "end": 692
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 673,
                                        "end": 692
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 673,
                                "end": 692
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 671,
                            "end": 696
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 462,
                        "end": 696
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 462,
                "end": 696
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
                                "start": 700,
                                "end": 709
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 709,
                                "end": 711
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 700,
                            "end": 712
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 700,
                    "end": 712
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 698,
                "end": 714
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 421,
            "end": 714
        }
    ],
    "isModule": false,
    "source": "function StatelessFunctionalComponent({\n  isActive,\n  onFiltersUpdated,\n  onSelect,\n  onSubmitAndDeselect,\n  onCancel,\n  searchFilters,\n  title,\n  items,\n}) {\n  x\n}\n\n\nfunction StatelessFunctionalComponent2({\n  isActive = true,\n  onFiltersUpdated = () => null,\n  onSelect = () => null,\n  onSubmitAndDeselect = () => null,\n  onCancel = () => null,\n  searchFilters = null,\n  title = '',\n  items = [],\n} = {}) {\n  return x;\n}\n\nfunction StatelessFunctionalComponent3(\n  {\n    isActive,\n    onFiltersUpdated = () => null,\n    onSelect = () => null,\n    onSubmitAndDeselect = () => null,\n    onCancel = () => null,\n    searchFilters = null,\n    title = '',\n    items = [],\n  } = {\n    isActive: true\n  }\n) {\n  return x;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 715
}
```

### Printed

```javascript

function StatelessFunctionalComponent({
  isActive,
  onFiltersUpdated,
  onSelect,
  onSubmitAndDeselect,
  onCancel,
  searchFilters,
  title,
  items
}) {
  x;
}
function StatelessFunctionalComponent2({
  isActive = true ,
  onFiltersUpdated = () => null ,
  onSelect = () => null ,
  onSubmitAndDeselect = () => null ,
  onCancel = () => null ,
  searchFilters = null ,
  title = '\'\'',
  items = []
} = {}) {
  return x;
}

function StatelessFunctionalComponent3({
  isActive,
  onFiltersUpdated = () => null ,
  onSelect = () => null ,
  onSubmitAndDeselect = () => null ,
  onCancel = () => null ,
  searchFilters = null ,
  title = '\'\'',
  items = []
} = {
  isActive: true
}) {
  return x;
}

```

### Diagnostics

```javascript
✔ No errors
```

