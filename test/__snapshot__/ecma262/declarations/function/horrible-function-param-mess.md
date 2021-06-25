# Kataw parser test case

## Input

`````js
function processArgs<A1: {}, A2: {}>(
  process: (args: A1) => A2
): <S, C, I, R>(
  resolver: Resolver<S, A2, C, I, R>
) => Resolver<S, A1, C, I, R> {
  return <S, C, I, R>(
    resolver: Resolver<S, A2, C, I, R>
  ): Resolver<S, A1, C, I, R> => (
    src: S,
    args: A1,
    appContext: C,
    info: I
  ): Promise<R> => resolver(src, process(args), appContext, info)
}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "processArgs",
                "rawText": "processArgs",
                "flags": 96,
                "start": 8,
                "end": 20
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "A1",
                                "rawText": "A1",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234353,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 24,
                                "end": 27
                            },
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 21,
                            "end": 27
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "A2",
                                "rawText": "A2",
                                "flags": 96,
                                "start": 28,
                                "end": 31
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234353,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 32,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "start": 32,
                                "end": 35
                            },
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 28,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 21,
                    "end": 35
                },
                "flags": 2097152,
                "start": 20,
                "end": 36
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "process",
                            "rawText": "process",
                            "flags": 96,
                            "start": 37,
                            "end": 47
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "args",
                                                "rawText": "args",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 54
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "A1",
                                                        "rawText": "A1",
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 58
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 55,
                                                    "end": 58
                                                },
                                                "flags": 2097152,
                                                "start": 55,
                                                "end": 58
                                            },
                                            "flags": 2097152,
                                            "start": 48,
                                            "end": 58
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 48,
                                    "end": 58
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 59,
                                    "end": 62
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "A2",
                                            "rawText": "A2",
                                            "flags": 96,
                                            "start": 62,
                                            "end": 65
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 62,
                                        "end": 65
                                    },
                                    "flags": 2097152,
                                    "start": 62,
                                    "end": 65
                                },
                                "flags": 2097152,
                                "start": 48,
                                "end": 65
                            },
                            "flags": 2097152,
                            "start": 48,
                            "end": 65
                        },
                        "right": null,
                        "flags": 32,
                        "start": 37,
                        "end": 65
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 37,
                "end": 65
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
                                "start": 151,
                                "end": 160
                            },
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": {
                                    "kind": 307,
                                    "declarations": {
                                        "kind": 337,
                                        "parameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "S",
                                                    "rawText": "S",
                                                    "flags": 96,
                                                    "start": 162,
                                                    "end": 163
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 162,
                                                "end": 163
                                            },
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 164,
                                                    "end": 166
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 164,
                                                "end": 166
                                            },
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "start": 167,
                                                    "end": 169
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 167,
                                                "end": 169
                                            },
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "R",
                                                    "rawText": "R",
                                                    "flags": 96,
                                                    "start": 170,
                                                    "end": 172
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 170,
                                                "end": 172
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 162,
                                        "end": 172
                                    },
                                    "flags": 2097152,
                                    "start": 160,
                                    "end": 173
                                },
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "resolver",
                                                "rawText": "resolver",
                                                "flags": 96,
                                                "start": 174,
                                                "end": 187
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "Resolver",
                                                        "rawText": "Resolver",
                                                        "flags": 96,
                                                        "start": 188,
                                                        "end": 197
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "typeInstantiations": {
                                                            "kind": 309,
                                                            "types": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "S",
                                                                            "rawText": "S",
                                                                            "flags": 96,
                                                                            "start": 198,
                                                                            "end": 199
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 198,
                                                                        "end": 199
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 198,
                                                                    "end": 199
                                                                },
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "A2",
                                                                            "rawText": "A2",
                                                                            "flags": 96,
                                                                            "start": 200,
                                                                            "end": 203
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 200,
                                                                        "end": 203
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 200,
                                                                    "end": 203
                                                                },
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "C",
                                                                            "rawText": "C",
                                                                            "flags": 96,
                                                                            "start": 204,
                                                                            "end": 206
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 204,
                                                                        "end": 206
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 204,
                                                                    "end": 206
                                                                },
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "I",
                                                                            "rawText": "I",
                                                                            "flags": 96,
                                                                            "start": 207,
                                                                            "end": 209
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 207,
                                                                        "end": 209
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 207,
                                                                    "end": 209
                                                                },
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "R",
                                                                            "rawText": "R",
                                                                            "flags": 96,
                                                                            "start": 210,
                                                                            "end": 212
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 210,
                                                                        "end": 212
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 210,
                                                                    "end": 212
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "start": 198,
                                                            "end": 212
                                                        },
                                                        "flags": 2097152,
                                                        "start": 197,
                                                        "end": 213
                                                    },
                                                    "flags": 2097152,
                                                    "start": 188,
                                                    "end": 213
                                                },
                                                "flags": 2097152,
                                                "start": 188,
                                                "end": 213
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 160,
                                            "end": 213
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 174,
                                    "end": 243
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "Resolver",
                                            "rawText": "Resolver",
                                            "flags": 96,
                                            "start": 218,
                                            "end": 227
                                        },
                                        "typeParameters": {
                                            "kind": 310,
                                            "typeInstantiations": {
                                                "kind": 309,
                                                "types": [
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "S",
                                                                "rawText": "S",
                                                                "flags": 96,
                                                                "start": 228,
                                                                "end": 229
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 228,
                                                            "end": 229
                                                        },
                                                        "flags": 2097152,
                                                        "start": 228,
                                                        "end": 229
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "A1",
                                                                "rawText": "A1",
                                                                "flags": 96,
                                                                "start": 230,
                                                                "end": 233
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 230,
                                                            "end": 233
                                                        },
                                                        "flags": 2097152,
                                                        "start": 230,
                                                        "end": 233
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "C",
                                                                "rawText": "C",
                                                                "flags": 96,
                                                                "start": 234,
                                                                "end": 236
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 234,
                                                            "end": 236
                                                        },
                                                        "flags": 2097152,
                                                        "start": 234,
                                                        "end": 236
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "I",
                                                                "rawText": "I",
                                                                "flags": 96,
                                                                "start": 237,
                                                                "end": 239
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 237,
                                                            "end": 239
                                                        },
                                                        "flags": 2097152,
                                                        "start": 237,
                                                        "end": 239
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "R",
                                                                "rawText": "R",
                                                                "flags": 96,
                                                                "start": 240,
                                                                "end": 242
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 240,
                                                            "end": 242
                                                        },
                                                        "flags": 2097152,
                                                        "start": 240,
                                                        "end": 242
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 228,
                                                "end": 242
                                            },
                                            "flags": 2097152,
                                            "start": 227,
                                            "end": 243
                                        },
                                        "flags": 2097152,
                                        "start": 218,
                                        "end": 243
                                    },
                                    "flags": 2097152,
                                    "start": 218,
                                    "end": 243
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 243,
                                    "end": 246
                                },
                                "contents": {
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
                                                    "text": "src",
                                                    "rawText": "src",
                                                    "flags": 96,
                                                    "start": 248,
                                                    "end": 256
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "S",
                                                            "rawText": "S",
                                                            "flags": 96,
                                                            "start": 257,
                                                            "end": 259
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 257,
                                                        "end": 259
                                                    },
                                                    "flags": 2097152,
                                                    "start": 257,
                                                    "end": 259
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 246,
                                                "end": 259
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "args",
                                                    "rawText": "args",
                                                    "flags": 96,
                                                    "start": 260,
                                                    "end": 269
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "A1",
                                                            "rawText": "A1",
                                                            "flags": 96,
                                                            "start": 270,
                                                            "end": 273
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 270,
                                                        "end": 273
                                                    },
                                                    "flags": 2097152,
                                                    "start": 270,
                                                    "end": 273
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 246,
                                                "end": 273
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "appContext",
                                                    "rawText": "appContext",
                                                    "flags": 96,
                                                    "start": 274,
                                                    "end": 289
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "start": 290,
                                                            "end": 292
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 290,
                                                        "end": 292
                                                    },
                                                    "flags": 2097152,
                                                    "start": 290,
                                                    "end": 292
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 246,
                                                "end": 292
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "info",
                                                    "rawText": "info",
                                                    "flags": 96,
                                                    "start": 293,
                                                    "end": 302
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "I",
                                                            "rawText": "I",
                                                            "flags": 96,
                                                            "start": 303,
                                                            "end": 305
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 303,
                                                        "end": 305
                                                    },
                                                    "flags": 2097152,
                                                    "start": 303,
                                                    "end": 305
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 246,
                                                "end": 305
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 248,
                                        "end": 321
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "Promise",
                                                "rawText": "Promise",
                                                "flags": 96,
                                                "start": 310,
                                                "end": 318
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "typeInstantiations": {
                                                    "kind": 309,
                                                    "types": [
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "R",
                                                                    "rawText": "R",
                                                                    "flags": 96,
                                                                    "start": 319,
                                                                    "end": 320
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 319,
                                                                "end": 320
                                                            },
                                                            "flags": 2097152,
                                                            "start": 319,
                                                            "end": 320
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 319,
                                                    "end": 320
                                                },
                                                "flags": 2097152,
                                                "start": 318,
                                                "end": 321
                                            },
                                            "flags": 2097152,
                                            "start": 310,
                                            "end": 321
                                        },
                                        "flags": 2097152,
                                        "start": 310,
                                        "end": 321
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 321,
                                        "end": 324
                                    },
                                    "contents": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "resolver",
                                            "rawText": "resolver",
                                            "flags": 96,
                                            "start": 324,
                                            "end": 333
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "src",
                                                    "rawText": "src",
                                                    "flags": 96,
                                                    "start": 334,
                                                    "end": 337
                                                },
                                                {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "process",
                                                        "rawText": "process",
                                                        "flags": 96,
                                                        "start": 338,
                                                        "end": 346
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "args",
                                                                "rawText": "args",
                                                                "flags": 96,
                                                                "start": 347,
                                                                "end": 351
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 347,
                                                        "end": 351
                                                    },
                                                    "flags": 268435488,
                                                    "start": 338,
                                                    "end": 352
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "appContext",
                                                    "rawText": "appContext",
                                                    "flags": 96,
                                                    "start": 353,
                                                    "end": 364
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "info",
                                                    "rawText": "info",
                                                    "flags": 96,
                                                    "start": 365,
                                                    "end": 370
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 334,
                                            "end": 370
                                        },
                                        "flags": 268435488,
                                        "start": 324,
                                        "end": 371
                                    },
                                    "flags": 32,
                                    "start": 246,
                                    "end": 371
                                },
                                "flags": 32,
                                "start": 160,
                                "end": 371
                            },
                            "flags": 81,
                            "start": 151,
                            "end": 371
                        }
                    ],
                    "flags": 33,
                    "start": 151,
                    "end": 371
                },
                "flags": 32,
                "start": 149,
                "end": 373
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": {
                        "kind": 307,
                        "declarations": {
                            "kind": 337,
                            "parameters": [
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "S",
                                        "rawText": "S",
                                        "flags": 96,
                                        "start": 70,
                                        "end": 71
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 70,
                                    "end": 71
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 96,
                                        "start": 72,
                                        "end": 74
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 72,
                                    "end": 74
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "I",
                                        "rawText": "I",
                                        "flags": 96,
                                        "start": 75,
                                        "end": 77
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 75,
                                    "end": 77
                                },
                                {
                                    "kind": 146,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "R",
                                        "rawText": "R",
                                        "flags": 96,
                                        "start": 78,
                                        "end": 80
                                    },
                                    "type": null,
                                    "defaultType": null,
                                    "flags": 2097152,
                                    "start": 78,
                                    "end": 80
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 70,
                            "end": 80
                        },
                        "flags": 2097152,
                        "start": 68,
                        "end": 81
                    },
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "resolver",
                                    "rawText": "resolver",
                                    "flags": 96,
                                    "start": 82,
                                    "end": 93
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "Resolver",
                                            "rawText": "Resolver",
                                            "flags": 96,
                                            "start": 94,
                                            "end": 103
                                        },
                                        "typeParameters": {
                                            "kind": 310,
                                            "typeInstantiations": {
                                                "kind": 309,
                                                "types": [
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "S",
                                                                "rawText": "S",
                                                                "flags": 96,
                                                                "start": 104,
                                                                "end": 105
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 104,
                                                            "end": 105
                                                        },
                                                        "flags": 2097152,
                                                        "start": 104,
                                                        "end": 105
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "A2",
                                                                "rawText": "A2",
                                                                "flags": 96,
                                                                "start": 106,
                                                                "end": 109
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 106,
                                                            "end": 109
                                                        },
                                                        "flags": 2097152,
                                                        "start": 106,
                                                        "end": 109
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "C",
                                                                "rawText": "C",
                                                                "flags": 96,
                                                                "start": 110,
                                                                "end": 112
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 110,
                                                            "end": 112
                                                        },
                                                        "flags": 2097152,
                                                        "start": 110,
                                                        "end": 112
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "I",
                                                                "rawText": "I",
                                                                "flags": 96,
                                                                "start": 113,
                                                                "end": 115
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 113,
                                                            "end": 115
                                                        },
                                                        "flags": 2097152,
                                                        "start": 113,
                                                        "end": 115
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "R",
                                                                "rawText": "R",
                                                                "flags": 96,
                                                                "start": 116,
                                                                "end": 118
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 116,
                                                            "end": 118
                                                        },
                                                        "flags": 2097152,
                                                        "start": 116,
                                                        "end": 118
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 104,
                                                "end": 118
                                            },
                                            "flags": 2097152,
                                            "start": 103,
                                            "end": 119
                                        },
                                        "flags": 2097152,
                                        "start": 94,
                                        "end": 119
                                    },
                                    "flags": 2097152,
                                    "start": 94,
                                    "end": 119
                                },
                                "flags": 2097152,
                                "start": 82,
                                "end": 119
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 82,
                        "end": 119
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 121,
                        "end": 124
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Resolver",
                                "rawText": "Resolver",
                                "flags": 96,
                                "start": 124,
                                "end": 133
                            },
                            "typeParameters": {
                                "kind": 310,
                                "typeInstantiations": {
                                    "kind": 309,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "S",
                                                    "rawText": "S",
                                                    "flags": 96,
                                                    "start": 134,
                                                    "end": 135
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 134,
                                                "end": 135
                                            },
                                            "flags": 2097152,
                                            "start": 134,
                                            "end": 135
                                        },
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "A1",
                                                    "rawText": "A1",
                                                    "flags": 96,
                                                    "start": 136,
                                                    "end": 139
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 136,
                                                "end": 139
                                            },
                                            "flags": 2097152,
                                            "start": 136,
                                            "end": 139
                                        },
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 140,
                                                    "end": 142
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 140,
                                                "end": 142
                                            },
                                            "flags": 2097152,
                                            "start": 140,
                                            "end": 142
                                        },
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "start": 143,
                                                    "end": 145
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 143,
                                                "end": 145
                                            },
                                            "flags": 2097152,
                                            "start": 143,
                                            "end": 145
                                        },
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "R",
                                                    "rawText": "R",
                                                    "flags": 96,
                                                    "start": 146,
                                                    "end": 148
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 146,
                                                "end": 148
                                            },
                                            "flags": 2097152,
                                            "start": 146,
                                            "end": 148
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 134,
                                    "end": 148
                                },
                                "flags": 2097152,
                                "start": 133,
                                "end": 149
                            },
                            "flags": 2097152,
                            "start": 124,
                            "end": 149
                        },
                        "flags": 2097152,
                        "start": 124,
                        "end": 149
                    },
                    "flags": 2097152,
                    "start": 68,
                    "end": 149
                },
                "flags": 2097152,
                "start": 68,
                "end": 149
            },
            "flags": 16,
            "start": 0,
            "end": 373
        }
    ],
    "isModule": false,
    "source": "function processArgs<A1: {}, A2: {}>(\n  process: (args: A1) => A2\n): <S, C, I, R>(\n  resolver: Resolver<S, A2, C, I, R>\n) => Resolver<S, A1, C, I, R> {\n  return <S, C, I, R>(\n    resolver: Resolver<S, A2, C, I, R>\n  ): Resolver<S, A1, C, I, R> => (\n    src: S,\n    args: A1,\n    appContext: C,\n    info: I\n  ): Promise<R> => resolver(src, process(args), appContext, info)\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 373
}
```

### Printed

```javascript

function  <A1: , A2:  >processArgs():  {
  return  () =>  () =>  resolver(src, process(args), appContext, info);
}
```

### Diagnostics

```javascript
✔ No errors
```

