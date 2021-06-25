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
                                            "start": 4,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "interface",
                                            "rawText": "interface",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 21
                                        },
                                        "flags": 536870944,
                                        "start": 4,
                                        "end": 21
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "groups",
                                        "rawText": "groups",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "flags": 536870944,
                                    "start": 4,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 4,
                            "end": 28
                        },
                        "flags": 268435488,
                        "start": 0,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "forEach",
                        "rawText": "forEach",
                        "flags": 96,
                        "start": 30,
                        "end": 37
                    },
                    "flags": 536870944,
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
                                "start": 38,
                                "end": 43
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
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
                                            "flags": 96,
                                            "start": 46,
                                            "end": 54
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
                                                        "start": 55,
                                                        "end": 60
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "members",
                                                        "rawText": "members",
                                                        "flags": 96,
                                                        "start": 61,
                                                        "end": 68
                                                    },
                                                    "flags": 536870944,
                                                    "start": 55,
                                                    "end": 68
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 55,
                                            "end": 68
                                        },
                                        "flags": 268435488,
                                        "start": 46,
                                        "end": 69
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "forEach",
                                        "rawText": "forEach",
                                        "flags": 96,
                                        "start": 70,
                                        "end": 77
                                    },
                                    "flags": 536870944,
                                    "start": 46,
                                    "end": 77
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
                                                        "start": 79,
                                                        "end": 85
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "memberName",
                                                        "rawText": "memberName",
                                                        "flags": 96,
                                                        "start": 86,
                                                        "end": 97
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 79,
                                                "end": 98
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 98,
                                                "end": 101
                                            },
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "markdownDoc",
                                                    "rawText": "markdownDoc",
                                                    "flags": 96,
                                                    "start": 101,
                                                    "end": 119
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
                                                                "flags": 96,
                                                                "start": 120,
                                                                "end": 135
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "doc",
                                                                "rawText": "doc",
                                                                "flags": 96,
                                                                "start": 136,
                                                                "end": 139
                                                            },
                                                            "flags": 536870944,
                                                            "start": 120,
                                                            "end": 139
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
                                                                            "start": 150,
                                                                            "end": 159
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
                                                                                    "start": 160,
                                                                                    "end": 169
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "concat",
                                                                                    "rawText": "concat",
                                                                                    "flags": 96,
                                                                                    "start": 170,
                                                                                    "end": 176
                                                                                },
                                                                                "flags": 536870944,
                                                                                "start": 150,
                                                                                "end": 176
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
                                                                                                "start": 177,
                                                                                                "end": 187
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "slice",
                                                                                                "rawText": "slice",
                                                                                                "flags": 96,
                                                                                                "start": 188,
                                                                                                "end": 193
                                                                                            },
                                                                                            "flags": 536870944,
                                                                                            "start": 177,
                                                                                            "end": 193
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 1,
                                                                                                    "rawText": "1",
                                                                                                    "flags": 96,
                                                                                                    "start": 194,
                                                                                                    "end": 195
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 194,
                                                                                            "end": 195
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 177,
                                                                                        "end": 196
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 177,
                                                                                "end": 196
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 150,
                                                                            "end": 197
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 150,
                                                                        "end": 197
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "signatures",
                                                                            "rawText": "signatures",
                                                                            "flags": 96,
                                                                            "start": 198,
                                                                            "end": 218
                                                                        },
                                                                        "right": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "member",
                                                                                "rawText": "member",
                                                                                "flags": 96,
                                                                                "start": 219,
                                                                                "end": 226
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "signatures",
                                                                                "rawText": "signatures",
                                                                                "flags": 96,
                                                                                "start": 227,
                                                                                "end": 237
                                                                            },
                                                                            "flags": 536870944,
                                                                            "start": 198,
                                                                            "end": 237
                                                                        },
                                                                        "flags": 33,
                                                                        "start": 198,
                                                                        "end": 237
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 150,
                                                                "end": 237
                                                            },
                                                            "flags": 49,
                                                            "start": 140,
                                                            "end": 239
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 120,
                                                    "end": 239
                                                },
                                                "flags": 268435488,
                                                "start": 101,
                                                "end": 247
                                            },
                                            "flags": 32,
                                            "start": 78,
                                            "end": 247
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 78,
                                    "end": 247
                                },
                                "flags": 268435488,
                                "start": 46,
                                "end": 253
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 253
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 38,
                    "end": 253
                },
                "flags": 268435488,
                "start": 0,
                "end": 255
            },
            "flags": 16,
            "start": 0,
            "end": 255
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 255,
                "end": 262
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
                            "start": 262,
                            "end": 282
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
                                "start": 284,
                                "end": 287
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 287,
                                "end": 290
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 97,
                                    "start": 290,
                                    "end": 298
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Promise",
                                    "rawText": "Promise",
                                    "flags": 96,
                                    "start": 298,
                                    "end": 306
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
                                                        "start": 308,
                                                        "end": 315
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "reject",
                                                        "rawText": "reject",
                                                        "flags": 96,
                                                        "start": 316,
                                                        "end": 323
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 308,
                                                "end": 324
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 324,
                                                "end": 327
                                            },
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "fn",
                                                    "rawText": "fn",
                                                    "flags": 96,
                                                    "start": 327,
                                                    "end": 336
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
                                                                        "start": 338,
                                                                        "end": 341
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "result",
                                                                        "rawText": "result",
                                                                        "flags": 96,
                                                                        "start": 342,
                                                                        "end": 349
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 338,
                                                                "end": 350
                                                            },
                                                            "returnType": null,
                                                            "arrowToken": {
                                                                "kind": 10,
                                                                "flags": 64,
                                                                "start": 350,
                                                                "end": 353
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
                                                                                "start": 355,
                                                                                "end": 366
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "err",
                                                                                "rawText": "err",
                                                                                "flags": 96,
                                                                                "start": 368,
                                                                                "end": 371
                                                                            },
                                                                            "consequent": {
                                                                                "kind": 161,
                                                                                "returnKeyword": {
                                                                                    "kind": 37757022,
                                                                                    "flags": 80,
                                                                                    "start": 372,
                                                                                    "end": 379
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "reject",
                                                                                        "rawText": "reject",
                                                                                        "flags": 96,
                                                                                        "start": 379,
                                                                                        "end": 386
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 134299649,
                                                                                                "text": "err",
                                                                                                "rawText": "err",
                                                                                                "flags": 96,
                                                                                                "start": 387,
                                                                                                "end": 390
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 387,
                                                                                        "end": 390
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "start": 379,
                                                                                    "end": 391
                                                                                },
                                                                                "flags": 80,
                                                                                "start": 372,
                                                                                "end": 392
                                                                            },
                                                                            "elseKeyword": null,
                                                                            "alternate": null,
                                                                            "flags": 81,
                                                                            "start": 355,
                                                                            "end": 392
                                                                        },
                                                                        {
                                                                            "kind": 161,
                                                                            "returnKeyword": {
                                                                                "kind": 37757022,
                                                                                "flags": 81,
                                                                                "start": 392,
                                                                                "end": 407
                                                                            },
                                                                            "expression": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "resolve",
                                                                                    "rawText": "resolve",
                                                                                    "flags": 96,
                                                                                    "start": 407,
                                                                                    "end": 415
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 134299649,
                                                                                            "text": "result",
                                                                                            "rawText": "result",
                                                                                            "flags": 96,
                                                                                            "start": 416,
                                                                                            "end": 422
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 416,
                                                                                    "end": 422
                                                                                },
                                                                                "flags": 268435488,
                                                                                "start": 407,
                                                                                "end": 423
                                                                            },
                                                                            "flags": 81,
                                                                            "start": 392,
                                                                            "end": 424
                                                                        }
                                                                    ],
                                                                    "flags": 33,
                                                                    "start": 355,
                                                                    "end": 424
                                                                },
                                                                "flags": 32,
                                                                "start": 353,
                                                                "end": 432
                                                            },
                                                            "flags": 32,
                                                            "start": 337,
                                                            "end": 432
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 337,
                                                    "end": 432
                                                },
                                                "flags": 268435488,
                                                "start": 327,
                                                "end": 433
                                            },
                                            "flags": 32,
                                            "start": 307,
                                            "end": 433
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 307,
                                    "end": 433
                                },
                                "flags": 97,
                                "start": 290,
                                "end": 439
                            },
                            "flags": 32,
                            "start": 284,
                            "end": 439
                        },
                        "flags": 16,
                        "start": 262,
                        "end": 439
                    }
                ],
                "flags": 16777232,
                "start": 262,
                "end": 439
            },
            "flags": 33554448,
            "start": 255,
            "end": 440
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
                        "flags": 96,
                        "start": 440,
                        "end": 454
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "getProperties",
                        "rawText": "getProperties",
                        "flags": 96,
                        "start": 455,
                        "end": 468
                    },
                    "flags": 536870944,
                    "start": 440,
                    "end": 468
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "objectId",
                            "rawText": "objectId",
                            "flags": 96,
                            "start": 469,
                            "end": 482
                        },
                        {
                            "kind": 205586437,
                            "flags": 97,
                            "start": 483,
                            "end": 493
                        },
                        {
                            "kind": 205586437,
                            "flags": 97,
                            "start": 494,
                            "end": 521
                        },
                        {
                            "kind": 205586437,
                            "flags": 97,
                            "start": 522,
                            "end": 558
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
                                        "start": 584,
                                        "end": 589
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "properties",
                                        "rawText": "properties",
                                        "flags": 96,
                                        "start": 590,
                                        "end": 601
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "internalProperties",
                                        "rawText": "internalProperties",
                                        "flags": 96,
                                        "start": 602,
                                        "end": 621
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 584,
                                "end": 622
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 622,
                                "end": 625
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
                                                "start": 627,
                                                "end": 640
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 640,
                                                "end": 642
                                            },
                                            "flags": 81,
                                            "start": 627,
                                            "end": 642
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 627,
                                    "end": 642
                                },
                                "flags": 32,
                                "start": 625,
                                "end": 648
                            },
                            "flags": 32,
                            "start": 559,
                            "end": 648
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 469,
                    "end": 649
                },
                "flags": 268435488,
                "start": 440,
                "end": 651
            },
            "flags": 16,
            "start": 440,
            "end": 652
        }
    ],
    "isModule": false,
    "source": "Seq(typeDef.interface.groups).forEach(group =>\n    Seq(group.members).forEach((member, memberName) =>\n      markdownDoc(\n        member.doc,\n        { typePath: typePath.concat(memberName.slice(1)),\n         signatures: member.signatures }\n      )\n    )\n)\n\nconst promiseFromCallback = fn =>\n    new Promise((resolve, reject) =>\n      fn((err, result) => {\n        if (err) return reject(err);\n        return resolve(result);\n      })\n    );\n\nruntimeAgent.getProperties(\n    objectId,\n    false, // ownProperties\n    false, // accessorPropertiesOnly\n    false, // generatePreview\n    (error, properties, internalProperties) => {\n      return 1\n    },\n);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 652
}
```

### Printed

```javascript

Seq(typeDef.interface.groups).forEach(group =>
  Seq(group.members).forEach(() =>
    markdownDoc(
      member.doc,
      {
        typePath: typePath.concat(memberName.slice(1)),
        signatures: member.signatures
      },
    )));
const promiseFromCallback = fn =>  new  Promise(() =>  fn(() =>  {
      if (err) return  reject(err);
      return  resolve(result);
    }));
runtimeAgent.getProperties(objectId, false, // ownProperties
  false, // accessorPropertiesOnly
  false, // generatePreview
  () =>  {
    return  1;
  });
```

### Diagnostics

```javascript
✔ No errors
```

