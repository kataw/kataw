# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/super/gen/obj-expr-get
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
    "kind": 2243,
    "source": "({ get x() { var f = function*() { super(); } } })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
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
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
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
                                                            "kind": 16627,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 0,
                                                                "symbol": null,
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
                                                                    "symbol": null,
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
                                                                                    "kind": 1073807915,
                                                                                    "expression": {
                                                                                        "kind": 4260561,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
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
                                                                                        "symbol": null,
                                                                                        "start": 42,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 65536,
                                                                                    "start": 40,
                                                                                    "end": 42
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 34,
                                                                                "end": 43
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 34,
                                                                        "end": 43
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 45
                                                                },
                                                                "typeParameters": null,
                                                                "type": null,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 128,
                                                                "start": 20,
                                                                "end": 45
                                                            },
                                                            "flags": 16,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 0,
                                                            "end": 45
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 45
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 45
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 45
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 47
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 47
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 49
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

