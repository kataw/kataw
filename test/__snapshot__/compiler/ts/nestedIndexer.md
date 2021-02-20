# Kataw parser test case

## Input

`````js
function then(x) {

var match: { [index: number]: string; }

}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function then(x) {\n\nvar match: { [index: number]: string; }\n\n}\n",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "then",
                    "rawText": "then",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 13
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 15
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 16
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
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
                                                "text": "match",
                                                "rawText": "match",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 23,
                                                "end": 29
                                            },
                                            "exclamation": false,
                                            "type": {
                                                "kind": 230,
                                                "objectTypeMembers": {
                                                    "kind": 169,
                                                    "members": [
                                                        {
                                                            "kind": 116,
                                                            "accessModifier": null,
                                                            "parameters": {
                                                                "kind": 175,
                                                                "parameterList": [
                                                                    {
                                                                        "kind": 174,
                                                                        "ellipsis": false,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "index",
                                                                            "rawText": "index",
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 1025,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 34,
                                                                            "end": 39
                                                                        },
                                                                        "isOptional": false,
                                                                        "type": {
                                                                            "kind": 161,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 2097152,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 40,
                                                                            "end": 47
                                                                        },
                                                                        "initializer": null,
                                                                        "accessModifier": null,
                                                                        "isReadOnly": false,
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 1,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 34,
                                                                        "end": 47
                                                                    }
                                                                ],
                                                                "trailingcomma": false,
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 34,
                                                                "end": 47
                                                            },
                                                            "returnType": {
                                                                "kind": 4194510,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 49,
                                                                "end": 56
                                                            },
                                                            "isStatic": false,
                                                            "isReadOnly": false,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 34,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 32,
                                                    "end": 59
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 30,
                                                "end": 59
                                            },
                                            "initializer": null,
                                            "flags": 23,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 81920,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 23,
                                    "end": 59
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 59
                            }
                        ],
                        "multiline": true,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 18,
                        "end": 59
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 62
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 62
            }
        ],
        "transformFlags": 0,
        "flags": 81920,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 62
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
    "end": 63
}
```

### Printed


```javascript

function then(x) {
    var match: {
        [index: number]: string;
    };
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

