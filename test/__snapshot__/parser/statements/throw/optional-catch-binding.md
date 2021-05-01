# Kataw parser test case

## Input

`````js
try { } catch { }

try { } catch { } finally { }

try { let e; } catch { let e; }

try { let e; } catch { let e; } finally { let e; }

"use strict"; try { } catch { }

try { try { } catch { } finally { } } catch (e) { }

try { let e; } catch { let e; }

try {} catch ({e}) { try { let e; } catch { let e; } finally { let e; } }

function f() { try { let e; } catch { let e; } finally { let e; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 16,
                    "start": 13,
                    "end": 17
                },
                "flags": 16,
                "start": 7,
                "end": 17
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 1,
                "start": 17,
                "end": 22
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 24,
                    "end": 24
                },
                "flags": 16,
                "start": 22,
                "end": 26
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 26,
                    "end": 32
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 16,
                    "start": 32,
                    "end": 36
                },
                "flags": 16,
                "start": 26,
                "end": 36
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 0,
                "start": 36,
                "end": 44
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 46,
                    "end": 46
                },
                "flags": 16,
                "start": 44,
                "end": 48
            },
            "flags": 16,
            "start": 17,
            "end": 48
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 1,
                "start": 48,
                "end": 53
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 55,
                                "end": 59
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
                                            "start": 59,
                                            "end": 61
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 59,
                                        "end": 61
                                    }
                                ],
                                "flags": 33554448,
                                "start": 59,
                                "end": 61
                            },
                            "flags": 33554448,
                            "start": 55,
                            "end": 62
                        }
                    ],
                    "flags": 16,
                    "start": 55,
                    "end": 62
                },
                "flags": 16,
                "start": 53,
                "end": 64
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 64,
                    "end": 70
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 72,
                                    "end": 76
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
                                                "start": 76,
                                                "end": 78
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 76,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 33554448,
                                    "start": 76,
                                    "end": 78
                                },
                                "flags": 33554448,
                                "start": 72,
                                "end": 79
                            }
                        ],
                        "flags": 16,
                        "start": 72,
                        "end": 79
                    },
                    "flags": 16,
                    "start": 70,
                    "end": 81
                },
                "flags": 16,
                "start": 64,
                "end": 81
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 48,
            "end": 81
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 1,
                "start": 81,
                "end": 86
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 88,
                                "end": 92
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
                                            "start": 92,
                                            "end": 94
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 92,
                                        "end": 94
                                    }
                                ],
                                "flags": 33554448,
                                "start": 92,
                                "end": 94
                            },
                            "flags": 33554448,
                            "start": 88,
                            "end": 95
                        }
                    ],
                    "flags": 16,
                    "start": 88,
                    "end": 95
                },
                "flags": 16,
                "start": 86,
                "end": 97
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 97,
                    "end": 103
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 105,
                                    "end": 109
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
                                                "start": 109,
                                                "end": 111
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 109,
                                            "end": 111
                                        }
                                    ],
                                    "flags": 33554448,
                                    "start": 109,
                                    "end": 111
                                },
                                "flags": 33554448,
                                "start": 105,
                                "end": 112
                            }
                        ],
                        "flags": 16,
                        "start": 105,
                        "end": 112
                    },
                    "flags": 16,
                    "start": 103,
                    "end": 114
                },
                "flags": 16,
                "start": 97,
                "end": 114
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 0,
                "start": 114,
                "end": 122
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 124,
                                "end": 128
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
                                            "start": 128,
                                            "end": 130
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 128,
                                        "end": 130
                                    }
                                ],
                                "flags": 33554448,
                                "start": 128,
                                "end": 130
                            },
                            "flags": 33554448,
                            "start": 124,
                            "end": 131
                        }
                    ],
                    "flags": 16,
                    "start": 124,
                    "end": 131
                },
                "flags": 16,
                "start": 122,
                "end": 133
            },
            "flags": 16,
            "start": 81,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 133,
                "end": 147
            },
            "flags": 16,
            "start": 133,
            "end": 148
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 148,
                "end": 152
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 154,
                    "end": 154
                },
                "flags": 16,
                "start": 152,
                "end": 156
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 156,
                    "end": 162
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 164,
                        "end": 164
                    },
                    "flags": 16,
                    "start": 162,
                    "end": 166
                },
                "flags": 16,
                "start": 156,
                "end": 166
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 148,
            "end": 166
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 1,
                "start": 166,
                "end": 171
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 173,
                                "end": 177
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 179,
                                    "end": 179
                                },
                                "flags": 16,
                                "start": 177,
                                "end": 181
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 0,
                                    "start": 181,
                                    "end": 187
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 189,
                                        "end": 189
                                    },
                                    "flags": 16,
                                    "start": 187,
                                    "end": 191
                                },
                                "flags": 16,
                                "start": 181,
                                "end": 191
                            },
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 0,
                                "start": 191,
                                "end": 199
                            },
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 201,
                                    "end": 201
                                },
                                "flags": 16,
                                "start": 199,
                                "end": 203
                            },
                            "flags": 16,
                            "start": 173,
                            "end": 203
                        }
                    ],
                    "flags": 16,
                    "start": 173,
                    "end": 203
                },
                "flags": 16,
                "start": 171,
                "end": 205
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 205,
                    "end": 211
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 213,
                    "end": 214
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 217,
                        "end": 217
                    },
                    "flags": 16,
                    "start": 215,
                    "end": 219
                },
                "flags": 16,
                "start": 205,
                "end": 219
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 166,
            "end": 219
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 1,
                "start": 219,
                "end": 224
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 226,
                                "end": 230
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
                                            "start": 230,
                                            "end": 232
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 230,
                                        "end": 232
                                    }
                                ],
                                "flags": 33554448,
                                "start": 230,
                                "end": 232
                            },
                            "flags": 33554448,
                            "start": 226,
                            "end": 233
                        }
                    ],
                    "flags": 16,
                    "start": 226,
                    "end": 233
                },
                "flags": 16,
                "start": 224,
                "end": 235
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 235,
                    "end": 241
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 243,
                                    "end": 247
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
                                                "start": 247,
                                                "end": 249
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 247,
                                            "end": 249
                                        }
                                    ],
                                    "flags": 33554448,
                                    "start": 247,
                                    "end": 249
                                },
                                "flags": 33554448,
                                "start": 243,
                                "end": 250
                            }
                        ],
                        "flags": 16,
                        "start": 243,
                        "end": 250
                    },
                    "flags": 16,
                    "start": 241,
                    "end": 252
                },
                "flags": 16,
                "start": 235,
                "end": 252
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 219,
            "end": 252
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 1,
                "start": 252,
                "end": 257
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 259,
                    "end": 259
                },
                "flags": 16,
                "start": 257,
                "end": 260
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 260,
                    "end": 266
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 222,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 269,
                                    "end": 270
                                },
                                "right": null,
                                "flags": 32,
                                "start": 269,
                                "end": 270
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 269,
                        "end": 270
                    },
                    "flags": 32,
                    "start": 268,
                    "end": 271
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 274,
                                    "end": 278
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 280,
                                                    "end": 284
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
                                                                "start": 284,
                                                                "end": 286
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 284,
                                                            "end": 286
                                                        }
                                                    ],
                                                    "flags": 33554448,
                                                    "start": 284,
                                                    "end": 286
                                                },
                                                "flags": 33554448,
                                                "start": 280,
                                                "end": 287
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 280,
                                        "end": 287
                                    },
                                    "flags": 16,
                                    "start": 278,
                                    "end": 289
                                },
                                "catchClause": {
                                    "kind": 173,
                                    "catchKeyword": {
                                        "kind": 4202575,
                                        "flags": 0,
                                        "start": 289,
                                        "end": 295
                                    },
                                    "catchParameter": null,
                                    "block": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 297,
                                                        "end": 301
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
                                                                    "start": 301,
                                                                    "end": 303
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 301,
                                                                "end": 303
                                                            }
                                                        ],
                                                        "flags": 33554448,
                                                        "start": 301,
                                                        "end": 303
                                                    },
                                                    "flags": 33554448,
                                                    "start": 297,
                                                    "end": 304
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 297,
                                            "end": 304
                                        },
                                        "flags": 16,
                                        "start": 295,
                                        "end": 306
                                    },
                                    "flags": 16,
                                    "start": 289,
                                    "end": 306
                                },
                                "finallyKeyword": {
                                    "kind": 37757016,
                                    "flags": 0,
                                    "start": 306,
                                    "end": 314
                                },
                                "finallyBlock": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 316,
                                                    "end": 320
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
                                                                "start": 320,
                                                                "end": 322
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 320,
                                                            "end": 322
                                                        }
                                                    ],
                                                    "flags": 33554448,
                                                    "start": 320,
                                                    "end": 322
                                                },
                                                "flags": 33554448,
                                                "start": 316,
                                                "end": 323
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 316,
                                        "end": 323
                                    },
                                    "flags": 16,
                                    "start": 314,
                                    "end": 325
                                },
                                "flags": 16,
                                "start": 274,
                                "end": 325
                            }
                        ],
                        "flags": 16,
                        "start": 274,
                        "end": 325
                    },
                    "flags": 16,
                    "start": 272,
                    "end": 327
                },
                "flags": 16,
                "start": 260,
                "end": 327
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 252,
            "end": 327
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 327,
                "end": 337
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 337,
                "end": 339
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 339,
                "end": 341
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 343,
                                "end": 347
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 349,
                                                "end": 353
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
                                                            "start": 353,
                                                            "end": 355
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 353,
                                                        "end": 355
                                                    }
                                                ],
                                                "flags": 33554448,
                                                "start": 353,
                                                "end": 355
                                            },
                                            "flags": 33554448,
                                            "start": 349,
                                            "end": 356
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 349,
                                    "end": 356
                                },
                                "flags": 16,
                                "start": 347,
                                "end": 358
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 0,
                                    "start": 358,
                                    "end": 364
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 366,
                                                    "end": 370
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
                                                                "start": 370,
                                                                "end": 372
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 370,
                                                            "end": 372
                                                        }
                                                    ],
                                                    "flags": 33554448,
                                                    "start": 370,
                                                    "end": 372
                                                },
                                                "flags": 33554448,
                                                "start": 366,
                                                "end": 373
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 366,
                                        "end": 373
                                    },
                                    "flags": 16,
                                    "start": 364,
                                    "end": 375
                                },
                                "flags": 16,
                                "start": 358,
                                "end": 375
                            },
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 0,
                                "start": 375,
                                "end": 383
                            },
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 385,
                                                "end": 389
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
                                                            "start": 389,
                                                            "end": 391
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 389,
                                                        "end": 391
                                                    }
                                                ],
                                                "flags": 33554448,
                                                "start": 389,
                                                "end": 391
                                            },
                                            "flags": 33554448,
                                            "start": 385,
                                            "end": 392
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 385,
                                    "end": 392
                                },
                                "flags": 16,
                                "start": 383,
                                "end": 394
                            },
                            "flags": 16,
                            "start": 343,
                            "end": 394
                        }
                    ],
                    "flags": 32,
                    "start": 343,
                    "end": 394
                },
                "flags": 32,
                "start": 341,
                "end": 396
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 327,
            "end": 396
        }
    ],
    "isModule": false,
    "source": "try { } catch { }\n\ntry { } catch { } finally { }\n\ntry { let e; } catch { let e; }\n\ntry { let e; } catch { let e; } finally { let e; }\n\n\"use strict\"; try { } catch { }\n\ntry { try { } catch { } finally { } } catch (e) { }\n\ntry { let e; } catch { let e; }\n\ntry {} catch ({e}) { try { let e; } catch { let e; } finally { let e; } }\n\nfunction f() { try { let e; } catch { let e; } finally { let e; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 396
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

