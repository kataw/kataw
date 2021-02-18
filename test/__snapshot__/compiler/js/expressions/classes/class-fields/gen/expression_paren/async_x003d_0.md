# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\expression_paren
> :: test: expression_paren
> :: case: async = 0
## Input

`````js
(class { async = 0 });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class { async = 0 });",
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
                        "classHeritage": null,
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 8,
                                        "end": 14
                                    },
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isStatic": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 524352,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 8,
                                    "end": 18
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 8,
                            "end": 20
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 20
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 22
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
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

