# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_finally
> :: test: in finally
> :: case: async function *f(){}
## Input

`````js
try {
} finally {
  async function *f(){}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {\n} finally {\n  async function *f(){}\n}",
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
                                "kind": 1837075,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 36,
                                    "end": 37
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 39
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
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 41
                                },
                                "typeParameters": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 264,
                                "start": 17,
                                "end": 41
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 41
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 43
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 43
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 43
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
