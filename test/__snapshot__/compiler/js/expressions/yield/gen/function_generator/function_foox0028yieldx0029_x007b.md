# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function foo(yield) {
## Input

`````js
function * gen() { function not_gen() { function foo(yield) { }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { function foo(yield) { }}",
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
                                                "kind": 264284,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 48,
                                                    "end": 52
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 89,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 53,
                                                                "end": 58
                                                            },
                                                            "isOptional": false,
                                                            "type": null,
                                                            "initializer": null,
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 53,
                                                            "end": 58
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 59
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 61
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 63
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 256,
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
                                    "end": 64
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "start": 18,
                                "end": 64
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 64
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 64
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 64
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 64
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 63,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

