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
    "kind": 149,
    "source": "var foo: {\n    (name: string): string;\n    (name: 'order'): string;\n    (name: 'content'): string;\n    (name: 'done'): string;\n}\n\nvar foo2: {\n    (name: string): string;\n    (name: 'order'): string;\n    (name: 'order'): string;\n    (name: 'done'): string;\n}\n",
    "filename": "",
    "moduleBody": {
        "kind": 150,
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
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 230,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 16,
                                                            "end": 20
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4194510,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 21,
                                                            "end": 28
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 16,
                                                        "end": 28
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 16,
                                                "end": 28
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 30,
                                                "end": 37
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 10,
                                            "end": 38
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 44,
                                                            "end": 48
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 208,
                                                            "value": "order",
                                                            "rawValue": "order",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 49,
                                                            "end": 57
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 44,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 44,
                                                "end": 57
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 38,
                                            "end": 67
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 73,
                                                            "end": 77
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 208,
                                                            "value": "content",
                                                            "rawValue": "content",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 78,
                                                            "end": 88
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 73,
                                                        "end": 88
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 73,
                                                "end": 88
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 90,
                                                "end": 97
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 67,
                                            "end": 98
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 104,
                                                            "end": 108
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 208,
                                                            "value": "done",
                                                            "rawValue": "done",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 109,
                                                            "end": 116
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 104,
                                                        "end": 116
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 104,
                                                "end": 116
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 118,
                                                "end": 125
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 98,
                                            "end": 126
                                        }
                                    ],
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 128
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 128
                            },
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 81920,
                            "end": 128
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 128
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
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
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 133,
                                "end": 138
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 230,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 147,
                                                            "end": 151
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4194510,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 152,
                                                            "end": 159
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 147,
                                                        "end": 159
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 147,
                                                "end": 159
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 161,
                                                "end": 168
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 141,
                                            "end": 169
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 175,
                                                            "end": 179
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 208,
                                                            "value": "order",
                                                            "rawValue": "order",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 180,
                                                            "end": 188
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 175,
                                                        "end": 188
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 175,
                                                "end": 188
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 190,
                                                "end": 197
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 169,
                                            "end": 198
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 204,
                                                            "end": 208
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 208,
                                                            "value": "order",
                                                            "rawValue": "order",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 209,
                                                            "end": 217
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 204,
                                                        "end": 217
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 204,
                                                "end": 217
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 219,
                                                "end": 226
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 198,
                                            "end": 227
                                        },
                                        {
                                            "kind": 44,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 175,
                                                "parameterList": [
                                                    {
                                                        "kind": 174,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 233,
                                                            "end": 237
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 208,
                                                            "value": "done",
                                                            "rawValue": "done",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 238,
                                                            "end": 245
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 233,
                                                        "end": 245
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 233,
                                                "end": 245
                                            },
                                            "returnType": {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 247,
                                                "end": 254
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 227,
                                            "end": 255
                                        }
                                    ],
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 141,
                                    "end": 257
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 139,
                                "end": 257
                            },
                            "initializer": null,
                            "flags": 133,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 81920,
                            "end": 257
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 133,
                    "end": 257
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 128,
                "end": 257
            }
        ],
        "transformFlags": 0,
        "flags": 81920,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 257
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
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

var foo: {
    (name: string):string;
    (name: "order"):string;
    (name: "content"):string;
    (name: "done"):string;
};

var foo2: {
    (name: string):string;
    (name: "order"):string;
    (name: "order"):string;
    (name: "done"):string;
};

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

