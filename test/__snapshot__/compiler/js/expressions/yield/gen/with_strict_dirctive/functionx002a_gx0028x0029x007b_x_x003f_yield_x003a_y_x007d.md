# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* g(){ x ? yield : y }
## Input

`````js
'use strict'; function* g(){ x ? yield : y }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; function* g(){ x ? yield : y }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "g",
                "rawText": "g",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 23,
                "end": 25
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 27
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
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "consequent": {
                                    "kind": 65785,
                                    "delegate": false,
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 16393,
                                    "start": 32,
                                    "end": 38
                                },
                                "alternate": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 42
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 42
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 42
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 44
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 13,
            "end": 44
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
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

