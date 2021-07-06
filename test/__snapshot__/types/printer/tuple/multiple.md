# Kataw parser test case

## Input

`````js
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
                "text": "aPrettyLongFunctionE",
                "rawText": "aPrettyLongFunctionE",
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
                                            "text": "Array",
                                            "rawText": "Array",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 61
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
                                                                                "start": 63,
                                                                                "end": 70
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
                                                                                    "start": 71,
                                                                                    "end": 78
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 71,
                                                                                "end": 78
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 63,
                                                                            "end": 79
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 62,
                                                                    "end": 81
                                                                },
                                                                {
                                                                    "kind": 138477575,
                                                                    "flags": 2097216,
                                                                    "transformFlags": 0,
                                                                    "start": 83,
                                                                    "end": 88
                                                                }
                                                            ],
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 88
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 62,
                                                        "end": 88
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 62,
                                                "end": 88
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 512,
                                            "start": 61,
                                            "end": 89
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 89
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 96
                                    },
                                    {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 103
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 89,
                                "end": 103
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 103
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 103
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 30,
                "end": 103
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 116
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 114,
                "end": 117
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
                        "start": 105,
                        "end": 112
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 114
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 105,
                "end": 114
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 117
        }
    ],
    "isModule": false,
    "source": "function aPrettyLongFunctionE(aRatherLongParameterName: Array<{\n  __id: string,\n} | null> | null | void): string[] {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 117
}
```

### Printed

```javascript
function aPrettyLongFunctionE(aRatherLongParameterName: Array<
    { __id: string } | null>
| null
| void): string[] {}
```

### Diagnostics

```javascript
✔ No errors
```

