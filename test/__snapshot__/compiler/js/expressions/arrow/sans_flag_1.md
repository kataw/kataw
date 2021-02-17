# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
_ => _
/foo/
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "_ => _\n/foo/",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67592,
                    "arrowParameters": {
                        "kind": 65545,
                        "typeParameters": null,
                        "elements": [
                            {
                                "kind": 89,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "_",
                                    "rawText": "_",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 0,
                                    "end": 1
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
                                "start": 1,
                                "end": 1
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 1
                    },
                    "contents": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "_",
                                "rawText": "_",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 4,
                                "end": 6
                            },
                            "operator": "/",
                            "right": {
                                "kind": 196712,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 11
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 4,
                            "end": 11
                        },
                        "operator": "/",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 65538,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 4,
                        "end": 12
                    },
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 12
            }
        ],
        "transformFlags": 0,
        "flags": 65538,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 12
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 11,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

