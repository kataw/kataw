# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\await_arg
> :: test: await arg
> :: case: async x => {}
## Input

`````js
async function f() {
  await async x => {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async function f() {\n  await async x => {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 1312785,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
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
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 32780,
                                    "start": 20,
                                    "end": 34
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 34
                            },
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 67592,
                                    "typeParameters": null,
                                    "arrowParameters": {
                                        "kind": 65545,
                                        "elements": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 4325406,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 36,
                                                "end": 36
                                            }
                                        ],
                                        "type": null,
                                        "accessModifier": null,
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 41
                                        },
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 42
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 42
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 42
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 44
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 260,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 35,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

