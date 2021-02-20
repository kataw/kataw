# Kataw parser test case

## Input

`````js
class ViewTokensChangedEvent {
  public readonly ranges: {
    /**
     * Start line number of range
     */
    readonly fromLineNumber: number;
  }[];
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "class ViewTokensChangedEvent {\n  public readonly ranges: {\n    /**\n     * Start line number of range\n     */\n    readonly fromLineNumber: number;\n  }[];\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "ViewTokensChangedEvent",
                    "rawText": "ViewTokensChangedEvent",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 28
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
                                "text": "ranges",
                                "rawText": "ranges",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 48,
                                "end": 55
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 7,
                                "elementType": {
                                    "kind": 230,
                                    "objectTypeMembers": {
                                        "kind": 169,
                                        "members": [
                                            {
                                                "kind": 188,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "fromLineNumber",
                                                    "rawText": "fromLineNumber",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 121,
                                                    "end": 136
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
                                                    "start": 137,
                                                    "end": 144
                                                },
                                                "isStatic": true,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 58,
                                                "end": 145
                                            }
                                        ],
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 58,
                                        "end": 149
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 56,
                                    "end": 149
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 56,
                                "end": 152
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 30,
                                "end": 39
                            },
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 30,
                            "end": 152
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 30,
                    "end": 154
                },
                "decorators": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 154
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 154
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
    "end": 154
}
```

### Printed


```javascript

class ViewTokensChangedEvent {
    public readonly ranges: {
        fromLineNumber: number;
    }[];
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

