# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/function/func_statements/gen/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\function\func_statements\gen\gen\in_do_two_lines
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
    "kind": 2243,
    "source": "do async function f(){}\nwhile (x);",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
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
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 17,
                        "end": 19
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 21
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
                            "start": 22,
                            "end": 22
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 4,
                    "start": 2,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
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

