# Kataw parser test case

## Input

`````js
fooooooooooooooooooooooooooooooooooooooooooooooooooo(action => next =>
    dispatch(action),
);

foo(
  ({
    a,

    b
  }) => {}
);

foo(
  ({
    a,
    b

  }) => {}
);

foo(
  ({
    a,
    b
  }) => {}
);

foo(
  a,
  ({
    a,

    b
  }) => {}
)

foo(
  ({
    a,

    b
  }) => a
);

foo(
  ({
    a,
    b
  }) => a
);

foo(
  ({
    a,
    b

  }) => a
);

foo(
  ({
    a: {
      a,

      b
    }
  }) => {}
);

foo(
  ({
    a: {
      b: {
        c,

        d
      }
    }
  }) => {}
);

foo(
  ({
    a: {
      b: {
        c: {
          d,

          e
        }
      }
    }
  }) => {}
);

foo(
  ({
    a: {
      a,

      b
    }
  }) => a
);

foo(
  ({
    a: {
      b: {
        c,

        d
      }
    }
  }) => a
);

foo(
  ({
    a: {
      b: {
        c: {
          d,

          e
        }
      }
    }
  }) => a
);

foo(
  ([
    {
      a: {
        b: {
          c: {
            d,

            e
          }
        }
      }
    }
  ]) => {}
);

foo(
  ([
    ...{
      a: {
        b: {
          c: {
            d,

            e
          }
        }
      }
    }
  ]) => {}
);

foo(
  (
    n = {
      a: {
        b: {
          c: {
            d,

            e
          }
        }
      }
    }
  ) => {}
);

foo(
  ({
    x: [
      {
        a,

        b
      }
    ]
  }) => {}
);

foo(
  (
    a = [
      {
        a,

        b
      }
    ]
  ) => a
);

foo(
  ([
    [
      {
        a,

        b
      }
    ]
  ]) => {}
);

foo(
  ([
    [
      [
        [
          {
            a,
            b: {
              c,
              d: {
                e,

                f
              }
            }
          }
        ]
      ]
    ]
  ]) => {}
);

foo(
  (
    ...{
      a,

      b
    }
  ) => {}
);

foo(
  (
    ...[
      {
        a,

        b
      }
    ]
  ) => {}
);

foo(
  ([
    ...[
      {
        a,

        b
      }
    ]
  ]) => {}
);

foo(
  (
    a = [{
      a,

      b
    }]
  ) => {}
);

foo(
  (
    a = (({
      a,

      b
    }) => {})()
  ) => {}
);

foo(
  (
    a = f({
      a,

      b
    })
  ) => {}
);

foo(
  (
    a = ({
      a,

      b
    }) => {}
  ) => {}
);

foo(
  (
    a = 1 +
      f({
        a,

        b
      })
  ) => {}
);
`````

## Options

`````js
{ allowTypes : true }

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "fooooooooooooooooooooooooooooooooooooooooooooooooooo",
                    "rawText": "fooooooooooooooooooooooooooooooooooooooooooooooooooo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 52
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "action",
                                "rawText": "action",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 59
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "next",
                                    "rawText": "next",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 67
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 70
                                },
                                "contents": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "dispatch",
                                        "rawText": "dispatch",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 83
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "action",
                                                "rawText": "action",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 90
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 90
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 70,
                                    "end": 91
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 91
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 91
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 92
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 100
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 106,
                                                    "end": 112
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 113,
                                                    "end": 120
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 106,
                                            "end": 120
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 105,
                                        "end": 124
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 125
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 128
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 130,
                                    "end": 130
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 128,
                                "end": 131
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 131
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 131
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 95,
                "end": 133
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 95,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 139
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 145,
                                                    "end": 151
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 152,
                                                    "end": 158
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 145,
                                            "end": 158
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 144,
                                        "end": 163
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 164
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 164,
                                "end": 167
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 169,
                                    "end": 169
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 170
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 170
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 140,
                    "end": 170
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 134,
                "end": 172
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 134,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 178
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 184,
                                                    "end": 190
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 191,
                                                    "end": 197
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 184,
                                            "end": 197
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 183,
                                        "end": 201
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 183,
                                "end": 202
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 205
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 207,
                                    "end": 207
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 205,
                                "end": 208
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 179,
                            "end": 208
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 179,
                    "end": 208
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 173,
                "end": 210
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 173,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 216
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 217,
                            "end": 221
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 227,
                                                    "end": 233
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 234,
                                                    "end": 241
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 227,
                                            "end": 241
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 226,
                                        "end": 245
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 246
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 249
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 251,
                                    "end": 251
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 249,
                                "end": 252
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 222,
                            "end": 252
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 217,
                    "end": 252
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 211,
                "end": 254
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 211,
            "end": 254
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 254,
                    "end": 259
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 265,
                                                    "end": 271
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 272,
                                                    "end": 279
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 265,
                                            "end": 279
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 264,
                                        "end": 283
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 264,
                                "end": 284
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 284,
                                "end": 287
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 287,
                                "end": 289
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 260,
                            "end": 289
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 260,
                    "end": 289
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 254,
                "end": 291
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 254,
            "end": 292
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 297
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 303,
                                                    "end": 309
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 310,
                                                    "end": 316
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 303,
                                            "end": 316
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 302,
                                        "end": 320
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 302,
                                "end": 321
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 321,
                                "end": 324
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 324,
                                "end": 326
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 298,
                            "end": 326
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 298,
                    "end": 326
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 292,
                "end": 328
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 292,
            "end": 329
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 329,
                    "end": 334
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 340,
                                                    "end": 346
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 347,
                                                    "end": 353
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 340,
                                            "end": 353
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 339,
                                        "end": 358
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 339,
                                "end": 359
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 359,
                                "end": 362
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 364
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 335,
                            "end": 364
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 335,
                    "end": 364
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 329,
                "end": 366
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 329,
            "end": 367
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 372
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 378,
                                                        "end": 384
                                                    },
                                                    "value": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 387,
                                                                    "end": 395
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 396,
                                                                    "end": 405
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 387,
                                                            "end": 405
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 385,
                                                        "end": 411
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 378,
                                                    "end": 411
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 378,
                                            "end": 411
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 377,
                                        "end": 415
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 377,
                                "end": 416
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 416,
                                "end": 419
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 421,
                                    "end": 421
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 419,
                                "end": 422
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 422
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 373,
                    "end": 422
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 367,
                "end": 424
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 367,
            "end": 425
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 425,
                    "end": 430
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 436,
                                                        "end": 442
                                                    },
                                                    "value": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 445,
                                                                        "end": 453
                                                                    },
                                                                    "right": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "c",
                                                                                    "rawText": "c",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 456,
                                                                                    "end": 466
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "d",
                                                                                    "rawText": "d",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 467,
                                                                                    "end": 478
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 456,
                                                                            "end": 478
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 454,
                                                                        "end": 486
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 445,
                                                                    "end": 486
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 445,
                                                            "end": 486
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 443,
                                                        "end": 492
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 436,
                                                    "end": 492
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 436,
                                            "end": 492
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 435,
                                        "end": 496
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 435,
                                "end": 497
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 497,
                                "end": 500
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 502,
                                    "end": 502
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 500,
                                "end": 503
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 431,
                            "end": 503
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 431,
                    "end": 503
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 425,
                "end": 505
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 425,
            "end": 506
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 506,
                    "end": 511
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 517,
                                                        "end": 523
                                                    },
                                                    "value": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 526,
                                                                        "end": 534
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
                                                                                        "text": "c",
                                                                                        "rawText": "c",
                                                                                        "flags": 97,
                                                                                        "transformFlags": 0,
                                                                                        "start": 537,
                                                                                        "end": 547
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 220,
                                                                                        "propertyList": {
                                                                                            "kind": 218,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "d",
                                                                                                    "rawText": "d",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 550,
                                                                                                    "end": 562
                                                                                                },
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "e",
                                                                                                    "rawText": "e",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 563,
                                                                                                    "end": 576
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "transformFlags": 0,
                                                                                            "start": 550,
                                                                                            "end": 576
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 8,
                                                                                        "start": 548,
                                                                                        "end": 586
                                                                                    },
                                                                                    "flags": 33,
                                                                                    "transformFlags": 128,
                                                                                    "start": 537,
                                                                                    "end": 586
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 537,
                                                                            "end": 586
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 535,
                                                                        "end": 594
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 526,
                                                                    "end": 594
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 526,
                                                            "end": 594
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 524,
                                                        "end": 600
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 517,
                                                    "end": 600
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 517,
                                            "end": 600
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 516,
                                        "end": 604
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 516,
                                "end": 605
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 605,
                                "end": 608
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 610,
                                    "end": 610
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 608,
                                "end": 611
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 611
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 512,
                    "end": 611
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 506,
                "end": 613
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 506,
            "end": 614
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 614,
                    "end": 619
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 625,
                                                        "end": 631
                                                    },
                                                    "value": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 634,
                                                                    "end": 642
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 643,
                                                                    "end": 652
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 634,
                                                            "end": 652
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 632,
                                                        "end": 658
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 625,
                                                    "end": 658
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 625,
                                            "end": 658
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 624,
                                        "end": 662
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 624,
                                "end": 663
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 663,
                                "end": 666
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 666,
                                "end": 668
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 620,
                            "end": 668
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 620,
                    "end": 668
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 614,
                "end": 670
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 614,
            "end": 671
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 671,
                    "end": 676
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 682,
                                                        "end": 688
                                                    },
                                                    "value": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 691,
                                                                        "end": 699
                                                                    },
                                                                    "right": {
                                                                        "kind": 220,
                                                                        "propertyList": {
                                                                            "kind": 218,
                                                                            "properties": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "c",
                                                                                    "rawText": "c",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 702,
                                                                                    "end": 712
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "d",
                                                                                    "rawText": "d",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 713,
                                                                                    "end": 724
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 702,
                                                                            "end": 724
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 700,
                                                                        "end": 732
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 691,
                                                                    "end": 732
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 691,
                                                            "end": 732
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 689,
                                                        "end": 738
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 682,
                                                    "end": 738
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 682,
                                            "end": 738
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 681,
                                        "end": 742
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 681,
                                "end": 743
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 743,
                                "end": 746
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 746,
                                "end": 748
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 677,
                            "end": 748
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 677,
                    "end": 748
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 671,
                "end": 750
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 671,
            "end": 751
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 751,
                    "end": 756
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 762,
                                                        "end": 768
                                                    },
                                                    "value": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 771,
                                                                        "end": 779
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
                                                                                        "text": "c",
                                                                                        "rawText": "c",
                                                                                        "flags": 97,
                                                                                        "transformFlags": 0,
                                                                                        "start": 782,
                                                                                        "end": 792
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 220,
                                                                                        "propertyList": {
                                                                                            "kind": 218,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "d",
                                                                                                    "rawText": "d",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 795,
                                                                                                    "end": 807
                                                                                                },
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "e",
                                                                                                    "rawText": "e",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 808,
                                                                                                    "end": 821
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "transformFlags": 0,
                                                                                            "start": 795,
                                                                                            "end": 821
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 8,
                                                                                        "start": 793,
                                                                                        "end": 831
                                                                                    },
                                                                                    "flags": 33,
                                                                                    "transformFlags": 128,
                                                                                    "start": 782,
                                                                                    "end": 831
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 782,
                                                                            "end": 831
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 780,
                                                                        "end": 839
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 771,
                                                                    "end": 839
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 771,
                                                            "end": 839
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 769,
                                                        "end": 845
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 762,
                                                    "end": 845
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 762,
                                            "end": 845
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 761,
                                        "end": 849
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 761,
                                "end": 850
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 850,
                                "end": 853
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 853,
                                "end": 855
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 757,
                            "end": 855
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 757,
                    "end": 855
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 751,
                "end": 857
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 751,
            "end": 858
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 858,
                    "end": 863
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 212,
                                                    "propertyList": {
                                                        "kind": 213,
                                                        "properties": [
                                                            {
                                                                "kind": 329,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 875,
                                                                    "end": 883
                                                                },
                                                                "value": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "b",
                                                                                    "rawText": "b",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 886,
                                                                                    "end": 896
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
                                                                                                    "text": "c",
                                                                                                    "rawText": "c",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 899,
                                                                                                    "end": 911
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 220,
                                                                                                    "propertyList": {
                                                                                                        "kind": 218,
                                                                                                        "properties": [
                                                                                                            {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "d",
                                                                                                                "rawText": "d",
                                                                                                                "flags": 97,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 914,
                                                                                                                "end": 928
                                                                                                            },
                                                                                                            {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "e",
                                                                                                                "rawText": "e",
                                                                                                                "flags": 97,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 929,
                                                                                                                "end": 944
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 17,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 914,
                                                                                                        "end": 944
                                                                                                    },
                                                                                                    "flags": 49,
                                                                                                    "transformFlags": 8,
                                                                                                    "start": 912,
                                                                                                    "end": 956
                                                                                                },
                                                                                                "flags": 33,
                                                                                                "transformFlags": 128,
                                                                                                "start": 899,
                                                                                                "end": 956
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 17,
                                                                                        "transformFlags": 0,
                                                                                        "start": 899,
                                                                                        "end": 956
                                                                                    },
                                                                                    "flags": 49,
                                                                                    "transformFlags": 8,
                                                                                    "start": 897,
                                                                                    "end": 966
                                                                                },
                                                                                "flags": 33,
                                                                                "transformFlags": 128,
                                                                                "start": 886,
                                                                                "end": 966
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "transformFlags": 0,
                                                                        "start": 886,
                                                                        "end": 966
                                                                    },
                                                                    "flags": 49,
                                                                    "transformFlags": 8,
                                                                    "start": 884,
                                                                    "end": 974
                                                                },
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 875,
                                                                "end": 974
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 875,
                                                        "end": 974
                                                    },
                                                    "flags": 49,
                                                    "transformFlags": 0,
                                                    "start": 869,
                                                    "end": 980
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 869,
                                            "end": 980
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 868,
                                        "end": 984
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 868,
                                "end": 985
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 985,
                                "end": 988
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 990,
                                    "end": 990
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 988,
                                "end": 991
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 864,
                            "end": 991
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 864,
                    "end": 991
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 858,
                "end": 993
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 858,
            "end": 994
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 994,
                    "end": 999
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 65,
                                                        "transformFlags": 0,
                                                        "start": 1005,
                                                        "end": 1013
                                                    },
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
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 1014,
                                                                        "end": 1022
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
                                                                                        "text": "b",
                                                                                        "rawText": "b",
                                                                                        "flags": 97,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1025,
                                                                                        "end": 1035
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
                                                                                                        "text": "c",
                                                                                                        "rawText": "c",
                                                                                                        "flags": 97,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1038,
                                                                                                        "end": 1050
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 220,
                                                                                                        "propertyList": {
                                                                                                            "kind": 218,
                                                                                                            "properties": [
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "d",
                                                                                                                    "rawText": "d",
                                                                                                                    "flags": 97,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 1053,
                                                                                                                    "end": 1067
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "e",
                                                                                                                    "rawText": "e",
                                                                                                                    "flags": 97,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 1068,
                                                                                                                    "end": 1083
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 17,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1053,
                                                                                                            "end": 1083
                                                                                                        },
                                                                                                        "flags": 49,
                                                                                                        "transformFlags": 8,
                                                                                                        "start": 1051,
                                                                                                        "end": 1095
                                                                                                    },
                                                                                                    "flags": 33,
                                                                                                    "transformFlags": 128,
                                                                                                    "start": 1038,
                                                                                                    "end": 1095
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1038,
                                                                                            "end": 1095
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 8,
                                                                                        "start": 1036,
                                                                                        "end": 1105
                                                                                    },
                                                                                    "flags": 33,
                                                                                    "transformFlags": 128,
                                                                                    "start": 1025,
                                                                                    "end": 1105
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 1025,
                                                                            "end": 1105
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 1023,
                                                                        "end": 1113
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 1014,
                                                                    "end": 1113
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1014,
                                                            "end": 1113
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1013,
                                                        "end": 1119
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "transformFlags": 0,
                                                    "start": 1005,
                                                    "end": 1119
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1005,
                                            "end": 1119
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1004,
                                        "end": 1123
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1004,
                                "end": 1124
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1124,
                                "end": 1127
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1129,
                                    "end": 1129
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1127,
                                "end": 1130
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1000,
                            "end": 1130
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1000,
                    "end": 1130
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 994,
                "end": 1132
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 994,
            "end": 1133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1133,
                    "end": 1138
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1143,
                                            "end": 1149
                                        },
                                        "optionalToken": null,
                                        "type": null,
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
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 1153,
                                                            "end": 1161
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
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 1164,
                                                                            "end": 1174
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
                                                                                            "text": "c",
                                                                                            "rawText": "c",
                                                                                            "flags": 97,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1177,
                                                                                            "end": 1189
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 220,
                                                                                            "propertyList": {
                                                                                                "kind": 218,
                                                                                                "properties": [
                                                                                                    {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "d",
                                                                                                        "rawText": "d",
                                                                                                        "flags": 97,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1192,
                                                                                                        "end": 1206
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "e",
                                                                                                        "rawText": "e",
                                                                                                        "flags": 97,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1207,
                                                                                                        "end": 1222
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 17,
                                                                                                "transformFlags": 0,
                                                                                                "start": 1192,
                                                                                                "end": 1222
                                                                                            },
                                                                                            "flags": 49,
                                                                                            "transformFlags": 8,
                                                                                            "start": 1190,
                                                                                            "end": 1234
                                                                                        },
                                                                                        "flags": 33,
                                                                                        "transformFlags": 128,
                                                                                        "start": 1177,
                                                                                        "end": 1234
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 17,
                                                                                "transformFlags": 0,
                                                                                "start": 1177,
                                                                                "end": 1234
                                                                            },
                                                                            "flags": 49,
                                                                            "transformFlags": 8,
                                                                            "start": 1175,
                                                                            "end": 1244
                                                                        },
                                                                        "flags": 33,
                                                                        "transformFlags": 128,
                                                                        "start": 1164,
                                                                        "end": 1244
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 1164,
                                                                "end": 1244
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 1162,
                                                            "end": 1252
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 1153,
                                                        "end": 1252
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 1153,
                                                "end": 1252
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 1151,
                                            "end": 1258
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1139,
                                        "end": 1258
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1143,
                                "end": 1262
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1262,
                                "end": 1265
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1267,
                                    "end": 1267
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1265,
                                "end": 1268
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1139,
                            "end": 1268
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1139,
                    "end": 1268
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1133,
                "end": 1270
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1133,
            "end": 1271
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1271,
                    "end": 1276
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 1282,
                                                        "end": 1288
                                                    },
                                                    "value": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 1299,
                                                                                "end": 1309
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 1310,
                                                                                "end": 1321
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "transformFlags": 0,
                                                                        "start": 1299,
                                                                        "end": 1321
                                                                    },
                                                                    "flags": 49,
                                                                    "transformFlags": 8,
                                                                    "start": 1291,
                                                                    "end": 1329
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 1291,
                                                            "end": 1329
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 1289,
                                                        "end": 1335
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1282,
                                                    "end": 1335
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1282,
                                            "end": 1335
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1281,
                                        "end": 1339
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1281,
                                "end": 1340
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1340,
                                "end": 1343
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1345,
                                    "end": 1345
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1343,
                                "end": 1346
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1277,
                            "end": 1346
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1277,
                    "end": 1346
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1271,
                "end": 1348
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1271,
            "end": 1349
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1349,
                    "end": 1354
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1359,
                                            "end": 1365
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1377,
                                                                    "end": 1387
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1388,
                                                                    "end": 1399
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1377,
                                                            "end": 1399
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1369,
                                                        "end": 1407
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 1369,
                                                "end": 1407
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 1367,
                                            "end": 1413
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1355,
                                        "end": 1413
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1359,
                                "end": 1417
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1417,
                                "end": 1420
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1420,
                                "end": 1422
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1355,
                            "end": 1422
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1355,
                    "end": 1422
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1349,
                "end": 1424
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1349,
            "end": 1425
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1425,
                    "end": 1430
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 1450,
                                                                            "end": 1460
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 1461,
                                                                            "end": 1472
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 1450,
                                                                    "end": 1472
                                                                },
                                                                "flags": 49,
                                                                "transformFlags": 0,
                                                                "start": 1442,
                                                                "end": 1480
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1442,
                                                        "end": 1480
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 1436,
                                                    "end": 1486
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1436,
                                            "end": 1486
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1435,
                                        "end": 1490
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1435,
                                "end": 1491
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1491,
                                "end": 1494
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1496,
                                    "end": 1496
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1494,
                                "end": 1497
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1431,
                            "end": 1497
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1431,
                    "end": 1497
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1425,
                "end": 1499
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1425,
            "end": 1500
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1500,
                    "end": 1505
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 201,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 212,
                                                                                        "propertyList": {
                                                                                            "kind": 213,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "a",
                                                                                                    "rawText": "a",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1547,
                                                                                                    "end": 1561
                                                                                                },
                                                                                                {
                                                                                                    "kind": 329,
                                                                                                    "key": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "b",
                                                                                                        "rawText": "b",
                                                                                                        "flags": 97,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1562,
                                                                                                        "end": 1576
                                                                                                    },
                                                                                                    "value": {
                                                                                                        "kind": 220,
                                                                                                        "propertyList": {
                                                                                                            "kind": 218,
                                                                                                            "properties": [
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "c",
                                                                                                                    "rawText": "c",
                                                                                                                    "flags": 97,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 1579,
                                                                                                                    "end": 1595
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": 219,
                                                                                                                    "asteriskToken": null,
                                                                                                                    "left": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "d",
                                                                                                                        "rawText": "d",
                                                                                                                        "flags": 97,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 1596,
                                                                                                                        "end": 1612
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 220,
                                                                                                                        "propertyList": {
                                                                                                                            "kind": 218,
                                                                                                                            "properties": [
                                                                                                                                {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "e",
                                                                                                                                    "rawText": "e",
                                                                                                                                    "flags": 97,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 1615,
                                                                                                                                    "end": 1633
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "f",
                                                                                                                                    "rawText": "f",
                                                                                                                                    "flags": 97,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 1634,
                                                                                                                                    "end": 1653
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 17,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 1615,
                                                                                                                            "end": 1653
                                                                                                                        },
                                                                                                                        "flags": 49,
                                                                                                                        "transformFlags": 8,
                                                                                                                        "start": 1613,
                                                                                                                        "end": 1669
                                                                                                                    },
                                                                                                                    "flags": 33,
                                                                                                                    "transformFlags": 128,
                                                                                                                    "start": 1596,
                                                                                                                    "end": 1669
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 17,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1579,
                                                                                                            "end": 1669
                                                                                                        },
                                                                                                        "flags": 49,
                                                                                                        "transformFlags": 8,
                                                                                                        "start": 1577,
                                                                                                        "end": 1683
                                                                                                    },
                                                                                                    "initializer": null,
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1562,
                                                                                                    "end": 1683
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1547,
                                                                                            "end": 1683
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1535,
                                                                                        "end": 1695
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 1535,
                                                                                "end": 1695
                                                                            },
                                                                            "flags": 33,
                                                                            "transformFlags": 0,
                                                                            "start": 1525,
                                                                            "end": 1705
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 1525,
                                                                    "end": 1705
                                                                },
                                                                "flags": 33,
                                                                "transformFlags": 0,
                                                                "start": 1517,
                                                                "end": 1713
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1517,
                                                        "end": 1713
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 1511,
                                                    "end": 1719
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1511,
                                            "end": 1719
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1510,
                                        "end": 1723
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1510,
                                "end": 1724
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1724,
                                "end": 1727
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1729,
                                    "end": 1729
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1727,
                                "end": 1730
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1506,
                            "end": 1730
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1506,
                    "end": 1730
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1500,
                "end": 1732
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1500,
            "end": 1733
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1733,
                    "end": 1738
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 1743,
                                            "end": 1751
                                        },
                                        "left": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 1752,
                                                        "end": 1760
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 1761,
                                                        "end": 1770
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 1752,
                                                "end": 1770
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1751,
                                            "end": 1776
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 1743,
                                        "end": 1776
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 1743,
                                "end": 1780
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1780,
                                "end": 1783
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1785,
                                    "end": 1785
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1783,
                                "end": 1786
                            },
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 1739,
                            "end": 1786
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1739,
                    "end": 1786
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1733,
                "end": 1788
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1733,
            "end": 1789
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1789,
                    "end": 1794
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 1799,
                                            "end": 1807
                                        },
                                        "left": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1816,
                                                                    "end": 1826
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1827,
                                                                    "end": 1838
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 1816,
                                                            "end": 1838
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 1808,
                                                        "end": 1846
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "transformFlags": 0,
                                                "start": 1808,
                                                "end": 1846
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1807,
                                            "end": 1852
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 1799,
                                        "end": 1852
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 1799,
                                "end": 1856
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1856,
                                "end": 1859
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1861,
                                    "end": 1861
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1859,
                                "end": 1862
                            },
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 1795,
                            "end": 1862
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1795,
                    "end": 1862
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1789,
                "end": 1864
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1789,
            "end": 1865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1865,
                    "end": 1870
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 65,
                                                        "transformFlags": 0,
                                                        "start": 1876,
                                                        "end": 1884
                                                    },
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 1893,
                                                                                "end": 1903
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 1904,
                                                                                "end": 1915
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "transformFlags": 0,
                                                                        "start": 1893,
                                                                        "end": 1915
                                                                    },
                                                                    "flags": 49,
                                                                    "transformFlags": 8,
                                                                    "start": 1885,
                                                                    "end": 1923
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 1885,
                                                            "end": 1923
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 1884,
                                                        "end": 1929
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "transformFlags": 0,
                                                    "start": 1876,
                                                    "end": 1929
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1876,
                                            "end": 1929
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1875,
                                        "end": 1933
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1875,
                                "end": 1934
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1934,
                                "end": 1937
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1939,
                                    "end": 1939
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1937,
                                "end": 1940
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1871,
                            "end": 1940
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1871,
                    "end": 1940
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1865,
                "end": 1942
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1865,
            "end": 1943
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1943,
                    "end": 1948
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1953,
                                            "end": 1959
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1964,
                                                                    "end": 1972
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1973,
                                                                    "end": 1982
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1964,
                                                            "end": 1982
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1963,
                                                        "end": 1988
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1963,
                                                "end": 1988
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 1961,
                                            "end": 1989
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1949,
                                        "end": 1989
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1953,
                                "end": 1993
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1993,
                                "end": 1996
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1998,
                                    "end": 1998
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1996,
                                "end": 1999
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1949,
                            "end": 1999
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1949,
                    "end": 1999
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1943,
                "end": 2001
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1943,
            "end": 2002
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2002,
                    "end": 2007
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 2012,
                                            "end": 2018
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 2024,
                                                                            "end": 2032
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 2033,
                                                                            "end": 2042
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 2024,
                                                                    "end": 2042
                                                                },
                                                                "flags": 49,
                                                                "transformFlags": 0,
                                                                "start": 2023,
                                                                "end": 2048
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 34,
                                                        "transformFlags": 0,
                                                        "start": 2023,
                                                        "end": 2049
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 2049,
                                                        "end": 2052
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2054,
                                                            "end": 2054
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 2052,
                                                        "end": 2055
                                                    },
                                                    "flags": 34,
                                                    "transformFlags": 0,
                                                    "start": 2022,
                                                    "end": 2055
                                                },
                                                "flags": 2020,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 2056
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2057,
                                                "end": 2057
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 2020,
                                            "end": 2058
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2008,
                                        "end": 2058
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2012,
                                "end": 2062
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2062,
                                "end": 2065
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2067,
                                    "end": 2067
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2065,
                                "end": 2068
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2008,
                            "end": 2068
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2008,
                    "end": 2068
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 2002,
                "end": 2070
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2002,
            "end": 2071
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2071,
                    "end": 2076
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 2081,
                                            "end": 2087
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2089,
                                                "end": 2091
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2093,
                                                                    "end": 2101
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2102,
                                                                    "end": 2111
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 2093,
                                                            "end": 2111
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 2092,
                                                        "end": 2117
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2092,
                                                "end": 2117
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 2089,
                                            "end": 2118
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2077,
                                        "end": 2118
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2081,
                                "end": 2122
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2122,
                                "end": 2125
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2127,
                                    "end": 2127
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2125,
                                "end": 2128
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2077,
                            "end": 2128
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2077,
                    "end": 2128
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 2071,
                "end": 2130
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2071,
            "end": 2131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2131,
                    "end": 2136
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 2141,
                                            "end": 2147
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [
                                                    {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2152,
                                                                    "end": 2160
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2161,
                                                                    "end": 2170
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2152,
                                                            "end": 2170
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 0,
                                                        "start": 2151,
                                                        "end": 2176
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 2151,
                                                "end": 2177
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 2177,
                                                "end": 2180
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2182,
                                                    "end": 2182
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2180,
                                                "end": 2183
                                            },
                                            "flags": 34,
                                            "transformFlags": 0,
                                            "start": 2149,
                                            "end": 2183
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2137,
                                        "end": 2183
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2141,
                                "end": 2187
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2187,
                                "end": 2190
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2192,
                                    "end": 2192
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2190,
                                "end": 2193
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2137,
                            "end": 2193
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2137,
                    "end": 2193
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 2131,
                "end": 2195
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2131,
            "end": 2196
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2196,
                    "end": 2201
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 2206,
                                            "end": 2212
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2214,
                                                "end": 2216
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2216,
                                                "end": 2218
                                            },
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 2218,
                                                    "end": 2226
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 2228,
                                                                        "end": 2238
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 2239,
                                                                        "end": 2250
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 2228,
                                                                "end": 2250
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 2227,
                                                            "end": 2258
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2227,
                                                    "end": 2258
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 2218,
                                                "end": 2259
                                            },
                                            "flags": 96,
                                            "transformFlags": 1024,
                                            "start": 2214,
                                            "end": 2259
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2202,
                                        "end": 2259
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2206,
                                "end": 2263
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2263,
                                "end": 2266
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2268,
                                    "end": 2268
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2266,
                                "end": 2269
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2202,
                            "end": 2269
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2202,
                    "end": 2269
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 2196,
                "end": 2271
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2196,
            "end": 2272
        }
    ],
    "isModule": false,
    "source": "fooooooooooooooooooooooooooooooooooooooooooooooooooo(action => next =>\n    dispatch(action),\n);\n\nfoo(\n  ({\n    a,\n\n    b\n  }) => {}\n);\n\nfoo(\n  ({\n    a,\n    b\n\n  }) => {}\n);\n\nfoo(\n  ({\n    a,\n    b\n  }) => {}\n);\n\nfoo(\n  a,\n  ({\n    a,\n\n    b\n  }) => {}\n)\n\nfoo(\n  ({\n    a,\n\n    b\n  }) => a\n);\n\nfoo(\n  ({\n    a,\n    b\n  }) => a\n);\n\nfoo(\n  ({\n    a,\n    b\n\n  }) => a\n);\n\nfoo(\n  ({\n    a: {\n      a,\n\n      b\n    }\n  }) => {}\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c,\n\n        d\n      }\n    }\n  }) => {}\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c: {\n          d,\n\n          e\n        }\n      }\n    }\n  }) => {}\n);\n\nfoo(\n  ({\n    a: {\n      a,\n\n      b\n    }\n  }) => a\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c,\n\n        d\n      }\n    }\n  }) => a\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c: {\n          d,\n\n          e\n        }\n      }\n    }\n  }) => a\n);\n\nfoo(\n  ([\n    {\n      a: {\n        b: {\n          c: {\n            d,\n\n            e\n          }\n        }\n      }\n    }\n  ]) => {}\n);\n\nfoo(\n  ([\n    ...{\n      a: {\n        b: {\n          c: {\n            d,\n\n            e\n          }\n        }\n      }\n    }\n  ]) => {}\n);\n\nfoo(\n  (\n    n = {\n      a: {\n        b: {\n          c: {\n            d,\n\n            e\n          }\n        }\n      }\n    }\n  ) => {}\n);\n\nfoo(\n  ({\n    x: [\n      {\n        a,\n\n        b\n      }\n    ]\n  }) => {}\n);\n\nfoo(\n  (\n    a = [\n      {\n        a,\n\n        b\n      }\n    ]\n  ) => a\n);\n\nfoo(\n  ([\n    [\n      {\n        a,\n\n        b\n      }\n    ]\n  ]) => {}\n);\n\nfoo(\n  ([\n    [\n      [\n        [\n          {\n            a,\n            b: {\n              c,\n              d: {\n                e,\n\n                f\n              }\n            }\n          }\n        ]\n      ]\n    ]\n  ]) => {}\n);\n\nfoo(\n  (\n    ...{\n      a,\n\n      b\n    }\n  ) => {}\n);\n\nfoo(\n  (\n    ...[\n      {\n        a,\n\n        b\n      }\n    ]\n  ) => {}\n);\n\nfoo(\n  ([\n    ...[\n      {\n        a,\n\n        b\n      }\n    ]\n  ]) => {}\n);\n\nfoo(\n  (\n    a = [{\n      a,\n\n      b\n    }]\n  ) => {}\n);\n\nfoo(\n  (\n    a = (({\n      a,\n\n      b\n    }) => {})()\n  ) => {}\n);\n\nfoo(\n  (\n    a = f({\n      a,\n\n      b\n    })\n  ) => {}\n);\n\nfoo(\n  (\n    a = ({\n      a,\n\n      b\n    }) => {}\n  ) => {}\n);\n\nfoo(\n  (\n    a = 1 +\n      f({\n        a,\n\n        b\n      })\n  ) => {}\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2272
}
```

### Printed

```javascript
fooooooooooooooooooooooooooooooooooooooooooooooooooo(action => next =>
  dispatch(action));
foo(({ a, b }) => {});

foo(({ a, b }) => {});

foo(({ a, b }) => {});

foo(a, ({ a, b }) => {});

foo(({ a, b }) => a);

foo(({ a, b }) => a);

foo(({ a, b }) => a);

foo(({ a: { a, b } }) => {});

foo(({ a: { b: { c, d } } }) => {});

foo(({ a: { b: { c: { d, e } } } }) => {});

foo(({ a: { a, b } }) => a);

foo(({ a: { b: { c, d } } }) => a);

foo(({ a: { b: { c: { d, e } } } }) => a);

foo(([{ a: { b: { c: { d, e } } } }]) => {});

foo(([...{ a: { b: { c: { d, e } } } }]) => {});

foo((n = { a: { b: { c: { d, e } } } }) => {});

foo(({ x: [{ a, b }] }) => {});

foo((a = [{ a, b }]) => a);

foo(([[{ a, b }]]) => {});

foo(([[[[{ a, b: { c, d: { e, f } } }]]]]) => {});

foo((...{ a, b }) => {});

foo((...[{ a, b }]) => {});

foo(([...[{ a, b }]]) => {});

foo((a = [{ a, b }]) => {});

foo((a = (({ a, b }) => {})()) => {});

foo((a = f({ a, b })) => {});

foo((a = ({ a, b }) => {}) => {});

foo((a = 1 + f({ a, b })) => {});

```

### Diagnostics

```javascript
✔ No errors
```

