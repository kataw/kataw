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

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 97,
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
                    "flags": 64,
                    "start": 14,
                    "end": 21
                },
                "operand": {
                    "kind": 135,
                    "flags": 96,
                    "start": 21,
                    "end": 26
                },
                "flags": 32,
                "start": 14,
                "end": 26
            },
            "flags": 16,
            "start": 14,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 27,
                "end": 41
            },
            "flags": 16,
            "start": 27,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 42,
                    "end": 49
                },
                "operand": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 49,
                    "end": 51
                },
                "flags": 32,
                "start": 42,
                "end": 51
            },
            "flags": 16,
            "start": 42,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 52,
                "end": 66
            },
            "flags": 16,
            "start": 52,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 67,
                    "end": 74
                },
                "operand": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 74,
                        "end": 78
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 79,
                        "end": 79
                    },
                    "flags": 32,
                    "start": 74,
                    "end": 80
                },
                "flags": 32,
                "start": 67,
                "end": 80
            },
            "flags": 16,
            "start": 67,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 81,
                "end": 95
            },
            "flags": 16,
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
                        "flags": 64,
                        "start": 96,
                        "end": 103
                    },
                    "operand": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 103,
                        "end": 105
                    },
                    "flags": 32,
                    "start": 96,
                    "end": 105
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 105,
                    "end": 107
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 107,
                    "end": 109
                },
                "flags": 32,
                "start": 96,
                "end": 109
            },
            "flags": 16,
            "start": 96,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 110,
                "end": 124
            },
            "flags": 16,
            "start": 110,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 125,
                    "end": 132
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 132,
                        "end": 136
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 137,
                        "end": 140
                    },
                    "flags": 32,
                    "start": 132,
                    "end": 140
                },
                "flags": 32,
                "start": 125,
                "end": 140
            },
            "flags": 16,
            "start": 125,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 141,
                "end": 155
            },
            "flags": 16,
            "start": 141,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 156,
                    "end": 163
                },
                "operand": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 163,
                        "end": 167
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 168,
                        "end": 171
                    },
                    "flags": 32,
                    "start": 163,
                    "end": 172
                },
                "flags": 32,
                "start": 156,
                "end": 172
            },
            "flags": 16,
            "start": 156,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 173,
                "end": 187
            },
            "flags": 16,
            "start": 173,
            "end": 188
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 188,
                    "end": 195
                },
                "operand": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 64,
                        "start": 199,
                        "end": 201
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 195,
                        "end": 199
                    },
                    "flags": 32,
                    "start": 195,
                    "end": 201
                },
                "flags": 32,
                "start": 188,
                "end": 201
            },
            "flags": 16,
            "start": 188,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 202,
                "end": 216
            },
            "flags": 16,
            "start": 202,
            "end": 217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 217,
                    "end": 224
                },
                "operand": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 64,
                        "start": 224,
                        "end": 227
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 227,
                        "end": 230
                    },
                    "flags": 32,
                    "start": 224,
                    "end": 230
                },
                "flags": 32,
                "start": 217,
                "end": 230
            },
            "flags": 16,
            "start": 217,
            "end": 231
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 231,
                "end": 245
            },
            "flags": 16,
            "start": 231,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 246,
                    "end": 253
                },
                "operand": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 0,
                        "start": 253,
                        "end": 257
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 257,
                        "end": 261
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 262,
                        "end": 262
                    },
                    "flags": 32,
                    "start": 253,
                    "end": 263
                },
                "flags": 32,
                "start": 246,
                "end": 263
            },
            "flags": 16,
            "start": 246,
            "end": 264
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 264,
                "end": 278
            },
            "flags": 16,
            "start": 264,
            "end": 279
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 279,
                    "end": 286
                },
                "operand": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 0,
                        "start": 286,
                        "end": 290
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
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
                                "flags": 96,
                                "start": 295,
                                "end": 298
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 295,
                        "end": 298
                    },
                    "flags": 32,
                    "start": 286,
                    "end": 299
                },
                "flags": 32,
                "start": 279,
                "end": 299
            },
            "flags": 16,
            "start": 279,
            "end": 300
        }
    ],
    "isModule": false,
    "source": "\n\"use strict\"; delete this;\n\n\"use strict\"; delete 1;\n\n\"use strict\"; delete foo();\n\n\"use strict\"; delete 1 + 2;\n\n\"use strict\"; delete foo.bar;\n\n\"use strict\"; delete foo[bar];\n\n\"use strict\"; delete foo--;\n\n\"use strict\"; delete --foo;\n\n\"use strict\"; delete new foo();\n\n\"use strict\"; delete new foo(bar);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 301
}
```

### Printed

```javascript

deletethis;
"\"use strict\"";
delete1;
"\"use strict\"";
deletefoo();
"\"use strict\"";
delete1 + 2;
"\"use strict\"";
deletefoo.bar;
"\"use strict\"";
deletefoobar;
"\"use strict\"";
deletefoo--;
"\"use strict\"";
delete--foo;
"\"use strict\"";
deletenew  foo();
"\"use strict\"";
deletenew  foo(bar);
```

### Diagnostics

```javascript
✔ No errors
```

