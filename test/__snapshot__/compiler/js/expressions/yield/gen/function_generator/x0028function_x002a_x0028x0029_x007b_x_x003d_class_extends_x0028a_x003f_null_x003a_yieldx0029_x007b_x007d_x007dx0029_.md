# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
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
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 66224,
                                                    "expression": {
                                                        "kind": 8915041,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 54
                                                        },
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65550,
                                                                            "left": {
                                                                                "kind": 196712,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 56,
                                                                                "end": 58
                                                                            },
                                                                            "operator": "=",
                                                                            "right": {
                                                                                "kind": 82483,
                                                                                "name": null,
                                                                                "typeParameters": null,
                                                                                "classHeritage": {
                                                                                    "kind": 52,
                                                                                    "expression": {
                                                                                        "kind": 66224,
                                                                                        "expression": {
                                                                                            "kind": 65592,
                                                                                            "shortCircuit": {
                                                                                                "kind": 196712,
                                                                                                "text": "a",
                                                                                                "rawText": "a",
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "start": 76,
                                                                                                "end": 77
                                                                                            },
                                                                                            "consequent": {
                                                                                                "kind": 4260512,
                                                                                                "text": null,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "start": 79,
                                                                                                "end": 84
                                                                                            },
                                                                                            "alternate": {
                                                                                                "kind": 65785,
                                                                                                "delegate": false,
                                                                                                "expression": null,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 16393,
                                                                                                "start": 86,
                                                                                                "end": 92
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 74,
                                                                                            "end": 92
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 74,
                                                                                        "end": 93
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 74,
                                                                                    "end": 93
                                                                                },
                                                                                "implementClauses": null,
                                                                                "members": {
                                                                                    "kind": 50,
                                                                                    "elements": [],
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 1,
                                                                                    "start": 95,
                                                                                    "end": 97
                                                                                },
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1,
                                                                                "start": 60,
                                                                                "end": 97
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 56,
                                                                            "end": 97
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 56,
                                                                        "end": 97
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 56,
                                                                "end": 97
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 54,
                                                            "end": 99
                                                        },
                                                        "typeParameters": null,
                                                        "type": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 128,
                                                        "start": 41,
                                                        "end": 99
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 100
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 101
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 101
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 103
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "start": 18,
                                "end": 103
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 103
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 104
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 104
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 104
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

