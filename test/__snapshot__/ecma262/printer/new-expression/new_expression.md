# Kataw parser test case

## Input

`````js
new (memoize.Cache || MapCache)
new (typeof this == "function" ? this : Dict())
new (createObj()).prop(a());
new (x()``.y)();
new e[f().x].y();
new e[f()].y();
new (a().b)();
new (a().b().c)();
new (a``());

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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "memoize",
                                "rawText": "memoize",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 12
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Cache",
                                "rawText": "Cache",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 18
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 3,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 21
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "MapCache",
                            "rawText": "MapCache",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 30
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 3,
                        "end": 30
                    },
                    "flags": 3,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 31
                },
                "argumentList": null,
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 35
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477613,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 43
                                },
                                "operand": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 48
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 37,
                                "end": 48
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "flags": 96,
                                "transformFlags": 16,
                                "start": 48,
                                "end": 51
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "function",
                                "rawText": "\"function\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 62
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 37,
                            "end": 62
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 64
                        },
                        "consequent": {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 69
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 71
                        },
                        "alternate": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "Dict",
                                "rawText": "Dict",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 76
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 77
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 71,
                            "end": 78
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 78
                    },
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 79
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 31,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 31,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 83
                        },
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "createObj",
                                    "rawText": "createObj",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 94
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 95
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 83,
                                "end": 96
                            },
                            "flags": 83,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 97
                        },
                        "argumentList": null,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 97
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "prop",
                        "rawText": "prop",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 98,
                        "end": 102
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 79,
                    "end": 102
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 103,
                                "end": 104
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 105
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 103,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 106
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 79,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 79,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 112
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 115
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 116
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 112,
                                "end": 117
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 119
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 119
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 121
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 112,
                        "end": 121
                    },
                    "flags": 112,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 122
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 123
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 108,
                "end": 124
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 108,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 125,
                            "end": 129
                        },
                        "expression": {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 131
                            },
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 132,
                                        "end": 133
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 134,
                                        "end": 134
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 132,
                                    "end": 135
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 136,
                                    "end": 137
                                },
                                "flags": 268435488,
                                "transformFlags": 2,
                                "start": 132,
                                "end": 137
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 125,
                            "end": 138
                        },
                        "argumentList": null,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 125,
                        "end": 138
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 140
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 125,
                    "end": 140
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 141
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 125,
                "end": 142
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 125,
            "end": 143
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 143,
                            "end": 147
                        },
                        "expression": {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 147,
                                "end": 149
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 150,
                                    "end": 151
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 152,
                                    "end": 152
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 150,
                                "end": 153
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 143,
                            "end": 154
                        },
                        "argumentList": null,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 143,
                        "end": 154
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 156
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 143,
                    "end": 156
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 157,
                    "end": 157
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 143,
                "end": 158
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 143,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 159,
                    "end": 163
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 165,
                                "end": 166
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 167
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 163,
                            "end": 168
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 169,
                            "end": 170
                        },
                        "flags": 268435488,
                        "transformFlags": 2,
                        "start": 163,
                        "end": 170
                    },
                    "flags": 163,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 171
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 172,
                    "end": 172
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 159,
                "end": 173
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 159,
            "end": 174
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 174,
                    "end": 178
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 180,
                                        "end": 181
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 182,
                                        "end": 182
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 178,
                                    "end": 183
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 185
                                },
                                "flags": 268435488,
                                "transformFlags": 2,
                                "start": 178,
                                "end": 185
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 186,
                                "end": 186
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 178,
                            "end": 187
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 188,
                            "end": 189
                        },
                        "flags": 268435488,
                        "transformFlags": 2,
                        "start": 178,
                        "end": 189
                    },
                    "flags": 178,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 190
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 191,
                    "end": 191
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 174,
                "end": 192
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 174,
            "end": 193
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 193,
                    "end": 197
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 200
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 200,
                                "end": 202
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 197,
                            "end": 202
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 203,
                            "end": 203
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 197,
                        "end": 204
                    },
                    "flags": 197,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 205
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 193,
                "end": 205
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 193,
            "end": 206
        }
    ],
    "isModule": false,
    "source": "new (memoize.Cache || MapCache)\nnew (typeof this == \"function\" ? this : Dict())\nnew (createObj()).prop(a());\nnew (x()``.y)();\nnew e[f().x].y();\nnew e[f()].y();\nnew (a().b)();\nnew (a().b().c)();\nnew (a``());\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 207
}
```

### Printed

```javascript

new (memoize.Cache || MapCache);
new (typeof this == "\"function\"" ? this : Dict());

new (createObj()).prop(a());

new (x()``.y)();

new e[f().x].y();

new e[f()].y();

new (a().b)();

new (a().b().c)();

new (a``());

```

### Diagnostics

```javascript
✔ No errors
```

