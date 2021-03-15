# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\class-gen
> :: test: class-gen
> :: case: class C { get x) { super; } }
## Input

`````js
class C { *method() { class C { get x) { super; } } } }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C { *method() { class C { get x) { super; } } } }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "intersects": false,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 17
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
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
                                            "kind": 48,
                                            "name": {
                                                "kind": 131102,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 27,
                                                "end": 29
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
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 35,
                                                            "end": 37
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
                                                        "intersects": false,
                                                        "transformFlags": 524352,
                                                        "start": 31,
                                                        "end": 37
                                                    }
                                                ],
                                                "flags": 1,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "decorators": null,
                                            "isAbstract": false,
                                            "flags": 1,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 21,
                                            "end": 37
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 37
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 37
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 17,
                            "end": 37
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 37
                    }
                ],
                "flags": 1,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 37
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 37
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 46
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 46
                            },
                            "flags": 40,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 46
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 47
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 40,
                "end": 47
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 38,
            "end": 49
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 54,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

