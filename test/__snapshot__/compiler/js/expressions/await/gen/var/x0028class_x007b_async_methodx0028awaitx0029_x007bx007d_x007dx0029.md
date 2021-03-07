# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: (class { async method(await) {} })
## Input

`````js
var await; var f = (async function() { (class { async method(await) {} }) });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var await; var f = (async function() { (class { async method(await) {} }) });",
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
                                                        "kind": 66224,
                                                        "expression": {
                                                            "kind": 82483,
                                                            "name": null,
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
                                                                            "kind": 17827862,
                                                                            "name": {
                                                                                "kind": 196711,
                                                                                "text": "method",
                                                                                "rawText": "method",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 53,
                                                                                "end": 60
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 90,
                                                                                "formalParameterList": [
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
                                                                                            "start": 61,
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
                                                                                        "start": 61,
                                                                                        "end": 66
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 61,
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
                                                                                    "start": 69,
                                                                                    "end": 69
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 67,
                                                                                "end": 70
                                                                            },
                                                                            "decorators": null,
                                                                            "type": null,
                                                                            "accessModifier": null,
                                                                            "typeParameters": null,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 4,
                                                                            "start": 60,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1,
                                                                        "start": 47,
                                                                        "end": 70
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 47,
                                                                "end": 72
                                                            },
                                                            "decorators": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 40,
                                                            "end": 72
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 73
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
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
    "diagnostics": [],
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

