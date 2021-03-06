# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_try
> :: test: in try
> :: case: async function *f(){}
## Input

`````js
try {
  async function *f(){}
} catch (e) {
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {\n  async function *f(){}\n} catch (e) {\n}",
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
                                "kind": 1837075,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 24,
                                    "end": 25
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 27
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
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 264,
                                "start": 5,
                                "end": 29
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 29
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 31
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
                            "start": 39,
                            "end": 40
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 40
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
                            "start": 43,
                            "end": 43
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 45
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 45
                },
                "finallyBlock": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 45
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 45
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

