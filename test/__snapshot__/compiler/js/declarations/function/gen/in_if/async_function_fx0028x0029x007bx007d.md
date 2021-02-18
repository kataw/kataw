# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_if
> :: test: in if
> :: case: async function f(){}
## Input

`````js
if (x) async function f(){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "if (x) async function f(){}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 5
                },
                "consequent": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 9439250,
                        "name": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1025,
                            "parent": null,
                            "emitNode": null,
                            "start": 21,
                            "end": 23
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 24,
                            "end": 25
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 25,
                            "end": 27
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 4,
                        "parent": null,
                        "emitNode": null,
                        "start": 6,
                        "end": 27
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 27
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 27
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
    "end": 27
}
```

### Printed


```javascript

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

