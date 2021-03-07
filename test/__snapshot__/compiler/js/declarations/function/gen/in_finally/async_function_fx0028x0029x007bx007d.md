# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_finally
> :: test: in finally
> :: case: async function f(){}
## Input

`````js
try {
} finally {
  async function f(){}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {\n} finally {\n  async function f(){}\n}",
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
                        "statements": [],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 7
                },
                "catchClause": null,
                "finallyBlock": {
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
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 34,
                                    "end": 36
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 38
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
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 260,
                                "start": 17,
                                "end": 40
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 40
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 42
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 42
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 42
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

