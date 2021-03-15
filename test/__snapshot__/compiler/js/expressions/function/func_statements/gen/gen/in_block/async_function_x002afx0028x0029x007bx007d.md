# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/function/func_statements/gen/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\function\func_statements\gen\gen\in_block
> :: test: in block
> :: case: async function *f(){}
## Input

`````js
{
  async function *f(){}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{\n  async function *f(){}\n}",
    "filename": "",
    "statements": [
        {
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
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 20,
                            "end": 21
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 23
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
                                "start": 24,
                                "end": 24
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "typeParameters": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 264,
                        "start": 1,
                        "end": 25
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
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
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

