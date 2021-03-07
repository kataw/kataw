# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function not_gen() { function * gen() { (yield) ? yield : yield } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                                "kind": 788576,
                                "name": {
                                    "kind": 131102,
                                    "text": "gen",
                                    "rawText": "gen",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 31,
                                    "end": 35
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
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
                                                            "intersects": false,
                                                            "transformFlags": 16393,
                                                            "start": 39,
                                                            "end": 46
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 47
                                                    },
                                                    "consequent": {
                                                        "kind": 65785,
                                                        "delegate": false,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 16393,
                                                        "start": 49,
                                                        "end": 55
                                                    },
                                                    "alternate": {
                                                        "kind": 65785,
                                                        "delegate": false,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 16393,
                                                        "start": 57,
                                                        "end": 63
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 63
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 63
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 63
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 65
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 384,
                                "start": 20,
                                "end": 65
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 65
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 67
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 67
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 68
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 67,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

