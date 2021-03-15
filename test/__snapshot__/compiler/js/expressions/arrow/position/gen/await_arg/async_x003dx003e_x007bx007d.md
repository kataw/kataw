# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\arrow\position\gen\await_arg
> :: test: await arg
> :: case: async => {}
## Input

`````js
async function f() {
  await async => {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function f() {\n  await async => {}\n}",
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
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 34
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 32780,
                                "start": 20,
                                "end": 34
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 34
                        }
                    ],
                    "multiline": true,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 34
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 34
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 34
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 39
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 37,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 41,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

