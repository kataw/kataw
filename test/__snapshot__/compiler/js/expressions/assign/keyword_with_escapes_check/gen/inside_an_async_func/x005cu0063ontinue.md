# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/assign/keyword_with_escapes_check/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\assign\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0063ontinue
## Input

`````js
async () => {  \u0063ontinue = x  }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async () => {  \\u0063ontinue = x  }",
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
                                    "kind": 2097212,
                                    "label": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 6,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 28
                                }
                            ],
                            "multiline": false,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 28
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 28
                    },
                    "flags": 536870914,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            },
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
        "transformFlags": 0,
        "flags": 0,
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
            "message": "Declaration or statement expected",
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

