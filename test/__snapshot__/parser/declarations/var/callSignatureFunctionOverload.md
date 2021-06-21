# Kataw parser test case

## Input

`````js
var foo: {
    (name: string): string;
    (name: 'order'): string;
    (name: 'content'): string;
    (name: 'done'): string;
}

var foo2: {
    (name: string): string;
    (name: 'order'): string;
    (name: 'order'): string;
    (name: 'done'): string;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 20
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "start": 21,
                                                            "end": 28
                                                        },
                                                        "flags": 2097152,
                                                        "start": 21,
                                                        "end": 28
                                                    },
                                                    "flags": 2097152,
                                                    "start": 16,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 16,
                                            "end": 28
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 30,
                                                "end": 37
                                            },
                                            "flags": 2097152,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 38
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 48
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134217967,
                                                            "text": "order",
                                                            "flags": 2097216,
                                                            "start": 49,
                                                            "end": 57
                                                        },
                                                        "flags": 2097152,
                                                        "start": 49,
                                                        "end": 57
                                                    },
                                                    "flags": 2097152,
                                                    "start": 44,
                                                    "end": 57
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 44,
                                            "end": 57
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "flags": 2097152,
                                            "start": 59,
                                            "end": 66
                                        },
                                        "flags": 2097152,
                                        "start": 38,
                                        "end": 67
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 73,
                                                        "end": 77
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134217967,
                                                            "text": "content",
                                                            "flags": 2097216,
                                                            "start": 78,
                                                            "end": 88
                                                        },
                                                        "flags": 2097152,
                                                        "start": 78,
                                                        "end": 88
                                                    },
                                                    "flags": 2097152,
                                                    "start": 73,
                                                    "end": 88
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 73,
                                            "end": 88
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 90,
                                                "end": 97
                                            },
                                            "flags": 2097152,
                                            "start": 90,
                                            "end": 97
                                        },
                                        "flags": 2097152,
                                        "start": 67,
                                        "end": 98
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 104,
                                                        "end": 108
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134217967,
                                                            "text": "done",
                                                            "flags": 2097216,
                                                            "start": 109,
                                                            "end": 116
                                                        },
                                                        "flags": 2097152,
                                                        "start": 109,
                                                        "end": 116
                                                    },
                                                    "flags": 2097152,
                                                    "start": 104,
                                                    "end": 116
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 104,
                                            "end": 116
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 118,
                                                "end": 125
                                            },
                                            "flags": 2097152,
                                            "start": 118,
                                            "end": 125
                                        },
                                        "flags": 2097152,
                                        "start": 98,
                                        "end": 126
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 128
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 128
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 128
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 128
            },
            "flags": 16,
            "start": 0,
            "end": 128
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 128,
                "end": 133
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo2",
                            "rawText": "foo2",
                            "flags": 96,
                            "start": 133,
                            "end": 138
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 147,
                                                        "end": 151
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "start": 152,
                                                            "end": 159
                                                        },
                                                        "flags": 2097152,
                                                        "start": 152,
                                                        "end": 159
                                                    },
                                                    "flags": 2097152,
                                                    "start": 147,
                                                    "end": 159
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 147,
                                            "end": 159
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 161,
                                                "end": 168
                                            },
                                            "flags": 2097152,
                                            "start": 161,
                                            "end": 168
                                        },
                                        "flags": 2097152,
                                        "start": 141,
                                        "end": 169
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 175,
                                                        "end": 179
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134217967,
                                                            "text": "order",
                                                            "flags": 2097216,
                                                            "start": 180,
                                                            "end": 188
                                                        },
                                                        "flags": 2097152,
                                                        "start": 180,
                                                        "end": 188
                                                    },
                                                    "flags": 2097152,
                                                    "start": 175,
                                                    "end": 188
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 175,
                                            "end": 188
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 190,
                                                "end": 197
                                            },
                                            "flags": 2097152,
                                            "start": 190,
                                            "end": 197
                                        },
                                        "flags": 2097152,
                                        "start": 169,
                                        "end": 198
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 204,
                                                        "end": 208
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134217967,
                                                            "text": "order",
                                                            "flags": 2097216,
                                                            "start": 209,
                                                            "end": 217
                                                        },
                                                        "flags": 2097152,
                                                        "start": 209,
                                                        "end": 217
                                                    },
                                                    "flags": 2097152,
                                                    "start": 204,
                                                    "end": 217
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 204,
                                            "end": 217
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 219,
                                                "end": 226
                                            },
                                            "flags": 2097152,
                                            "start": 219,
                                            "end": 226
                                        },
                                        "flags": 2097152,
                                        "start": 198,
                                        "end": 227
                                    },
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "name",
                                                        "rawText": "name",
                                                        "flags": 96,
                                                        "start": 233,
                                                        "end": 237
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134217967,
                                                            "text": "done",
                                                            "flags": 2097216,
                                                            "start": 238,
                                                            "end": 245
                                                        },
                                                        "flags": 2097152,
                                                        "start": 238,
                                                        "end": 245
                                                    },
                                                    "flags": 2097152,
                                                    "start": 233,
                                                    "end": 245
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 233,
                                            "end": 245
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 247,
                                                "end": 254
                                            },
                                            "flags": 2097152,
                                            "start": 247,
                                            "end": 254
                                        },
                                        "flags": 2097152,
                                        "start": 227,
                                        "end": 255
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 139,
                                "end": 257
                            },
                            "flags": 2097152,
                            "start": 139,
                            "end": 257
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 133,
                        "end": 257
                    }
                ],
                "flags": 16,
                "start": 133,
                "end": 257
            },
            "flags": 16,
            "start": 128,
            "end": 257
        }
    ],
    "isModule": false,
    "source": "var foo: {\n    (name: string): string;\n    (name: 'order'): string;\n    (name: 'content'): string;\n    (name: 'done'): string;\n}\n\nvar foo2: {\n    (name: string): string;\n    (name: 'order'): string;\n    (name: 'order'): string;\n    (name: 'done'): string;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 257
}
```

### Printed

```javascript

 var foo ;, var foo2 ; 
```

### Diagnostics

```javascript
✔ No errors
```

