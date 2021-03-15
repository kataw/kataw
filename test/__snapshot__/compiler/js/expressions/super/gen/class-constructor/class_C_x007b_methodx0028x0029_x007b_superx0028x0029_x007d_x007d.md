# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\super\gen\class-constructor
> :: test: class-constructor
> :: case: class C { method() { super(); } }
## Input

`````js
class C { constructor() { class C { method() { super(); } } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class C { constructor() { class C { method() { super(); } } } }",
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 21
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 23
                            },
                            "isSetter": false,
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
                                                "start": 31,
                                                "end": 33
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
                                                                "start": 35,
                                                                "end": 42
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 44
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
                                                                                    "start": 46,
                                                                                    "end": 52
                                                                                },
                                                                                "typeArguments": null,
                                                                                "argumentList": {
                                                                                    "kind": 3,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "transformFlags": 0,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "start": 54,
                                                                                    "end": 54
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 65536,
                                                                                "start": 52,
                                                                                "end": 54
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 57
                                                            },
                                                            "decorators": null,
                                                            "type": null,
                                                            "accessModifier": null,
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 57
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 35,
                                                        "end": 57
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 35,
                                                "end": 59
                                            },
                                            "decorators": null,
                                            "isAbstract": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 25,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 59
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 61
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 61
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 61
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 63
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 63
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
    "end": 63
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

