# Kataw parser test case

## Input

`````js
function aPrettyLongFunctionD(aRatherLongParameterName: MyType | null): string[] {}

function aPrettyLongFunctionE(aRatherLongParameterName: Array<{
  __id: string,
} | null> | null | void): string[] {}
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "aPrettyLongFunctionD",
                "rawText": "aPrettyLongFunctionD",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 29
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "aRatherLongParameterName",
                            "rawText": "aRatherLongParameterName",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 54
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "MyType",
                                            "rawText": "MyType",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 62
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 62
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 69
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 69
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 69
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 69
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 30,
                "end": 69
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 82
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 80,
                "end": 83
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 136,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 78
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 71,
                    "end": 80
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 71,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 83
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 83,
                "end": 93
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "aPrettyLongFunctionE",
                "rawText": "aPrettyLongFunctionE",
                "flags": 96,
                "transformFlags": 0,
                "start": 93,
                "end": 114
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "aRatherLongParameterName",
                            "rawText": "aRatherLongParameterName",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 115,
                            "end": 139
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "Array",
                                            "rawText": "Array",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 140,
                                            "end": 146
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
                                                            "kind": 137,
                                                            "types": [
                                                                {
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
                                                                                "text": "__id",
                                                                                "rawText": "__id",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 148,
                                                                                "end": 155
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": {
                                                                                "kind": 139,
                                                                                "bitwiseOrToken": null,
                                                                                "bitwiseAndToken": null,
                                                                                "type": {
                                                                                    "kind": 134234347,
                                                                                    "flags": 2097216,
                                                                                    "transformFlags": 0,
                                                                                    "start": 156,
                                                                                    "end": 163
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 156,
                                                                                "end": 163
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 148,
                                                                            "end": 164
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 147,
                                                                    "end": 166
                                                                },
                                                                {
                                                                    "kind": 138477575,
                                                                    "flags": 2097216,
                                                                    "transformFlags": 0,
                                                                    "start": 168,
                                                                    "end": 173
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 166,
                                                            "end": 173
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 147,
                                                        "end": 173
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 147,
                                                "end": 173
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 512,
                                            "start": 146,
                                            "end": 174
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 140,
                                        "end": 174
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 181
                                    },
                                    {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 183,
                                        "end": 188
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 188
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 188
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 115,
                        "end": 188
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 115,
                "end": 188
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 201,
                    "end": 201
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 199,
                "end": 202
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 136,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "transformFlags": 0,
                        "start": 190,
                        "end": 197
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 190,
                    "end": 199
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 190,
                "end": 199
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 83,
            "end": 202
        }
    ],
    "isModule": false,
    "source": "function aPrettyLongFunctionD(aRatherLongParameterName: MyType | null): string[] {}\n\nfunction aPrettyLongFunctionE(aRatherLongParameterName: Array<{\n  __id: string,\n} | null> | null | void): string[] {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 202
}
```

### Printed

```javascript

function aPrettyLongFunctionD(aRatherLongParameterName: MyType
| null): string[] {}
function aPrettyLongFunctionE(aRatherLongParameterName: Array<
    { __id: string } | null>
| null
| void): string[] {}

```

### Diagnostics

```javascript
✔ No errors
```

