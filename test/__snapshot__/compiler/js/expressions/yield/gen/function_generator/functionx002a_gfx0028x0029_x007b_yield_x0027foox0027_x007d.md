# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function * gen() { function not_gen() { function* gf() { yield 'foo' } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { function* gf() { yield 'foo' } }}",
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
                                                "kind": 788576,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "gf",
                                                    "rawText": "gf",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 49,
                                                    "end": 52
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 54
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
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 62,
                                                                        "end": 68
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 16393,
                                                                    "start": 56,
                                                                    "end": 68
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 56,
                                                                "end": 68
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 56,
                                                        "end": 68
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 70
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 384,
                                                "start": 39,
                                                "end": 70
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 70
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 72
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "start": 18,
                                "end": 72
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 72
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 73
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 73
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 73
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
