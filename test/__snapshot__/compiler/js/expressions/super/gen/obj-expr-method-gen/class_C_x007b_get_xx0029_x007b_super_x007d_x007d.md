# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\super\gen\obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: class C { get x) { super; } }
## Input

`````js
({ *method() { class C { get x) { super; } } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "({ *method() { class C { get x) { super; } } } })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 17320034,
                                "name": {
                                    "kind": 196711,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 10
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
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
                                                    "start": 20,
                                                    "end": 22
                                                },
                                                "typeParameters": null,
                                                "classHeritage": null,
                                                "implementClauses": null,
                                                "members": {
                                                    "kind": 50,
                                                    "elements": [
                                                        {
                                                            "kind": 16468,
                                                            "key": {
                                                                "kind": 196711,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 28,
                                                                "end": 30
                                                            },
                                                            "isInKeyword": false,
                                                            "expression": null,
                                                            "isAbstract": false,
                                                            "isReadOnly": false,
                                                            "isOptional": false,
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": null,
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isStatic": false,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 524352,
                                                            "start": 24,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 24,
                                                    "end": 30
                                                },
                                                "decorators": null,
                                                "isAbstract": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 14,
                                                "end": 30
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 30
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 30
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 10,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 30
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 30
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 67175096,
                            "member": {
                                "kind": 4260561,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 39
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 33,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 39
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 40
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 31,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 48,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

