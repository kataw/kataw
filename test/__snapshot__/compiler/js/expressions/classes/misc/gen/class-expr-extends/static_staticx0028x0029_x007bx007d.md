# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-17
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/misc/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\misc\gen\class-expr-extends
> :: test: class-expr-extends
> :: case: static static() {}
## Input

`````js
(class extends Base {static static() {}});
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class extends Base {static static() {}});",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": {
                            "kind": 196712,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 19
                        },
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [
                                {
                                    "kind": 49,
                                    "isStatic": true,
                                    "isAbstract": false,
                                    "isReadOnly": false,
                                    "isOptional": false,
                                    "method": {
                                        "kind": 16844946,
                                        "name": {
                                            "kind": 196711,
                                            "text": "static",
                                            "rawText": "static",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 27,
                                            "end": 34
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
                                            "start": 35,
                                            "end": 36
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
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 38,
                                                "end": 38
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 36,
                                            "end": 39
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
                                        "start": 34,
                                        "end": 39
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 21,
                                    "end": 39
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 21,
                            "end": 40
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 40
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 41
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 42
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 42
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

