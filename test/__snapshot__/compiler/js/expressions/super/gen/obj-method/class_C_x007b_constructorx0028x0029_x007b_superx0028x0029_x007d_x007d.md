# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\obj-method
> :: test: obj-method
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ method() { class C { constructor() { super(); } } } })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ method() { class C { constructor() { super(); } } } })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
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
                                                        "start": 19,
                                                        "end": 21
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
                                                                        "start": 23,
                                                                        "end": 35
                                                                    },
                                                                    "formalParameters": {
                                                                        "kind": 90,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 36,
                                                                        "end": 37
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
                                                                                        "kind": 66091,
                                                                                        "expression": {
                                                                                            "kind": 4260561,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 39,
                                                                                            "end": 45
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "start": 47,
                                                                                            "end": 47
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 65536,
                                                                                        "start": 45,
                                                                                        "end": 47
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 39,
                                                                                    "end": 48
                                                                                }
                                                                            ],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 39,
                                                                            "end": 48
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 37,
                                                                        "end": 50
                                                                    },
                                                                    "decorators": null,
                                                                    "type": null,
                                                                    "accessModifier": null,
                                                                    "typeParameters": null,
                                                                    "flags": 262144,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 35,
                                                                    "end": 50
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 23,
                                                                "end": 50
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 23,
                                                        "end": 52
                                                    },
                                                    "decorators": null,
                                                    "isAbstract": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 13,
                                                    "end": 52
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 52
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 54
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 54
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 54
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 56
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 57
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 57
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 57
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

