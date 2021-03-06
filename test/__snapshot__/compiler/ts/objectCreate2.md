# Kataw parser test case

## Input

`````js

declare var union: null | { a: number, b: string };

var n = Object.create(null);             // any
var t = Object.create({ a: 1, b: "" });  // {a: number, b: string }
var u = Object.create(union);            // {a: number, b: string }
var e = Object.create({});               // {}
var o = Object.create(<object>{});

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\ndeclare var union: null | { a: number, b: string };\n\nvar n = Object.create(null);             // any\nvar t = Object.create({ a: 1, b: \"\" });  // {a: number, b: string }\nvar u = Object.create(union);            // {a: number, b: string }\nvar e = Object.create({});               // {}\nvar o = Object.create(<object>{});\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "union",
                                "rawText": "union",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 12,
                                "end": 18
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 4202655,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 19,
                                        "end": 24
                                    },
                                    {
                                        "kind": 8422,
                                        "objectTypeMembers": {
                                            "kind": 169,
                                            "members": [
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 31,
                                                        "end": 38
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 28,
                                                    "end": 39
                                                },
                                                {
                                                    "kind": 8380,
                                                    "name": {
                                                        "kind": 196711,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 41
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 42,
                                                        "end": 49
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 39,
                                                    "end": 49
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 28,
                                            "end": 51
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 26,
                                        "end": 51
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 24,
                                "end": 51
                            },
                            "initializer": null,
                            "flags": 12,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 51
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 51
                },
                "flags": 201342976,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 52
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "n",
                                "rawText": "n",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 57,
                                "end": 59
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 68
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "create",
                                        "rawText": "create",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 75
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 75,
                                    "period": {
                                        "kind": 254,
                                        "pos": 68,
                                        "end": 69
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
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 76,
                                            "end": 80
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 80,
                                    "end": 81
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 81
                            },
                            "flags": 57,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 81
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 81
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 52,
                "end": 82
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "t",
                                "rawText": "t",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 105,
                                "end": 107
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 109,
                                        "end": 116
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "create",
                                        "rawText": "create",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 123
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 123,
                                    "period": {
                                        "kind": 254,
                                        "pos": 116,
                                        "end": 117
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 125,
                                                            "end": 127
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 128,
                                                            "end": 130
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 125,
                                                        "end": 130
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 131,
                                                            "end": 133
                                                        },
                                                        "right": {
                                                            "kind": 4261583,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 134,
                                                            "end": 137
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 131,
                                                        "end": 137
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 125,
                                                "end": 137
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 139
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 125,
                                    "end": 140
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 140
                            },
                            "flags": 105,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 140
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 140
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 82,
                "end": 141
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "u",
                                "rawText": "u",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 173,
                                "end": 175
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 177,
                                        "end": 184
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "create",
                                        "rawText": "create",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 185,
                                        "end": 191
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 191,
                                    "period": {
                                        "kind": 254,
                                        "pos": 184,
                                        "end": 185
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "union",
                                            "rawText": "union",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 192,
                                            "end": 197
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 197,
                                    "end": 198
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 191,
                                "end": 198
                            },
                            "flags": 173,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 198
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 198
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 141,
                "end": 199
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "e",
                                "rawText": "e",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 241,
                                "end": 243
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 252
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "create",
                                        "rawText": "create",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 253,
                                        "end": 259
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 252,
                                    "end": 259,
                                    "period": {
                                        "kind": 254,
                                        "pos": 252,
                                        "end": 253
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 261,
                                                "end": 261
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 260,
                                            "end": 262
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 261,
                                    "end": 263
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 259,
                                "end": 263
                            },
                            "flags": 241,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 263
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 241,
                    "end": 263
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 199,
                "end": 264
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "o",
                                "rawText": "o",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 288,
                                "end": 290
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 292,
                                        "end": 299
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "create",
                                        "rawText": "create",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 300,
                                        "end": 306
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 299,
                                    "end": 306,
                                    "period": {
                                        "kind": 254,
                                        "pos": 299,
                                        "end": 300
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 73956,
                                            "type": {
                                                "kind": 4202663,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 308,
                                                "end": 314
                                            },
                                            "expression": {
                                                "kind": 67224232,
                                                "propertyList": {
                                                    "kind": 65722,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 316,
                                                    "end": 316
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 315,
                                                "end": 317
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 307,
                                            "end": 317
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 308,
                                    "end": 318
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 306,
                                "end": 318
                            },
                            "flags": 288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 318
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 288,
                    "end": 318
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 264,
                "end": 319
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 319
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 320
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

