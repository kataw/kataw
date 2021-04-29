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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "count",
                            "rawText": "count",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 14,
                "end": 18
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "global",
                            "rawText": "global",
                            "flags": 96,
                            "start": 18,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 135,
                            "flags": 96,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 32
            },
            "flags": 16,
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
                        "kind": 134299649,
                        "text": "Object",
                        "rawText": "Object",
                        "flags": 96,
                        "start": 33,
                        "end": 41
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "defineProperty",
                        "rawText": "defineProperty",
                        "flags": 96,
                        "start": 42,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 33,
                    "end": 56
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 135,
                            "flags": 96,
                            "start": 57,
                            "end": 61
                        },
                        {
                            "kind": 201392131,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
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
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134,
                                            "text": true,
                                            "flags": 96,
                                            "start": 85,
                                            "end": 90
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "configurable",
                                            "rawText": "configurable",
                                            "flags": 96,
                                            "start": 69,
                                            "end": 84
                                        },
                                        "flags": 32,
                                        "start": 69,
                                        "end": 90
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 100,
                                            "end": 102
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "start": 91,
                                            "end": 99
                                        },
                                        "flags": 32,
                                        "start": 91,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 1,
                                "start": 69,
                                "end": 102
                            },
                            "flags": 32,
                            "start": 67,
                            "end": 104
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 57,
                    "end": 104
                },
                "flags": 32,
                "start": 33,
                "end": 105
            },
            "flags": 16,
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
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 109,
                            "end": 117
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 117,
                            "end": 119
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "use strict",
                                        "flags": 97,
                                        "start": 121,
                                        "end": 136
                                    }
                                ],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "assert",
                                                    "rawText": "assert",
                                                    "flags": 96,
                                                    "start": 137,
                                                    "end": 146
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "throws",
                                                    "rawText": "throws",
                                                    "flags": 96,
                                                    "start": 147,
                                                    "end": 153
                                                },
                                                "flags": 32,
                                                "start": 137,
                                                "end": 153
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "ReferenceError",
                                                        "rawText": "ReferenceError",
                                                        "flags": 96,
                                                        "start": 154,
                                                        "end": 168
                                                    },
                                                    {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 0,
                                                            "start": 172,
                                                            "end": 175
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": [],
                                                        "asyncToken": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 127,
                                                                            "operandToken": {
                                                                                "kind": 196635,
                                                                                "flags": 64,
                                                                                "start": 187,
                                                                                "end": 189
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "count",
                                                                                "rawText": "count",
                                                                                "flags": 96,
                                                                                "start": 177,
                                                                                "end": 187
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 177,
                                                                            "end": 189
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 177,
                                                                        "end": 190
                                                                    },
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 190,
                                                                                "end": 196
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 64,
                                                                                "start": 196,
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
                                                                                                "flags": 64,
                                                                                                "start": 200,
                                                                                                "end": 206
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 129,
                                                                                                "member": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "global",
                                                                                                    "rawText": "global",
                                                                                                    "flags": 96,
                                                                                                    "start": 206,
                                                                                                    "end": 213
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "x",
                                                                                                    "rawText": "x",
                                                                                                    "flags": 96,
                                                                                                    "start": 214,
                                                                                                    "end": 215
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 206,
                                                                                                "end": 215
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 200,
                                                                                            "end": 215
                                                                                        },
                                                                                        {
                                                                                            "kind": 201392130,
                                                                                            "text": 2,
                                                                                            "rawText": "2",
                                                                                            "flags": 96,
                                                                                            "start": 216,
                                                                                            "end": 218
                                                                                        }
                                                                                    ],
                                                                                    "flags": 32,
                                                                                    "start": 198,
                                                                                    "end": 218
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 198,
                                                                                "end": 219
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 190,
                                                                            "end": 219
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 190,
                                                                        "end": 220
                                                                    },
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 127,
                                                                            "operandToken": {
                                                                                "kind": 196635,
                                                                                "flags": 64,
                                                                                "start": 230,
                                                                                "end": 232
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "count",
                                                                                "rawText": "count",
                                                                                "flags": 96,
                                                                                "start": 220,
                                                                                "end": 230
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 220,
                                                                            "end": 232
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 220,
                                                                        "end": 233
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 32,
                                                                "start": 177,
                                                                "end": 233
                                                            },
                                                            "flags": 32,
                                                            "start": 175,
                                                            "end": 237
                                                        },
                                                        "flags": 32,
                                                        "start": 169,
                                                        "end": 237
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 154,
                                                "end": 237
                                            },
                                            "flags": 32,
                                            "start": 137,
                                            "end": 238
                                        },
                                        "flags": 16,
                                        "start": 137,
                                        "end": 239
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 127,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 64,
                                                "start": 247,
                                                "end": 249
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "count",
                                                "rawText": "count",
                                                "flags": 96,
                                                "start": 239,
                                                "end": 247
                                            },
                                            "flags": 32,
                                            "start": 239,
                                            "end": 249
                                        },
                                        "flags": 16,
                                        "start": 239,
                                        "end": 250
                                    }
                                ],
                                "multiline": true,
                                "flags": 32,
                                "start": 121,
                                "end": 250
                            },
                            "flags": 32,
                            "start": 119,
                            "end": 252
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 109,
                        "end": 252
                    },
                    "flags": 32,
                    "start": 106,
                    "end": 253
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 254,
                    "end": 254
                },
                "flags": 32,
                "start": 106,
                "end": 255
            },
            "flags": 16,
            "start": 106,
            "end": 256
        }
    ],
    "isModule": true,
    "text": "var count = 0;\nvar global = this;\n\nObject.defineProperty(this, \"x\", {\n  configurable: true,\n  value: 1\n});\n\n(function() {\n  \"use strict\";\n  assert.throws(ReferenceError, () => {\n    count++;\n    x = (delete global.x, 2);\n    count++;\n  });\n  count++;\n})();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 256
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

