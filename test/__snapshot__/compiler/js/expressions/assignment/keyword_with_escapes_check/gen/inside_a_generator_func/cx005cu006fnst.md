# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/assignment/keyword_with_escapes_check/gen/inside_a_generator_func
> :: test: inside a generator func
> :: case: c\u006fnst
## Input

`````js
function *f(){
  c\u006fnst = x
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function *f(){\n  c\\u006fnst = x\n}",
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
                            "kind": 142,
                            "binding": {
                                "kind": 31,
                                "lexicals": [],
                                "flags": 40,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 27
                            },
                            "flags": 75530281,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 14,
                            "end": 27
                        }
                    ],
                    "multiline": true,
                    "flags": 41,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 27
                },
                "flags": 41,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 27
            },
            "typeParameters": null,
            "flags": 41,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 32,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
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

