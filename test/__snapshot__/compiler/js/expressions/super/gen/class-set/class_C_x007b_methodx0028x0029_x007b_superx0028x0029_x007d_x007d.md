# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\super\gen\class-set
> :: test: class-set
> :: case: class C { method() { super(); } }
## Input

`````js
class C { set x(_) { class C { method() { super(); } } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class C { set x(_) { class C { method() { super(); } } } }",
    "filename": "",
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
                "start": 5,
                "end": 7
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "_",
                                            "rawText": "_",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "isSetter": true,
                            "isGetter": false,
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
                                                "start": 26,
                                                "end": 28
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
                                                                "text": "method",
                                                                "rawText": "method",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 37
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 38,
                                                                "end": 39
                                                            },
                                                            "isSetter": false,
                                                            "isGetter": false,
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 1073807915,
                                                                                "expression": {
                                                                                    "kind": 4260561,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 41,
                                                                                    "end": 47
                                                                                },
                                                                                "typeArguments": null,
                                                                                "argumentList": {
                                                                                    "kind": 3,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "transformFlags": 0,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "start": 49,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 65536,
                                                                                "start": 47,
                                                                                "end": 49
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 41,
                                                                            "end": 50
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 41,
                                                                    "end": 50
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 39,
                                                                "end": 52
                                                            },
                                                            "decorators": null,
                                                            "type": null,
                                                            "accessModifier": null,
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 37,
                                                            "end": 52
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 30,
                                                        "end": 52
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 30,
                                                "end": 54
                                            },
                                            "decorators": null,
                                            "isAbstract": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 20,
                                            "end": 54
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 54
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 56
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 56
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 56
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 58
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 58
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

