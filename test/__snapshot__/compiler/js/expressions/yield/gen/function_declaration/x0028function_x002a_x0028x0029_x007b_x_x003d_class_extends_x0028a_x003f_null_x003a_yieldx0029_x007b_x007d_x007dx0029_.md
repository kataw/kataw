# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "start": 8,
                    "end": 16
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
                    "start": 17,
                    "end": 18
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
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 34,
                                            "end": 35
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
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 37,
                                                                "end": 39
                                                            },
                                                            "operator": "=",
                                                            "right": {
                                                                "kind": 82483,
                                                                "name": null,
                                                                "typeParameters": null,
                                                                "classHeritage": {
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
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 57,
                                                                            "end": 58
                                                                        },
                                                                        "consequent": {
                                                                            "kind": 4260512,
                                                                            "text": null,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 60,
                                                                            "end": 65
                                                                        },
                                                                        "alternate": {
                                                                            "kind": 65785,
                                                                            "delegate": false,
                                                                            "expression": null,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 16393,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 67,
                                                                            "end": 73
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 55,
                                                                        "end": 73
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 55,
                                                                    "end": 74
                                                                },
                                                                "implementClauses": null,
                                                                "members": {
                                                                    "kind": 50,
                                                                    "elements": [],
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 76,
                                                                    "end": 78
                                                                },
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 41,
                                                                "end": 78
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 37,
                                                            "end": 78
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 37,
                                                        "end": 78
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 37,
                                                "end": 78
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 35,
                                            "end": 80
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 128,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 22,
                                        "end": 80
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 81
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 82
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 20,
                        "end": 82
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 84
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 84
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 85
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 84,
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
    "end": 85
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

