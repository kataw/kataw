# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
    "filename": "",
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
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 18
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
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "operator": "*",
                                "right": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 31
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 4261540,
                                "text": 37,
                                "rawText": "37",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 42
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 48
                                },
                                "operator": "*",
                                "right": {
                                    "kind": 4261583,
                                    "text": "dead",
                                    "rawText": "dead",
                                    "flags": 33554432,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 57
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 57
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 58
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 58
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 60
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 60,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

