# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\yield\gen\simple
> :: test: simple
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function* gf() { yield 'foo' }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function* gf() { yield 'foo' }",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gf",
                "rawText": "gf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 14
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
                                "kind": 65785,
                                "delegate": false,
                                "expression": {
                                    "kind": 4261583,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 33554432,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 28
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 16393,
                                "start": 16,
                                "end": 28
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 30
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 30
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
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

