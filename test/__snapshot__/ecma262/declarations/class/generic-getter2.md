# Kataw parser test case

## Input

`````js
class A<T> { }

class C<T> {
    data: A<T>;
    get x(): A<T> {
        return this.data;
    }
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7,
                "end": 10
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "flags": 10,
                "transformFlags": 0,
                "start": 32,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 14,
                "end": 21
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 23
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
                                "transformFlags": 0,
                                "start": 24,
                                "end": 25
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 25
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 23,
                "end": 26
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "data",
                                "rawText": "data",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 37
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
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
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
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 42
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 42
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 42
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 43
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 43
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 43
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 28,
                            "end": 43
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 44
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 52
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 54
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 56
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 59
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
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 61
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 61
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 61
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 61
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 62
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 62
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 62
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
                                                    "transformFlags": 0,
                                                    "start": 64,
                                                    "end": 79
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 79,
                                                        "end": 84
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "data",
                                                        "rawText": "data",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 85,
                                                        "end": 89
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 79,
                                                    "end": 89
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 64,
                                                "end": 90
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 90
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 96
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 96
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 96
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 96
                },
                "flags": 26,
                "transformFlags": 0,
                "start": 32,
                "end": 98
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 14,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "class A<T> { }\n\nclass C<T> {\n    data: A<T>;\n    get x(): A<T> {\n        return this.data;\n    }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript

class A<T> {}
class C<T> {
  data: A<T>;;
  get x(): A<T> {
    return this .data;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

