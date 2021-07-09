# Kataw parser test case

### Printer Options

`````js
{ printWidth: 80 }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
declare class C {
  f(
    superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,
    ...args
  ): void,
}

function f(
  superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,
  ...args
) {}

[superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,,];

[veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong, ...a] = [];
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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                                                    "rawText": "superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 101
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 101
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 101
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 65,
                                                "transformFlags": 0,
                                                "start": 102,
                                                "end": 110
                                            },
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "args",
                                                    "rawText": "args",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 110,
                                                    "end": 114
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 102,
                                                "end": 114
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 102,
                                            "end": 114
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 114
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 119,
                                        "end": 124
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 119,
                                    "end": 124
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 124
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 125
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 127
                },
                "flags": 4128,
                "transformFlags": 0,
                "start": 15,
                "end": 127
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 127
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 127,
                "end": 137
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 137,
                "end": 139
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                        "rawText": "superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 140,
                        "end": 217
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 218,
                            "end": 224
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "args",
                            "rawText": "args",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 224,
                            "end": 228
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 218,
                        "end": 228
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 140,
                "end": 228
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 232
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 230,
                "end": 233
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 127,
            "end": 233
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                            "rawText": "superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 236,
                            "end": 315
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 316,
                            "end": 316
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 317
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 233,
                "end": 318
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 233,
            "end": 319
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong",
                                "rawText": "veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 322,
                                "end": 398
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 399,
                                    "end": 403
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 403,
                                    "end": 404
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 399,
                                "end": 404
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 322,
                        "end": 404
                    },
                    "flags": 33,
                    "transformFlags": 8,
                    "start": 319,
                    "end": 405
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 405,
                    "end": 407
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 409,
                        "end": 409
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 407,
                    "end": 410
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 319,
                "end": 410
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 319,
            "end": 411
        }
    ],
    "isModule": true,
    "source": "declare class C {\n  f(\n    superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,\n    ...args\n  ): void,\n}\n\nfunction f(\n  superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,\n  ...args\n) {}\n\n[superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,,];\n\n[veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong, ...a] = [];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 411
}
```

### Printed

```javascript
declare class C {
  f(superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,
  ...args): void
}
function f(
  superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,
  ...args
) {}

[
  superSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong,
  ,,
];

[
  veryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLong,
  ...a
] = [];

```

### Diagnostics

```javascript
✔ No errors
```

