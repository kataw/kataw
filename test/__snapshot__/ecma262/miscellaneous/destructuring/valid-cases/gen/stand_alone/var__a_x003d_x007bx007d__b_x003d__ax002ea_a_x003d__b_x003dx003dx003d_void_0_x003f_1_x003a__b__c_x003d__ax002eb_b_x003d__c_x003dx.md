# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: var _a = {}, _b = _a.a, a = _b === void 0 ? 1 : _b, _c = _a.b, b = _c === void 0 ? 2 : _c, _d = _a.c, c = _d === void 0 ? b : _d
## Options

`````js
{}
`````
## Input

`````js
var _a = {}, _b = _a.a, a = _b === void 0 ? 1 : _b, _c = _a.b, b = _c === void 0 ? 2 : _c, _d = _a.c, c = _d === void 0 ? b : _d
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
                            "text": "_a",
                            "rawText": "_a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 11
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "_b",
                            "rawText": "_b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "type": null,
                        "initializer": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "_a",
                                "rawText": "_a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 20
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 22
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 17,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 12,
                        "end": 22
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "_b",
                                    "rawText": "_b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 30
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 30,
                                    "end": 34
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477615,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 39
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 34,
                                    "end": 41
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 27,
                                "end": 41
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 43
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "_b",
                                "rawText": "_b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 50
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 50
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 23,
                        "end": 50
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "_c",
                            "rawText": "_c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 54
                        },
                        "type": null,
                        "initializer": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "_a",
                                "rawText": "_a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 59
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 61
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 56,
                            "end": 61
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 51,
                        "end": 61
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 64
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "_c",
                                    "rawText": "_c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 69
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 69,
                                    "end": 73
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477615,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 78
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 73,
                                    "end": 80
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 66,
                                "end": 80
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 82
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 84
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 86
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "_c",
                                "rawText": "_c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 89
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 89
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 62,
                        "end": 89
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "_d",
                            "rawText": "_d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 93
                        },
                        "type": null,
                        "initializer": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "_a",
                                "rawText": "_a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 98
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 100
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 95,
                            "end": 100
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 90,
                        "end": 100
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 103
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "_d",
                                    "rawText": "_d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 105,
                                    "end": 108
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 108,
                                    "end": 112
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477615,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 112,
                                        "end": 117
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 112,
                                    "end": 119
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 105,
                                "end": 119
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 121
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 123
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 125
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "_d",
                                "rawText": "_d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 128
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 105,
                            "end": 128
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 101,
                        "end": 128
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 128
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 128
        }
    ],
    "isModule": false,
    "source": "var _a = {}, _b = _a.a, a = _b === void 0 ? 1 : _b, _c = _a.b, b = _c === void 0 ? 2 : _c, _d = _a.c, c = _d === void 0 ? b : _d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 128
}
```

### Printed

```javascript

var _a = {},
  _b = _a.a,
  a = _b === void 0 ? 1 : _b,
  _c = _a.b,
  b = _c === void 0 ? 2 : _c,
  _d = _a.c,
  c = _d === void 0 ? b : _d;
```

### Diagnostics

```javascript
✔ No errors
```

