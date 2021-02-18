# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\yield\gen\simple
> :: test: simple
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { (yield) ? yield : yield }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { (yield) ? yield : yield }",
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
                                "kind": 2097233,
                                "expression": {
                                    "kind": 65592,
                                    "shortCircuit": {
                                        "kind": 66224,
                                        "expression": {
                                            "kind": 65785,
                                            "delegate": false,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 16393,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 18,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 18,
                                        "end": 26
                                    },
                                    "consequent": {
                                        "kind": 65785,
                                        "delegate": false,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 16393,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 28,
                                        "end": 34
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
                                        "start": 36,
                                        "end": 42
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 18,
                                    "end": 42
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 42
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 18,
                        "end": 42
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 44
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 44
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
    "end": 44
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

