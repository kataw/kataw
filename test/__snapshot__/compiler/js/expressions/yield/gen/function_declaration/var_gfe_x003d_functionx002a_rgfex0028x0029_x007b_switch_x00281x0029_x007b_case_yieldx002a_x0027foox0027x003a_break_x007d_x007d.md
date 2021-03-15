# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
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
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 24,
                                            "end": 28
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
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 47
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
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 59
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
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 16393,
                                                                            "start": 67,
                                                                            "end": 80
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 2097193,
                                                                                "label": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 81,
                                                                                "end": 88
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 62,
                                                                        "end": 88
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 90
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 49,
                                                    "end": 90
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 92
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 128,
                                            "start": 30,
                                            "end": 92
                                        },
                                        "flags": 24,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 92
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 92
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 92
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 92
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 18,
                "end": 94
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 94,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 95
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

