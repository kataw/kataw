# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_for-in-loop
> :: test: in for-in-loop
> :: case: function f(){}
## Input

`````js
for (a in b) function f(){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "for (a in b) function f(){}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2099286,
                "initializer": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 6
                },
                "expression": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "statement": {
                    "kind": 264284,
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
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 256,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 27
                },
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "In strict mode code, functions can only be declared at top level or inside a block",
            "start": 13,
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

