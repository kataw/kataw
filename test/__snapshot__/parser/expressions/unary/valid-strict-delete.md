# Kataw parser test case

## Input

`````js

"use strict"; delete this;

"use strict"; delete 1;

"use strict"; delete foo();

"use strict"; delete 1 + 2;

"use strict"; delete foo.bar;

"use strict"; delete foo[bar];

"use strict"; delete foo--;

"use strict"; delete --foo;

"use strict"; delete new foo();

"use strict"; delete new foo(bar);

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 769,
            "start": 0,
            "end": 13
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 14,
                    "end": 21
                },
                "expression": {
                    "kind": 135,
                    "flags": 768,
                    "start": 21,
                    "end": 26
                },
                "flags": 256,
                "start": 14,
                "end": 26
            },
            "flags": 128,
            "start": 14,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 27,
                "end": 41
            },
            "flags": 128,
            "start": 27,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 42,
                    "end": 49
                },
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 49,
                    "end": 51
                },
                "flags": 256,
                "start": 42,
                "end": 51
            },
            "flags": 128,
            "start": 42,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 52,
                "end": 66
            },
            "flags": 128,
            "start": 52,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 67,
                    "end": 74
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 74,
                        "end": 78
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 79,
                        "end": 79
                    },
                    "flags": 256,
                    "start": 74,
                    "end": 80
                },
                "flags": 256,
                "start": 67,
                "end": 80
            },
            "flags": 128,
            "start": 67,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 81,
                "end": 95
            },
            "flags": 128,
            "start": 81,
            "end": 96
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "flags": 768,
                        "start": 96,
                        "end": 103
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 103,
                        "end": 105
                    },
                    "flags": 256,
                    "start": 96,
                    "end": 105
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 105,
                    "end": 107
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 768,
                    "start": 107,
                    "end": 109
                },
                "flags": 256,
                "start": 96,
                "end": 109
            },
            "flags": 128,
            "start": 96,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 110,
                "end": 124
            },
            "flags": 128,
            "start": 110,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 125,
                    "end": 132
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 132,
                        "end": 136
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 137,
                        "end": 140
                    },
                    "flags": 256,
                    "start": 132,
                    "end": 140
                },
                "flags": 256,
                "start": 125,
                "end": 140
            },
            "flags": 128,
            "start": 125,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 141,
                "end": 155
            },
            "flags": 128,
            "start": 141,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 156,
                    "end": 163
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 163,
                        "end": 167
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 168,
                        "end": 171
                    },
                    "flags": 256,
                    "start": 163,
                    "end": 172
                },
                "flags": 256,
                "start": 156,
                "end": 172
            },
            "flags": 128,
            "start": 156,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 173,
                "end": 187
            },
            "flags": 128,
            "start": 173,
            "end": 188
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 188,
                    "end": 195
                },
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 768,
                        "start": 199,
                        "end": 201
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 195,
                        "end": 199
                    },
                    "flags": 256,
                    "start": 195,
                    "end": 201
                },
                "flags": 256,
                "start": 188,
                "end": 201
            },
            "flags": 128,
            "start": 188,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 202,
                "end": 216
            },
            "flags": 128,
            "start": 202,
            "end": 217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 217,
                    "end": 224
                },
                "expression": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 768,
                        "start": 224,
                        "end": 227
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 227,
                        "end": 230
                    },
                    "flags": 256,
                    "start": 224,
                    "end": 230
                },
                "flags": 256,
                "start": 217,
                "end": 230
            },
            "flags": 128,
            "start": 217,
            "end": 231
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 231,
                "end": 245
            },
            "flags": 128,
            "start": 231,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 246,
                    "end": 253
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 768,
                        "start": 253,
                        "end": 257
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 257,
                        "end": 261
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 262,
                        "end": 262
                    },
                    "flags": 256,
                    "start": 253,
                    "end": 263
                },
                "flags": 256,
                "start": 246,
                "end": 263
            },
            "flags": 128,
            "start": 246,
            "end": 264
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 264,
                "end": 278
            },
            "flags": 128,
            "start": 264,
            "end": 279
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 279,
                    "end": 286
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 768,
                        "start": 286,
                        "end": 290
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 290,
                        "end": 294
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 295,
                                "end": 298
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 295,
                        "end": 298
                    },
                    "flags": 256,
                    "start": 286,
                    "end": 299
                },
                "flags": 256,
                "start": 279,
                "end": 299
            },
            "flags": 128,
            "start": 279,
            "end": 300
        }
    ],
    "isModule": false,
    "text": "\n\"use strict\"; delete this;\n\n\"use strict\"; delete 1;\n\n\"use strict\"; delete foo();\n\n\"use strict\"; delete 1 + 2;\n\n\"use strict\"; delete foo.bar;\n\n\"use strict\"; delete foo[bar];\n\n\"use strict\"; delete foo--;\n\n\"use strict\"; delete --foo;\n\n\"use strict\"; delete new foo();\n\n\"use strict\"; delete new foo(bar);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 301
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

