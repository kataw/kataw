# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/simple
> :: test: simple
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "gfe",
                            "rawText": "gfe",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 8915041,
                            "name": {
                                "kind": 131102,
                                "text": "rgfe",
                                "rawText": "rgfe",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 19,
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
                                    "statements": [
                                        {
                                            "kind": 2097362,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 38
                                            },
                                            "caseBlock": {
                                                "kind": 2093,
                                                "clauses": [
                                                    {
                                                        "kind": 46,
                                                        "expression": {
                                                            "kind": 65785,
                                                            "delegate": true,
                                                            "expression": {
                                                                "kind": 4261583,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 33554432,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 59
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 16393,
                                                            "start": 46,
                                                            "end": 59
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 2097193,
                                                                "label": null,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 67
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 67
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 69
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 69
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 69
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 71
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 71
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 71
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 71
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 71
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
    "end": 71
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

