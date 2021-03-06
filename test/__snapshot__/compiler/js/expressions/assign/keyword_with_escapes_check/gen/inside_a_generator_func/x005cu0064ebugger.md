# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/assign/keyword_with_escapes_check/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\assign\keyword_with_escapes_check\gen\inside_a_generator_func
> :: test: inside a generator func
> :: case: \u0064ebugger
## Input

`````js
function *f(){
  \u0064ebugger = x
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function *f(){\n  \\u0064ebugger = x\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 788576,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 10,
                    "end": 11
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 13
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 6291518,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 30
                            }
                        ],
                        "multiline": true,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 30
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 30
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 30
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
                    "start": 32,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 35,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

