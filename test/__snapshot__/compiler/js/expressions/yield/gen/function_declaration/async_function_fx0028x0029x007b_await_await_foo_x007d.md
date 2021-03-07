# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: async function f(){ await await foo; }
## Input

`````js
function not_gen() { async function f(){ await await foo; } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { async function f(){ await await foo; } }}",
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
                                "kind": 1312785,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 35,
                                    "end": 37
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 39
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
                                                    "kind": 65559,
                                                    "expression": {
                                                        "kind": 65559,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 52,
                                                            "end": 56
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 32780,
                                                        "start": 46,
                                                        "end": 56
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 32780,
                                                    "start": 40,
                                                    "end": 56
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 57
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 57
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 59
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 260,
                                "start": 20,
                                "end": 59
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 59
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 61
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 61
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 62
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 61,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

