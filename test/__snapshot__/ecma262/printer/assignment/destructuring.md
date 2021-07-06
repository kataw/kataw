# Kataw parser test case

## Input

`````js
let {
  bottom: offsetBottom,
  left: offsetLeft,
  right: offsetRight,
  top: offsetTop,
} = getPressRectOffset == null ? DEFAULT_PRESS_RECT : getPressRectOffset();

const { accessibilityModule: FooAccessibilityModule, accessibilityModule: FooAccessibilityModule2, accessibilityModule: FooAccessibilityModule3, accessibilityModule: FooAccessibilityModule4,
      } = foo || {};

({ prop: toAssign = "default" } = { prop: "propval" });

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "bottom",
                                            "rawText": "bottom",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "offsetBottom",
                                            "rawText": "offsetBottom",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 28
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 28
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "left",
                                            "rawText": "left",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "offsetLeft",
                                            "rawText": "offsetLeft",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 48
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 48
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "right",
                                            "rawText": "right",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 57
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "offsetRight",
                                            "rawText": "offsetRight",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 70
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 70
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "top",
                                            "rawText": "top",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 77
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "offsetTop",
                                            "rawText": "offsetTop",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 88
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 71,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 89
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 91
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "getPressRectOffset",
                                    "rawText": "getPressRectOffset",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 93,
                                    "end": 112
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 112,
                                    "end": 115
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 120
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 93,
                                "end": 120
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 122
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "DEFAULT_PRESS_RECT",
                                "rawText": "DEFAULT_PRESS_RECT",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 141
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 143
                            },
                            "alternate": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "getPressRectOffset",
                                    "rawText": "getPressRectOffset",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 162
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 163,
                                    "end": 163
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 143,
                                "end": 164
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 164
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 164
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 164
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 165
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 165,
                "end": 172
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "accessibilityModule",
                                            "rawText": "accessibilityModule",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 194
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "FooAccessibilityModule",
                                            "rawText": "FooAccessibilityModule",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 195,
                                            "end": 218
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 174,
                                        "end": 218
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "accessibilityModule",
                                            "rawText": "accessibilityModule",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 219,
                                            "end": 239
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "FooAccessibilityModule2",
                                            "rawText": "FooAccessibilityModule2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 240,
                                            "end": 264
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 219,
                                        "end": 264
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "accessibilityModule",
                                            "rawText": "accessibilityModule",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 265,
                                            "end": 285
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "FooAccessibilityModule3",
                                            "rawText": "FooAccessibilityModule3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 286,
                                            "end": 310
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 265,
                                        "end": 310
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "accessibilityModule",
                                            "rawText": "accessibilityModule",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 311,
                                            "end": 331
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "FooAccessibilityModule4",
                                            "rawText": "FooAccessibilityModule4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 332,
                                            "end": 356
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 311,
                                        "end": 356
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 357
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 172,
                            "end": 365
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 367,
                                "end": 371
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 371,
                                "end": 374
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 376,
                                    "end": 376
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 374,
                                "end": 377
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 367,
                            "end": 377
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 172,
                        "end": 377
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 172,
                "end": 377
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 165,
            "end": 378
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "prop",
                                        "rawText": "prop",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 382,
                                        "end": 387
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "toAssign",
                                            "rawText": "toAssign",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 388,
                                            "end": 397
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 397,
                                            "end": 399
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "default",
                                            "rawText": "\"default\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 399,
                                            "end": 409
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 382,
                                        "end": 409
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 382,
                                    "end": 409
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 382,
                            "end": 409
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 381,
                        "end": 411
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 411,
                        "end": 413
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "prop",
                                        "rawText": "prop",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 415,
                                        "end": 420
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "propval",
                                        "rawText": "\"propval\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 421,
                                        "end": 431
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 415,
                                    "end": 431
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 415,
                            "end": 431
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 413,
                        "end": 433
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 381,
                    "end": 433
                },
                "flags": 378,
                "transformFlags": 0,
                "start": 35,
                "end": 434
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 378,
            "end": 435
        }
    ],
    "isModule": false,
    "source": "let {\n  bottom: offsetBottom,\n  left: offsetLeft,\n  right: offsetRight,\n  top: offsetTop,\n} = getPressRectOffset == null ? DEFAULT_PRESS_RECT : getPressRectOffset();\n\nconst { accessibilityModule: FooAccessibilityModule, accessibilityModule: FooAccessibilityModule2, accessibilityModule: FooAccessibilityModule3, accessibilityModule: FooAccessibilityModule4,\n      } = foo || {};\n\n({ prop: toAssign = \"default\" } = { prop: \"propval\" });\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 436
}
```

### Printed

```javascript
let {
    bottom: offsetBottom,
    left: offsetLeft,
    right: offsetRight,
    top: offsetTop,
  } = getPressRectOffset == null ? DEFAULT_PRESS_RECT : getPressRectOffset();
const {
    accessibilityModule: FooAccessibilityModule,
    accessibilityModule: FooAccessibilityModule2,
    accessibilityModule: FooAccessibilityModule3,
    accessibilityModule: FooAccessibilityModule4,
  } = foo || {};

({ prop: toAssign = "\"default\"" } = { prop: "\"propval\"" });

```

### Diagnostics

```javascript
✔ No errors
```

