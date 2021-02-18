# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_do_two_lines
> :: test: in do two lines
> :: case: async function f(){}
## Input

`````js
do async function f(){}
while (x);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "do async function f(){}\nwhile (x);",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 31,
                    "end": 32
                },
                "statement": {
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
                            "start": 17,
                            "end": 19
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
                            "start": 20,
                            "end": 21
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
                                "start": 22,
                                "end": 22
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 21,
                            "end": 23
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 4,
                        "parent": null,
                        "emitNode": null,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 23
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 34
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
    "end": 34
}
```

### Printed


```javascript

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

