# Kataw parser test case

## Input

`````js
prevState = prevState || {
  catalogs: [],
  loadState: LOADED,
  opened: false,
  searchQuery: '',
  selectedCatalog: null,
};

prevState = prevState ||
  defaultState || {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: '',
    selectedCatalog: null,
  };

prevState = prevState ||
  defaultState && {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: '',
    selectedCatalog: null,
  };

prevState = prevState || useDefault && defaultState || {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: '',
    selectedCatalog: null,
  };

this.steps = steps || [
  {
    name: 'mock-module',
    path: '/nux/mock-module',
  },
];

this.steps = steps || checkStep && [
  {
    name: 'mock-module',
    path: '/nux/mock-module',
  },
];

this.steps = steps && checkStep || [
  {
    name: 'mock-module',
    path: '/nux/mock-module',
  },
];

const create = () => {
  const result = doSomething();
  return (
    shouldReturn &&
    result.ok && {
      status: "ok",
      createdAt: result.createdAt,
      updatedAt: result.updatedAt
    }
  );
}

const create2 = () => {
  const result = doSomething();
  return (
    shouldReturn && result.ok && result || {
      status: "ok",
      createdAt: result.createdAt,
      updatedAt: result.updatedAt
    }
  );
}

const obj = {
  state: shouldHaveState &&
    stateIsOK && {
      loadState: LOADED,
      opened: false
    },
  loadNext: stateIsOK && hasNext || {
      skipNext: true
    },
  loaded: true
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "prevState",
                    "rawText": "prevState",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "prevState",
                        "rawText": "prevState",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 24
                    },
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
                                        "text": "catalogs",
                                        "rawText": "catalogs",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 26,
                                    "end": 41
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "loadState",
                                        "rawText": "loadState",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 54
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "LOADED",
                                        "rawText": "LOADED",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 62
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 42,
                                    "end": 62
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "opened",
                                        "rawText": "opened",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 72
                                    },
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 79
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 63,
                                    "end": 79
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "searchQuery",
                                        "rawText": "searchQuery",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 94
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "",
                                        "rawText": "''",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 98
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 80,
                                    "end": 98
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "selectedCatalog",
                                        "rawText": "selectedCatalog",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 117
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 118,
                                        "end": 123
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 99,
                                    "end": 123
                                }
                            ],
                            "trailingComma": true,
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 124
                        },
                        "flags": 49,
                        "transformFlags": 8,
                        "start": 24,
                        "end": 126
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 11,
                    "end": 126
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 126
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 127
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "prevState",
                    "rawText": "prevState",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 127,
                    "end": 138
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 138,
                    "end": 140
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "prevState",
                            "rawText": "prevState",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 150
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 150,
                            "end": 153
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "defaultState",
                            "rawText": "defaultState",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 168
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 140,
                        "end": 168
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 168,
                        "end": 171
                    },
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
                                        "text": "catalogs",
                                        "rawText": "catalogs",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 186
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 189
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 187,
                                        "end": 190
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 173,
                                    "end": 190
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "loadState",
                                        "rawText": "loadState",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 191,
                                        "end": 205
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "LOADED",
                                        "rawText": "LOADED",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 213
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 191,
                                    "end": 213
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "opened",
                                        "rawText": "opened",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 214,
                                        "end": 225
                                    },
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 226,
                                        "end": 232
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 214,
                                    "end": 232
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "searchQuery",
                                        "rawText": "searchQuery",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 233,
                                        "end": 249
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "",
                                        "rawText": "''",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 250,
                                        "end": 253
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 233,
                                    "end": 253
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "selectedCatalog",
                                        "rawText": "selectedCatalog",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 274
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 275,
                                        "end": 280
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 254,
                                    "end": 280
                                }
                            ],
                            "trailingComma": true,
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 173,
                            "end": 281
                        },
                        "flags": 49,
                        "transformFlags": 8,
                        "start": 171,
                        "end": 285
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 140,
                    "end": 285
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 127,
                "end": 285
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 127,
            "end": 286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "prevState",
                    "rawText": "prevState",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 286,
                    "end": 297
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 297,
                    "end": 299
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "prevState",
                        "rawText": "prevState",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 299,
                        "end": 309
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 309,
                        "end": 312
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "defaultState",
                            "rawText": "defaultState",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 312,
                            "end": 327
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 327,
                            "end": 330
                        },
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
                                            "text": "catalogs",
                                            "rawText": "catalogs",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 332,
                                            "end": 345
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 348,
                                                "end": 348
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 346,
                                            "end": 349
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 332,
                                        "end": 349
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "loadState",
                                            "rawText": "loadState",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 350,
                                            "end": 364
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "LOADED",
                                            "rawText": "LOADED",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 365,
                                            "end": 372
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 350,
                                        "end": 372
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "opened",
                                            "rawText": "opened",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 373,
                                            "end": 384
                                        },
                                        "right": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 385,
                                            "end": 391
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 373,
                                        "end": 391
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "searchQuery",
                                            "rawText": "searchQuery",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 392,
                                            "end": 408
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "''",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 409,
                                            "end": 412
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 392,
                                        "end": 412
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "selectedCatalog",
                                            "rawText": "selectedCatalog",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 413,
                                            "end": 433
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 434,
                                            "end": 439
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 413,
                                        "end": 439
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 332,
                                "end": 440
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 330,
                            "end": 444
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 327,
                        "end": 444
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 299,
                    "end": 444
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 286,
                "end": 444
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 286,
            "end": 445
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "prevState",
                    "rawText": "prevState",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 445,
                    "end": 456
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 456,
                    "end": 458
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "prevState",
                            "rawText": "prevState",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 458,
                            "end": 468
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 468,
                            "end": 471
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "useDefault",
                                "rawText": "useDefault",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 471,
                                "end": 482
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 482,
                                "end": 485
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "defaultState",
                                "rawText": "defaultState",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 485,
                                "end": 498
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 482,
                            "end": 498
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 458,
                        "end": 498
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 498,
                        "end": 501
                    },
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
                                        "text": "catalogs",
                                        "rawText": "catalogs",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 503,
                                        "end": 516
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 519,
                                            "end": 519
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 517,
                                        "end": 520
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 503,
                                    "end": 520
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "loadState",
                                        "rawText": "loadState",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 521,
                                        "end": 535
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "LOADED",
                                        "rawText": "LOADED",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 536,
                                        "end": 543
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 521,
                                    "end": 543
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "opened",
                                        "rawText": "opened",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 544,
                                        "end": 555
                                    },
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 556,
                                        "end": 562
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 544,
                                    "end": 562
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "searchQuery",
                                        "rawText": "searchQuery",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 563,
                                        "end": 579
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "",
                                        "rawText": "''",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 580,
                                        "end": 583
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 563,
                                    "end": 583
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "selectedCatalog",
                                        "rawText": "selectedCatalog",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 584,
                                        "end": 604
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 605,
                                        "end": 610
                                    },
                                    "flags": 33,
                                    "transformFlags": 128,
                                    "start": 584,
                                    "end": 610
                                }
                            ],
                            "trailingComma": true,
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 503,
                            "end": 611
                        },
                        "flags": 49,
                        "transformFlags": 8,
                        "start": 501,
                        "end": 615
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 458,
                    "end": 615
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 445,
                "end": 615
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 445,
            "end": 616
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 616,
                        "end": 622
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "steps",
                        "rawText": "steps",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 623,
                        "end": 628
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 616,
                    "end": 628
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 628,
                    "end": 630
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "steps",
                        "rawText": "steps",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 630,
                        "end": 636
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 636,
                        "end": 639
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
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
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 645,
                                                    "end": 654
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "mock-module",
                                                    "rawText": "'mock-module'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 655,
                                                    "end": 669
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 645,
                                                "end": 669
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "path",
                                                    "rawText": "path",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 670,
                                                    "end": 679
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "/nux/mock-module",
                                                    "rawText": "'/nux/mock-module'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 680,
                                                    "end": 699
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 670,
                                                "end": 699
                                            }
                                        ],
                                        "trailingComma": true,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 645,
                                        "end": 700
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 641,
                                    "end": 704
                                }
                            ],
                            "trailingComma": true,
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 641,
                            "end": 705
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 639,
                        "end": 707
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 630,
                    "end": 707
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 616,
                "end": 707
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 616,
            "end": 708
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 708,
                        "end": 714
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "steps",
                        "rawText": "steps",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 715,
                        "end": 720
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 708,
                    "end": 720
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 720,
                    "end": 722
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "steps",
                        "rawText": "steps",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 722,
                        "end": 728
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 728,
                        "end": 731
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "checkStep",
                            "rawText": "checkStep",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 731,
                            "end": 741
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 741,
                            "end": 744
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
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
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 750,
                                                        "end": 759
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "mock-module",
                                                        "rawText": "'mock-module'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 760,
                                                        "end": 774
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 128,
                                                    "start": 750,
                                                    "end": 774
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "path",
                                                        "rawText": "path",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 775,
                                                        "end": 784
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "/nux/mock-module",
                                                        "rawText": "'/nux/mock-module'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 785,
                                                        "end": 804
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 128,
                                                    "start": 775,
                                                    "end": 804
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 17,
                                            "transformFlags": 0,
                                            "start": 750,
                                            "end": 805
                                        },
                                        "flags": 49,
                                        "transformFlags": 8,
                                        "start": 746,
                                        "end": 809
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 746,
                                "end": 810
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 744,
                            "end": 812
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 741,
                        "end": 812
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 722,
                    "end": 812
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 708,
                "end": 812
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 708,
            "end": 813
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 813,
                        "end": 819
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "steps",
                        "rawText": "steps",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 820,
                        "end": 825
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 813,
                    "end": 825
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 825,
                    "end": 827
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "steps",
                            "rawText": "steps",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 827,
                            "end": 833
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 833,
                            "end": 836
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "checkStep",
                            "rawText": "checkStep",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 836,
                            "end": 846
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 827,
                        "end": 846
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 846,
                        "end": 849
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
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
                                                    "kind": 134299649,
                                                    "text": "name",
                                                    "rawText": "name",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 855,
                                                    "end": 864
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "mock-module",
                                                    "rawText": "'mock-module'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 865,
                                                    "end": 879
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 855,
                                                "end": 879
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "path",
                                                    "rawText": "path",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 880,
                                                    "end": 889
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "/nux/mock-module",
                                                    "rawText": "'/nux/mock-module'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 890,
                                                    "end": 909
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 880,
                                                "end": 909
                                            }
                                        ],
                                        "trailingComma": true,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 855,
                                        "end": 910
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 851,
                                    "end": 914
                                }
                            ],
                            "trailingComma": true,
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 851,
                            "end": 915
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 849,
                        "end": 917
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 827,
                    "end": 917
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 813,
                "end": 917
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 813,
            "end": 918
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 918,
                "end": 925
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "create",
                            "rawText": "create",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 925,
                            "end": 932
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 936,
                                "end": 936
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 937,
                                "end": 940
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
                                                "start": 942,
                                                "end": 950
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "result",
                                                            "rawText": "result",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 950,
                                                            "end": 957
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "doSomething",
                                                                "rawText": "doSomething",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 959,
                                                                "end": 971
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 972,
                                                                "end": 972
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 959,
                                                            "end": 973
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 950,
                                                        "end": 973
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "transformFlags": 0,
                                                "start": 950,
                                                "end": 973
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 942,
                                            "end": 974
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 974,
                                                "end": 983
                                            },
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "shouldReturn",
                                                            "rawText": "shouldReturn",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 985,
                                                            "end": 1002
                                                        },
                                                        "operatorToken": {
                                                            "kind": 33594,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1002,
                                                            "end": 1005
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "result",
                                                                "rawText": "result",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1005,
                                                                "end": 1016
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "ok",
                                                                "rawText": "ok",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1017,
                                                                "end": 1019
                                                            },
                                                            "flags": 97,
                                                            "transformFlags": 2,
                                                            "start": 1005,
                                                            "end": 1019
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 5120,
                                                        "start": 983,
                                                        "end": 1019
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33594,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 1019,
                                                        "end": 1022
                                                    },
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
                                                                        "text": "status",
                                                                        "rawText": "status",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1024,
                                                                        "end": 1037
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "ok",
                                                                        "rawText": "\"ok\"",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 1038,
                                                                        "end": 1043
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1024,
                                                                    "end": 1043
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "createdAt",
                                                                        "rawText": "createdAt",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1044,
                                                                        "end": 1060
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "result",
                                                                            "rawText": "result",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1061,
                                                                            "end": 1068
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "createdAt",
                                                                            "rawText": "createdAt",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1069,
                                                                            "end": 1078
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 1044,
                                                                        "end": 1078
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1044,
                                                                    "end": 1078
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "updatedAt",
                                                                        "rawText": "updatedAt",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1079,
                                                                        "end": 1095
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "result",
                                                                            "rawText": "result",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1096,
                                                                            "end": 1103
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "updatedAt",
                                                                            "rawText": "updatedAt",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1104,
                                                                            "end": 1113
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 1079,
                                                                        "end": 1113
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1079,
                                                                    "end": 1113
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1024,
                                                            "end": 1113
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1022,
                                                        "end": 1119
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 5120,
                                                    "start": 983,
                                                    "end": 1119
                                                },
                                                "flags": 983,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 1123
                                            },
                                            "flags": 81,
                                            "transformFlags": 256,
                                            "start": 974,
                                            "end": 1124
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 942,
                                    "end": 1124
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 940,
                                "end": 1126
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 934,
                            "end": 1126
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 925,
                        "end": 1126
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 925,
                "end": 1126
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 918,
            "end": 1126
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 1126,
                "end": 1133
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "create2",
                            "rawText": "create2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1133,
                            "end": 1141
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1145,
                                "end": 1145
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1146,
                                "end": 1149
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
                                                "start": 1151,
                                                "end": 1159
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "result",
                                                            "rawText": "result",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1159,
                                                            "end": 1166
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "doSomething",
                                                                "rawText": "doSomething",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1168,
                                                                "end": 1180
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 1181,
                                                                "end": 1181
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 1168,
                                                            "end": 1182
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 1159,
                                                        "end": 1182
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "transformFlags": 0,
                                                "start": 1159,
                                                "end": 1182
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 1151,
                                            "end": 1183
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 1183,
                                                "end": 1192
                                            },
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "shouldReturn",
                                                                "rawText": "shouldReturn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1194,
                                                                "end": 1211
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1211,
                                                                "end": 1214
                                                            },
                                                            "right": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "result",
                                                                    "rawText": "result",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 1214,
                                                                    "end": 1221
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "ok",
                                                                    "rawText": "ok",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 1222,
                                                                    "end": 1224
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 1214,
                                                                "end": 1224
                                                            },
                                                            "flags": 97,
                                                            "transformFlags": 5120,
                                                            "start": 1192,
                                                            "end": 1224
                                                        },
                                                        "operatorToken": {
                                                            "kind": 33594,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1224,
                                                            "end": 1227
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "result",
                                                            "rawText": "result",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1227,
                                                            "end": 1234
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 5120,
                                                        "start": 1192,
                                                        "end": 1234
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33339,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 1234,
                                                        "end": 1237
                                                    },
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
                                                                        "text": "status",
                                                                        "rawText": "status",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1239,
                                                                        "end": 1252
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "ok",
                                                                        "rawText": "\"ok\"",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 1253,
                                                                        "end": 1258
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1239,
                                                                    "end": 1258
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "createdAt",
                                                                        "rawText": "createdAt",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1259,
                                                                        "end": 1275
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "result",
                                                                            "rawText": "result",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1276,
                                                                            "end": 1283
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "createdAt",
                                                                            "rawText": "createdAt",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1284,
                                                                            "end": 1293
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 1259,
                                                                        "end": 1293
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1259,
                                                                    "end": 1293
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "updatedAt",
                                                                        "rawText": "updatedAt",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1294,
                                                                        "end": 1310
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "result",
                                                                            "rawText": "result",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1311,
                                                                            "end": 1318
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "updatedAt",
                                                                            "rawText": "updatedAt",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1319,
                                                                            "end": 1328
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 1294,
                                                                        "end": 1328
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1294,
                                                                    "end": 1328
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1239,
                                                            "end": 1328
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1237,
                                                        "end": 1334
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 5120,
                                                    "start": 1192,
                                                    "end": 1334
                                                },
                                                "flags": 1192,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 1338
                                            },
                                            "flags": 81,
                                            "transformFlags": 256,
                                            "start": 1183,
                                            "end": 1339
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 1151,
                                    "end": 1339
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1149,
                                "end": 1341
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1143,
                            "end": 1341
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 1133,
                        "end": 1341
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 1133,
                "end": 1341
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 1126,
            "end": 1341
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 1341,
                "end": 1348
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1348,
                            "end": 1352
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
                                            "text": "state",
                                            "rawText": "state",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1356,
                                            "end": 1364
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "shouldHaveState",
                                                    "rawText": "shouldHaveState",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1365,
                                                    "end": 1381
                                                },
                                                "operatorToken": {
                                                    "kind": 33594,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1381,
                                                    "end": 1384
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "stateIsOK",
                                                    "rawText": "stateIsOK",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 1384,
                                                    "end": 1398
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 1356,
                                                "end": 1398
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1398,
                                                "end": 1401
                                            },
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
                                                                "text": "loadState",
                                                                "rawText": "loadState",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1403,
                                                                "end": 1419
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "LOADED",
                                                                "rawText": "LOADED",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1420,
                                                                "end": 1427
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 1403,
                                                            "end": 1427
                                                        },
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "opened",
                                                                "rawText": "opened",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1428,
                                                                "end": 1441
                                                            },
                                                            "right": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1442,
                                                                "end": 1448
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 1428,
                                                            "end": 1448
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 1403,
                                                    "end": 1448
                                                },
                                                "flags": 49,
                                                "transformFlags": 8,
                                                "start": 1401,
                                                "end": 1454
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 1356,
                                            "end": 1454
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 1356,
                                        "end": 1454
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "loadNext",
                                            "rawText": "loadNext",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1455,
                                            "end": 1466
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "stateIsOK",
                                                    "rawText": "stateIsOK",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1467,
                                                    "end": 1477
                                                },
                                                "operatorToken": {
                                                    "kind": 33594,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1477,
                                                    "end": 1480
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "hasNext",
                                                    "rawText": "hasNext",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1480,
                                                    "end": 1488
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 1455,
                                                "end": 1488
                                            },
                                            "operatorToken": {
                                                "kind": 33339,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1488,
                                                "end": 1491
                                            },
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
                                                                "text": "skipNext",
                                                                "rawText": "skipNext",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1493,
                                                                "end": 1508
                                                            },
                                                            "right": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1509,
                                                                "end": 1514
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 1493,
                                                            "end": 1514
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 1493,
                                                    "end": 1514
                                                },
                                                "flags": 49,
                                                "transformFlags": 8,
                                                "start": 1491,
                                                "end": 1520
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 1455,
                                            "end": 1520
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 1455,
                                        "end": 1520
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "loaded",
                                            "rawText": "loaded",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1521,
                                            "end": 1530
                                        },
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1531,
                                            "end": 1536
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 1521,
                                        "end": 1536
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 1356,
                                "end": 1536
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 1354,
                            "end": 1538
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 1348,
                        "end": 1538
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 1348,
                "end": 1538
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 1341,
            "end": 1538
        }
    ],
    "isModule": false,
    "source": "prevState = prevState || {\n  catalogs: [],\n  loadState: LOADED,\n  opened: false,\n  searchQuery: '',\n  selectedCatalog: null,\n};\n\nprevState = prevState ||\n  defaultState || {\n    catalogs: [],\n    loadState: LOADED,\n    opened: false,\n    searchQuery: '',\n    selectedCatalog: null,\n  };\n\nprevState = prevState ||\n  defaultState && {\n    catalogs: [],\n    loadState: LOADED,\n    opened: false,\n    searchQuery: '',\n    selectedCatalog: null,\n  };\n\nprevState = prevState || useDefault && defaultState || {\n    catalogs: [],\n    loadState: LOADED,\n    opened: false,\n    searchQuery: '',\n    selectedCatalog: null,\n  };\n\nthis.steps = steps || [\n  {\n    name: 'mock-module',\n    path: '/nux/mock-module',\n  },\n];\n\nthis.steps = steps || checkStep && [\n  {\n    name: 'mock-module',\n    path: '/nux/mock-module',\n  },\n];\n\nthis.steps = steps && checkStep || [\n  {\n    name: 'mock-module',\n    path: '/nux/mock-module',\n  },\n];\n\nconst create = () => {\n  const result = doSomething();\n  return (\n    shouldReturn &&\n    result.ok && {\n      status: \"ok\",\n      createdAt: result.createdAt,\n      updatedAt: result.updatedAt\n    }\n  );\n}\n\nconst create2 = () => {\n  const result = doSomething();\n  return (\n    shouldReturn && result.ok && result || {\n      status: \"ok\",\n      createdAt: result.createdAt,\n      updatedAt: result.updatedAt\n    }\n  );\n}\n\nconst obj = {\n  state: shouldHaveState &&\n    stateIsOK && {\n      loadState: LOADED,\n      opened: false\n    },\n  loadNext: stateIsOK && hasNext || {\n      skipNext: true\n    },\n  loaded: true\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1538
}
```

### Printed

```javascript
prevState = prevState || {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: "''",
    selectedCatalog: null,
  };
prevState = prevState || defaultState || {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: "''",
    selectedCatalog: null,
  };

prevState = prevState || defaultState && {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: "''",
    selectedCatalog: null,
  };

prevState = prevState || useDefault && defaultState || {
    catalogs: [],
    loadState: LOADED,
    opened: false,
    searchQuery: "''",
    selectedCatalog: null,
  };

this.steps = steps || [{
      name: "'mock-module'",
      path: "'/nux/mock-module'",
    },];

this.steps = steps || checkStep && [{
      name: "'mock-module'",
      path: "'/nux/mock-module'",
    },];

this.steps = steps && checkStep || [{
      name: "'mock-module'",
      path: "'/nux/mock-module'",
    },];

const create = () => {
    const result = doSomething();
    return (shouldReturn && result.ok && {
        status: "\"ok\"",
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
      });
  };

const create2 = () => {
    const result = doSomething();
    return (shouldReturn && result.ok && result || {
        status: "\"ok\"",
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
      });
  };

const obj = {
    state: shouldHaveState && stateIsOK && {
        loadState: LOADED,
        opened: false
      },
    loadNext: stateIsOK && hasNext || {
        skipNext: true
      },
    loaded: true
  };

```

### Diagnostics

```javascript
✔ No errors
```

