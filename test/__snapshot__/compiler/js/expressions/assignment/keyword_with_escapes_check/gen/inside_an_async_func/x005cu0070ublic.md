# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/assign/keyword_with_escapes_check/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\assign\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0070ublic
## Input

`````js
async () => {  \u0070ublic = x  }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async () => {  \\u0070ublic = x  }",
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
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 65550,
                                        "left": {
                                            "kind": 196712,
                                            "text": "public",
                                            "rawText": "  \\u0070ublic",
                                            "flags": 4194304,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
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
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 30
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 30
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 30
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 33
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
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
