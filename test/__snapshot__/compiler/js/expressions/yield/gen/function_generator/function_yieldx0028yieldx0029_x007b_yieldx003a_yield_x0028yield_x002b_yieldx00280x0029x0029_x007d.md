# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function * gen() { function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 788576,
                "name": {
                    "kind": 131102,
                    "text": "gen",
                    "rawText": "gen",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 14
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 15,
                    "end": 16
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "not_gen",
                                    "rawText": "not_gen",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 27,
                                    "end": 35
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 36,
                                    "end": 37
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 264284,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 48,
                                                    "end": 54
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 89,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 55,
                                                                "end": 60
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
                                                            "start": 55,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 55,
                                                    "end": 61
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097292,
                                                                "label": {
                                                                    "kind": 196712,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 63,
                                                                    "end": 69
                                                                },
                                                                "statement": {
                                                                    "kind": 2097233,
                                                                    "expression": {
                                                                        "kind": 66091,
                                                                        "expression": {
                                                                            "kind": 196712,
                                                                            "text": "yield",
                                                                            "rawText": "yield",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 70,
                                                                            "end": 76
                                                                        },
                                                                        "typeArguments": null,
                                                                        "argumentList": {
                                                                            "kind": 3,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 65563,
                                                                                    "left": {
                                                                                        "kind": 196712,
                                                                                        "text": "yield",
                                                                                        "rawText": "yield",
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 78,
                                                                                        "end": 83
                                                                                    },
                                                                                    "operator": "+",
                                                                                    "right": {
                                                                                        "kind": 66091,
                                                                                        "expression": {
                                                                                            "kind": 196712,
                                                                                            "text": "yield",
                                                                                            "rawText": "yield",
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 85,
                                                                                            "end": 91
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 4261540,
                                                                                                    "text": 0,
                                                                                                    "rawText": "0",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "parent": null,
                                                                                                    "emitNode": null,
                                                                                                    "start": 92,
                                                                                                    "end": 93
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 93,
                                                                                            "end": 94
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 91,
                                                                                        "end": 94
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 78,
                                                                                    "end": 94
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "transformFlags": 0,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 83,
                                                                            "end": 95
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 76,
                                                                        "end": 95
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 70,
                                                                    "end": 96
                                                                },
                                                                "isWebCompat": true,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 63,
                                                                "end": 96
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 63,
                                                        "end": 96
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 61,
                                                    "end": 98
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 256,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 39,
                                                "end": 98
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 39,
                                        "end": 98
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 37,
                                    "end": 100
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 100
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 18,
                        "end": 100
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 101
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 101
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 101
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
    "end": 101
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

