# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\declaration_paren
> :: test: declaration_paren
> :: case: set #arguments(test) {}
## Input

`````js
(class extends Base { set #arguments(test) {} });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class extends Base { set #arguments(test) {} });",
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
                            "kind": 52,
                            "expression": {
                                "kind": 196712,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
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
                                            "kind": 131252,
                                            "text": "#arguments",
                                            "rawText": "#arguments",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 524288,
                                            "start": 25,
                                            "end": 36
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [
                                                {
                                                    "kind": 89,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "test",
                                                        "rawText": "test",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 37,
                                                        "end": 41
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
                                                    "start": 37,
                                                    "end": 41
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "isSetter": true,
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
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 45
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 21,
                                    "end": 45
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 21,
                            "end": 47
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 47
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 48
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 49
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 49
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

