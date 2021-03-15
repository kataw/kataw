# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/function/func_statements/gen/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\function\func_statements\gen\gen\in_for-of-loop
> :: test: in for-of-loop
> :: case: async function *f(){}
## Input

`````js
for (a of b) async function *f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (a of b) async function *f(){}",
    "filename": "",
    "statements": [
        {
            "kind": 2099287,
            "initializer": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 196712,
                "text": "b",
                "rawText": "b",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 9963540,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 29,
                        "end": 30
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 32
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 33
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8,
                    "start": 12,
                    "end": 34
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 34
            },
            "isAwait": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 34
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
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

