# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function f() { class C { yield() { } } } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function * gen() { function not_gen() { function f() { class C { yield() { } } } }}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
                            },
                            "type": null,
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
                                                "start": 48,
                                                "end": 50
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 52
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
                                                                "start": 60,
                                                                "end": 62
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
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 64,
                                                                                "end": 70
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 90,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 71,
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
                                                                                    "start": 74,
                                                                                    "end": 74
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 72,
                                                                                "end": 76
                                                                            },
                                                                            "decorators": null,
                                                                            "type": null,
                                                                            "accessModifier": null,
                                                                            "typeParameters": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 70,
                                                                            "end": 76
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1,
                                                                        "start": 64,
                                                                        "end": 76
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1,
                                                                "start": 64,
                                                                "end": 78
                                                            },
                                                            "decorators": null,
                                                            "isAbstract": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 54,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 78
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 80
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 256,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 80
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 82
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 82
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 83
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
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

