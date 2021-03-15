# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 788576,
                                            "name": {
                                                "kind": 131102,
                                                "text": "gen",
                                                "rawText": "gen",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 50,
                                                "end": 54
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 56
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 65592,
                                                                "shortCircuit": {
                                                                    "kind": 66224,
                                                                    "expression": {
                                                                        "kind": 65785,
                                                                        "delegate": false,
                                                                        "expression": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 16393,
                                                                        "start": 58,
                                                                        "end": 65
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 58,
                                                                    "end": 66
                                                                },
                                                                "consequent": {
                                                                    "kind": 65785,
                                                                    "delegate": false,
                                                                    "expression": null,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 16393,
                                                                    "start": 68,
                                                                    "end": 74
                                                                },
                                                                "alternate": {
                                                                    "kind": 65785,
                                                                    "delegate": false,
                                                                    "expression": null,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 16393,
                                                                    "start": 76,
                                                                    "end": 82
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 82
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 82
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 56,
                                                "end": 84
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 384,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 86
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 86
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 87
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 87
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
    "end": 87
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

