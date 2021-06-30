# Kataw parser test case

## Input

`````js
class C<T> {
    data: T;
    get x(): T {
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
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
                                "start": 8,
                                "end": 9
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 9
                },
                "flags": 2097152,
                "start": 7,
                "end": 10
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
                                "flags": 96,
                                "start": 12,
                                "end": 21
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
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "start": 22,
                                "end": 24
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 12,
                            "end": 24
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 24,
                            "end": 25
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
                                "start": 25,
                                "end": 33
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
                                    "start": 33,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 36,
                                    "end": 37
                                },
                                "returnType": {
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
                                            "start": 38,
                                            "end": 40
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "flags": 2097152,
                                    "start": 38,
                                    "end": 40
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
                                                    "start": 42,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 57,
                                                        "end": 62
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "data",
                                                        "rawText": "data",
                                                        "flags": 96,
                                                        "start": 63,
                                                        "end": 67
                                                    },
                                                    "flags": 96,
                                                    "start": 57,
                                                    "end": 67
                                                },
                                                "flags": 81,
                                                "start": 42,
                                                "end": 68
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 42,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "start": 40,
                                    "end": 74
                                },
                                "flags": 1024,
                                "start": 35,
                                "end": 74
                            },
                            "flags": 1024,
                            "start": 25,
                            "end": 74
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 74
                },
                "flags": 10,
                "start": 32,
                "end": 76
            },
            "flags": 16,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "class C<T> {\n    data: T;\n    get x(): T {\n        return this.data;\n    }\n}\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

class C<T> {
  data: T
  ;
  get x(): T {
    return this.data;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

