# Kataw parser test case

## Input

`````js
interface I<T extends object = { x: number }> {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I<T extends object = { x: number }> {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 12,
                                "end": 13
                            },
                            "constraint": {
                                "kind": 4194471,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 21,
                                "end": 28
                            },
                            "defaultType": {
                                "kind": 230,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 188,
                                            "name": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 161,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 35,
                                                "end": 42
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 32,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 32,
                                    "end": 44
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 30,
                                "end": 44
                            },
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 44
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 44
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 47,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 48
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 48
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

