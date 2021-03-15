# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: class C extends yield { }
## Input

`````js
function not_gen() { class C extends yield { } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function not_gen() { class C extends yield { } }}",
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
                            "kind": 48,
                            "name": {
                                "kind": 131102,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 52,
                                "expression": {
                                    "kind": 196712,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 42
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 42
                            },
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 44,
                                "end": 46
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 20,
                            "end": 46
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 48
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 48,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

