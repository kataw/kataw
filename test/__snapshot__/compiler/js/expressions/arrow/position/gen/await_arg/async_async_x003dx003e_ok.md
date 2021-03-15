# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\await_arg
> :: test: await arg
> :: case: async async => ok
## Input

`````js
async function f() {
  await async async => ok
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function f() {\n  await async async => ok\n}",
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
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 83976,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 81929,
                                    "elements": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 40,
                                            "end": 40
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 46
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 46
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 46
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 48
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

