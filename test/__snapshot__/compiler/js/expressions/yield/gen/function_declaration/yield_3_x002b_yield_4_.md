# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: yield 3 + yield 4;
## Input

`````js
function not_gen() { yield 3 + yield 4; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function not_gen() { yield 3 + yield 4; }}",
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
                                "kind": 196712,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 26
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 4261540,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 28
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 196712,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 36
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 36
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 36
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4261540,
                                "text": 4,
                                "rawText": "4",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 39
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 41
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 41,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

