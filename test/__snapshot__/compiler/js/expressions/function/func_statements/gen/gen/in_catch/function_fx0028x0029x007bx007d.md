# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/function/func_statements/gen/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\function\func_statements\gen\gen\in_catch
> :: test: in catch
> :: case: function f(){}
## Input

`````js
try {
} catch (e) {
  function f(){}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "try {\n} catch (e) {\n  function f(){}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 7
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
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 15,
                        "end": 16
                    },
                    "type": null,
                    "initializer": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
                },
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
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 30,
                                    "end": 32
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 34
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 256,
                                "start": 19,
                                "end": 36
                            }
                        ],
                        "multiline": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 36
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 38
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 38
            },
            "finallyBlock": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
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

