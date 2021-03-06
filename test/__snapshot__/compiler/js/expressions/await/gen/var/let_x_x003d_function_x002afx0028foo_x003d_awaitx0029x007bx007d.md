# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: let x = function *f(foo = await){}
## Input

`````js
var await; var f = (async function() { let x = function *f(foo = await){} });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { let x = function *f(foo = await){} });",
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
                                                                    "kind": 131102,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 42,
                                                                    "end": 44
                                                                },
                                                                "exclamation": false,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 8915041,
                                                                    "name": {
                                                                        "kind": 131102,
                                                                        "text": "f",
                                                                        "rawText": "f",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1025,
                                                                        "start": 57,
                                                                        "end": 58
                                                                    },
                                                                    "formalParameters": {
                                                                        "kind": 90,
                                                                        "formalParameterList": [
                                                                            {
                                                                                "kind": 89,
                                                                                "ellipsis": false,
                                                                                "binding": {
                                                                                    "kind": 131102,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "start": 59,
                                                                                    "end": 62
                                                                                },
                                                                                "isOptional": false,
                                                                                "type": null,
                                                                                "initializer": {
                                                                                    "kind": 65559,
                                                                                    "expression": {
                                                                                        "kind": 131322,
                                                                                        "text": "",
                                                                                        "flags": 6,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 70,
                                                                                        "end": 70
                                                                                    },
                                                                                    "flags": 2,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 32780,
                                                                                    "start": 64,
                                                                                    "end": 70
                                                                                },
                                                                                "decorators": null,
                                                                                "accessModifier": null,
                                                                                "isReadOnly": false,
                                                                                "flags": 2,
                                                                                "intersects": false,
                                                                                "transformFlags": 1,
                                                                                "start": 59,
                                                                                "end": 70
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 2,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 59,
                                                                        "end": 71
                                                                    },
                                                                    "contents": {
                                                                        "kind": 91,
                                                                        "functionStatementList": {
                                                                            "kind": 94,
                                                                            "statements": [],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 72,
                                                                            "end": 72
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 71,
                                                                        "end": 73
                                                                    },
                                                                    "typeParameters": null,
                                                                    "type": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 128,
                                                                    "start": 46,
                                                                    "end": 73
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 42,
                                                                "end": 73
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 73
                                                    },
                                                    "flags": 16,
                                                    "intersects": false,
                                                    "transformFlags": 769,
                                                    "start": 38,
                                                    "end": 73
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 73
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 75
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "start": 20,
                                    "end": 75
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 76
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 76
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 76
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 77
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 77
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 70,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 77
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

