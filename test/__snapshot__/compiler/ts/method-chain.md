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
    "kind": 149,
    "source": "this.firebase.object(`/shops/${shopLocation.shop}`)\n  // keep distance info\n  .first((shop: ShopQueryResult, index: number, source: Observable<ShopQueryResult>): any => {\n      // add distance to result\n      const s = shop;\n      s.distance = shopLocation.distance;\n      return s;\n  });",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 74424,
                        "member": {
                            "kind": 66091,
                            "expression": {
                                "kind": 74424,
                                "member": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 4260571,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 0,
                                        "end": 4
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "firebase",
                                        "rawText": "firebase",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 5,
                                        "end": 13
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 4,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "object",
                                    "rawText": "object",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 14,
                                    "end": 20
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 13,
                                "end": 20
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
                                                    "kind": 74424,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "shopLocation",
                                                        "rawText": "shopLocation",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 31,
                                                        "end": 43
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "shop",
                                                        "rawText": "shop",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 44,
                                                        "end": 48
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 21,
                                                "end": 48
                                            }
                                        ],
                                        "tail": {
                                            "kind": 4260568,
                                            "rawText": "",
                                            "text": "",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 21,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 81920,
                                "intersects": false,
                                "parent": null,
                                "emitNode": null,
                                "start": 31,
                                "end": 51
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 20,
                            "end": 51
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "first",
                            "rawText": "first",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 79,
                            "end": 84
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 51,
                        "end": 84
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67592,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "typeParameters": 1,
                                    "elements": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "source",
                                                "rawText": "source",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 123,
                                                "end": 130
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 236,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "Observable",
                                                    "rawText": "Observable",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 131,
                                                    "end": 142
                                                },
                                                "typeArguments": {
                                                    "kind": 227,
                                                    "typeArgumentsList": [
                                                        {
                                                            "kind": 236,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "ShopQueryResult",
                                                                "rawText": "ShopQueryResult",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 143,
                                                                "end": 158
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 143,
                                                            "end": 159
                                                        }
                                                    ],
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 143,
                                                    "end": 158
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 131,
                                                "end": 160
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 122,
                                            "end": 159
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "index",
                                                "rawText": "index",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 108,
                                                "end": 114
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 161,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 115,
                                                "end": 122
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 107,
                                            "end": 122
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 196712,
                                                "text": "shop",
                                                "rawText": "shop",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 86,
                                                "end": 90
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 236,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "ShopQueryResult",
                                                    "rawText": "ShopQueryResult",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 91,
                                                    "end": 107
                                                },
                                                "typeArguments": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 91,
                                                "end": 108
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 85,
                                            "end": 107
                                        }
                                    ],
                                    "type": {
                                        "kind": 4194306,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 161,
                                        "end": 165
                                    },
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
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
                                                "isConst": true,
                                                "binding": {
                                                    "kind": 31,
                                                    "bindingList": [
                                                        {
                                                            "kind": 141,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "s",
                                                                "rawText": "s",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 214,
                                                                "end": 216
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 196712,
                                                                "text": "shop",
                                                                "rawText": "shop",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 218,
                                                                "end": 223
                                                            },
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 214,
                                                            "end": 223
                                                        }
                                                    ],
                                                    "flags": 65552,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 214,
                                                    "end": 223
                                                },
                                                "flags": 81936,
                                                "intersects": false,
                                                "transformFlags": 769,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 170,
                                                "end": 224
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 74424,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "s",
                                                            "rawText": "s",
                                                            "flags": 81920,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 224,
                                                            "end": 232
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "distance",
                                                            "rawText": "distance",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 233,
                                                            "end": 241
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 232,
                                                        "end": 241
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 74424,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "shopLocation",
                                                            "rawText": "shopLocation",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 243,
                                                            "end": 256
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "distance",
                                                            "rawText": "distance",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 257,
                                                            "end": 265
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 256,
                                                        "end": 265
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 224,
                                                    "end": 265
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 224,
                                                "end": 266
                                            },
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "s",
                                                    "rawText": "s",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 279,
                                                    "end": 281
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 266,
                                                "end": 282
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 170,
                                        "end": 282
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 168,
                                    "end": 286
                                },
                                "flags": 536936448,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 85,
                                "end": 286
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 65536,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 86,
                        "end": 287
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 84,
                    "end": 287
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 288
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 288
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 288
}
```

### Printed


```javascript

this.firebase.object(`/shops/${shopLocation.shop{`).first((source: Observable<ShopQueryResult>, index: number, shop: ShopQueryResult) =>  {
    const s = shop;
    s.distance = shopLocation.distance
    return s;
})

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

