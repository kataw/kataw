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

### CST

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
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 18,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 18,
                        "end": 32
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 41
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "defineProperty",
                        "rawText": "defineProperty",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 56
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 33,
                    "end": 56
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 61
                        },
                        {
                            "kind": 201392131,
                            "text": "x",
                            "rawText": "\"x\"",
                            "flags": 96,
                            "transformFlags": 0,
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
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "configurable",
                                            "rawText": "configurable",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 69,
                                            "end": 84
                                        },
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 85,
                                            "end": 90
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 69,
                                        "end": 90
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 99
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 102
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 91,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 102
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 67,
                            "end": 104
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 104
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 33,
                "end": 105
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 109,
                            "end": 117
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 118,
                            "end": 118
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "\"use strict\"",
                                        "flags": 97,
                                        "transformFlags": 0,
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
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 146
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "throws",
                                                    "rawText": "throws",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 147,
                                                    "end": 153
                                                },
                                                "flags": 97,
                                                "transformFlags": 2,
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
                                                        "transformFlags": 0,
                                                        "start": 154,
                                                        "end": 168
                                                    },
                                                    {
                                                        "kind": 271,
                                                        "asyncKeyword": null,
                                                        "typeParameters": null,
                                                        "arrowPatameterList": {
                                                            "kind": 342,
                                                            "parameters": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 171,
                                                            "end": 171
                                                        },
                                                        "returnType": null,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 172,
                                                            "end": 175
                                                        },
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
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 187,
                                                                                "end": 189
                                                                            },
                                                                            "operand": {
                                                                                "kind": 134299649,
                                                                                "text": "count",
                                                                                "rawText": "count",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 177,
                                                                                "end": 187
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 177,
                                                                            "end": 189
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
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
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 190,
                                                                                "end": 196
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
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
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 200,
                                                                                                "end": 206
                                                                                            },
                                                                                            "operand": {
                                                                                                "kind": 129,
                                                                                                "member": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "global",
                                                                                                    "rawText": "global",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 206,
                                                                                                    "end": 213
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "x",
                                                                                                    "rawText": "x",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 214,
                                                                                                    "end": 215
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "transformFlags": 2,
                                                                                                "start": 206,
                                                                                                "end": 215
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 1024,
                                                                                            "start": 200,
                                                                                            "end": 215
                                                                                        },
                                                                                        {
                                                                                            "kind": 201392130,
                                                                                            "text": 2,
                                                                                            "rawText": "2",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 216,
                                                                                            "end": 218
                                                                                        }
                                                                                    ],
                                                                                    "flags": 32,
                                                                                    "transformFlags": 1024,
                                                                                    "start": 198,
                                                                                    "end": 218
                                                                                },
                                                                                "flags": 198,
                                                                                "transformFlags": 0,
                                                                                "start": 32,
                                                                                "end": 219
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 128,
                                                                            "start": 190,
                                                                            "end": 219
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 190,
                                                                        "end": 220
                                                                    },
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 127,
                                                                            "operandToken": {
                                                                                "kind": 196635,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 230,
                                                                                "end": 232
                                                                            },
                                                                            "operand": {
                                                                                "kind": 134299649,
                                                                                "text": "count",
                                                                                "rawText": "count",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 220,
                                                                                "end": 230
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 220,
                                                                            "end": 232
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 220,
                                                                        "end": 233
                                                                    }
                                                                ],
                                                                "flags": 33,
                                                                "transformFlags": 0,
                                                                "start": 177,
                                                                "end": 233
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 175,
                                                            "end": 237
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 169,
                                                        "end": 237
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 154,
                                                "end": 237
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 137,
                                            "end": 238
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 239
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 127,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 247,
                                                "end": 249
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "count",
                                                "rawText": "count",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 239,
                                                "end": 247
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 249
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 250
                                    }
                                ],
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 250
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 119,
                            "end": 252
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 109,
                        "end": 252
                    },
                    "flags": 106,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 253
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 254,
                    "end": 254
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 106,
                "end": 255
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 106,
            "end": 256
        }
    ],
    "isModule": true,
    "source": "var count = 0;\nvar global = this;\n\nObject.defineProperty(this, \"x\", {\n  configurable: true,\n  value: 1\n});\n\n(function() {\n  \"use strict\";\n  assert.throws(ReferenceError, () => {\n    count++;\n    x = (delete global.x, 2);\n    count++;\n  });\n  count++;\n})();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 256
}
```

### Printed

```javascript

var count = 0;
var global = this;

Object.defineProperty(this, "\"x\"", { configurable: true, value: 1 });

(function () {
    assert.throws(ReferenceError, () => {
        count++;
        x = (delete global.x, 2);
        count++;
      });
    count++;
  })();

```

### Diagnostics

```javascript
✔ No errors
```

