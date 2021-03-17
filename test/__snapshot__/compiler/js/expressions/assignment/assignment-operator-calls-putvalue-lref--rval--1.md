# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var count = 0;
var global = this;

Object.defineProperty(this, "x", {
  configurable: true,
  value: 1
});

(function() {
  "use strict";
  assert.throws(ReferenceError, () => {
    count++;
    x = (delete global.x, 2);
    count++;
  });
  count++;
})();
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var count = 0;\nvar global = this;\n\nObject.defineProperty(this, \"x\", {\n  configurable: true,\n  value: 1\n});\n\n(function() {\n  \"use strict\";\n  assert.throws(ReferenceError, () => {\n    count++;\n    x = (delete global.x, 2);\n    count++;\n  });\n  count++;\n})();",
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
                            "text": "count",
                            "rawText": "count",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
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
                            "start": 11,
                            "end": 13
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 13
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
                            "text": "global",
                            "rawText": "global",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 18,
                            "end": 25
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4260571,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 18,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 32
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 32
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 33
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "Object",
                        "rawText": "Object",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 41
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "defineProperty",
                        "rawText": "defineProperty",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 56
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 56,
                    "period": {
                        "kind": 255,
                        "pos": 41,
                        "end": 42
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4260571,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 61
                        },
                        {
                            "kind": 4261583,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 66
                        },
                        {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "configurable",
                                            "rawText": "configurable",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 69,
                                            "end": 84
                                        },
                                        "right": {
                                            "kind": 4260391,
                                            "text": true,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 85,
                                            "end": 90
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 90
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 99
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 102
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 102
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 104
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 61,
                    "end": 105
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 105
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 106
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 118,
                            "end": 119
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [
                                    {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 4261583,
                                            "text": "use strict",
                                            "rawText": "use strict",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 136
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 121,
                                        "end": 137
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
                                                    "start": 137,
                                                    "end": 146
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "throws",
                                                    "rawText": "throws",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 147,
                                                    "end": 153
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 146,
                                                "end": 153,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 146,
                                                    "end": 147
                                                }
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "ReferenceError",
                                                        "rawText": "ReferenceError",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 154,
                                                        "end": 168
                                                    },
                                                    {
                                                        "kind": 83976,
                                                        "typeParameters": null,
                                                        "parameters": {
                                                            "kind": 81929,
                                                            "elements": [],
                                                            "type": null,
                                                            "accessModifier": null,
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 169,
                                                            "end": 169
                                                        },
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65714,
                                                                            "operator": "++",
                                                                            "operand": {
                                                                                "kind": 196712,
                                                                                "text": "count",
                                                                                "rawText": "count",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 177,
                                                                                "end": 187
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 177,
                                                                            "end": 189
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 177,
                                                                        "end": 190
                                                                    },
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65550,
                                                                            "left": {
                                                                                "kind": 196712,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 190,
                                                                                "end": 196
                                                                            },
                                                                            "operator": "=",
                                                                            "right": {
                                                                                "kind": 66224,
                                                                                "expression": {
                                                                                    "kind": 65590,
                                                                                    "expressions": [
                                                                                        {
                                                                                            "kind": 65774,
                                                                                            "operator": "delete",
                                                                                            "operand": {
                                                                                                "kind": 67175096,
                                                                                                "member": {
                                                                                                    "kind": 196712,
                                                                                                    "text": "global",
                                                                                                    "rawText": "global",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 206,
                                                                                                    "end": 213
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 196711,
                                                                                                    "text": "x",
                                                                                                    "rawText": "x",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 214,
                                                                                                    "end": 215
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 213,
                                                                                                "end": 215,
                                                                                                "period": {
                                                                                                    "kind": 255,
                                                                                                    "pos": 213,
                                                                                                    "end": 214
                                                                                                }
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 200,
                                                                                            "end": 215
                                                                                        },
                                                                                        {
                                                                                            "kind": 4261540,
                                                                                            "text": 2,
                                                                                            "rawText": "2",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 216,
                                                                                            "end": 218
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 200,
                                                                                    "end": 218
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 198,
                                                                                "end": 219
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 190,
                                                                            "end": 219
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 190,
                                                                        "end": 220
                                                                    },
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65714,
                                                                            "operator": "++",
                                                                            "operand": {
                                                                                "kind": 196712,
                                                                                "text": "count",
                                                                                "rawText": "count",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 220,
                                                                                "end": 230
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 220,
                                                                            "end": 232
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 220,
                                                                        "end": 233
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 177,
                                                                "end": 233
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 175,
                                                            "end": 237
                                                        },
                                                        "flags": 1073741824,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 169,
                                                        "end": 237
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 168,
                                                "end": 238
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 153,
                                            "end": 238
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 239
                                    },
                                    {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 65714,
                                            "operator": "++",
                                            "operand": {
                                                "kind": 196712,
                                                "text": "count",
                                                "rawText": "count",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 239,
                                                "end": 247
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 249
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 250
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 250
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 252
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 109,
                        "end": 252
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 253
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 255,
                    "end": 255
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 253,
                "end": 255
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 106,
            "end": 256
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
    "end": 256
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

