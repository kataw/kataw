# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/assign/keyword_with_escapes_check/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\assign\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0073witch
## Input

`````js
async () => {  \u0073witch = x  }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async () => {  \\u0073witch = x  }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 16,
                    "arrowParameters": {
                        "kind": 65545,
                        "typeParameters": null,
                        "elements": [],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 8,
                        "end": 8
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [
                                {
                                    "kind": 2097362,
                                    "expression": {
                                        "kind": 65550,
                                        "left": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "operator": "=",
                                        "right": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 26,
                                        "end": 30
                                    },
                                    "caseBlock": {
                                        "kind": 2093,
                                        "clauses": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 13,
                                    "end": 33
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 13,
                            "end": 33
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 11,
                        "end": 33
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 32,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

