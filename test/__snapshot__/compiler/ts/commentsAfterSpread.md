# Kataw parser test case

## Input

`````js
const identity = (a) => a;

const a = {
  .../*#__PURE__*/identity({
    b: 1
  })
};

const b = {
  ...
  /*#__PURE__*/identity({
    b: 1
  })
};

const c = {
  ...
  /*#__PURE__*/
  identity({
    b: 1
  })
};

const d = {
  .../*#__PURE__*/
  identity({
    b: 1
  })
};

function e (.../* comment e */args) {
  const [ea, eb] = [.../* comment eab */args];
  return args.length;
}

function f (
  first,
  .../* comment f */rest
) {
  return rest.length;
}

function g (
  first,
  .../* comment g */
  rest
) {
  const [ga, gb] = [.../* comment gab */
    rest
  ]
  return rest.length;
}

const h = (.../* comment h */args) => args.length;

const i = (
  first, .../* comment i */rest
) => rest.length;

const j = (
  first,
  .../* comment j */
  rest
) => rest.length;

function k ({
  first,
  .../* comment k */rest
}) {
  const { ka, kb, .../* comment kr */remaining } = rest;
  const {
    kc,
    kd,
    .../* comment kr2 */
    remaining2
  } = rest;
  return { .../* comment return k */ remaining };
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const identity = (a) => a;\n\nconst a = {\n  .../*#__PURE__*/identity({\n    b: 1\n  })\n};\n\nconst b = {\n  ...\n  /*#__PURE__*/identity({\n    b: 1\n  })\n};\n\nconst c = {\n  ...\n  /*#__PURE__*/\n  identity({\n    b: 1\n  })\n};\n\nconst d = {\n  .../*#__PURE__*/\n  identity({\n    b: 1\n  })\n};\n\nfunction e (.../* comment e */args) {\n  const [ea, eb] = [.../* comment eab */args];\n  return args.length;\n}\n\nfunction f (\n  first,\n  .../* comment f */rest\n) {\n  return rest.length;\n}\n\nfunction g (\n  first,\n  .../* comment g */\n  rest\n) {\n  const [ga, gb] = [.../* comment gab */\n    rest\n  ]\n  return rest.length;\n}\n\nconst h = (.../* comment h */args) => args.length;\n\nconst i = (\n  first, .../* comment i */rest\n) => rest.length;\n\nconst j = (\n  first,\n  .../* comment j */\n  rest\n) => rest.length;\n\nfunction k ({\n  first,\n  .../* comment k */rest\n}) {\n  const { ka, kb, .../* comment kr */remaining } = rest;\n  const {\n    kc,\n    kd,\n    .../* comment kr2 */\n    remaining2\n  } = rest;\n  return { .../* comment return k */ remaining };\n}",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "identity",
                            "rawText": "identity",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 14
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 16,
                                        "end": 20
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 20
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 25
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 25
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 25
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 26
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 33,
                            "end": 35
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65741,
                                        "argument": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "identity",
                                                "rawText": "identity",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 66
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 98984,
                                                        "propertyList": {
                                                            "kind": 65722,
                                                            "properties": [
                                                                {
                                                                    "kind": 65721,
                                                                    "left": {
                                                                        "kind": 196711,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 68,
                                                                        "end": 74
                                                                    },
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 75,
                                                                        "end": 77
                                                                    },
                                                                    "accessModifier": null,
                                                                    "decorators": null,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 68,
                                                                    "end": 77
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": true,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 68,
                                                            "end": 77
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 67,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 32768,
                                                "symbol": null,
                                                "start": 68,
                                                "end": 82
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 66,
                                            "end": 82
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 4104,
                                        "start": 45,
                                        "end": 82
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 82
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 84
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 84
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 84
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 26,
            "end": 85
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 92,
                            "end": 94
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65741,
                                        "argument": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "identity",
                                                "rawText": "identity",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 104,
                                                "end": 128
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 98984,
                                                        "propertyList": {
                                                            "kind": 65722,
                                                            "properties": [
                                                                {
                                                                    "kind": 65721,
                                                                    "left": {
                                                                        "kind": 196711,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 130,
                                                                        "end": 136
                                                                    },
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 137,
                                                                        "end": 139
                                                                    },
                                                                    "accessModifier": null,
                                                                    "decorators": null,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 130,
                                                                    "end": 139
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": true,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 130,
                                                            "end": 139
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 129,
                                                        "end": 143
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 32768,
                                                "symbol": null,
                                                "start": 130,
                                                "end": 144
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 144
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 4104,
                                        "start": 104,
                                        "end": 144
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 144
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 146
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 92,
                        "end": 146
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 92,
                "end": 146
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 85,
            "end": 147
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 154,
                            "end": 156
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65741,
                                        "argument": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "identity",
                                                "rawText": "identity",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 166,
                                                "end": 193
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 98984,
                                                        "propertyList": {
                                                            "kind": 65722,
                                                            "properties": [
                                                                {
                                                                    "kind": 65721,
                                                                    "left": {
                                                                        "kind": 196711,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 195,
                                                                        "end": 201
                                                                    },
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 202,
                                                                        "end": 204
                                                                    },
                                                                    "accessModifier": null,
                                                                    "decorators": null,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 195,
                                                                    "end": 204
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": true,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 195,
                                                            "end": 204
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 194,
                                                        "end": 208
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 32768,
                                                "symbol": null,
                                                "start": 195,
                                                "end": 209
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 193,
                                            "end": 209
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 4104,
                                        "start": 166,
                                        "end": 209
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 160,
                                "end": 209
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 158,
                            "end": 211
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 154,
                        "end": 211
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 154,
                "end": 211
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 147,
            "end": 212
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 219,
                            "end": 221
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65741,
                                        "argument": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "identity",
                                                "rawText": "identity",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 231,
                                                "end": 255
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 98984,
                                                        "propertyList": {
                                                            "kind": 65722,
                                                            "properties": [
                                                                {
                                                                    "kind": 65721,
                                                                    "left": {
                                                                        "kind": 196711,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 257,
                                                                        "end": 263
                                                                    },
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 264,
                                                                        "end": 266
                                                                    },
                                                                    "accessModifier": null,
                                                                    "decorators": null,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 257,
                                                                    "end": 266
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": true,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 257,
                                                            "end": 266
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 256,
                                                        "end": 270
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 32768,
                                                "symbol": null,
                                                "start": 257,
                                                "end": 271
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 255,
                                            "end": 271
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 4104,
                                        "start": 231,
                                        "end": 271
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 271
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 223,
                            "end": 273
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 219,
                        "end": 273
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 219,
                "end": 273
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 212,
            "end": 274
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "e",
                "rawText": "e",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 284,
                "end": 286
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "args",
                            "rawText": "args",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 291,
                            "end": 310
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 288,
                        "end": 310
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 288,
                "end": 311
            },
            "type": null,
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
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "ea",
                                                            "rawText": "ea",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 323,
                                                            "end": 325
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 323,
                                                        "end": 325
                                                    },
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "eb",
                                                            "rawText": "eb",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 326,
                                                            "end": 329
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 326,
                                                        "end": 329
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 323,
                                                "end": 329
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 321,
                                            "end": 330
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "args",
                                                            "rawText": "args",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 337,
                                                            "end": 358
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 334,
                                                        "end": 358
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 334,
                                                "end": 358
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 332,
                                            "end": 359
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 321,
                                        "end": 359
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 321,
                                "end": 359
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 313,
                            "end": 360
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "args",
                                    "rawText": "args",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 369,
                                    "end": 374
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 375,
                                    "end": 381
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 374,
                                "end": 381,
                                "period": {
                                    "kind": 255,
                                    "pos": 374,
                                    "end": 375
                                }
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 360,
                            "end": 382
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 313,
                    "end": 382
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 311,
                "end": 384
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 274,
            "end": 384
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 394,
                "end": 396
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "first",
                            "rawText": "first",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 398,
                            "end": 406
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 398,
                        "end": 406
                    },
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "rest",
                            "rawText": "rest",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 413,
                            "end": 432
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 407,
                        "end": 432
                    }
                ],
                "trailingComma": false,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 398,
                "end": 434
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 445,
                                    "end": 450
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 451,
                                    "end": 457
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 450,
                                "end": 457,
                                "period": {
                                    "kind": 255,
                                    "pos": 450,
                                    "end": 451
                                }
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 436,
                            "end": 458
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 436,
                    "end": 458
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 434,
                "end": 460
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 384,
            "end": 460
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "g",
                "rawText": "g",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 470,
                "end": 472
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "first",
                            "rawText": "first",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 474,
                            "end": 482
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 474,
                        "end": 482
                    },
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "rest",
                            "rawText": "rest",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 489,
                            "end": 511
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 483,
                        "end": 511
                    }
                ],
                "trailingComma": false,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 474,
                "end": 513
            },
            "type": null,
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
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "ga",
                                                            "rawText": "ga",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 525,
                                                            "end": 527
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 525,
                                                        "end": 527
                                                    },
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "gb",
                                                            "rawText": "gb",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 528,
                                                            "end": 531
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 528,
                                                        "end": 531
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 525,
                                                "end": 531
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 523,
                                            "end": 532
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "rest",
                                                            "rawText": "rest",
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 539,
                                                            "end": 565
                                                        },
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 536,
                                                        "end": 565
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 536,
                                                "end": 565
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 534,
                                            "end": 569
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 523,
                                        "end": 569
                                    }
                                ],
                                "flags": 32776,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 523,
                                "end": 569
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 515,
                            "end": 569
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 578,
                                    "end": 583
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 584,
                                    "end": 590
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 583,
                                "end": 590,
                                "period": {
                                    "kind": 255,
                                    "pos": 583,
                                    "end": 584
                                }
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 569,
                            "end": 591
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 515,
                    "end": 591
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 513,
                "end": 593
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 460,
            "end": 593
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "h",
                            "rawText": "h",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 600,
                            "end": 602
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "args",
                                            "rawText": "args",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 609,
                                            "end": 628
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 4097,
                                        "start": 606,
                                        "end": 628
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 604,
                                "end": 629
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "args",
                                    "rawText": "args",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 632,
                                    "end": 637
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 638,
                                    "end": 644
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 637,
                                "end": 644,
                                "period": {
                                    "kind": 255,
                                    "pos": 637,
                                    "end": 638
                                }
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 604,
                            "end": 644
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 600,
                        "end": 644
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 600,
                "end": 644
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 593,
            "end": 645
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "i",
                            "rawText": "i",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 652,
                            "end": 654
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 671,
                                            "end": 690
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 4097,
                                        "start": 667,
                                        "end": 690
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "first",
                                            "rawText": "first",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 658,
                                            "end": 666
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 656,
                                        "end": 692
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 658,
                                "end": 690
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 695,
                                    "end": 700
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 701,
                                    "end": 707
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 700,
                                "end": 707,
                                "period": {
                                    "kind": 255,
                                    "pos": 700,
                                    "end": 701
                                }
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 656,
                            "end": 707
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 652,
                        "end": 707
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 652,
                "end": 707
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 645,
            "end": 708
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "j",
                            "rawText": "j",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 715,
                            "end": 717
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 736,
                                            "end": 758
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 4097,
                                        "start": 730,
                                        "end": 758
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "first",
                                            "rawText": "first",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 721,
                                            "end": 729
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 719,
                                        "end": 760
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 721,
                                "end": 758
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 763,
                                    "end": 768
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 769,
                                    "end": 775
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 768,
                                "end": 775,
                                "period": {
                                    "kind": 255,
                                    "pos": 768,
                                    "end": 769
                                }
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 719,
                            "end": 775
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 715,
                        "end": 775
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 715,
                "end": 775
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 708,
            "end": 776
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "k",
                "rawText": "k",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 786,
                "end": 788
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "first",
                                            "rawText": "first",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 791,
                                            "end": 799
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 791,
                                        "end": 799
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 800,
                                            "end": 825
                                        },
                                        "right": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 800,
                                        "end": 825
                                    }
                                ],
                                "multiline": true,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 32768,
                                "symbol": null,
                                "start": 791,
                                "end": 825
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 790,
                            "end": 827
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 790,
                        "end": 827
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 790,
                "end": 828
            },
            "type": null,
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
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "ka",
                                                            "rawText": "ka",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 840,
                                                            "end": 843
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 840,
                                                        "end": 843
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "kb",
                                                            "rawText": "kb",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 844,
                                                            "end": 847
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 844,
                                                        "end": 847
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": true,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "remaining",
                                                            "rawText": "remaining",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 848,
                                                            "end": 877
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 848,
                                                        "end": 877
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 840,
                                                "end": 877
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 838,
                                            "end": 879
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 881,
                                            "end": 886
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 838,
                                        "end": 886
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 838,
                                "end": 886
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 830,
                            "end": 887
                        },
                        {
                            "kind": 142,
                            "isConst": true,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "kc",
                                                            "rawText": "kc",
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 897,
                                                            "end": 904
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 897,
                                                        "end": 904
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "kd",
                                                            "rawText": "kd",
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 905,
                                                            "end": 912
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 905,
                                                        "end": 912
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": true,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "remaining2",
                                                            "rawText": "remaining2",
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 913,
                                                            "end": 953
                                                        },
                                                        "right": null,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 913,
                                                        "end": 953
                                                    }
                                                ],
                                                "multiline": true,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 32768,
                                                "symbol": null,
                                                "start": 897,
                                                "end": 953
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 895,
                                            "end": 957
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 959,
                                            "end": 964
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 895,
                                        "end": 964
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 895,
                                "end": 964
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 887,
                            "end": 965
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65741,
                                            "argument": {
                                                "kind": 196712,
                                                "text": "remaining",
                                                "rawText": "remaining",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 980,
                                                "end": 1012
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 4104,
                                            "start": 980,
                                            "end": 1012
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 976,
                                    "end": 1012
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 974,
                                "end": 1014
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 965,
                            "end": 1015
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 830,
                    "end": 1015
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 828,
                "end": 1017
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 776,
            "end": 1017
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
    "end": 1017
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

