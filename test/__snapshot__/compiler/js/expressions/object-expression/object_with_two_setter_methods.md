# Kataw parser test case

## Input

`````js
x({set [foo](b){}, set [bar](d){}});
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x({set [foo](b){}, set [bar](d){}});",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 1
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 55,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 8,
                                                    "end": 11
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 131073,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 6,
                                                "end": 12
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 89,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 13,
                                                            "end": 14
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
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 13,
                                                        "end": 14
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "isSetter": true,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 16,
                                                    "end": 16
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 12,
                                            "end": 17
                                        },
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 55,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 24,
                                                    "end": 27
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 131073,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 89,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "d",
                                                            "rawText": "d",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 29,
                                                            "end": 30
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
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 29,
                                                        "end": 30
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "isSetter": true,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 28,
                                            "end": 33
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 3,
                                    "end": 33
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 2,
                                "end": 34
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 3,
                        "end": 35
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 36
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
