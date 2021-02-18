# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: var { f: await f } = {};
## Input

`````js
var await; var f = (async function() { var { f: await f } = {}; });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { var { f: await f } = {}; });",
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
                                "text": "await",
                                "rawText": "await",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 9
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 10
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 16
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 9439250,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 35,
                                        "end": 36
                                    },
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
                                                                    "kind": 33554598,
                                                                    "propertyList": {
                                                                        "kind": 33,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 32,
                                                                                "ellipsis": false,
                                                                                "key": {
                                                                                    "kind": 196711,
                                                                                    "text": "f",
                                                                                    "rawText": "f",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 44,
                                                                                    "end": 47
                                                                                },
                                                                                "value": {
                                                                                    "kind": 134217756,
                                                                                    "ellipsis": false,
                                                                                    "left": {
                                                                                        "kind": 131102,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 1025,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 47,
                                                                                        "end": 53
                                                                                    },
                                                                                    "right": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 47,
                                                                                    "end": 53
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 44,
                                                                                "end": 53
                                                                            },
                                                                            {
                                                                                "kind": 203,
                                                                                "ellipsis": false,
                                                                                "left": {
                                                                                    "kind": 131102,
                                                                                    "text": "f",
                                                                                    "rawText": "f",
                                                                                    "flags": 2,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 53,
                                                                                    "end": 55
                                                                                },
                                                                                "right": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1024,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 53,
                                                                                "end": 55
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "trailingComma": false,
                                                                        "transformFlags": 1025,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 44,
                                                                        "end": 55
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 42,
                                                                    "end": 57
                                                                },
                                                                "exclamation": false,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 67224232,
                                                                    "propertyList": {
                                                                        "kind": 65722,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 61,
                                                                        "end": 61
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 59,
                                                                    "end": 62
                                                                },
                                                                "flags": 42,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 0,
                                                                "end": 62
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 42,
                                                        "end": 62
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 38,
                                                    "end": 63
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 38,
                                            "end": 63
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 36,
                                        "end": 65
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 65
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 66
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 66
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 66
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 10,
                "end": 67
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 67
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 54,
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
    "end": 67
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

