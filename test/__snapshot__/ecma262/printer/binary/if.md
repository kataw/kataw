# Kataw parser test case

## Input

`````js
if (this.hasPlugin("dynamicImports") && this.lookahead().type) {}

if (this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft) {}

if (this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right) {}

if (VeryVeryVeryVeryVeryVeryVeryVeryLong === VeryVeryVeryVeryVeryVeryVeryVeryLong) {
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
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "hasPlugin",
                            "rawText": "hasPlugin",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 18
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 4,
                        "end": 18
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392131,
                                "text": "dynamicImports",
                                "rawText": "\"dynamicImports\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 35
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 4,
                    "end": 36
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 39
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 4276321,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 44
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "lookahead",
                                "rawText": "lookahead",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 54
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 39,
                            "end": 54
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 55
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 39,
                        "end": 56
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "type",
                        "rawText": "type",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 61
                    },
                    "flags": 268435488,
                    "transformFlags": 2,
                    "start": 39,
                    "end": 61
                },
                "flags": 268435488,
                "transformFlags": 1024,
                "start": 4,
                "end": 61
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 64
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 62,
                "end": 65
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 65,
                "end": 69
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 75
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "hasPlugin",
                            "rawText": "hasPlugin",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 85
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 71,
                        "end": 85
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392131,
                                "text": "dynamicImports",
                                "rawText": "\"dynamicImports\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 102
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 102
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 71,
                    "end": 103
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 106
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 106,
                                    "end": 111
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "lookahead",
                                    "rawText": "lookahead",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 121
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 106,
                                "end": 121
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 122
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 106,
                            "end": 123
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "type",
                            "rawText": "type",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 128
                        },
                        "flags": 268435488,
                        "transformFlags": 2,
                        "start": 106,
                        "end": 128
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 128,
                        "end": 132
                    },
                    "right": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "tt",
                            "rawText": "tt",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 135
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "parenLeft",
                            "rawText": "parenLeft",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 145
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 132,
                        "end": 145
                    },
                    "flags": 268435488,
                    "transformFlags": 1024,
                    "start": 128,
                    "end": 145
                },
                "flags": 268435488,
                "transformFlags": 1024,
                "start": 71,
                "end": 145
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 148,
                    "end": 148
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 146,
                "end": 149
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 65,
            "end": 149
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 149,
                "end": 153
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 159
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "hasPlugin",
                            "rawText": "hasPlugin",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 160,
                            "end": 169
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 155,
                        "end": 169
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392131,
                                "text": "dynamicImports",
                                "rawText": "\"dynamicImports\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 186
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 170,
                        "end": 186
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 155,
                    "end": 187
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 190
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 190,
                                    "end": 195
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "lookahead",
                                    "rawText": "lookahead",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 196,
                                    "end": 205
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 190,
                                "end": 205
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 206,
                                "end": 206
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 190,
                            "end": 207
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "type",
                            "rawText": "type",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 208,
                            "end": 212
                        },
                        "flags": 268435488,
                        "transformFlags": 2,
                        "start": 190,
                        "end": 212
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 212,
                        "end": 216
                    },
                    "right": {
                        "kind": 129,
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "tt",
                                "rawText": "tt",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 219
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "parenLeft",
                                "rawText": "parenLeft",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 229
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 216,
                            "end": 229
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "right",
                            "rawText": "right",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 230,
                            "end": 235
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 216,
                        "end": 235
                    },
                    "flags": 268435488,
                    "transformFlags": 1024,
                    "start": 212,
                    "end": 235
                },
                "flags": 268435488,
                "transformFlags": 1024,
                "start": 155,
                "end": 235
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 238,
                    "end": 238
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 236,
                "end": 239
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 149,
            "end": 239
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 239,
                "end": 243
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "VeryVeryVeryVeryVeryVeryVeryVeryLong",
                    "rawText": "VeryVeryVeryVeryVeryVeryVeryVeryLong",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 245,
                    "end": 281
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 281,
                    "end": 285
                },
                "right": {
                    "kind": 134299649,
                    "text": "VeryVeryVeryVeryVeryVeryVeryVeryLong",
                    "rawText": "VeryVeryVeryVeryVeryVeryVeryVeryLong",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 285,
                    "end": 322
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 245,
                "end": 322
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 325,
                    "end": 325
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 323,
                "end": 327
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 239,
            "end": 327
        }
    ],
    "isModule": false,
    "source": "if (this.hasPlugin(\"dynamicImports\") && this.lookahead().type) {}\n\nif (this.hasPlugin(\"dynamicImports\") && this.lookahead().type === tt.parenLeft) {}\n\nif (this.hasPlugin(\"dynamicImports\") && this.lookahead().type === tt.parenLeft.right) {}\n\nif (VeryVeryVeryVeryVeryVeryVeryVeryLong === VeryVeryVeryVeryVeryVeryVeryVeryLong) {\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 328
}
```

### Printed

```javascript

if (this.hasPlugin("\"dynamicImports\"") && this.lookahead().type) {}
if (
  this.hasPlugin("\"dynamicImports\"") && this.lookahead().type === tt.parenLeft
)
  {}

if (
  this.hasPlugin("\"dynamicImports\"") &&
    this.lookahead().type === tt.parenLeft.right
)
  {}

if (
  VeryVeryVeryVeryVeryVeryVeryVeryLong === VeryVeryVeryVeryVeryVeryVeryVeryLong
)
  {}

```

### Diagnostics

```javascript
✔ No errors
```

