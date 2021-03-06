# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: let { f: ...await f } = {};
## Input

`````js
var await; var f = (async function() { let { f: ...await f } = {}; });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { let { f: ...await f } = {}; });",
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
                                "start": 3,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 9
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
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
                                        "start": 35,
                                        "end": 36
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 142,
                                                    "isConst": false,
                                                    "binding": {
                                                        "kind": 31,
                                                        "bindingList": [
                                                            {
                                                                "kind": 141,
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
                                                                                    "start": 44,
                                                                                    "end": 47
                                                                                },
                                                                                "value": {
                                                                                    "kind": 134217756,
                                                                                    "ellipsis": true,
                                                                                    "left": {
                                                                                        "kind": 131102,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 1025,
                                                                                        "start": 51,
                                                                                        "end": 56
                                                                                    },
                                                                                    "right": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 4097,
                                                                                    "start": 47,
                                                                                    "end": 56
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "start": 44,
                                                                                "end": 56
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
                                                                                    "start": 56,
                                                                                    "end": 58
                                                                                },
                                                                                "right": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1024,
                                                                                "start": 56,
                                                                                "end": 58
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "trailingComma": false,
                                                                        "transformFlags": 1025,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "start": 44,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 42,
                                                                    "end": 60
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
                                                                        "start": 64,
                                                                        "end": 64
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 62,
                                                                    "end": 65
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 42,
                                                                "end": 65
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 65
                                                    },
                                                    "flags": 16,
                                                    "intersects": false,
                                                    "transformFlags": 769,
                                                    "start": 38,
                                                    "end": 66
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 66
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 68
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "start": 20,
                                    "end": 68
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 69
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 69
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 69
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 70
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 70
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 57,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

