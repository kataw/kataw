# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\declarations\function\gen\in_for-in-loop
> :: test: in for-in-loop
> :: case: async function f(){}
## Input

`````js
for (a in b) async function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (a in b) async function f(){}",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
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
                    "kind": 9439250,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 27,
                        "end": 29
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 31
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
                            "start": 32,
                            "end": 32
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 33
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 4,
                    "start": 12,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
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
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

