# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
'use strict'; await => async.await[async / ((async) => foo.bar)]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; await => async.await[async / ((async) => foo.bar)]",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "parameters": {
                    "kind": 4325406,
                    "text": "await",
                    "rawText": "await",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
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
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 34,
                        "period": {
                            "kind": 255,
                            "pos": 28,
                            "end": 29
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
                            "start": 35,
                            "end": 40
                        },
                        "operator": "/",
                        "right": {
                            "kind": 66224,
                            "expression": {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
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
                                                "start": 45,
                                                "end": 50
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
                                            "start": 44,
                                            "end": 51
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 51
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
                                        "start": 54,
                                        "end": 58
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 62
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 62,
                                    "period": {
                                        "kind": 255,
                                        "pos": 58,
                                        "end": 59
                                    }
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 62
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 63
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 63
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 64
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 64
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 64
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
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

