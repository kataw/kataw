# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\var
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/var
>>>>>>> chore: autogen & update snapshots
> :: test: var
> :: case: (class { static async method(...await) {} })
## Input

`````js
var await; var f = (async function() { (class { static async method(...await) {} }) });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { (class { static async method(...await) {} }) });",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
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
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
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
                                    "symbol": null,
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
                                                        "kind": 66099,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "classHeritage": null,
                                                        "implementClauses": null,
                                                        "members": {
                                                            "kind": 50,
                                                            "elements": [
                                                                {
                                                                    "kind": 49,
                                                                    "isStatic": true,
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
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 60,
                                                                            "end": 67
                                                                        },
                                                                        "formalParameters": {
                                                                            "kind": 90,
                                                                            "formalParameterList": [
                                                                                {
                                                                                    "kind": 16473,
                                                                                    "ellipsis": true,
                                                                                    "binding": {
                                                                                        "kind": 131102,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 1025,
                                                                                        "start": 71,
                                                                                        "end": 76
                                                                                    },
                                                                                    "isOptional": false,
                                                                                    "type": null,
                                                                                    "initializer": null,
                                                                                    "decorators": null,
                                                                                    "accessModifier": null,
                                                                                    "isReadOnly": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 4097,
                                                                                    "start": 68,
                                                                                    "end": 76
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 68,
                                                                            "end": 77
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
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 79,
                                                                                "end": 79
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 77,
                                                                            "end": 80
                                                                        },
                                                                        "decorators": null,
                                                                        "type": null,
                                                                        "accessModifier": null,
                                                                        "typeParameters": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 4,
                                                                        "start": 67,
                                                                        "end": 80
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 47,
                                                                    "end": 80
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 47,
                                                            "end": 82
                                                        },
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 40,
                                                        "end": 82
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 83
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 83
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 83
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 85
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 85
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 86
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 86
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 86
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 87
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

