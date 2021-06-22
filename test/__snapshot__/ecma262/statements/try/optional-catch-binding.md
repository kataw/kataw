# Kataw parser test case

## Input

`````js
try {} catch {}

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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 16,
                    "start": 12,
                    "end": 15
                },
                "flags": 80,
                "start": 6,
                "end": 15
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 15,
                "end": 20
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "start": 20,
                "end": 24
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 24,
                    "end": 30
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 16,
                    "start": 30,
                    "end": 34
                },
                "flags": 80,
                "start": 24,
                "end": 34
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 34,
                "end": 42
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 44,
                    "end": 44
                },
                "flags": 16,
                "start": 42,
                "end": 46
            },
            "flags": 16,
            "start": 15,
            "end": 46
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 46,
                "end": 51
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 53,
                                "end": 57
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
                                            "start": 57,
                                            "end": 59
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 57,
                                        "end": 59
                                    }
                                ],
                                "flags": 16,
                                "start": 57,
                                "end": 59
                            },
                            "flags": 33554448,
                            "start": 53,
                            "end": 60
                        }
                    ],
                    "flags": 16,
                    "start": 53,
                    "end": 60
                },
                "flags": 16,
                "start": 51,
                "end": 62
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 62,
                    "end": 68
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 70,
                                    "end": 74
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
                                                "start": 74,
                                                "end": 76
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 74,
                                            "end": 76
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 74,
                                    "end": 76
                                },
                                "flags": 33554448,
                                "start": 70,
                                "end": 77
                            }
                        ],
                        "flags": 16,
                        "start": 70,
                        "end": 77
                    },
                    "flags": 16,
                    "start": 68,
                    "end": 79
                },
                "flags": 80,
                "start": 62,
                "end": 79
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 46,
            "end": 79
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 79,
                "end": 84
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 86,
                                "end": 90
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
                                            "start": 90,
                                            "end": 92
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 90,
                                        "end": 92
                                    }
                                ],
                                "flags": 16,
                                "start": 90,
                                "end": 92
                            },
                            "flags": 33554448,
                            "start": 86,
                            "end": 93
                        }
                    ],
                    "flags": 16,
                    "start": 86,
                    "end": 93
                },
                "flags": 16,
                "start": 84,
                "end": 95
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 95,
                    "end": 101
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 103,
                                    "end": 107
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
                                                "start": 107,
                                                "end": 109
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 107,
                                            "end": 109
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 107,
                                    "end": 109
                                },
                                "flags": 33554448,
                                "start": 103,
                                "end": 110
                            }
                        ],
                        "flags": 16,
                        "start": 103,
                        "end": 110
                    },
                    "flags": 16,
                    "start": 101,
                    "end": 112
                },
                "flags": 80,
                "start": 95,
                "end": 112
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 112,
                "end": 120
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 122,
                                "end": 126
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
                                            "start": 126,
                                            "end": 128
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 126,
                                        "end": 128
                                    }
                                ],
                                "flags": 16,
                                "start": 126,
                                "end": 128
                            },
                            "flags": 33554448,
                            "start": 122,
                            "end": 129
                        }
                    ],
                    "flags": 16,
                    "start": 122,
                    "end": 129
                },
                "flags": 16,
                "start": 120,
                "end": 131
            },
            "flags": 16,
            "start": 79,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 131,
                "end": 145
            },
            "flags": 16,
            "start": 131,
            "end": 146
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 146,
                "end": 150
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 152,
                    "end": 152
                },
                "flags": 16,
                "start": 150,
                "end": 154
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 154,
                    "end": 160
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 162,
                        "end": 162
                    },
                    "flags": 16,
                    "start": 160,
                    "end": 164
                },
                "flags": 80,
                "start": 154,
                "end": 164
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 146,
            "end": 164
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 164,
                "end": 169
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 80,
                                "start": 171,
                                "end": 175
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 177,
                                    "end": 177
                                },
                                "flags": 16,
                                "start": 175,
                                "end": 179
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 179,
                                    "end": 185
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 187,
                                        "end": 187
                                    },
                                    "flags": 16,
                                    "start": 185,
                                    "end": 189
                                },
                                "flags": 80,
                                "start": 179,
                                "end": 189
                            },
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 64,
                                "start": 189,
                                "end": 197
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 199,
                                    "end": 199
                                },
                                "flags": 16,
                                "start": 197,
                                "end": 201
                            },
                            "flags": 16,
                            "start": 171,
                            "end": 201
                        }
                    ],
                    "flags": 16,
                    "start": 171,
                    "end": 201
                },
                "flags": 16,
                "start": 169,
                "end": 203
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 203,
                    "end": 209
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 211,
                    "end": 212
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 215,
                        "end": 215
                    },
                    "flags": 16,
                    "start": 213,
                    "end": 217
                },
                "flags": 80,
                "start": 203,
                "end": 217
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 164,
            "end": 217
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 217,
                "end": 222
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 224,
                                "end": 228
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
                                            "start": 228,
                                            "end": 230
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 228,
                                        "end": 230
                                    }
                                ],
                                "flags": 16,
                                "start": 228,
                                "end": 230
                            },
                            "flags": 33554448,
                            "start": 224,
                            "end": 231
                        }
                    ],
                    "flags": 16,
                    "start": 224,
                    "end": 231
                },
                "flags": 16,
                "start": 222,
                "end": 233
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 233,
                    "end": 239
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 241,
                                    "end": 245
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
                                                "start": 245,
                                                "end": 247
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 245,
                                            "end": 247
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 245,
                                    "end": 247
                                },
                                "flags": 33554448,
                                "start": 241,
                                "end": 248
                            }
                        ],
                        "flags": 16,
                        "start": 241,
                        "end": 248
                    },
                    "flags": 16,
                    "start": 239,
                    "end": 250
                },
                "flags": 80,
                "start": 233,
                "end": 250
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 217,
            "end": 250
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 250,
                "end": 255
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 257,
                    "end": 257
                },
                "flags": 16,
                "start": 255,
                "end": 258
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 258,
                    "end": 264
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 267,
                                "end": 268
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 267,
                        "end": 268
                    },
                    "flags": 32,
                    "start": 266,
                    "end": 269
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 80,
                                    "start": 272,
                                    "end": 276
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 278,
                                                    "end": 282
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
                                                                "start": 282,
                                                                "end": 284
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 282,
                                                            "end": 284
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 282,
                                                    "end": 284
                                                },
                                                "flags": 33554448,
                                                "start": 278,
                                                "end": 285
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 278,
                                        "end": 285
                                    },
                                    "flags": 16,
                                    "start": 276,
                                    "end": 287
                                },
                                "catchClause": {
                                    "kind": 173,
                                    "catchKeyword": {
                                        "kind": 4202575,
                                        "flags": 80,
                                        "start": 287,
                                        "end": 293
                                    },
                                    "catchParameter": null,
                                    "block": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 295,
                                                        "end": 299
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
                                                                    "start": 299,
                                                                    "end": 301
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 299,
                                                                "end": 301
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 299,
                                                        "end": 301
                                                    },
                                                    "flags": 33554448,
                                                    "start": 295,
                                                    "end": 302
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 295,
                                            "end": 302
                                        },
                                        "flags": 16,
                                        "start": 293,
                                        "end": 304
                                    },
                                    "flags": 80,
                                    "start": 287,
                                    "end": 304
                                },
                                "finallyKeyword": {
                                    "kind": 37757016,
                                    "flags": 64,
                                    "start": 304,
                                    "end": 312
                                },
                                "finallyBlock": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 314,
                                                    "end": 318
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
                                                                "start": 318,
                                                                "end": 320
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 318,
                                                            "end": 320
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 318,
                                                    "end": 320
                                                },
                                                "flags": 33554448,
                                                "start": 314,
                                                "end": 321
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 314,
                                        "end": 321
                                    },
                                    "flags": 16,
                                    "start": 312,
                                    "end": 323
                                },
                                "flags": 16,
                                "start": 272,
                                "end": 323
                            }
                        ],
                        "flags": 16,
                        "start": 272,
                        "end": 323
                    },
                    "flags": 16,
                    "start": 270,
                    "end": 325
                },
                "flags": 80,
                "start": 258,
                "end": 325
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 250,
            "end": 325
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 325,
                "end": 335
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 335,
                "end": 337
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 337,
                "end": 339
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
                                "flags": 80,
                                "start": 341,
                                "end": 345
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 347,
                                                "end": 351
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
                                                            "start": 351,
                                                            "end": 353
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 351,
                                                        "end": 353
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 351,
                                                "end": 353
                                            },
                                            "flags": 33554448,
                                            "start": 347,
                                            "end": 354
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 347,
                                    "end": 354
                                },
                                "flags": 16,
                                "start": 345,
                                "end": 356
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 356,
                                    "end": 362
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 364,
                                                    "end": 368
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
                                                                "start": 368,
                                                                "end": 370
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 368,
                                                            "end": 370
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 368,
                                                    "end": 370
                                                },
                                                "flags": 33554448,
                                                "start": 364,
                                                "end": 371
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 364,
                                        "end": 371
                                    },
                                    "flags": 16,
                                    "start": 362,
                                    "end": 373
                                },
                                "flags": 80,
                                "start": 356,
                                "end": 373
                            },
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 64,
                                "start": 373,
                                "end": 381
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 383,
                                                "end": 387
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
                                                            "start": 387,
                                                            "end": 389
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 387,
                                                        "end": 389
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 387,
                                                "end": 389
                                            },
                                            "flags": 33554448,
                                            "start": 383,
                                            "end": 390
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 383,
                                    "end": 390
                                },
                                "flags": 16,
                                "start": 381,
                                "end": 392
                            },
                            "flags": 16,
                            "start": 341,
                            "end": 392
                        }
                    ],
                    "flags": 32,
                    "start": 341,
                    "end": 392
                },
                "flags": 32,
                "start": 339,
                "end": 394
            },
            "returnType": null,
            "flags": 16,
            "start": 325,
            "end": 394
        }
    ],
    "isModule": false,
    "source": "try {} catch {}\n\ntry { } catch { } finally { }\n\ntry { let e; } catch { let e; }\n\ntry { let e; } catch { let e; } finally { let e; }\n\n\"use strict\"; try { } catch { }\n\ntry { try { } catch { } finally { } } catch (e) { }\n\ntry { let e; } catch { let e; }\n\ntry {} catch ({e}) { try { let e; } catch { let e; } finally { let e; } }\n\nfunction f() { try { let e; } catch { let e; } finally { let e; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 394
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 107, end: 109
✖ Duplicate identifier - start: 245, end: 247
✖ A block-scoped variable cannot shadow a catch clause binding - start: 299, end: 301

```

