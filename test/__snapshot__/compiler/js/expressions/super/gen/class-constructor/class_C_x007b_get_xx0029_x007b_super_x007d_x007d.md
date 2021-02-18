# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\class-constructor
> :: test: class-constructor
> :: case: class C { get x) { super; } }
## Input

`````js
class C { constructor() { class C { get x) { super; } } } }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C { constructor() { class C { get x) { super; } } } }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "parent": null,
                    "emitNode": null,
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
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 9,
                                    "end": 21
                                },
                                "propertySetParameterList": null,
                                "uniqueFormalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
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
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "parent": null,
                                                    "emitNode": null,
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
                                                            "kind": 84,
                                                            "key": {
                                                                "kind": 196711,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 39,
                                                                "end": 41
                                                            },
                                                            "isReadOnly": false,
                                                            "isOptional": false,
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": null,
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isStatic": false,
                                                            "flags": 2,
                                                            "intersects": false,
                                                            "transformFlags": 524352,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 35,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "decorators": null,
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 25,
                                                "end": 41
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 25,
                                        "end": 41
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 23,
                                    "end": 41
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 21,
                                "end": 41
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 9,
                            "end": 41
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 41
                },
                "decorators": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 41
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 74424,
                                "member": {
                                    "kind": 4260561,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 44,
                                    "end": 50
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 50,
                                    "end": 50
                                },
                                "flags": 44,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 2,
                                "end": 50
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 44,
                            "end": 51
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 44,
                    "end": 51
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 42,
                "end": 53
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 59
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 56,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 58,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

