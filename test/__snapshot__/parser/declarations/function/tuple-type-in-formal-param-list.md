# Kataw parser test case

## Input

`````js
function x({ y }: z<[string |Q]>) {}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
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
                                                    "kind": 147,
                                                    "elementTypes": [
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 137,
                                                                "types": [
                                                                    {
                                                                        "kind": 134234347,
                                                                        "flags": 2097216,
                                                                        "start": 21,
                                                                        "end": 27
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "Q",
                                                                            "rawText": "Q",
                                                                            "flags": 96,
                                                                            "start": 29,
                                                                            "end": 30
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 29,
                                                                        "end": 30
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 27,
                                                                "end": 30
                                                            },
                                                            "flags": 2097152,
                                                            "start": 21,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 20,
                                                    "end": 31
                                                },
                                                "flags": 2097152,
                                                "start": 20,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 20,
                                        "end": 31
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 32
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 32
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 32
                        },
                        "right": null,
                        "flags": 34,
                        "start": 11,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 10,
                "end": 33
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 35,
                    "end": 35
                },
                "flags": 32,
                "start": 33,
                "end": 36
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function x({ y }: z<[string |Q]>) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

function x({
  y
}) {}
```

### Diagnostics

```javascript
✔ No errors
```

