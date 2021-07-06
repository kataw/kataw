# Kataw parser test case

## Input

`````js
declare function foo<TArguments: $ReadOnlyArray<{foo: 'a'}>, TReturn>(
    implementation?: (...args: TArguments) => TReturn,
  ): (...args: TArguments) => TReturn

`````

## Options

### Parser Options

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 16
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
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
                                "text": "TArguments",
                                "rawText": "TArguments",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 31
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "$ReadOnlyArray",
                                        "rawText": "$ReadOnlyArray",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 47
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
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 49,
                                                                    "end": 52
                                                                },
                                                                "optionalToken": null,
                                                                "type": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 134217967,
                                                                        "text": "a",
                                                                        "rawText": "'a'",
                                                                        "flags": 6291520,
                                                                        "transformFlags": 1024,
                                                                        "start": 53,
                                                                        "end": 57
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 57
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 49,
                                                                "end": 57
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 58
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 58
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 58
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 47,
                                        "end": 59
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 59
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 59
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 59
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "TReturn",
                                "rawText": "TReturn",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 68
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 68
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 68
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 20,
                "end": 69
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "implementation",
                            "rawText": "implementation",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 89
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 90
                        },
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
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 93,
                                                "end": 96
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "args",
                                                "rawText": "args",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 96,
                                                "end": 100
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
                                                        "text": "TArguments",
                                                        "rawText": "TArguments",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 101,
                                                        "end": 112
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 101,
                                                    "end": 112
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 101,
                                                "end": 112
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 93,
                                            "end": 112
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 93,
                                    "end": 112
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 113,
                                    "end": 116
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "TReturn",
                                            "rawText": "TReturn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 124
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 124
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 124
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 91,
                                "end": 124
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 124
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 124
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "transformFlags": 0,
                "start": 70,
                "end": 125
            },
            "contents": null,
            "returnType": {
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
                                "kind": 149,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 132,
                                    "end": 135
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "args",
                                    "rawText": "args",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 139
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
                                            "text": "TArguments",
                                            "rawText": "TArguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 140,
                                            "end": 151
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 140,
                                        "end": 151
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 140,
                                    "end": 151
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 151
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 132,
                        "end": 151
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 152,
                        "end": 155
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "TReturn",
                                "rawText": "TReturn",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 155,
                                "end": 163
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 163
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 163
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 130,
                    "end": 163
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 130,
                "end": 163
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 163
        }
    ],
    "isModule": false,
    "source": "declare function foo<TArguments: $ReadOnlyArray<{foo: 'a'}>, TReturn>(\n    implementation?: (...args: TArguments) => TReturn,\n  ): (...args: TArguments) => TReturn\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 164
}
```

### Printed

```javascript

declare function foo<
  TArguments: $ReadOnlyArray<{ foo: '\'a\'' }>,
  TReturn>(implementation? : (...args: TArguments) =>  TReturn): (...args: TArguments) =>  TReturn;
```

### Diagnostics

```javascript
✔ No errors
```

