# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: {yield}
## Input

`````js
function * gen() { function not_gen() { {yield} }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { {yield} }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "start": 10,
                    "end": 14
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
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
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 27,
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
                                                "kind": 2099237,
                                                "block": {
                                                    "kind": 2084,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 46
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 46
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 47
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 47
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "start": 18,
                                "end": 49
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 49
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 50
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 50
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 50
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

