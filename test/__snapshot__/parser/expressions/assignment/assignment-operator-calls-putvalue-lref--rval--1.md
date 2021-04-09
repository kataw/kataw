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
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "count",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": 0,
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "global",
                            "autofix": 0,
                            "flags": 768,
                            "start": 18,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 135,
                            "autofix": 0,
                            "flags": 768,
                            "start": 27,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 18,
                        "end": 32
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 18,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "Object",
                        "autofix": 0,
                        "flags": 768,
                        "start": 33,
                        "end": 41
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "defineProperty",
                        "autofix": 0,
                        "flags": 768,
                        "start": 42,
                        "end": 56
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 56
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 135,
                            "autofix": 0,
                            "flags": 768,
                            "start": 57,
                            "end": 61
                        },
                        {
                            "kind": 67174403,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 62,
                            "end": 66
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134,
                                            "value": true,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 85,
                                            "end": 90
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "configurable",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 69,
                                            "end": 84
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 69,
                                        "end": 90
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 100,
                                            "end": 102
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "value",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 91,
                                            "end": 99
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 91,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "autofix": 0,
                                "flags": 1,
                                "start": 69,
                                "end": 102
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 67,
                            "end": 104
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 57,
                    "end": 104
                },
                "flags": 256,
                "start": 33,
                "end": 105
            },
            "autofix": 0,
            "flags": 128,
            "start": 33,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncToken": null,
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 118,
                            "end": 119
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 67174403,
                                            "value": "use strict",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 121,
                                            "end": 136
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 121,
                                        "end": 137
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 81921,
                                                    "value": "assert",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 137,
                                                    "end": 146
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "throws",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 147,
                                                    "end": 153
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 137,
                                                "end": 153
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 81921,
                                                        "value": "ReferenceError",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 154,
                                                        "end": 168
                                                    },
                                                    {
                                                        "kind": 271,
                                                        "typeParameters": null,
                                                        "parameters": [],
                                                        "asyncToken": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 127,
                                                                            "operandToken": {
                                                                                "kind": 196635,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 187,
                                                                                "end": 189
                                                                            },
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "value": "count",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 177,
                                                                                "end": 187
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 177,
                                                                            "end": 189
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 177,
                                                                        "end": 190
                                                                    },
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 81921,
                                                                                "value": "x",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 190,
                                                                                "end": 196
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 537067531,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 190,
                                                                                "end": 198
                                                                            },
                                                                            "right": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 132,
                                                                                    "expressions": [
                                                                                        {
                                                                                            "kind": 126,
                                                                                            "operandToken": {
                                                                                                "kind": 4259886,
                                                                                                "autofix": 0,
                                                                                                "flags": 0,
                                                                                                "start": 200,
                                                                                                "end": 206
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 129,
                                                                                                "member": {
                                                                                                    "kind": 81921,
                                                                                                    "value": "global",
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 206,
                                                                                                    "end": 213
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 81921,
                                                                                                    "value": "x",
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 214,
                                                                                                    "end": 215
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 206,
                                                                                                "end": 215
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 200,
                                                                                            "end": 215
                                                                                        },
                                                                                        {
                                                                                            "kind": 81921,
                                                                                            "value": 2,
                                                                                            "autofix": 0,
                                                                                            "flags": 768,
                                                                                            "start": 216,
                                                                                            "end": 218
                                                                                        }
                                                                                    ],
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 198,
                                                                                    "end": 218
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 198,
                                                                                "end": 219
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 190,
                                                                            "end": 219
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 190,
                                                                        "end": 220
                                                                    },
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 127,
                                                                            "operandToken": {
                                                                                "kind": 196635,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 230,
                                                                                "end": 232
                                                                            },
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "value": "count",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 220,
                                                                                "end": 230
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 220,
                                                                            "end": 232
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 220,
                                                                        "end": 233
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 177,
                                                                "end": 233
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 175,
                                                            "end": 237
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 169,
                                                        "end": 237
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 154,
                                                "end": 237
                                            },
                                            "flags": 256,
                                            "start": 137,
                                            "end": 238
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 137,
                                        "end": 239
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 127,
                                            "operandToken": {
                                                "kind": 196635,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 247,
                                                "end": 249
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "count",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 239,
                                                "end": 247
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 239,
                                            "end": 249
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 239,
                                        "end": 250
                                    }
                                ],
                                "multiline": true,
                                "autofix": 0,
                                "flags": 256,
                                "start": 121,
                                "end": 250
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 119,
                            "end": 252
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 109,
                        "end": 252
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 106,
                    "end": 253
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 254,
                    "end": 254
                },
                "flags": 256,
                "start": 106,
                "end": 255
            },
            "autofix": 0,
            "flags": 128,
            "start": 106,
            "end": 256
        }
    ],
    "isModule": true,
    "text": "var count = 0;\nvar global = this;\n\nObject.defineProperty(this, \"x\", {\n  configurable: true,\n  value: 1\n});\n\n(function() {\n  \"use strict\";\n  assert.throws(ReferenceError, () => {\n    count++;\n    x = (delete global.x, 2);\n    count++;\n  });\n  count++;\n})();",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

