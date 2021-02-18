# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_block
> :: test: in block
> :: case: async function f(){}
## Input

`````js
{
  async function f(){}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "{\n  async function f(){}\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 1312785,
                            "name": {
                                "kind": 131102,
                                "text": "f",
                                "rawText": "f",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 20
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
                                "start": 21,
                                "end": 22
                            },
                            "type": null,
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
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 260,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 24
                        }
                    ],
                    "multiline": true,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1,
                    "end": 24
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 26
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 26
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
    "end": 26
}
```

### Printed


```javascript

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

