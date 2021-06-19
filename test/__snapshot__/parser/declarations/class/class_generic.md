# Kataw parser test case

## Input

`````js
class C<T> {
  arr: Array<{value: T}>;

  foo(value: T) {
    var entry: {value: T} = {value};
    this.arr.push(entry);
  }
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
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 96,
                                "start": 12,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 25
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
                                                                "staticToken": null,
                                                                "getKeyword": null,
                                                                "setKeyword": null,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 96,
                                                                    "start": 27,
                                                                    "end": 32
                                                                },
                                                                "optionalToken": null,
                                                                "value": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 33,
                                                                            "end": 35
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 33,
                                                                        "end": 35
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 33,
                                                                    "end": 35
                                                                },
                                                                "flags": 2097152,
                                                                "start": 27,
                                                                "end": 35
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 26,
                                                        "end": 36
                                                    },
                                                    "flags": 2097152,
                                                    "start": 26,
                                                    "end": 36
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 26,
                                            "end": 36
                                        },
                                        "flags": 2097152,
                                        "start": 25,
                                        "end": 37
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 37
                                },
                                "flags": 2097152,
                                "start": 19,
                                "end": 37
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 12,
                            "end": 37
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 37,
                            "end": 38
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 45
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "start": 46,
                                                "end": 51
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 52,
                                                        "end": 54
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 52,
                                                    "end": 54
                                                },
                                                "flags": 2097152,
                                                "start": 52,
                                                "end": 54
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 46,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 46,
                                    "end": 55
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 81,
                                                    "start": 57,
                                                    "end": 65
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "entry",
                                                                "rawText": "entry",
                                                                "flags": 96,
                                                                "start": 65,
                                                                "end": 71
                                                            },
                                                            "type": {
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
                                                                                "text": "value",
                                                                                "rawText": "value",
                                                                                "flags": 96,
                                                                                "start": 74,
                                                                                "end": 79
                                                                            },
                                                                            "optionalToken": null,
                                                                            "value": {
                                                                                "kind": 139,
                                                                                "bitwiseOrToken": null,
                                                                                "bitwiseAndToken": null,
                                                                                "type": {
                                                                                    "kind": 144,
                                                                                    "name": {
                                                                                        "kind": 134299649,
                                                                                        "text": "T",
                                                                                        "rawText": "T",
                                                                                        "flags": 96,
                                                                                        "start": 80,
                                                                                        "end": 82
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "start": 80,
                                                                                    "end": 82
                                                                                },
                                                                                "flags": 2097152,
                                                                                "start": 80,
                                                                                "end": 82
                                                                            },
                                                                            "flags": 2097152,
                                                                            "start": 74,
                                                                            "end": 82
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 2097152,
                                                                    "start": 72,
                                                                    "end": 83
                                                                },
                                                                "flags": 2097152,
                                                                "start": 72,
                                                                "end": 83
                                                            },
                                                            "initializer": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "value",
                                                                            "rawText": "value",
                                                                            "flags": 96,
                                                                            "start": 87,
                                                                            "end": 92
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 87,
                                                                    "end": 92
                                                                },
                                                                "flags": 48,
                                                                "start": 85,
                                                                "end": 93
                                                            },
                                                            "flags": 16,
                                                            "start": 65,
                                                            "end": 93
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 65,
                                                    "end": 93
                                                },
                                                "flags": 16,
                                                "start": 57,
                                                "end": 94
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4276321,
                                                                "flags": 97,
                                                                "start": 94,
                                                                "end": 103
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "arr",
                                                                "rawText": "arr",
                                                                "flags": 96,
                                                                "start": 104,
                                                                "end": 107
                                                            },
                                                            "flags": 536870944,
                                                            "start": 94,
                                                            "end": 107
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "push",
                                                            "rawText": "push",
                                                            "flags": 96,
                                                            "start": 108,
                                                            "end": 112
                                                        },
                                                        "flags": 536870944,
                                                        "start": 94,
                                                        "end": 112
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "entry",
                                                                "rawText": "entry",
                                                                "flags": 96,
                                                                "start": 113,
                                                                "end": 118
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 113,
                                                        "end": 118
                                                    },
                                                    "flags": 268435488,
                                                    "start": 94,
                                                    "end": 119
                                                },
                                                "flags": 16,
                                                "start": 94,
                                                "end": 120
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 57,
                                        "end": 120
                                    },
                                    "flags": 32,
                                    "start": 55,
                                    "end": 124
                                },
                                "flags": 0,
                                "start": 45,
                                "end": 124
                            },
                            "flags": 0,
                            "start": 38,
                            "end": 124
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 124
                },
                "flags": 10,
                "start": 32,
                "end": 126
            },
            "flags": 16,
            "start": 0,
            "end": 126
        }
    ],
    "isModule": false,
    "source": "class C<T> {\n  arr: Array<{value: T}>;\n\n  foo(value: T) {\n    var entry: {value: T} = {value};\n    this.arr.push(entry);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript

class C {
  arr;

  foo {
    var entry:  = { value };
    this.arr.push(entry);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

