# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: call(await.foo)
## Input

`````js
var await; var f = (async function() { call(await.foo) });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { call(await.foo) });",
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
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 66091,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "call",
                                                            "rawText": "call",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 43
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 65559,
                                                                    "expression": {
                                                                        "kind": 66232,
                                                                        "member": {
                                                                            "kind": 131322,
                                                                            "text": "",
                                                                            "flags": 6,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 49,
                                                                            "end": 49
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 50,
                                                                            "end": 53
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 49,
                                                                        "end": 53,
                                                                        "period": {
                                                                            "kind": 254,
                                                                            "pos": 49,
                                                                            "end": 50
                                                                        }
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 32780,
                                                                    "start": 44,
                                                                    "end": 53
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "start": 49,
                                                            "end": 54
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 54
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 54
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 54
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 56
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 4,
                                    "start": 20,
                                    "end": 56
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 57
                            },
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 57
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 57
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 58
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 58
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 49,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

