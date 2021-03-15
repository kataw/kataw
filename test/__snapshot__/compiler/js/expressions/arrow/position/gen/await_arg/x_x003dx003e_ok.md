# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/await_arg
> :: test: await arg
> :: case: x => ok
## Input

`````js
async function f() {
  await x => ok
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function f() {\n  await x => ok\n}",
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
                            "kind": 2097233,
                            "expression": {
                                "kind": 65559,
                                "expression": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 32780,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 30
                        }
                    ],
                    "multiline": true,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 30
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 30
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 30
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "ok",
                "rawText": "ok",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 36
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
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
            "start": 37,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

