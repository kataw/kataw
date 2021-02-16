# Kataw parser test case

## Input

`````js
class A {
    @configurable(true) static prop1;

    @configurable(false)
    static prop2;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A {\n    @configurable(true) static prop1;\n\n    @configurable(false)\n    static prop2;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "prop1",
                                "rawText": "prop1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 40,
                                "end": 46
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": {
                                "kind": 64,
                                "decoratorList": [
                                    {
                                        "kind": 63,
                                        "expression": {
                                            "kind": 66091,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "configurable",
                                                "rawText": "configurable",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 15,
                                                "end": 27
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 4260391,
                                                        "text": true,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 28,
                                                        "end": 32
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "intersects": false,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 27,
                                            "end": 33
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 15,
                                        "end": 33
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 15,
                                "end": 33
                            },
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 9,
                            "end": 47
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "prop2",
                                "rawText": "prop2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 84,
                                "end": 90
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": {
                                "kind": 64,
                                "decoratorList": [
                                    {
                                        "kind": 63,
                                        "expression": {
                                            "kind": 66091,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "configurable",
                                                "rawText": "configurable",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 54,
                                                "end": 66
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 4260391,
                                                        "text": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 67,
                                                        "end": 72
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 16384,
                                                "intersects": false,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 72,
                                                "end": 73
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 66,
                                            "end": 73
                                        },
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 54,
                                        "end": 73
                                    }
                                ],
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 54,
                                "end": 73
                            },
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 47,
                            "end": 91
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 93
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 93
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 93
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
    "end": 93
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

