# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\class-gen
> :: test: class-gen
> :: case: y = super
## Input

`````js
class C { *method() { y = super } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class C { *method() { y = super } }",
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
                            "kind": 17320034,
                            "name": {
                                "kind": 196711,
                                "text": "method",
                                "rawText": "method",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 17
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
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
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 31
                                                    },
                                                    "flags": 25,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1,
                                                    "end": 31
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 31
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 31
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 31
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 33
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 33
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 35
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 32,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

