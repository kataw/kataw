# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\declarations\function\gen\in_if
> :: test: in if
> :: case: async function *f(){}
## Input

`````js
if (x) async function *f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "if (x) async function *f(){}",
    "filename": "",
    "statements": [
        {
            "kind": 2097257,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "consequent": {
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
                        "start": 23,
                        "end": 24
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 26
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
                            "start": 27,
                            "end": 27
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8,
                    "start": 6,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 28
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 28
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
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

