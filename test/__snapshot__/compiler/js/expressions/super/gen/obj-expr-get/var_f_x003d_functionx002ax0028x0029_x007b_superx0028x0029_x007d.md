# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\obj-expr-get
> :: test: obj-expr-get
> :: case: var f = function*() { super(); }
## Input

`````js
({ get x() { var f = function*() { super(); } } })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ get x() { var f = function*() { super(); } } })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "isSetter": false,
                                    "isGetter": true,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 2097397,
                                                    "declarationList": {
                                                        "kind": 244,
                                                        "declarations": [
                                                            {
                                                                "kind": 243,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 16,
                                                                    "end": 18
                                                                },
                                                                "exclamation": false,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 8915041,
                                                                    "name": null,
                                                                    "formalParameters": {
                                                                        "kind": 90,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 31,
                                                                        "end": 32
                                                                    },
                                                                    "contents": {
                                                                        "kind": 91,
                                                                        "functionStatementList": {
                                                                            "kind": 94,
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 2097233,
                                                                                    "expression": {
                                                                                        "kind": 66091,
                                                                                        "expression": {
                                                                                            "kind": 4260561,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 34,
                                                                                            "end": 40
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "start": 42,
                                                                                            "end": 42
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 65536,
                                                                                        "start": 40,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 34,
                                                                                    "end": 43
                                                                                }
                                                                            ],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 34,
                                                                            "end": 43
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 45
                                                                    },
                                                                    "typeParameters": null,
                                                                    "type": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 128,
                                                                    "start": 20,
                                                                    "end": 45
                                                                },
                                                                "flags": 16,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 0,
                                                                "end": 45
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 45
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 45
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 45
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 47
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 47
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 49
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 50
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 50
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 50
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

