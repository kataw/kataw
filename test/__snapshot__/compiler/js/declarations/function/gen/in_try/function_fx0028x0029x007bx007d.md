# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-17
- From: kataw8\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\declarations\function\gen\in_try
> :: test: in try
> :: case: function f(){}
## Input

`````js
try {
  function f(){}
} catch (e) {
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {\n  function f(){}\n} catch (e) {\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 16,
                                    "end": 18
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
                                    "start": 19,
                                    "end": 20
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 256,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 22
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 22
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 24
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": {
                        "kind": 2097403,
                        "binding": {
                            "kind": 131102,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "parent": null,
                            "emitNode": null,
                            "start": 32,
                            "end": 33
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 32,
                        "end": 33
                    },
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 34,
                        "end": 38
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 24,
                    "end": 38
                },
                "finallyBlock": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 38
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 38
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
    "end": 38
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

