# Kataw parser test case

## Input

`````js
({ident: [foo, bar].join("")}) => x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ident: [foo, bar].join(\"\")}) => x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67592,
                    "arrowParameters": {
                        "kind": 65545,
                        "typeParameters": {
                            "kind": 233,
                            "typeParameterList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 0
                        },
                        "elements": [
                            {
                                "kind": 89,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 33554598,
                                    "propertyList": {
                                        "kind": 33,
                                        "properties": [
                                            {
                                                "kind": 134217756,
                                                "left": {
                                                    "kind": 4325406,
                                                    "text": "ident",
                                                    "rawText": "ident",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 2,
                                                    "end": 7
                                                },
                                                "right": {
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 74424,
                                                        "member": {
                                                            "kind": 67207686,
                                                            "elementList": {
                                                                "kind": 65605,
                                                                "elements": [
                                                                    {
                                                                        "kind": 196712,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 10,
                                                                        "end": 13
                                                                    },
                                                                    {
                                                                        "kind": 196712,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 14,
                                                                        "end": 18
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 10,
                                                                "end": 18
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 8,
                                                            "end": 19
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "join",
                                                            "rawText": "join",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 20,
                                                            "end": 24
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 67279,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 25,
                                                                "end": 27
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 27,
                                                        "end": 28
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 24,
                                                    "end": 28
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 2,
                                                "end": 28
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 2,
                                        "end": 28
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1,
                                    "end": 29
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
                                "start": 0,
                                "end": 30
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 30
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 33,
                        "end": 35
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 35
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
    "end": 35
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

