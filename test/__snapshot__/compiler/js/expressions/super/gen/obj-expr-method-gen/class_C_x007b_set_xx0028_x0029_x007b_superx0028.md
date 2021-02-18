# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: class C { set x(_) { super(
## Input

`````js
({ *method() { class C { set x(_) { super( } })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ *method() { class C { set x(_) { super( } })",
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 4,
                                        "end": 10
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
                                                        "parent": null,
                                                        "emitNode": null,
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
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 28,
                                                                        "end": 30
                                                                    },
                                                                    "propertySetParameterList": {
                                                                        "kind": 89,
                                                                        "ellipsis": false,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "_",
                                                                            "rawText": "_",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 1025,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 31,
                                                                            "end": 32
                                                                        },
                                                                        "isOptional": false,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "decorators": null,
                                                                        "accessModifier": null,
                                                                        "isReadOnly": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 31,
                                                                        "end": 32
                                                                    },
                                                                    "uniqueFormalParameters": null,
                                                                    "isSetter": true,
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
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 35,
                                                                                            "end": 41
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 44,
                                                                                            "end": 42
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 65536,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 41,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 35,
                                                                                    "end": 42
                                                                                }
                                                                            ],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 35,
                                                                            "end": 42
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 33,
                                                                        "end": 44
                                                                    },
                                                                    "decorators": null,
                                                                    "type": null,
                                                                    "accessModifier": null,
                                                                    "typeParameters": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 30,
                                                                    "end": 44
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 24,
                                                                "end": 44
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 24,
                                                        "end": 46
                                                    },
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 14,
                                                    "end": 46
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 14,
                                            "end": 46
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 12,
                                        "end": 46
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 46
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 2,
                            "end": 46
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 46
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 47
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 47
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 46,
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
    "end": 47
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

