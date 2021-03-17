# Kataw parser test case

## Input

`````js
a ? b ? (c) : (d) : (e) => f : g;

a ? (b) : c => d : (e) : f => g;

a ? (b) : c => (d) : e => f : g;

// a ? (b) : c => (d => e) : f => g;

a ? b ? (c => d) : e => (f => g) : h => i;

a ? async (b) : c => d;
a ? async (b) : c => d : e;
a ? async (b => c) : d => e;
a ? async (b) => (c => d) : e => f;


`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "a ? b ? (c) : (d) : (e) => f : g;\n\na ? (b) : c => d : (e) : f => g;\n\na ? (b) : c => (d) : e => f : g;\n\n// a ? (b) : c => (d => e) : f => g;\n\na ? b ? (c => d) : e => (f => g) : h => i;\n\na ? async (b) : c => d;\na ? async (b) : c => d : e;\na ? async (b => c) : d => e;\na ? async (b) => (c => d) : e => f;\n\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "consequent": {
                    "kind": 65592,
                    "shortCircuit": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "consequent": {
                        "kind": 66224,
                        "expression": {
                            "kind": 196712,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 11
                    },
                    "alternate": {
                        "kind": 66224,
                        "expression": {
                            "kind": 196712,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 17
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 22
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
                                "start": 19,
                                "end": 23
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 23
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "g",
                    "rawText": "g",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 33
            },
            "isWebCompat": true,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 36
                },
                "consequent": {
                    "kind": 66224,
                    "expression": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 41
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 42
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 46
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
                                "start": 46,
                                "end": 46
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 46
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "d",
                        "rawText": "d",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 51
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 51
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 51
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 56
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
                                "start": 53,
                                "end": 61
                            }
                        ],
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 61
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 59,
                            "end": 64
                        },
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 61
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "g",
                        "rawText": "g",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 66
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 66
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 67
            },
            "isWebCompat": true,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 67
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 70
                },
                "consequent": {
                    "kind": 66224,
                    "expression": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 75
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 76
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 80
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
                                "start": 80,
                                "end": 80
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 78,
                        "end": 80
                    },
                    "contents": {
                        "kind": 83976,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81929,
                            "elements": [
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 85,
                                        "end": 86
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
                                    "start": 83,
                                    "end": 91
                                }
                            ],
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 91
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 89,
                                "end": 94
                            },
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 91
                        },
                        "contents": {
                            "kind": 196712,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 96
                        },
                        "flags": 1073741824,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 96
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 96
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 67,
                "end": 96
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "g",
                    "rawText": "g",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 98,
                    "end": 100
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 98,
                "end": 101
            },
            "isWebCompat": true,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 67,
            "end": 101
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 142
                },
                "consequent": {
                    "kind": 65592,
                    "shortCircuit": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 146
                    },
                    "consequent": {
                        "kind": 66224,
                        "expression": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 150,
                                            "end": 151
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
                                        "start": 148,
                                        "end": 151
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 151
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "d",
                                "rawText": "d",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 156
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 156
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 157
                    },
                    "alternate": {
                        "kind": 83976,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81929,
                            "elements": [
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 159,
                                        "end": 161
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
                                    "start": 161,
                                    "end": 161
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 159,
                            "end": 161
                        },
                        "contents": {
                            "kind": 66224,
                            "expression": {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 81929,
                                    "elements": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 166,
                                                "end": 167
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
                                            "start": 164,
                                            "end": 167
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 164,
                                    "end": 167
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 170,
                                    "end": 172
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 164,
                                "end": 172
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 164,
                            "end": 173
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 159,
                        "end": 173
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 144,
                    "end": 173
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "h",
                                    "rawText": "h",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 175,
                                    "end": 177
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
                                "start": 177,
                                "end": 177
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 175,
                        "end": 177
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "i",
                        "rawText": "i",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 180,
                        "end": 182
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 182
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 101,
                "end": 182
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 101,
            "end": 183
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 186
                },
                "consequent": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "async",
                        "rawText": "async",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 188,
                        "end": 194
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 196,
                                "end": 197
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 197,
                        "end": 198
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 194,
                    "end": 198
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 200,
                                    "end": 202
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
                                "start": 202,
                                "end": 202
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 200,
                        "end": 202
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "d",
                        "rawText": "d",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 205,
                        "end": 207
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 207
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 183,
                "end": 207
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 183,
            "end": 208
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 208,
                    "end": 210
                },
                "consequent": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "async",
                        "rawText": "async",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 218
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 221
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 221,
                        "end": 222
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 218,
                    "end": 222
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 224,
                                    "end": 226
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
                                "start": 226,
                                "end": 226
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 224,
                        "end": 226
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "d",
                        "rawText": "d",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 229,
                        "end": 231
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 224,
                    "end": 231
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 208,
                "end": 231
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "e",
                    "rawText": "e",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 233,
                    "end": 235
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 233,
                "end": 236
            },
            "isWebCompat": true,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 208,
            "end": 236
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 238
                },
                "consequent": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "async",
                        "rawText": "async",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 240,
                        "end": 246
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 81929,
                                    "elements": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 248,
                                                "end": 249
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
                                            "start": 249,
                                            "end": 249
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 248,
                                    "end": 249
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 252,
                                    "end": 254
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 254
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 249,
                        "end": 255
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 255
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 257,
                                    "end": 259
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
                                "start": 259,
                                "end": 259
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 257,
                        "end": 259
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "e",
                        "rawText": "e",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 262,
                        "end": 264
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 257,
                    "end": 264
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 236,
                "end": 264
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 236,
            "end": 265
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 265,
                    "end": 267
                },
                "consequent": {
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
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 277,
                                    "end": 278
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
                                "start": 277,
                                "end": 279
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 278,
                        "end": 279
                    },
                    "contents": {
                        "kind": 66224,
                        "expression": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 284,
                                            "end": 285
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
                                        "start": 282,
                                        "end": 285
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 282,
                                "end": 285
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "d",
                                "rawText": "d",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 288,
                                "end": 290
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 282,
                            "end": 290
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 282,
                        "end": 291
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 269,
                    "end": 291
                },
                "alternate": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 295
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
                                "start": 295,
                                "end": 295
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 293,
                        "end": 295
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 298,
                        "end": 300
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 293,
                    "end": 300
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 265,
                "end": 300
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 265,
            "end": 301
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
    "end": 303
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

