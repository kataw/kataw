# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
'use strict'; function * gen() { (yield) ? yield : yield }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; function * gen() { (yield) ? yield : yield }",
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
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 24,
                "end": 28
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 30
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
                                        "start": 32,
                                        "end": 39
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 40
                                },
                                "consequent": {
                                    "kind": 65785,
                                    "delegate": false,
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 16393,
                                    "start": 42,
                                    "end": 48
                                },
                                "alternate": {
                                    "kind": 65785,
                                    "delegate": false,
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 16393,
                                    "start": 50,
                                    "end": 56
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 56
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 56
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 56
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 58
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 13,
            "end": 58
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
    "end": 58
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

