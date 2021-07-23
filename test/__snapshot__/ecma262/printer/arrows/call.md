# Kataw parser test case

## Input

`````js
Seq(typeDef.interface.groups).forEach(group =>
  Seq(group.members).forEach((member, memberName) =>
    markdownDoc(
      member.doc,
      { typePath: typePath.concat(memberName.slice(1)),
       signatures: member.signatures }
    )
  )
)

const promiseFromCallback = fn =>
  new Promise((resolve, reject) =>
    fn((err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  );

runtimeAgent.getProperties(
  objectId,
  false, // ownProperties
  false, // accessorPropertiesOnly
  false, // generatePreview
  (error, properties, internalProperties) => {
    return 1
  },
);

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
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "Seq",
                            "rawText": "Seq",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "typeDef",
                                            "rawText": "typeDef",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "interface",
                                            "rawText": "interface",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 21
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 4,
                                        "end": 21
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "groups",
                                        "rawText": "groups",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 4,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 28
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "forEach",
                        "rawText": "forEach",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 37
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 37
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
                                "text": "group",
                                "rawText": "group",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 43
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "Seq",
                                            "rawText": "Seq",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 52
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "group",
                                                        "rawText": "group",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 58
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "members",
                                                        "rawText": "members",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 59,
                                                        "end": 66
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 53,
                                                    "end": 66
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 66
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 46,
                                        "end": 67
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "forEach",
                                        "rawText": "forEach",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 46,
                                    "end": 75
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
                                                        "kind": 134299649,
                                                        "text": "member",
                                                        "rawText": "member",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 77,
                                                        "end": 83
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "memberName",
                                                        "rawText": "memberName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 84,
                                                        "end": 95
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 77,
                                                "end": 96
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 96,
                                                "end": 99
                                            },
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "markdownDoc",
                                                    "rawText": "markdownDoc",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 99,
                                                    "end": 115
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "member",
                                                                "rawText": "member",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 116,
                                                                "end": 129
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "doc",
                                                                "rawText": "doc",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 130,
                                                                "end": 133
                                                            },
                                                            "flags": 97,
                                                            "transformFlags": 2,
                                                            "start": 116,
                                                            "end": 133
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
                                                                            "text": "typePath",
                                                                            "rawText": "typePath",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 142,
                                                                            "end": 151
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 134299649,
                                                                                    "text": "typePath",
                                                                                    "rawText": "typePath",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 152,
                                                                                    "end": 161
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "concat",
                                                                                    "rawText": "concat",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 162,
                                                                                    "end": 168
                                                                                },
                                                                                "flags": 96,
                                                                                "transformFlags": 2,
                                                                                "start": 142,
                                                                                "end": 168
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 129,
                                                                                            "member": {
                                                                                                "kind": 134299649,
                                                                                                "text": "memberName",
                                                                                                "rawText": "memberName",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 169,
                                                                                                "end": 179
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "slice",
                                                                                                "rawText": "slice",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 180,
                                                                                                "end": 185
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "transformFlags": 2,
                                                                                            "start": 169,
                                                                                            "end": 185
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 1,
                                                                                                    "rawText": "1",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 186,
                                                                                                    "end": 187
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 186,
                                                                                            "end": 187
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 1,
                                                                                        "start": 169,
                                                                                        "end": 188
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 169,
                                                                                "end": 188
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 1,
                                                                            "start": 142,
                                                                            "end": 189
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 142,
                                                                        "end": 189
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "signatures",
                                                                            "rawText": "signatures",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 190,
                                                                            "end": 208
                                                                        },
                                                                        "right": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "member",
                                                                                "rawText": "member",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 209,
                                                                                "end": 216
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "signatures",
                                                                                "rawText": "signatures",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 217,
                                                                                "end": 227
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 2,
                                                                            "start": 190,
                                                                            "end": 227
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 190,
                                                                        "end": 227
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 142,
                                                                "end": 227
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 134,
                                                            "end": 229
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 116,
                                                    "end": 229
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 99,
                                                "end": 235
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 76,
                                            "end": 235
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 235
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 46,
                                "end": 239
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 239
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 239
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 241
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 241
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 241,
                "end": 248
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "promiseFromCallback",
                            "rawText": "promiseFromCallback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 248,
                            "end": 268
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 270,
                                "end": 273
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 276
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 276,
                                    "end": 282
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Promise",
                                    "rawText": "Promise",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 282,
                                    "end": 290
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
                                                        "kind": 134299649,
                                                        "text": "resolve",
                                                        "rawText": "resolve",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 292,
                                                        "end": 299
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "reject",
                                                        "rawText": "reject",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 300,
                                                        "end": 307
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 292,
                                                "end": 308
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 308,
                                                "end": 311
                                            },
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "fn",
                                                    "rawText": "fn",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 311,
                                                    "end": 318
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
                                                                        "kind": 134299649,
                                                                        "text": "err",
                                                                        "rawText": "err",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 320,
                                                                        "end": 323
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "result",
                                                                        "rawText": "result",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 324,
                                                                        "end": 331
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 320,
                                                                "end": 332
                                                            },
                                                            "returnType": null,
                                                            "arrowToken": {
                                                                "kind": 10,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 332,
                                                                "end": 335
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 164,
                                                                            "ifKeyword": {
                                                                                "kind": 37757019,
                                                                                "flags": 81,
                                                                                "transformFlags": 0,
                                                                                "start": 337,
                                                                                "end": 346
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "err",
                                                                                "rawText": "err",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 348,
                                                                                "end": 351
                                                                            },
                                                                            "consequent": {
                                                                                "kind": 161,
                                                                                "returnKeyword": {
                                                                                    "kind": 37757022,
                                                                                    "flags": 80,
                                                                                    "transformFlags": 0,
                                                                                    "start": 352,
                                                                                    "end": 359
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "reject",
                                                                                        "rawText": "reject",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 359,
                                                                                        "end": 366
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 134299649,
                                                                                                "text": "err",
                                                                                                "rawText": "err",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 367,
                                                                                                "end": 370
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 367,
                                                                                        "end": 370
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 1,
                                                                                    "start": 359,
                                                                                    "end": 371
                                                                                },
                                                                                "flags": 80,
                                                                                "transformFlags": 256,
                                                                                "start": 352,
                                                                                "end": 372
                                                                            },
                                                                            "elseKeyword": null,
                                                                            "alternate": null,
                                                                            "flags": 81,
                                                                            "transformFlags": 0,
                                                                            "start": 337,
                                                                            "end": 372
                                                                        },
                                                                        {
                                                                            "kind": 161,
                                                                            "returnKeyword": {
                                                                                "kind": 37757022,
                                                                                "flags": 81,
                                                                                "transformFlags": 0,
                                                                                "start": 372,
                                                                                "end": 385
                                                                            },
                                                                            "expression": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "resolve",
                                                                                    "rawText": "resolve",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 385,
                                                                                    "end": 393
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 134299649,
                                                                                            "text": "result",
                                                                                            "rawText": "result",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 394,
                                                                                            "end": 400
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 394,
                                                                                    "end": 400
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 1,
                                                                                "start": 385,
                                                                                "end": 401
                                                                            },
                                                                            "flags": 81,
                                                                            "transformFlags": 256,
                                                                            "start": 372,
                                                                            "end": 402
                                                                        }
                                                                    ],
                                                                    "flags": 33,
                                                                    "transformFlags": 0,
                                                                    "start": 337,
                                                                    "end": 402
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 335,
                                                                "end": 408
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 319,
                                                            "end": 408
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 319,
                                                    "end": 408
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 311,
                                                "end": 409
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 291,
                                            "end": 409
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 291,
                                    "end": 409
                                },
                                "flags": 97,
                                "transformFlags": 2048,
                                "start": 276,
                                "end": 413
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 270,
                            "end": 413
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 248,
                        "end": 413
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 248,
                "end": 413
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 241,
            "end": 414
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "runtimeAgent",
                        "rawText": "runtimeAgent",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 414,
                        "end": 428
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "getProperties",
                        "rawText": "getProperties",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 429,
                        "end": 442
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 414,
                    "end": 442
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "objectId",
                            "rawText": "objectId",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 443,
                            "end": 454
                        },
                        {
                            "kind": 205586437,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 455,
                            "end": 463
                        },
                        {
                            "kind": 205586437,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 464,
                            "end": 489
                        },
                        {
                            "kind": 205586437,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 490,
                            "end": 524
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "error",
                                        "rawText": "error",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 548,
                                        "end": 553
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "properties",
                                        "rawText": "properties",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 554,
                                        "end": 565
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "internalProperties",
                                        "rawText": "internalProperties",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 566,
                                        "end": 585
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 548,
                                "end": 586
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 586,
                                "end": 589
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 591,
                                                "end": 602
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 602,
                                                "end": 604
                                            },
                                            "flags": 81,
                                            "transformFlags": 256,
                                            "start": 591,
                                            "end": 604
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 591,
                                    "end": 604
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 589,
                                "end": 608
                            },
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 525,
                            "end": 608
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 443,
                    "end": 609
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 414,
                "end": 611
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 414,
            "end": 612
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "fooooooooooooooooooooooooooooooooooooooooooooooooooo",
                    "rawText": "fooooooooooooooooooooooooooooooooooooooooooooooooooo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 612,
                    "end": 666
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
                                "start": 667,
                                "end": 673
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 673,
                                "end": 676
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
                                    "start": 676,
                                    "end": 681
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 681,
                                    "end": 684
                                },
                                "contents": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "dispatch",
                                        "rawText": "dispatch",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 684,
                                        "end": 697
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
                                                "start": 698,
                                                "end": 704
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 698,
                                        "end": 704
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 684,
                                    "end": 705
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 676,
                                "end": 705
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 667,
                            "end": 705
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 667,
                    "end": 706
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 612,
                "end": 708
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 612,
            "end": 709
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
                    "start": 709,
                    "end": 714
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
                                                    "start": 720,
                                                    "end": 726
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 727,
                                                    "end": 734
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 720,
                                            "end": 734
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 719,
                                        "end": 738
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 719,
                                "end": 739
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 739,
                                "end": 742
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 744,
                                    "end": 744
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 742,
                                "end": 745
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 715,
                            "end": 745
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 715,
                    "end": 745
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 709,
                "end": 747
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 709,
            "end": 748
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
                    "start": 748,
                    "end": 753
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
                                                    "start": 759,
                                                    "end": 765
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 766,
                                                    "end": 772
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 759,
                                            "end": 772
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 758,
                                        "end": 777
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 758,
                                "end": 778
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 778,
                                "end": 781
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 783,
                                    "end": 783
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 781,
                                "end": 784
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 754,
                            "end": 784
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 754,
                    "end": 784
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 748,
                "end": 786
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 748,
            "end": 787
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
                    "start": 787,
                    "end": 792
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
                                                    "start": 798,
                                                    "end": 804
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 805,
                                                    "end": 811
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 798,
                                            "end": 811
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 797,
                                        "end": 815
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 797,
                                "end": 816
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 816,
                                "end": 819
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 821,
                                    "end": 821
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 819,
                                "end": 822
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 793,
                            "end": 822
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 793,
                    "end": 822
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 787,
                "end": 824
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 787,
            "end": 825
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
                    "start": 825,
                    "end": 830
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
                            "start": 831,
                            "end": 835
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
                                                    "start": 841,
                                                    "end": 847
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 848,
                                                    "end": 855
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 841,
                                            "end": 855
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 840,
                                        "end": 859
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 840,
                                "end": 860
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 860,
                                "end": 863
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 865,
                                    "end": 865
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 863,
                                "end": 866
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 836,
                            "end": 866
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 831,
                    "end": 866
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 825,
                "end": 868
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 825,
            "end": 868
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
                    "start": 868,
                    "end": 873
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
                                                    "start": 879,
                                                    "end": 885
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 886,
                                                    "end": 893
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 879,
                                            "end": 893
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 878,
                                        "end": 897
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 878,
                                "end": 898
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 898,
                                "end": 901
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 901,
                                "end": 903
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 874,
                            "end": 903
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 874,
                    "end": 903
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 868,
                "end": 905
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 868,
            "end": 906
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
                    "start": 906,
                    "end": 911
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
                                                    "start": 917,
                                                    "end": 923
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 924,
                                                    "end": 930
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 917,
                                            "end": 930
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 916,
                                        "end": 934
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 916,
                                "end": 935
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 935,
                                "end": 938
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 938,
                                "end": 940
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 912,
                            "end": 940
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 912,
                    "end": 940
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 906,
                "end": 942
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 906,
            "end": 943
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
                    "start": 943,
                    "end": 948
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
                                                    "start": 954,
                                                    "end": 960
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 961,
                                                    "end": 967
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 954,
                                            "end": 967
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 953,
                                        "end": 972
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 953,
                                "end": 973
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 973,
                                "end": 976
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 976,
                                "end": 978
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 949,
                            "end": 978
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 949,
                    "end": 978
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 943,
                "end": 980
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 943,
            "end": 981
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
                    "start": 981,
                    "end": 986
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
                                                        "start": 992,
                                                        "end": 998
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
                                                                    "start": 1001,
                                                                    "end": 1009
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1010,
                                                                    "end": 1019
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1001,
                                                            "end": 1019
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 999,
                                                        "end": 1025
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 992,
                                                    "end": 1025
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 992,
                                            "end": 1025
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 991,
                                        "end": 1029
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 991,
                                "end": 1030
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1030,
                                "end": 1033
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1035,
                                    "end": 1035
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1033,
                                "end": 1036
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 987,
                            "end": 1036
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 987,
                    "end": 1036
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 981,
                "end": 1038
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 981,
            "end": 1039
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
                    "start": 1039,
                    "end": 1044
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
                                                        "start": 1050,
                                                        "end": 1056
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
                                                                        "start": 1059,
                                                                        "end": 1067
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
                                                                                    "start": 1070,
                                                                                    "end": 1080
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "d",
                                                                                    "rawText": "d",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1081,
                                                                                    "end": 1092
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 1070,
                                                                            "end": 1092
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 1068,
                                                                        "end": 1100
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 1059,
                                                                    "end": 1100
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1059,
                                                            "end": 1100
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1057,
                                                        "end": 1106
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1050,
                                                    "end": 1106
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1050,
                                            "end": 1106
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1049,
                                        "end": 1110
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1049,
                                "end": 1111
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1111,
                                "end": 1114
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1116,
                                    "end": 1116
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1114,
                                "end": 1117
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1045,
                            "end": 1117
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1045,
                    "end": 1117
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1039,
                "end": 1119
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1039,
            "end": 1120
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
                    "start": 1120,
                    "end": 1125
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
                                                        "start": 1131,
                                                        "end": 1137
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
                                                                        "start": 1140,
                                                                        "end": 1148
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
                                                                                        "start": 1151,
                                                                                        "end": 1161
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
                                                                                                    "start": 1164,
                                                                                                    "end": 1176
                                                                                                },
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "e",
                                                                                                    "rawText": "e",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1177,
                                                                                                    "end": 1190
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1164,
                                                                                            "end": 1190
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 8,
                                                                                        "start": 1162,
                                                                                        "end": 1200
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 128,
                                                                                    "start": 1151,
                                                                                    "end": 1200
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 1151,
                                                                            "end": 1200
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 1149,
                                                                        "end": 1208
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 1140,
                                                                    "end": 1208
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1140,
                                                            "end": 1208
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1138,
                                                        "end": 1214
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1131,
                                                    "end": 1214
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1131,
                                            "end": 1214
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1130,
                                        "end": 1218
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1130,
                                "end": 1219
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1219,
                                "end": 1222
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1224,
                                    "end": 1224
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1222,
                                "end": 1225
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1126,
                            "end": 1225
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1126,
                    "end": 1225
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1120,
                "end": 1227
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1120,
            "end": 1228
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
                    "start": 1228,
                    "end": 1233
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
                                                        "start": 1239,
                                                        "end": 1245
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
                                                                    "start": 1248,
                                                                    "end": 1256
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 1257,
                                                                    "end": 1266
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1248,
                                                            "end": 1266
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1246,
                                                        "end": 1272
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1239,
                                                    "end": 1272
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1239,
                                            "end": 1272
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1238,
                                        "end": 1276
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1238,
                                "end": 1277
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1277,
                                "end": 1280
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1280,
                                "end": 1282
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1234,
                            "end": 1282
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1234,
                    "end": 1282
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1228,
                "end": 1284
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1228,
            "end": 1285
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
                    "start": 1285,
                    "end": 1290
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
                                                        "start": 1296,
                                                        "end": 1302
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
                                                                        "start": 1305,
                                                                        "end": 1313
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
                                                                                    "start": 1316,
                                                                                    "end": 1326
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "d",
                                                                                    "rawText": "d",
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1327,
                                                                                    "end": 1338
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 1316,
                                                                            "end": 1338
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 1314,
                                                                        "end": 1346
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 1305,
                                                                    "end": 1346
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1305,
                                                            "end": 1346
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1303,
                                                        "end": 1352
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1296,
                                                    "end": 1352
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1296,
                                            "end": 1352
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1295,
                                        "end": 1356
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1295,
                                "end": 1357
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1357,
                                "end": 1360
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1360,
                                "end": 1362
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1291,
                            "end": 1362
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1291,
                    "end": 1362
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1285,
                "end": 1364
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1285,
            "end": 1365
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
                    "start": 1365,
                    "end": 1370
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
                                                        "start": 1376,
                                                        "end": 1382
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
                                                                        "start": 1385,
                                                                        "end": 1393
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
                                                                                        "start": 1396,
                                                                                        "end": 1406
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
                                                                                                    "start": 1409,
                                                                                                    "end": 1421
                                                                                                },
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "e",
                                                                                                    "rawText": "e",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1422,
                                                                                                    "end": 1435
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1409,
                                                                                            "end": 1435
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 8,
                                                                                        "start": 1407,
                                                                                        "end": 1445
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 128,
                                                                                    "start": 1396,
                                                                                    "end": 1445
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 1396,
                                                                            "end": 1445
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 1394,
                                                                        "end": 1453
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 1385,
                                                                    "end": 1453
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1385,
                                                            "end": 1453
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1383,
                                                        "end": 1459
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1376,
                                                    "end": 1459
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1376,
                                            "end": 1459
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1375,
                                        "end": 1463
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1375,
                                "end": 1464
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1464,
                                "end": 1467
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1467,
                                "end": 1469
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1371,
                            "end": 1469
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1371,
                    "end": 1469
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1365,
                "end": 1471
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1365,
            "end": 1472
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
                    "start": 1472,
                    "end": 1477
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
                                                                    "start": 1489,
                                                                    "end": 1497
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
                                                                                    "start": 1500,
                                                                                    "end": 1510
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
                                                                                                    "start": 1513,
                                                                                                    "end": 1525
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
                                                                                                                "start": 1528,
                                                                                                                "end": 1542
                                                                                                            },
                                                                                                            {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "e",
                                                                                                                "rawText": "e",
                                                                                                                "flags": 97,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 1543,
                                                                                                                "end": 1558
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 17,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1528,
                                                                                                        "end": 1558
                                                                                                    },
                                                                                                    "flags": 49,
                                                                                                    "transformFlags": 8,
                                                                                                    "start": 1526,
                                                                                                    "end": 1570
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "transformFlags": 128,
                                                                                                "start": 1513,
                                                                                                "end": 1570
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 17,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1513,
                                                                                        "end": 1570
                                                                                    },
                                                                                    "flags": 49,
                                                                                    "transformFlags": 8,
                                                                                    "start": 1511,
                                                                                    "end": 1580
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 1500,
                                                                                "end": 1580
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "transformFlags": 0,
                                                                        "start": 1500,
                                                                        "end": 1580
                                                                    },
                                                                    "flags": 49,
                                                                    "transformFlags": 8,
                                                                    "start": 1498,
                                                                    "end": 1588
                                                                },
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 1489,
                                                                "end": 1588
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 1489,
                                                        "end": 1588
                                                    },
                                                    "flags": 49,
                                                    "transformFlags": 0,
                                                    "start": 1483,
                                                    "end": 1594
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1483,
                                            "end": 1594
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1482,
                                        "end": 1598
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1482,
                                "end": 1599
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1599,
                                "end": 1602
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1604,
                                    "end": 1604
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1602,
                                "end": 1605
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1478,
                            "end": 1605
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1478,
                    "end": 1605
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1472,
                "end": 1607
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1472,
            "end": 1608
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
                    "start": 1608,
                    "end": 1613
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
                                                        "start": 1619,
                                                        "end": 1627
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
                                                                        "start": 1628,
                                                                        "end": 1636
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
                                                                                        "start": 1639,
                                                                                        "end": 1649
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
                                                                                                        "start": 1652,
                                                                                                        "end": 1664
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
                                                                                                                    "start": 1667,
                                                                                                                    "end": 1681
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "e",
                                                                                                                    "rawText": "e",
                                                                                                                    "flags": 97,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 1682,
                                                                                                                    "end": 1697
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 17,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1667,
                                                                                                            "end": 1697
                                                                                                        },
                                                                                                        "flags": 49,
                                                                                                        "transformFlags": 8,
                                                                                                        "start": 1665,
                                                                                                        "end": 1709
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 128,
                                                                                                    "start": 1652,
                                                                                                    "end": 1709
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 17,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1652,
                                                                                            "end": 1709
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 8,
                                                                                        "start": 1650,
                                                                                        "end": 1719
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 128,
                                                                                    "start": 1639,
                                                                                    "end": 1719
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 17,
                                                                            "transformFlags": 0,
                                                                            "start": 1639,
                                                                            "end": 1719
                                                                        },
                                                                        "flags": 49,
                                                                        "transformFlags": 8,
                                                                        "start": 1637,
                                                                        "end": 1727
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 1628,
                                                                    "end": 1727
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1628,
                                                            "end": 1727
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1627,
                                                        "end": 1733
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "transformFlags": 4096,
                                                    "start": 1619,
                                                    "end": 1733
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1619,
                                            "end": 1733
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1618,
                                        "end": 1737
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1618,
                                "end": 1738
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1738,
                                "end": 1741
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1743,
                                    "end": 1743
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1741,
                                "end": 1744
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1614,
                            "end": 1744
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1614,
                    "end": 1744
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1608,
                "end": 1746
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1608,
            "end": 1747
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
                    "start": 1747,
                    "end": 1752
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
                                            "start": 1757,
                                            "end": 1763
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
                                                            "start": 1767,
                                                            "end": 1775
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
                                                                            "start": 1778,
                                                                            "end": 1788
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
                                                                                            "start": 1791,
                                                                                            "end": 1803
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
                                                                                                        "start": 1806,
                                                                                                        "end": 1820
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "e",
                                                                                                        "rawText": "e",
                                                                                                        "flags": 97,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1821,
                                                                                                        "end": 1836
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 17,
                                                                                                "transformFlags": 0,
                                                                                                "start": 1806,
                                                                                                "end": 1836
                                                                                            },
                                                                                            "flags": 49,
                                                                                            "transformFlags": 8,
                                                                                            "start": 1804,
                                                                                            "end": 1848
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 128,
                                                                                        "start": 1791,
                                                                                        "end": 1848
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 17,
                                                                                "transformFlags": 0,
                                                                                "start": 1791,
                                                                                "end": 1848
                                                                            },
                                                                            "flags": 49,
                                                                            "transformFlags": 8,
                                                                            "start": 1789,
                                                                            "end": 1858
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 1778,
                                                                        "end": 1858
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 1778,
                                                                "end": 1858
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 1776,
                                                            "end": 1866
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 1767,
                                                        "end": 1866
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 1767,
                                                "end": 1866
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 1765,
                                            "end": 1872
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1753,
                                        "end": 1872
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1757,
                                "end": 1876
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1876,
                                "end": 1879
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1881,
                                    "end": 1881
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1879,
                                "end": 1882
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1753,
                            "end": 1882
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1753,
                    "end": 1882
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1747,
                "end": 1884
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1747,
            "end": 1885
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
                    "start": 1885,
                    "end": 1890
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
                                                        "start": 1896,
                                                        "end": 1902
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
                                                                                "start": 1913,
                                                                                "end": 1923
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 1924,
                                                                                "end": 1935
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "transformFlags": 0,
                                                                        "start": 1913,
                                                                        "end": 1935
                                                                    },
                                                                    "flags": 49,
                                                                    "transformFlags": 8,
                                                                    "start": 1905,
                                                                    "end": 1943
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 1905,
                                                            "end": 1943
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 1903,
                                                        "end": 1949
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1896,
                                                    "end": 1949
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1896,
                                            "end": 1949
                                        },
                                        "flags": 49,
                                        "transformFlags": 0,
                                        "start": 1895,
                                        "end": 1953
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1895,
                                "end": 1954
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1954,
                                "end": 1957
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1959,
                                    "end": 1959
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1957,
                                "end": 1960
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1891,
                            "end": 1960
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1891,
                    "end": 1960
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1885,
                "end": 1962
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1885,
            "end": 1963
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
                    "start": 1963,
                    "end": 1968
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
                                            "start": 1973,
                                            "end": 1979
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
                                                                    "start": 1991,
                                                                    "end": 2001
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2002,
                                                                    "end": 2013
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 1991,
                                                            "end": 2013
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 1983,
                                                        "end": 2021
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 1983,
                                                "end": 2021
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 1981,
                                            "end": 2027
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1969,
                                        "end": 2027
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 1973,
                                "end": 2031
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2031,
                                "end": 2034
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2034,
                                "end": 2036
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 1969,
                            "end": 2036
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1969,
                    "end": 2036
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 1963,
                "end": 2038
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1963,
            "end": 2039
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
                    "start": 2039,
                    "end": 2044
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
                                                                            "start": 2064,
                                                                            "end": 2074
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 2075,
                                                                            "end": 2086
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 2064,
                                                                    "end": 2086
                                                                },
                                                                "flags": 49,
                                                                "transformFlags": 0,
                                                                "start": 2056,
                                                                "end": 2094
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 2056,
                                                        "end": 2094
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 2050,
                                                    "end": 2100
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2050,
                                            "end": 2100
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2049,
                                        "end": 2104
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2049,
                                "end": 2105
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2105,
                                "end": 2108
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2110,
                                    "end": 2110
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2108,
                                "end": 2111
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2045,
                            "end": 2111
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2045,
                    "end": 2111
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2039,
                "end": 2113
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2039,
            "end": 2114
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
                    "start": 2114,
                    "end": 2119
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
                                                                                                    "start": 2161,
                                                                                                    "end": 2175
                                                                                                },
                                                                                                {
                                                                                                    "kind": 329,
                                                                                                    "key": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "b",
                                                                                                        "rawText": "b",
                                                                                                        "flags": 97,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 2176,
                                                                                                        "end": 2190
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
                                                                                                                    "start": 2193,
                                                                                                                    "end": 2209
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
                                                                                                                        "start": 2210,
                                                                                                                        "end": 2226
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
                                                                                                                                    "start": 2229,
                                                                                                                                    "end": 2247
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "f",
                                                                                                                                    "rawText": "f",
                                                                                                                                    "flags": 97,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 2248,
                                                                                                                                    "end": 2267
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 17,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 2229,
                                                                                                                            "end": 2267
                                                                                                                        },
                                                                                                                        "flags": 49,
                                                                                                                        "transformFlags": 8,
                                                                                                                        "start": 2227,
                                                                                                                        "end": 2283
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 128,
                                                                                                                    "start": 2210,
                                                                                                                    "end": 2283
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 17,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 2193,
                                                                                                            "end": 2283
                                                                                                        },
                                                                                                        "flags": 49,
                                                                                                        "transformFlags": 8,
                                                                                                        "start": 2191,
                                                                                                        "end": 2297
                                                                                                    },
                                                                                                    "initializer": null,
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 2176,
                                                                                                    "end": 2297
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 2161,
                                                                                            "end": 2297
                                                                                        },
                                                                                        "flags": 49,
                                                                                        "transformFlags": 0,
                                                                                        "start": 2149,
                                                                                        "end": 2309
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 2149,
                                                                                "end": 2309
                                                                            },
                                                                            "flags": 33,
                                                                            "transformFlags": 0,
                                                                            "start": 2139,
                                                                            "end": 2319
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 2139,
                                                                    "end": 2319
                                                                },
                                                                "flags": 33,
                                                                "transformFlags": 0,
                                                                "start": 2131,
                                                                "end": 2327
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 2131,
                                                        "end": 2327
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 2125,
                                                    "end": 2333
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2125,
                                            "end": 2333
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2124,
                                        "end": 2337
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2124,
                                "end": 2338
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2338,
                                "end": 2341
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2343,
                                    "end": 2343
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2341,
                                "end": 2344
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2120,
                            "end": 2344
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2120,
                    "end": 2344
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2114,
                "end": 2346
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2114,
            "end": 2347
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
                    "start": 2347,
                    "end": 2352
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
                                            "start": 2357,
                                            "end": 2365
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
                                                        "start": 2366,
                                                        "end": 2374
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 2375,
                                                        "end": 2384
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 2366,
                                                "end": 2384
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2365,
                                            "end": 2390
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 34,
                                        "transformFlags": 4096,
                                        "start": 2357,
                                        "end": 2390
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 2357,
                                "end": 2394
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2394,
                                "end": 2397
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2399,
                                    "end": 2399
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2397,
                                "end": 2400
                            },
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 2353,
                            "end": 2400
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2353,
                    "end": 2400
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2347,
                "end": 2402
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2347,
            "end": 2403
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
                    "start": 2403,
                    "end": 2408
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
                                            "start": 2413,
                                            "end": 2421
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
                                                                    "start": 2430,
                                                                    "end": 2440
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2441,
                                                                    "end": 2452
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 2430,
                                                            "end": 2452
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 2422,
                                                        "end": 2460
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "transformFlags": 0,
                                                "start": 2422,
                                                "end": 2460
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2421,
                                            "end": 2466
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 34,
                                        "transformFlags": 4096,
                                        "start": 2413,
                                        "end": 2466
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 2413,
                                "end": 2470
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2470,
                                "end": 2473
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2475,
                                    "end": 2475
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2473,
                                "end": 2476
                            },
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 2409,
                            "end": 2476
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2409,
                    "end": 2476
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2403,
                "end": 2478
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2403,
            "end": 2479
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
                    "start": 2479,
                    "end": 2484
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
                                                        "start": 2490,
                                                        "end": 2498
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
                                                                                "start": 2507,
                                                                                "end": 2517
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 2518,
                                                                                "end": 2529
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "transformFlags": 0,
                                                                        "start": 2507,
                                                                        "end": 2529
                                                                    },
                                                                    "flags": 49,
                                                                    "transformFlags": 8,
                                                                    "start": 2499,
                                                                    "end": 2537
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 2499,
                                                            "end": 2537
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 2498,
                                                        "end": 2543
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "transformFlags": 4096,
                                                    "start": 2490,
                                                    "end": 2543
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2490,
                                            "end": 2543
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2489,
                                        "end": 2547
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2489,
                                "end": 2548
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2548,
                                "end": 2551
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2553,
                                    "end": 2553
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2551,
                                "end": 2554
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2485,
                            "end": 2554
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2485,
                    "end": 2554
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2479,
                "end": 2556
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2479,
            "end": 2557
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
                    "start": 2557,
                    "end": 2562
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
                                            "start": 2567,
                                            "end": 2573
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
                                                                    "start": 2578,
                                                                    "end": 2586
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2587,
                                                                    "end": 2596
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 2578,
                                                            "end": 2596
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 2577,
                                                        "end": 2602
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2577,
                                                "end": 2602
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 2575,
                                            "end": 2603
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 2563,
                                        "end": 2603
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2567,
                                "end": 2607
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2607,
                                "end": 2610
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2612,
                                    "end": 2612
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2610,
                                "end": 2613
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2563,
                            "end": 2613
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2563,
                    "end": 2613
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2557,
                "end": 2615
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2557,
            "end": 2616
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
                    "start": 2616,
                    "end": 2621
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
                                            "start": 2626,
                                            "end": 2632
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
                                                                            "start": 2638,
                                                                            "end": 2646
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 2647,
                                                                            "end": 2656
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 2638,
                                                                    "end": 2656
                                                                },
                                                                "flags": 49,
                                                                "transformFlags": 0,
                                                                "start": 2637,
                                                                "end": 2662
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 34,
                                                        "transformFlags": 0,
                                                        "start": 2637,
                                                        "end": 2663
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 2663,
                                                        "end": 2666
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2668,
                                                            "end": 2668
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 2666,
                                                        "end": 2669
                                                    },
                                                    "flags": 34,
                                                    "transformFlags": 0,
                                                    "start": 2636,
                                                    "end": 2669
                                                },
                                                "flags": 2634,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 2670
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2671,
                                                "end": 2671
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 2634,
                                            "end": 2672
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 2622,
                                        "end": 2672
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2626,
                                "end": 2676
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2676,
                                "end": 2679
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2681,
                                    "end": 2681
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2679,
                                "end": 2682
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2622,
                            "end": 2682
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2622,
                    "end": 2682
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2616,
                "end": 2684
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2616,
            "end": 2685
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
                    "start": 2685,
                    "end": 2690
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
                                            "start": 2695,
                                            "end": 2701
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
                                                "start": 2703,
                                                "end": 2705
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
                                                                    "start": 2707,
                                                                    "end": 2715
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2716,
                                                                    "end": 2725
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 2707,
                                                            "end": 2725
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 2706,
                                                        "end": 2731
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2706,
                                                "end": 2731
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 2703,
                                            "end": 2732
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 2691,
                                        "end": 2732
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2695,
                                "end": 2736
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2736,
                                "end": 2739
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2741,
                                    "end": 2741
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2739,
                                "end": 2742
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2691,
                            "end": 2742
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2691,
                    "end": 2742
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2685,
                "end": 2744
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2685,
            "end": 2745
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
                    "start": 2745,
                    "end": 2750
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
                                            "start": 2755,
                                            "end": 2761
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
                                                                    "start": 2766,
                                                                    "end": 2774
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2775,
                                                                    "end": 2784
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 2766,
                                                            "end": 2784
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 0,
                                                        "start": 2765,
                                                        "end": 2790
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 2765,
                                                "end": 2791
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 2791,
                                                "end": 2794
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2796,
                                                    "end": 2796
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2794,
                                                "end": 2797
                                            },
                                            "flags": 34,
                                            "transformFlags": 0,
                                            "start": 2763,
                                            "end": 2797
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 2751,
                                        "end": 2797
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2755,
                                "end": 2801
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2801,
                                "end": 2804
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2806,
                                    "end": 2806
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2804,
                                "end": 2807
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2751,
                            "end": 2807
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2751,
                    "end": 2807
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2745,
                "end": 2809
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2745,
            "end": 2810
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
                    "start": 2810,
                    "end": 2815
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
                                            "start": 2820,
                                            "end": 2826
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
                                                "start": 2828,
                                                "end": 2830
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2830,
                                                "end": 2832
                                            },
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 2832,
                                                    "end": 2840
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
                                                                        "start": 2842,
                                                                        "end": 2852
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 2853,
                                                                        "end": 2864
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 2842,
                                                                "end": 2864
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 2841,
                                                            "end": 2872
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 2841,
                                                    "end": 2872
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 2832,
                                                "end": 2873
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 2828,
                                            "end": 2873
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 2816,
                                        "end": 2873
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 2820,
                                "end": 2877
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2877,
                                "end": 2880
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2882,
                                    "end": 2882
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2880,
                                "end": 2883
                            },
                            "flags": 35,
                            "transformFlags": 0,
                            "start": 2816,
                            "end": 2883
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2816,
                    "end": 2883
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 2810,
                "end": 2885
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2810,
            "end": 2886
        }
    ],
    "isModule": false,
    "source": "Seq(typeDef.interface.groups).forEach(group =>\n  Seq(group.members).forEach((member, memberName) =>\n    markdownDoc(\n      member.doc,\n      { typePath: typePath.concat(memberName.slice(1)),\n       signatures: member.signatures }\n    )\n  )\n)\n\nconst promiseFromCallback = fn =>\n  new Promise((resolve, reject) =>\n    fn((err, result) => {\n      if (err) return reject(err);\n      return resolve(result);\n    })\n  );\n\nruntimeAgent.getProperties(\n  objectId,\n  false, // ownProperties\n  false, // accessorPropertiesOnly\n  false, // generatePreview\n  (error, properties, internalProperties) => {\n    return 1\n  },\n);\n\nfooooooooooooooooooooooooooooooooooooooooooooooooooo(action => next =>\n    dispatch(action),\n);\n\nfoo(\n  ({\n    a,\n\n    b\n  }) => {}\n);\n\nfoo(\n  ({\n    a,\n    b\n\n  }) => {}\n);\n\nfoo(\n  ({\n    a,\n    b\n  }) => {}\n);\n\nfoo(\n  a,\n  ({\n    a,\n\n    b\n  }) => {}\n)\n\nfoo(\n  ({\n    a,\n\n    b\n  }) => a\n);\n\nfoo(\n  ({\n    a,\n    b\n  }) => a\n);\n\nfoo(\n  ({\n    a,\n    b\n\n  }) => a\n);\n\nfoo(\n  ({\n    a: {\n      a,\n\n      b\n    }\n  }) => {}\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c,\n\n        d\n      }\n    }\n  }) => {}\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c: {\n          d,\n\n          e\n        }\n      }\n    }\n  }) => {}\n);\n\nfoo(\n  ({\n    a: {\n      a,\n\n      b\n    }\n  }) => a\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c,\n\n        d\n      }\n    }\n  }) => a\n);\n\nfoo(\n  ({\n    a: {\n      b: {\n        c: {\n          d,\n\n          e\n        }\n      }\n    }\n  }) => a\n);\n\nfoo(\n  ([\n    {\n      a: {\n        b: {\n          c: {\n            d,\n\n            e\n          }\n        }\n      }\n    }\n  ]) => {}\n);\n\nfoo(\n  ([\n    ...{\n      a: {\n        b: {\n          c: {\n            d,\n\n            e\n          }\n        }\n      }\n    }\n  ]) => {}\n);\n\nfoo(\n  (\n    n = {\n      a: {\n        b: {\n          c: {\n            d,\n\n            e\n          }\n        }\n      }\n    }\n  ) => {}\n);\n\nfoo(\n  ({\n    x: [\n      {\n        a,\n\n        b\n      }\n    ]\n  }) => {}\n);\n\nfoo(\n  (\n    a = [\n      {\n        a,\n\n        b\n      }\n    ]\n  ) => a\n);\n\nfoo(\n  ([\n    [\n      {\n        a,\n\n        b\n      }\n    ]\n  ]) => {}\n);\n\nfoo(\n  ([\n    [\n      [\n        [\n          {\n            a,\n            b: {\n              c,\n              d: {\n                e,\n\n                f\n              }\n            }\n          }\n        ]\n      ]\n    ]\n  ]) => {}\n);\n\nfoo(\n  (\n    ...{\n      a,\n\n      b\n    }\n  ) => {}\n);\n\nfoo(\n  (\n    ...[\n      {\n        a,\n\n        b\n      }\n    ]\n  ) => {}\n);\n\nfoo(\n  ([\n    ...[\n      {\n        a,\n\n        b\n      }\n    ]\n  ]) => {}\n);\n\nfoo(\n  (\n    a = [{\n      a,\n\n      b\n    }]\n  ) => {}\n);\n\nfoo(\n  (\n    a = (({\n      a,\n\n      b\n    }) => {})()\n  ) => {}\n);\n\nfoo(\n  (\n    a = f({\n      a,\n\n      b\n    })\n  ) => {}\n);\n\nfoo(\n  (\n    a = ({\n      a,\n\n      b\n    }) => {}\n  ) => {}\n);\n\nfoo(\n  (\n    a = 1 +\n      f({\n        a,\n\n        b\n      })\n  ) => {}\n);\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2887
}
```

### Printed

```javascript
Seq(typeDef.interface.groups).forEach(group =>
  Seq(group.members).forEach((member, memberName) =>
    markdownDoc(
      member.doc,
      {
        typePath: typePath.concat(memberName.slice(1)),
        signatures: member.signatures
      }
    )));
const promiseFromCallback = fn => new Promise((resolve, reject) =>
    fn((err, result) => {
      if (err) return reject(err);
      return resolve(result);
    }));

runtimeAgent.getProperties(objectId, false, // ownProperties
  false, // accessorPropertiesOnly
  false, // generatePreview
  (error, properties, internalProperties) => {
    return 1;
  });

fooooooooooooooooooooooooooooooooooooooooooooooooooo(action => next =>
  dispatch(action));

foo(({ a, b }) => {});

foo(({ a, b }) => {});

foo(({ a, b }) => {});

foo(a, ({ a, b }) => {});

foo(({ a, b }) => a);

foo(({ a, b }) => a);

foo(({ a, b }) => a);

foo(({ a: {
    a,
    b
  } }) => {});

foo(({ a: {
    b: {
      c,
      d
    }
  } }) => {});

foo(({ a: {
    b: {
      c: {
        d,
        e
      }
    }
  } }) => {});

foo(({ a: {
    a,
    b
  } }) => a);

foo(({ a: {
    b: {
      c,
      d
    }
  } }) => a);

foo(({ a: {
    b: {
      c: {
        d,
        e
      }
    }
  } }) => a);

foo(([{ a: {
      b: {
        c: {
          d,
          e
        }
      }
    } }]) => {});

foo(([...{
    a: {
      b: {
        c: {
          d,
          e
        }
      }
    }
  }]) => {});

foo((n = {
  a: {
    b: {
      c: {
        d,
        e
      }
    }
  }
}) => {});

foo(({ x: [{
      a,
      b
    }] }) => {});

foo((a = [{
    a,
    b
  }]) => a);

foo(([[{ a, b }]]) => {});

foo(([[[[{ a, b: {
            c,
            d: {
              e,
              f
            }
          } }]]]]) => {});

foo((...{ a, b }) => {});

foo((...[{ a, b }]) => {});

foo(([...[{
      a,
      b
    }]]) => {});

foo((a = [{
    a,
    b
  }]) => {});

foo((a = (({ a, b }) => {})()) => {});

foo((a = f({
  a,
  b
})) => {});

foo((a = ({ a, b }) => {}) => {});

foo((a = 1 + f({
    a,
    b
  })) => {});

```

### Diagnostics

```javascript
✔ No errors
```

