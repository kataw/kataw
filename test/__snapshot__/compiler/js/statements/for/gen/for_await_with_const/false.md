# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/statements/for/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/for/gen/for_await_with_const
> :: test: for await with const
> :: case: false
## Input

`````js
async function f() { for await (const x in y) {} }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function f() { for await (const x in y) {} }",
    "filename": "",
    "statements": [
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
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
                            "kind": 2099286,
                            "initializer": {
                                "kind": 31,
                                "lexicals": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 39
                                    }
                                ],
                                "flags": 40,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 39
                            },
                            "expression": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 44
                            },
                            "statement": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 48
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 48
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'of' expected.",
            "start": 40,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

