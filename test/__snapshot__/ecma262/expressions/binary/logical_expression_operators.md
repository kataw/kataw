# Kataw parser test case

## Input

`````js
// Same operators do not require parens
(foo && bar) && baz;
foo && (bar && baz);
foo && ((bar && baz) && qux);
foo && (bar && (baz && qux));
foo && (bar && ((baz && qux) && xyz));
foo && (bar && (baz && (qux && xyz)));

(foo || bar) || baz;
foo || (bar || baz);
foo || ((bar || baz) || qux);
foo || (bar || (baz || qux));
foo || (bar || ((baz || qux) || xyz));
foo || (bar || (baz || (qux || xyz)));

(foo ?? bar) ?? baz;
foo ?? (bar ?? baz);
foo ?? ((bar ?? baz) ?? qux);
foo ?? (bar ?? (baz ?? qux));
foo ?? (bar ?? ((baz ?? qux) ?? xyz));
foo ?? (bar ?? (baz ?? (qux ?? xyz)));

// Explicitly parenthesized && and || requires parens
(foo && bar) || baz;
(foo || bar) && baz;

foo && (bar || baz);
foo || (bar && baz);

// Implicitly parenthesized && and || requires parens
foo && bar || baz;
foo || bar && baz;
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 44
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 47
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 51
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 0,
                        "end": 51
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 52
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 55
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 59
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 64
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 67
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 72
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 75
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 79
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 67,
                        "end": 79
                    },
                    "flags": 67,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 80
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 60,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 60,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 85
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 88
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 94
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 97
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 97,
                                    "end": 101
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 90,
                                "end": 101
                            },
                            "flags": 90,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 102
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 105
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "qux",
                            "rawText": "qux",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 105,
                            "end": 109
                        },
                        "flags": 122,
                        "transformFlags": 5120,
                        "start": 90,
                        "end": 109
                    },
                    "flags": 88,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 110
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 81,
                "end": 110
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 81,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 115
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 118
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 123
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 126
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 128,
                                    "end": 131
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 134
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "qux",
                                    "rawText": "qux",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 138
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 126,
                                "end": 138
                            },
                            "flags": 126,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 139
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 118,
                        "end": 139
                    },
                    "flags": 118,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 140
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 111,
                "end": 140
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 111,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 145
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 148
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 150,
                            "end": 153
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 156
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 159,
                                            "end": 162
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 165
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "qux",
                                            "rawText": "qux",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 165,
                                            "end": 169
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 158,
                                        "end": 169
                                    },
                                    "flags": 158,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 170
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 170,
                                    "end": 173
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "xyz",
                                    "rawText": "xyz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 173,
                                    "end": 177
                                },
                                "flags": 190,
                                "transformFlags": 5120,
                                "start": 158,
                                "end": 177
                            },
                            "flags": 156,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 178
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 148,
                        "end": 178
                    },
                    "flags": 148,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 179
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 141,
                "end": 179
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 141,
            "end": 180
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 180,
                    "end": 184
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 184,
                    "end": 187
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 192
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 192,
                            "end": 195
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 197,
                                    "end": 200
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 200,
                                    "end": 203
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "qux",
                                            "rawText": "qux",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 205,
                                            "end": 208
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 208,
                                            "end": 211
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "xyz",
                                            "rawText": "xyz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 211,
                                            "end": 215
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 203,
                                        "end": 215
                                    },
                                    "flags": 203,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 216
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 195,
                                "end": 216
                            },
                            "flags": 195,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 217
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 187,
                        "end": 217
                    },
                    "flags": 187,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 218
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 180,
                "end": 218
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 180,
            "end": 219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 222,
                            "end": 225
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 228
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 228,
                            "end": 232
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 219,
                        "end": 232
                    },
                    "flags": 219,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 233
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 233,
                    "end": 236
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 240
                },
                "flags": 251,
                "transformFlags": 5120,
                "start": 219,
                "end": 240
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 219,
            "end": 241
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 241,
                    "end": 245
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 245,
                    "end": 248
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 250,
                            "end": 253
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 253,
                            "end": 256
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 256,
                            "end": 260
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 248,
                        "end": 260
                    },
                    "flags": 248,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 261
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 241,
                "end": 261
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 241,
            "end": 262
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 262,
                    "end": 266
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 266,
                    "end": 269
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 272,
                                    "end": 275
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 275,
                                    "end": 278
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 278,
                                    "end": 282
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 271,
                                "end": 282
                            },
                            "flags": 271,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 283
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 283,
                            "end": 286
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "qux",
                            "rawText": "qux",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 286,
                            "end": 290
                        },
                        "flags": 303,
                        "transformFlags": 5120,
                        "start": 271,
                        "end": 290
                    },
                    "flags": 269,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 291
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 262,
                "end": 291
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 262,
            "end": 292
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 296
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 296,
                    "end": 299
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 301,
                            "end": 304
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 304,
                            "end": 307
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 309,
                                    "end": 312
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 312,
                                    "end": 315
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "qux",
                                    "rawText": "qux",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 315,
                                    "end": 319
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 307,
                                "end": 319
                            },
                            "flags": 307,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 320
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 299,
                        "end": 320
                    },
                    "flags": 299,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 321
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 292,
                "end": 321
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 292,
            "end": 322
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 322,
                    "end": 326
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 326,
                    "end": 329
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 331,
                            "end": 334
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 334,
                            "end": 337
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 340,
                                            "end": 343
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 343,
                                            "end": 346
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "qux",
                                            "rawText": "qux",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 346,
                                            "end": 350
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 339,
                                        "end": 350
                                    },
                                    "flags": 339,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 351
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 351,
                                    "end": 354
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "xyz",
                                    "rawText": "xyz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 354,
                                    "end": 358
                                },
                                "flags": 371,
                                "transformFlags": 5120,
                                "start": 339,
                                "end": 358
                            },
                            "flags": 337,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 359
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 329,
                        "end": 359
                    },
                    "flags": 329,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 360
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 322,
                "end": 360
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 322,
            "end": 361
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 361,
                    "end": 365
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 368
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 370,
                            "end": 373
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 376
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 378,
                                    "end": 381
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 381,
                                    "end": 384
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "qux",
                                            "rawText": "qux",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 386,
                                            "end": 389
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 389,
                                            "end": 392
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "xyz",
                                            "rawText": "xyz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 392,
                                            "end": 396
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 384,
                                        "end": 396
                                    },
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 397
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 376,
                                "end": 397
                            },
                            "flags": 376,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 398
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 368,
                        "end": 398
                    },
                    "flags": 368,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 399
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 361,
                "end": 399
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 361,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 403,
                            "end": 406
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 409
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 409,
                            "end": 413
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 400,
                        "end": 413
                    },
                    "flags": 400,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 414
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 414,
                    "end": 417
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 417,
                    "end": 421
                },
                "flags": 432,
                "transformFlags": 5120,
                "start": 400,
                "end": 421
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 400,
            "end": 422
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 422,
                    "end": 426
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 426,
                    "end": 429
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 431,
                            "end": 434
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 434,
                            "end": 437
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 437,
                            "end": 441
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 429,
                        "end": 441
                    },
                    "flags": 429,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 442
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 422,
                "end": 442
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 422,
            "end": 443
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 443,
                    "end": 447
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 447,
                    "end": 450
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 453,
                                    "end": 456
                                },
                                "operatorToken": {
                                    "kind": 33047,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 456,
                                    "end": 459
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 459,
                                    "end": 463
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 452,
                                "end": 463
                            },
                            "flags": 452,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 464
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 464,
                            "end": 467
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "qux",
                            "rawText": "qux",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 467,
                            "end": 471
                        },
                        "flags": 484,
                        "transformFlags": 5120,
                        "start": 452,
                        "end": 471
                    },
                    "flags": 450,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 472
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 443,
                "end": 472
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 443,
            "end": 473
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 473,
                    "end": 477
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 477,
                    "end": 480
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 482,
                            "end": 485
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 485,
                            "end": 488
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 490,
                                    "end": 493
                                },
                                "operatorToken": {
                                    "kind": 33047,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 493,
                                    "end": 496
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "qux",
                                    "rawText": "qux",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 496,
                                    "end": 500
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 488,
                                "end": 500
                            },
                            "flags": 488,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 501
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 480,
                        "end": 501
                    },
                    "flags": 480,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 502
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 473,
                "end": 502
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 473,
            "end": 503
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 503,
                    "end": 507
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 507,
                    "end": 510
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 515
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 515,
                            "end": 518
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 521,
                                            "end": 524
                                        },
                                        "operatorToken": {
                                            "kind": 33047,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 524,
                                            "end": 527
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "qux",
                                            "rawText": "qux",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 527,
                                            "end": 531
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 520,
                                        "end": 531
                                    },
                                    "flags": 520,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 532
                                },
                                "operatorToken": {
                                    "kind": 33047,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 532,
                                    "end": 535
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "xyz",
                                    "rawText": "xyz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 535,
                                    "end": 539
                                },
                                "flags": 552,
                                "transformFlags": 5120,
                                "start": 520,
                                "end": 539
                            },
                            "flags": 518,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 540
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 510,
                        "end": 540
                    },
                    "flags": 510,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 541
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 503,
                "end": 541
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 503,
            "end": 542
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 542,
                    "end": 546
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 546,
                    "end": 549
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 551,
                            "end": 554
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 554,
                            "end": 557
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 559,
                                    "end": 562
                                },
                                "operatorToken": {
                                    "kind": 33047,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 562,
                                    "end": 565
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "qux",
                                            "rawText": "qux",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 567,
                                            "end": 570
                                        },
                                        "operatorToken": {
                                            "kind": 33047,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 570,
                                            "end": 573
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "xyz",
                                            "rawText": "xyz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 573,
                                            "end": 577
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 565,
                                        "end": 577
                                    },
                                    "flags": 565,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 578
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 557,
                                "end": 578
                            },
                            "flags": 557,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 579
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 549,
                        "end": 579
                    },
                    "flags": 549,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 580
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 542,
                "end": 580
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 542,
            "end": 581
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 638,
                            "end": 641
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 641,
                            "end": 644
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 644,
                            "end": 648
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 581,
                        "end": 648
                    },
                    "flags": 581,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 649
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 649,
                    "end": 652
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 652,
                    "end": 656
                },
                "flags": 613,
                "transformFlags": 5120,
                "start": 581,
                "end": 656
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 581,
            "end": 657
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 659,
                            "end": 662
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 662,
                            "end": 665
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 665,
                            "end": 669
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 657,
                        "end": 669
                    },
                    "flags": 657,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 670
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 670,
                    "end": 673
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 673,
                    "end": 677
                },
                "flags": 689,
                "transformFlags": 5120,
                "start": 657,
                "end": 677
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 657,
            "end": 678
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 678,
                    "end": 683
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 683,
                    "end": 686
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 688,
                            "end": 691
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 691,
                            "end": 694
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 694,
                            "end": 698
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 686,
                        "end": 698
                    },
                    "flags": 686,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 699
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 678,
                "end": 699
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 678,
            "end": 700
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 700,
                    "end": 704
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 704,
                    "end": 707
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 709,
                            "end": 712
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 712,
                            "end": 715
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 715,
                            "end": 719
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 707,
                        "end": 719
                    },
                    "flags": 707,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 720
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 700,
                "end": 720
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 700,
            "end": 721
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 721,
                        "end": 780
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 780,
                        "end": 783
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 783,
                        "end": 787
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 721,
                    "end": 787
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 787,
                    "end": 790
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 790,
                    "end": 794
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 721,
                "end": 794
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 721,
            "end": 795
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 795,
                    "end": 799
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 799,
                    "end": 802
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 802,
                        "end": 806
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 806,
                        "end": 809
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 809,
                        "end": 813
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 806,
                    "end": 813
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 795,
                "end": 813
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 795,
            "end": 814
        }
    ],
    "isModule": false,
    "source": "// Same operators do not require parens\n(foo && bar) && baz;\nfoo && (bar && baz);\nfoo && ((bar && baz) && qux);\nfoo && (bar && (baz && qux));\nfoo && (bar && ((baz && qux) && xyz));\nfoo && (bar && (baz && (qux && xyz)));\n\n(foo || bar) || baz;\nfoo || (bar || baz);\nfoo || ((bar || baz) || qux);\nfoo || (bar || (baz || qux));\nfoo || (bar || ((baz || qux) || xyz));\nfoo || (bar || (baz || (qux || xyz)));\n\n(foo ?? bar) ?? baz;\nfoo ?? (bar ?? baz);\nfoo ?? ((bar ?? baz) ?? qux);\nfoo ?? (bar ?? (baz ?? qux));\nfoo ?? (bar ?? ((baz ?? qux) ?? xyz));\nfoo ?? (bar ?? (baz ?? (qux ?? xyz)));\n\n// Explicitly parenthesized && and || requires parens\n(foo && bar) || baz;\n(foo || bar) && baz;\n\nfoo && (bar || baz);\nfoo || (bar && baz);\n\n// Implicitly parenthesized && and || requires parens\nfoo && bar || baz;\nfoo || bar && baz;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 814
}
```

### Printed

```javascript
// Same operators do not require parens
(foo && bar) && baz;
foo && (bar && baz);

foo && ((bar && baz) && qux);

foo && (bar && (baz && qux));

foo && (bar && ((baz && qux) && xyz));

foo && (bar && (baz && (qux && xyz)));

(foo || bar) || baz;

foo || (bar || baz);

foo || ((bar || baz) || qux);

foo || (bar || (baz || qux));

foo || (bar || ((baz || qux) || xyz));

foo || (bar || (baz || (qux || xyz)));

(foo ?? bar) ?? baz;

foo ?? (bar ?? baz);

foo ?? ((bar ?? baz) ?? qux);

foo ?? (bar ?? (baz ?? qux));

foo ?? (bar ?? ((baz ?? qux) ?? xyz));

foo ?? (bar ?? (baz ?? (qux ?? xyz)));

// Explicitly parenthesized && and || requires parens
(foo && bar) || baz;

(foo || bar) && baz;

foo && (bar || baz);

foo || (bar && baz);

// Implicitly parenthesized && and || requires parens
foo && bar || baz;

foo || bar && baz;

```

### Diagnostics

```javascript
✔ No errors
```

