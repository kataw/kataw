# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: function f() { class C { await() { } } }
## Input

`````js
var await; var f = (async function() { function f() { class C { await() { } } } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { function f() { class C { await() { } } } });",
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
                                                "kind": 264284,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1025,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 50,
                                                    "end": 51
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 48,
                                                                "name": {
                                                                    "kind": 131102,
                                                                    "text": "C",
                                                                    "rawText": "C",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1025,
                                                                    "start": 59,
                                                                    "end": 61
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
                                                                                "kind": 16844946,
                                                                                "name": {
                                                                                    "kind": 196711,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 63,
                                                                                    "end": 69
                                                                                },
                                                                                "formalParameters": {
                                                                                    "kind": 90,
                                                                                    "formalParameterList": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 70,
                                                                                    "end": 71
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
                                                                                        "start": 73,
                                                                                        "end": 73
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 71,
                                                                                    "end": 75
                                                                                },
                                                                                "decorators": null,
                                                                                "type": null,
                                                                                "accessModifier": null,
                                                                                "typeParameters": null,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 69,
                                                                                "end": 75
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 63,
                                                                            "end": 75
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 1,
                                                                    "start": 63,
                                                                    "end": 77
                                                                },
                                                                "decorators": null,
                                                                "isAbstract": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1,
                                                                "start": 53,
                                                                "end": 77
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 77
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 79
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 256,
                                                "start": 38,
                                                "end": 79
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 79
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 81
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 81
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 82
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 82
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 82
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 83
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
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

