# Kataw parser test case

## Input

`````js
postMessage(
  <IActionMessage>{
    context: item.context,
    topic: item.topic
  }
);

window.postMessage(
  {
    context: item.context,
    topic: item.topic
  } as IActionMessage
);

postMessages(
  <IActionMessage[]>[
    {
      context: item.context,
      topic: item.topic
    }
  ]
);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "postMessage(\n  <IActionMessage>{\n    context: item.context,\n    topic: item.topic\n  }\n);\n\nwindow.postMessage(\n  {\n    context: item.context,\n    topic: item.topic\n  } as IActionMessage\n);\n\npostMessages(\n  <IActionMessage[]>[\n    {\n      context: item.context,\n      topic: item.topic\n    }\n  ]\n);",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "postMessage",
                    "rawText": "postMessage",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 11
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 134291684,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "IActionMessage",
                                    "rawText": "IActionMessage",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 30
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 16,
                                "end": 31
                            },
                            "expression": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "context",
                                                "rawText": "context",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 44
                                            },
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "item",
                                                    "rawText": "item",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 50
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "context",
                                                    "rawText": "context",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 58
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 58,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 50,
                                                    "end": 51
                                                }
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 58
                                        },
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "topic",
                                                "rawText": "topic",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 69
                                            },
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "item",
                                                    "rawText": "item",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 75
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "topic",
                                                    "rawText": "topic",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 76,
                                                    "end": 81
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 81,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 75,
                                                    "end": 76
                                                }
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 81
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 81
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 85
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 12,
                            "end": 85
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 16,
                    "end": 87
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 87
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 88
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "window",
                        "rawText": "window",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 96
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "postMessage",
                        "rawText": "postMessage",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 108
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 108,
                    "period": {
                        "kind": 255,
                        "pos": 96,
                        "end": 97
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 73738,
                            "expression": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "context",
                                                "rawText": "context",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 113,
                                                "end": 125
                                            },
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "item",
                                                    "rawText": "item",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 126,
                                                    "end": 131
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "context",
                                                    "rawText": "context",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 132,
                                                    "end": 139
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 131,
                                                "end": 139,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 131,
                                                    "end": 132
                                                }
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 139
                                        },
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "topic",
                                                "rawText": "topic",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 140,
                                                "end": 150
                                            },
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "item",
                                                    "rawText": "item",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 151,
                                                    "end": 156
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "topic",
                                                    "rawText": "topic",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 157,
                                                    "end": 162
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 156,
                                                "end": 162,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 156,
                                                    "end": 157
                                                }
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 140,
                                            "end": 162
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 113,
                                    "end": 162
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 166
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "IActionMessage",
                                    "rawText": "IActionMessage",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 169,
                                    "end": 184
                                },
                                "typeArguments": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 169,
                                "end": 186
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 166,
                            "end": 184
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 113,
                    "end": 186
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 108,
                "end": 186
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 88,
            "end": 187
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "postMessages",
                    "rawText": "postMessages",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 201
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 134291684,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "IActionMessage",
                                        "rawText": "IActionMessage",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 220
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 206,
                                    "end": 221
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 206,
                                "end": 223
                            },
                            "expression": {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "context",
                                                            "rawText": "context",
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 230,
                                                            "end": 244
                                                        },
                                                        "right": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "item",
                                                                "rawText": "item",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 245,
                                                                "end": 250
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "context",
                                                                "rawText": "context",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 251,
                                                                "end": 258
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 250,
                                                            "end": 258,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 250,
                                                                "end": 251
                                                            }
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 230,
                                                        "end": 258
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "topic",
                                                            "rawText": "topic",
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 259,
                                                            "end": 271
                                                        },
                                                        "right": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "item",
                                                                "rawText": "item",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 272,
                                                                "end": 277
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "topic",
                                                                "rawText": "topic",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 278,
                                                                "end": 283
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 277,
                                                            "end": 283,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 277,
                                                                "end": 278
                                                            }
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 259,
                                                        "end": 283
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": true,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 230,
                                                "end": 283
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 224,
                                            "end": 289
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 224,
                                    "end": 289
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 223,
                                "end": 293
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 202,
                            "end": 293
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 206,
                    "end": 295
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 201,
                "end": 295
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 187,
            "end": 296
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
    "end": 296
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

