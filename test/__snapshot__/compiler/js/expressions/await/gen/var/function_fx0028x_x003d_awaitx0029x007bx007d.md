# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: function f(x = await){}
## Input

`````js
var await; var f = (async function() { function f(x = await){} });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { function f(x = await){} });",
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
                                                    "kind": 264284,
                                                    "name": {
                                                        "kind": 131102,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 47,
                                                        "end": 49
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
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 50,
                                                                    "end": 51
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
                                                                        "start": 59,
                                                                        "end": 59
                                                                    },
                                                                    "flags": 2,
                                                                    "intersects": false,
                                                                    "transformFlags": 32780,
                                                                    "start": 53,
                                                                    "end": 59
                                                                },
                                                                "decorators": null,
                                                                "accessModifier": null,
                                                                "isReadOnly": false,
                                                                "flags": 2,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 50,
                                                                "end": 59
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 60
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
                                                            "start": 61,
                                                            "end": 61
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 256,
                                                    "start": 38,
                                                    "end": 62
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 62
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 64
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "start": 20,
                                    "end": 64
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 65
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 65
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 65
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 66
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 66
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 59,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

