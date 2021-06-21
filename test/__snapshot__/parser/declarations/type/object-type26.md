# Kataw parser test case

## Input

`````js
type a = {[((({a():foo}) => [c|d]))]:string};
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 288,
                                            "arrowTypeParameterList": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "arrowToken": {
                                                "kind": 292,
                                                "parameters": [
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
                                                                    "staticToken": null,
                                                                    "getKeyword": null,
                                                                    "setKeyword": null,
                                                                    "key": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 15,
                                                                        "end": 16
                                                                    },
                                                                    "optionalToken": null,
                                                                    "value": {
                                                                        "kind": 148,
                                                                        "functionTypeParameterList": {
                                                                            "kind": 282,
                                                                            "parameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "start": 17,
                                                                            "end": 17
                                                                        },
                                                                        "returnType": {
                                                                            "kind": 139,
                                                                            "bitwiseOrToken": null,
                                                                            "bitwiseAndToken": null,
                                                                            "type": {
                                                                                "kind": 144,
                                                                                "name": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 96,
                                                                                    "start": 19,
                                                                                    "end": 22
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "start": 19,
                                                                                "end": 22
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 19,
                                                                            "end": 22
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 16,
                                                                        "end": 22
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 15,
                                                                    "end": 22
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "start": 14,
                                                            "end": 23
                                                        },
                                                        "flags": 2097152,
                                                        "start": 14,
                                                        "end": 23
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 27
                                            },
                                            "returnType": {
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
                                                                        "kind": 144,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "c",
                                                                            "rawText": "c",
                                                                            "flags": 96,
                                                                            "start": 29,
                                                                            "end": 30
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 29,
                                                                        "end": 30
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "d",
                                                                            "rawText": "d",
                                                                            "flags": 96,
                                                                            "start": 31,
                                                                            "end": 32
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 31,
                                                                        "end": 32
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 30,
                                                                "end": 32
                                                            },
                                                            "flags": 2097152,
                                                            "start": 29,
                                                            "end": 32
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 27,
                                                    "end": 33
                                                },
                                                "flags": 2097152,
                                                "start": 27,
                                                "end": 33
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 13,
                                            "end": 33
                                        },
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 33
                                    },
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 35
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 37,
                                    "end": 43
                                },
                                "flags": 2097152,
                                "start": 37,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 44
                },
                "flags": 2097152,
                "start": 8,
                "end": 44
            },
            "flags": 2097152,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "type a = {[((({a():foo}) => [c|d]))]:string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

