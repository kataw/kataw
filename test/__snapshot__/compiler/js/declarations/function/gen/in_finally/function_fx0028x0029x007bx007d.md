# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_finally
> :: test: in finally
> :: case: function f(){}
## Input

`````js
try {
} finally {
  function f(){}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {\n} finally {\n  function f(){}\n}",
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
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 28,
                                    "end": 30
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 32
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
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 256,
                                "start": 17,
                                "end": 34
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 34
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 36
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 36
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
