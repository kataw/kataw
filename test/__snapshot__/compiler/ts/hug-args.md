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
    "kind": 149,
    "source": "postMessage(\n  <IActionMessage>{\n    context: item.context,\n    topic: item.topic\n  }\n);\n\nwindow.postMessage(\n  {\n    context: item.context,\n    topic: item.topic\n  } as IActionMessage\n);\n\npostMessages(\n  <IActionMessage[]>[\n    {\n      context: item.context,\n      topic: item.topic\n    }\n  ]\n);",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "postMessage",
                        "rawText": "postMessage",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 11
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 228,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "IActionMessage",
                                        "rawText": "IActionMessage",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 16,
                                        "end": 30
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 16,
                                    "end": 31
                                },
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "context",
                                                    "rawText": "context",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 32,
                                                    "end": 44
                                                },
                                                "right": {
                                                    "kind": 74424,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "item",
                                                        "rawText": "item",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 45,
                                                        "end": 50
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "context",
                                                        "rawText": "context",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 51,
                                                        "end": 58
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 50,
                                                    "end": 58
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 32,
                                                "end": 58
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "topic",
                                                    "rawText": "topic",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 59,
                                                    "end": 69
                                                },
                                                "right": {
                                                    "kind": 74424,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "item",
                                                        "rawText": "item",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 70,
                                                        "end": 75
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "topic",
                                                        "rawText": "topic",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 76,
                                                        "end": 81
                                                    },
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 75,
                                                    "end": 81
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 59,
                                                "end": 81
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 32,
                                        "end": 81
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 31,
                                    "end": 85
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 12,
                                "end": 85
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 65536,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 16,
                        "end": 87
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 11,
                    "end": 87
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 88
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 74424,
                        "member": {
                            "kind": 196712,
                            "text": "window",
                            "rawText": "window",
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 88,
                            "end": 96
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "postMessage",
                            "rawText": "postMessage",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 97,
                            "end": 108
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 96,
                        "end": 108
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "context",
                                                    "rawText": "context",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 113,
                                                    "end": 125
                                                },
                                                "right": {
                                                    "kind": 74424,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "item",
                                                        "rawText": "item",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 126,
                                                        "end": 131
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "context",
                                                        "rawText": "context",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 132,
                                                        "end": 139
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 131,
                                                    "end": 139
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 113,
                                                "end": 139
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "topic",
                                                    "rawText": "topic",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 140,
                                                    "end": 150
                                                },
                                                "right": {
                                                    "kind": 74424,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "item",
                                                        "rawText": "item",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 151,
                                                        "end": 156
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "topic",
                                                        "rawText": "topic",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 157,
                                                        "end": 162
                                                    },
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 156,
                                                    "end": 162
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 140,
                                                "end": 162
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 113,
                                        "end": 162
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 109,
                                    "end": 166
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "IActionMessage",
                                        "rawText": "IActionMessage",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 169,
                                        "end": 184
                                    },
                                    "typeArguments": null,
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 169,
                                    "end": 186
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 166,
                                "end": 184
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 65536,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 113,
                        "end": 186
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 108,
                    "end": 186
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 88,
                "end": 187
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "postMessages",
                        "rawText": "postMessages",
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 187,
                        "end": 201
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 228,
                                "type": {
                                    "kind": 7,
                                    "elementType": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "IActionMessage",
                                            "rawText": "IActionMessage",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 206,
                                            "end": 220
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 206,
                                        "end": 221
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 206,
                                    "end": 223
                                },
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
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
                                                                "text": "context",
                                                                "rawText": "context",
                                                                "flags": 81920,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 230,
                                                                "end": 244
                                                            },
                                                            "right": {
                                                                "kind": 74424,
                                                                "member": {
                                                                    "kind": 196712,
                                                                    "text": "item",
                                                                    "rawText": "item",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 245,
                                                                    "end": 250
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "context",
                                                                    "rawText": "context",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 251,
                                                                    "end": 258
                                                                },
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 250,
                                                                "end": 258
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 230,
                                                            "end": 258
                                                        },
                                                        {
                                                            "kind": 65721,
                                                            "left": {
                                                                "kind": 196711,
                                                                "text": "topic",
                                                                "rawText": "topic",
                                                                "flags": 81920,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 259,
                                                                "end": 271
                                                            },
                                                            "right": {
                                                                "kind": 74424,
                                                                "member": {
                                                                    "kind": 196712,
                                                                    "text": "item",
                                                                    "rawText": "item",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 272,
                                                                    "end": 277
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "topic",
                                                                    "rawText": "topic",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 278,
                                                                    "end": 283
                                                                },
                                                                "flags": 81920,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 277,
                                                                "end": 283
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 81920,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 259,
                                                            "end": 283
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": true,
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 230,
                                                    "end": 283
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 224,
                                                "end": 289
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 224,
                                        "end": 289
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 223,
                                    "end": 293
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 202,
                                "end": 293
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 65536,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 206,
                        "end": 295
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 201,
                    "end": 295
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 187,
                "end": 296
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 296
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 296
}
```

### Printed


```javascript

postMessage(<IActionMessage>{ context : item.context, topic : item.topic })

window.postMessage({ context : item.context, topic : item.topic } as IActionMessage)

postMessages(<IActionMessage[]>[
    { context : item.context, topic : item.topic }
])

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

