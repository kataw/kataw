  # Kataw parser test case

## Input

`````js
class Foo {
  static #x = 1;
  static #m = function() {};

  static test() {
    const o = { Foo: Foo };
    return [
      o?.Foo.#x,
      o?.Foo.#x.toFixed,
      o?.Foo.#x.toFixed(2),
      o?.Foo.#m(),
    ];
  }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 20
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 27
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 28
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 37
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#m",
                                "rawText": "#m",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 51
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
                                    "start": 52,
                                    "end": 52
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 56
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 56
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 37,
                            "end": 56
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 57
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 67
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 72
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 73,
                                    "end": 74
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 76,
                                                    "end": 86
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "o",
                                                                "rawText": "o",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 86,
                                                                "end": 88
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 219,
                                                                            "asteriskToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "Foo",
                                                                                "rawText": "Foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 92,
                                                                                "end": 96
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "Foo",
                                                                                "rawText": "Foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 97,
                                                                                "end": 101
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 128,
                                                                            "start": 92,
                                                                            "end": 101
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "transformFlags": 0,
                                                                    "start": 92,
                                                                    "end": 101
                                                                },
                                                                "flags": 48,
                                                                "transformFlags": 8,
                                                                "start": 90,
                                                                "end": 103
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 86,
                                                            "end": 103
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "transformFlags": 0,
                                                    "start": 86,
                                                    "end": 103
                                                },
                                                "flags": 33554448,
                                                "transformFlags": 0,
                                                "start": 76,
                                                "end": 104
                                            },
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 104,
                                                    "end": 115
                                                },
                                                "expression": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 205,
                                                                "chainToken": {
                                                                    "kind": 393240,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 125,
                                                                    "end": 127
                                                                },
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "o",
                                                                    "rawText": "o",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 117,
                                                                    "end": 125
                                                                },
                                                                "chain": {
                                                                    "kind": 202,
                                                                    "chain": {
                                                                        "kind": 302,
                                                                        "chain": {
                                                                            "kind": 202,
                                                                            "chain": null,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "Foo",
                                                                                "rawText": "Foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 127,
                                                                                "end": 130
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 2,
                                                                            "start": 127,
                                                                            "end": 130
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 127,
                                                                        "end": 130
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#x",
                                                                        "rawText": "#x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 131,
                                                                        "end": 133
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 2,
                                                                    "start": 130,
                                                                    "end": 133
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 117,
                                                                "end": 133
                                                            },
                                                            {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 205,
                                                                    "chainToken": {
                                                                        "kind": 393240,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 142,
                                                                        "end": 144
                                                                    },
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "o",
                                                                        "rawText": "o",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 134,
                                                                        "end": 142
                                                                    },
                                                                    "chain": {
                                                                        "kind": 202,
                                                                        "chain": {
                                                                            "kind": 302,
                                                                            "chain": {
                                                                                "kind": 202,
                                                                                "chain": null,
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "Foo",
                                                                                    "rawText": "Foo",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 144,
                                                                                    "end": 147
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 2,
                                                                                "start": 144,
                                                                                "end": 147
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 144,
                                                                            "end": 147
                                                                        },
                                                                        "expression": {
                                                                            "kind": 67191035,
                                                                            "text": "#x",
                                                                            "rawText": "#x",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 148,
                                                                            "end": 150
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 2,
                                                                        "start": 147,
                                                                        "end": 150
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 134,
                                                                    "end": 150
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "toFixed",
                                                                    "rawText": "toFixed",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 151,
                                                                    "end": 158
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 2,
                                                                "start": 134,
                                                                "end": 158
                                                            },
                                                            {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 205,
                                                                        "chainToken": {
                                                                            "kind": 393240,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 167,
                                                                            "end": 169
                                                                        },
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "o",
                                                                            "rawText": "o",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 159,
                                                                            "end": 167
                                                                        },
                                                                        "chain": {
                                                                            "kind": 202,
                                                                            "chain": {
                                                                                "kind": 302,
                                                                                "chain": {
                                                                                    "kind": 202,
                                                                                    "chain": null,
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "Foo",
                                                                                        "rawText": "Foo",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 169,
                                                                                        "end": 172
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 2,
                                                                                    "start": 169,
                                                                                    "end": 172
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 169,
                                                                                "end": 172
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67191035,
                                                                                "text": "#x",
                                                                                "rawText": "#x",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 173,
                                                                                "end": 175
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 2,
                                                                            "start": 172,
                                                                            "end": 175
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 159,
                                                                        "end": 175
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "toFixed",
                                                                        "rawText": "toFixed",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 176,
                                                                        "end": 183
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 2,
                                                                    "start": 159,
                                                                    "end": 183
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392130,
                                                                            "text": 2,
                                                                            "rawText": "2",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 184,
                                                                            "end": 185
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 184,
                                                                    "end": 185
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 159,
                                                                "end": 186
                                                            },
                                                            {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 205,
                                                                    "chainToken": {
                                                                        "kind": 393240,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 195,
                                                                        "end": 197
                                                                    },
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "o",
                                                                        "rawText": "o",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 187,
                                                                        "end": 195
                                                                    },
                                                                    "chain": {
                                                                        "kind": 202,
                                                                        "chain": {
                                                                            "kind": 302,
                                                                            "chain": {
                                                                                "kind": 202,
                                                                                "chain": null,
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "Foo",
                                                                                    "rawText": "Foo",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 197,
                                                                                    "end": 200
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 2,
                                                                                "start": 197,
                                                                                "end": 200
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 197,
                                                                            "end": 200
                                                                        },
                                                                        "expression": {
                                                                            "kind": 67191035,
                                                                            "text": "#m",
                                                                            "rawText": "#m",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 201,
                                                                            "end": 203
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 2,
                                                                        "start": 200,
                                                                        "end": 203
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 187,
                                                                    "end": 203
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 204,
                                                                    "end": 204
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 187,
                                                                "end": 205
                                                            }
                                                        ],
                                                        "trailingComma": true,
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 117,
                                                        "end": 206
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 8,
                                                    "start": 115,
                                                    "end": 212
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 104,
                                                "end": 213
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 76,
                                        "end": 213
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 217
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 217
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 217
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 217
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 219
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 219
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  static #x = 1;\n  static #m = function() {};\n\n  static test() {\n    const o = { Foo: Foo };\n    return [\n      o?.Foo.#x,\n      o?.Foo.#x.toFixed,\n      o?.Foo.#x.toFixed(2),\n      o?.Foo.#m(),\n    ];\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 219
}
```

### Printed

```javascript
class Foo {
  static #x = 1;;
  static #m = function () {};;
  static test() {
    const o = { Foo: Foo };
    return [o?.Foo.#x, o?.Foo.#x.toFixed, o?.Foo.#x.toFixed(2), o?.Foo.#m(),];
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

