# Kataw parser test case

## Input

`````js
"use strict"; (a = yield) => {};
"use strict"; (a = yield /a/g) => {};
"use strict"; yield => {};
"use strict"; (yield) => {};
"use strict"; (yield = 0) => {};
"use strict"; ([yield]) => {};
"use strict"; ([yield = 0]) => {};
"use strict"; ([...yield]) => {};
"use strict"; ({a: yield}) => {};
"use strict"; ({yield}) => {};
"use strict"; ({yield = 0}) => {};
"use strict"; () => yield;
"use strict"; () => yield /a/g;
"use strict"; () => { var x = yield; };
"use strict"; () => { var x = yield /a/g; };
"use strict"; () => { var yield; };
"use strict"; () => { var yield = 0; };
"use strict"; () => { var [yield] = []; };
"use strict"; () => { var [yield = 0] = []; };
"use strict"; () => { var [...yield] = []; };
"use strict"; () => { var {a: yield} = {}; };
"use strict"; () => { var {yield} = {}; };
"use strict"; () => { var {yield = 0} = {}; };
"use strict"; () => { let yield; };
"use strict"; () => { let yield = 0; };
"use strict"; () => { let [yield] = []; };
"use strict"; () => { let [yield = 0] = []; };
"use strict"; () => { let [...yield] = []; };
"use strict"; () => { let {a: yield} = {}; };
"use strict"; () => { let {yield} = {}; };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 15,
                            "end": 16
                        },
                        "operatorToken": {
                            "kind": 8454253,
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "right": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 18,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 24
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 30,
                        "end": 30
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 28,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 32,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 48,
                            "end": 49
                        },
                        "operatorToken": {
                            "kind": 8454253,
                            "autofix": 0,
                            "flags": 0,
                            "start": 46,
                            "end": 51
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 51,
                                    "end": 57
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 57,
                                    "end": 59
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 59,
                                    "end": 60
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 51,
                                "end": 60
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "autofix": 0,
                                "flags": 0,
                                "start": 60,
                                "end": 61
                            },
                            "right": {
                                "kind": 81921,
                                "value": "g",
                                "autofix": 0,
                                "flags": 768,
                                "start": 61,
                                "end": 62
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 51,
                            "end": 62
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 46,
                        "end": 62
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 68,
                        "end": 68
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 66,
                    "end": 69
                },
                "autofix": 0,
                "flags": 256,
                "start": 46,
                "end": 69
            },
            "autofix": 0,
            "flags": 128,
            "start": 46,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 70,
                "end": 83
            },
            "autofix": 0,
            "flags": 128,
            "start": 70,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 84,
                    "end": 90
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 95,
                        "end": 95
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 93,
                    "end": 96
                },
                "autofix": 0,
                "flags": 256,
                "start": 84,
                "end": 96
            },
            "autofix": 0,
            "flags": 128,
            "start": 84,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 97,
                "end": 110
            },
            "autofix": 0,
            "flags": 128,
            "start": 97,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 81921,
                        "value": "yield",
                        "autofix": 0,
                        "flags": 768,
                        "start": 113,
                        "end": 118
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 124,
                        "end": 124
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 122,
                    "end": 125
                },
                "autofix": 0,
                "flags": 256,
                "start": 111,
                "end": 125
            },
            "autofix": 0,
            "flags": 128,
            "start": 111,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 126,
                "end": 139
            },
            "autofix": 0,
            "flags": 128,
            "start": 126,
            "end": 140
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 142,
                            "end": 147
                        },
                        "operatorToken": {
                            "kind": 67174402,
                            "autofix": 0,
                            "flags": 0,
                            "start": 140,
                            "end": 149
                        },
                        "right": {
                            "kind": 81921,
                            "value": 0,
                            "autofix": 0,
                            "flags": 768,
                            "start": 149,
                            "end": 151
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 140,
                        "end": 151
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 157,
                        "end": 157
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 155,
                    "end": 158
                },
                "autofix": 0,
                "flags": 256,
                "start": 140,
                "end": 158
            },
            "autofix": 0,
            "flags": 128,
            "start": 140,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 159,
                "end": 172
            },
            "autofix": 0,
            "flags": 128,
            "start": 159,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 176,
                                    "end": 181
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 176,
                            "end": 181
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 175,
                        "end": 182
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 188,
                        "end": 188
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 186,
                    "end": 189
                },
                "autofix": 0,
                "flags": 256,
                "start": 173,
                "end": 189
            },
            "autofix": 0,
            "flags": 128,
            "start": 173,
            "end": 190
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 190,
                "end": 203
            },
            "autofix": 0,
            "flags": 128,
            "start": 190,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 207,
                                        "end": 212
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 207,
                                        "end": 214
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 214,
                                        "end": 216
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 207,
                                    "end": 216
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 207,
                            "end": 216
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 206,
                        "end": 217
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 223,
                        "end": 223
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 221,
                    "end": 224
                },
                "autofix": 0,
                "flags": 256,
                "start": 204,
                "end": 224
            },
            "autofix": 0,
            "flags": 128,
            "start": 204,
            "end": 225
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 225,
                "end": 238
            },
            "autofix": 0,
            "flags": 128,
            "start": 225,
            "end": 239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 245,
                                        "end": 250
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 242,
                                    "end": 250
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 242,
                            "end": 250
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 241,
                        "end": 251
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 257,
                        "end": 257
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 255,
                    "end": 258
                },
                "autofix": 0,
                "flags": 256,
                "start": 239,
                "end": 258
            },
            "autofix": 0,
            "flags": 128,
            "start": 239,
            "end": 259
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 259,
                "end": 272
            },
            "autofix": 0,
            "flags": 128,
            "start": 259,
            "end": 273
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 278,
                                        "end": 284
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 276,
                                        "end": 277
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 276,
                                    "end": 284
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 276,
                            "end": 284
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 275,
                        "end": 285
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 291,
                        "end": 291
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 289,
                    "end": 292
                },
                "autofix": 0,
                "flags": 256,
                "start": 273,
                "end": 292
            },
            "autofix": 0,
            "flags": 128,
            "start": 273,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 293,
                "end": 306
            },
            "autofix": 0,
            "flags": 128,
            "start": 293,
            "end": 307
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 310,
                                    "end": 315
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 310,
                            "end": 315
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 309,
                        "end": 316
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 322,
                        "end": 322
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 320,
                    "end": 323
                },
                "autofix": 0,
                "flags": 256,
                "start": 307,
                "end": 323
            },
            "autofix": 0,
            "flags": 128,
            "start": 307,
            "end": 324
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 324,
                "end": 337
            },
            "autofix": 0,
            "flags": 128,
            "start": 324,
            "end": 338
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 341,
                                        "end": 346
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 348,
                                        "end": 350
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 341,
                                    "end": 350
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 341,
                            "end": 350
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 340,
                        "end": 351
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 357,
                        "end": 357
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 355,
                    "end": 358
                },
                "autofix": 0,
                "flags": 256,
                "start": 338,
                "end": 358
            },
            "autofix": 0,
            "flags": 128,
            "start": 338,
            "end": 359
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 359,
                "end": 372
            },
            "autofix": 0,
            "flags": 128,
            "start": 359,
            "end": 373
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 379,
                    "end": 385
                },
                "autofix": 0,
                "flags": 256,
                "start": 373,
                "end": 385
            },
            "autofix": 0,
            "flags": 128,
            "start": 373,
            "end": 386
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 386,
                "end": 399
            },
            "autofix": 0,
            "flags": 128,
            "start": 386,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 406,
                            "end": 412
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 412,
                            "end": 414
                        },
                        "right": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 414,
                            "end": 415
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 406,
                        "end": 415
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "autofix": 0,
                        "flags": 0,
                        "start": 415,
                        "end": 416
                    },
                    "right": {
                        "kind": 81921,
                        "value": "g",
                        "autofix": 0,
                        "flags": 768,
                        "start": 416,
                        "end": 417
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 406,
                    "end": 417
                },
                "autofix": 0,
                "flags": 256,
                "start": 400,
                "end": 417
            },
            "autofix": 0,
            "flags": 128,
            "start": 400,
            "end": 418
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 418,
                "end": 431
            },
            "autofix": 0,
            "flags": 128,
            "start": 418,
            "end": 432
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 444,
                                                "end": 446
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 448,
                                                "end": 454
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 444,
                                            "end": 454
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 444,
                                    "end": 454
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 440,
                                "end": 455
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 440,
                        "end": 455
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 438,
                    "end": 457
                },
                "autofix": 0,
                "flags": 256,
                "start": 432,
                "end": 457
            },
            "autofix": 0,
            "flags": 128,
            "start": 432,
            "end": 458
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 458,
                "end": 471
            },
            "autofix": 0,
            "flags": 128,
            "start": 458,
            "end": 472
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 484,
                                                "end": 486
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "yield",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 488,
                                                        "end": 494
                                                    },
                                                    "operatorToken": {
                                                        "kind": 35640,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 494,
                                                        "end": 496
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 496,
                                                        "end": 497
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 488,
                                                    "end": 497
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 497,
                                                    "end": 498
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "g",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 498,
                                                    "end": 499
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 488,
                                                "end": 499
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 484,
                                            "end": 499
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 484,
                                    "end": 499
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 480,
                                "end": 500
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 480,
                        "end": 500
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 478,
                    "end": 502
                },
                "autofix": 0,
                "flags": 256,
                "start": 472,
                "end": 502
            },
            "autofix": 0,
            "flags": 128,
            "start": 472,
            "end": 503
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 503,
                "end": 516
            },
            "autofix": 0,
            "flags": 128,
            "start": 503,
            "end": 517
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 529,
                                                "end": 535
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 529,
                                            "end": 535
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 529,
                                    "end": 535
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 525,
                                "end": 536
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 525,
                        "end": 536
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 523,
                    "end": 538
                },
                "autofix": 0,
                "flags": 256,
                "start": 517,
                "end": 538
            },
            "autofix": 0,
            "flags": 128,
            "start": 517,
            "end": 539
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 539,
                "end": 552
            },
            "autofix": 0,
            "flags": 128,
            "start": 539,
            "end": 553
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 565,
                                                "end": 571
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 81921,
                                                "value": 0,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 573,
                                                "end": 575
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 565,
                                            "end": 575
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 565,
                                    "end": 575
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 561,
                                "end": 576
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 561,
                        "end": 576
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 559,
                    "end": 578
                },
                "autofix": 0,
                "flags": 256,
                "start": 553,
                "end": 578
            },
            "autofix": 0,
            "flags": 128,
            "start": 553,
            "end": 579
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 579,
                "end": 592
            },
            "autofix": 0,
            "flags": 128,
            "start": 579,
            "end": 593
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 607,
                                                                "end": 612
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 607,
                                                            "end": 612
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 607,
                                                    "end": 612
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 605,
                                                "end": 613
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 617,
                                                    "end": 617
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 615,
                                                "end": 618
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 605,
                                            "end": 618
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 605,
                                    "end": 618
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 601,
                                "end": 619
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 601,
                        "end": 619
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 599,
                    "end": 621
                },
                "autofix": 0,
                "flags": 256,
                "start": 593,
                "end": 621
            },
            "autofix": 0,
            "flags": 128,
            "start": 593,
            "end": 622
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 622,
                "end": 635
            },
            "autofix": 0,
            "flags": 128,
            "start": 622,
            "end": 636
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 650,
                                                                "end": 655
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 81921,
                                                                "value": 0,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 657,
                                                                "end": 659
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 650,
                                                            "end": 659
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 650,
                                                    "end": 659
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 648,
                                                "end": 660
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 664,
                                                    "end": 664
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 662,
                                                "end": 665
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 648,
                                            "end": 665
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 648,
                                    "end": 665
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 644,
                                "end": 666
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 644,
                        "end": 666
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 642,
                    "end": 668
                },
                "autofix": 0,
                "flags": 256,
                "start": 636,
                "end": 668
            },
            "autofix": 0,
            "flags": 128,
            "start": 636,
            "end": 669
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 669,
                "end": 682
            },
            "autofix": 0,
            "flags": 128,
            "start": 669,
            "end": 683
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 697,
                                                                "end": 700
                                                            },
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 700,
                                                                "end": 705
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 697,
                                                            "end": 705
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 697,
                                                    "end": 705
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 695,
                                                "end": 706
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 710,
                                                    "end": 710
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 708,
                                                "end": 711
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 695,
                                            "end": 711
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 695,
                                    "end": 711
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 691,
                                "end": 712
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 691,
                        "end": 712
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 689,
                    "end": 714
                },
                "autofix": 0,
                "flags": 256,
                "start": 683,
                "end": 714
            },
            "autofix": 0,
            "flags": 128,
            "start": 683,
            "end": 715
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 715,
                "end": 728
            },
            "autofix": 0,
            "flags": 128,
            "start": 715,
            "end": 729
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 81921,
                                                                "value": "a",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 743,
                                                                "end": 745
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 81921,
                                                                    "value": "yield",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 745,
                                                                    "end": 751
                                                                },
                                                                "initializer": null,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 745,
                                                                "end": 751
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 743,
                                                            "end": 751
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 743,
                                                    "end": 751
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 741,
                                                "end": 752
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 756,
                                                    "end": 756
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 754,
                                                "end": 757
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 741,
                                            "end": 757
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 741,
                                    "end": 757
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 737,
                                "end": 758
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 737,
                        "end": 758
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 735,
                    "end": 760
                },
                "autofix": 0,
                "flags": 256,
                "start": 729,
                "end": 760
            },
            "autofix": 0,
            "flags": 128,
            "start": 729,
            "end": 761
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 761,
                "end": 774
            },
            "autofix": 0,
            "flags": 128,
            "start": 761,
            "end": 775
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 222,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 789,
                                                                "end": 794
                                                            },
                                                            "right": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 789,
                                                            "end": 794
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 789,
                                                    "end": 794
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 787,
                                                "end": 795
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 799,
                                                    "end": 799
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 797,
                                                "end": 800
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 787,
                                            "end": 800
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 787,
                                    "end": 800
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 783,
                                "end": 801
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 783,
                        "end": 801
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 781,
                    "end": 803
                },
                "autofix": 0,
                "flags": 256,
                "start": 775,
                "end": 803
            },
            "autofix": 0,
            "flags": 128,
            "start": 775,
            "end": 804
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 804,
                "end": 817
            },
            "autofix": 0,
            "flags": 128,
            "start": 804,
            "end": 818
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 155,
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 222,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 832,
                                                                "end": 837
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": 0,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 839,
                                                                "end": 841
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 832,
                                                            "end": 841
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 832,
                                                    "end": 841
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 830,
                                                "end": 842
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 846,
                                                    "end": 846
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 844,
                                                "end": 847
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 830,
                                            "end": 847
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 830,
                                    "end": 847
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 826,
                                "end": 848
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 826,
                        "end": 848
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 824,
                    "end": 850
                },
                "autofix": 0,
                "flags": 256,
                "start": 818,
                "end": 850
            },
            "autofix": 0,
            "flags": 128,
            "start": 818,
            "end": 851
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 851,
                "end": 864
            },
            "autofix": 0,
            "flags": 128,
            "start": 851,
            "end": 865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "let",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 873,
                                    "end": 877
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 873,
                                "end": 877
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 877,
                                    "end": 883
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 877,
                                "end": 884
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 873,
                        "end": 884
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 871,
                    "end": 886
                },
                "autofix": 0,
                "flags": 256,
                "start": 865,
                "end": 886
            },
            "autofix": 0,
            "flags": 128,
            "start": 865,
            "end": 887
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 887,
                "end": 900
            },
            "autofix": 0,
            "flags": 128,
            "start": 887,
            "end": 901
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "let",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 909,
                                    "end": 913
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 909,
                                "end": 913
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 913,
                                        "end": 919
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 913,
                                        "end": 921
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 921,
                                        "end": 923
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 913,
                                    "end": 923
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 913,
                                "end": 924
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 909,
                        "end": 924
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 907,
                    "end": 926
                },
                "autofix": 0,
                "flags": 256,
                "start": 901,
                "end": 926
            },
            "autofix": 0,
            "flags": 128,
            "start": 901,
            "end": 927
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 927,
                "end": 940
            },
            "autofix": 0,
            "flags": 128,
            "start": 927,
            "end": 941
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 162,
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 955,
                                                                "end": 960
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 955,
                                                            "end": 960
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 955,
                                                    "end": 960
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 953,
                                                "end": 961
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 965,
                                                    "end": 965
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 963,
                                                "end": 966
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 953,
                                            "end": 966
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 953,
                                    "end": 966
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 949,
                                "end": 967
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 949,
                        "end": 967
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 947,
                    "end": 969
                },
                "autofix": 0,
                "flags": 256,
                "start": 941,
                "end": 969
            },
            "autofix": 0,
            "flags": 128,
            "start": 941,
            "end": 970
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 970,
                "end": 983
            },
            "autofix": 0,
            "flags": 128,
            "start": 970,
            "end": 984
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 162,
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 998,
                                                                "end": 1003
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 81921,
                                                                "value": 0,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 1005,
                                                                "end": 1007
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 998,
                                                            "end": 1007
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 998,
                                                    "end": 1007
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 996,
                                                "end": 1008
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 1012,
                                                    "end": 1012
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1010,
                                                "end": 1013
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 996,
                                            "end": 1013
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 996,
                                    "end": 1013
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 992,
                                "end": 1014
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 992,
                        "end": 1014
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 990,
                    "end": 1016
                },
                "autofix": 0,
                "flags": 256,
                "start": 984,
                "end": 1016
            },
            "autofix": 0,
            "flags": 128,
            "start": 984,
            "end": 1017
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 1017,
                "end": 1030
            },
            "autofix": 0,
            "flags": 128,
            "start": 1017,
            "end": 1031
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 162,
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 1045,
                                                                "end": 1048
                                                            },
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 1048,
                                                                "end": 1053
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 1045,
                                                            "end": 1053
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 1045,
                                                    "end": 1053
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1043,
                                                "end": 1054
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 1058,
                                                    "end": 1058
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1056,
                                                "end": 1059
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 1043,
                                            "end": 1059
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 1043,
                                    "end": 1059
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 1039,
                                "end": 1060
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1039,
                        "end": 1060
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1037,
                    "end": 1062
                },
                "autofix": 0,
                "flags": 256,
                "start": 1031,
                "end": 1062
            },
            "autofix": 0,
            "flags": 128,
            "start": 1031,
            "end": 1063
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 1063,
                "end": 1076
            },
            "autofix": 0,
            "flags": 128,
            "start": 1063,
            "end": 1077
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 162,
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 81921,
                                                                "value": "a",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 1091,
                                                                "end": 1093
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 81921,
                                                                    "value": "yield",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 1093,
                                                                    "end": 1099
                                                                },
                                                                "initializer": null,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 1093,
                                                                "end": 1099
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 1091,
                                                            "end": 1099
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 1091,
                                                    "end": 1099
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1089,
                                                "end": 1100
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 1104,
                                                    "end": 1104
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1102,
                                                "end": 1105
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 1089,
                                            "end": 1105
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 1089,
                                    "end": 1105
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 1085,
                                "end": 1106
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1085,
                        "end": 1106
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1083,
                    "end": 1108
                },
                "autofix": 0,
                "flags": 256,
                "start": 1077,
                "end": 1108
            },
            "autofix": 0,
            "flags": 128,
            "start": 1077,
            "end": 1109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 1109,
                "end": 1122
            },
            "autofix": 0,
            "flags": 128,
            "start": 1109,
            "end": 1123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [
                            {
                                "kind": 162,
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 222,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 1137,
                                                                "end": 1142
                                                            },
                                                            "right": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 1137,
                                                            "end": 1142
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 1137,
                                                    "end": 1142
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1135,
                                                "end": 1143
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 1147,
                                                    "end": 1147
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 1145,
                                                "end": 1148
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 1135,
                                            "end": 1148
                                        }
                                    ],
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 1135,
                                    "end": 1148
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 1131,
                                "end": 1149
                            }
                        ],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1131,
                        "end": 1149
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1129,
                    "end": 1151
                },
                "autofix": 0,
                "flags": 256,
                "start": 1123,
                "end": 1151
            },
            "autofix": 0,
            "flags": 128,
            "start": 1123,
            "end": 1152
        }
    ],
    "isModule": false,
    "text": "\"use strict\"; (a = yield) => {};\n\"use strict\"; (a = yield /a/g) => {};\n\"use strict\"; yield => {};\n\"use strict\"; (yield) => {};\n\"use strict\"; (yield = 0) => {};\n\"use strict\"; ([yield]) => {};\n\"use strict\"; ([yield = 0]) => {};\n\"use strict\"; ([...yield]) => {};\n\"use strict\"; ({a: yield}) => {};\n\"use strict\"; ({yield}) => {};\n\"use strict\"; ({yield = 0}) => {};\n\"use strict\"; () => yield;\n\"use strict\"; () => yield /a/g;\n\"use strict\"; () => { var x = yield; };\n\"use strict\"; () => { var x = yield /a/g; };\n\"use strict\"; () => { var yield; };\n\"use strict\"; () => { var yield = 0; };\n\"use strict\"; () => { var [yield] = []; };\n\"use strict\"; () => { var [yield = 0] = []; };\n\"use strict\"; () => { var [...yield] = []; };\n\"use strict\"; () => { var {a: yield} = {}; };\n\"use strict\"; () => { var {yield} = {}; };\n\"use strict\"; () => { var {yield = 0} = {}; };\n\"use strict\"; () => { let yield; };\n\"use strict\"; () => { let yield = 0; };\n\"use strict\"; () => { let [yield] = []; };\n\"use strict\"; () => { let [yield = 0] = []; };\n\"use strict\"; () => { let [...yield] = []; };\n\"use strict\"; () => { let {a: yield} = {}; };\n\"use strict\"; () => { let {yield} = {}; };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 877,
            "end": 883
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 913,
            "end": 919
        }
    ],
    "start": 0,
    "end": 1152
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

