# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ *method() { class C { constructor() { super(); } } } })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ *method() { class C { constructor() { super(); } } } })",
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
                                    "kind": 17303650,
                                    "name": {
                                        "kind": 196711,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 10
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
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
                                                        "intersects": false,
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
                                                                        "start": 24,
                                                                        "end": 36
                                                                    },
                                                                    "formalParameters": {
                                                                        "kind": 90,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 37,
                                                                        "end": 38
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
                                                                                            "start": 40,
                                                                                            "end": 46
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "start": 48,
                                                                                            "end": 48
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 65536,
                                                                                        "start": 46,
                                                                                        "end": 48
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 40,
                                                                                    "end": 49
                                                                                }
                                                                            ],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 40,
                                                                            "end": 49
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 38,
                                                                        "end": 51
                                                                    },
                                                                    "decorators": null,
                                                                    "type": null,
                                                                    "accessModifier": null,
                                                                    "typeParameters": null,
                                                                    "flags": 262144,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 36,
                                                                    "end": 51
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 24,
                                                                "end": 51
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 24,
                                                        "end": 53
                                                    },
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 14,
                                                    "end": 53
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 53
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 55
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 10,
                                    "end": 55
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 55
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 57
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 58
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 58
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 58
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

