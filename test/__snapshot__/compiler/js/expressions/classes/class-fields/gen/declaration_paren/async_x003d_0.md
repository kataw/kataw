# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\declaration_paren
> :: test: declaration_paren
> :: case: async = 0
## Input

`````js
(class extends Base { async = 0 });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class extends Base { async = 0 });",
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
                                    "kind": 84,
                                    "key": {
                                        "kind": 196711,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "isAbstract": false,
                                    "isReadOnly": false,
                                    "isOptional": false,
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isStatic": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 524352,
                                    "start": 21,
                                    "end": 31
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 21,
                            "end": 33
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 33
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 35
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

