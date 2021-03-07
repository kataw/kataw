# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function * gen() { function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}",
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
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 49,
                                                    "end": 53
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 55
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
                                                                            "kind": 243,
                                                                            "binding": {
                                                                                "kind": 131102,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "start": 61,
                                                                                "end": 63
                                                                            },
                                                                            "exclamation": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 4261540,
                                                                                "text": 10,
                                                                                "rawText": "10",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 65,
                                                                                "end": 68
                                                                            },
                                                                            "flags": 61,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 0,
                                                                            "end": 68
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 61,
                                                                    "end": 68
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 57,
                                                                "end": 69
                                                            },
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 65785,
                                                                    "delegate": false,
                                                                    "expression": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 75,
                                                                        "end": 77
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 16393,
                                                                    "start": 69,
                                                                    "end": 77
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 69,
                                                                "end": 78
                                                            },
                                                            {
                                                                "kind": 2097346,
                                                                "expression": {
                                                                    "kind": 196712,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 85,
                                                                    "end": 87
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 78,
                                                                "end": 88
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 57,
                                                        "end": 88
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 90
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 384,
                                                "start": 39,
                                                "end": 90
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 90
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 92
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 256,
                                "start": 18,
                                "end": 92
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 92
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 93
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 93
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 93
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 93
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

