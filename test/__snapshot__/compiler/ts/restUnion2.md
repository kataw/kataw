# Kataw parser test case

## Input

`````js
declare const undefinedUnion: { n: number } | undefined;
var rest2: { n: number };
var {...rest2 } = undefinedUnion;


declare const nullUnion: { n: number } | null;
var rest3: { n: number };
var {...rest3 } = nullUnion;

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare const undefinedUnion: { n: number } | undefined;\nvar rest2: { n: number };\nvar {...rest2 } = undefinedUnion;\n\n\ndeclare const nullUnion: { n: number } | null;\nvar rest3: { n: number };\nvar {...rest3 } = nullUnion;\n",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "undefinedUnion",
                            "rawText": "undefinedUnion",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 28
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 536879334,
                                    "objectTypeMembers": {
                                        "kind": 536871081,
                                        "members": [
                                            {
                                                "kind": 8380,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "n",
                                                    "rawText": "n",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 33
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 4202657,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 34,
                                                    "end": 41
                                                },
                                                "isStatic": false,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 31,
                                                "end": 41
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 31,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 29,
                                    "end": 43
                                },
                                {
                                    "kind": 4202735,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 45,
                                    "end": 55
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 43,
                            "end": 55
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 55
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 55
            },
            "flags": 402685960,
            "symbol": null,
            "transformFlags": 769,
            "start": 7,
            "end": 56
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
                            "text": "rest2",
                            "rawText": "rest2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 60,
                            "end": 66
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 69,
                                            "end": 71
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 72,
                                            "end": 79
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 69,
                                        "end": 79
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 69,
                                "end": 81
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 67,
                            "end": 81
                        },
                        "initializer": null,
                        "flags": 60,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 81
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 60,
                "end": 81
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 56,
            "end": 82
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "rest2",
                                            "rawText": "rest2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 88,
                                            "end": 96
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 88,
                                        "end": 96
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 88,
                                "end": 96
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 86,
                            "end": 98
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "undefinedUnion",
                            "rawText": "undefinedUnion",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 115
                        },
                        "flags": 86,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 115
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 86,
                "end": 115
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 82,
            "end": 116
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "nullUnion",
                            "rawText": "nullUnion",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 132,
                            "end": 142
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 536879334,
                                    "objectTypeMembers": {
                                        "kind": 536871081,
                                        "members": [
                                            {
                                                "kind": 8380,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "n",
                                                    "rawText": "n",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 145,
                                                    "end": 147
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 4202657,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 148,
                                                    "end": 155
                                                },
                                                "isStatic": false,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 145,
                                                "end": 155
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 145,
                                        "end": 157
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 143,
                                    "end": 157
                                },
                                {
                                    "kind": 4202655,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 159,
                                    "end": 164
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 157,
                            "end": 164
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 132,
                        "end": 164
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 126,
                "end": 164
            },
            "flags": 402685960,
            "symbol": null,
            "transformFlags": 769,
            "start": 126,
            "end": 165
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
                            "text": "rest3",
                            "rawText": "rest3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 169,
                            "end": 175
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 178,
                                            "end": 180
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 181,
                                            "end": 188
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 178,
                                        "end": 188
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 178,
                                "end": 190
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 176,
                            "end": 190
                        },
                        "initializer": null,
                        "flags": 169,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 190
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 169,
                "end": 190
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 165,
            "end": 191
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "rest3",
                                            "rawText": "rest3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 197,
                                            "end": 205
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 197,
                                        "end": 205
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 197,
                                "end": 205
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 195,
                            "end": 207
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "nullUnion",
                            "rawText": "nullUnion",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 209,
                            "end": 219
                        },
                        "flags": 195,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 219
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 195,
                "end": 219
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 191,
            "end": 220
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
    "end": 221
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

