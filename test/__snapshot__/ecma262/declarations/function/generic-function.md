# Kataw parser test case

## Input

`````js
declare function from<T>(arg: boolean): Query<T>;
function from<T>(arg: any): Query<T> {
    return undefined;
}

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
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 7,
                "end": 16
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 16,
                "end": 21
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 22,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 22,
                    "end": 23
                },
                "flags": 2097152,
                "start": 21,
                "end": 24
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 96,
                            "start": 25,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234254,
                                "flags": 2097216,
                                "start": 29,
                                "end": 37
                            },
                            "flags": 2097152,
                            "start": 29,
                            "end": 37
                        },
                        "right": null,
                        "flags": 32,
                        "start": 25,
                        "end": 37
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 25,
                "end": 37
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Query",
                        "rawText": "Query",
                        "flags": 96,
                        "start": 39,
                        "end": 45
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
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 46,
                                            "end": 47
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 46,
                                        "end": 47
                                    },
                                    "flags": 2097152,
                                    "start": 46,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 46,
                            "end": 47
                        },
                        "flags": 2097152,
                        "start": 45,
                        "end": 48
                    },
                    "flags": 2097152,
                    "start": 39,
                    "end": 48
                },
                "flags": 2097152,
                "start": 39,
                "end": 48
            },
            "flags": 4112,
            "start": 7,
            "end": 48
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 48,
            "end": 49
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 49,
                "end": 58
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 58,
                "end": 63
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 64,
                                "end": 65
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 64,
                            "end": 65
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 64,
                    "end": 65
                },
                "flags": 2097152,
                "start": 63,
                "end": 66
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 96,
                            "start": 67,
                            "end": 70
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 71,
                                "end": 75
                            },
                            "flags": 2097152,
                            "start": 71,
                            "end": 75
                        },
                        "right": null,
                        "flags": 32,
                        "start": 67,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 67,
                "end": 75
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
                                "start": 88,
                                "end": 99
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 96,
                                "start": 99,
                                "end": 109
                            },
                            "flags": 81,
                            "start": 88,
                            "end": 110
                        }
                    ],
                    "flags": 33,
                    "start": 88,
                    "end": 110
                },
                "flags": 32,
                "start": 86,
                "end": 112
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Query",
                        "rawText": "Query",
                        "flags": 96,
                        "start": 77,
                        "end": 83
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
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 84,
                                            "end": 85
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "flags": 2097152,
                                    "start": 84,
                                    "end": 85
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 84,
                            "end": 85
                        },
                        "flags": 2097152,
                        "start": 83,
                        "end": 86
                    },
                    "flags": 2097152,
                    "start": 77,
                    "end": 86
                },
                "flags": 2097152,
                "start": 77,
                "end": 86
            },
            "flags": 16,
            "start": 49,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "declare function from<T>(arg: boolean): Query<T>;\nfunction from<T>(arg: any): Query<T> {\n    return undefined;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  declare function from<T> (arg: boolean): Query<T> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  function from<T> (arg: any): Query<T> {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    return undefined;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }

```

### Diagnostics

```javascript
✔ No errors
```

