# Kataw parser test case

## Input

`````js
function f() {
  const appEntities = getAppEntities(loadObject).filter(
    entity => entity && entity.isInstallAvailable() && !entity.isQueue() && entity.isDisabled()
  )
}

function f2() {
  const appEntities = getAppEntities(loadObject).map(
    entity => entity && entity.isInstallAvailable() && !entity.isQueue() && entity.isDisabled() && {
      id: entity.id
    }
  )
}

((x) => x) + '';
'' + ((x) => x);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
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
                                "start": 14,
                                "end": 22
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "appEntities",
                                            "rawText": "appEntities",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 34
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "getAppEntities",
                                                        "rawText": "getAppEntities",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 51
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "loadObject",
                                                                "rawText": "loadObject",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 52,
                                                                "end": 62
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 62
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 36,
                                                    "end": 63
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "filter",
                                                    "rawText": "filter",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 64,
                                                    "end": 70
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 2,
                                                "start": 36,
                                                "end": 70
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
                                                            "text": "entity",
                                                            "rawText": "entity",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 71,
                                                            "end": 82
                                                        },
                                                        "returnType": null,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 82,
                                                            "end": 85
                                                        },
                                                        "contents": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "entity",
                                                                        "rawText": "entity",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 85,
                                                                        "end": 92
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 33594,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 92,
                                                                        "end": 95
                                                                    },
                                                                    "right": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "entity",
                                                                                "rawText": "entity",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 95,
                                                                                "end": 102
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "isInstallAvailable",
                                                                                "rawText": "isInstallAvailable",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 103,
                                                                                "end": 121
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 2,
                                                                            "start": 95,
                                                                            "end": 121
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 122,
                                                                            "end": 122
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 1,
                                                                        "start": 95,
                                                                        "end": 123
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 1024,
                                                                    "start": 85,
                                                                    "end": 123
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 33594,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 123,
                                                                    "end": 126
                                                                },
                                                                "right": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 65584,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 126,
                                                                        "end": 128
                                                                    },
                                                                    "operand": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "entity",
                                                                                "rawText": "entity",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 128,
                                                                                "end": 134
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "isQueue",
                                                                                "rawText": "isQueue",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 135,
                                                                                "end": 142
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 2,
                                                                            "start": 128,
                                                                            "end": 142
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 143,
                                                                            "end": 143
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 1,
                                                                        "start": 128,
                                                                        "end": 144
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 1024,
                                                                    "start": 126,
                                                                    "end": 144
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 1024,
                                                                "start": 85,
                                                                "end": 144
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 144,
                                                                "end": 147
                                                            },
                                                            "right": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "entity",
                                                                        "rawText": "entity",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 147,
                                                                        "end": 154
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "isDisabled",
                                                                        "rawText": "isDisabled",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 155,
                                                                        "end": 165
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 147,
                                                                    "end": 165
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 166,
                                                                    "end": 166
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 147,
                                                                "end": 167
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 85,
                                                            "end": 167
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 71,
                                                        "end": 167
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 71,
                                                "end": 167
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 36,
                                            "end": 171
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 22,
                                        "end": 171
                                    }
                                ],
                                "flags": 16777232,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 171
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 171
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 171
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 173
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 173
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 173,
                "end": 183
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "transformFlags": 0,
                "start": 183,
                "end": 186
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 187,
                "end": 187
            },
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
                                "start": 190,
                                "end": 198
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "appEntities",
                                            "rawText": "appEntities",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 198,
                                            "end": 210
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "getAppEntities",
                                                        "rawText": "getAppEntities",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 212,
                                                        "end": 227
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "loadObject",
                                                                "rawText": "loadObject",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 228,
                                                                "end": 238
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 228,
                                                        "end": 238
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 212,
                                                    "end": 239
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "map",
                                                    "rawText": "map",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 240,
                                                    "end": 243
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 2,
                                                "start": 212,
                                                "end": 243
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
                                                            "text": "entity",
                                                            "rawText": "entity",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 244,
                                                            "end": 255
                                                        },
                                                        "returnType": null,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 255,
                                                            "end": 258
                                                        },
                                                        "contents": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "entity",
                                                                            "rawText": "entity",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 258,
                                                                            "end": 265
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 33594,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 265,
                                                                            "end": 268
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 134299649,
                                                                                    "text": "entity",
                                                                                    "rawText": "entity",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 268,
                                                                                    "end": 275
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "isInstallAvailable",
                                                                                    "rawText": "isInstallAvailable",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 276,
                                                                                    "end": 294
                                                                                },
                                                                                "flags": 96,
                                                                                "transformFlags": 2,
                                                                                "start": 268,
                                                                                "end": 294
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 295,
                                                                                "end": 295
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 1,
                                                                            "start": 268,
                                                                            "end": 296
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 1024,
                                                                        "start": 258,
                                                                        "end": 296
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 33594,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 296,
                                                                        "end": 299
                                                                    },
                                                                    "right": {
                                                                        "kind": 126,
                                                                        "operandToken": {
                                                                            "kind": 65584,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 299,
                                                                            "end": 301
                                                                        },
                                                                        "operand": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 134299649,
                                                                                    "text": "entity",
                                                                                    "rawText": "entity",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 301,
                                                                                    "end": 307
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "isQueue",
                                                                                    "rawText": "isQueue",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 308,
                                                                                    "end": 315
                                                                                },
                                                                                "flags": 96,
                                                                                "transformFlags": 2,
                                                                                "start": 301,
                                                                                "end": 315
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 316,
                                                                                "end": 316
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 1,
                                                                            "start": 301,
                                                                            "end": 317
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 1024,
                                                                        "start": 299,
                                                                        "end": 317
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 1024,
                                                                    "start": 258,
                                                                    "end": 317
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 33594,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 317,
                                                                    "end": 320
                                                                },
                                                                "right": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "entity",
                                                                            "rawText": "entity",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 320,
                                                                            "end": 327
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "isDisabled",
                                                                            "rawText": "isDisabled",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 328,
                                                                            "end": 338
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 320,
                                                                        "end": 338
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 339,
                                                                        "end": 339
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 1,
                                                                    "start": 320,
                                                                    "end": 340
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 1024,
                                                                "start": 258,
                                                                "end": 340
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 340,
                                                                "end": 343
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
                                                                                "text": "id",
                                                                                "rawText": "id",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 345,
                                                                                "end": 354
                                                                            },
                                                                            "right": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 134299649,
                                                                                    "text": "entity",
                                                                                    "rawText": "entity",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 355,
                                                                                    "end": 362
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "id",
                                                                                    "rawText": "id",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 363,
                                                                                    "end": 365
                                                                                },
                                                                                "flags": 96,
                                                                                "transformFlags": 2,
                                                                                "start": 345,
                                                                                "end": 365
                                                                            },
                                                                            "flags": 33,
                                                                            "transformFlags": 128,
                                                                            "start": 345,
                                                                            "end": 365
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 17,
                                                                    "transformFlags": 0,
                                                                    "start": 345,
                                                                    "end": 365
                                                                },
                                                                "flags": 49,
                                                                "transformFlags": 8,
                                                                "start": 343,
                                                                "end": 371
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 258,
                                                            "end": 371
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 244,
                                                        "end": 371
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 244,
                                                "end": 371
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 212,
                                            "end": 375
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 198,
                                        "end": 375
                                    }
                                ],
                                "flags": 16777232,
                                "transformFlags": 0,
                                "start": 198,
                                "end": 375
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 375
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 190,
                    "end": 375
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 188,
                "end": 377
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 173,
            "end": 377
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 381,
                                    "end": 382
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 381,
                            "end": 383
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 383,
                            "end": 386
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 386,
                            "end": 388
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 380,
                        "end": 388
                    },
                    "flags": 377,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 389
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 389,
                    "end": 391
                },
                "right": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "''",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 391,
                    "end": 394
                },
                "flags": 377,
                "transformFlags": 1024,
                "start": 377,
                "end": 394
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 377,
            "end": 395
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "''",
                    "flags": 4194401,
                    "transformFlags": 0,
                    "start": 395,
                    "end": 398
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 398,
                    "end": 400
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 403,
                                    "end": 404
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 403,
                            "end": 405
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 405,
                            "end": 408
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 408,
                            "end": 410
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 402,
                        "end": 410
                    },
                    "flags": 400,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 411
                },
                "flags": 4194401,
                "transformFlags": 1024,
                "start": 395,
                "end": 411
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 395,
            "end": 412
        }
    ],
    "isModule": false,
    "source": "function f() {\n  const appEntities = getAppEntities(loadObject).filter(\n    entity => entity && entity.isInstallAvailable() && !entity.isQueue() && entity.isDisabled()\n  )\n}\n\nfunction f2() {\n  const appEntities = getAppEntities(loadObject).map(\n    entity => entity && entity.isInstallAvailable() && !entity.isQueue() && entity.isDisabled() && {\n      id: entity.id\n    }\n  )\n}\n\n((x) => x) + '';\n'' + ((x) => x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 412
}
```

### Printed

```javascript
function f() {
  const appEntities = getAppEntities(loadObject).filter(entity =>
      entity &&
      entity.isInstallAvailable() &&
      !entity.isQueue() &&
      entity.isDisabled());
}
function f2() {
  const appEntities = getAppEntities(loadObject).map(entity =>
      entity &&
      entity.isInstallAvailable() &&
      !entity.isQueue() &&
      entity.isDisabled() &&
      { id: entity.id });
}

((x) => x) + "''";

"''" + ((x) => x);

```

### Diagnostics

```javascript
✔ No errors
```

