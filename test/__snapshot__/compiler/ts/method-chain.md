# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
this.firebase.object(`/shops/${shopLocation.shop}`)
  // keep distance info
  .first((shop: ShopQueryResult, index: number, source: Observable<ShopQueryResult>): any => {
      // add distance to result
      const s = shop;
      s.distance = shopLocation.distance;
      return s;
  });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "this.firebase.object(`/shops/${shopLocation.shop}`)\n  // keep distance info\n  .first((shop: ShopQueryResult, index: number, source: Observable<ShopQueryResult>): any => {\n      // add distance to result\n      const s = shop;\n      s.distance = shopLocation.distance;\n      return s;\n  });",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 1073807915,
                        "expression": {
                            "kind": 67175096,
                            "member": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 4260571,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 0,
                                    "end": 4
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "firebase",
                                    "rawText": "firebase",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 13
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 13,
                                "period": {
                                    "kind": 255,
                                    "pos": 4,
                                    "end": 5
                                }
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "object",
                                "rawText": "object",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 20
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 20,
                            "period": {
                                "kind": 255,
                                "pos": 13,
                                "end": 14
                            }
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [
                                {
                                    "kind": 66261,
                                    "spans": [
                                        {
                                            "kind": 66263,
                                            "rawText": "/shops/",
                                            "text": "/shops/",
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "shopLocation",
                                                    "rawText": "shopLocation",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 43
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "shop",
                                                    "rawText": "shop",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 48
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 48,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 43,
                                                    "end": 44
                                                }
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 21,
                                            "end": 48
                                        }
                                    ],
                                    "tail": {
                                        "kind": 4260568,
                                        "rawText": "",
                                        "text": "",
                                        "literal": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 21,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 32768,
                            "symbol": null,
                            "start": 31,
                            "end": 51
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 51
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "first",
                        "rawText": "first",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 84
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 84,
                    "period": {
                        "kind": 255,
                        "pos": 51,
                        "end": 79
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "source",
                                            "rawText": "source",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 130
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Observable",
                                                "rawText": "Observable",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 131,
                                                "end": 142
                                            },
                                            "typeArguments": {
                                                "kind": 8419,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 134226156,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "ShopQueryResult",
                                                            "rawText": "ShopQueryResult",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 143,
                                                            "end": 158
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 143,
                                                        "end": 159
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 143,
                                                "end": 158
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 131,
                                            "end": 160
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 122,
                                        "end": 159
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "index",
                                            "rawText": "index",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 108,
                                            "end": 114
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 115,
                                            "end": 122
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 107,
                                        "end": 122
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "shop",
                                            "rawText": "shop",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 90
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "ShopQueryResult",
                                                "rawText": "ShopQueryResult",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 91,
                                                "end": 107
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 91,
                                            "end": 108
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 85,
                                        "end": 107
                                    }
                                ],
                                "type": {
                                    "kind": 4202498,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 161,
                                    "end": 165
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 159
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 142,
                                            "binding": {
                                                "kind": 31,
                                                "lexicals": [
                                                    {
                                                        "kind": 16525,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "s",
                                                            "rawText": "s",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 214,
                                                            "end": 216
                                                        },
                                                        "exclamation": false,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 196712,
                                                            "text": "shop",
                                                            "rawText": "shop",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 218,
                                                            "end": 223
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 214,
                                                        "end": 223
                                                    }
                                                ],
                                                "flags": 40,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 170,
                                                "end": 223
                                            },
                                            "flags": 32776,
                                            "symbol": null,
                                            "transformFlags": 769,
                                            "start": 170,
                                            "end": 224
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "s",
                                                        "rawText": "s",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 224,
                                                        "end": 232
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "distance",
                                                        "rawText": "distance",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 233,
                                                        "end": 241
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 232,
                                                    "end": 241,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 232,
                                                        "end": 233
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "shopLocation",
                                                        "rawText": "shopLocation",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 243,
                                                        "end": 256
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "distance",
                                                        "rawText": "distance",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 257,
                                                        "end": 265
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 256,
                                                    "end": 265,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 256,
                                                        "end": 257
                                                    }
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 224,
                                                "end": 265
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 224,
                                            "end": 266
                                        },
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 279,
                                                "end": 281
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 266,
                                            "end": 282
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 170,
                                    "end": 282
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 286
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 286
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 86,
                    "end": 287
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 84,
                "end": 287
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 288
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
    "end": 288
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

