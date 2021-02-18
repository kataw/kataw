# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
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
                                                "kind": 2097397,
                                                "declarationList": {
                                                    "kind": 244,
                                                    "declarations": [
                                                        {
                                                            "kind": 243,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "o",
                                                                "rawText": "o",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 43,
                                                                "end": 45
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 67224232,
                                                                "propertyList": {
                                                                    "kind": 65722,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 17303650,
                                                                            "name": {
                                                                                "kind": 196711,
                                                                                "text": "gf",
                                                                                "rawText": "gf",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 51,
                                                                                "end": 53
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
                                                                                "start": 54,
                                                                                "end": 55
                                                                            },
                                                                            "isSetter": false,
                                                                            "isGetter": false,
                                                                            "contents": {
                                                                                "kind": 91,
                                                                                "functionStatementList": {
                                                                                    "kind": 94,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 2097362,
                                                                                            "expression": {
                                                                                                "kind": 4261540,
                                                                                                "text": 1,
                                                                                                "rawText": "1",
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 66,
                                                                                                "end": 67
                                                                                            },
                                                                                            "caseBlock": {
                                                                                                "kind": 2093,
                                                                                                "clauses": [
                                                                                                    {
                                                                                                        "kind": 46,
                                                                                                        "expression": {
                                                                                                            "kind": 65785,
                                                                                                            "delegate": false,
                                                                                                            "expression": null,
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 16393,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 75,
                                                                                                            "end": 81
                                                                                                        },
                                                                                                        "statements": [
                                                                                                            {
                                                                                                                "kind": 2097193,
                                                                                                                "label": null,
                                                                                                                "flags": 0,
                                                                                                                "intersects": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "parent": null,
                                                                                                                "emitNode": null,
                                                                                                                "start": 82,
                                                                                                                "end": 89
                                                                                                            }
                                                                                                        ],
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 70,
                                                                                                        "end": 89
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 68,
                                                                                                "end": 91
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 57,
                                                                                            "end": 91
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 57,
                                                                                    "end": 91
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 55,
                                                                                "end": 93
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
                                                                            "start": 53,
                                                                            "end": 93
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 49,
                                                                    "end": 93
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 47,
                                                                "end": 95
                                                            },
                                                            "flags": 43,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 0,
                                                            "end": 95
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 43,
                                                    "end": 95
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 39,
                                                "end": 95
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 39,
                                        "end": 95
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 37,
                                    "end": 97
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 97
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 18,
                        "end": 97
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 98
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 98
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 98
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
    "end": 98
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

