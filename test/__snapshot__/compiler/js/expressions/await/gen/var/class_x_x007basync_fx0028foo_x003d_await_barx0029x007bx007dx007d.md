# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/var
> :: test: var
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {async f(foo = await bar){}} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { class x {async f(foo = await bar){}} });",
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
                                                "kind": 48,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
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
                                                                "kind": 17827862,
                                                                "name": {
                                                                    "kind": 196711,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 55
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 90,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 16473,
                                                                            "ellipsis": false,
                                                                            "binding": {
                                                                                "kind": 131102,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 56,
                                                                                "end": 59
                                                                            },
                                                                            "isOptional": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 65559,
                                                                                "expression": {
                                                                                    "kind": 196712,
                                                                                    "text": "bar",
                                                                                    "rawText": "bar",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 67,
                                                                                    "end": 71
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 32780,
                                                                                "start": 61,
                                                                                "end": 71
                                                                            },
                                                                            "decorators": null,
                                                                            "accessModifier": null,
                                                                            "isReadOnly": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 56,
                                                                            "end": 71
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 56,
                                                                    "end": 72
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
                                                                    "start": 72,
                                                                    "end": 74
                                                                },
                                                                "decorators": null,
                                                                "type": null,
                                                                "accessModifier": null,
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 4,
                                                                "start": 55,
                                                                "end": 74
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 48,
                                                            "end": 74
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 48,
                                                    "end": 75
                                                },
                                                "decorators": null,
                                                "isAbstract": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 38,
                                                "end": 75
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 75
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 77
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 78
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 78
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 78
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 79
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
    "end": 79
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

