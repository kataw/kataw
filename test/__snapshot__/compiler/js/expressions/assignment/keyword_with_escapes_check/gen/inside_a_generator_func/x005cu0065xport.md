# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/assignment/keyword_with_escapes_check/gen/inside_a_generator_func
> :: test: inside a generator func
> :: case: \u0065xport
## Input

`````js
function *f(){
  \u0065xport = x
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function *f(){\n  \\u0065xport = x\n}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
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
                            "kind": 8267,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 32
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 34
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 17,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

