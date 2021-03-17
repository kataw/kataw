# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js

(x => y);

(x => y, x => y);

((x => y), x => y);

(async x => y);

(async x => y, x => y);

(x => y, async x => y);

(async x => y, async x => y);

((async x => y), x => y);

(async (x) => y);

(((async (x) => y)));

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\n(x => y);\n\n(x => y, x => y);\n\n((x => y), x => y);\n\n(async x => y);\n\n(async x => y, x => y);\n\n(x => y, async x => y);\n\n(async x => y, async x => y);\n\n((async x => y), x => y);\n\n(async (x) => y);\n\n(((async (x) => y)));\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 4325406,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 3
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 4325406,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 14
                    },
                    "contents": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 4325406,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 27
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 29
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 66224,
                            "expression": {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 4325406,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 34
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 39
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 40
                        },
                        {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 4325406,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 43
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 48
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 48
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 49
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 50
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 81936,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 58,
                        "end": 60
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 63,
                        "end": 65
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 65
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 50,
                "end": 66
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 67
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 81936,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 75,
                        "end": 77
                    },
                    "contents": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 82
                            },
                            {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 4325406,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 85
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 90
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 90
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 90
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 67,
                "end": 91
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 67,
            "end": 92
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 4325406,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 96
                    },
                    "contents": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 101
                            },
                            {
                                "kind": 81936,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 108,
                                    "end": 110
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 113,
                                    "end": 115
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 115
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 99,
                        "end": 115
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 92,
                    "end": 115
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 92,
                "end": 116
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 92,
            "end": 117
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 81936,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 125,
                        "end": 127
                    },
                    "contents": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 130,
                                "end": 132
                            },
                            {
                                "kind": 81936,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 139,
                                    "end": 141
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 144,
                                    "end": 146
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 146
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 130,
                        "end": 146
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 146
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 117,
                "end": 147
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 117,
            "end": 148
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 66224,
                            "expression": {
                                "kind": 81936,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 157,
                                    "end": 159
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 162,
                                    "end": 164
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 151,
                                "end": 164
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 151,
                            "end": 165
                        },
                        {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 4325406,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 166,
                                "end": 168
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 171,
                                "end": 173
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 166,
                            "end": 173
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 151,
                    "end": 173
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 148,
                "end": 174
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 148,
            "end": 175
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 81936,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 185,
                                    "end": 186
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 185,
                                "end": 187
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 186,
                        "end": 187
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 190,
                        "end": 192
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 192
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 175,
                "end": 193
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 175,
            "end": 194
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 81936,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 206,
                                            "end": 207
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 206,
                                        "end": 208
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 208
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 211,
                                "end": 213
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 198,
                            "end": 213
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 198,
                        "end": 214
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 197,
                    "end": 215
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 194,
                "end": 216
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 194,
            "end": 217
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 218
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

