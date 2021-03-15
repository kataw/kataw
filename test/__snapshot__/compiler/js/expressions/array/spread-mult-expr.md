# Kataw parser test case

## Input

`````js
var source = [3, 4, 5];
var target;

var callCount = 0;

(function() {
  assert.sameValue(arguments.length, 5);
  assert.sameValue(arguments[0], 1);
  assert.sameValue(arguments[1], 2);
  assert.sameValue(arguments[2], 3);
  assert.sameValue(arguments[3], 4);
  assert.sameValue(arguments[4], 5);
  assert.sameValue(target, source);
  callCount += 1;
}.apply(null, [1, 2, ...target = source]));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var source = [3, 4, 5];\nvar target;\n\nvar callCount = 0;\n\n(function() {\n  assert.sameValue(arguments.length, 5);\n  assert.sameValue(arguments[0], 1);\n  assert.sameValue(arguments[1], 2);\n  assert.sameValue(arguments[2], 3);\n  assert.sameValue(arguments[3], 4);\n  assert.sameValue(arguments[4], 5);\n  assert.sameValue(target, source);\n  callCount += 1;\n}.apply(null, [1, 2, ...target = source]));",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "source",
                            "rawText": "source",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 10
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 18
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 22
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 22
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 22
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "target",
                            "rawText": "target",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 27,
                            "end": 34
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 27,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 34
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 34
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 23,
            "end": 35
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "callCount",
                            "rawText": "callCount",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 40,
                            "end": 50
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 54
                        },
                        "flags": 40,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 54
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 54
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 55
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 67175096,
                        "member": {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 68
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 79
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 80,
                                                        "end": 89
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 79,
                                                    "end": 89,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 79,
                                                        "end": 80
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 90,
                                                                "end": 99
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 100,
                                                                "end": 106
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 99,
                                                            "end": 106,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 99,
                                                                "end": 100
                                                            }
                                                        },
                                                        {
                                                            "kind": 4261540,
                                                            "text": 5,
                                                            "rawText": "5",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 107,
                                                            "end": 109
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 99,
                                                    "end": 110
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 89,
                                                "end": 110
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 70,
                                            "end": 111
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 111,
                                                        "end": 120
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 121,
                                                        "end": 130
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 120,
                                                    "end": 130,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 120,
                                                        "end": 121
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67174980,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 131,
                                                                "end": 140
                                                            },
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 141,
                                                                "end": 142
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 140,
                                                            "end": 143
                                                        },
                                                        {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 144,
                                                            "end": 146
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 140,
                                                    "end": 147
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 130,
                                                "end": 147
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 111,
                                            "end": 148
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 148,
                                                        "end": 157
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 158,
                                                        "end": 167
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 157,
                                                    "end": 167,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 157,
                                                        "end": 158
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67174980,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 168,
                                                                "end": 177
                                                            },
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 178,
                                                                "end": 179
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 177,
                                                            "end": 180
                                                        },
                                                        {
                                                            "kind": 4261540,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 181,
                                                            "end": 183
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 177,
                                                    "end": 184
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 167,
                                                "end": 184
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 148,
                                            "end": 185
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 185,
                                                        "end": 194
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 195,
                                                        "end": 204
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 194,
                                                    "end": 204,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 194,
                                                        "end": 195
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67174980,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 205,
                                                                "end": 214
                                                            },
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 215,
                                                                "end": 216
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 214,
                                                            "end": 217
                                                        },
                                                        {
                                                            "kind": 4261540,
                                                            "text": 3,
                                                            "rawText": "3",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 218,
                                                            "end": 220
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 214,
                                                    "end": 221
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 204,
                                                "end": 221
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 185,
                                            "end": 222
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 222,
                                                        "end": 231
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 232,
                                                        "end": 241
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 231,
                                                    "end": 241,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 231,
                                                        "end": 232
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67174980,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 242,
                                                                "end": 251
                                                            },
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 3,
                                                                "rawText": "3",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 252,
                                                                "end": 253
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 251,
                                                            "end": 254
                                                        },
                                                        {
                                                            "kind": 4261540,
                                                            "text": 4,
                                                            "rawText": "4",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 255,
                                                            "end": 257
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 251,
                                                    "end": 258
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 241,
                                                "end": 258
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 222,
                                            "end": 259
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 259,
                                                        "end": 268
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 269,
                                                        "end": 278
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 268,
                                                    "end": 278,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 268,
                                                        "end": 269
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 67174980,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 279,
                                                                "end": 288
                                                            },
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 4,
                                                                "rawText": "4",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 289,
                                                                "end": 290
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 288,
                                                            "end": 291
                                                        },
                                                        {
                                                            "kind": 4261540,
                                                            "text": 5,
                                                            "rawText": "5",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 292,
                                                            "end": 294
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 288,
                                                    "end": 295
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 278,
                                                "end": 295
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 259,
                                            "end": 296
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "assert",
                                                        "rawText": "assert",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 296,
                                                        "end": 305
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sameValue",
                                                        "rawText": "sameValue",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 306,
                                                        "end": 315
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 305,
                                                    "end": 315,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 305,
                                                        "end": 306
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "target",
                                                            "rawText": "target",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 316,
                                                            "end": 322
                                                        },
                                                        {
                                                            "kind": 196712,
                                                            "text": "source",
                                                            "rawText": "source",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 323,
                                                            "end": 330
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 322,
                                                    "end": 331
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 315,
                                                "end": 331
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 296,
                                            "end": 332
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "callCount",
                                                    "rawText": "callCount",
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 332,
                                                    "end": 344
                                                },
                                                "operator": "+=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 347,
                                                    "end": 349
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 332,
                                                "end": 349
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 332,
                                            "end": 350
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 350
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 352
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 352
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "apply",
                            "rawText": "apply",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 353,
                            "end": 358
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 352,
                        "end": 358,
                        "period": {
                            "kind": 255,
                            "pos": 352,
                            "end": 353
                        }
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4260512,
                                "text": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 359,
                                "end": 363
                            },
                            {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 366,
                                            "end": 367
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 368,
                                            "end": 370
                                        },
                                        {
                                            "kind": 65740,
                                            "argument": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "target",
                                                    "rawText": "target",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 375,
                                                    "end": 381
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 383,
                                                    "end": 390
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 375,
                                                "end": 390
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2,
                                            "start": 371,
                                            "end": 390
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 366,
                                    "end": 390
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 364,
                                "end": 391
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 363,
                        "end": 392
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 358,
                    "end": 392
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 393
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 55,
            "end": 394
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 394
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

