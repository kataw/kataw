# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: function x(async x, await y) {
## Input

`````js
{ { { function x(async x, await y) {
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ { { function x(async x, await y) {",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2099237,
                                        "block": {
                                            "kind": 2084,
                                            "statements": [
                                                {
                                                    "kind": 264284,
                                                    "name": {
                                                        "kind": 131102,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "formalParameters": {
                                                        "kind": 90,
                                                        "formalParameterList": [
                                                            {
                                                                "kind": 89,
                                                                "ellipsis": false,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "async",
                                                                    "rawText": "async",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 17,
                                                                    "end": 22
                                                                },
                                                                "isOptional": false,
                                                                "type": null,
                                                                "initializer": null,
                                                                "decorators": null,
                                                                "accessModifier": null,
                                                                "isReadOnly": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 17,
                                                                "end": 22
                                                            },
                                                            {
                                                                "kind": 89,
                                                                "ellipsis": false,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 2,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 22,
                                                                    "end": 24
                                                                },
                                                                "isOptional": false,
                                                                "type": null,
                                                                "initializer": null,
                                                                "decorators": null,
                                                                "accessModifier": null,
                                                                "isReadOnly": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 22,
                                                                "end": 24
                                                            },
                                                            {
                                                                "kind": 89,
                                                                "ellipsis": false,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "await",
                                                                    "rawText": "await",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 25,
                                                                    "end": 31
                                                                },
                                                                "isOptional": false,
                                                                "type": null,
                                                                "initializer": null,
                                                                "decorators": null,
                                                                "accessModifier": null,
                                                                "isReadOnly": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 25,
                                                                "end": 31
                                                            },
                                                            {
                                                                "kind": 89,
                                                                "ellipsis": false,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 2,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 31,
                                                                    "end": 33
                                                                },
                                                                "isOptional": false,
                                                                "type": null,
                                                                "initializer": null,
                                                                "decorators": null,
                                                                "accessModifier": null,
                                                                "isReadOnly": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 31,
                                                                "end": 33
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 17,
                                                        "end": 34
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 91,
                                                        "functionStatementList": {
                                                            "kind": 94,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 36,
                                                            "end": 36
                                                        },
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 34,
                                                        "end": 36
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 256,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 5,
                                                    "end": 36
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 5,
                                            "end": 36
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 3,
                                        "end": 36
                                    }
                                ],
                                "multiline": false,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 36
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 36
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1,
                    "end": 36
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 36
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 35,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

