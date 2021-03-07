# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\obj-expr-get
> :: test: obj-expr-get
> :: case: new super;
## Input

`````js
({ get x() { new super; } })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ get x() { new super; } })",
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
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 66204,
                                                        "expression": {
                                                            "kind": 66232,
                                                            "member": {
                                                                "kind": 4260561,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 16,
                                                                "end": 22
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 2,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 22,
                                                                "end": 22
                                                            },
                                                            "flags": 16,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 2,
                                                            "end": 22
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": null,
                                                        "flags": 12,
                                                        "intersects": false,
                                                        "transformFlags": 32,
                                                        "start": 2,
                                                        "end": 22
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 23
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 25
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 25
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 27
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 28
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 22,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

