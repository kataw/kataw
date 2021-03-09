# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: class x {*f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {*f(foo = await bar){}} });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { class x {*f(foo = await bar){}} });",
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
                                                    "kind": 48,
                                                    "name": {
                                                        "kind": 131102,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "typeParameters": null,
                                                    "classHeritage": null,
                                                    "implementClauses": null,
                                                    "members": {
                                                        "kind": 50,
                                                        "elements": [
                                                            {
                                                                "kind": 49,
                                                                "isStatic": false,
                                                                "isAbstract": false,
                                                                "isReadOnly": false,
                                                                "isOptional": false,
                                                                "method": {
                                                                    "kind": 17303650,
                                                                    "name": {
                                                                        "kind": 196711,
                                                                        "text": "f",
                                                                        "rawText": "f",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 49,
                                                                        "end": 50
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
                                                                                    "start": 51,
                                                                                    "end": 54
                                                                                },
                                                                                "isOptional": false,
                                                                                "type": null,
                                                                                "initializer": {
                                                                                    "kind": 196712,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 56,
                                                                                    "end": 62
                                                                                },
                                                                                "decorators": null,
                                                                                "accessModifier": null,
                                                                                "isReadOnly": false,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1,
                                                                                "start": 51,
                                                                                "end": 62
                                                                            },
                                                                            {
                                                                                "kind": 89,
                                                                                "ellipsis": false,
                                                                                "binding": {
                                                                                    "kind": 131102,
                                                                                    "text": "bar",
                                                                                    "rawText": "bar",
                                                                                    "flags": 2,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1025,
                                                                                    "start": 62,
                                                                                    "end": 66
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
                                                                                "start": 62,
                                                                                "end": 66
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 51,
                                                                        "end": 67
                                                                    },
                                                                    "isSetter": false,
                                                                    "isGetter": false,
                                                                    "contents": {
                                                                        "kind": 91,
                                                                        "functionStatementList": {
                                                                            "kind": 94,
                                                                            "statements": [],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 68,
                                                                            "end": 68
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 69
                                                                    },
                                                                    "decorators": null,
                                                                    "type": null,
                                                                    "accessModifier": null,
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 50,
                                                                    "end": 69
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 48,
                                                                "end": 69
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 48,
                                                        "end": 70
                                                    },
                                                    "decorators": null,
                                                    "isAbstract": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 38,
                                                    "end": 70
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 70
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 72
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "start": 20,
                                    "end": 72
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 73
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 73
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 73
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 74
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 74
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 63,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

