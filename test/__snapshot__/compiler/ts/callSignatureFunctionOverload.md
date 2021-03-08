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

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var foo: {\n    (name: string): string;\n    (name: 'order'): string;\n    (name: 'content'): string;\n    (name: 'done'): string;\n}\n\nvar foo2: {\n    (name: string): string;\n    (name: 'order'): string;\n    (name: 'order'): string;\n    (name: 'done'): string;\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 16,
                                                            "end": 20
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 21,
                                                            "end": 28
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 16,
                                                        "end": 28
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 16,
                                                "end": 28
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 30,
                                                "end": 37
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 10,
                                            "end": 38
                                        },
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 44,
                                                            "end": 48
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8400,
                                                            "text": "order",
                                                            "rawText": "order",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 49,
                                                            "end": 57
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 44,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 44,
                                                "end": 57
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 38,
                                            "end": 67
                                        },
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 73,
                                                            "end": 77
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8400,
                                                            "text": "content",
                                                            "rawText": "content",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 78,
                                                            "end": 88
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 73,
                                                        "end": 88
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 73,
                                                "end": 88
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 90,
                                                "end": 97
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 67,
                                            "end": 98
                                        },
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 104,
                                                            "end": 108
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8400,
                                                            "text": "done",
                                                            "rawText": "done",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 109,
                                                            "end": 116
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 104,
                                                        "end": 116
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 104,
                                                "end": 116
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 118,
                                                "end": 125
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 98,
                                            "end": 126
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 10,
                                    "end": 128
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 128
                            },
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16384,
                            "end": 128
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 128
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 128
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "foo2",
                                "rawText": "foo2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 133,
                                "end": 138
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 147,
                                                            "end": 151
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 152,
                                                            "end": 159
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 147,
                                                        "end": 159
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 147,
                                                "end": 159
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 161,
                                                "end": 168
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 141,
                                            "end": 169
                                        },
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 175,
                                                            "end": 179
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8400,
                                                            "text": "order",
                                                            "rawText": "order",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 180,
                                                            "end": 188
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 175,
                                                        "end": 188
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 175,
                                                "end": 188
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 190,
                                                "end": 197
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 169,
                                            "end": 198
                                        },
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 204,
                                                            "end": 208
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8400,
                                                            "text": "order",
                                                            "rawText": "order",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 209,
                                                            "end": 217
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 204,
                                                        "end": 217
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 204,
                                                "end": 217
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 219,
                                                "end": 226
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 198,
                                            "end": 227
                                        },
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 233,
                                                            "end": 237
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8400,
                                                            "text": "done",
                                                            "rawText": "done",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 238,
                                                            "end": 245
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 233,
                                                        "end": 245
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 233,
                                                "end": 245
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 247,
                                                "end": 254
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 227,
                                            "end": 255
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 141,
                                    "end": 257
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 139,
                                "end": 257
                            },
                            "initializer": null,
                            "flags": 133,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16384,
                            "end": 257
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 133,
                    "end": 257
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 128,
                "end": 257
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 257
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 258
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

