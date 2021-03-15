# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
await => async.await[async / ((async) => foo.bar)]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "await => async.await[async / ((async) => foo.bar)]",
    "filename": "",
    "statements": [
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
                                "text": "await",
                                "rawText": "await",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 5
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
                            "start": 5,
                            "end": 5
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "contents": {
                    "kind": 67174980,
                    "member": {
                        "kind": 67175096,
                        "member": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 20,
                        "period": {
                            "kind": 255,
                            "pos": 14,
                            "end": 15
                        }
                    },
                    "expression": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 26
                        },
                        "operator": "/",
                        "right": {
                            "kind": 66224,
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
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 36
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
                                            "start": 30,
                                            "end": 37
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 37
                                },
                                "contents": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 196712,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 44
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 48,
                                    "period": {
                                        "kind": 255,
                                        "pos": 44,
                                        "end": 45
                                    }
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 48
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 49
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 49
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 50
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 50
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

