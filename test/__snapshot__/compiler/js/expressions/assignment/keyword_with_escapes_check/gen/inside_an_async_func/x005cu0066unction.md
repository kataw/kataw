# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/assign/keyword_with_escapes_check/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\assign\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0066unction
## Input

`````js
async () => {  \u0066unction = x  }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async () => {  \\u0066unction = x  }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65552,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 65545,
                        "elements": [],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [
                                {
                                    "kind": 264284,
                                    "name": {
                                        "kind": 131102,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 28
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
                                                        "kind": 196712,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 32
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 35
                                    },
                                    "typeParameters": null,
                                    "flags": 4194304,
                                    "intersects": false,
                                    "transformFlags": 256,
                                    "start": 13,
                                    "end": 35
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 35
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 35
                    },
                    "flags": 536870914,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 35
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 34,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

